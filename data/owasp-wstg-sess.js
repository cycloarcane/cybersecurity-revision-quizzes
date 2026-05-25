var pool = [
  {
    "c": "WSTG-SESS-01: Session Management Schema",
    "q": "What is the primary requirement for a secure session identifier (Session ID)?",
    "a": "It must be cryptographically strong, long, and unpredictable.",
    "d": ["It must contain the user's username and their current IP address.", "It must be a sequential number that is easy for the server to track.", "It must be stored in the database in plain text for easy retrieval."],
    "e": "WSTG-SESS-01 emphasizes that session IDs must have enough entropy to prevent an attacker from guessing or brute-forcing a valid session."
  },
  {
    "c": "WSTG-SESS-01: Session Management Schema",
    "q": "Why is it risky to transport session IDs in the URL (e.g., ;jsessionid=...)?",
    "a": "The ID will be leaked in Referer headers, browser history, and server logs.",
    "d": ["The ID will be automatically encrypted by the browser, making it unusable.", "The ID will cause the page to load slower due to URL length limits.", "The ID will prevent the user from bookmarking the page."],
    "e": "URL-based session IDs are highly visible and often persist in various logs and history files, increasing the risk of session hijacking."
  },
  {
    "c": "WSTG-SESS-01: Session Management Schema",
    "q": "What is the recommended method for generating a high-entropy session ID?",
    "a": "Using a cryptographically secure pseudo-random number generator (CSPRNG).",
    "d": ["Using the current system time in milliseconds.", "Hashing the user's password with a static salt.", "Using the 'Math.random()' function in JavaScript."],
    "e": "Standard random functions (like Math.random) are often predictable. Security-sensitive values must use CSPRNGs (e.g., /dev/urandom or CryptGenRandom)."
  },
  {
    "c": "WSTG-SESS-02: Cookies Attributes",
    "q": "What does the 'HttpOnly' flag on a cookie prevent?",
    "a": "Access to the cookie via client-side scripts (e.g., document.cookie).",
    "d": ["The cookie from being sent over an unencrypted HTTP connection.", "The cookie from being stored on the user's hard drive.", "The cookie from being sent to a different domain (cross-site)."],
    "e": "HttpOnly is a critical defense against session hijacking via Cross-Site Scripting (XSS). If an attacker finds an XSS, they still cannot steal the session cookie."
  },
  {
    "c": "WSTG-SESS-02: Cookies Attributes",
    "q": "What is the purpose of the 'Secure' flag on a cookie?",
    "a": "It ensures the cookie is only transmitted over encrypted (HTTPS) connections.",
    "d": ["It encrypts the content of the cookie using a server-side key.", "It prevents the cookie from being deleted by the user.", "It requires the user to enter a PIN before the cookie is sent."],
    "e": "The 'Secure' flag prevents 'man-in-the-middle' attackers from sniffing the session token if the user accidentally visits the site via http://."
  },
  {
    "c": "WSTG-SESS-02: Cookies Attributes",
    "q": "Which 'SameSite' attribute value provides the strongest protection against CSRF by preventing the cookie from being sent on any cross-site request?",
    "a": "SameSite=Strict",
    "d": ["SameSite=Lax", "SameSite=None", "SameSite=Default"],
    "e": "SameSite=Strict ensures the cookie is only sent if the request originates from the same site where the cookie was set, effectively blocking CSRF."
  },
  {
    "c": "WSTG-SESS-02: Cookies Attributes",
    "q": "Why should the 'Domain' attribute of a session cookie be as narrow as possible (e.g., NOT set to '.example.com')?",
    "a": "To prevent other subdomains from accessing and potentially stealing the session cookie.",
    "d": ["To reduce the size of the HTTP headers and improve performance.", "To ensure the cookie is compatible with older versions of the Safari browser.", "To prevent the cookie from being indexed by search engine crawlers."],
    "e": "If a cookie is scoped to '.example.com', any compromised subdomain (like 'dev.example.com') can read the session cookie of the main site."
  },
  {
    "c": "WSTG-SESS-03: Session Fixation",
    "q": "What is the core vulnerability in a 'Session Fixation' attack?",
    "a": "The application maintains the same session ID before and after a user authenticates.",
    "d": ["The application allows multiple users to share the same account simultaneously.", "The application does not use a logout button on the main dashboard.", "The application stores session data in a public folder on the web server."],
    "e": "WSTG-SESS-03 explains that if the ID doesn't change upon login, an attacker can provide a known ID to a victim and then 'hijack' it once the victim logs in."
  },
  {
    "c": "WSTG-SESS-03: Session Fixation",
    "q": "What is the primary remediation for Session Fixation?",
    "a": "Invalidate the old session ID and issue a new one immediately after successful authentication.",
    "d": ["Require the user to change their password every time they log in.", "Use a CAPTCHA on the login page to prevent automated attacks.", "IP-bind the session ID to the user's current network address."],
    "e": "Renewing the session ID (session regeneration) is the industry-standard defense against fixation attacks."
  },
  {
    "c": "WSTG-SESS-03: Session Fixation",
    "q": "An attacker sends a link: 'http://site.com/?PHPSESSID=1234'. If the user logs in and the ID remains '1234', this is:",
    "a": "Session Fixation",
    "d": ["Session Hijacking", "Cross-Site Request Forgery", "SQL Injection"],
    "e": "The attacker 'fixes' the session ID for the victim. Since the ID is known to the attacker, they gain access to the account once the victim authenticates."
  },
  {
    "c": "WSTG-SESS-04: Exposed Session Variables",
    "q": "Which of the following is an example of an 'Exposed Session Variable'?",
    "a": "The session ID being visible in the server's access logs.",
    "d": ["The user's encrypted password being stored in the database.", "The application's source code being available on a public GitHub repository.", "The server's internal IP address being revealed in a ping response."],
    "e": "WSTG-SESS-04 tests if sensitive session identifiers or data are leaked via URLs, logs, or error messages."
  },
  {
    "c": "WSTG-SESS-04: Exposed Session Variables",
    "q": "Why is it dangerous to store sensitive data like roles or 'is_admin' directly in a client-side session cookie without integrity protection?",
    "a": "A user can modify the cookie to escalate their own privileges.",
    "d": ["The cookie will exceed the 4KB size limit imposed by most browsers.", "The data will be automatically deleted by the browser's privacy settings.", "The server will be unable to read the data if the user is using a mobile device."],
    "e": "Client-side session data must be signed (e.g., using a HMAC) or encrypted to prevent tampering. Ideally, sensitive state should be kept on the server."
  },
  {
    "c": "WSTG-SESS-04: Exposed Session Variables",
    "q": "A tester sees 'user_id=5' in a cookie. They change it to 'user_id=1' and are logged in as the admin. This is a failure in:",
    "a": "Session integrity and authorization.",
    "d": ["Transport layer security.", "Input validation.", "Error handling."],
    "e": "The application is trusting user-controlled session variables to determine identity and permissions without verifying them."
  },
  {
    "c": "WSTG-SESS-05: Cross Site Request Forgery (CSRF)",
    "q": "What is the fundamental mechanism of a CSRF attack?",
    "a": "Tricking a user's browser into sending an unwanted request to a site where they are currently authenticated.",
    "d": ["Injecting a script into a webpage to steal the user's session cookie.", "Brute-forcing the user's password using a list of common words.", "Intercepting the communication between the user and the server via a fake Wi-Fi hotspot."],
    "e": "CSRF exploits the fact that browsers automatically include ambient credentials (like cookies) in requests to a domain, regardless of where the request originated."
  },
  {
    "c": "WSTG-SESS-05: Cross Site Request Forgery (CSRF)",
    "q": "Which of the following is a standard defense against CSRF?",
    "a": "Anti-CSRF tokens (Synchronizer Token Pattern).",
    "d": ["Enforcing a strong password policy.", "Using 'HttpOnly' cookies for all session identifiers.", "Adding a 'Strict-Transport-Security' (HSTS) header."],
    "e": "Anti-CSRF tokens are unique, unpredictable values that the server requires in state-changing requests. An attacker cannot guess this token and thus cannot forge a valid request."
  },
  {
    "c": "WSTG-SESS-05: Cross Site Request Forgery (CSRF)",
    "q": "Why is the 'Referer' header check considered a weak defense against CSRF?",
    "a": "It can be spoofed, omitted by some browsers, or stripped by privacy tools.",
    "d": ["It only works for POST requests and not for GET requests.", "It requires the use of a third-party certificate authority.", "It significantly increases the server's memory usage."],
    "e": "While checking the 'Referer' or 'Origin' header is a useful 'defense-in-depth', it is not as robust as per-session or per-request tokens."
  },
  {
    "c": "WSTG-SESS-06: Logout Functionality",
    "q": "What must happen on the server when a user clicks 'Logout'?",
    "a": "The session must be explicitly invalidated and destroyed on the server side.",
    "d": ["The user's browser must be closed automatically.", "The 'last_login' timestamp in the database must be updated.", "The user's local cache and cookies must be cleared by the server."],
    "e": "WSTG-SESS-06 states that just 'clearing' the cookie on the client is insufficient. The session must be killed on the server to prevent an attacker from reusing the old token."
  },
  {
    "c": "WSTG-SESS-06: Logout Functionality",
    "q": "Why is it a security best-practice to provide a logout link on every page?",
    "a": "To encourage users to end their sessions properly, especially on shared computers.",
    "d": ["To allow the server to reclaim memory more frequently.", "To comply with the 'Right to be Forgotten' under the GDPR.", "To prevent the user from accidentally clicking on malicious links."],
    "e": "Prominent logout functionality reduces the window of opportunity for an attacker to hijack an abandoned but still active session."
  },
  {
    "c": "WSTG-SESS-07: Session Timeout",
    "q": "What is 'Idle Timeout' in session management?",
    "a": "The amount of time a session remains valid without any user activity.",
    "d": ["The time it takes for a user to type their username and password.", "The maximum duration a session can exist, regardless of activity.", "The delay between a failed login attempt and the next allowed attempt."],
    "e": "Idle timeouts (e.g., 15 minutes) ensure that if a user forgets to log out, the session will eventually expire on its own."
  },
  {
    "c": "WSTG-SESS-07: Session Timeout",
    "q": "What is an 'Absolute Timeout' and why is it useful?",
    "a": "A hard limit on the session's total lifespan (e.g., 24 hours), which mitigates long-term session hijacking.",
    "d": ["A timeout that occurs even if the user is still actively using the application.", "A timeout that is enforced by the browser's operating system settings.", "A timeout that only applies to administrative users."],
    "e": "Absolute timeouts force a re-authentication after a set period, ensuring that even a hijacked 'active' session will eventually be terminated."
  },
  {
    "c": "WSTG-SESS-08: Session Puzzling",
    "q": "What is 'Session Puzzling' (also known as Session Variable Overloading)?",
    "a": "Using the same session variable for multiple purposes, allowing an attacker to overwrite it with a different value.",
    "d": ["A technique where an attacker tries to guess the session ID by solving a series of puzzles.", "The application requiring the user to solve a CAPTCHA before every sensitive action.", "The server storing session data in a fragmented way across multiple databases."],
    "e": "WSTG-SESS-08 describes how an attacker might use one part of an app (like a public profile) to set a session variable that is then used incorrectly by another part (like a checkout page)."
  },
  {
    "c": "WSTG-SESS-08: Session Puzzling",
    "q": "How can Session Puzzling be used to bypass authentication?",
    "a": "By reaching a page that sets 'authenticated=true' in the session (e.g., a 'Forgot Password' success page) and then navigating to a protected area.",
    "d": ["By overwhelming the session storage and causing a buffer overflow.", "By using a session ID from a different application on the same server.", "By intercepting the session token using a man-in-the-middle attack."],
    "e": "If the application uses a generic 'is_logged_in' variable for different flows (normal login vs. password reset), an attacker might exploit the logic to gain access."
  },
  {
    "c": "WSTG-SESS-09: JSON Web Token (JWT)",
    "q": "In a JWT, what is the purpose of the 'Signature' part?",
    "a": "To verify that the sender of the JWT is who it says it is and to ensure the message wasn't changed along the way.",
    "d": ["To encrypt the payload so that only the client can read it.", "To store the user's digital signature for legal purposes.", "To compress the token so it can be sent in a smaller HTTP header."],
    "e": "WSTG-SESS-09 assesses JWT security. The signature is created using the header, payload, and a secret/private key, allowing the server to detect tampering."
  },
  {
    "c": "WSTG-SESS-09: JSON Web Token (JWT)",
    "q": "What is the risk of using the 'alg: none' header in a JWT?",
    "a": "It tells the server to skip signature verification, allowing anyone to forge a token.",
    "d": ["It makes the token incompatible with modern web browsers.", "It requires the server to use a very expensive hashing algorithm.", "It forces the token to be stored in a 'HttpOnly' cookie."],
    "e": "Historically, many JWT libraries were vulnerable because they would trust the 'alg' header. If an attacker sets it to 'none', they can modify the payload (e.g., change the username) and the server might accept it as valid."
  },
  {
    "c": "WSTG-SESS-09: JSON Web Token (JWT)",
    "q": "Where is the most secure place to store a JWT on the client side to prevent XSS-based theft?",
    "a": "In a 'HttpOnly' and 'Secure' cookie.",
    "d": ["In the browser's 'localStorage'.", "In the browser's 'sessionStorage'.", "In a global JavaScript variable."],
    "e": "Just like traditional session IDs, JWTs are sensitive tokens. Storing them in localStorage makes them vulnerable to XSS. Cookies with 'HttpOnly' provide the best protection."
  }
];
var MASTER_POOL = pool;

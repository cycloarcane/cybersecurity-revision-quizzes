var pool = [
  {
    "c": "WSTG-AUTH-01: Credentials Transported over Encrypted Channel",
    "q": "Why is it critical to transmit authentication credentials over an encrypted channel (TLS)?",
    "a": "To prevent network attackers from intercepting cleartext passwords via sniffing.",
    "d": ["To speed up the login process for the end user.", "To comply with search engine optimisation guidelines.", "To reduce the server's CPU load during authentication."],
    "e": "WSTG-AUTH-01 focuses on ensuring that usernames, passwords, and tokens are never sent over unencrypted HTTP, where they can be captured by anyone on the network path."
  },
  {
    "c": "WSTG-AUTH-02: Test for Default Credentials",
    "q": "Which of the following is a common target for testing default credentials?",
    "a": "Application management consoles, database systems, and network devices.",
    "d": ["The application's public-facing marketing pages.", "The browser's local storage and cache files.", "The user's personal email account settings."],
    "e": "WSTG-AUTH-02 involves checking for well-known defaults (e.g., admin/password) in the application and its underlying infrastructure."
  },
  {
    "c": "WSTG-AUTH-03: Test for Weak Lockout Mechanism",
    "q": "What is the primary purpose of an account lockout mechanism?",
    "a": "To mitigate brute-force and dictionary attacks against user passwords.",
    "d": ["To prevent users from logging in from multiple devices simultaneously.", "To force users to change their passwords on a regular basis.", "To save server resources by disconnecting inactive user sessions."],
    "e": "WSTG-AUTH-03 assesses if the application temporarily disables an account after a certain number of failed attempts, hindering automated guessing attacks."
  },
  {
    "c": "WSTG-AUTH-03: Test for Weak Lockout Mechanism",
    "q": "What is a 'CAPTCHA-based' lockout and how does it differ from a hard lockout?",
    "a": "It requires the user to solve a puzzle after failed attempts instead of completely blocking access.",
    "d": ["It automatically changes the user's password to a random string.", "It sends a one-time password to the user's registered mobile phone.", "It only works for users who are logging in from a new IP address."],
    "e": "CAPTCHAs are often used as a 'soft' lockout to differentiate between a human making a mistake and an automated brute-force bot."
  },
  {
    "c": "WSTG-AUTH-04: Test for Bypassing Authentication Schema",
    "q": "What is 'Forced Browsing' in the context of authentication bypass?",
    "a": "Directly accessing a protected URL without authenticating, hoping the server fails to check the session.",
    "d": ["Automating the browser to click all available links on a page.", "Using a proxy to intercept and modify the authentication request.", "Performing a denial of service attack on the authentication server."],
    "e": "WSTG-AUTH-04 involves trying to reach internal pages (e.g., /dashboard.php) directly. If the application only checks for authentication on the login page, this will succeed."
  },
  {
    "c": "WSTG-AUTH-04: Test for Bypassing Authentication Schema",
    "q": "How can 'Parameter Manipulation' lead to an authentication bypass?",
    "a": "By changing a value like 'authenticated=false' to 'true' in the request.",
    "d": ["By increasing the length of the password string to trigger a buffer overflow.", "By encoding the username using the Base64 algorithm.", "By adding a custom 'User-Agent' header to the HTTP request."],
    "e": "If the application relies on client-side parameters to determine the authentication state, an attacker can easily forge these values to gain access."
  },
  {
    "c": "WSTG-AUTH-05: Test for Vulnerable Remember Password",
    "q": "What is the security risk of an insecurely implemented 'Remember Me' feature?",
    "a": "The feature may use a predictable or long-lived token that can be stolen and reused by an attacker.",
    "d": ["The feature might cause the user to forget their actual password over time.", "The feature is not supported by older versions of the Internet Explorer browser.", "The feature requires the use of a third-party cookie which is blocked by most browsers."],
    "e": "WSTG-AUTH-05 tests if 'remember-me' tokens are cryptographically strong, tied to the specific device, and properly invalidated when the user logs out."
  },
  {
    "c": "WSTG-AUTH-06: Test for Browser Cache Weakness",
    "q": "Which HTTP headers should be used to prevent sensitive authenticated pages from being cached by the browser?",
    "a": "Cache-Control: no-store and Pragma: no-cache",
    "d": ["Content-Type: text/html and Content-Length: 1024", "Server: Apache and X-Powered-By: PHP", "Set-Cookie: sessionid=123 and Secure"],
    "e": "WSTG-AUTH-06 ensures that sensitive data (like bank statements or profiles) isn't saved to the disk of a shared computer, where it could be retrieved via the 'Back' button."
  },
  {
    "c": "WSTG-AUTH-07: Test for Weak Password Policy",
    "q": "What are the key elements of a strong password policy according to the WSTG?",
    "a": "Minimum length, complexity, and checks against common/breached passwords.",
    "d": ["Maximum length of eight characters and no special characters allowed.", "Requiring the user to change their password every seven days.", "Allowing the user to use their username as their password for convenience."],
    "e": "WSTG-AUTH-07 evaluates if the application enforces sufficient entropy and rejects easily guessable passwords found in dictionary lists."
  },
  {
    "c": "WSTG-AUTH-08: Test for Weak Security Question Answer",
    "q": "Why are security questions (e.g., 'Mother's maiden name') considered a weak authentication factor?",
    "a": "The answers are often easily discoverable via social media or public records.",
    "d": ["They are too difficult for the average user to remember.", "They require the application to store the answers in plain text.", "They are only effective if the user types the answer in all capital letters."],
    "e": "WSTG-AUTH-08 highlights that 'knowledge-based' answers are often static and publicly available, making them easy for an attacker to guess or research."
  },
  {
    "c": "WSTG-AUTH-09: Test for Weak Password Change or Reset Functionalities",
    "q": "What is a critical requirement for a secure password reset token?",
    "a": "It must be cryptographically random, time-limited, and single-use.",
    "d": ["It must be based on a hash of the user's current password.", "It must be at least 128 characters long and contain only numbers.", "It must be sent to the user's registered mobile phone via SMS only."],
    "e": "WSTG-AUTH-09 tests if reset tokens are predictable. If an attacker can guess a token, they can take over any account without knowing the current password."
  },
  {
    "c": "WSTG-AUTH-09: Test for Weak Password Change or Reset Functionalities",
    "q": "Why should an application require the 'current password' before allowing a user to change it?",
    "a": "To prevent an attacker with a hijacked session from permanently taking over the account.",
    "d": ["To ensure the user still remembers their old password for backup purposes.", "To allow the server to re-hash the old password using a newer algorithm.", "To comply with the database's foreign key constraints on the 'users' table."],
    "e": "If a session is hijacked (via XSS or a shared computer), the attacker could change the password and lock out the legitimate user if the old password is not required."
  },
  {
    "c": "WSTG-AUTH-10: Test for Weaker Authentication in Alternative Channel",
    "q": "What is an 'Alternative Channel' in the context of authentication testing?",
    "a": "Mobile apps, APIs, call centres, or any other way to access the application besides the main website.",
    "d": ["Using a different web browser like Safari instead of Google Chrome.", "Logging in during the night instead of during standard business hours.", "Connecting to the application via a VPN instead of the public internet."],
    "e": "WSTG-AUTH-10 checks if security controls are consistent. Often, a mobile API might have weaker lockout policies or allow simpler passwords than the web interface."
  },
  {
    "c": "WSTG-AUTH-01: Credentials Transported over Encrypted Channel",
    "q": "Which tool can be used to verify if a login form is submitting data over an unencrypted (HTTP) connection?",
    "a": "OWASP ZAP or Burp Suite",
    "d": ["Nmap", "Sqlmap", "John the Ripper"],
    "e": "Interception proxies allow a tester to inspect the 'Scheme' (http vs https) of the outgoing POST request to confirm if encryption is being used."
  },
  {
    "c": "WSTG-AUTH-02: Test for Default Credentials",
    "q": "If a tester finds a '/manager/html' path on a Tomcat server, which default credentials should they try?",
    "a": "tomcat/s3cret",
    "d": ["admin/admin", "root/root", "guest/guest"],
    "e": "Many platforms have specific default credentials. Tomcat's manager app has historically used 'tomcat/s3cret' or 'admin/password' in default configurations."
  },
  {
    "c": "WSTG-AUTH-03: Test for Weak Lockout Mechanism",
    "q": "What is 'Account Lockout DoS'?",
    "a": "An attacker intentionally locking out legitimate users by repeatedly failing login attempts with their usernames.",
    "d": ["The authentication server crashing due to too many simultaneous login requests.", "A user forgetting their password and being unable to log in for several days.", "The database table storing user accounts becoming corrupted and inaccessible."],
    "e": "A strict lockout policy without a CAPTCHA or secondary verification can be abused by an attacker to prevent valid users from accessing their accounts."
  },
  {
    "c": "WSTG-AUTH-04: Test for Bypassing Authentication Schema",
    "q": "What is 'Session Fixation' and how does it relate to authentication?",
    "a": "An attacker forcing a known session ID on a user before they log in, then hijacking the session after authentication.",
    "d": ["The application requiring the user to log in again every ten minutes.", "The session token being stored in a 'HttpOnly' cookie for better security.", "The application generating a new session ID every time a page is refreshed."],
    "e": "To prevent session fixation, the application must issue a *new* session ID immediately upon a successful login."
  },
  {
    "c": "WSTG-AUTH-07: Test for Weak Password Policy",
    "q": "How does 'Password Spraying' differ from traditional brute-force attacks?",
    "a": "It tries a few common passwords against a large number of usernames to avoid lockouts.",
    "d": ["It uses a very long list of passwords against a single high-value target account.", "It attempts to crack the password hashes directly from the stolen database file.", "It targets the administrator's account exclusively using a dictionary attack."],
    "e": "Spraying is effective because it stays under the lockout threshold for any single account (e.g., trying 'Password123' once for every user in the company)."
  },
  {
    "c": "WSTG-AUTH-05: Test for Vulnerable Remember Password",
    "q": "What is the recommended storage for a 'Remember Me' token on the client side?",
    "a": "A persistent cookie with the 'HttpOnly' and 'Secure' attributes set.",
    "d": ["The browser's localStorage which is easily accessible via JavaScript.", "A plain text file stored in the user's 'Documents' folder.", "The 'window.name' property which persists across different page loads."],
    "e": "Using 'HttpOnly' prevents the token from being stolen via XSS, while 'Secure' ensures it is only transmitted over encrypted connections."
  },
  {
    "c": "WSTG-AUTH-08: Test for Weak Security Question Answer",
    "q": "Which remediation makes security questions more secure?",
    "a": "Allowing users to write their own questions and treating the answers as secondary passwords.",
    "d": ["Providing a dropdown list of ten standard questions for the user to choose from.", "Enforcing a maximum length of five characters for the security answer.", "Displaying the first and last letters of the answer to help the user remember."],
    "e": "Custom questions are harder to guess than standard ones, and the answers should be hashed and salted just like regular passwords."
  },
  {
    "c": "WSTG-AUTH-09: Test for Weak Password Change or Reset Functionalities",
    "q": "Why should password reset links be delivered via 'out-of-band' channels like email or SMS?",
    "a": "To ensure that only the person with access to that secondary account can reset the password.",
    "d": ["Because HTTP is too insecure to handle the transmission of reset tokens.", "Because it allows the application to track the user's geographic location.", "Because it is a requirement of the HTML5 specification for form submissions."],
    "e": "Delivery via a pre-registered out-of-band channel provides a basic form of identity verification during the reset process."
  },
  {
    "c": "WSTG-AUTH-10: Test for Weaker Authentication in Alternative Channel",
    "q": "A tester finds that the web app requires MFA, but the REST API accepts just a password. Which test does this fail?",
    "a": "WSTG-AUTH-10: Weaker Authentication in Alternative Channel",
    "d": ["WSTG-AUTH-01: Credentials Transported over Encrypted Channel", "WSTG-AUTH-04: Bypassing Authentication Schema", "WSTG-AUTH-07: Weak Password Policy"],
    "e": "The API is an alternative channel. If it has lower security requirements than the main channel, it creates a loophole for attackers."
  },
  {
    "c": "WSTG-AUTH-04: Test for Bypassing Authentication Schema",
    "q": "What is 'Credential Stuffing'?",
    "a": "Automated injection of username/password pairs from previous data breaches into a login form.",
    "d": ["Adding extra characters to a password to bypass a length restriction.", "Sending thousands of empty login requests to crash the authentication service.", "Intercepting a user's session token and replaying it to the server."],
    "e": "Credential stuffing exploits the fact that many users reuse the same password across multiple different websites and services."
  },
  {
    "c": "WSTG-AUTH-01: Credentials Transported over Encrypted Channel",
    "q": "What is the security risk of a 'Mixed Content' login page (HTTPS page with an HTTP form action)?",
    "a": "The credentials will be submitted in cleartext, even though the page itself looks secure.",
    "d": ["The browser will refuse to load the login page entirely.", "The user's session cookie will be automatically deleted by the browser.", "The server will be unable to verify the user's password hash correctly."],
    "e": "Users often look for the 'lock' icon on the page. If the form action is 'http://...', the actual submission is insecure, which is a deceptive and dangerous configuration."
  },
  {
    "c": "WSTG-AUTH-07: Test for Weak Password Policy",
    "q": "Why is 'Password Hint' functionality often considered a security risk?",
    "a": "It often reveals the password itself or significantly narrows down the search space for an attacker.",
    "d": ["It takes up too much space on the login screen and looks unprofessional.", "It requires the application to store the password in a reversible format.", "It is only useful for users who have very short and simple passwords."],
    "e": "Hints are often too revealing. A secure application should offer a proper password reset flow rather than providing clues to the current password."
  }
];
var MASTER_POOL = pool;

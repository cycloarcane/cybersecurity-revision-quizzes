var pool = [
  {
    "c": "WSTG-BUSL-01: Business Logic Data Validation",
    "q": "An e-commerce application allows a user to change the 'quantity' parameter of an item to a negative number, resulting in a negative total price that reduces the overall cart value. This is an example of what?",
    "a": "Business Logic vulnerability due to insufficient data validation.",
    "d": ["SQL Injection in the price field.", "Cross-Site Request Forgery.", "Insecure Direct Object Reference."],
    "e": "Business logic flaws often involve validly formatted data (like an integer) that is used in an invalid context (like a negative quantity for a purchase)."
  },
  {
    "c": "WSTG-BUSL-02: Ability to Forge Requests",
    "q": "In a multi-step password reset process, an attacker skips the 'verify security question' step and directly navigates to the 'set new password' URL. Which WSTG category does this fall under?",
    "a": "WSTG-BUSL-02: Ability to Forge Requests / Workflow Circumvention.",
    "d": ["WSTG-AUTH-01: Password Quality.", "WSTG-SESS-01: Session Management Schema.", "WSTG-INPV-01: Cross Site Scripting."],
    "e": "Workflow circumvention occurs when an attacker can bypass mandatory steps in a process by directly accessing later stages."
  },
  {
    "c": "WSTG-BUSL-03: Integrity Checks",
    "q": "How can an attacker exploit a 'price tampering' vulnerability in a web application that stores the item price in a hidden HTML field?",
    "a": "By intercepting the POST request and modifying the price value before it reaches the server.",
    "d": ["By using a specialized browser extension to view the hidden field.", "By performing a DDoS attack on the payment gateway.", "By brute-forcing the administrator's password."],
    "e": "Applications should never trust client-side data for sensitive information like prices; these should be retrieved from a secure server-side database."
  },
  {
    "c": "WSTG-BUSL-04: Process Timing",
    "q": "What is the security risk of a significant difference in response time between a successful login and an unsuccessful login?",
    "a": "It allows an attacker to enumerate valid usernames (Timing Attack).",
    "d": ["It causes the server to consume excessive memory.", "It prevents the use of multi-factor authentication.", "It is a requirement for implementing rate limiting."],
    "e": "If 'User Found' takes 500ms and 'User Not Found' takes 50ms, an attacker can determine which accounts exist without a successful login."
  },
  {
    "c": "WSTG-BUSL-05: Number of Retries",
    "q": "Which of the following is an effective mitigation against automated brute-force attacks on a login page?",
    "a": "Implementing an exponential backoff or account lockout after a set number of failed attempts.",
    "d": ["Increasing the password length requirement to 20 characters.", "Using a different port for the login service.", "Encrypting the username in the database."],
    "e": "Rate limiting and lockouts are essential business logic controls to prevent automated credential stuffing and brute-force attacks."
  },
  {
    "c": "WSTG-BUSL-06: Circumvention of Workflows",
    "q": "During testing of a 'Request for Quote' process, a tester finds that they can submit a request with a 'status' parameter set to 'Approved'. This is an example of:",
    "a": "Circumvention of Workflows / Parameter Tampering.",
    "d": ["SQL Injection.", "Server-Side Request Forgery.", "Clickjacking."],
    "e": "Attackers may attempt to manipulate state-related parameters to move a process into a state that should only be reachable by authorized personnel."
  },
  {
    "c": "WSTG-BUSL-07: Defenses Against Application Misuse",
    "q": "A user creates 10,000 'free' trial accounts to exploit a referral bonus. This type of automated abuse is best described as:",
    "a": "Application Misuse / Lack of anti-automation controls.",
    "d": ["A buffer overflow attack.", "A privilege escalation vulnerability.", "A DNS rebinding attack."],
    "e": "Business logic testing includes checking if the application has defenses (like CAPTCHA or identity verification) against automated misuse of legitimate features."
  },
  {
    "c": "WSTG-BUSL-08: Upload of Unexpected File Types",
    "q": "An application designed to accept profile pictures (.jpg, .png) allows a user to upload a .jsp file. What is the primary risk?",
    "a": "Remote Code Execution (RCE) on the server.",
    "d": ["The image will not render correctly in the browser.", "The file will consume too much disk space.", "The user's session will be terminated."],
    "e": "If the server executes uploaded scripts (JSP, PHP, ASPX), an attacker can gain full control over the web server."
  },
  {
    "c": "WSTG-BUSL-01: Business Logic Data Validation",
    "q": "Which of the following is a 'Business Logic' flaw rather than a technical 'Input Validation' flaw?",
    "a": "A user can transfer more money than they have in their balance.",
    "d": ["A user can inject a <script> tag into a comment field.", "A user can cause a database error by entering a single quote (').", "A user can overflow a buffer by entering 10,000 characters."],
    "e": "Business logic flaws deal with the *meaning* and *rules* of the data within the application context, not just its format."
  },
  {
    "c": "WSTG-BUSL-03: Integrity Checks",
    "q": "What is the 'Double Spending' problem in the context of business logic testing?",
    "a": "Using the same digital token or credit twice before the system can update the state.",
    "d": ["Charging a user's credit card twice for the same transaction.", "Buying two identical items in the same cart.", "Using two different discount codes on one order."],
    "e": "Double spending is a classic logic flaw where concurrency or race conditions allow a resource to be used multiple times."
  },
  {
    "c": "WSTG-BUSL-06: Circumvention of Workflows",
    "q": "How can a tester verify if an application enforces its workflow logic?",
    "a": "By attempting to access steps out of order or with invalid session states.",
    "d": ["By running an automated vulnerability scanner.", "By checking the robots.txt file for hidden paths.", "By viewing the public API documentation."],
    "e": "Testing for workflow circumvention requires manual exploration of the application's states and transitions."
  },
  {
    "c": "WSTG-BUSL-07: Defenses Against Application Misuse",
    "q": "Which control is most effective at preventing 'Scraping' of sensitive public data by bots?",
    "a": "Rate limiting and IP reputation analysis.",
    "d": ["Using TLS 1.3 for all connections.", "Implementing a strong password policy.", "Encoding all output to prevent XSS."],
    "e": "Scraping is a misuse of legitimate functionality that is best mitigated by monitoring and limiting the volume of requests from single sources."
  },
  {
    "c": "WSTG-BUSL-09: Upload of Malicious Files",
    "q": "In addition to checking file extensions, what should a secure file upload implementation do?",
    "a": "Rename the file to a random string and store it outside the web root.",
    "d": ["Store the file with its original name in the /images directory.", "Only allow uploads from users with administrative privileges.", "Compress the file to reduce the risk of viruses."],
    "e": "Renaming and isolating files prevents attackers from predicting the file path and executing the uploaded content."
  },
  {
    "c": "WSTG-BUSL-01: Business Logic Data Validation",
    "q": "A loyalty program allows users to trade 100 points for a $10 voucher. A tester finds that they can trade -100 points to get -1 vouchers, which actually *adds* 100 points to their account. This is an example of:",
    "a": "Integer handling/Business Logic flaw.",
    "d": ["Cross-Site Scripting.", "Broken Access Control.", "Insecure Deserialization."],
    "e": "Failing to check for negative values in transactions is a common source of business logic vulnerabilities."
  },
  {
    "c": "WSTG-BUSL-02: Ability to Forge Requests",
    "q": "A 'Referer' header check is used to ensure a request comes from the legitimate checkout page. Why is this insufficient?",
    "a": "The Referer header is client-controlled and can be easily spoofed by an attacker.",
    "d": ["The Referer header is encrypted by TLS.", "Modern browsers do not send the Referer header.", "The Referer header can only contain IP addresses."],
    "e": "Security controls should never rely solely on data provided by the client's browser headers."
  },
  {
    "c": "WSTG-BUSL-05: Number of Retries",
    "q": "What is 'Credential Stuffing'?",
    "a": "Automated injection of leaked username/password pairs from other breaches into a login form.",
    "d": ["Brute-forcing a single account with a dictionary of common passwords.", "Trying every possible character combination for a password.", "Stealing session cookies via a Man-in-the-Middle attack."],
    "e": "Credential stuffing relies on the fact that users reuse passwords across multiple sites."
  },
  {
    "c": "WSTG-BUSL-04: Process Timing",
    "q": "How can an attacker use 'Time-of-Check to Time-of-Use' (TOCTOU) in a business logic attack?",
    "a": "By modifying a value between the time the application validates it and the time it uses it.",
    "d": ["By changing the system clock on the web server.", "By delaying the response from the database.", "By predicting the next session ID based on the current time."],
    "e": "TOCTOU is a type of race condition where the state of a resource changes after a security check but before the operation is performed."
  },
  {
    "c": "WSTG-BUSL-08: Upload of Unexpected File Types",
    "q": "What is the risk of allowing SVG file uploads in a profile picture feature?",
    "a": "SVG files can contain embedded JavaScript, leading to XSS.",
    "d": ["SVG files are always larger than JPEG files.", "SVG files are not supported by most modern browsers.", "SVG files can crash the server's image processing library."],
    "e": "Since SVGs are XML-based, they can include <script> tags that execute in the context of the domain where the SVG is hosted."
  },
  {
    "c": "WSTG-BUSL-07: Defenses Against Application Misuse",
    "q": "Which of the following is a sign of a 'Low and Slow' automated attack?",
    "a": "Requests that stay just below the rate-limiting threshold over a long period.",
    "d": ["A massive spike in traffic from a single IP address.", "Requests containing obvious SQL injection strings.", "A sudden increase in 404 error responses."],
    "e": "'Low and slow' attacks are designed to evade detection by mimicking legitimate traffic patterns."
  },
  {
    "c": "WSTG-BUSL-01: Business Logic Data Validation",
    "q": "Why is 'Blacklisting' usually less effective than 'Whitelisting' for business logic validation?",
    "a": "It is impossible to anticipate all the ways an attacker might try to circumvent the rules.",
    "d": ["Blacklisting requires more CPU power than whitelisting.", "Whitelisting is only for IP addresses, not for data.", "Blacklisting is not supported by modern web frameworks."],
    "e": "Whitelisting (Allow-listing) defines what is strictly allowed, which is much more secure than trying to list everything that is forbidden."
  }
];
var MASTER_POOL = pool;

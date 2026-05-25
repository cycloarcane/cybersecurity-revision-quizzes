var pool = [
  {
    "c": "WSTG-ATHZ-01: Directory Traversal File Include",
    "q": "Which of the following character sequences is most commonly used in a Directory Traversal attack to navigate to the parent directory?",
    "a": "../",
    "d": ["..\\", "./", "//"],
    "e": "WSTG-ATHZ-01 states that '../' (dot-dot-slash) is the standard sequence for moving up one level in the file system hierarchy on Unix-like systems."
  },
  {
    "c": "WSTG-ATHZ-01: Directory Traversal File Include",
    "q": "An attacker uses '%2e%2e%2f' in a URL parameter. What type of bypass technique is this?",
    "a": "URL Encoding",
    "d": ["Double Encoding", "Unicode Bypass", "Null Byte Injection"],
    "e": "By URL encoding the '../' characters, an attacker might bypass simple string-based filters that only look for literal '../' sequences."
  },
  {
    "c": "WSTG-ATHZ-01: Directory Traversal File Include",
    "q": "How does 'Null Byte Injection' (%00) typically aid in a File Inclusion attack?",
    "a": "It terminates the filename string, potentially bypassing an appended file extension.",
    "d": ["It bypasses the need for authentication.", "It encrypts the payload to evade IDS detection.", "It forces the server to use the HTTP GET method."],
    "e": "In some older environments (like PHP 5.3 and below), a null byte can signal the end of a string to the underlying C API, ignoring any extensions the application might have appended (e.g., '.php')."
  },
  {
    "c": "WSTG-ATHZ-01: Directory Traversal File Include",
    "q": "What is the primary difference between Local File Inclusion (LFI) and Remote File Inclusion (RFI)?",
    "a": "LFI involves files already present on the server, while RFI loads files from an external server.",
    "d": ["LFI only works on Linux, while RFI only works on Windows.", "LFI requires administrative privileges, while RFI does not.", "LFI targets the database, while RFI targets the file system."],
    "e": "LFI exploits the application's ability to read local files (like /etc/passwd), while RFI (often requiring 'allow_url_include' in PHP) allows the attacker to host a malicious script elsewhere."
  },
  {
    "c": "WSTG-ATHZ-01: Directory Traversal File Include",
    "q": "Which remediation is most effective against Directory Traversal vulnerabilities?",
    "a": "Using a hard-coded list (allow-list) of permitted files or using filesystem identifiers instead of user-supplied names.",
    "d": ["Converting all user input to uppercase.", "Increasing the timeout of the web server.", "Disabling the HTTP POST method."],
    "e": "The best defense is to avoid passing user-supplied input directly to filesystem APIs. If necessary, validate input against a strict allow-list of known good values."
  },
  {
    "c": "WSTG-ATHZ-02: Bypassing Authorization Schema",
    "q": "What is 'Horizontal Privilege Escalation'?",
    "a": "An attacker accessing the resources or data of another user with the same level of privileges.",
    "d": ["An attacker gaining administrative access from a regular user account.", "An attacker bypassing the login screen to access the public home page.", "An attacker using a brute-force attack to guess a password."],
    "e": "Horizontal escalation (also known as IDOR in some contexts) involves moving sideways between users of equal rank (e.g., User A viewing User B's private messages)."
  },
  {
    "c": "WSTG-ATHZ-02: Bypassing Authorization Schema",
    "q": "Which technique involves changing a parameter like 'role=user' to 'role=admin' to gain unauthorized access?",
    "a": "Parameter Tampering",
    "d": ["Cross-Site Scripting (XSS)", "SQL Injection", "Session Fixation"],
    "e": "WSTG-ATHZ-02 describes how attackers manipulate request parameters (GET, POST, Cookies) to test if the server-side authorization logic is flawed."
  },
  {
    "c": "WSTG-ATHZ-02: Bypassing Authorization Schema",
    "q": "What is the risk of relying solely on 'Hidden Fields' in HTML forms for authorization decisions?",
    "a": "Hidden fields can be easily modified by the user before the form is submitted.",
    "d": ["Hidden fields are not supported by modern web browsers.", "Hidden fields automatically encrypt the data, making it hard for the server to read.", "Hidden fields increase the page load time significantly."],
    "e": "Anything sent to the client can be manipulated. Authorization checks must always be performed on the server side, regardless of client-side hidden fields."
  },
  {
    "c": "WSTG-ATHZ-02: Bypassing Authorization Schema",
    "q": "A tester tries to access an administrative page by adding a specific HTTP header like 'X-Original-URL' or 'X-Forwarded-For'. What are they testing for?",
    "a": "Authorization bypass through proxy/WAF header manipulation.",
    "d": ["Cross-Site Request Forgery (CSRF).", "Clickjacking vulnerabilities.", "Weak SSL/TLS configurations."],
    "e": "Some poorly configured reverse proxies or WAFs can be tricked into granting access to restricted paths by manipulating headers that indicate the 'real' intended destination."
  },
  {
    "c": "WSTG-ATHZ-02: Bypassing Authorization Schema",
    "q": "What is 'Forceful Browsing' (or Predictable Resource Location)?",
    "a": "Accessing pages that are not linked from the main application but exist on the server, like '/admin' or '/backup'.",
    "d": ["Refreshing a page multiple times to cause a denial of service.", "Using a script to click all buttons on a page simultaneously.", "Injecting JavaScript to steal cookies from other users."],
    "e": "Attackers use wordlists and guessing to find unlinked files, directories, or administrative interfaces that might not have proper authorization checks."
  },
  {
    "c": "WSTG-ATHZ-02: Bypassing Authorization Schema",
    "q": "Why is it important to test authorization for every HTTP method (GET, POST, PUT, DELETE)?",
    "a": "Authorization controls might be applied to some methods but not others for the same resource.",
    "d": ["Because GET requests are always more secure than POST requests.", "Because some browsers do not support the DELETE method.", "To ensure the server's CPU usage is balanced across all methods."],
    "e": "A common flaw is protecting 'POST /api/user/delete' but forgetting to protect 'DELETE /api/user/delete'. This is known as Verb Tampering."
  },
  {
    "c": "WSTG-ATHZ-02: Bypassing Authorization Schema",
    "q": "What does 'Failing Securely' mean in the context of authorization?",
    "a": "If an error occurs during an authorization check, the default action should be to deny access.",
    "d": ["The application should show a detailed stack trace when access is denied.", "The application should automatically grant administrative access if the database is down.", "The application should log the user out if they enter a wrong password."],
    "e": "Security mechanisms should default to a 'Deny All' state. If the authorization logic fails or encounters an exception, it should not inadvertently allow the request."
  },
  {
    "c": "WSTG-ATHZ-03: Privilege Escalation",
    "q": "What is 'Vertical Privilege Escalation'?",
    "a": "An attacker with low privileges gaining the permissions of a higher-privileged user, such as an administrator.",
    "d": ["An attacker gaining access to another user's account with the same permissions.", "An attacker causing the application to crash for all users.", "An attacker stealing a session cookie via an XSS attack."],
    "e": "Vertical escalation involves moving up the privilege ladder (e.g., Guest -> User -> Admin)."
  },
  {
    "c": "WSTG-ATHZ-03: Privilege Escalation",
    "q": "A tester finds that a regular user can access '/admin/exportUsers' even though it's not in the menu. This is an example of:",
    "a": "Vertical Privilege Escalation",
    "d": ["Horizontal Privilege Escalation", "Directory Traversal", "Insecure Direct Object Reference"],
    "e": "If a low-privilege user can perform actions or access data reserved for high-privilege users, it is vertical escalation."
  },
  {
    "c": "WSTG-ATHZ-03: Privilege Escalation",
    "q": "Which of the following is a common cause of privilege escalation in multi-tenant applications?",
    "a": "Flawed logic that fails to check if the requested resource belongs to the current user's organization.",
    "d": ["The use of long session timeouts for administrative users.", "The application being hosted on a shared Linux server.", "The presence of a 'Contact Us' form on the public website."],
    "e": "In multi-tenant systems, the application must ensure that users can only access data belonging to their own 'tenant' or 'org ID'."
  },
  {
    "c": "WSTG-ATHZ-03: Privilege Escalation",
    "q": "How can 'Mass Assignment' lead to privilege escalation?",
    "a": "By allowing a user to update their own 'is_admin' property through a profile update form.",
    "d": ["By overwhelming the server with a large number of simultaneous requests.", "By assigning the same session ID to multiple users at once.", "By using a large wordlist to guess the administrator's password."],
    "e": "Mass assignment occurs when an application takes user input and blindly applies it to a database object, allowing the user to modify fields they shouldn't control."
  },
  {
    "c": "WSTG-ATHZ-03: Privilege Escalation",
    "q": "When testing for privilege escalation, why is it necessary to have at least two accounts with different privilege levels?",
    "a": "To compare the responses and accessible features between the different roles.",
    "d": ["To perform a denial of service attack by logging in twice.", "To ensure the application's load balancer is working correctly.", "To comply with the 'Dual Control' requirement of the GDPR."],
    "e": "Effective authorization testing requires observing how the application behaves for different roles to identify discrepancies and missing checks."
  },
  {
    "c": "WSTG-ATHZ-03: Privilege Escalation",
    "q": "What is the security risk of 'Client-Side Authorization' logic (e.g., hiding a button with CSS)?",
    "a": "An attacker can easily unhide the button or manually craft the request it would have sent.",
    "d": ["It makes the application incompatible with older web browsers.", "It requires the use of heavy JavaScript libraries like jQuery.", "It increases the amount of data transferred over the network."],
    "e": "Authorization must be enforced on the server. UI-based 'security' (hiding elements) is only a cosmetic feature and is easily bypassed."
  },
  {
    "c": "WSTG-ATHZ-04: Insecure Direct Object References",
    "q": "What is an 'Insecure Direct Object Reference' (IDOR)?",
    "a": "When an application uses a user-supplied identifier to access an object without performing an authorization check.",
    "d": ["When an application allows a user to upload a file to the root directory.", "When an application exposes its internal database schema in error messages.", "When an application uses a weak encryption algorithm for passwords."],
    "e": "IDOR occurs when a user can change a value (like an account ID in a URL) to access data belonging to someone else because the server doesn't check ownership."
  },
  {
    "c": "WSTG-ATHZ-04: Insecure Direct Object References",
    "q": "Which of the following URLs is most likely vulnerable to an IDOR attack?",
    "a": "/api/v1/getInvoice?id=12345",
    "d": ["/api/v1/getInvoice?token=abc123xyz789", "/view/my-profile", "/search?q=security"],
    "e": "Predictable, sequential identifiers (like 'id=12345') are prime targets for IDOR. An attacker can simply increment or decrement the ID to find other invoices."
  },
  {
    "c": "WSTG-ATHZ-04: Insecure Direct Object References",
    "q": "What is a 'Non-Enumerable' identifier and how does it help against IDOR?",
    "a": "A random, complex string (like a UUID) that is difficult for an attacker to guess.",
    "d": ["An identifier that is stored as an integer in the database.", "An identifier that is encrypted using the AES-256 algorithm.", "An identifier that is only visible to the database administrator."],
    "e": "Using UUIDs (Universally Unique Identifiers) instead of auto-incrementing integers makes it significantly harder for an attacker to 'guess' other valid object IDs."
  },
  {
    "c": "WSTG-ATHZ-04: Insecure Direct Object References",
    "q": "Is using UUIDs a complete fix for IDOR vulnerabilities?",
    "a": "No, because if a UUID is leaked or discovered, the server still needs to check if the user is authorized to access it.",
    "d": ["Yes, because UUIDs are mathematically impossible to guess.", "Yes, because modern browsers automatically block requests with UUIDs.", "No, because UUIDs take up too much space in the database."],
    "e": "The root cause of IDOR is missing authorization checks. While UUIDs prevent guessing, they do not replace the need for the server to verify ownership of the resource."
  },
  {
    "c": "WSTG-ATHZ-04: Insecure Direct Object References",
    "q": "A tester finds they can delete any user's comment by changing the 'commentId' in a DELETE request. This is an example of:",
    "a": "IDOR (Insecure Direct Object Reference)",
    "d": ["CSRF (Cross-Site Request Forgery)", "XSS (Cross-Site Scripting)", "SQL Injection"],
    "e": "Modifying a direct reference to an object (the comment ID) to perform an unauthorized action is a classic IDOR vulnerability."
  },
  {
    "c": "WSTG-ATHZ-04: Insecure Direct Object References",
    "q": "What is 'Object-Level Authorization'?",
    "a": "A security check that ensures the currently logged-in user has permission to access a specific instance of data.",
    "d": ["A check that ensures the user is logged into the application.", "A check that ensures the user has a valid 'Admin' role.", "A check that ensures the user's IP address is on an allow-list."],
    "e": "Object-level authorization goes beyond role-based checks by verifying if 'User A' actually owns 'Invoice 123'."
  },
  {
    "c": "WSTG-ATHZ-04: Insecure Direct Object References",
    "q": "Which tool feature is most useful for testing IDOR by automating the changing of ID parameters?",
    "a": "Burp Suite Intruder or ZAP Fuzzer",
    "d": ["Burp Suite Repeater", "ZAP Passive Scanner", "Nmap Scripting Engine"],
    "e": "Intruders and Fuzzers allow a tester to define a payload position (the ID) and automatically iterate through a range of values to see which ones return a successful response."
  }
];
var MASTER_POOL = pool;

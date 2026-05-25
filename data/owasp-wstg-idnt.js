var pool = [
  {
    "c": "WSTG-IDNT-01: Test Role Definitions",
    "q": "What is the primary goal of the 'Test Role Definitions' scenario?",
    "a": "To identify and document all user roles and their associated permissions.",
    "d": ["To brute-force the administrator's password.", "To test if the application is vulnerable to SQL injection.", "To verify the strength of the encryption algorithms used."],
    "e": "WSTG-IDNT-01 involves mapping the various roles (e.g., Guest, User, Manager, Admin) to understand the access control model before testing for bypasses."
  },
  {
    "c": "WSTG-IDNT-01: Test Role Definitions",
    "q": "What is 'Vertical Privilege Escalation'?",
    "a": "A user gaining access to functions or data reserved for a higher-privileged role.",
    "d": ["A user gaining access to data belonging to another user with the same role.", "An administrator's session being hijacked by an external attacker.", "The application failing to log a successful login attempt."],
    "e": "Vertical escalation occurs when a standard user performs actions reserved for an administrator, typically by accessing restricted URLs or functions."
  },
  {
    "c": "WSTG-IDNT-01: Test Role Definitions",
    "q": "What is 'Horizontal Privilege Escalation'?",
    "a": "A user gaining access to data belonging to another user with the same privilege level.",
    "d": ["A user gaining access to administrative functions.", "A user bypassing the multi-factor authentication requirement.", "An attacker performing a denial of service on the identity provider."],
    "e": "Horizontal escalation (often via IDOR) occurs when User A accesses the private data of User B, even though both have the same 'User' role."
  },
  {
    "c": "WSTG-IDNT-02: Test User Registration Process",
    "q": "What is a security risk associated with the user registration process?",
    "a": "The ability for an attacker to register as a high-privileged user directly.",
    "d": ["The registration page taking more than three seconds to load.", "The use of a CAPTCHA to prevent automated sign-ups.", "The requirement for a valid email address to complete registration."],
    "e": "WSTG-IDNT-02 tests if the registration flow can be manipulated (e.g., by adding a 'role=admin' parameter) to grant excessive permissions to new accounts."
  },
  {
    "c": "WSTG-IDNT-02: Test User Registration Process",
    "q": "Why should a tester check if the application allows registration with an already existing username?",
    "a": "To identify potential account takeover or identity spoofing vulnerabilities.",
    "d": ["To ensure the database can handle duplicate entries correctly.", "To verify the application's search functionality works as expected.", "To test the performance of the unique constraint on the database."],
    "e": "Allowing duplicate usernames can lead to confusion and potential security flaws where an attacker impersonates a legitimate user."
  },
  {
    "c": "WSTG-IDNT-03: Test Account Provisioning Process",
    "q": "What does the 'Account Provisioning Process' test specifically focus on?",
    "a": "How accounts are created, assigned to users, and given permissions by administrators.",
    "d": ["How users reset their forgotten passwords.", "How the application handles session timeouts for inactive users.", "How the application logs failed authentication attempts."],
    "e": "WSTG-IDNT-03 examines the administrative workflow for creating accounts to ensure that only authorised personnel can provision new users."
  },
  {
    "c": "WSTG-IDNT-03: Test Account Provisioning Process",
    "q": "What is the risk of an insecure 'self-service' provisioning system?",
    "a": "Attackers could provision accounts for themselves with elevated privileges.",
    "d": ["Users might forget their usernames after the account is created.", "The system might send too many notification emails to the administrator.", "The provisioning process might be too slow for large organisations."],
    "e": "If the provisioning logic is flawed, an attacker might find a way to bypass approval steps or escalate their own privileges during the sign-up process."
  },
  {
    "c": "WSTG-IDNT-04: Test Account Enumeration and Guessable User Account",
    "q": "How can an application inadvertently leak valid usernames during the login process?",
    "a": "By providing different error messages for 'invalid username' and 'invalid password'.",
    "d": ["By requiring the user to solve a CAPTCHA after three failed attempts.", "By masking the password characters as the user types them.", "By using HTTPS to encrypt the login request."],
    "e": "WSTG-IDNT-04 highlights that messages like 'User does not exist' allow an attacker to verify a list of usernames, which is the first step in a targeted attack."
  },
  {
    "c": "WSTG-IDNT-04: Test Account Enumeration and Guessable User Account",
    "q": "What is 'Timing-Based Account Enumeration'?",
    "a": "Identifying valid users by measuring the server's response time for different usernames.",
    "d": ["Predicting when a user will next log into the application.", "Measuring the time it takes for a user to type their password.", "Calculating the total duration of a user's active session."],
    "e": "If the server takes longer to respond for valid usernames (e.g., because it performs a password hash comparison) than for invalid ones, it leaks the account's existence."
  },
  {
    "c": "WSTG-IDNT-04: Test Account Enumeration and Guessable User Account",
    "q": "Besides the login page, where else might account enumeration occur?",
    "a": "Password reset pages, registration forms, and public profile URLs.",
    "d": ["The application's 'About Us' page.", "The server's 'robots.txt' file.", "The Terms of Service agreement."],
    "e": "Any feature that interacts with the user database (e.g., 'Check if email is available') can be abused to enumerate valid accounts."
  },
  {
    "c": "WSTG-IDNT-05: Test Weak or Unenforced Username Policy",
    "q": "What defines a 'weak' username policy according to the WSTG?",
    "a": "Usernames that are highly predictable, such as sequential numbers or employee IDs.",
    "d": ["Usernames that must be at least eight characters long.", "Usernames that are required to contain at least one special character.", "Usernames that must be unique within the application."],
    "e": "WSTG-IDNT-05 warns against predictable usernames (e.g., user1, user2), as they make brute-force and targeted attacks significantly easier."
  },
  {
    "c": "WSTG-IDNT-05: Test Weak or Unenforced Username Policy",
    "q": "Why is it important to test for case sensitivity in usernames?",
    "a": "To prevent 'Username Collision' attacks where 'Admin' and 'admin' are treated as different users.",
    "d": ["To ensure the application follows the latest accessibility guidelines.", "To improve the performance of the database's string comparison.", "To allow users to choose more creative usernames."],
    "e": "If the application treats 'admin' and 'Admin' as separate but some backend systems ignore case, it can lead to confusion and security bypasses."
  },
  {
    "c": "WSTG-IDNT-01: Test Role Definitions",
    "q": "What is the security risk of a 'Flat' role structure where all users share the same permissions?",
    "a": "It violates the principle of least privilege and increases the impact of a single compromised account.",
    "d": ["It makes the application easier to maintain for the developers.", "It prevents the application from supporting multi-factor authentication.", "It is the most secure way to design a small web application."],
    "e": "A flat structure means every user has access to everything. Proper role definitions ensure users only have access to the data and functions they need."
  },
  {
    "c": "WSTG-IDNT-02: Test User Registration Process",
    "q": "What should a tester check regarding email verification during registration?",
    "a": "Whether the application allows users to access protected features before verifying their email.",
    "d": ["Whether the verification email uses a professional-looking template.", "Whether the verification link expires after exactly twenty-four hours.", "Whether the verification email is sent from a 'no-reply' address."],
    "e": "Registration should follow a 'verification-first' approach to prevent attackers from using fake identities to probe the application's internal features."
  },
  {
    "c": "WSTG-IDNT-03: Test Account Provisioning Process",
    "q": "What is 'Deprovisioning' and why is it important to test?",
    "a": "The process of removing access for users who no longer need it (e.g., former employees).",
    "d": ["The process of backing up user data before a major system upgrade.", "The process of migrating user accounts from one database to another.", "The process of encrypting user passwords before storing them."],
    "e": "Failure to properly deprovision accounts is a common security gap. Testers should verify that access is fully revoked across all systems when an account is disabled."
  },
  {
    "c": "WSTG-IDNT-04: Test Account Enumeration and Guessable User Account",
    "q": "What is the recommended remediation for account enumeration?",
    "a": "Use generic error messages like 'Invalid login credentials' regardless of whether the username or password was wrong.",
    "d": ["Disable the login functionality entirely after five failed attempts.", "Force all users to change their usernames every ninety days.", "Include the valid username in the error message to help the user."],
    "e": "Generic messaging prevents attackers from distinguishing between a correct username/wrong password and an incorrect username."
  },
  {
    "c": "WSTG-IDNT-05: Test Weak or Unenforced Username Policy",
    "q": "Which of the following is a potential risk of allowing email addresses as usernames?",
    "a": "It simplifies account enumeration since email addresses are often public or easily guessed.",
    "d": ["It makes it impossible for users to remember their login credentials.", "It prevents the application from sending notification emails to the user.", "It is a violation of the GDPR to use an email address as an identifier."],
    "e": "While convenient, using emails as usernames makes enumeration trivial. Testers should check if the application leaks whether an email is registered."
  },
  {
    "c": "WSTG-IDNT-01: Test Role Definitions",
    "q": "In a multi-tenant application, what is the most critical IDNT test?",
    "a": "Testing that a user in Tenant A cannot access or see data belonging to Tenant B.",
    "d": ["Testing that the login page for each tenant has a unique background image.", "Testing that the password policy is identical across all tenants.", "Testing that each tenant has at least one administrator account."],
    "e": "Tenant isolation is a fundamental security requirement. Bypassing this is a critical horizontal privilege escalation vulnerability."
  },
  {
    "c": "WSTG-IDNT-02: Test User Registration Process",
    "q": "What is a 'Disposable Email Address' and why might an application block them?",
    "a": "Temporary, short-lived email accounts used to bypass registration limits or perform bulk abuse.",
    "d": ["An email address that is automatically deleted after the user logs out.", "An email address used only for receiving marketing newsletters.", "An email address that does not require a password to access."],
    "e": "Attackers use disposable emails (e.g., from Mailinator) to create thousands of accounts for spamming or scraping. Blocking them helps mitigate automated abuse."
  },
  {
    "c": "WSTG-IDNT-04: Test Account Enumeration and Guessable User Account",
    "q": "How can an API response code (e.g., 200 OK vs 404 Not Found) contribute to account enumeration?",
    "a": "If the API returns 200 for an existing user and 404 for a non-existent one, it confirms the account status.",
    "d": ["It allows the attacker to determine the database's version number.", "It indicates that the API is vulnerable to a Buffer Overflow attack.", "It shows that the API is not using the correct version of the TLS protocol."],
    "e": "Even if the response body is identical, different HTTP status codes are a clear indicator that a tester can use to automate account enumeration."
  },
  {
    "c": "WSTG-IDNT-03: Test Account Provisioning Process",
    "q": "What should be verified when an application integrates with a third-party Identity Provider (IdP) like Google or GitHub?",
    "a": "That the application properly maps the IdP's identity to its internal roles and permissions.",
    "d": ["That the IdP uses a blue and white colour scheme for its login button.", "That the IdP's terms of service are displayed on the application's homepage.", "That the IdP has at least one million registered users globally."],
    "e": "The integration must ensure that 'User A' in the IdP cannot somehow be provisioned as 'Admin' in the application without explicit authorisation."
  },
  {
    "c": "WSTG-IDNT-05: Test Weak or Unenforced Username Policy",
    "q": "Why should an application restrict the use of 'admin', 'root', or 'superuser' as usernames for regular users?",
    "a": "To prevent social engineering attacks and confusion during security audits.",
    "d": ["Because those words are reserved keywords in the SQL programming language.", "Because those usernames take up more space in the database's storage.", "Because those usernames are automatically blocked by all modern web firewalls."],
    "e": "Allowing regular users to have 'official' sounding names facilitates phishing and social engineering against other users or even system administrators."
  },
  {
    "c": "WSTG-IDNT-04: Test Account Enumeration and Guessable User Account",
    "q": "How can the 'Resend Verification' or 'Forgot Password' feature be used for enumeration?",
    "a": "By observing if the message 'Email sent' is only shown for addresses that exist in the system.",
    "d": ["By checking if the verification link is encrypted with the AES algorithm.", "By measuring the total time it takes for the email to arrive in the user's inbox.", "By verifying that the email is sent via the SMTP protocol."],
    "e": "If the response differs (e.g., 'If this account exists, you will receive an email' vs 'User not found'), the feature is vulnerable to enumeration."
  },
  {
    "c": "WSTG-IDNT-01: Test Role Definitions",
    "q": "What is an 'Implicit Role' in an application?",
    "a": "A role that is automatically assigned based on specific criteria (e.g., an internal IP address).",
    "d": ["A role that the user must manually request from the administrator.", "A role that has no permissions and is used for testing purposes only.", "A role that is only active during certain hours of the business day."],
    "e": "Testers should look for roles that are granted based on environmental factors (like being on the VPN), as these can often be spoofed or bypassed."
  },
  {
    "c": "WSTG-IDNT-03: Test Account Provisioning Process",
    "q": "What is the risk of allowing users to change their own 'Account Type' or 'Role' in their profile settings?",
    "a": "It is a direct vertical privilege escalation vulnerability.",
    "d": ["It allows the user to change their profile picture to an inappropriate image.", "It prevents the administrator from seeing the user's account history.", "It causes the application's database to become fragmented over time."],
    "e": "User-facing profile pages should never allow the modification of privilege-related fields. This must be strictly controlled by administrative functions."
  }
];
var MASTER_POOL = pool;

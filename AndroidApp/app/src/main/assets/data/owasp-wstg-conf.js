var pool = [
  {
    "c": "WSTG-CONF-01: Network Infrastructure Configuration",
    "q": "What is the primary objective of testing the network infrastructure configuration?",
    "a": "To identify known vulnerabilities in the server software and its patch level.",
    "d": ["To verify the application's source code for logical flaws.", "To test the strength of user passwords.", "To map the application's data flow."],
    "e": "WSTG-CONF-01 focuses on identifying unpatched software, default configurations, and known vulnerabilities in the underlying server and network components."
  },
  {
    "c": "WSTG-CONF-02: Application Platform Configuration",
    "q": "Why is it important to check for the presence of sample or test files on a production server?",
    "a": "They may contain vulnerabilities or provide clues about the server configuration.",
    "d": ["They take up valuable disk space and slow down the server.", "They are required for the application to function correctly.", "They are automatically deleted by the web server software."],
    "e": "WSTG-CONF-02 highlights that sample files (like /examples/ or /test.php) often have known vulnerabilities or reveal details about the environment that aid an attacker."
  },
  {
    "c": "WSTG-CONF-03: File Extensions Handling",
    "q": "What is the security risk of a server configured to return the source code of a file if the extension is unknown?",
    "a": "It could lead to the disclosure of sensitive backend logic or credentials.",
    "d": ["It causes the browser to download the file instead of rendering it.", "It improves the performance of the web server.", "It is a standard security feature of modern web servers."],
    "e": "WSTG-CONF-03 tests how the server handles unexpected extensions. If a server is misconfigured to serve .php.bak or .asp.old as plain text, it leaks source code."
  },
  {
    "c": "WSTG-CONF-04: Review Old, Backup and Unreferenced Files",
    "q": "Which tool or technique is commonly used to find unreferenced files like .bak, .old, or .swp?",
    "a": "Forced browsing or directory brute-forcing with a targeted wordlist.",
    "d": ["Analysing the robots.txt file only.", "Using a standard web browser and clicking all links.", "Checking the WHOIS record for the domain."],
    "e": "WSTG-CONF-04 involves using tools like Gobuster or Dirsearch with wordlists that include common backup extensions to find sensitive files not linked in the UI."
  },
  {
    "c": "WSTG-CONF-05: Enumerate Infrastructure and Admin Interfaces",
    "q": "What is a common security weakness related to administrative interfaces?",
    "a": "They are often accessible from the public internet without sufficient access controls.",
    "d": ["They use a different theme than the main application.", "They require the use of a modern web browser.", "They are documented in the application's help guide."],
    "e": "WSTG-CONF-05 covers discovering admin panels (/admin, /phpmyadmin) that should be restricted to internal networks or protected by multi-factor authentication."
  },
  {
    "c": "WSTG-CONF-06: Test HTTP Methods",
    "q": "Which HTTP method can be used to upload a file to a specific URI on a server, potentially allowing for web shell placement?",
    "a": "PUT",
    "d": ["GET", "OPTIONS", "HEAD"],
    "e": "The PUT method, if enabled and improperly secured, allows a user to write files directly to the server, making it a high-risk configuration."
  },
  {
    "c": "WSTG-CONF-06: Test HTTP Methods",
    "q": "What is the risk associated with the HTTP TRACE method?",
    "a": "It can be used in Cross-Site Tracing (XST) attacks to steal sensitive headers like cookies.",
    "d": ["It allows for remote command execution on the server.", "It causes a denial of service by exhausting server memory.", "It encrypts the communication in an insecure manner."],
    "e": "The TRACE method echoes the received request back to the client. XST attacks use this to bypass the HttpOnly flag by reading headers from the reflected TRACE response."
  },
  {
    "c": "WSTG-CONF-07: Test HTTP Strict Transport Security",
    "q": "What does the 'max-age' directive in the HSTS header specify?",
    "a": "The time in seconds the browser should remember to only connect via HTTPS.",
    "d": ["The maximum age of the user's password before it must be changed.", "The maximum time a session can remain idle before being terminated.", "The maximum time a server will wait for a response from the database."],
    "e": "WSTG-CONF-07 tests for HSTS. The 'max-age' directive tells the browser to enforce HTTPS for that duration (e.g., 31536000 for one year)."
  },
  {
    "c": "WSTG-CONF-07: Test HTTP Strict Transport Security",
    "q": "Why is the 'includeSubDomains' directive important in an HSTS policy?",
    "a": "It ensures that the HSTS policy applies to all subdomains of the current domain.",
    "d": ["It allows the browser to cache resources from all subdomains.", "It enables the use of wildcard SSL certificates.", "It prevents the user from navigating to other websites."],
    "e": "Without 'includeSubDomains', an attacker could trick a user into visiting an unencrypted subdomain (http://test.example.com), potentially leaking cookies set for .example.com."
  },
  {
    "c": "WSTG-CONF-08: Test RIA Cross Domain Policy",
    "q": "In a 'crossdomain.xml' file, what does the value '<allow-access-from domain=\"*\" />' signify?",
    "a": "Any domain is allowed to make requests and read the response data.",
    "d": ["No domains are allowed to access the application data.", "Only subdomains of the current domain are allowed access.", "Only the domain specified in the 'Host' header is allowed access."],
    "e": "A wildcard (*) in a cross-domain policy file is extremely dangerous as it permits any site to perform cross-origin requests and read sensitive data from the application."
  },
  {
    "c": "WSTG-CONF-09: Test File Permission",
    "q": "What is the 'principle of least privilege' in the context of web server file permissions?",
    "a": "The web server process should only have the minimum permissions necessary to function.",
    "d": ["The web server should have root access to ensure all files are readable.", "The web server should have full write access to the entire disk for logging.", "The web server should have the same permissions as the system administrator."],
    "e": "WSTG-CONF-09 tests that files are not world-writable and that the web server user cannot access sensitive system files like /etc/shadow or configuration files."
  },
  {
    "c": "WSTG-CONF-10: Test for Subdomain Takeover",
    "q": "How does an attacker exploit a 'dangling CNAME' record for subdomain takeover?",
    "a": "By claiming the deprovisioned external service (e.g., S3 bucket) that the CNAME still points to.",
    "d": ["By brute-forcing the DNS server's administrative password.", "By performing a man-in-the-middle attack on the DNS traffic.", "By sending a large volume of DNS queries to crash the server."],
    "e": "If a subdomain points to a cloud service that is no longer in use, an attacker can register that same service name and effectively take control of the subdomain."
  },
  {
    "c": "WSTG-CONF-11: Test Cloud Storage",
    "q": "What is a common misconfiguration in AWS S3 buckets that leads to data exposure?",
    "a": "Granting 'List' or 'Read' permissions to the 'All Users' or 'Authenticated Users' groups.",
    "d": ["Enabling server-side encryption with AWS-managed keys.", "Restricting access to a specific VPC endpoint only.", "Configuring the bucket to use the standard storage class."],
    "e": "WSTG-CONF-11 involves checking cloud storage for public access. If 'All Users' has access, anyone on the internet can download the bucket's contents."
  },
  {
    "c": "WSTG-CONF-02: Application Platform Configuration",
    "q": "What is the security risk of leaving default credentials (e.g., admin/admin) for a management console?",
    "a": "It allows an attacker to easily gain full administrative control over the application.",
    "d": ["It causes the application to run in 'debug mode' which is slower.", "It prevents the application from being indexed by search engines.", "It is a requirement for the initial installation and cannot be changed."],
    "e": "Testing for default credentials (WSTG-CONF-02 / AUTH-02) is a critical step, as many frameworks and platforms ship with well-known default logins."
  },
  {
    "c": "WSTG-CONF-01: Network Infrastructure Configuration",
    "q": "Which header can be used to prevent a browser from sniffing the MIME type of a file, mitigating certain XSS attacks?",
    "a": "X-Content-Type-Options: nosniff",
    "d": ["X-Frame-Options: DENY", "Content-Type: text/html", "Cache-Control: no-store"],
    "e": "The 'nosniff' directive forces the browser to trust the 'Content-Type' header provided by the server, preventing it from executing a file as script if it 'looks' like one."
  },
  {
    "c": "WSTG-CONF-07: Test HTTP Strict Transport Security",
    "q": "What is 'HSTS Preloading'?",
    "a": "A list of domains built into the browser that must always use HTTPS, even on the first visit.",
    "d": ["A technique to speed up the initial TLS handshake process.", "A method to encrypt the DNS queries for a particular domain.", "A way to cache SSL certificates in the browser's local storage."],
    "e": "Preloading protects users from the very first request by hardcoding the HSTS requirement in the browser, eliminating the 'first-hit' vulnerability."
  },
  {
    "c": "WSTG-CONF-06: Test HTTP Methods",
    "q": "Which HTTP method is used to retrieve only the response headers without the message body?",
    "a": "HEAD",
    "d": ["GET", "OPTIONS", "POST"],
    "e": "The HEAD method is useful for testers to gather information about the server (via headers) without downloading the entire page content."
  },
  {
    "c": "WSTG-CONF-11: Test Cloud Storage",
    "q": "How can an attacker discover the name of a hidden cloud storage bucket used by an application?",
    "a": "By reviewing the application's JavaScript code, CSS files, or 'sitemap.xml'.",
    "d": ["By performing a physical audit of the server's data centre.", "By contacting the cloud service provider's support team.", "By brute-forcing the cloud provider's administrative API."],
    "e": "Cloud bucket URLs (e.g., https://my-app-data.s3.amazonaws.com) are often hardcoded in front-end assets or found during spidering."
  },
  {
    "c": "WSTG-CONF-05: Enumerate Infrastructure and Admin Interfaces",
    "q": "What should a tester check when they discover a management interface on a non-standard port (e.g., 8443)?",
    "a": "Whether it uses strong authentication and is restricted to specific IP addresses.",
    "d": ["Whether the interface uses a valid HTML5 doctype declaration.", "Whether the interface supports the latest version of the jQuery library.", "Whether the interface is accessible via a mobile-responsive design."],
    "e": "Moving an admin interface to a non-standard port ('security by obscurity') is not a valid control. It must be properly secured with authentication and network-level restrictions."
  },
  {
    "c": "WSTG-CONF-03: File Extensions Handling",
    "q": "What is the risk of a web server being configured to execute .shtml files?",
    "a": "It might be vulnerable to Server-Side Includes (SSI) injection.",
    "d": ["It causes the browser to treat all files as dynamic scripts.", "It disables all cross-origin resource sharing (CORS) policies.", "It prevents the server from logging any client-side errors."],
    "e": "SSI is a legacy technology. If the server allows .shtml and doesn't sanitise input, an attacker could use SSI directives to execute shell commands or read files."
  },
  {
    "c": "WSTG-CONF-01: Network Infrastructure Configuration",
    "q": "Why is it a security risk to have an outdated version of OpenSSL on the server?",
    "a": "It may be vulnerable to well-known attacks like Heartbleed or CCS Injection.",
    "d": ["It makes the TLS handshake process significantly slower.", "It prevents the use of modern browsers like Chrome or Firefox.", "It causes the server to reject all incoming HTTPS connections."],
    "e": "Outdated cryptographic libraries are a major risk, as they often have public exploits that allow for data theft or session hijacking."
  },
  {
    "c": "WSTG-CONF-09: Test File Permission",
    "q": "Which Unix command can be used to find files that are world-writable in the web root?",
    "a": "find /var/www/html -perm -0002",
    "d": ["ls -la /var/www/html", "chmod 777 /var/www/html", "chown www-data /var/www/html"],
    "e": "The 'find' command with '-perm -0002' identifies files that any user on the system can write to, which is a significant security risk for web-accessible files."
  },
  {
    "c": "WSTG-CONF-06: Test HTTP Methods",
    "q": "What header does a server return in response to an OPTIONS request to list supported methods?",
    "a": "Allow",
    "d": ["Accept", "Access-Control-Allow-Methods", "Server"],
    "e": "The 'Allow' header (e.g., 'Allow: GET, POST, OPTIONS') lists the methods the server supports for the targeted resource."
  },
  {
    "c": "WSTG-CONF-04: Review Old, Backup and Unreferenced Files",
    "q": "What is the risk of a '.git' directory being accessible in the web root?",
    "a": "An attacker can download the entire source code and commit history of the application.",
    "d": ["It causes the application to run slower due to Git overhead.", "It prevents the application from being updated via Git.", "It is required for the application's continuous integration process."],
    "e": "Exposed version control directories (.git, .svn) are extremely high-risk as they reveal the full source code, potentially including hardcoded secrets and logic flaws."
  },
  {
    "c": "WSTG-CONF-02: Application Platform Configuration",
    "q": "What is the recommended practice for handling verbose error messages in production?",
    "a": "Disable them and show generic error pages while logging the details server-side.",
    "d": ["Encrypt the error messages before sending them to the client.", "Show the full stack trace only for users with the 'admin' role.", "Log the errors to a publicly accessible text file for transparency."],
    "e": "Verbose error messages (WSTG-CONF-02 / ERRH-01) reveal sensitive information about the technology stack, which should only be available in logs."
  }
];
var MASTER_POOL = pool;

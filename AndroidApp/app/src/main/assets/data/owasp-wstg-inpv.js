var pool = [
  {
    "c": "WSTG-INPV-01: Reflected Cross Site Scripting",
    "q": "What is the defining characteristic of 'Reflected' XSS?",
    "a": "The malicious script is 'reflected' off the web server to the victim's browser via a link or form submission.",
    "d": ["The malicious script is permanently stored in the application's database.", "The malicious script is executed only on the server and never reaches the client.", "The malicious script is delivered via a compromised third-party JavaScript library."],
    "e": "Reflected XSS occurs when an application includes unvalidated user input in its immediate response, allowing an attacker to execute scripts in the victim's context by tricking them into clicking a crafted link."
  },
  {
    "c": "WSTG-INPV-01: Reflected Cross Site Scripting",
    "q": "Which of the following is the most effective primary defense against XSS?",
    "a": "Context-aware output encoding.",
    "d": ["Using an allow-list for all incoming URL parameters.", "Encrypting all user-supplied data before storing it in the database.", "Increasing the complexity of the user's password requirements."],
    "e": "Output encoding converts potentially dangerous characters (like < and >) into their safe HTML entity equivalents, ensuring the browser treats them as text rather than executable code."
  },
  {
    "c": "WSTG-INPV-02: Stored Cross Site Scripting",
    "q": "Where is the malicious payload located in a 'Stored' XSS attack?",
    "a": "On the server (e.g., in a database, log file, or comment section).",
    "d": ["In the URL of a malicious link sent via email.", "In the victim's browser cache only.", "In the 'User-Agent' header of the attacker's browser."],
    "e": "Stored XSS (or Persistent XSS) occurs when the application saves user input and later displays it to other users without proper encoding, making it more dangerous than reflected XSS as it doesn't require a targeted link."
  },
  {
    "c": "WSTG-INPV-02: Stored Cross Site Scripting",
    "q": "A tester finds that they can inject a script into their 'Profile Bio' which then executes for anyone who views their profile. This is an example of:",
    "a": "Stored XSS",
    "d": ["Reflected XSS", "DOM-based XSS", "Blind SQL Injection"],
    "e": "Because the payload is saved in the database and 'stored' by the application, it falls under the WSTG-INPV-02 category."
  },
  {
    "c": "WSTG-INPV-03: HTTP Verb Tampering",
    "q": "What is 'HTTP Verb Tampering'?",
    "a": "Attempting to bypass security controls by using different HTTP methods like HEAD, OPTIONS, or PUT instead of GET/POST.",
    "d": ["Modifying the version of the HTTP protocol from 1.1 to 2.0.", "Changing the 'Host' header to point to a malicious server.", "Injecting newline characters into HTTP headers to perform a splitting attack."],
    "e": "WSTG-INPV-03 describes how some security configurations only protect specific verbs (like POST) while leaving others (like GET or HEAD) wide open for the same resource."
  },
  {
    "c": "WSTG-INPV-03: HTTP Verb Tampering",
    "q": "An application allows unauthenticated users to use the 'HEAD' method to view pages that require login for 'GET'. This is a failure in:",
    "a": "HTTP Verb Tampering defense.",
    "d": ["Session management timeout.", "Secure cookie attributes.", "Input validation of the User-Agent."],
    "e": "If the authorization check only triggers for GET requests, an attacker can use HEAD to verify the existence of files or even extract data if the server is misconfigured."
  },
  {
    "c": "WSTG-INPV-04: HTTP Parameter Pollution",
    "q": "What is 'HTTP Parameter Pollution' (HPP)?",
    "a": "Supplying multiple parameters with the same name to see how the application and its components handle the duplicates.",
    "d": ["Filling a parameter with a very large amount of data to cause a crash.", "Using non-ASCII characters in a parameter to bypass a WAF.", "Adding extra '?' and '&' symbols to a URL to confuse the parser."],
    "e": "HPP (WSTG-INPV-04) can lead to various issues depending on whether the server takes the first, last, or a combination of the parameters (e.g., ?id=1&id=2)."
  },
  {
    "c": "WSTG-INPV-04: HTTP Parameter Pollution",
    "q": "How can HPP be used to bypass a Web Application Firewall (WAF)?",
    "a": "By splitting a malicious payload across multiple identical parameters that the WAF ignores but the backend joins together.",
    "d": ["By encrypting the parameter names using a custom algorithm.", "By using the 'POST' method instead of the 'GET' method.", "By setting the 'Content-Type' header to 'application/json'."],
    "e": "If a WAF only checks the first instance of 'par' but the backend uses the second, an attacker can hide a payload in the second instance: ?par=safe&par=malicious."
  },
  {
    "c": "WSTG-INPV-05: SQL Injection",
    "q": "What is the root cause of SQL Injection?",
    "a": "Mixing user-supplied data with SQL command strings without proper sanitization or parameterization.",
    "d": ["Allowing the web server to connect to the database as the 'root' user.", "Using a database that does not support encryption at rest.", "Failing to update the database software to the latest version."],
    "e": "SQLi occurs when an attacker's input is interpreted as part of the SQL command, allowing them to manipulate queries, bypass logins, or extract data."
  },
  {
    "c": "WSTG-INPV-05: SQL Injection",
    "q": "Which of the following is the most effective defense against SQL Injection?",
    "a": "Prepared Statements (Parameterized Queries).",
    "d": ["Using a Blacklist of common SQL keywords like 'UNION' and 'SELECT'.", "Encoding all user input in Base64 before sending it to the database.", "Converting all input to lowercase to prevent case-sensitive bypasses."],
    "e": "Prepared statements ensure that the database treats user input strictly as data, never as executable code, regardless of its content."
  },
  {
    "c": "WSTG-INPV-05: SQL Injection",
    "q": "What is 'Blind' SQL Injection?",
    "a": "An attack where the application does not return direct database results, so the attacker must infer data based on true/false responses or timing.",
    "d": ["An attack that is performed without the attacker seeing the target's source code.", "An attack that only works if the attacker is physically present at the server location.", "An attack that uses an automated tool like 'sqlmap' to find vulnerabilities."],
    "e": "Blind SQLi is more difficult but just as dangerous. Attackers use techniques like 'Boolean-based' or 'Time-based' (e.g., SLEEP(5)) to exfiltrate information bit by bit."
  },
  {
    "c": "WSTG-INPV-05: SQL Injection",
    "q": "In a 'Union-based' SQLi attack, what is the primary purpose of the 'UNION' operator?",
    "a": "To combine the results of the original query with a new query crafted by the attacker.",
    "d": ["To join two different database tables that have no common columns.", "To bypass the authentication check by joining the 'users' and 'sessions' tables.", "To encrypt the output of the database so it can bypass the WAF."],
    "e": "UNION allows an attacker to append their own data to the application's output, effectively 'leaking' information from other tables in the database."
  },
  {
    "c": "WSTG-INPV-06: LDAP Injection",
    "q": "What is the target of an LDAP Injection attack?",
    "a": "The queries sent to a Directory Service (like Active Directory) used for authentication or searching.",
    "d": ["The local file system of the web server.", "The communication between the browser and the web server via TLS.", "The configuration files of the Nginx or Apache web server."],
    "e": "LDAP Injection (WSTG-INPV-06) is similar to SQLi but targets directory services. Attackers use filters like '(*)' to bypass logins or extract user information."
  },
  {
    "c": "WSTG-INPV-07: XML Injection",
    "q": "What is 'XXE' (XML External Entity) injection?",
    "a": "An attack that exploits a vulnerable XML parser to read local files, access internal networks, or cause a DoS.",
    "d": ["An attack that injects malicious JavaScript into an XML-formatted response.", "An attack that overwrites the XML configuration of the web server.", "An attack that uses XML to perform a brute-force attack on a login form."],
    "e": "XXE (part of WSTG-INPV-07) occurs when an application parses XML input that contains a reference to an external entity, which the parser then tries to resolve."
  },
  {
    "c": "WSTG-INPV-08: SSI Injection",
    "q": "What does 'SSI' stand for and what is the risk of an injection vulnerability?",
    "a": "Server Side Includes; it can allow an attacker to execute arbitrary shell commands on the server.",
    "d": ["Secure Socket Interface; it can lead to a downgrade of the TLS version.", "Static Site Index; it can allow an attacker to delete files from the web root.", "Session State Identifier; it can lead to session hijacking and fixation."],
    "e": "SSI is a legacy technology used to inject dynamic content into HTML pages. If an attacker can inject SSI directives (like <!--#exec cmd=\"ls\" -->), they can gain command execution."
  },
  {
    "c": "WSTG-INPV-09: XPath Injection",
    "q": "What is 'XPath' and what does an injection attack allow an attacker to do?",
    "a": "A language for querying XML documents; injection allows an attacker to extract data from an XML database.",
    "d": ["A protocol for sending emails; injection allows an attacker to send spam.", "A method for encrypting files; injection allows an attacker to decrypt sensitive data.", "A tool for mapping network ports; injection allows an attacker to scan internal IPs."],
    "e": "XPath injection (WSTG-INPV-09) is the XML equivalent of SQL injection, allowing attackers to manipulate queries against XML data stores."
  },
  {
    "c": "WSTG-INPV-10: IMAP/SMTP Injection",
    "q": "Which type of application is most vulnerable to IMAP/SMTP injection?",
    "a": "Web-based mail clients or applications that send emails based on user-supplied data.",
    "d": ["Applications that only use the HTTP and HTTPS protocols.", "Applications that store all their data in a relational SQL database.", "Applications that are hosted on a Windows server using the IIS web server."],
    "e": "WSTG-INPV-10 tests for injection into mail server protocols. Attackers might add BCC headers to steal copies of emails or use 'newline' characters to inject new commands."
  },
  {
    "c": "WSTG-INPV-11: Code Injection",
    "q": "What is 'Code Injection' and how does it differ from Command Injection?",
    "a": "Code Injection targets the application's runtime (e.g., eval() in JS/PHP), while Command Injection targets the OS shell.",
    "d": ["Code Injection is always performed in the browser, while Command Injection is on the server.", "Code Injection requires a compiler, while Command Injection works with interpreted scripts.", "Code Injection is a type of XSS, while Command Injection is a type of SQLi."],
    "e": "WSTG-INPV-11 involves injecting language-specific code (like PHP or Python) into a vulnerable function that dynamically executes it."
  },
  {
    "c": "WSTG-INPV-11: Code Injection",
    "q": "Which PHP function is notorious for being a primary source of Code Injection if used with unvalidated input?",
    "a": "eval()",
    "d": ["echo()", "strlen()", "isset()"],
    "e": "The eval() function (and similar ones like assert()) treats its string argument as PHP code. Using it with user-supplied data is extremely dangerous."
  },
  {
    "c": "WSTG-INPV-12: Command Injection",
    "q": "What is the primary goal of a 'Command Injection' attack?",
    "a": "To execute arbitrary operating system commands on the server.",
    "d": ["To steal the user's session cookies and hijack their account.", "To inject malicious JavaScript into the application's responses.", "To bypass the authentication logic and gain administrative access."],
    "e": "WSTG-INPV-12 occurs when an application passes user input to a system shell (e.g., via system() or exec()) without proper sanitization."
  },
  {
    "c": "WSTG-INPV-12: Command Injection",
    "q": "An attacker uses a semi-colon ';' in a ping form to run a second command: '127.0.0.1 ; cat /etc/passwd'. What is this technique?",
    "a": "Command Injection (Shell Command Chaining)",
    "d": ["SQL Injection", "Cross-Site Scripting", "Directory Traversal"],
    "e": "Characters like ';', '&&', '|', and '`' are used by shells to chain or nest commands. If not filtered, an attacker can use them to run their own commands."
  },
  {
    "c": "WSTG-INPV-13: Format String Injection",
    "q": "In which programming languages is Format String Injection most commonly found?",
    "a": "C and C++",
    "d": ["JavaScript and Python", "PHP and Ruby", "Java and C#"],
    "e": "Format string vulnerabilities (WSTG-INPV-13) occur when user input is passed as the format argument to functions like printf(). It can lead to crashes or even code execution."
  },
  {
    "c": "WSTG-INPV-14: Incubated Vulnerabilities",
    "q": "What is an 'Incubated' (or persistent) vulnerability?",
    "a": "A multi-stage attack where the payload is stored first and executed later in a different context.",
    "d": ["A vulnerability that only exists during the development phase of the application.", "A vulnerability that is automatically patched by the operating system after a few days.", "A vulnerability that requires the attacker to be physically present at the data center."],
    "e": "WSTG-INPV-14 covers complex attacks where, for example, an injected value in a database causes a vulnerability when a separate daily cleanup script runs."
  },
  {
    "c": "WSTG-INPV-14: Incubated Vulnerabilities",
    "q": "A user injects a malicious string into a 'Username' field. A week later, an admin exports a CSV of users and their Excel program executes the string. This is:",
    "a": "Incubated Vulnerability (CSV Injection)",
    "d": ["Reflected XSS", "Command Injection", "SQL Injection"],
    "e": "CSV Injection is a classic incubated attack. The payload lies 'dormant' in the database until it is exported and opened in a spreadsheet application."
  },
  {
    "c": "WSTG-INPV-15: HTTP Splitting Smuggling",
    "q": "What is 'HTTP Request Smuggling'?",
    "a": "An attack that exploits discrepancies in how front-end and back-end servers interpret the 'Content-Length' and 'Transfer-Encoding' headers.",
    "d": ["Sending HTTP requests over a non-standard port like 8080 or 8443.", "Encoding the entire HTTP request using a proprietary encryption algorithm.", "Using a VPN to hide the attacker's real IP address from the web server."],
    "e": "Request Smuggling (WSTG-INPV-15) allows an attacker to 'smuggle' a hidden request inside another, potentially bypassing security controls or hijacking other users' requests."
  },
  {
    "c": "WSTG-INPV-15: HTTP Splitting Smuggling",
    "q": "What does 'CL.TE' stand for in the context of Request Smuggling?",
    "a": "Front-end uses Content-Length, Back-end uses Transfer-Encoding.",
    "d": ["Client Login, Token Exchange.", "Cache Level, Traffic Encryption.", "Common Language, Template Engine."],
    "e": "CL.TE vulnerabilities occur when the front-end (proxy) uses the Content-Length header to determine the request size, but the back-end uses the Transfer-Encoding (chunked) header."
  },
  {
    "c": "WSTG-INPV-16: Server Side Request Forgery (SSRF)",
    "q": "What is 'Server Side Request Forgery' (SSRF)?",
    "a": "An attack that tricks a server into making unauthorized requests to internal or external resources.",
    "d": ["An attack that forces the user's browser to send requests to a different domain.", "An attack that uses a fake server to intercept user credentials.", "An attack that modifies the server's local configuration files via a file upload."],
    "e": "In SSRF (WSTG-INPV-16), the attacker uses the server as a 'proxy' to reach systems the attacker cannot access directly (e.g., internal metadata services or databases)."
  },
  {
    "c": "WSTG-INPV-16: Server Side Request Forgery (SSRF)",
    "q": "A tester finds they can use a 'PDF generator' service to fetch files from 'http://169.254.169.254/'. What is their likely target?",
    "a": "Cloud instance metadata (e.g., AWS, Azure, GCP).",
    "d": ["The administrator's personal email account.", "The server's local Windows registry files.", "The application's public-facing static assets."],
    "e": "169.254.169.254 is a well-known IP for cloud metadata services. If accessible via SSRF, an attacker can steal sensitive information like IAM roles or API keys."
  },
  {
    "c": "WSTG-INPV-16: Server Side Request Forgery (SSRF)",
    "q": "Why is 'Allow-listing' better than 'Block-listing' for SSRF remediation?",
    "a": "Attackers can bypass block-lists using DNS rebinding, various IP encodings, or local redirections.",
    "d": ["Allow-listing is much faster for the server to process than block-listing.", "Block-listing requires a paid subscription to a security vendor.", "Allow-listing is a requirement of the HTTP/2 protocol specification."],
    "e": "Block-listing (e.g., banning 'localhost') is often insufficient. An allow-list of specific, trusted domains and protocols is the only robust defense against SSRF."
  },
  {
    "c": "WSTG-INPV-16: Server Side Request Forgery (SSRF)",
    "q": "What is 'Blind SSRF'?",
    "a": "An attack where the server makes a request but does not return the response to the attacker.",
    "d": ["An attack performed by someone who doesn't know the server's IP address.", "An attack that only works if the server is behind a firewall.", "An attack that uses an encrypted payload to hide the destination URL."],
    "e": "Even if the response isn't visible, Blind SSRF can be used for internal port scanning or triggering actions on internal systems (e.g., a 'webhook' that triggers a build)."
  }
];
var MASTER_POOL = pool;

var pool = [
  {
    "c": "WSTG-ERRH-01: Analysis of Error Codes",
    "q": "What is the security risk of revealing detailed database error messages to the end user?",
    "a": "It can reveal the database type, version, and table structure, aiding SQL injection attacks.",
    "d": ["It causes the database to consume more memory for each error.", "It automatically grants the user administrative access to the database.", "It allows the user to delete records from the database without a password."],
    "e": "WSTG-ERRH-01 emphasizes that error messages should be generic. Detailed errors (e.g., 'Syntax error near UNION') provide a 'map' for attackers to craft their payloads."
  },
  {
    "c": "WSTG-ERRH-01: Analysis of Error Codes",
    "q": "Which HTTP status code should be returned if a user tries to access a page they are not authorized to see?",
    "a": "403 Forbidden (or 404 Not Found to hide its existence).",
    "d": ["200 OK with an 'Access Denied' message in the body.", "500 Internal Server Error.", "302 Found (redirecting to the home page)."],
    "e": "While 403 is technically correct, 404 is often preferred for sensitive resources to avoid confirming the existence of the page to an unauthorized user."
  },
  {
    "c": "WSTG-ERRH-01: Analysis of Error Codes",
    "q": "An application returns a '500 Internal Server Error' only when a single quote is added to a parameter. What does this suggest to a tester?",
    "a": "The application might be vulnerable to SQL Injection.",
    "d": ["The server's hard drive is full.", "The user's internet connection is unstable.", "The application's TLS certificate has expired."],
    "e": "Discrepancies in error codes for different inputs are a key indicator of potential injection points. A 500 error often means the input 'broke' the backend query."
  },
  {
    "c": "WSTG-ERRH-01: Analysis of Error Codes",
    "q": "What is the recommended way to display errors to users while still allowing developers to debug issues?",
    "a": "Show a generic error message with a unique 'Reference ID' that maps to a detailed log entry on the server.",
    "d": ["Display the full error message in a hidden HTML comment.", "Send the full error message to the user's browser console using console.log().", "Encrypt the error message using a key that only developers know."],
    "e": "This approach balances user experience and security by providing a way for users to report errors without leaking internal system details."
  },
  {
    "c": "WSTG-ERRH-01: Analysis of Error Codes",
    "q": "How can an 'Account Enumeration' vulnerability be detected via error messages?",
    "a": "The application returns different messages like 'User not found' vs 'Invalid password'.",
    "d": ["The application returns a 200 OK status code for all login attempts.", "The application requires a CAPTCHA after three failed login attempts.", "The application logs the user's IP address for every failed attempt."],
    "e": "If error messages (or response times) differ based on whether a username exists, an attacker can use this to harvest valid usernames for further attacks."
  },
  {
    "c": "WSTG-ERRH-01: Analysis of Error Codes",
    "q": "What is the risk of revealing internal IP addresses or server paths in error messages?",
    "a": "It provides the attacker with information about the internal network topology and file system structure.",
    "d": ["It allows the attacker to bypass the web server's firewall.", "It automatically enables the 'Directory Listing' feature on the server.", "It causes the web server to run in 'Debug Mode' indefinitely."],
    "e": "Internal details help an attacker plan subsequent stages of an attack, such as targeting internal systems via SSRF or exploiting specific file paths."
  },
  {
    "c": "WSTG-ERRH-01: Analysis of Error Codes",
    "q": "A tester sees 'Microsoft OLE DB Provider for ODBC Drivers error' in a response. Which platform is the target likely using?",
    "a": "Windows / ASP / SQL Server",
    "d": ["Linux / PHP / MySQL", "macOS / Ruby on Rails / PostgreSQL", "FreeBSD / Python / Oracle"],
    "e": "Error messages often leak the underlying technology stack (OS, web server, database, etc.), which allows an attacker to search for specific known vulnerabilities."
  },
  {
    "c": "WSTG-ERRH-01: Analysis of Error Codes",
    "q": "Which security principle is most directly violated by verbose error messages?",
    "a": "Least Privilege",
    "d": ["Separation of Duties", "Defense in Depth", "Fail-Safe Defaults"],
    "e": "Revealing internal information grants the user 'privileges' (information) that they do not need to perform their legitimate tasks."
  },
  {
    "c": "WSTG-ERRH-01: Analysis of Error Codes",
    "q": "Why should 'Custom Error Pages' be configured in the web server settings?",
    "a": "To ensure that default server errors (like 404 or 500) do not reveal the server version or other sensitive data.",
    "d": ["To allow the application to process more requests per second.", "To improve the site's search engine optimization (SEO).", "To prevent the user from using the 'Back' button in their browser."],
    "e": "Default error pages (e.g., from Apache or IIS) often include version numbers and other technical details that should be suppressed in a production environment."
  },
  {
    "c": "WSTG-ERRH-01: Analysis of Error Codes",
    "q": "When testing for error handling, what should a tester do after finding a verbose error message?",
    "a": "Try to manipulate the input further to see if even more sensitive information can be extracted.",
    "d": ["Immediately report the vulnerability to the client and stop testing.", "Attempt to perform a denial of service attack on the error logging service.", "Request that the client provide them with administrative access to the server."],
    "e": "Finding a verbose error is often just the first step. It validates that the application is not handling certain inputs correctly, which often leads to more severe vulnerabilities."
  },
  {
    "c": "WSTG-ERRH-02: Analysis of Stack Traces",
    "q": "What is a 'Stack Trace'?",
    "a": "A report that provides information about the active stack frames at a specific point in time during the execution of a program.",
    "d": ["A log of all the HTTP requests sent by a user during a session.", "A list of all the files that have been uploaded to the server in the last 24 hours.", "A graph showing the server's CPU and memory usage over time."],
    "e": "WSTG-ERRH-02 focuses on stack traces. They are invaluable for developers but dangerous if leaked, as they show the exact sequence of function calls that led to an error."
  },
  {
    "c": "WSTG-ERRH-02: Analysis of Stack Traces",
    "q": "Why are stack traces particularly dangerous in the context of open-source libraries?",
    "a": "An attacker can see exactly which line of the library code is failing and search for known vulnerabilities in that specific version.",
    "d": ["Stack traces automatically download the library's source code to the user's computer.", "Stack traces prevent the library from being updated to a newer version.", "Stack traces encrypt the library's data using a weak algorithm."],
    "e": "If an attacker knows the library name, version, and the failing line, they can often find a pre-written exploit or craft one much more easily."
  },
  {
    "c": "WSTG-ERRH-02: Analysis of Stack Traces",
    "q": "A stack trace reveals a path like 'C:\\Users\\jdoe\\Documents\\Project\\src\\db.php'. What information has been leaked?",
    "a": "A local file path and a potential username ('jdoe').",
    "d": ["The server's public IP address.", "The database's administrator password.", "The application's TLS private key."],
    "e": "Stack traces often leak absolute file paths, which reveal the OS type, directory structure, and sometimes usernames of developers or service accounts."
  },
  {
    "c": "WSTG-ERRH-02: Analysis of Stack Traces",
    "q": "Which of the following technology-specific stack traces would be a sign of a Java-based application?",
    "a": "at com.example.app.MyServlet.doGet(MyServlet.java:45)",
    "d": ["in /var/www/html/index.php on line 12", "File \"app.py\", line 10, in <module>", "at Object.<anonymous> (index.js:5:3)"],
    "e": "The 'at package.Class.method(File.java:line)' format is characteristic of Java stack traces."
  },
  {
    "c": "WSTG-ERRH-02: Analysis of Stack Traces",
    "q": "How can stack traces aid in a 'Code Injection' attack?",
    "a": "They confirm if injected code was actually executed or where the execution failed.",
    "d": ["They provide a list of all the valid passwords for the application.", "They automatically encode the attacker's payload to bypass the WAF.", "They redirect the user's session to a malicious server."],
    "e": "Stack traces provide immediate feedback to an attacker about how their input is being processed by the application's internal logic."
  },
  {
    "c": "WSTG-ERRH-02: Analysis of Stack Traces",
    "q": "What is the best remediation to prevent stack traces from being displayed to users?",
    "a": "Configure the application's global exception handler to catch all errors and display a generic page.",
    "d": ["Use a very fast server so that errors occur less frequently.", "Obfuscate the application's source code before deploying it to production.", "Limit the number of users who can access the application at any one time."],
    "e": "A global 'catch-all' handler ensures that no matter where an error occurs, the user never sees the raw, sensitive output of the runtime environment."
  },
  {
    "c": "WSTG-ERRH-02: Analysis of Stack Traces",
    "q": "In a 'Dev' vs 'Prod' environment, where is it acceptable to see stack traces?",
    "a": "In the 'Dev' environment only, and only for authorized developers.",
    "d": ["In both environments, as they are necessary for troubleshooting.", "In the 'Prod' environment only, so that users can report bugs accurately.", "In neither environment, as they are always a security risk."],
    "e": "While useful for development, stack traces should never be visible to end users in production. Logs should be used for production troubleshooting."
  },
  {
    "c": "WSTG-ERRH-02: Analysis of Stack Traces",
    "q": "A tester finds a stack trace that includes SQL queries. This is a severe leak because:",
    "a": "It reveals the exact SQL syntax being used, making SQLi much easier to exploit.",
    "d": ["It automatically executes the SQL queries in the user's browser.", "It requires the user to have a local database installed on their computer.", "It causes the database to enter a 'Read-Only' mode for all users."],
    "e": "Leaking SQL queries via stack traces removes the 'blind' aspect of SQL injection, as the attacker can see exactly how the query is structured."
  },
  {
    "c": "WSTG-ERRH-02: Analysis of Stack Traces",
    "q": "Which tool can be used to automatically identify and flag stack traces in HTTP responses during a crawl?",
    "a": "OWASP ZAP or Burp Suite (using active/passive scanning).",
    "d": ["Nmap (using the -p- flag).", "Wireshark (using a display filter).", "Hashcat (using a dictionary attack)."],
    "e": "Interception proxies have built-in rules to detect common stack trace patterns and alert the tester to their presence."
  },
  {
    "c": "WSTG-ERRH-02: Analysis of Stack Traces",
    "q": "What is the risk of having 'Debug' mode enabled in a production framework (like Django or Flask)?",
    "a": "It often provides an interactive shell or extremely detailed stack traces to anyone who triggers an error.",
    "d": ["It makes the application run twice as fast but consumes more electricity.", "It automatically signs up every visitor for the application's newsletter.", "It requires the server to be restarted every time a user logs out."],
    "e": "Debug modes are designed for local development and often include features (like the Werkzeug debugger) that allow arbitrary code execution if exposed to the internet."
  }
];
var MASTER_POOL = pool;

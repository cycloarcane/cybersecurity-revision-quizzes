var pool = [
  {
    "c": "WSTG-INFO-01: Search Engine Reconnaissance",
    "q": "Which search engine operator is specifically used to restrict results to a particular domain or subdomain?",
    "a": "site:",
    "d": ["inurl:", "intitle:", "link:"],
    "e": "The 'site:' operator allows testers to focus their search on a specific domain, helping to discover subdomains, indexed pages, and potential information leaks restricted to that target."
  },
  {
    "c": "WSTG-INFO-01: Search Engine Reconnaissance",
    "q": "What is the primary purpose of using the 'filetype:' operator during search engine discovery?",
    "a": "To find specific file extensions like PDF, DOCX, or CONF that may contain sensitive data.",
    "d": ["To identify the web server software version.", "To bypass the robots.txt restrictions.", "To execute remote commands on the target server."],
    "e": "The 'filetype:' operator is used to locate specific file formats that might have been inadvertently indexed, such as configuration files, logs, or sensitive documents."
  },
  {
    "c": "WSTG-INFO-01: Search Engine Reconnaissance",
    "q": "Which resource is a curated collection of search queries designed to find security vulnerabilities and sensitive data?",
    "a": "Google Hacking Database (GHDB)",
    "d": ["OWASP Top 10", "CVE Mitre Database", "Exploit-DB"],
    "e": "The Google Hacking Database (GHDB), maintained by Exploit-DB, contains thousands of 'dorks' (specialised queries) used to find sensitive information leaked through search engines."
  },
  {
    "c": "WSTG-INFO-02: Fingerprinting Web Server",
    "q": "During banner grabbing, which HTTP header is most commonly used to identify the web server and its version?",
    "a": "Server",
    "d": ["X-Powered-By", "Content-Type", "Host"],
    "e": "The 'Server' response header typically contains the name and version of the web server software (e.g., Apache/2.4.41, nginx/1.18.0)."
  },
  {
    "c": "WSTG-INFO-02: Fingerprinting Web Server",
    "q": "How can a tester identify the underlying server OS if the 'Server' header is generic or obfuscated?",
    "a": "By analysing TCP/IP stack fingerprinting or observing differences in HTTP response headers ordering.",
    "d": ["By checking the robots.txt file.", "By performing a WHOIS lookup.", "By viewing the page source code."],
    "e": "Advanced fingerprinting involves looking at how the server responds to specific TCP packets (TTL, Window Size) or the specific set and order of HTTP headers it returns."
  },
  {
    "c": "WSTG-INFO-03: Review Webserver Metafiles",
    "q": "What is the primary function of the 'robots.txt' file from a security tester's perspective?",
    "a": "To identify directories and files that the administrator wants to hide from search engines.",
    "d": ["To define the password policy for the application.", "To list all valid usernames for the system.", "To enforce transport layer security (TLS)."],
    "e": "The 'robots.txt' file contains 'Disallow' directives that often point to sensitive paths (like /admin, /backup, /config) that administrators hope crawlers will ignore."
  },
  {
    "c": "WSTG-INFO-03: Review Webserver Metafiles",
    "q": "Which file, often found in the root directory, provides information about the site's structure for search engines and may reveal hidden pages?",
    "a": "sitemap.xml",
    "d": ["web.config", "index.html", "security.txt"],
    "e": "The 'sitemap.xml' file lists URLs that are available for crawling, which can help a tester map the application and discover pages not linked elsewhere."
  },
  {
    "c": "WSTG-INFO-03: Review Webserver Metafiles",
    "q": "What does the 'security.txt' file (RFC 9116) typically contain?",
    "a": "Contact information for reporting security vulnerabilities.",
    "d": ["A list of all known vulnerabilities in the application.", "The server's private cryptographic keys.", "The database connection string."],
    "e": "The 'security.txt' file is a standard used by organisations to define their vulnerability disclosure policy and provide contact details for security researchers."
  },
  {
    "c": "WSTG-INFO-04: Enumerate Applications",
    "q": "What technique is used to find multiple websites hosted on the same IP address using the same port?",
    "a": "Virtual Host (VHost) enumeration",
    "d": ["Port scanning", "DNS Zone Transfer", "Banner grabbing"],
    "e": "Virtual Host enumeration involves trying different 'Host' header values to see if the web server responds with different content, revealing other sites on the same infrastructure."
  },
  {
    "c": "WSTG-INFO-04: Enumerate Applications",
    "q": "How can DNS 'CNAME' records be used during the information gathering phase?",
    "a": "To identify if a subdomain is pointing to a third-party cloud service like AWS S3 or Heroku.",
    "d": ["To brute-force the administrator's password.", "To bypass the application's firewall.", "To encrypt the communication between the client and server."],
    "e": "CNAME records reveal aliases. If a CNAME points to a deprovisioned external service, it could indicate a risk of subdomain takeover (WSTG-CONF-10)."
  },
  {
    "c": "WSTG-INFO-05: Review Webpage Content",
    "q": "Why should a tester review JavaScript source maps (.map files) if available?",
    "a": "They can reconstruct the original, unminified source code of the application.",
    "d": ["They contain the server's environment variables.", "They are used to bypass CSRF protections.", "They define the database schema."],
    "e": "Source maps allow developers to debug minified code. If leaked, they allow a tester to see the original source code, including comments and internal logic."
  },
  {
    "c": "WSTG-INFO-05: Review Webpage Content",
    "q": "What information leakage can often be found in HTML comments (<!-- -->)?",
    "a": "Internal IP addresses, developer notes, SQL snippets, or old code references.",
    "d": ["The user's session token.", "The browser's cookies.", "The server's root password."],
    "e": "Developers often leave notes or commented-out code in HTML that can reveal sensitive information about the backend or upcoming features."
  },
  {
    "c": "WSTG-INFO-06: Identify Application Entry Points",
    "q": "In the context of WSTG-INFO-06, what is considered an 'entry point'?",
    "a": "Any location where the application accepts user-controllable input (parameters, headers, etc.).",
    "d": ["Only the physical server room door.", "Only the main login page.", "Only the database connection string."],
    "e": "Entry points include GET/POST parameters, HTTP headers (User-Agent, Referer), Cookies, and any other data the application processes from the user."
  },
  {
    "c": "WSTG-INFO-06: Identify Application Entry Points",
    "q": "Which HTTP header is often used by proxies to identify the original IP address of the client and should be tested for spoofing?",
    "a": "X-Forwarded-For",
    "d": ["X-Powered-By", "X-Frame-Options", "X-Content-Type-Options"],
    "e": "The 'X-Forwarded-For' header is commonly used for logging or access control based on IP. It should be tested to see if the application trusts user-supplied values."
  },
  {
    "c": "WSTG-INFO-07: Map Execution Paths",
    "q": "What is the difference between 'spidering' and 'forced browsing'?",
    "a": "Spidering follows links; forced browsing tries to guess unlinked resources (brute-forcing).",
    "d": ["Spidering is manual; forced browsing is automated.", "Spidering targets the database; forced browsing targets the filesystem.", "There is no difference between the two terms."],
    "e": "Spidering (crawling) discovers the visible application structure. Forced browsing (fuzzing/directory busting) attempts to find hidden files and directories."
  },
  {
    "c": "WSTG-INFO-08: Fingerprint Framework",
    "q": "Which HTTP header is often added by frameworks like Express, ASP.NET, or PHP to identify themselves?",
    "a": "X-Powered-By",
    "d": ["X-XSS-Protection", "X-Frame-Options", "Server"],
    "e": "The 'X-Powered-By' header is a common way for frameworks to announce their presence (e.g., 'X-Powered-By: PHP/7.4.3')."
  },
  {
    "c": "WSTG-INFO-08: Fingerprint Framework",
    "q": "The cookie name 'JSESSIONID' is a strong indicator of which technology?",
    "a": "Java EE (Servlet) containers like Tomcat, JBoss, or WebLogic.",
    "d": ["PHP-based applications.", "ASP.NET applications.", "Python Django applications."],
    "e": "Session cookie names are often specific to the platform: JSESSIONID (Java), PHPSESSID (PHP), ASP.NET_SessionId (ASP.NET)."
  },
  {
    "c": "WSTG-INFO-09: Fingerprint Web Application",
    "q": "What is a 'favicon.hash' and how is it used in reconnaissance?",
    "a": "A hash of the website's icon used to identify the specific CMS or application version via Shodan.",
    "d": ["A cryptographic signature for the site's SSL certificate.", "A method to bypass the browser's Same-Origin Policy.", "A way to encrypt small data packets in the URL."],
    "e": "Search engines like Shodan index favicon hashes (often using MurmurHash3). Comparing these hashes can uniquely identify specific software products (e.g., Jenkins, WordPress)."
  },
  {
    "c": "WSTG-INFO-10: Map Architecture",
    "q": "What can the 'Via' or 'X-Cache' headers reveal during architectural mapping?",
    "a": "The presence of proxy servers, load balancers, or CDNs in the request path.",
    "d": ["The total number of users currently logged into the system.", "The password of the database administrator.", "The physical location of the server's data centre."],
    "e": "These headers are added by intermediaries (like Squid, Varnish, or Akamai) and provide clues about the network infrastructure sititng in front of the application."
  },
  {
    "c": "WSTG-INFO-05: Review Webpage Content",
    "q": "What is the security risk of leaving 'TODO' comments in production JavaScript files?",
    "a": "They may reveal unfinished features or known security weaknesses to an attacker.",
    "d": ["They cause the application to crash in certain browsers.", "They significantly increase the server's response time.", "They are used by search engines to downgrade the site's ranking."],
    "e": "Internal notes like 'TODO: implement authentication check' or 'FIXME: SQL injection' are high-value targets for attackers performing reconnaissance."
  },
  {
    "c": "WSTG-INFO-03: Review Webserver Metafiles",
    "q": "What does a 'crossdomain.xml' file define?",
    "a": "The permissions for Adobe Flash (and other RIA) to access data across domains.",
    "d": ["The list of allowed IP addresses for the administrator console.", "The password hashing algorithm used by the application.", "The default language settings for the website."],
    "e": "WSTG-CONF-08 and INFO-03 cover these legacy policy files. If overly permissive (*), they can allow cross-domain data theft in environments supporting Flash."
  },
  {
    "c": "WSTG-INFO-02: Fingerprinting Web Server",
    "q": "If a server responds with 'Server: Microsoft-IIS/10.0', what is the likely underlying Operating System?",
    "a": "Windows Server 2016 or 2019",
    "d": ["Ubuntu Linux 20.04", "Red Hat Enterprise Linux 8", "FreeBSD 12"],
    "e": "IIS 10.0 is the version bundled with Windows Server 2016 and 2019, allowing the tester to narrow down the OS and search for specific OS vulnerabilities."
  },
  {
    "c": "WSTG-INFO-06: Identify Application Entry Points",
    "q": "Which tool is commonly used to find hidden parameters by brute-forcing potential parameter names?",
    "a": "Arjun",
    "d": ["Nikto", "Sqlmap", "Wireshark"],
    "e": "Tools like Arjun help identify hidden parameters (e.g., ?debug=true, ?admin=1) that are not linked in the UI but are processed by the server."
  },
  {
    "c": "WSTG-INFO-01: Search Engine Reconnaissance",
    "q": "What does the 'intitle:index of' dork typically find?",
    "a": "Directory listing pages, which may expose sensitive files.",
    "d": ["The homepage of the target website.", "The login page for the administrator panel.", "The documentation for the web server software."],
    "e": "Web servers with directory listing enabled often have 'Index of' in the title. This dork is a classic way to find unprotected directories."
  },
  {
    "c": "WSTG-INFO-10: Map Architecture",
    "q": "What is the primary goal of mapping the application architecture?",
    "a": "To understand the data flow and identify the components (WAF, App Server, DB) to target.",
    "d": ["To create a visually appealing diagram for the final report.", "To estimate the monthly hosting costs of the application.", "To identify the marketing strategy used by the company."],
    "e": "Mapping architecture helps a tester understand where validation happens (e.g., at the WAF or the App) and identify potential weak links in the infrastructure."
  }
];
var MASTER_POOL = pool;

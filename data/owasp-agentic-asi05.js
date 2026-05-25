var pool = [
  {
    "c": "ASI05: Unexpected Code Execution",
    "q": "What is the primary danger of 'Unexpected Code Execution' (ASI05)?",
    "a": "An attacker tricks the agent into generating and running malicious code that compromises the host system or data.",
    "d": [
      "The agent's code being written in a language that is difficult to learn.",
      "The agent refusing to write any code for the user.",
      "A user stealing the agent's source code from a public repository."
    ],
    "e": "Agents with 'Code Interpreter' or 'Shell' tools are highly attractive targets. If they don't have strict sandboxing, an attacker can achieve Remote Code Execution (RCE) via a simple prompt."
  },
  {
    "c": "ASI05: Unexpected Code Execution",
    "q": "What is 'Sandboxing' in the context of agentic code execution?",
    "a": "Running the code interpreter in a strictly isolated environment with limited access to the network, file system, and system calls.",
    "d": [
      "A place where the agent can play with digital toys.",
      "A method for encrypting the agent's system prompt.",
      "A way to make the agent's responses more polite."
    ],
    "e": "Sandboxing (e.g., using Docker, gVisor, or WASM) is the most critical defense. It ensures that even if malicious code is run, it cannot harm the underlying host or exfiltrate data."
  },
  {
    "c": "ASI05: Unexpected Code Execution",
    "q": "Which of these is a 'Generic Scenario' for ASI05?",
    "a": "An agent is asked to 'analyze this CSV file' and is tricked by a malicious formula that executes a shell command to delete all files.",
    "d": [
      "The agent's server runs out of disk space.",
      "An attacker performs a phishing attack on the agent's developer.",
      "The AI model produces a response with a high hallucination rate."
    ],
    "e": "This scenario demonstrates how an agent's helpfulness can be exploited to run harmful code hidden in untrusted data files."
  },
  {
    "c": "ASI05: Unexpected Code Execution",
    "q": "What is 'Execution Timeout' for code-executing agents?",
    "a": "A security setting that kills a generated script if it runs for more than a few seconds, preventing 'infinite loop' or resource exhaustion attacks.",
    "d": [
      "The agent's model being hosted on a multi-tenant server.",
      "The agent's API returns a 500 Internal Server Error.",
      "The agent taking a break after running a long script."
    ],
    "e": "Timeouts are a critical defense against 'Denial of Service' attacks where an attacker tricks the agent into running a script that consumes 100% CPU forever."
  },
  {
    "c": "ASI05: Unexpected Code Execution",
    "q": "How can 'Static Analysis of Generated Code' mitigate ASI05?",
    "a": "By running a linter or security scanner (like Bandit) on the code produced by the LLM before it is allowed to execute.",
    "d": [
      "By making the agent's code more readable for the developer.",
      "By checking for syntax errors in the agent's prompts.",
      "By analyzing the agent's network traffic patterns."
    ],
    "e": "Scanning the generated code for dangerous functions (like 'os.system' or 'eval') can catch many RCE attempts before they even start."
  },
  {
    "c": "ASI05: Unexpected Code Execution",
    "q": "What is 'Resource Quotas' in the context of agentic code execution?",
    "a": "Limiting the CPU, RAM, and Disk space that the agent's code interpreter is allowed to consume.",
    "d": [
      "The maximum number of users the agent can talk to.",
      "The amount of money the agent's developer is allowed to spend.",
      "The number of words the agent can use in its responses."
    ],
    "e": "Quotas prevent an attacker from using the agent's code interpreter to launch a 'fork bomb' or fill up the host system's disk."
  },
  {
    "c": "ASI05: Unexpected Code Execution",
    "q": "What is the 'Eval' danger?",
    "a": "Allowing an agent to pass raw strings into an 'eval()' or 'exec()' function, which is a direct path to arbitrary code execution.",
    "d": [
      "The agent being too critical of the user's questions.",
      "The agent's code being evaluated by a human developer.",
      "The agent's performance being measured by a benchmark."
    ],
    "e": "Using 'eval' on untrusted input is one of the most common and dangerous security flaws in any software, especially in AI agents that generate text."
  },
  {
    "c": "ASI05: Unexpected Code Execution",
    "q": "Why is 'No-Network' sandboxing critical for ASI05?",
    "a": "It prevents the generated code from downloading further malicious payloads or exfiltrating stolen data to an attacker's server.",
    "d": [
      "Because it makes the agent's code run faster.",
      "Because it saves money on the agent's internet bill.",
      "Because it allows the agent to work offline."
    ],
    "e": "If the sandbox has no network access, even a 'perfectly written' data-stealing script becomes useless because it cannot send the data anywhere."
  },
  {
    "c": "ASI05: Unexpected Code Execution",
    "q": "What is 'Input Sanitization' for code interpreters?",
    "a": "Stripping or escaping dangerous characters from the data that the agent is going to include in a generated script.",
    "d": [
      "The agent's model weights being leaked to a public repository.",
      "Removing all comments from the agent's code.",
      "Deleting the agent's conversation history."
    ],
    "e": "If the agent is building a script by concatenating strings, it must ensure that a user-provided string cannot 'break out' of its quotes and execute a new command."
  },
  {
    "c": "ASI05: Unexpected Code Execution",
    "q": "What is 'Ephemeral Runtimes'?",
    "a": "Using a fresh, clean execution environment for every single code-execution task, then destroying it immediately after.",
    "d": [
      "A runtime that is very fast and efficient.",
      "The agent's inference temperature being set to zero.",
      "A runtime that is only available for a few minutes a day."
    ],
    "e": "Ephemeral runtimes prevent 'persistence.' If an attacker manages to drop a malicious file, it will be wiped out as soon as the current task is finished."
  },
  {
    "c": "ASI05: Unexpected Code Execution",
    "q": "What is the risk of 'Dynamic Library Installation'?",
    "a": "An agent using 'pip install' or similar commands to download unverified code from the internet during its execution.",
    "d": [
      "The agent's library taking up too much disk space.",
      "The agent's library being written in an old language.",
      "The agent's library being hard to understand."
    ],
    "e": "Allowing an agent to install its own libraries is a massive risk. It should only be allowed to use a pre-approved, local 'manifest' of safe packages."
  },
  {
    "c": "ASI05: Unexpected Code Execution",
    "q": "How can 'Human Review' mitigate ASI05?",
    "a": "By requiring a human to read and approve any code the agent generates before it is allowed to run.",
    "d": [
      "The agent's training logs being stored in a public S3 bucket.",
      "By having a human watch the agent's screen as it works.",
      "By having a human correct the agent's spelling errors."
    ],
    "e": "This 'Human-in-the-loop' approach is the most secure, but it is often bypassed for the sake of speed and autonomy."
  },
  {
    "c": "ASI05: Unexpected Code Execution",
    "q": "What is 'Logic Bomb' injection in agentic code?",
    "a": "An attacker tricks the agent into writing code that looks safe but contains a hidden 'bomb' that triggers on a specific date or condition.",
    "d": [
      "The agent's developer using an outdated version of the Python interpreter.",
      "A bug in the agent's code that causes it to crash.",
      "A user asking the agent to tell a joke that is not funny."
    ],
    "e": "Because LLMs can write complex code, it is easy to hide a malicious 'if' statement that is hard for humans or simple scanners to find."
  },
  {
    "c": "ASI05: Unexpected Code Execution",
    "q": "What is 'Container Escape'?",
    "a": "A vulnerability that allows malicious code running inside a sandbox to 'break out' and gain access to the host operating system.",
    "d": [
      "The agent's response being intercepted by a man-in-the-middle.",
      "The agent's code being moved to a different container.",
      "The agent's container being deleted by a developer."
    ],
    "e": "A sandbox is only as good as its 'walls.' If an attacker can find a kernel exploit or a misconfiguration, they can bypass the sandbox entirely."
  },
  {
    "c": "ASI05: Unexpected Code Execution",
    "q": "What is 'Read-Only File System' for interpreters?",
    "a": "Configuring the code execution environment so that it can read data but cannot write or modify any files on the disk.",
    "d": [
      "The agent's model experiencing catastrophic forgetting.",
      "A way to make the agent's database more secure.",
      "A technique for training the agent on how to read."
    ],
    "e": "Preventing 'Write' access is a great defense against an agent being tricked into installing malware or overwriting critical system files."
  },
  {
    "c": "ASI05: Unexpected Code Execution",
    "q": "What is 'Instruction-to-Code' mapping?",
    "a": "A design where the agent cannot write raw code, but can only choose from a set of pre-written, safe code templates.",
    "d": [
      "The agent's API tokens being rotated every hour.",
      "Translating the agent's instructions into a different language.",
      "Giving the agent a list of all the code it has ever written."
    ],
    "e": "This 'Template-Based Agency' is far more secure than 'Open-Ended Agency' because the agent never actually 'writes' any new executable logic."
  },
  {
    "c": "ASI05: Unexpected Code Execution",
    "q": "What is the 'Jailbreak' risk for code execution?",
    "a": "Using clever prompting to trick the agent into ignoring its 'no-code-execution' policy.",
    "d": [
      "The agent's model weights being stored on an insecure volume.",
      "The agent's code being stolen by a competitor.",
      "The agent's training logs being stored in a public S3 bucket."
    ],
    "e": "Jailbreaking attempts to find a way to make the model 'forget' its safety instructions, often by using complex role-play or hypothetical scenarios."
  },
  {
    "c": "ASI05: Unexpected Code Execution",
    "q": "How does 'Mutual Authentication' protect code-execution tools?",
    "a": "By ensuring that only the specific, authorized agent process can send code to the interpreter service.",
    "d": [
      "By increasing the complexity of the agent's system prompt instructions.",
      "By requiring the agent to be nice to the interpreter.",
      "By having the agent and the interpreter be written in the same language."
    ],
    "e": "If the code interpreter is a separate microservice, it must verify that the 'code' is coming from a trusted agent and not from a rogue network source."
  },
  {
    "c": "ASI05: Unexpected Code Execution",
    "q": "What is 'Wasm-Based' sandboxing?",
    "a": "Executing agent-generated code inside a WebAssembly runtime, which provides high-performance isolation and a very small attack surface.",
    "d": [
      "A new way to write agents that only works in a web browser.",
      "A technique for making the agent's code run faster.",
      "A way to encrypt the agent's code on the disk."
    ],
    "e": "WASM is increasingly popular for agentic AI because it is designed from the ground up to be securely isolated from the host environment."
  },
  {
    "c": "ASI05: Unexpected Code Execution",
    "q": "What is 'System Call Filtering' (seccomp)?",
    "a": "Limiting the specific 'low-level' actions (like opening a file or starting a new process) that the code interpreter is allowed to ask the OS to do.",
    "d": [
      "Using a more robust hashing algorithm for storing agent states.",
      "A way to make the agent's code more efficient.",
      "Filtering out the agent's phone calls to its developer."
    ],
    "e": "By blocking dangerous system calls, you can prevent an attacker from using a code-execution exploit to gain deep control over the server kernel."
  },
  {
    "c": "ASI05: Unexpected Code Execution",
    "q": "What is 'Output Filtering' for code execution?",
    "a": "Analyzing the data returned by the executed code to ensure it doesn't contain sensitive secrets like API keys or PII.",
    "d": [
      "The agent's training logs being stored in a public S3 bucket.",
      "Making the code's output more colorful and easy to read.",
      "Deleting the code's output as soon as it is received."
    ],
    "e": "Even if the code runs safely, its *output* might be used to exfiltrate data. Filtering the output is a critical second layer of defense."
  },
  {
    "c": "ASI05: Unexpected Code Execution",
    "q": "What is 'Cross-Language' exploitation risk?",
    "a": "The agent writes code in a language (like Python) that calls another language (like C) to exploit a memory corruption vulnerability.",
    "d": [
      "The agent being confused by a code snippet written in a language it doesn't know.",
      "The agent's code being translated into a different language incorrectly.",
      "Two agents talking to each other in different languages."
    ],
    "e": "Complex agents that can use multiple languages have a larger attack surface, as they can bridge between different security models."
  },
  {
    "c": "ASI05: Unexpected Code Execution",
    "q": "How can 'Code Obfuscation' by an agent be a red flag?",
    "a": "If an agent starts writing code that is intentionally difficult to read (e.g., using Base64), it may be trying to hide malicious intent from a scanner.",
    "d": [
      "The agent's code being so good that no human can understand it.",
      "The agent using too many fancy words in its code comments.",
      "The agent's code being written in a very old language."
    ],
    "e": "Security monitors should alert on 'unusually complex' or 'obfuscated' code, as there is rarely a legitimate reason for an agent to hide its logic from its own developers."
  },
  {
    "c": "ASI05: Unexpected Code Execution",
    "q": "What is 'Dependency Locking' in a code-execution sandbox?",
    "a": "Ensuring the sandbox only contains a fixed, audited set of libraries that cannot be updated or changed by the agent.",
    "d": [
      "The agent's developer losing the administrative password.",
      "Using a very strong password for the agent's account.",
      "Making the agent's code open source."
    ],
    "e": "A 'locked-down' environment is much harder to exploit than one where an agent (or an attacker) can dynamically change the available tools."
  },
  {
    "c": "ASI05: Unexpected Code Execution",
    "q": "What is the risk of 'Reflective Code Execution'?",
    "a": "The agent writing code that modifies its own execution environment or the agent's own 'system prompt' logic at runtime.",
    "d": [
      "The agent's API returning a 429 Too Many Requests error.",
      "The agent's code being mirrored on another server for backup.",
      "The agent taking a long time to think about its own code."
    ],
    "e": "Self-modifying code is a nightmare for security audits, as it means the agent's behavior can change in ways that were never intended by the original developers."
  },
  {
    "c": "ASI05: Unexpected Code Execution",
    "q": "What is 'Least-Privilege User' (LPU) for code execution?",
    "a": "Running the code interpreter as a highly restricted user account that has no permissions to access other files or systems.",
    "d": [
      "The agent's model being hosted on an unencrypted volume.",
      "The agent only being allowed to talk to one user at a time.",
      "The agent's developer being a junior employee with limited access."
    ],
    "e": "If the 'Python process' is running as 'nobody,' even a successful RCE attack won't allow the attacker to read the '/root/' directory or modify system files."
  }
];
var MASTER_POOL = pool;

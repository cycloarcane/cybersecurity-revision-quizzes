var pool = [
  {
    "c": "ASI05: Unexpected Code Execution",
    "q": "What is the primary danger associated with 'Unexpected Code Execution' (ASI05)?",
    "a": "The agent autonomously generates and runs malicious code, leading to Remote Code Execution (RCE) on the host.",
    "d": [
      "The agent's code being hard for humans to understand.",
      "The agent's code containing a simple logic error.",
      "The agent failing to write code when asked."
    ],
    "e": "If an agent has the power to 'write and run' code (e.g., in a Python interpreter), an attacker can trick it into executing a script that takes over the underlying server."
  },
  {
    "c": "ASI05: Unexpected Code Execution",
    "q": "Why is 'Sandboxing' essential for agents that can execute code?",
    "a": "To isolate the execution environment from the host system's files, network, and processes.",
    "d": [
      "To make the code run faster.",
      "To allow the agent to use more RAM.",
      "To prevent the agent's code from being stolen."
    ],
    "e": "A robust sandbox (like a gVisor container or a WASM runtime) ensures that even if the agent runs a malicious 'rm -rf /', the damage is limited to the sandbox."
  },
  {
    "c": "ASI05: Unexpected Code Execution",
    "q": "What is 'Code Hallucination' in the context of ASI05 security?",
    "a": "The model generates code that imports non-existent or malicious libraries that an attacker has 'squatted' in public repositories.",
    "d": [
      "The agent thinking it can write code when it actually can't.",
      "The agent writing code that doesn't have any comments.",
      "The agent's code having a syntax error."
    ],
    "e": "Attackers can publish malicious libraries with names similar to what an LLM might 'hallucinate,' leading the agent to download and run a trojan."
  },
  {
    "c": "ASI05: Unexpected Code Execution",
    "q": "How does 'Indirect Prompt Injection' trigger ASI05?",
    "a": "By providing data (like a README) that instructs the agent to write and execute a 'utility script' that contains a backdoor.",
    "d": [
      "By changing the agent's system clock.",
      "By deleting the agent's training data.",
      "By making the agent's UI use a different font."
    ],
    "e": "If the agent's workflow involves 'reading data and then writing a script to process it,' an attacker can inject malicious script-writing instructions into that data."
  },
  {
    "c": "ASI05: Unexpected Code Execution",
    "q": "Which of these is a 'Least Agency' mitigation for code execution?",
    "a": "Disallowing network access for the code interpreter and restricting it to a limited set of pre-installed libraries.",
    "d": [
      "Giving the agent full root access to the server to ensure it can install any library it needs.",
      "Allowing the agent to execute code in any language it wants.",
      "Disabling all logs for the code interpreter."
    ],
    "e": "Restricting the capabilities of the interpreter (no network, no shell access, no file system) significantly reduces the risk of an RCE exploit being successful."
  },
  {
    "c": "ASI05: Unexpected Code Execution",
    "q": "What is 'Polyglot Injection' in agentic AI?",
    "a": "Crafting a payload that is interpreted as safe data by one part of the agent but as executable code by another.",
    "d": [
      "The agent being able to write code in multiple languages.",
      "The agent's code being translated into multiple languages.",
      "A bug that causes the agent to speak in tongues."
    ],
    "e": "A polyglot attack might look like a harmless CSV file to a validator but be executed as a malicious Python script by the agent's execution module."
  },
  {
    "c": "ASI05: Unexpected Code Execution",
    "q": "Which of these is a 'Generic Scenario' for ASI05?",
    "a": "A data analysis agent is tricked into running a Python script that exfiltrates the database's environment variables to an external URL.",
    "d": [
      "The agent's server runs out of memory while training.",
      "An attacker performs a social engineering attack on the agent's user.",
      "The AI model produces a response with a high number of spelling errors."
    ],
    "e": "This scenario demonstrates an attacker exploiting the agent's 'code execution' capability to perform a classic data exfiltration attack."
  },
  {
    "c": "ASI05: Unexpected Code Execution",
    "q": "What is 'Execution Timeout' for code-executing agents?",
    "a": "A security setting that kills a generated script if it runs for more than a few seconds, preventing 'infinite loop' or resource exhaustion attacks.",
    "d": [
      "The amount of time a user has to wait for the agent to finish.",
      "A way to make the agent's code run faster.",
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
      "Cleaning the physical keyboard that the developer uses.",
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
      "A runtime that is only available for a few minutes a day.",
      "A runtime that is written in a language that is easy to learn."
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
      "By having a human write the agent's code for it.",
      "By having a human watch the agent's screen as it works.",
      "By having a human correct the agent's spelling errors."
n    ],
    "e": "This 'Human-in-the-loop' approach is the most secure, but it is often bypassed for the sake of speed and autonomy."
  },
  {
    "c": "ASI05: Unexpected Code Execution",
    "q": "What is 'Logic Bomb' injection in agentic code?",
    "a": "An attacker tricks the agent into writing code that looks safe but contains a hidden 'bomb' that triggers on a specific date or condition.",
    "d": [
      "A physical bomb that is placed in the AI's data center.",
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
      "An agent running away from its physical server.",
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
      "A hard drive that is broken and cannot be written to.",
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
      "Mapping the agent's code to a physical map of the world.",
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
      "The agent's developer being arrested and put in jail.",
      "The agent's code being stolen by a competitor.",
      "The agent's server being physically broken into."
    ],
    "e": "Jailbreaking attempts to find a way to make the model 'forget' its safety instructions, often by using complex role-play or hypothetical scenarios."
  },
  {
    "c": "ASI05: Unexpected Code Execution",
    "q": "How does 'Mutual Authentication' protect code-execution tools?",
    "a": "By ensuring that only the specific, authorized agent process can send code to the interpreter service.",
    "d": [
      "By making the agent and the interpreter use the same password.",
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
      "Filtering out the agent's phone calls to its developer.",
      "A way to make the agent's code more efficient.",
      "Checking the agent's server for physical damage."
    ],
    "e": "By blocking dangerous system calls, you can prevent an attacker from using a code-execution exploit to gain deep control over the server kernel."
  },
  {
    "c": "ASI05: Unexpected Code Execution",
    "q": "What is 'Output Filtering' for code execution?",
    "a": "Analyzing the data returned by the executed code to ensure it doesn't contain sensitive secrets like API keys or PII.",
    "d": [
      "Hiding the code's output from the agent's developer.",
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
      "Locking the physical door to the AI's data center.",
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
      "The agent seeing its own reflection in a mirror.",
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
      "The agent's developer being a junior employee with limited access.",
      "The agent only being allowed to talk to one user at a time.",
      "The agent's server being physically small."
    ],
    "e": "If the 'Python process' is running as 'nobody,' even a successful RCE attack won't allow the attacker to read the '/root/' directory or modify system files."
  }
];
var MASTER_POOL = pool;

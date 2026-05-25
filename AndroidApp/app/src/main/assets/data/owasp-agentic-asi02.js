var pool = [
  {
    "c": "ASI02: Tool Misuse & Exploitation",
    "q": "What is the core vulnerability described by 'Tool Misuse & Exploitation' (ASI02)?",
    "a": "The agent is tricked into calling available tools with malicious parameters or in an unintended sequence.",
    "d": [
      "The tool's underlying API is vulnerable to a classic SQL injection attack.",
      "The agent's user interface is slow to respond to tool calls.",
      "The attacker steals the source code of the tools the agent uses."
    ],
    "e": "ASI02 focuses on the interaction between the agent and its environment, where an attacker leverages the agent's agency to exploit APIs, databases, or shells."
  },
  {
    "c": "ASI02: Tool Misuse & Exploitation",
    "q": "How can an agent be tricked into performing 'Parameter Injection' in a tool call?",
    "a": "By providing data that the agent blindly copies into a tool's input field, such as a shell command or SQL query.",
    "d": [
      "By exploiting a race condition in the agent's tool-calling logic.",
      "By training the agent on more secure data.",
      "By reducing the number of tools the agent can access."
    ],
    "e": "If an agent doesn't sanitize the data it passes to tools, it can inadvertently execute malicious commands (like command injection or SQLi) on behalf of an attacker."
  },
  {
    "c": "ASI02: Tool Misuse & Exploitation",
    "q": "Which mitigation follows the 'Least Agency' principle for tool access?",
    "a": "Providing the agent with granular, read-only API keys instead of administrative credentials.",
    "d": [
      "Giving the agent access to all system APIs to ensure it can finish any task.",
      "Encrypting the agent's logs so the developer cannot see what it did.",
      "Using a single master password for all tools to simplify management."
    ],
    "e": "Least Agency for tools ensures that even if the agent is compromised or tricked, the potential damage is limited to the specific, restricted permissions of that tool."
  },
  {
    "c": "ASI02: Tool Misuse & Exploitation",
    "q": "What is 'Unintended Tool Chaining'?",
    "a": "An attacker tricks the agent into using the output of one tool to feed a malicious input into another, bypassing individual tool limits.",
    "d": [
      "The agent using two tools at the same time to speed up a task.",
      "A bug in the agent's code that causes it to call the wrong tool.",
      "The agent's tools being hosted on different servers."
    ],
    "e": "Attackers can exploit the agent's planning ability to chain benign tool calls in a way that creates a harmful outcome, such as reading a file and then emailing its contents."
  },
  {
    "c": "ASI02: Tool Misuse & Exploitation",
    "q": "Why is 'Human-in-the-loop' (HITL) important for high-risk tool calls?",
    "a": "It provides a manual check to ensure the tool call is appropriate for the current context before execution.",
    "d": [
      "It makes the agent run faster by offloading work to a human.",
      "It is only required for agents that don't use LLMs.",
      "It prevents the agent from using too many tokens."
    ],
    "e": "For actions like deleting data or sending emails, requiring a human to approve the specific tool parameters can prevent automated exploitation."
  },
  {
    "c": "ASI02: Tool Misuse & Exploitation",
    "q": "What is a 'Tool Sandbox'?",
    "a": "An isolated environment (like a container) where tool execution happens, preventing lateral movement if a tool is exploited.",
    "d": [
      "A place where developers can play with the agent's code.",
      "A specialized database for storing agent prompts.",
      "A frontend feature that allows users to see tool outputs."
    ],
    "e": "Sandboxing ensures that if an agent is tricked into running a malicious shell command, the impact is confined to the sandbox and cannot reach the host system."
  },
  {
    "c": "ASI02: Tool Misuse & Exploitation",
    "q": "Which of these is a 'Generic Scenario' for ASI02?",
    "a": "A customer support agent is tricked into using its 'Refund' tool to send money to an attacker's account by a malicious chat message.",
    "d": [
      "The agent's server runs out of disk space.",
      "An attacker performs a phishing attack on the agent's developer.",
      "The AI model produces a response with a high hallucination rate."
    ],
    "e": "This scenario demonstrates an attacker exploiting the agent's tool access (Refund API) by manipulating the agent's logic through input data."
  },
  {
    "c": "ASI02: Tool Misuse & Exploitation",
    "q": "What is 'Tool Output Poisoning'?",
    "a": "A tool returns malicious data that tricks the agent into making a dangerous subsequent decision or tool call.",
    "d": [
      "The tool's source code being deleted by an attacker.",
      "The tool's output being encrypted so the agent cannot read it.",
      "The agent's memory being full of old tool outputs."
    ],
    "e": "If a tool's source (e.g., a compromised database) provides malicious data, the agent might interpret that data as a new 'instruction' or a reason to bypass security."
  },
  {
    "c": "ASI02: Tool Misuse & Exploitation",
    "q": "How does 'Schema Enforcement' protect against tool misuse?",
    "a": "By strictly validating that the agent's tool calls match a predefined structure (types, ranges, and allowed values).",
    "d": [
      "By implementing a Cross-Origin Resource Sharing (CORS) policy on the tool's endpoint.",
      "By making the agent's prompts more descriptive.",
      "By reducing the size of the agent's context window."
    ],
    "e": "Schema enforcement prevents an agent from being tricked into passing 'wildcard' parameters or unexpected commands into a tool's input fields."
  },
  {
    "c": "ASI02: Tool Misuse & Exploitation",
    "q": "What is the 'Confused Deputy' problem in agentic AI?",
    "a": "The agent uses its own high-level permissions to perform an action on behalf of an unauthorized user.",
    "d": [
      "The agent getting confused by a complex user request.",
      "Two agents trying to use the same tool at the same time.",
      "An agent's developer being unsure which model to use."
    ],
    "e": "The agent acts as a 'deputy' that has permissions the user doesn't. If the agent doesn't check the user's authority for a specific tool call, it becomes a 'confused deputy'."
  },
  {
    "c": "ASI02: Tool Misuse & Exploitation",
    "q": "What is 'Execution Monitoring' for tools?",
    "a": "An independent process that logs and analyzes every tool call and its parameters in real-time for anomalies.",
    "d": [
      "The agent checking its own work to see if it made a mistake.",
      "A developer watching the agent's screen as it works.",
      "A benchmark that measures how fast a tool runs."
    ],
    "e": "Real-time monitoring can detect patterns of tool misuse, such as an unusual frequency of calls or parameters that deviate from the agent's historical behavior."
  },
  {
    "c": "ASI02: Tool Misuse & Exploitation",
    "q": "Why is 'Tool Discovery' a security risk?",
    "a": "If an agent can dynamically 'discover' and use any available API, it may find and exploit internal or debugging tools not intended for its use.",
    "d": [
      "Because it makes the agent's startup time longer.",
      "Because it requires the agent to have a faster internet connection.",
      "Because users might be confused by the number of tools."
    ],
    "e": "Limiting the 'tool set' to a static, pre-approved list prevents the agent from being steered toward sensitive system tools by an attacker."
  },
  {
    "c": "ASI02: Tool Misuse & Exploitation",
    "q": "What is 'Tool-Level Rate Limiting'?",
    "a": "Restricting how many times an agent can call a specific tool within a certain timeframe to prevent mass data exfiltration or DoS.",
    "d": [
      "Making the agent's response time slower for every user.",
      "Limiting the number of users who can talk to the agent.",
      "Reducing the number of tokens the agent can use per hour."
    ],
    "e": "Rate limits prevent a compromised agent from launching a DoS attack on the rest of the system or from exfiltrating data too quickly to be noticed."
  },
  {
    "c": "ASI02: Tool Misuse & Exploitation",
    "q": "What is 'Adversarial Tool Use'?",
    "a": "An attacker uses a benign tool (like 'Search') to find sensitive information that the agent then unknowingly leaks.",
    "d": [
      "An attacker using a specialized AI model to hack the agent.",
      "A bug in the tool that causes it to return the wrong data.",
      "The tool's developer being a malicious actor."
    ],
    "e": "Even if the tool itself is secure, the *way* it is used can be adversarial if it helps the agent perform a task that violates security policies."
  },
  {
    "c": "ASI02: Tool Misuse & Exploitation",
    "q": "How can 'Contextual Tool Access' improve security?",
    "a": "The agent is only given access to a tool when its current high-level goal (vetted by a supervisor) requires it.",
    "d": [
      "The agent having access to all tools at all times for efficiency.",
      "The agent's tools being encrypted when not in use.",
      "A way to make the agent's tools run faster."
    ],
    "e": "Dynamic tool permissioning ensures that an agent cannot be 'tricked' into using a sensitive tool (like 'Delete') while it is supposed to be doing a 'Read' task."
  },
  {
    "c": "ASI02: Tool Misuse & Exploitation",
    "q": "What is 'Semantic Tool Validation'?",
    "a": "A secondary AI model checks if the *parameters* of a tool call make sense given the user's original request.",
    "d": [
      "Checking the tool's code for spelling and grammar errors.",
      "Analyzing the tool's network traffic patterns.",
      "Counting the number of words in the tool's output."
    ],
    "e": "If a user asks 'Tell me the weather' and the agent tries to call 'SendEmail(to=attacker@evil.com)', semantic validation would catch the misalignment."
  },
  {
    "c": "ASI02: Tool Misuse & Exploitation",
    "q": "What is the risk of 'Agentic SQL Injection'?",
    "a": "The agent is tricked into generating and executing a malicious SQL query against a database tool.",
    "d": [
      "The database itself having a bug that crashes the agent.",
      "The attacker stealing the database's password.",
      "The agent's training data being stored in a SQL database."
    ],
    "e": "Because agents often write their own queries based on natural language, they are highly susceptible to being steered into generating harmful SQL if not properly constrained."
  },
  {
    "c": "ASI02: Tool Misuse & Exploitation",
    "q": "What is 'Tool-Result Sanitization'?",
    "a": "Cleaning the output of a tool before it is given back to the agent to prevent 'Indirect Injection' from the tool's results.",
    "d": [
      "Making the tool's output more readable for the user.",
      "Deleting the tool's output after it is read once.",
      "Encrypting the tool's output on the disk."
    ],
    "e": "If a 'WebSearch' tool returns a page with hidden 'ignore previous instructions' text, sanitization must strip that text before the agent reads it."
  },
  {
    "c": "ASI02: Tool Misuse & Exploitation",
    "q": "What is 'Audit Log Integrity' for tools?",
    "a": "Ensuring that an agent (or an attacker) cannot modify or delete the logs of the tool calls it has made.",
    "d": [
      "Making sure the logs are stored in a very large file.",
      "Ensuring the logs are written in a specific programming language.",
      "Checking the logs for spelling and grammar errors."
    ],
    "e": "Immutable logs are critical for 'Post-Mortem' analysis to understand how an agent was tricked into misusing its tools."
  },
  {
    "c": "ASI02: Tool Misuse & Exploitation",
    "q": "How can 'RBAC' (Role-Based Access Control) be applied to agents?",
    "a": "By assigning different 'Roles' to agents (e.g., 'HR-Bot' vs 'Support-Bot') and only giving each role the tools it needs.",
    "d": [
      "Giving all agents the same 'Administrator' role for simplicity.",
      "Making every agent have a unique and complex password.",
      "Requiring a human to approve every single tool call."
    ],
    "e": "RBAC for agents prevents a 'Support-Bot' from being tricked into calling an 'HR-Payroll' tool, as it simply doesn't have the permissions for that role."
  }
];
var MASTER_POOL = pool;

var pool = [
  {
    "c": "ASI02: Tool Misuse & Exploitation",
    "q": "What is the core vulnerability described by 'Tool Misuse & Exploitation' (ASI02)?",
    "a": "The agent is tricked into calling available tools with malicious parameters or in an unintended sequence.",
    "d": [
      "The tool itself has a hardware flaw that causes the AI to crash.",
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
      "By physically changing the server's RAM while the agent is running.",
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
      "By changing the agent's UI theme based on the tool being used.",
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
    "e": "Even if an agent is tricked into misusing a tool (like a 'Send Email' tool), rate limits can prevent the agent from being used as a spam bot or for bulk data theft."
  },
  {
    "c": "ASI02: Tool Misuse & Exploitation",
    "q": "In the context of ASI02, what is 'Context Clue Manipulation'?",
    "a": "An attacker provides false context that convinces the agent a dangerous tool call is actually a safe and necessary step.",
    "d": [
      "Changing the font size of the agent's chat interface.",
      "Deleting the agent's conversation history.",
      "Adding more training data to the model."
    ],
    "e": "By creating a fake 'emergency' or 'administrative requirement' in the context, an attacker can bypass the agent's internal logic that would normally block the tool call."
  },
  {
    "c": "ASI02: Tool Misuse & Exploitation",
    "q": "What is 'State-Based Tool Authorization'?",
    "a": "Granting tool access only when the agent is in a specific 'state' or 'phase' of a task (e.g., only after user approval).",
    "d": [
      "Only allowing agents to run in certain US states.",
      "Requiring the agent to be in a 'happy' mood to use tools.",
      "Making tools available only when the database is updated."
    ],
    "e": "This ensures that a tool cannot be called 'out of blue' by an injection; it must be part of a legitimate, pre-authorized workflow state."
  },
  {
    "c": "ASI02: Tool Misuse & Exploitation",
    "q": "How can 'Prompt Decorators' help prevent tool misuse?",
    "a": "By automatically appending security instructions and constraints to every tool-related prompt sent to the LLM.",
    "d": [
      "By adding emojis to the agent's responses.",
      "By making the agent's code more colorful.",
      "By translating the tool's documentation into multiple languages."
    ],
    "e": "Decorators remind the model of its tool-use boundaries (e.g., 'Never use the delete tool without a specific ID') at the exact moment it is deciding whether to call a tool."
  },
  {
    "c": "ASI02: Tool Misuse & Exploitation",
    "q": "What is the risk of 'Dynamic Code Generation' as a tool?",
    "a": "The agent generates and executes its own code (e.g., Python) to solve a problem, which can be hijacked for RCE.",
    "d": [
      "The code generated by the agent might have syntax errors.",
      "The agent might take too long to write the code.",
      "The agent's code might be hard for humans to read."
    ],
    "e": "When 'eval()' or a Python interpreter is provided as a tool, an attacker can trick the agent into writing and running a malicious script that compromises the entire system."
  },
  {
    "c": "ASI02: Tool Misuse & Exploitation",
    "q": "What is 'Semantic Tool Filtering'?",
    "a": "A secondary AI model checks if the *reason* for a tool call (the intent) aligns with the original user request.",
    "d": [
      "Checking the tool call for spelling mistakes.",
      "Filtering out tools that have long names.",
      "Only allowing tools that return text data."
    ],
    "e": "If the agent is trying to call a 'Delete' tool when the user only asked for a 'Summary,' a semantic filter can detect this misalignment and block the action."
  },
  {
    "c": "ASI02: Tool Misuse & Exploitation",
    "q": "Which of these is a mitigation for 'Indirect Tool Injection'?",
    "a": "Treating all tool-sourced data as untrusted and sanitizing it before it returns to the agent's context.",
    "d": [
      "Deleting the tool's output as soon as it is received.",
      "Only using tools that are written in JavaScript.",
      "Making the agent's memory smaller."
    ],
    "e": "Just as user input is untrusted, the data returned by tools (like a web scraper) can contain instructions that hijack the agent's next steps."
  },
  {
    "c": "ASI02: Tool Misuse & Exploitation",
    "q": "What is 'Tool Call Attribution'?",
    "a": "The practice of logging which specific user or session triggered a tool call to ensure accountability and auditability.",
    "d": [
      "Naming each tool after the person who wrote it.",
      "Checking the tool's version number before every call.",
      "Giving the agent a name and a personality."
    ],
    "e": "Attribution is critical for forensic analysis after an exploit, helping to identify which injection or user led to the misuse of a tool."
  },
  {
    "c": "ASI02: Tool Misuse & Exploitation",
    "q": "What is 'Function Calling' security?",
    "a": "The use of specific model features (like OpenAI functions) that allow for structured tool interaction instead of raw text parsing.",
    "d": [
      "The agent calling its own internal functions more often.",
      "A way to make the agent's code run faster.",
      "A technique for training the agent on how to code."
    ],
    "e": "Structured function calling reduces the risk of 'hallucinated' parameters or command injections that often occur when an agent tries to format a raw string for a tool."
  },
  {
    "c": "ASI02: Tool Misuse & Exploitation",
    "q": "How does 'Network Segmentation' mitigate tool misuse?",
    "a": "By placing tools and the data they access on isolated networks that the agent can only reach through a secure gateway.",
    "d": [
      "By using a faster network connection for the agent.",
      "By encrypting all traffic between the agent and the user.",
      "By splitting the agent's code into smaller microservices."
    ],
    "e": "Segmentation prevents an agent that has been tricked into a 'SSRF' (Server-Side Request Forgery) style tool call from reaching sensitive internal systems."
  },
  {
    "c": "ASI02: Tool Misuse & Exploitation",
    "q": "What is a 'Capability Boundary' for an agent?",
    "a": "A set of hardcoded rules that define exactly which tools an agent can use for specific categories of tasks.",
    "d": [
      "The physical limit of the agent's CPU and RAM.",
      "The maximum number of words the agent can output.",
      "The version of the LLM the agent is using."
    ],
    "e": "Boundaries ensure that a 'Search Agent' cannot suddenly decide to use a 'Write' tool, even if that tool is technically available in the system."
  },
  {
    "c": "ASI02: Tool Misuse & Exploitation",
    "q": "What is 'Tool Argument Masking'?",
    "a": "Preventing sensitive data (like passwords) from appearing in tool logs while still allowing the tool to function.",
    "d": [
      "Hiding the tool's name from the agent.",
      "Using a different font for tool parameters.",
      "Making the tool call parameters invisible to the user."
    ],
    "e": "Masking ensures that even if a tool is misused, sensitive credentials or PII do not leak into the execution logs where they could be further exploited."
  },
  {
    "c": "ASI02: Tool Misuse & Exploitation",
    "q": "Why is 'Plan Validation' before tool execution necessary?",
    "a": "To ensure that the sequence of tool calls proposed by the agent is logical and safe for the intended goal.",
    "d": [
      "To make the agent's code more efficient.",
      "To check for spelling errors in the plan.",
      "To allow the developer to see what the agent is planning."
    ],
    "e": "Validation can catch 'dangerous' combinations, such as 'Download file' followed by 'Upload file to external URL,' before any data leaves the system."
  },
  {
    "c": "ASI02: Tool Misuse & Exploitation",
    "q": "What is 'Shadow Tooling' risk?",
    "a": "The agent autonomously finding and using APIs or shortcuts that were not explicitly defined as 'tools' by the developers.",
    "d": [
      "The agent using tools only at night.",
      "The tools being hosted on a hidden server.",
      "The agent using tools that have a dark theme."
    ],
    "e": "If an agent has too much system-level access, it might 'hallucinate' that it can call internal system commands or scripts that weren't meant to be part of its toolkit."
  },
  {
    "c": "ASI02: Tool Misuse & Exploitation",
    "q": "How can 'Input Whitelisting' protect tools?",
    "a": "By only allowing the agent to pass parameters that match a known-safe list of values or patterns.",
    "d": [
      "By only allowing the agent to use tools on a certain list.",
      "By only allowing certain users to talk to the agent.",
      "By making the agent's code open source."
    ],
    "e": "Whitelisting is more secure than blacklisting because it explicitly defines what is allowed, making it harder for an attacker to find a 'gap' in the filter."
  },
  {
    "c": "ASI02: Tool Misuse & Exploitation",
    "q": "What is 'Tool Execution Timeout'?",
    "a": "A security setting that kills a tool process if it takes too long, preventing resource exhaustion or 'hanging' exploits.",
    "d": [
      "The agent taking a break after using a tool.",
      "A way to make the agent's tools run faster.",
      "The amount of time a user has to wait for a response."
    ],
    "e": "Timeouts prevent an attacker from using a tool (like a regex search) to cause a 'ReDoS' attack and freeze the agent's execution environment."
  },
  {
    "c": "ASI02: Tool Misuse & Exploitation",
    "q": "What is 'Multi-Signature' tool approval?",
    "a": "Requiring two different security checks (e.g., an automated scanner and a human) for the most sensitive tool calls.",
    "d": [
      "Requiring the agent to sign its name twice.",
      "Using two different AI models for the same task.",
      "Making the tool's code digitally signed by two developers."
    ],
    "e": "This 'two-person rule' significantly increases the difficulty for an attacker to achieve a high-impact exploit through the agent."
  },
  {
    "c": "ASI02: Tool Misuse & Exploitation",
    "q": "In ASI02, what is 'Context Leakage into Tools'?",
    "a": "The agent inadvertently passing its entire conversation history or internal secrets into a tool call where it doesn't belong.",
    "d": [
      "The tool leaking data back to the agent.",
      "The user seeing the agent's internal thoughts.",
      "The agent's memory being cleared after every tool call."
    ],
    "e": "If the agent passes 'too much context' to a tool (like a web search), it may leak sensitive information from the user prompt to an external third-party service."
  }
];
var MASTER_POOL = pool;

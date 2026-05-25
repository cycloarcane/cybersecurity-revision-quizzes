const pool = [
    {
        "c": "ASI02: Tool Misuse & Exploitation",
        "q": "What is the core risk defined in 'Tool Misuse & Exploitation' (ASI02)?",
        "a": "The agent calling tools with dangerous, unintended, or malformed parameters.",
        "d": [
            "The model being unable to understand the tool's documentation.",
            "The tool itself having a slow response time.",
            "The agent refusing to use any tools due to safety alignment."
        ],
        "e": "ASI02 occurs when an agent is tricked or fails to validate the input it sends to external tools (APIs, databases, etc.), leading to unauthorized actions like data deletion or command injection."
    },
    {
        "c": "ASI02: Tool Misuse & Exploitation",
        "q": "How can 'Prompt Injection' lead to ASI02?",
        "a": "An attacker injects instructions that trick the agent into calling a sensitive tool with attacker-controlled data.",
        "d": [
            "By crashing the LLM so the tool cannot be called.",
            "By encrypting the tool's output so the agent cannot read it.",
            "By increasing the cost of the tool's API calls."
        ],
        "e": "If an agent is manipulated via prompt injection, it may use its tool-calling capabilities to execute the attacker's will, such as calling 'send_email' to exfiltrate data."
    },
    {
        "c": "ASI02: Tool Misuse & Exploitation",
        "q": "Which of the following is an example of 'Insecure Tool Parameterization'?",
        "a": "An agent passes a raw user-provided string directly into a shell execution tool.",
        "d": [
            "An agent uses a strong password to connect to a database tool.",
            "An agent converts all user input to lowercase before processing it.",
            "An agent asks the user for confirmation before calling a tool."
        ],
        "e": "Passing unvalidated input directly to a tool that interprets that input (like a shell or SQL database) is a classic injection vulnerability facilitated by the agent's autonomy."
    },
    {
        "c": "ASI02: Tool Misuse & Exploitation",
        "q": "Why is 'Tool Discovery' a potential security risk in ASI02?",
        "a": "The agent might discover and use internal or 'hidden' tools that were not intended for its current task.",
        "d": [
            "The agent might take too long to find the correct tool.",
            "The tool's documentation might be leaked to the user.",
            "The agent might use a tool that is deprecated."
        ],
        "e": "If the agent has broad access to a tool registry, an attacker can trick it into using a powerful administrative tool that the developer thought was 'hidden' or 'out of scope'."
    },
    {
        "c": "ASI02: Tool Misuse & Exploitation",
        "q": "What is 'Excessive Tool Output' in the context of ASI02?",
        "a": "A tool returns sensitive data (like full database rows) that the agent then leaks to the user.",
        "d": [
            "A tool returns an error message that is too long to read.",
            "The agent calls the same tool 100 times in a row.",
            "The tool's response is formatted in XML instead of JSON."
        ],
        "e": "ASI02 includes the misuse of tool *outputs*. If a tool provides more information than necessary, a compromised or manipulated agent might pass that sensitive information back to the attacker."
    },
    {
        "c": "ASI02: Tool Misuse & Exploitation",
        "q": "How does the 'Principle of Least Privilege' apply to ASI02 mitigation?",
        "a": "Each tool should only have the minimum permissions necessary for the agent's specific task.",
        "d": [
            "The agent should only be allowed to use one tool at a time.",
            "The model should be as small as possible to save on costs.",
            "The user should not be allowed to see which tools the agent is using."
        ],
        "e": "By limiting what each tool can do (e.g., a database tool that can only SELECT, not DELETE), the impact of a tool misuse attack is greatly reduced."
    },
    {
        "c": "ASI02: Tool Misuse & Exploitation",
        "q": "What is 'Indirect Tool Manipulation'?",
        "a": "An attacker modifies the data that a tool retrieves (e.g., a file) to trick the agent into a specific action.",
        "d": [
            "The attacker physically unplugs the server running the tool.",
            "The developer changes the tool's source code without telling the agent.",
            "The agent uses a tool to modify another tool's configuration."
        ],
        "e": "If an agent uses a tool to read a file, and that file contains a malicious 'command' in its metadata, the agent might be tricked into misusing its next tool based on that corrupted data."
    },
    {
        "c": "ASI02: Tool Misuse & Exploitation",
        "q": "Which of these is a 'Runtime' mitigation for ASI02?",
        "a": "A middleware layer that inspects and sanitizes all arguments before they reach the tool's API.",
        "d": [
            "Fine-tuning the model on a dataset of safe tool calls.",
            "Writing better documentation for the tools.",
            "Giving the agent a list of examples of how to use the tools."
        ],
        "e": "Runtime monitoring and sanitization (often called a 'Tool Gateway') provide a hard security boundary that doesn't rely on the agent's 'understanding' of safety."
    },
    {
        "c": "ASI02: Tool Misuse & Exploitation",
        "q": "What is 'Recursive Tool Misuse'?",
        "a": "Using one tool to gain the credentials or configuration needed to exploit a second, more sensitive tool.",
        "d": [
            "The agent calling a tool that calls itself in an infinite loop.",
            "Using a tool to delete the agent's own memory.",
            "An attacker using a tool to find vulnerabilities in the LLM's architecture."
        ],
        "e": "In complex agentic systems, a minor misuse of a 'File Read' tool could reveal environment variables that the agent then uses to authenticate to a 'Database Write' tool."
    },
    {
        "c": "ASI02: Tool Misuse & Exploitation",
        "q": "How does 'Strict Schema Validation' help prevent ASI02?",
        "a": "It prevents the agent from sending unexpected data types or structures to a tool's API.",
        "d": [
            "It makes the agent's responses more visually appealing to the user.",
            "It forces the agent to use a specific font in its output.",
            "It ensures that the agent always speaks in a professional tone."
        ],
        "e": "If a tool expects a 'user_id' as an integer, and the agent tries to send a string containing a SQL injection payload, strict schema validation will block the request at the interface layer."
    },
    {
        "c": "ASI02: Tool Misuse & Exploitation",
        "q": "What is the risk of 'Dynamic Tool Generation'?",
        "a": "An agent that can write its own tools (e.g., Python scripts) may create insecure or malicious functions.",
        "d": [
            "The agent might run out of disk space while writing tools.",
            "The agent might use a programming language that is too old.",
            "The tools might have too many comments in the code."
        ],
        "e": "Dynamic tools are extremely dangerous because they bypass pre-defined security reviews. If an agent can 'create' its own API client, it can effectively bypass any restrictions placed on its 'official' tools."
    },
    {
        "c": "ASI02: Tool Misuse & Exploitation",
        "q": "In ASI02, what is a 'Confused Deputy' attack?",
        "a": "The agent uses its higher-level privileges to perform an action on behalf of an unauthorized user.",
        "d": [
            "Two agents trying to perform the same task at the same time.",
            "The agent getting confused by a complex user request.",
            "The developer accidentally giving the agent two different names."
        ],
        "e": "This is a classic security problem. The agent (the deputy) has the power to call a tool, but it fails to check if the user who requested the action has the right to do so, thus being 'confused' into misusing its power."
    },
    {
        "c": "ASI02: Tool Misuse & Exploitation",
        "q": "Why is 'Human-in-the-loop' (HITL) useful for ASI02?",
        "a": "It allows a human to review and approve high-risk tool calls before they are executed.",
        "d": [
            "It makes the agent work faster by having a human help it.",
            "It prevents the agent from using too many cloud credits.",
            "It allows the human to learn how the agent uses tools."
        ],
        "e": "For sensitive tools (like 'delete_user' or 'transfer_funds'), requiring a human to 'click okay' on the specific parameters generated by the agent is a critical defense against automated misuse."
    },
    {
        "c": "ASI02: Tool Misuse & Exploitation",
        "q": "What is 'Tool Squatting' in an agentic context?",
        "a": "An attacker creates a malicious tool with a name similar to a legitimate tool, hoping the agent will call it by mistake.",
        "d": [
            "An agent refusing to release a tool's lock, preventing other agents from using it.",
            "A user taking up all the available slots in a tool registry.",
            "The agent using a tool for a very long time without finishing."
        ],
        "e": "Similar to typosquatting in package managers, if an agent 'searches' for a tool named 'send_mail' and the attacker has registered a malicious 'send_email', the agent might use the wrong one."
    },
    {
        "c": "ASI02: Tool Misuse & Exploitation",
        "q": "How can 'Semantic Mismatch' cause ASI02?",
        "a": "The agent misunderstands a tool's purpose (e.g., using a 'debug' tool for 'production' actions).",
        "d": [
            "The agent translates the tool's name into a different language.",
            "The tool's API uses a different version of JSON than the agent.",
            "The agent and the tool use different time zones."
        ],
        "e": "If a tool is named 'test_payment' but actually processes real money, an agent might 'test' it 1000 times, causing financial loss. This is a misuse caused by poor tool documentation and agent misunderstanding."
    },
    {
        "c": "ASI02: Tool Misuse & Exploitation",
        "q": "What is the risk of 'Over-Permissioned' API Tokens in ASI02?",
        "a": "A hijacked agent can use the token to perform actions far beyond the scope of its intended tools.",
        "d": [
            "The token might expire too quickly, causing the agent to stop working.",
            "The token might be too long to fit in the agent's memory.",
            "The token might be encrypted with a weak algorithm."
        ],
        "e": "If an agent's 'Weather Tool' uses an API token that also has 'Cloud Admin' permissions, any exploit of the weather tool can lead to a full cloud compromise."
    },
    {
        "c": "ASI02: Tool Misuse & Exploitation",
        "q": "What is 'Argument Injection' in a tool call?",
        "a": "Injecting extra flags or commands into a tool's parameters (e.g., adding '; rm -rf /' to a filename).",
        "d": [
            "Asking the agent to provide more arguments than the tool requires.",
            "The agent getting into an argument with the user about which tool to use.",
            "The tool returning an error because an argument was missing."
        ],
        "e": "If an agent calls a command-line tool, it must be careful not to allow the 'data' it is passing to be interpreted as additional 'flags' or 'commands' by the underlying shell."
    },
    {
        "c": "ASI02: Tool Misuse & Exploitation",
        "q": "How does 'Output Sanitization' relate to ASI02?",
        "a": "Cleaning a tool's output to remove sensitive data before the agent processes or displays it.",
        "d": [
            "Making the tool's output easier for the agent to read by adding whitespace.",
            "Removing all vowels from the tool's output to save tokens.",
            "Asking the tool to return its output in a different language."
        ],
        "e": "If a tool accidentally leaks a 'SessionID' in its output, the agent might inadvertently show it to the user or include it in its next prompt, exposing it to further attacks."
    },
    {
        "c": "ASI02: Tool Misuse & Exploitation",
        "q": "What is 'Tool Logic Bombing'?",
        "a": "Tricking an agent into calling a sequence of tools that, when combined, trigger a malicious state.",
        "d": [
            "Using a tool that is designed to crash after a certain amount of time.",
            "Sending a very large file to a tool to cause a memory overflow.",
            "Calling a tool that prints 'BOMB' to the console."
        ],
        "e": "Individually, tool calls might look safe. But an attacker might trick the agent into: 1. Disabling logs, 2. Changing a password, 3. Opening a firewall. The sequence is the 'bomb'."
    },
    {
        "c": "ASI02: Tool Misuse & Exploitation",
        "q": "Why should tools have 'Read-Only' modes for agent access?",
        "a": "To prevent the agent from accidentally or maliciously modifying data when it only needs to view it.",
        "d": [
            "To make the tool faster by disabling the 'write' logic.",
            "To save on storage costs by not allowing any new data.",
            "To prevent the agent from learning how the tool works."
        ],
        "e": "Many agent tasks (like 'find the answer in this database') only require READ access. Granting the agent a READ-ONLY interface prevents ASI02 risks like 'Delete All Rows'."
    },
    {
        "c": "ASI02: Tool Misuse & Exploitation",
        "q": "What is 'SSRF' in the context of agentic tool misuse?",
        "a": "An attacker tricks the agent into using a 'URL Fetch' tool to access internal services (like metadata endpoints).",
        "d": [
            "The agent's server running out of memory due to too many tool calls.",
            "The agent failing to connect to a tool due to a DNS error.",
            "The agent using a tool to send a spoofed email to the user."
        ],
        "e": "Server-Side Request Forgery (SSRF) is a major ASI02 risk. If an agent has a tool to 'Get Website Content', an attacker can tell it to 'Get content from http://169.254.169.254/' to steal cloud credentials."
    },
    {
        "c": "ASI02: Tool Misuse & Exploitation",
        "q": "How can 'Contextual Integrity' be maintained for tool calls?",
        "a": "By ensuring the tool call parameters are consistent with the current task's verified intent.",
        "d": [
            "By encrypting the context window before every tool call.",
            "By never allowing the agent to use more than one tool per session.",
            "By making sure the agent's name is included in every tool request."
        ],
        "e": "If an agent is supposed to be 'Editing a Blog Post', a tool call to 'Reset Password' violates contextual integrity and should be blocked by a security monitor."
    },
    {
        "c": "ASI02: Tool Misuse & Exploitation",
        "q": "What is 'Tool Chaining' and why is it an ASI02 concern?",
        "a": "The output of one tool becomes the input for the next, potentially propagating a malicious payload.",
        "d": [
            "Using a metal chain to physically secure the server hardware.",
            "A method of linking two models together to increase intelligence.",
            "The process of the agent asking for permission before each tool call."
        ],
        "e": "If 'Tool A' is compromised and returns a malicious string, and 'Tool B' is an 'Execute' tool, the agent might blindly pass the malicious string from A to B, leading to a system compromise."
    },
    {
        "c": "ASI02: Tool Misuse & Exploitation",
        "q": "What is the 'Denial of Wallet' attack in ASI02?",
        "a": "Tricking the agent into calling expensive tools or APIs repeatedly to exhaust the user's budget.",
        "d": [
            "The agent refusing to perform a task because it 'costs too much'.",
            "An attacker stealing the user's credit card information from the agent's memory.",
            "The agent losing the user's digital wallet keys due to a file error."
        ],
        "e": "Because agents can iterate autonomously, an attacker can trick them into a loop of expensive tool calls, leading to a massive bill before the user notices. This is a form of DoS targeting financial resources."
    },
    {
        "c": "ASI02: Tool Misuse & Exploitation",
        "q": "Why is 'Idempotency' important for safe tool design?",
        "a": "It ensures that calling a tool multiple times with the same parameters has no additional side effects.",
        "d": [
            "It makes the tool easier for the agent to understand.",
            "It prevents the agent from being able to see the tool's output.",
            "It allows the tool to run on any operating system."
        ],
        "e": "Agents often retry actions if they fail. If a 'Send Payment' tool is not idempotent, the agent might accidentally send the same payment five times if it encounters a network timeout, leading to misuse."
    },
    {
        "c": "ASI02: Tool Misuse & Exploitation",
        "q": "What is 'Tool Description Injection'?",
        "a": "An attacker modifies the tool's documentation to trick the agent into using it incorrectly.",
        "d": [
            "The agent writing its own descriptions for the tools it uses.",
            "Adding a malicious description to the agent's system prompt.",
            "The user asking the agent to describe how a tool works."
        ],
        "e": "Agents rely on the 'Description' field to know how to use a tool. If an attacker can change the description of 'Delete' to 'Use this to save files safely,' the agent will maliciously 'save' by deleting everything."
    },
    {
        "c": "ASI02: Tool Misuse & Exploitation",
        "q": "In ASI02, what is 'Lateral Movement via Tools'?",
        "a": "Using an agent's access to one system to discover and exploit other systems in the same network.",
        "d": [
            "The agent moving its files from one folder to another.",
            "The process of the agent switching from a CPU to a GPU.",
            "The user moving from the agent's web interface to its mobile app."
        ],
        "e": "If an agent has a 'Network Scan' or 'SSH' tool, a hijacked agent can use those tools to find other vulnerable servers on the internal network that are not normally exposed to the internet."
    },
    {
        "c": "ASI02: Tool Misuse & Exploitation",
        "q": "How does 'Dual-Homing' apply as a risk in ASI02?",
        "a": "An agent that is connected to both a public network and a private internal network could be used as a bridge for attacks.",
        "d": [
            "The agent having two different names depending on who is talking to it.",
            "The agent being able to run on two different types of processors.",
            "The user being able to access the agent from two different devices."
        ],
        "e": "If an agent can fetch data from the internet (Tool A) and write data to an internal database (Tool B), it can be exploited to move malicious payloads from the public web directly into a secure private environment."
    },
    {
        "c": "ASI02: Tool Misuse & Exploitation",
        "q": "What is 'Resource Exhaustion' via tools?",
        "a": "An agent calls a tool with parameters that cause the tool to consume all available CPU, RAM, or disk space.",
        "d": [
            "The agent's developer running out of money to pay for the LLM.",
            "The agent's memory becoming full because the user talked too much.",
            "The user getting tired of waiting for the agent to finish a task."
        ],
        "e": "An attacker could tell an agent to 'Generate a 100GB zip file of zeros' using a file tool, effectively crashing the server via a DoS attack facilitated by the agent."
    },
    {
        "c": "ASI02: Tool Misuse & Exploitation",
        "q": "What is the 'Validation Gap' in agentic tool use?",
        "a": "The space between the agent generating the tool call and the tool actually executing it, where security checks are often missing.",
        "d": [
            "The time it takes for the tool to return an answer to the agent.",
            "The difference in accuracy between two different models using the same tool.",
            "The gap in the documentation between the agent's instructions and the tool's API."
        ],
        "e": "Many developers trust that the 'AI is smart enough' to use tools correctly. The validation gap is the failure to realize that the agent is a probabilistic engine and needs deterministic 'guardrails' to validate every tool call."
    }
];
const MASTER_POOL = pool;

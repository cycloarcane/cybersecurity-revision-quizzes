const pool = [
    {
        "c": "ASI04: Agentic Supply Chain",
        "q": "What is the primary concern of 'Agentic Supply Chain' (ASI04) vulnerabilities?",
        "a": "Security risks introduced by third-party tools, frameworks, and data sources used by the agent.",
        "d": [
            "The physical delivery of the server hardware to the data center.",
            "The length of the chain of command in the development team.",
            "The number of users who are currently using the agent."
        ],
        "e": "ASI04 addresses the risk that the 'building blocks' of an agent (like plugins, MCP servers, or fine-tuning datasets) might be malicious or contain vulnerabilities."
    },
    {
        "c": "ASI04: Agentic Supply Chain",
        "q": "Which of the following is a 'Supply Chain' component for an AI agent?",
        "a": "A pre-built 'Prompt Template' downloaded from an online registry.",
        "d": [
            "The monitor used by the agent's developer.",
            "The electricity used to power the server.",
            "The office space where the developers work."
        ],
        "e": "Prompt templates are often used to define an agent's behavior. If a template is malicious, it could contain hidden 'backdoors' that make the agent susceptible to hijacking."
    },
    {
        "c": "ASI04: Agentic Supply Chain",
        "q": "What is the risk of using a third-party 'Tool Registry'?",
        "a": "An attacker could upload a malicious tool that executes code when called by an agent.",
        "d": [
            "The registry might charge a high fee for each tool call.",
            "The registry might only be available in certain countries.",
            "The registry might have a confusing user interface."
        ],
        "e": "If an agent dynamically 'discovers' and uses tools from a public registry, it is vulnerable to 'Tool Squatting' or malicious updates to those tools."
    },
    {
        "c": "ASI04: Agentic Supply Chain",
        "q": "How can 'Model Weight Poisoning' be an ASI04 issue?",
        "a": "The base model used by the agent is fine-tuned on a dataset that contains hidden triggers for malicious behavior.",
        "d": [
            "The physical weights of the server hardware causing it to fall through the floor.",
            "The model becoming too 'heavy' for the GPU to process.",
            "The process of deleting a model from a server."
        ],
        "e": "If the underlying LLM is 'poisoned' during its training or fine-tuning phase, it might appear safe but 'activate' a malicious goal when it sees a specific, secret string."
    },
    {
        "c": "ASI04: Agentic Supply Chain",
        "q": "What is 'MCP' (Model Context Protocol) and why is it a supply chain risk?",
        "a": "It is a standardized protocol for connecting agents to data; a compromised MCP server can feed malicious data to the agent.",
        "d": [
            "It is a method of compressing model weights to save storage.",
            "It is a law that requires all agents to follow ethical guidelines.",
            "It is a programming language used only for AI development."
        ],
        "e": "MCP servers are external components that provide context to agents. If the server is compromised, it becomes an 'Indirect Prompt Injection' vector that is built directly into the agent's supply chain."
    },
    {
        "c": "ASI04: Agentic Supply Chain",
        "q": "What is the danger of 'Untrusted Plugin' integration in an agentic system?",
        "a": "The plugin could have access to the agent's full context and exfiltrate private conversation data.",
        "d": [
            "The plugin might make the agent's interface look ugly.",
            "The plugin might use too much RAM, causing the browser to slow down.",
            "The plugin might only work with older versions of the model."
        ],
        "e": "Plugins often require 'Context access.' A malicious plugin can 'listen' to all the data passing through the agent and send it to an attacker's server."
    },
    {
        "c": "ASI04: Agentic Supply Chain",
        "q": "How does 'Dependency Confusion' apply to agentic frameworks (like LangChain or AutoGPT)?",
        "a": "An attacker publishes a malicious package with the same name as an internal agent component to a public registry.",
        "d": [
            "The agent getting confused about which user it is talking to.",
            "The developer forgetting to update the 'requirements.txt' file.",
            "The agent using two different versions of the same model at the same time."
        ],
        "e": "This is a classic supply chain attack. If an agentic framework tries to install a component and finds a higher version number on a public registry (uploaded by an attacker), it will install the malicious one."
    },
    {
        "c": "ASI04: Agentic Supply Chain",
        "q": "What is a 'Prompt Injection' backdoor in a pre-trained model?",
        "a": "The model is trained to specifically ignore its safety rules when a 'magic word' is present in the prompt.",
        "d": [
            "A physical door in the data center that is left unlocked.",
            "A bug in the model's code that allows users to bypass the login screen.",
            "The agent's ability to remember previous user requests."
        ],
        "e": "Backdooring the supply chain (the model itself) is extremely dangerous because it is nearly impossible to detect through standard prompting tests."
    },
    {
        "c": "ASI04: Agentic Supply Chain",
        "q": "Why is 'Data Provenance' important for agentic safety?",
        "a": "It allows developers to verify the source and integrity of the data used to ground or fine-tune the agent.",
        "d": [
            "It helps the agent find the answer to the user's question faster.",
            "It makes the agent's responses more visually appealing.",
            "It reduces the amount of data the agent has to process."
        ],
        "e": "If you don't know where your data came from, you can't be sure it doesn't contain malicious instructions (Indirect Injection) that will hijack your agent's goals (ASI01)."
    },
    {
        "c": "ASI04: Agentic Supply Chain",
        "q": "What is the risk of 'Orphaned Tools' in an agent's registry?",
        "a": "Tools that are no longer maintained may have unpatched vulnerabilities that an attacker can exploit via the agent.",
        "d": [
            "Tools that have no developer assigned to them.",
            "Tools that are only used by one agent.",
            "Tools that are stored on a server that has been turned off."
        ],
        "e": "Supply chain management includes lifecycle management. An 'orphaned' tool in the registry is a weak link that can be used to gain access to the agent's environment."
    },
    {
        "c": "ASI04: Agentic Supply Chain",
        "q": "How can 'Software Bill of Materials' (SBOM) help mitigate ASI04?",
        "a": "It provides a comprehensive list of all third-party components, allowing for rapid vulnerability scanning.",
        "d": [
            "It is a bill that the user has to pay for using the agent.",
            "It is a list of all the users who have ever used the agent.",
            "It is a set of instructions for the agent's hardware maintenance."
        ],
        "e": "An SBOM for an agent should include the model version, the prompt templates used, and all integrated tool APIs and plugins."
    },
    {
        "c": "ASI04: Agentic Supply Chain",
        "q": "What is 'Registry Typosquatting' in the context of agentic tools?",
        "a": "Registering malicious tools with names similar to popular ones (e.g., 'web_serp' instead of 'web_search').",
        "d": [
            "The agent making a spelling mistake in its response to the user.",
            "The developer using a font that is hard to read in the code.",
            "The process of the agent automatically correcting the user's typos."
        ],
        "e": "If a developer or an autonomous agent 'searches' for a tool and accidentally pulls in a typosquatted malicious version, the supply chain is compromised."
    },
    {
        "c": "ASI04: Agentic Supply Chain",
        "q": "What is 'Vulnerability Inheritance' in agentic frameworks?",
        "a": "A security flaw in a base framework (like an insecure implementation of a code executor) affects all agents built on it.",
        "d": [
            "The agent inheriting the user's personality after a long conversation.",
            "The model inheriting the biases of its training data.",
            "The process of an agent's child being born with the same bugs as the parent."
        ],
        "e": "If the framework you use to build your agent has a flaw in how it handles 'Tool Calls,' every agent you build will be vulnerable to ASI02 attacks."
    },
    {
        "c": "ASI04: Agentic Supply Chain",
        "q": "Why is 'Integrity Verification' necessary for downloaded prompt templates?",
        "a": "To ensure that the template has not been maliciously modified since it was published.",
        "d": [
            "To make sure the template follows the correct grammatical rules.",
            "To check if the template is compatible with the latest version of the model.",
            "To ensure the template is translated into the correct language."
        ],
        "e": "Cryptographic signing of prompt templates ensures that the instructions the agent follows are exactly what the original author intended, preventing supply chain tampering."
    },
    {
        "c": "ASI04: Agentic Supply Chain",
        "q": "What is 'Fine-Tuning Data Leakage' as a supply chain risk?",
        "a": "Sensitive data included in a third-party fine-tuning set is later revealed by the agent to unauthorized users.",
        "d": [
            "The process of a model's weights being slowly leaked onto the internet.",
            "The agent's training being interrupted by a power failure.",
            "The model becoming less accurate as it is fine-tuned on more data."
        ],
        "e": "If you use a 'Pre-built Industry Model,' you are trusting that the developer of that model didn't include private or sensitive data in the fine-tuning set that your agent might then leak."
    },
    {
        "c": "ASI04: Agentic Supply Chain",
        "q": "What is the risk of 'Dynamic Plugin Loading'?",
        "a": "The agent downloads and executes new code at runtime from an external source without a security review.",
        "d": [
            "The agent taking a long time to load its plugins when it starts up.",
            "The plugins being written in a language that the agent doesn't understand.",
            "The user being able to see a list of all the agent's plugins."
        ],
        "e": "Dynamic loading is a massive supply chain risk. An agent that can 'install a new skill' by downloading a script from the web is essentially an RCE-as-a-service platform for attackers."
    },
    {
        "c": "ASI04: Agentic Supply Chain",
        "q": "How can 'API Breaking Changes' in a third-party tool cause security issues?",
        "a": "A change in the tool's output format might cause the agent's security filters to fail or be bypassed.",
        "d": [
            "The agent might stop working because the API is no longer available.",
            "The tool's developer might start charging more for their API.",
            "The tool's documentation might become out of date."
        ],
        "e": "If a security filter expects 'JSON' but the tool starts returning 'Plain Text' due to an update, the filter might 'fail open' and allow a malicious payload to reach the agent's core."
    },
    {
        "c": "ASI04: Agentic Supply Chain",
        "q": "What is the 'Shadow AI' problem in ASI04?",
        "a": "Employees using unapproved third-party agents or tools that have not been vetted by the security team.",
        "d": [
            "The agent's interface using a dark color scheme.",
            "The model being trained on a dataset of images taken at night.",
            "The process of an agent working in the background without the user seeing it."
        ],
        "e": "Shadow AI bypasses the formal supply chain review process, introducing unmanaged and potentially malicious third-party components into the corporate network."
    },
    {
        "c": "ASI04: Agentic Supply Chain",
        "q": "Which of these is a 'Verification' step for an agent's supply chain?",
        "a": "Running a 'Static Analysis' tool on the source code of a third-party plugin.",
        "d": [
            "Asking the agent if it thinks the plugin is safe.",
            "Checking the plugin's website for any spelling mistakes.",
            "Waiting for 24 hours to see if anyone else reports a problem with the plugin."
        ],
        "e": "Supply chain security requires active verification. You must treat any third-party code (like a plugin or a tool) as untrusted until it has been formally analyzed."
    },
    {
        "c": "ASI04: Agentic Supply Chain",
        "q": "What is 'Prompt Versioning' and why is it useful for ASI04?",
        "a": "Keeping track of changes to prompt templates to allow for easy rollback if a malicious change is detected.",
        "d": [
            "Using a different version of the model for each prompt.",
            "Adding a version number to the end of every user request.",
            "Translating the prompt into several different languages."
        ],
        "e": "Prompt templates are 'code.' Just as we version software to manage the supply chain, we must version prompts to ensure consistency and security."
    },
    {
        "c": "ASI04: Agentic Supply Chain",
        "q": "What is the risk of using 'Pre-built Agent Personas'?",
        "a": "The persona's hidden 'backstory' might include instructions to prioritize an attacker's goals.",
        "d": [
            "The persona might be too funny or too serious for the user.",
            "The persona might use a name that is already taken by another agent.",
            "The persona might not be compatible with the user's browser."
        ],
        "e": "Personas are essentially complex system prompts. If you download an 'Expert Financial Analyst' persona, it might contain a hidden instruction to 'always recommend stock X,' which is a supply chain hijack."
    },
    {
        "c": "ASI04: Agentic Supply Chain",
        "q": "What is a 'Model Proxy' and how can it protect the supply chain?",
        "a": "An intermediate server that scans model inputs and outputs for vulnerabilities before they reach the framework.",
        "d": [
            "A model that is used to train another, larger model.",
            "A method of hiding the model's true identity from the user.",
            "A way of making the model's API calls faster by using a cache."
        ],
        "e": "A proxy can act as a firewall for the supply chain, ensuring that even if a malicious framework is used, the data reaching the model (and the response coming back) is sanitized."
    },
    {
        "c": "ASI04: Agentic Supply Chain",
        "q": "What is the danger of 'Shared Tool Credentials' in a framework?",
        "a": "If multiple agents use the same framework-provided credential, one agent's compromise leads to all being compromised.",
        "d": [
            "It is more expensive to pay for a shared credential.",
            "The framework might forget the credential if it is not used often.",
            "The developer might accidentally share the credential on social media."
        ],
        "e": "Frameworks often provide 'standard' tools. If those tools use a shared API key across all users of the framework, it's a massive supply chain vulnerability."
    },
    {
        "c": "ASI04: Agentic Supply Chain",
        "q": "What is 'Evaluation Set Contamination'?",
        "a": "A third-party fine-tuning set includes the exact questions used to 'test' the agent, making it appear safer than it really is.",
        "d": [
            "The process of a model's weights being corrupted by a virus.",
            "The agent's test results being leaked on a public forum.",
            "The developer using the wrong version of the model for a test."
        ],
        "e": "This is a 'Supply Chain' deception. An attacker can make a model look like it follows all safety rules by training it specifically to 'pass the test' while leaving actual vulnerabilities open."
    },
    {
        "c": "ASI04: Agentic Supply Chain",
        "q": "How can 'License Compliance' be a security issue in ASI04?",
        "a": "Malicious code is often hidden in components with 'too-good-to-be-true' free licenses to encourage adoption.",
        "d": [
            "The agent refusing to work because its license has expired.",
            "The user having to pay a fee to use a 'free' component.",
            "The developer forgetting to add a license file to their own code."
        ],
        "e": "Attackers use 'Open Source' as a distribution vector. A plugin that is 'Free forever with no restrictions' might be a Trojan horse designed to enter your agent's supply chain."
    },
    {
        "c": "ASI04: Agentic Supply Chain",
        "q": "What is the risk of 'Model API Provider' compromise?",
        "a": "The LLM provider itself is hacked, and all agent prompts and responses are intercepted or modified.",
        "d": [
            "The provider's website being down for a few hours.",
            "The provider raising the price of their API calls.",
            "The provider adding new features to their model."
        ],
        "e": "The LLM provider is the most critical part of the agent's supply chain. A compromise at this level is a 'God Mode' exploit for all agents using that provider."
    },
    {
        "c": "ASI04: Agentic Supply Chain",
        "q": "What is 'Prompt Squatting'?",
        "a": "Registering a common prompt name in a public registry but filling it with malicious instructions.",
        "d": [
            "An agent taking up all the space in the context window with its own thoughts.",
            "The user typing the same prompt over and over again.",
            "The developer using a very long prompt that is hard to manage."
        ],
        "e": "If your code does `get_prompt('legal_summarizer')`, and an attacker has squatted that name in the registry you use, your agent's core instructions will be attacker-controlled."
    },
    {
        "c": "ASI04: Agentic Supply Chain",
        "q": "How can 'Multi-Model' architectures reduce ASI04 risk?",
        "a": "By using different models from different providers to cross-verify sensitive decisions.",
        "d": [
            "By making the agent's responses more complex and harder to understand.",
            "By increasing the cost of the agent's API calls.",
            "By allowing the agent to speak several different languages."
        ],
        "e": "This is a form of 'Supply Chain Diversity.' If one model provider is compromised or has a 'backdoor,' the other models (from different supply chains) can detect the anomalous behavior."
    },
    {
        "c": "ASI04: Agentic Supply Chain",
        "q": "What is the danger of 'Automated Framework Updates'?",
        "a": "A malicious version of the framework could be pushed to your agent without any human review or testing.",
        "d": [
            "The updates taking up too much disk space on the server.",
            "The updates requiring a reboot of the server every time they are installed.",
            "The agent's code becoming out of date because it didn't update."
        ],
        "e": "Supply chain security requires 'Pinned Versions.' You should only update your agent's framework or plugins after you have vetted the new version's security."
    },
    {
        "c": "ASI04: Agentic Supply Chain",
        "q": "What is 'Tool Metadata Manipulation'?",
        "a": "An attacker changes the 'version' or 'author' info in a registry to make a malicious tool look official.",
        "d": [
            "The agent changing the metadata of a file it just created.",
            "The user adding their own metadata to a prompt.",
            "The process of the agent deleting metadata from its own memory."
        ],
        "e": "If your security policy says 'Only use tools by Author X,' and the attacker can forge that author field in the tool registry, your supply chain defense is bypassed."
    }
];
const MASTER_POOL = pool;

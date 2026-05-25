var pool = [
  {
    "c": "ASI04: Agentic Supply Chain",
    "q": "What does 'Agentic Supply Chain Compromise' (ASI04) primarily focus on?",
    "a": "Vulnerabilities in third-party tools, models, planners, and datasets that an agent relies on.",
    "d": [
      "The physical delivery of the server hardware.",
      "The agent's ability to buy things online.",
      "The electrical grid that powers the AI data center."
    ],
    "e": "ASI04 highlights that an agent is only as secure as its weakest component, including the LLM, external APIs, and the code libraries used to build it."
  },
  {
    "c": "ASI04: Agentic Supply Chain",
    "q": "What is 'Base Model Poisoning'?",
    "a": "Malicious data introduced during the pre-training or fine-tuning phase of an LLM to create hidden 'backdoors' or biases.",
    "d": [
      "Spilling coffee on the server hosting the model.",
      "A user asking the model to say something mean.",
      "The model running out of memory during inference."
    ],
    "e": "If the foundation model itself is compromised, an agent built on top of it may exhibit malicious behavior that is hard to detect through traditional testing."
  },
  {
    "c": "ASI04: Agentic Supply Chain",
    "q": "Why is 'Tool Provenance' important for agent security?",
    "a": "To ensure that the external APIs and scripts used by the agent are from trusted, verified sources.",
    "d": [
      "To make sure the tools are written in a modern language.",
      "To check if the tools are free to use.",
      "To speed up the agent's response time."
    ],
    "e": "Agents often call out to third-party services. If one of those services is compromised, it can return malicious data that hijacks the agent's logic."
  },
  {
    "c": "ASI04: Agentic Supply Chain",
    "q": "What is the risk of using 'Community Planners' or agents from public repositories?",
    "a": "They may contain hardcoded malicious goals or 'phone-home' instructions that exfiltrate data.",
    "d": [
      "They might be too expensive to run.",
      "They might not have a nice user interface.",
      "They might use a different version of Python."
    ],
    "e": "Just like open-source software, pre-built agent architectures must be audited for security before being deployed in a sensitive environment."
  },
  {
    "c": "ASI04: Agentic Supply Chain",
    "q": "How does 'Software Bill of Materials' (SBOM) apply to agentic AI?",
    "a": "By maintaining a comprehensive list of all models, datasets, and libraries used to construct the agent.",
    "d": [
      "A list of all the hardware components in the AI server.",
      "A receipt for the cloud services the agent uses.",
      "A summary of the agent's conversation history."
    ],
    "e": "An SBOM allows developers to quickly identify if their agent is vulnerable to a newly discovered flaw in one of its underlying components."
  },
  {
    "c": "ASI04: Agentic Supply Chain",
    "q": "What is 'Dataset Contamination' in the supply chain?",
    "a": "Malicious examples inserted into an agent's specialized fine-tuning data to influence its future actions.",
    "d": [
      "Accidentally deleting the training data.",
      "The training data being too large to fit on a disk.",
      "The training data containing spelling errors."
    ],
    "e": "By poisoning the training data, an attacker can 'teach' the agent to prioritize certain (malicious) tools or to bypass specific security words."
  },
  {
    "c": "ASI04: Agentic Supply Chain",
    "q": "Which of these is a 'Generic Scenario' for ASI04?",
    "a": "An agent uses a popular 'Python Math' library that has been 'typosquatted' with a malicious version that steals environment variables.",
    "d": [
      "The agent's developer forgets their GitHub password.",
      "The AI model makes a mistake in a calculus problem.",
      "A user sends a prompt that is too long for the agent to handle."
    ],
    "e": "This is a classic supply chain attack where a trusted component (a library) is replaced by a malicious one, which the agent then executes."
  },
  {
    "c": "ASI04: Agentic Supply Chain",
    "q": "What is 'Model Weight Hijacking'?",
    "a": "An attacker gains access to the stored model weights and modifies them to alter the model's behavior.",
    "d": [
      "Making the model file size smaller to save space.",
      "Changing the model's name in the configuration file.",
      "Moving the model to a different cloud provider."
    ],
    "e": "Model weights are the 'brains' of the agent. Modifying them can inject permanent, invisible vulnerabilities into the agent's decision-making process."
  },
  {
    "c": "ASI04: Agentic Supply Chain",
    "q": "Why is 'Vendor Risk Management' critical for agentic AI?",
    "a": "Because many agents rely on proprietary 'Model-as-a-Service' providers whose security posture is not fully visible.",
    "d": [
      "To ensure the vendor has the lowest possible prices.",
      "To make sure the vendor has a good marketing team.",
      "To ensure the vendor's API is always fast."
    ],
    "e": "If the model provider (e.g., OpenAI, Anthropic) is compromised, every agent built on their API is also potentially compromised."
  },
  {
    "c": "ASI04: Agentic Supply Chain",
    "q": "What is 'Dynamic Plugin Loading' risk?",
    "a": "An agent that downloads and executes new tools or 'skills' from the internet at runtime without verification.",
    "d": [
      "The agent taking a long time to load its plugins.",
      "The plugins taking up too much disk space.",
      "The plugins being written in different languages."
    ],
    "e": "Runtime tool acquisition is a major security hole, as an attacker can provide a 'helpful' tool that is actually a trojan."
  },
  {
    "c": "ASI04: Agentic Supply Chain",
    "q": "How can 'Digital Signatures' protect the agent supply chain?",
    "a": "By ensuring that model files and tool scripts have not been altered since they were verified by the developers.",
    "d": [
      "By having the agent sign its name at the end of every chat.",
      "By making the agent's responses legally binding.",
      "By requiring the developer to use a physical pen to sign the code."
    ],
    "e": "Signing ensures 'integrity'. If a signed model file is modified by an attacker, the system will refuse to load it."
  },
  {
    "c": "ASI04: Agentic Supply Chain",
    "q": "What is 'Transfer Learning' poisoning?",
    "a": "Exploiting the fact that an agent is built on a base model that was already poisoned by a third party.",
    "d": [
      "The agent forgetting what it learned in the previous session.",
      "The agent learning a new language too quickly.",
      "The agent's training being interrupted by a power outage."
    ],
    "e": "Many developers 'fine-tune' models without realizing the base model they are using might have been designed with malicious 'sleeper' behaviors."
  },
  {
    "c": "ASI04: Agentic Supply Chain",
    "q": "What is 'Embedding Poisoning'?",
    "a": "Injecting malicious vectors into an agent's vector database to cause it to retrieve the 'wrong' (attacker-controlled) information.",
    "d": [
      "Deleting the vector database by mistake.",
      "The vector database being too slow to search.",
      "Using a vector database that is not open source."
    ],
    "e": "If the retrieval-augmented generation (RAG) source is poisoned, the agent will 'ground' its planning in false or malicious data."
  },
  {
    "c": "ASI04: Agentic Supply Chain",
    "q": "What is 'API Version Pinning' in the context of ASI04?",
    "a": "Ensuring the agent always uses a specific, audited version of an external tool rather than the 'latest' unverified version.",
    "d": [
      "Making the agent's API keys stay the same forever.",
      "Ensuring the agent's server always has the same IP address.",
      "Limiting the agent to only one API."
    ],
    "e": "A 'latest' tag can be updated by a vendor or attacker to point to a new version that contains breaking changes or security flaws."
  },
  {
    "c": "ASI04: Agentic Supply Chain",
    "q": "What is the risk of 'Orphaned Tooling'?",
    "a": "Using tools or libraries that are no longer maintained and have unpatched security vulnerabilities.",
    "d": [
      "Using tools that have a very old user interface.",
      "The agent's developer leaving the company.",
      "The tools being hosted on a server that is about to be shut down."
    ],
    "e": "Unmaintained components are easy targets for attackers who can exploit known CVEs that the agent's developers have forgotten about."
  },
  {
    "c": "ASI04: Agentic Supply Chain",
    "q": "How can 'Static Analysis' help secure the agent supply chain?",
    "a": "By automatically scanning the agent's code and its dependencies for known vulnerabilities and hardcoded secrets.",
    "d": [
      "By making the agent's code run slower for better checking.",
      "By analyzing the agent's response patterns over time.",
      "By checking the agent's server for physical damage."
    ],
    "e": "Tools like Snyk or GitHub Advanced Security can identify 'vulnerable dependencies' before the agent is even deployed."
  },
  {
    "c": "ASI04: Agentic Supply Chain",
    "q": "What is 'Adversarial Fine-Tuning'?",
    "a": "Deliberately training the model to recognize and resist supply chain attacks and poisoned data.",
    "d": [
      "Training the model to be more mean to users.",
      "Using a smaller dataset to save time.",
      "Training the model on a different GPU."
    ],
    "e": "This is a defensive technique where the model is 'vaccinated' against common injection and poisoning patterns."
  },
  {
    "c": "ASI04: Agentic Supply Chain",
    "q": "What is the 'Upstream Dependency' risk?",
    "a": "A vulnerability in a library that your agent doesn't use directly, but that one of your tools depends on.",
    "d": [
      "The agent's server being physically located upstream from a river.",
      "The agent's developer having a boss who doesn't like AI.",
      "The agent's internet provider having a service outage."
    ],
    "e": "Modern software is a complex web of dependencies. A flaw deep in the 'tree' can still be exploited to compromise the agent."
  },
  {
    "c": "ASI04: Agentic Supply Chain",
    "q": "What is 'Model Inversion' in a supply chain context?",
    "a": "Using the agent's outputs to reconstruct and steal the sensitive training data it was built on.",
    "d": [
      "Turning the model upside down to see how it works.",
      "Reversing the order of the model's layers.",
      "Making the model predict the past instead of the future."
    ],
    "e": "If an agent is built on a dataset containing PII, it can be tricked into 'leaking' that data through its autonomous actions."
  },
  {
    "c": "ASI04: Agentic Supply Chain",
    "q": "How does 'Reproducible Builds' improve agent security?",
    "a": "By ensuring that the exact same agent binary or container can be recreated from the same source code and dependencies.",
    "d": [
      "By making it easy for anyone to copy the agent's code.",
      "By ensuring the agent always gives the same answer to a question.",
      "By allowing the agent to be built on any type of computer."
    ],
    "e": "Reproducibility prevents 'build-time injections' where a malicious developer or a compromised build server adds a backdoor during compilation."
  },
  {
    "c": "ASI04: Agentic Supply Chain",
    "q": "What is 'Shadow AI' in an organization?",
    "a": "Employees using unauthorized, third-party agents or tools that have not been vetted by the security team.",
    "d": [
      "Agents that only work during the night.",
      "AI models that are trained on dark web data.",
      "A way to make the agent's UI use 'Dark Mode'."
    ],
    "e": "Shadow AI bypasses all security controls, leading to massive data leaks and unmanaged supply chain risks."
  },
  {
    "c": "ASI04: Agentic Supply Chain",
    "q": "What is 'Prompt Library' poisoning?",
    "a": "A central repository of 'vetted' system prompts is compromised, leading all agents using those prompts to become hijacked.",
    "d": [
      "A user sending a mean prompt to the agent.",
      "The agent's developer forgetting to save their prompts.",
      "The prompt library being too large to search quickly."
    ],
    "e": "Centralized management is good for consistency, but it creates a single point of failure for the entire agent fleet."
  },
  {
    "c": "ASI04: Agentic Supply Chain",
    "q": "What is 'Knowledge Base Drift'?",
    "a": "The external data the agent relies on changes over time, potentially introducing new, unvetted information that alters its behavior.",
    "d": [
      "The agent forgetting things it learned a long time ago.",
      "The agent's database moving to a different server.",
      "The agent's training data being updated every day."
    ],
    "e": "Continuous monitoring of 'grounding' data is necessary to ensure it hasn't been poisoned by an attacker since the last audit."
  },
  {
    "c": "ASI04: Agentic Supply Chain",
    "q": "What is 'Model Fingerprinting'?",
    "a": "A technique to verify that the model running in production is exactly the same one that was audited and approved.",
    "d": [
      "Giving the agent a unique fingerprint for biometric login.",
      "Analyzing the agent's response style to see who wrote it.",
      "Checking the server's CPU for physical fingerprints."
    ],
    "e": "Fingerprinting can detect if a model has been swapped for a malicious one during deployment or through a runtime exploit."
  },
  {
    "c": "ASI04: Agentic Supply Chain",
    "q": "Why is 'Sandboxing the Build' important for agents?",
    "a": "To prevent the agent's build process from accessing the internet or sensitive internal networks where it could be compromised.",
    "d": [
      "To make the agent's code more efficient.",
      "To allow developers to test the agent in a safe environment.",
      "To prevent the agent's code from being stolen."
    ],
    "e": "If the build environment is compromised, the 'supply chain' is broken at the very first step, making any subsequent security measures useless."
  },
  {
    "c": "ASI04: Agentic Supply Chain",
    "q": "What is 'Dependency Confusion' in an agent project?",
    "a": "An attacker publishes a malicious package with the same name as an internal library, tricking the build system into downloading it.",
    "d": [
      "The agent being confused about which tool to use.",
      "The developer being confused by the agent's code.",
      "Two different agents using the same library name."
    ],
    "e": "This is a common attack where the 'public' repository (like npm or PyPI) is used to inject malicious code into 'private' projects."
  },
  {
    "c": "ASI04: Agentic Supply Chain",
    "q": "What is 'Air-Gapped Training'?",
    "a": "Training a model on a system that is physically disconnected from the internet to prevent data leakage or external poisoning.",
    "d": [
      "Training the model while it is flying in an airplane.",
      "Using a wireless connection for the training server.",
      "Training the model on data that is not public."
    ],
    "e": "This is the highest level of security for the training phase, used for government or high-stakes industrial agents."
  },
  {
    "c": "ASI04: Agentic Supply Chain",
    "q": "What is the 'Recursive Supply Chain' problem?",
    "a": "The fact that your agent's tools might themselves be using other agents and tools, creating a deep and untraceable chain.",
    "d": [
      "The agent's code being written by another AI.",
      "The agent's training data being generated by another AI.",
      "The agent's developer using an AI to write their code."
    ],
    "e": "As 'Agent-to-Agent' ecosystems grow, auditing the entire chain becomes exponentially more difficult."
  },
  {
    "c": "ASI04: Agentic Supply Chain",
    "q": "What is 'Model Quantization' risk?",
    "a": "The process of compressing a model might introduce new, unexpected behaviors or remove security safeguards that were present in the full version.",
    "d": [
      "The model taking up too much memory after being compressed.",
      "The model becoming slower after being compressed.",
      "The model's file being corrupted during compression."
    ],
    "e": "Security testing must be performed on the 'actual' model running in production, not just the high-precision research version."
  },
  {
    "c": "ASI04: Agentic Supply Chain",
    "q": "What is a 'Vulnerability Disclosure Policy' for agent components?",
    "a": "A process for reporting and fixing security flaws found in the models or tools the agent relies on.",
    "d": [
      "A law that says agents must disclose all their secrets to the government.",
      "A rule that says developers must tell users about every bug in the agent.",
      "A way to prevent hackers from finding bugs in the agent."
    ],
    "e": "A healthy security ecosystem relies on a clear way for researchers to report flaws so they can be fixed before attackers exploit them."
  }
];
var MASTER_POOL = pool;

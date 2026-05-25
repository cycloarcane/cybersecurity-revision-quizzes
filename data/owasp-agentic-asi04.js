var pool = [
  {
    "c": "ASI04: Agentic Supply Chain",
    "q": "What does 'Agentic Supply Chain Compromise' (ASI04) primarily focus on?",
    "a": "Vulnerabilities in third-party tools, models, planners, and datasets that an agent relies on.",
    "d": [
      "A classic SQL injection attack on the agent's web interface.",
      "The agent's ability to buy things online.",
      "A denial-of-service attack on the agent's underlying API."
    ],
    "e": "ASI04 highlights that an agent is only as secure as its weakest component, including the LLM, external APIs, and the code libraries used to build it."
  },
  {
    "c": "ASI04: Agentic Supply Chain",
    "q": "What is 'Base Model Poisoning'?",
    "a": "Malicious data introduced during the pre-training or fine-tuning phase of an LLM to create hidden 'backdoors' or biases.",
    "d": [
      "The model weights being stored in an insecure repository.",
      "A user asking the model to say something mean.",
      "The agent's inference temperature being set to a very high value."
    ],
    "e": "If the foundation model itself is compromised, an agent built on top of it may exhibit malicious behavior that is hard to detect through traditional testing."
  },
  {
    "c": "ASI04: Agentic Supply Chain",
    "q": "Why is 'Tool Provenance' important for agent security?",
    "a": "To ensure that the external APIs and scripts used by the agent are from trusted, verified sources.",
    "d": [
      "To make sure the tools are written in a modern language.",
      "Implementing a strict rate-limiting policy on the agent's API.",
      "The agent's developer using an unencrypted database for storing user sessions."
    ],
    "e": "Agents often call out to third-party services. If one of those services is compromised, it can return malicious data that hijacks the agent's logic."
  },
  {
    "c": "ASI04: Agentic Supply Chain",
    "q": "What is the risk of using 'Community Planners' or agents from public repositories?",
    "a": "They may contain hardcoded malicious goals or 'phone-home' instructions that exfiltrate data.",
    "d": [
      "The agent's API returns a 403 Forbidden error.",
      "They might not have a nice user interface.",
      "The agent's model being hosted on a public cloud provider."
    ],
    "e": "Just like open-source software, pre-built agent architectures must be audited for security before being deployed in a sensitive environment."
  },
  {
    "c": "ASI04: Agentic Supply Chain",
    "q": "How does 'Software Bill of Materials' (SBOM) apply to agentic AI?",
    "a": "By maintaining a comprehensive list of all models, datasets, and libraries used to construct the agent.",
    "d": [
      "A repository for open-source cybersecurity tools.",
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
      "The agent's model experiencing catastrophic forgetting.",
      "The agent's training dataset being stored in a public S3 bucket.",
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
      "The agent's developer losing the administrative password.",
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
      "The agent's training data being biased toward a specific programming language.",
      "To make sure the vendor has a good marketing team.",
      "The agent's training data being sourced from public social media posts."
    ],
    "e": "If the model provider (e.g., OpenAI, Anthropic) is compromised, every agent built on their API is also potentially compromised."
  },
  {
    "c": "ASI04: Agentic Supply Chain",
    "q": "What is 'Dynamic Plugin Loading' risk?",
    "a": "An agent that downloads and executes new tools or 'skills' from the internet at runtime without verification.",
    "d": [
      "The agent's model being fine-tuned on a biased dataset.",
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
      "By increasing the frequency of model fine-tuning cycles.",
      "By making the agent's responses legally binding.",
      "By increasing the complexity of the agent's system prompt instructions."
    ],
    "e": "Signing ensures 'integrity'. If a signed model file is modified by an attacker, the system will refuse to load it."
  },
  {
    "c": "ASI04: Agentic Supply Chain",
    "q": "What is 'Transfer Learning' poisoning?",
    "a": "Exploiting the fact that an agent is built on a base model that was already poisoned by a third party.",
    "d": [
      "The agent's response latency increasing due to high network traffic.",
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
      "The agent's API returns a 429 Too Many Requests error.",
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
    "e": "A 'latest' tag can be updated by a third party to point to a malicious version, while a pinned version (e.g., v1.2.3) provides supply chain stability."
  }
];
var MASTER_POOL = pool;

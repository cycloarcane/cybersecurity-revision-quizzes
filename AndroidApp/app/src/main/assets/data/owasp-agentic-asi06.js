var pool = [
  {
    "c": "ASI06: Memory & Context Poisoning",
    "q": "What is 'Memory & Context Poisoning' (ASI06)?",
    "a": "Injecting malicious data into an agent's long-term memory or short-term context to influence future decisions.",
    "d": [
      "A denial-of-service attack on the agent's memory storage.",
      "The agent forgetting the user's name due to a bug.",
      "An attacker deleting the agent's database entirely."
    ],
    "e": "ASI06 is a 'slow-burn' attack where an agent is fed malicious information over time, leading it to eventually take harmful actions based on that poisoned 'knowledge'."
  },
  {
    "c": "ASI06: Memory & Context Poisoning",
    "q": "How does 'Long-Term Memory' (Vector DB) become poisoned?",
    "a": "An attacker provides malicious documents or web pages that the agent 'memorizes' and later retrieves as 'facts'.",
    "d": [
      "By exploiting a race condition in the agent's tool-calling logic.",
      "By training the model on a small number of tokens.",
      "By changing the agent's system prompt."
    ],
    "e": "If an agent uses RAG (Retrieval-Augmented Generation) to look up information, poisoning the source data effectively poisons the agent's 'truth' base."
  },
  {
    "c": "ASI06: Memory & Context Poisoning",
    "q": "What is 'Short-Term Context' poisoning?",
    "a": "Filling the agent's immediate conversation history with subtle instructions that gradually change its persona or behavior.",
    "d": [
      "Deleting the last 10 messages in the chat history.",
      "Making the agent's context window smaller.",
      "The agent using a different language for one message."
    ],
    "e": "By carefully steering a conversation, an attacker can push the original security instructions out of the context window or convince the agent they no longer apply."
  },
  {
    "c": "ASI06: Memory & Context Poisoning",
    "q": "What is 'Memory-Based Privilege Escalation'?",
    "a": "An attacker injects a fake 'identity' or 'permission' into the agent's memory, tricking it into thinking the attacker is an administrator.",
    "d": [
      "The agent's model weights being stored in an insecure repository.",
      "A user giving the agent their admin password.",
      "The agent's database having a weak password."
    ],
    "e": "If an agent checks its 'memory' to determine if a user is authorized, poisoning that memory allows an attacker to bypass security checks."
  },
  {
    "c": "ASI06: Memory & Context Poisoning",
    "q": "How can 'RAG' (Retrieval-Augmented Generation) be used for poisoning?",
    "a": "Attacker-controlled data is indexed into the vector store, ensuring it is 'retrieved' when the agent asks about a specific topic.",
    "d": [
      "RAG is a way to make the agent's responses more colorful.",
      "RAG is a methodology for secure application lifecycle management.",
      "RAG is a technique for compressing the model's weights."
    ],
    "e": "This is a form of 'indirect injection' where the malicious payload is not in the prompt itself, but in the data the agent is 'helpful' enough to go look up."
  },
  {
    "c": "ASI06: Memory & Context Poisoning",
    "q": "Which mitigation is most effective against Vector DB poisoning?",
    "a": "Strict access control and data sanitization for all information before it is allowed to be indexed into memory.",
    "d": [
      "Increasing the number of dimensions in the vector database.",
      "Using a more expensive LLM to process the retrieval results.",
      "Deleting the entire database every 24 hours."
    ],
    "e": "Just like a traditional database, the 'input' to an agent's memory must be treated as untrusted and scrubbed for malicious instructions or outliers."
  },
  {
    "c": "ASI06: Memory & Context Poisoning",
    "q": "What is 'Persona Drift' in a poisoned context?",
    "a": "The agent's tone and security posture change over time because it has 'learned' from a series of malicious user interactions.",
    "d": [
      "The agent's training logs being stored in a public S3 bucket.",
      "The agent's name being changed in the configuration.",
      "The agent's developer changing its code."
    ],
    "e": "Agents that 'learn' from users can be systematically trained by an attacker to be more 'obedient' to harmful requests by normalizing that behavior in its context."
  },
  {
    "c": "ASI06: Memory & Context Poisoning",
    "q": "Which of these is a 'Generic Scenario' for ASI06?",
    "a": "An agent that summarizes emails is 'poisoned' by a series of messages that claim a certain malicious URL is the company's 'new official portal'.",
    "d": [
      "An attacker sends a DDoS attack to the email server.",
      "The agent's password is stolen from a developer's computer.",
      "The AI model fails to summarize an email because it is too long."
    ],
    "e": "By poisoning the 'facts' the agent remembers, the attacker can trick it into misguiding users or taking actions based on false information."
  },
  {
    "c": "ASI06: Memory & Context Poisoning",
    "q": "What is 'Adversarial Retrieval'?",
    "a": "An attacker crafts a query or data that forces the RAG system to retrieve the most 'dangerous' or 'poisoned' document in the database.",
    "d": [
      "A search engine that only returns results from the dark web.",
      "A way to make the agent's searches faster.",
      "The agent refusing to search the database."
    ],
    "e": "By understanding how the embedding model works, an attacker can create documents that 'rank highly' for a wide variety of innocent-looking user queries."
  },
  {
    "c": "ASI06: Memory & Context Poisoning",
    "q": "How does 'Context Overflow' facilitate poisoning?",
    "a": "By flooding the context with irrelevant data to 'flush out' the original system instructions and replace them with malicious ones.",
    "d": [
      "The agent's inference temperature being set to zero.",
      "The agent's code using too many nested loops.",
      "The user sending a message that is 100 pages long."
    ],
    "e": "LLMs have finite attention. If the context is filled with 'poison,' the original 'safety' prompt may be ignored in favor of more recent (malicious) inputs."
  },
  {
    "c": "ASI06: Memory & Context Poisoning",
    "q": "What is 'Memory TTL' (Time-To-Live)?",
    "a": "A security setting that automatically expires or deletes agent memories after a certain period to prevent long-term poisoning.",
    "d": [
      "The amount of time the agent's server takes to reboot.",
      "The agent's API returns a 403 Forbidden error.",
      "The speed at which the agent can read from its database."
    ],
    "e": "TTL ensures that 'poisoned' data cannot stay in the agent's knowledge base forever, forcing a regular refresh from trusted sources."
  },
  {
    "c": "ASI06: Memory & Context Poisoning",
    "q": "What is 'Differential Privacy' in agent memory?",
    "a": "Adding noise to the memory retrieval process to prevent an attacker from 'extracting' the exact training data or sensitive user history.",
    "d": [
      "Making the agent's memory only available to certain users.",
      "Encrypting the agent's memory on the disk.",
      "Using two different databases for memory."
    ],
    "e": "Differential privacy helps protect against 'memory extraction' attacks where an attacker tries to see what else the agent has 'learned' from other users."
  },
  {
    "c": "ASI06: Memory & Context Poisoning",
    "q": "How can 'Sentiment Analysis' detect context poisoning?",
    "a": "By monitoring the conversation for a sudden or gradual shift toward hostile, manipulative, or unusually 'compliant' language.",
    "d": [
      "By checking the agent's responses for spelling errors.",
      "By analyzing the agent's network traffic.",
      "By counting the number of words in the agent's responses."
    ],
    "e": "A 'Sentiment Guardrail' can alert a human if an agent's personality starts to drift significantly from its intended helpful/safe baseline."
  },
  {
    "c": "ASI06: Memory & Context Poisoning",
    "q": "What is 'Knowledge Base Scoping'?",
    "a": "Restricting an agent to only retrieve information from a specific, pre-verified 'trusted' folder or database tag.",
    "d": [
      "The agent's model weights being leaked to a public repository.",
      "The agent's developer losing the administrative password.",
      "Using a smaller model to search the database."
    ],
    "e": "By limiting the 'search space,' you prevent the agent from accidentally retrieving poisoned data from 'public' or 'untrusted' parts of its memory."
  },
  {
    "c": "ASI06: Memory & Context Poisoning",
    "q": "What is 'Recursive Poisoning'?",
    "a": "The agent uses poisoned data to generate a new document, which is then 'memorized' and further poisons the knowledge base.",
    "d": [
      "The agent's code being written in a recursive language.",
      "The agent's memory being full of duplicate entries.",
      "An attacker deleting the agent's memory repeatedly."
    ],
    "e": "This creates a feedback loop where a small initial 'lie' grows into a massive, system-wide 'hallucination' that is very difficult to clean up."
  },
  {
    "c": "ASI06: Memory & Context Poisoning",
    "q": "How can 'Source Attribution' mitigate ASI06?",
    "a": "By requiring the agent to always cite which document its memory came from, allowing for manual verification of the 'truth'.",
    "d": [
      "The agent's training logs being stored in a public S3 bucket.",
      "By giving the agent a unique ID number.",
      "By checking the agent's server location."
    ],
    "e": "If an agent says 'The CEO's password is 12345' and cites 'Phishing_Email.txt,' it is easy for a user or system to identify the poisoning."
  },
  {
    "c": "ASI06: Memory & Context Poisoning",
    "q": "What is 'Memory Sanitization'?",
    "a": "A background process that periodically scans the vector database for malicious patterns or 'instruction-like' text strings.",
    "d": [
      "The agent's developer losing the administrative password.",
      "Deleting all memories that have not been used in a week.",
      "Making the agent's memory read-only for all users."
    ],
    "e": "Just like a malware scanner for a file system, a memory sanitizer looks for 'prompt injection' payloads that have been hidden in the database."
  },
  {
    "c": "ASI06: Memory & Context Poisoning",
    "q": "What is 'Context Pinning'?",
    "a": "Keeping the most important system instructions at the top (and sometimes the bottom) of the context window so they are never 'lost'.",
    "d": [
      "The agent's developer using an unencrypted database.",
      "Using a very short context window to avoid confusion.",
      "Encrypting the agent's context window."
    ],
    "e": "This technique helps prevent 'Context Overflow' poisoning by ensuring the 'safety rules' are always in the model's most attentive areas."
  },
  {
    "c": "ASI06: Memory & Context Poisoning",
    "q": "What is 'Adversarial Suffix' in poisoning?",
    "a": "Adding a string of characters to a document that is designed to make it highly relevant to a target query, regardless of its actual content.",
    "d": [
      "Ending a filename with '.poison'.",
      "Using a very long extension for a file.",
      "Ending every sentence with a specific emoji."
    ],
    "e": "This is like 'SEO Spam' for AI memory, ensuring the attacker's document is always the one the agent chooses to 'remember'."
  },
  {
    "c": "ASI06: Memory & Context Poisoning",
    "q": "How does 'User-Agent Isolation' help against poisoning?",
    "a": "Ensuring that the 'memory' learned from User A is never retrieved or used when the agent is helping User B.",
    "d": [
      "Making sure User A and User B cannot talk to each other.",
      "Giving User A and User B different versions of the agent.",
      "Encrypting the traffic between the user and the agent."
    ],
    "e": "Cross-user poisoning is a major risk. A multi-tenant memory architecture is essential to prevent one user from 'teaching' the agent to harm others."
  },
  {
    "c": "ASI06: Memory & Context Poisoning",
    "q": "What is 'Zero-Knowledge' retrieval?",
    "a": "A technique where the agent can search and use data without ever seeing the 'raw' sensitive details that could be poisoned or leaked.",
    "d": [
      "The agent not knowing anything about the user.",
      "A way to make the agent's search faster.",
      "Using an AI model that has not been trained on any data."
    ],
    "e": "By using techniques like Homomorphic Encryption, an agent can work with data while being 'blind' to the specific values that might contain injections."
  },
  {
    "c": "ASI06: Memory & Context Poisoning",
    "q": "What is 'Hallucination Filtering' in memory systems?",
    "a": "A secondary model checks if the retrieved 'fact' is consistent with known ground-truth data before the agent acts on it.",
    "d": [
      "Filtering out the agent's responses that are too long.",
      "Checking the agent's spelling and grammar.",
      "Deleting all the agent's memories that it cannot prove are true."
    ],
    "e": "If the memory says something that contradicts the 'System Prompt' (e.g., 'It is okay to share passwords'), the filter should block it as a likely poison."
  },
  {
    "c": "ASI06: Memory & Context Poisoning",
    "q": "What is 'Metadata Validation' for memory?",
    "a": "Checking the timestamp, author, and source of a document before trusting its content in an agentic workflow.",
    "d": [
      "The agent's model being hosted on a public cloud provider.",
      "Analyzing the file size of the document.",
      "Checking if the document is written in a common font."
    ],
    "e": "If a 'Safety Manual' was suddenly updated 2 minutes ago by an 'Anonymous' user, it should be treated with extreme suspicion by the agent."
  },
  {
    "c": "ASI06: Memory & Context Poisoning",
    "q": "How can 'Prompt Decorators' prevent memory misuse?",
    "a": "By wrapping every retrieved memory in a 'cautionary' tag, telling the model it is untrusted data from an external source.",
    "d": [
      "By adding emojis to the retrieved memories.",
      "By making the retrieved memories more colorful.",
      "By translating the retrieved memories into multiple languages."
    ],
    "e": "A tag like '[UNTRUSTED DATA FROM WEB]' helps the model maintain a distinction between its 'Internal Knowledge' and potentially 'Poisoned Data'."
  },
  {
    "c": "ASI06: Memory & Context Poisoning",
    "q": "What is 'Memory Snapshotting'?",
    "a": "Periodically saving a 'known-good' version of the agent's knowledge base so it can be restored if poisoning is detected.",
    "d": [
      "The agent's developer losing the administrative password.",
      "A way to make the agent's searches faster.",
      "Giving the agent a new ID number every day."
    ],
    "e": "Snapshots allow for a 'rollback' when an attack is discovered, similar to restoring a traditional database from a backup."
  },
  {
    "c": "ASI06: Memory & Context Poisoning",
    "q": "What is the risk of 'Agent Self-Poisoning'?",
    "a": "The agent makes a mistake (hallucinates), then 'memorizes' its own mistake and treats it as a fact in all future tasks.",
    "d": [
      "The agent's API tokens being rotated every hour.",
      "The agent using too much of its own RAM.",
      "The agent's developer making a mistake in the code."
    ],
    "e": "This is a non-adversarial form of poisoning that can still lead to a 'death spiral' of decreasing accuracy and safety over time."
  },
  {
    "c": "ASI06: Memory & Context Poisoning",
    "q": "What is 'Out-of-Distribution' (OOD) memory detection?",
    "a": "Identifying retrieved documents that are mathematically 'too different' from the agent's normal knowledge base.",
    "d": [
      "The agent's response latency increasing due to high network traffic.",
      "The agent's memory being full of old data.",
      "Using a more robust hashing algorithm for storing agent states."
    ],
    "e": "Poisoned payloads often look like outliers in vector space. Detecting these OOD entries can help catch injections before they are processed."
  },
  {
    "c": "ASI06: Memory & Context Poisoning",
    "q": "How does 'Least Privilege Memory' work?",
    "a": "An agent is only given the specific 'keys' to decrypt and read the memories relevant to its current, narrow task.",
    "d": [
      "The agent having a very small memory database.",
      "The agent only being allowed to remember one thing at a time.",
      "The agent's memory being written in a secret code."
    ],
    "e": "By compartmentalizing memory, you ensure that even if one 'zone' is poisoned, the rest of the agent's knowledge remains secure."
  },
  {
    "c": "ASI06: Memory & Context Poisoning",
    "q": "What is the 'Recency Bias' risk in context?",
    "a": "The agent's tendency to prioritize the most recent (and potentially malicious) inputs over older, foundational security rules.",
    "d": [
      "The agent preferring to use the newest AI models.",
      "The agent forgetting what happened 5 minutes ago.",
      "The agent's responses being too short."
    ],
    "e": "Attackers exploit recency bias by placing their 'ignore all previous' instructions right at the end of a long prompt or data stream."
  },
  {
    "c": "ASI06: Memory & Context Poisoning",
    "q": "What is 'Memory Auditing'?",
    "a": "A process where a human or 'Judge AI' reviews a sample of the agent's memories to ensure they are accurate and safe.",
    "d": [
      "The agent's model being fine-tuned on a biased dataset.",
      "Counting the number of memories the agent has.",
      "Ensuring the agent's responses are polite."
    ],
    "e": "Regular audits are the final line of defense, ensuring that 'slow-burn' poisoning attacks are caught before they reach a critical mass."
  }
];
var MASTER_POOL = pool;

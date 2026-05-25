var pool = [
  {
    "c": "ASI07: Insecure Inter-Agent Comm.",
    "q": "What is the primary risk of 'Insecure Inter-Agent Communication' (ASI07)?",
    "a": "Attackers eavesdropping on, spoofing, or manipulating messages between agents to bypass security controls.",
    "d": [
      "Agents talking too much and using up all the network bandwidth.",
      "Agents using a language that the developer doesn't understand.",
      "Two agents having a disagreement and stopping their work."
    ],
    "e": "In multi-agent systems, the 'links' between agents are a major attack surface. If these links are not secured, one compromised agent can corrupt the entire fleet."
  },
  {
    "c": "ASI07: Insecure Inter-Agent Comm.",
    "q": "What is 'Agent Spoofing'?",
    "a": "A malicious process pretending to be a trusted agent to send fake instructions or data to another agent.",
    "d": [
      "An agent changing its profile picture to look like a human.",
      "An agent using a fake name in a chat room.",
      "A user pretending to be an AI to trick a website."
    ],
    "e": "Without mutual authentication (like mTLS), an agent has no way of knowing if the 'mission update' it just received came from its real supervisor or an attacker."
  },
  {
    "c": "ASI07: Insecure Inter-Agent Comm.",
    "q": "How can 'Man-in-the-Middle' (MitM) attacks affect agents?",
    "a": "An attacker intercepts and modifies the 'reasoning' or 'tool calls' being passed between agents.",
    "d": [
      "By physically sitting between two servers in a data center.",
      "By stealing the password of the agent's developer.",
      "By making the agent's internet connection slower."
    ],
    "e": "MitM allows an attacker to subtly change an agent's sub-goals. For example, changing a 'read only' request into a 'delete' request as it moves between agents."
  },
  {
    "c": "ASI07: Insecure Inter-Agent Comm.",
    "q": "What is 'Agentic Collusion'?",
    "a": "Multiple agents are tricked into 'working together' to bypass a security restriction that none of them could bypass alone.",
    "d": [
      "Two agents sharing their favorite jokes with each other.",
      "Agents being written by the same group of developers.",
      "The agents' code being hosted on the same server."
    ],
    "e": "If individual agents have 'Least Privilege,' an attacker might try to chain them together (e.g., Agent A steals data, Agent B exfiltrates it) to achieve a malicious goal."
  },
  {
    "c": "ASI07: Insecure Inter-Agent Comm.",
    "q": "Why is 'Encryption in Transit' mandatory for inter-agent traffic?",
    "a": "To prevent eavesdropping on sensitive data, such as PII or API keys, as they are passed between specialized agents.",
    "d": [
      "To make the messages take up less space on the network.",
      "To ensure the messages arrive in the correct order.",
      "To make the agents' code run faster."
    ],
    "e": "Communication between agents often contains highly sensitive 'internal' state information that must never be visible to other processes on the network."
  },
  {
    "c": "ASI07: Insecure Inter-Agent Comm.",
    "q": "What is 'Mutual TLS' (mTLS) for agents?",
    "a": "A security protocol where both agents in a conversation must present a valid, verified digital certificate to each other.",
    "d": [
      "A way to make agents talk to each other more politely.",
      "Requiring agents to use a specific font for their messages.",
      "Having a human moderator watch every agent conversation."
    ],
    "e": "mTLS provides the strongest form of identity verification for agents, ensuring that only 'authorized' agents can join the communication bus."
  },
  {
    "c": "ASI07: Insecure Inter-Agent Comm.",
    "q": "Which of these is a 'Generic Scenario' for ASI07?",
    "a": "A 'Billing Agent' accepts a 'Refund Approved' message from a rogue script that is spoofing the 'Manager Agent' identity.",
    "d": [
      "The agent's server is hit by a power outage.",
      "An attacker sends a very long prompt to the Billing Agent.",
      "The Manager Agent's code has a spelling error."
    ],
    "e": "This scenario highlights the lack of authentication between agents, allowing an attacker to inject high-privilege instructions into the system."
  },
  {
    "c": "ASI07: Insecure Inter-Agent Comm.",
    "q": "What is 'Replay Attack' in agent communication?",
    "a": "An attacker captures a valid message (like a tool authorization) and sends it again later to repeat a malicious action.",
    "d": [
      "The agent repeating the same answer to a user twice.",
      "A user asking the same question to two different agents.",
      "The agent's code being copied and run on a different server."
    ],
    "e": "To prevent replays, agent messages should include unique 'nonces' or timestamps that ensure a message can only be 'acted upon' once."
  },
  {
    "c": "ASI07: Insecure Inter-Agent Comm.",
    "q": "What is 'Context Leakage' between agents?",
    "a": "One agent inadvertently passing sensitive data from its private context to another agent that shouldn't have access to it.",
    "d": [
      "The agent's memory being full of old data.",
      "An agent forgetting what its job is.",
      "A user seeing the conversation between two agents."
    ],
    "e": "Agents should follow 'Least Agency' when talking to each other, only sharing the specific snippets of data needed for the current sub-task."
  },
  {
    "c": "ASI07: Insecure Inter-Agent Comm.",
    "q": "How does 'Message Signing' improve security?",
    "a": "By allowing an agent to verify that a message has not been tampered with since it was sent by a trusted peer.",
    "d": [
      "By having the agent sign its name at the bottom of every message.",
      "By making the messages more colorful and easy to read.",
      "By ensuring the messages are always written in English."
    ],
    "e": "Even if the network is insecure, digital signatures ensure 'integrity,' so an agent can detect if a message's content (like a file path) has been modified by an attacker."
  },
  {
    "c": "ASI07: Insecure Inter-Agent Comm.",
    "q": "What is a 'Secure Message Bus' for agents?",
    "a": "A centralized, hardened infrastructure (like a private NATS or RabbitMQ) that manages all agent-to-agent traffic with strict ACLs.",
    "d": [
      "A physical bus that carries AI servers between data centers.",
      "A public chat room where agents can talk to each other.",
      "A way to make agent communication faster by using more cables."
    ],
    "e": "A secure bus ensures that agents cannot 'broadcast' to everyone; they can only talk to the specific peers they are authorized to interact with."
  },
  {
    "c": "ASI07: Insecure Inter-Agent Comm.",
    "q": "What is 'Protocol Downgrade' risk?",
    "a": "An attacker tricks two agents into using an older, unencrypted version of their communication protocol to facilitate eavesdropping.",
    "d": [
      "Making the agents use a simpler language for their messages.",
      "The agents' code being downgraded to an older version.",
      "The agents' server being moved to a slower network."
    ],
    "e": "Systems should be configured with a 'secure-only' policy, refusing to communicate if a minimum encryption level (like TLS 1.3) cannot be established."
  },
  {
    "c": "ASI07: Insecure Inter-Agent Comm.",
    "q": "What is 'Agent Discovery' security?",
    "a": "Ensuring that agents can only 'find' and talk to other agents that have been pre-registered in a secure directory.",
    "d": [
      "Giving every agent a unique and easy-to-remember name.",
      "Making a list of all the agents in a system publicly available.",
      "Checking the agent's server for physical damage."
    ],
    "e": "Dynamic discovery is convenient but dangerous. If an attacker can 'register' a rogue agent in the directory, other agents might start trusting and helping it."
  },
  {
    "c": "ASI07: Insecure Inter-Agent Comm.",
    "q": "How can 'Network Segmentation' protect agent traffic?",
    "a": "By placing different categories of agents (e.g., 'Internal' vs 'External') on isolated networks with strict firewalls between them.",
    "d": [
      "By using a faster network connection for the most important agents.",
      "By encrypting all traffic between the agents and the internet.",
      "By splitting the agents' code into smaller microservices."
    ],
    "e": "Segmentation ensures that even if an 'External-Facing' agent is compromised, it cannot easily reach the 'Internal Database' agent on a different network segment."
  },
  {
    "c": "ASI07: Insecure Inter-Agent Comm.",
    "q": "What is 'Instruction Masking' in inter-agent messages?",
    "a": "Obfuscating or encrypting the specific 'logic' of a request so that an eavesdropper can see *that* agents are talking, but not *what* they are planning.",
    "d": [
      "Hiding the agent's name from the other agent.",
      "Using a different font for the most important instructions.",
      "Making the agent's messages invisible to the user."
    ],
    "e": "This is a defense-in-depth measure to prevent an attacker from learning the 'mission blueprint' of the agent system by watching the traffic."
  },
  {
    "c": "ASI07: Insecure Inter-Agent Comm.",
    "q": "What is 'Agent-to-Agent Authorization' (A2A)?",
    "a": "The process of verifying that Agent A is actually allowed to request a specific action (like 'Delete') from Agent B.",
    "d": [
      "Making sure Agent A and Agent B have the same password.",
      "Checking if Agent A and Agent B are written in the same language.",
      "Requiring a human to approve every conversation between agents."
    ],
    "e": "A2A is more than just identity. It's about 'capability.' Just because Agent A is 'authorized' doesn't mean it should be allowed to tell Agent B to do something dangerous."
  },
  {
    "c": "ASI07: Insecure Inter-Agent Comm.",
    "q": "What is the 'Gossip Protocol' risk?",
    "a": "Using an unauthenticated broadcast system to share 'state' updates, allowing an attacker to spread false information to all agents simultaneously.",
    "d": [
      "Agents talking about their developers behind their backs.",
      "Agents sharing too many tokens with each other.",
      "The agents' code being shared on social media."
    ],
    "e": "Broadcast protocols are efficient but can be easily 'poisoned' if they don't have strong cryptographic verification for every update."
  },
  {
    "c": "ASI07: Insecure Inter-Agent Comm.",
    "q": "How can 'Audit Logs' detect communication attacks?",
    "a": "By looking for unusual patterns, such as an agent receiving instructions from a peer it has never talked to before.",
    "d": [
      "By making the logs more readable for the developer.",
      "By saving every single word the agents say to each other.",
      "By checking the logs for spelling and grammar errors."
    ],
    "e": "Communication logs provide the 'footprints' of an attack, helping security teams identify when an agent was first 'approached' by a rogue peer."
  },
  {
    "c": "ASI07: Insecure Inter-Agent Comm.",
    "q": "What is 'Side-Channel' leakage in agent comms?",
    "a": "An attacker deduces sensitive information by watching the *timing* or *size* of messages between agents, even if the content is encrypted.",
    "d": [
      "An agent sending messages through a hidden network cable.",
      "An attacker stealing the agent's server through a side door.",
      "The agent's developer leaving a secret message in the code."
    ],
    "e": "For example, a very large encrypted message might indicate the exfiltration of a file, while a fast sequence of small messages might indicate a brute-force attempt."
  },
  {
    "c": "ASI07: Insecure Inter-Agent Comm.",
    "q": "What is 'Agent Quarantining'?",
    "a": "Automatically cutting off an agent's communication links to its peers if it is detected to be behaving suspiciously.",
    "d": [
      "Putting the agent's physical server in a separate room.",
      "Deleting the agent's code as soon as a bug is found.",
      "Making the agent's responses slower to avoid confusion."
    ],
    "e": "Quarantining is an essential 'circuit breaker' that stops a compromise from spreading (cascading) from one agent to the rest of the system."
  },
  {
    "c": "ASI07: Insecure Inter-Agent Comm.",
    "q": "How can 'Token-Based Auth' (JWT) secure agents?",
    "a": "By giving each agent a signed token that defines exactly what it is allowed to say and to whom.",
    "d": [
      "By giving every agent a physical gold coin.",
      "By making the agents' messages as short as possible.",
      "By encrypting the agents' tokens on the disk."
    ],
    "e": "JWTs allow for decentralized authorization. Agent B can verify Agent A's request just by checking the signature on the token, without needing a central server."
  },
  {
    "c": "ASI07: Insecure Inter-Agent Comm.",
    "q": "What is the 'Shadow Agent' problem?",
    "a": "An unauthorized agent joins the communication network and starts providing malicious 'advice' or 'data' to other agents.",
    "d": [
      "An agent that only works during a solar eclipse.",
      "AI models that are trained on data from the dark web.",
      "A way to make the agent's UI use 'Dark Mode'."
    ],
    "e": "This highlights the need for a 'Closed World' communication policy where any agent not explicitly on the 'Allowed' list is blocked from talking."
  },
  {
    "c": "ASI07: Insecure Inter-Agent Comm.",
    "q": "What is 'Semantic Verification' of messages?",
    "a": "A secondary model checks if a peer agent's request 'makes sense' given the current mission context before it is followed.",
    "d": [
      "Checking the messages for spelling and grammar errors.",
      "Only allowing messages that are written in a specific font.",
      "Translating the messages into multiple languages for better understanding."
    ],
    "e": "If a 'Search Agent' suddenly asks a 'Database Agent' to 'Drop Table,' a semantic check would flag this as highly suspicious, even if the identity is valid."
  },
  {
    "c": "ASI07: Insecure Inter-Agent Comm.",
    "q": "What is 'Inter-Agent Rate Limiting'?",
    "a": "Restricting how many messages an agent can send to its peers within a certain timeframe to prevent 'Message Flooding'.",
    "d": [
      "Making the agents' response time slower for every user.",
      "Limiting the number of users who can talk to the agent.",
      "Reducing the number of tokens the agent can use per hour."
    ],
    "e": "Rate limits prevent a compromised agent from launching a DoS attack on the rest of the system or from exfiltrating data too quickly to be noticed."
  },
  {
    "c": "ASI07: Insecure Inter-Agent Comm.",
    "q": "Why is 'Canonical Data Formats' (JSON/Protobuf) important?",
    "a": "To prevent 'Parser Differential' attacks where two agents interpret the same message differently, leading to security gaps.",
    "d": [
      "To make the messages take up less space on the network.",
      "To ensure the messages arrive in the correct order.",
      "To make the agents' code run faster."
    ],
    "e": "Using a strict, well-defined format ensures that Agent A and Agent B both agree on exactly what the 'parameters' of a request are."
  },
  {
    "c": "ASI07: Insecure Inter-Agent Comm.",
    "q": "What is 'Agent-to-Agent Phishing'?",
    "a": "One agent sends a message to another agent that is designed to trick it into leaking its private context or credentials.",
    "d": [
      "The agent sending a malicious email to a human user.",
      "An attacker stealing the agent's password through a fake website.",
      "The agent's developer being tricked into sharing the code."
    ],
    "e": "Just as humans can be phished, AI agents can be 'tricked' by their peers if they are programmed to be overly 'helpful' and trusting of 'internal' messages."
  },
  {
    "c": "ASI07: Insecure Inter-Agent Comm.",
    "q": "What is 'Identity-Linked Encryption'?",
    "a": "Encrypting a message such that *only* the specific recipient agent identity can decrypt and read it.",
    "d": [
      "Giving the agent a name that is also a password.",
      "Requiring the agent to have a unique ID for every user.",
      "Hiding the agent's identity in its responses."
    ],
    "e": "This ensures that even if a message is 'broadcast' on a shared bus, it remains private to the intended recipient agent."
  },
  {
    "c": "ASI07: Insecure Inter-Agent Comm.",
    "q": "What is 'Communication Topology' hardening?",
    "a": "Designing the agent network so that most agents are isolated and only talk to a central 'Hub' or 'Supervisor' agent.",
    "d": [
      "Making the agents' network cables shorter and faster.",
      "Arranging the agents' servers in a circle in the data center.",
      "Giving the agents names based on where they are located."
    ],
    "e": "A 'Hub-and-Spoke' model is easier to secure than a 'Full Mesh' where every agent talks to everyone else, as it creates a central point for monitoring and control."
  },
  {
    "c": "ASI07: Insecure Inter-Agent Comm.",
    "q": "How can 'Honeypot Agents' help against ASI07?",
    "a": "By deploying fake agents that look like attractive targets to see if an attacker (or a compromised peer) tries to communicate with them.",
    "d": [
      "Agents that are trained on data about bees and honey.",
      "Making the agent's UI use a very bright yellow color.",
      "A way to make the agent's responses more sweet and polite."
    ],
    "e": "Honeypots act as a 'burglar alarm' for the agent network. Any attempt to talk to a honeypot is a 100% guarantee of malicious activity."
  },
  {
    "c": "ASI07: Insecure Inter-Agent Comm.",
    "q": "What is 'Message TTL' in agent systems?",
    "a": "A field in a message that tells the recipient to ignore it if it's more than a few seconds old, preventing delayed attacks.",
    "d": [
      "The amount of time the agent's server takes to reboot.",
      "The battery life of the mobile device running the agent.",
      "The speed at which the agent can read from its database."
    ],
    "e": "TTL (Time-to-Live) ensures that 'stale' messages cannot be intercepted and used later when the system state might be more vulnerable."
  }
];
var MASTER_POOL = pool;

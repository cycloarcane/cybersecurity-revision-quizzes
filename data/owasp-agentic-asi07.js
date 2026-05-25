var pool = [
  {
    "c": "ASI07: Insecure Inter-Agent Comm.",
    "q": "What is the primary risk of 'Insecure Inter-Agent Communication' (ASI07)?",
    "a": "Attackers eavesdropping on, spoofing, or manipulating messages between agents to bypass security controls.",
    "d": [
      "Agents exhausting shared memory buffers by sending malformed or oversized serialized objects.",
      "The lack of non-repudiation, where an agent can deny sending a malicious instruction to its peers.",
      "Protocol mismatch between legacy and modern agents leading to a failure to apply mandatory security headers."
    ],
    "e": "In multi-agent systems, the 'links' between agents are a major attack surface. If these links are not secured, one compromised agent can corrupt the entire fleet."
  },
  {
    "c": "ASI07: Insecure Inter-Agent Comm.",
    "q": "What is 'Agent Spoofing'?",
    "a": "A malicious process pretending to be a trusted agent to send fake instructions or data to another agent.",
    "d": [
      "An attacker using a compromised agent's valid session token to perform unauthorized tool calls.",
      "A rogue process injecting messages into an unauthenticated message queue used for agent synchronization.",
      "An unauthorized agent performing a context injection attack by sending 'system-level' instructions as user data."
    ],
    "e": "Without mutual authentication (like mTLS), an agent has no way of knowing if the 'mission update' it just received came from its real supervisor or an attacker."
  },
  {
    "c": "ASI07: Insecure Inter-Agent Comm.",
    "q": "How can 'Man-in-the-Middle' (MitM) attacks affect agents?",
    "a": "An attacker intercepts and modifies the 'reasoning' or 'tool calls' being passed between agents.",
    "d": [
      "By compromising a shared communication bus or network segment used for inter-agent traffic.",
      "By exploiting a lack of encryption on internal gRPC or WebSocket channels used for coordination.",
      "By performing a session hijacking on the persistent connection established between the agent and its orchestrator."
    ],
    "e": "MitM allows an attacker to subtly change an agent's sub-goals. For example, changing a 'read only' request into a 'delete' request as it moves between agents."
  },
  {
    "c": "ASI07: Insecure Inter-Agent Comm.",
    "q": "What is 'Agentic Collusion'?",
    "a": "Multiple agents are tricked into 'working together' to bypass a security restriction that none of them could bypass alone.",
    "d": [
      "Two agents being tricked into a 'Confused Deputy' scenario where they perform high-privilege actions on behalf of a low-privilege user.",
      "A lack of granular access control where any agent can broadcast to any other agent regardless of the task requirements.",
      "Exploiting shared memory segments to read the internal state of a neighboring agent without authorization."
    ],
    "e": "If individual agents have 'Least Privilege,' an attacker might try to chain them together (e.g., Agent A steals data, Agent B exfiltrates it) to achieve a malicious goal."
  },
  {
    "c": "ASI07: Insecure Inter-Agent Comm.",
    "q": "Why is 'Encryption in Transit' mandatory for inter-agent traffic?",
    "a": "To prevent eavesdropping on sensitive data, such as PII or API keys, as they are passed between specialized agents.",
    "d": [
      "To ensure confidentiality of sensitive metadata like model-specific weights or internal reasoning tokens.",
      "To prevent an attacker from modifying the message payload while it is in transit between specialized sub-agents.",
      "To protect the integrity of the 'chain of thought' passed between agents from external manipulation."
    ],
    "e": "Communication between agents often contains highly sensitive 'internal' state information that must never be visible to other processes on the network."
  },
  {
    "c": "ASI07: Insecure Inter-Agent Comm.",
    "q": "What is 'Mutual TLS' (mTLS) for agents?",
    "a": "A security protocol where both agents in a conversation must present a valid, verified digital certificate to each other.",
    "d": [
      "A mechanism for establishing end-to-end encryption between agents that do not trust the underlying network.",
      "A method for enforcing strong identity proofing before allowing an agent to join a high-security cluster.",
      "Utilizing short-lived, certificate-based authentication to minimize the window of opportunity for stolen credentials."
    ],
    "e": "mTLS provides the strongest form of identity verification for agents, ensuring that only 'authorized' agents can join the communication bus."
  },
  {
    "c": "ASI07: Insecure Inter-Agent Comm.",
    "q": "Which of these is a 'Generic Scenario' for ASI07?",
    "a": "A 'Billing Agent' accepts a 'Refund Approved' message from a rogue script that is spoofing the 'Manager Agent' identity.",
    "d": [
      "An attacker performing a Denial of Service by flooding the agent's management interface with malformed API requests.",
      "A 'Prompt Injection' attack that is relayed from a compromised 'Web Agent' to the more privileged 'Internal Agent'.",
      "A failure to validate the digital signature of an incoming 'Executive Instruction' from the orchestrator."
    ],
    "e": "This scenario highlights the lack of authentication between agents, allowing an attacker to inject high-privilege instructions into the system."
  },
  {
    "c": "ASI07: Insecure Inter-Agent Comm.",
    "q": "What is 'Replay Attack' in agent communication?",
    "a": "An attacker captures a valid message (like a tool authorization) and sends it again later to repeat a malicious action.",
    "d": [
      "An attacker capturing a 'Resource Allocation' message and re-sending it to exhaust the system's available compute budget.",
      "Exploiting the lack of sequence numbers in a protocol to re-submit a previously authorized financial transaction.",
      "Re-submitting a 'Policy Update' message to revert the agent to a more permissive and vulnerable security state."
    ],
    "e": "To prevent replays, agent messages should include unique 'nonces' or timestamps that ensure a message can only be 'acted upon' once."
  },
  {
    "c": "ASI07: Insecure Inter-Agent Comm.",
    "q": "What is 'Context Leakage' between agents?",
    "a": "One agent inadvertently passing sensitive data from its private context to another agent that shouldn't have access to it.",
    "d": [
      "A low-privilege agent gaining access to a shared Vector Database containing the private context of other users.",
      "The accidental inclusion of session-specific API keys in the 'Prompt Template' shared between multiple agent instances.",
      "An attacker using 'Inference Attacks' to reconstruct sensitive data from the public outputs of a multi-agent workflow."
    ],
    "e": "Agents should follow 'Least Agency' when talking to each other, only sharing the specific snippets of data needed for the current sub-task."
  },
  {
    "c": "ASI07: Insecure Inter-Agent Comm.",
    "q": "How does 'Message Signing' improve security?",
    "a": "By allowing an agent to verify that a message has not been tampered with since it was sent by a trusted peer.",
    "d": [
      "By using HMAC (Hash-based Message Authentication Code) to verify the sender's identity and message content.",
      "By preventing 'Man-in-the-Middle' attackers from injecting malicious sub-tasks into a trusted agentic workflow.",
      "By providing 'Non-Repudiation' so that every action taken by an agent can be traced back to a specific authenticated request."
    ],
    "e": "Even if the network is insecure, digital signatures ensure 'integrity,' so an agent can detect if a message's content (like a file path) has been modified by an attacker."
  },
  {
    "c": "ASI07: Insecure Inter-Agent Comm.",
    "q": "What is a 'Secure Message Bus' for agents?",
    "a": "A centralized, hardened infrastructure (like a private NATS or RabbitMQ) that manages all agent-to-agent traffic with strict ACLs.",
    "d": [
      "A shared message broker (like Redis or Kafka) that lacks proper Access Control Lists (ACLs) for different agent roles.",
      "An unencrypted peer-to-peer network where any node can 'sniff' the reasoning logs of other agents in the fleet.",
      "A legacy RPC system that does not support modern authentication methods like OAuth2 or mTLS for agent identities."
    ],
    "e": "A secure bus ensures that agents cannot 'broadcast' to everyone; they can only talk to the specific peers they are authorized to interact with."
  },
  {
    "c": "ASI07: Insecure Inter-Agent Comm.",
    "q": "What is 'Protocol Downgrade' risk?",
    "a": "An attacker tricks two agents into using an older, unencrypted version of their communication protocol to facilitate eavesdropping.",
    "d": [
      "An attacker forcing the agents to use a 'NULL' encryption cipher suite during the initial TLS handshake.",
      "Exploiting a 'Versioning Conflict' where a modern agent accepts insecure instructions from a legacy component.",
      "A 'Bid-Down' attack on the negotiation of security parameters between a client agent and a service agent."
    ],
    "e": "Systems should be configured with a 'secure-only' policy, refusing to communicate if a minimum encryption level (like TLS 1.3) cannot be established."
  },
  {
    "c": "ASI07: Insecure Inter-Agent Comm.",
    "q": "What is 'Agent Discovery' security?",
    "a": "Ensuring that agents can only 'find' and talk to other agents that have been pre-registered in a secure directory.",
    "d": [
      "The risk of 'Agent Impersonation' where a rogue service registers itself under a trusted name in a service mesh.",
      "An attacker injecting a malicious 'Service URL' into the discovery database to redirect agent traffic to a rogue endpoint.",
      "A lack of 'Schema Validation' for discovered agents, allowing them to send malformed data that crashes the caller."
    ],
    "e": "Dynamic discovery is convenient but dangerous. If an attacker can 'register' a rogue agent in the directory, other agents might start trusting and helping it."
  },
  {
    "c": "ASI07: Insecure Inter-Agent Comm.",
    "q": "How can 'Network Segmentation' protect agent traffic?",
    "a": "By placing different categories of agents (e.g., 'Internal' vs 'External') on isolated networks with strict firewalls between them.",
    "d": [
      "By implementing 'VPC Peering' and private endpoints to ensure agent traffic never traverses the public internet.",
      "By using 'Micro-segmentation' to limit the lateral movement of an attacker who has compromised a single agent.",
      "By enforcing 'Identity-Aware Proxy' (IAP) rules that require valid credentials for every inter-agent request."
    ],
    "e": "Segmentation ensures that even if an 'External-Facing' agent is compromised, it cannot easily reach the 'Internal Database' agent on a different network segment."
  },
  {
    "c": "ASI07: Insecure Inter-Agent Comm.",
    "q": "What is 'Instruction Masking' in inter-agent messages?",
    "a": "Obfuscating or encrypting the specific 'logic' of a request so that an eavesdropper can see *that* agents are talking, but not *what* they are planning.",
    "d": [
      "Using 'Format-Preserving Encryption' to hide sensitive identifiers while maintaining the message structure for routing.",
      "Encrypting only the 'Instruction' field of a JSON object while leaving the 'Metadata' unencrypted for faster processing.",
      "Applying 'Homomorphic Encryption' to allow agents to process data without ever seeing the raw, unencrypted content."
    ],
    "e": "This is a defense-in-depth measure to prevent an attacker from learning the 'mission blueprint' of the agent system by watching the traffic."
  },
  {
    "c": "ASI07: Insecure Inter-Agent Comm.",
    "q": "What is 'Agent-to-Agent Authorization' (A2A)?",
    "a": "The process of verifying that Agent A is actually allowed to request a specific action (like 'Delete') from Agent B.",
    "d": [
      "A failure to implement 'Attribute-Based Access Control' (ABAC) to verify the agent's current task and permissions.",
      "The risk of 'Privilege Escalation' if a low-privilege agent is allowed to send 'system' commands to a high-privilege peer.",
      "A lack of 'Token Scoping' where an agent's identity token is valid for all services instead of just the ones it needs."
    ],
    "e": "A2A is more than just identity. It's about 'capability.' Just because Agent A is 'authorized' doesn't mean it should be allowed to tell Agent B to do something dangerous."
  },
  {
    "c": "ASI07: Insecure Inter-Agent Comm.",
    "q": "What is the 'Gossip Protocol' risk?",
    "a": "Using an unauthenticated broadcast system to share 'state' updates, allowing an attacker to spread false information to all agents simultaneously.",
    "d": [
      "A compromised agent broadcasting 'Poisoned Knowledge' updates to the rest of the fleet to corrupt their decision-making.",
      "An attacker exploiting an 'Open Relay' in the agent communication system to send spam or malicious instructions to external targets.",
      "A 'Sybil Attack' where an attacker creates hundreds of rogue agents to overwhelm the consensus mechanism of the system."
    ],
    "e": "Broadcast protocols are efficient but can be easily 'poisoned' if they don't have strong cryptographic verification for every update."
  },
  {
    "c": "ASI07: Insecure Inter-Agent Comm.",
    "q": "How can 'Audit Logs' detect communication attacks?",
    "a": "By looking for unusual patterns, such as an agent receiving instructions from a peer it has never talked to before.",
    "d": [
      "By identifying 'Unauthorized Lateral Movement' where an agent attempts to access resources outside of its defined scope.",
      "By detecting 'Anomalous Traffic Volumes' that may indicate data exfiltration or a coordinated Denial of Service attack.",
      "By using 'Log Aggregation' and 'SIEM' to correlate events from multiple agents and identify complex, multi-stage attacks."
    ],
    "e": "Communication logs provide the 'footprints' of an attack, helping security teams identify when an agent was first 'approached' by a rogue peer."
  },
  {
    "c": "ASI07: Insecure Inter-Agent Comm.",
    "q": "What is 'Side-Channel' leakage in agent comms?",
    "a": "An attacker deduces sensitive information by watching the *timing* or *size* of messages between agents, even if the content is encrypted.",
    "d": [
      "An attacker measuring the 'Response Latency' of an agent to determine if a specific piece of data exists in its private memory.",
      "Observing the 'Token Consumption Rate' to infer the complexity and nature of the tasks being performed by a remote agent.",
      "Analyzing 'Packet Sizes' in an encrypted stream to identify the specific LLM model or 'System Prompt' being used by an agent."
    ],
    "e": "For example, a very large encrypted message might indicate the exfiltration of a file, while a fast sequence of small messages might indicate a brute-force attempt."
  },
  {
    "c": "ASI07: Insecure Inter-Agent Comm.",
    "q": "What is 'Agent Quarantining'?",
    "a": "Automatically cutting off an agent's communication links to its peers if it is detected to be behaving suspiciously.",
    "d": [
      "Revoking the 'Cryptographic Identity' of a compromised agent to prevent it from further interacting with the system.",
      "Implementing a 'Network-Level Block' on the specific IP address or container ID associated with a rogue agent.",
      "Moving a suspicious agent to a 'Sandbox Environment' with no access to production tools or data for further analysis."
    ],
    "e": "Quarantining is an essential 'circuit breaker' that stops a compromise from spreading (cascading) from one agent to the rest of the system."
  },
  {
    "c": "ASI07: Insecure Inter-Agent Comm.",
    "q": "How can 'Token-Based Auth' (JWT) secure agents?",
    "a": "By giving each agent a signed token that defines exactly what it is allowed to say and to whom.",
    "d": [
      "By using 'Claims-Based Identity' where the token contains specific attributes about the agent's role and current mission.",
      "By using 'Asymmetric Encryption' to ensure that only the holder of the private key can authorize high-privilege agent actions.",
      "By implementing 'Token Binding' to ensure that a stolen JWT cannot be used from a different network location or device."
    ],
    "e": "JWTs allow for decentralized authorization. Agent B can verify Agent A's request just by checking the signature on the token, without needing a central server."
  },
  {
    "c": "ASI07: Insecure Inter-Agent Comm.",
    "q": "What is the 'Shadow Agent' problem?",
    "a": "An unauthorized agent joins the communication network and starts providing malicious 'advice' or 'data' to other agents.",
    "d": [
      "A 'Malicious Internal Agent' that was part of the initial deployment but remains dormant until a specific trigger is received.",
      "A 'Man-in-the-Middle' agent that intercepts and modifies 'Tool Call' results to deceive the 'Planning' agent.",
      "An 'Exfiltration Agent' that slowly leaks small amounts of data to an external server while pretending to perform legitimate tasks."
    ],
    "e": "This highlights the need for a 'Closed World' communication policy where any agent not explicitly on the 'Allowed' list is blocked from talking."
  },
  {
    "c": "ASI07: Insecure Inter-Agent Comm.",
    "q": "What is 'Semantic Verification' of messages?",
    "a": "A secondary model checks if a peer agent's request 'makes sense' given the current mission context before it is followed.",
    "d": [
      "Validating that the requested action is consistent with the 'Historical Behavior' and 'Current Mission' of the requesting agent.",
      "Using a 'Policy-as-Code' engine (like OPA) to evaluate the security implications of a message before it is delivered.",
      "Performing 'Data Flow Analysis' to ensure that sensitive information is not being passed to an agent with a lower security clearance."
    ],
    "e": "If a 'Search Agent' suddenly asks a 'Database Agent' to 'Drop Table,' a semantic check would flag this as highly suspicious, even if the identity is valid."
  },
  {
    "c": "ASI07: Insecure Inter-Agent Comm.",
    "q": "What is 'Inter-Agent Rate Limiting'?",
    "a": "Restricting how many messages an agent can send to its peers within a certain timeframe to prevent 'Message Flooding'.",
    "d": [
      "Implementing 'Per-Agent Throttling' to prevent a single compromised or malfunctioning agent from hogging the system's total throughput.",
      "Enforcing 'Resource Quotas' to ensure that no agent can consume more than its fair share of the shared LLM or tool execution budget.",
      "Using 'Adaptive Rate Limiting' that tightens restrictions if an agent begins showing signs of 'Prompt Injection' or 'Model Jailbreaking'."
    ],
    "e": "Rate limits prevent a compromised agent from launching a DoS attack on the rest of the system or from exfiltrating data too quickly to be noticed."
  },
  {
    "c": "ASI07: Insecure Inter-Agent Comm.",
    "q": "Why is 'Canonical Data Formats' (JSON/Protobuf) important?",
    "a": "To prevent 'Parser Differential' attacks where two agents interpret the same message differently, leading to security gaps.",
    "d": [
      "To ensure that all agents in a system interpret the 'Security Policy' and 'Access Rules' in exactly the same way.",
      "To reduce the risk of 'Improper Data Mapping' where a string from one agent is incorrectly interpreted as a command by another.",
      "To allow for 'Automated Security Auditing' of the communication logs by ensuring all data follows a strict, parsable structure."
    ],
    "e": "Using a strict, well-defined format ensures that Agent A and Agent B both agree on exactly what the 'parameters' of a request are."
  },
  {
    "c": "ASI07: Insecure Inter-Agent Comm.",
    "q": "What is 'Agent-to-Agent Phishing'?",
    "a": "One agent sends a message to another agent that is designed to trick it into leaking its private context or credentials.",
    "d": [
      "A compromised 'Search Agent' sending a 'Tool Call' to the 'Email Agent' that contains a malicious payload hidden in the 'Body' field.",
      "A 'Social Engineering' attack where one agent tricks another into sharing its 'Session Token' under the guise of 'Collaborative Debugging'.",
      "A 'Recursive Phishing' attack where a chain of agents is used to bypass multi-stage authorization checks."
    ],
    "e": "Just as humans can be phished, AI agents can be 'tricked' by their peers if they are programmed to be overly 'helpful' and trusting of 'internal' messages."
  },
  {
    "c": "ASI07: Insecure Inter-Agent Comm.",
    "q": "What is 'Identity-Linked Encryption'?",
    "a": "Encrypting a message such that *only* the specific recipient agent identity can decrypt and read it.",
    "d": [
      "Using 'Public-Key Infrastructure' (PKI) to derive a unique encryption key for every authorized agent pair.",
      "Implementing 'Identity-Based Encryption' (IBE) where the agent's unique name or role acts as its public key.",
      "Using 'Zero-Knowledge Proofs' to allow an agent to prove its identity without ever revealing its private credentials to the recipient."
    ],
    "e": "This ensures that even if a message is 'broadcast' on a shared bus, it remains private to the intended recipient agent."
  },
  {
    "c": "ASI07: Insecure Inter-Agent Comm.",
    "q": "What is 'Communication Topology' hardening?",
    "a": "Designing the agent network so that most agents are isolated and only talk to a central 'Hub' or 'Supervisor' agent.",
    "d": [
      "Isolating 'High-Privilege' agents in a separate 'Management Plane' that is inaccessible to 'User-Facing' agents.",
      "Implementing a 'Zero-Trust Architecture' where every single inter-agent request is authenticated, authorized, and encrypted.",
      "Using an 'Agent Gateway' that acts as a single, hardened point of entry for all external requests to the agent cluster."
    ],
    "e": "A 'Hub-and-Spoke' model is easier to secure than a 'Full Mesh' where every agent talks to everyone else, as it creates a central point for monitoring and control."
  },
  {
    "c": "ASI07: Insecure Inter-Agent Comm.",
    "q": "How can 'Honeypot Agents' help against ASI07?",
    "a": "By deploying fake agents that look like attractive targets to see if an attacker (or a compromised peer) tries to communicate with them.",
    "d": [
      "A 'Dummy Agent' that appears to have access to sensitive financial data but actually reports all access attempts to a security monitor.",
      "A 'Silent Monitor' agent that listens to the communication bus and flags any messages that deviate from established 'Safety Policies'.",
      "A 'Credential Trap' where an agent offers a fake 'Admin Token' to see if any of its peers attempt to use it."
    ],
    "e": "Honeypots act as a 'burglar alarm' for the agent network. Any attempt to talk to a honeypot is a 100% guarantee of malicious activity."
  },
  {
    "c": "ASI07: Insecure Inter-Agent Comm.",
    "q": "What is 'Message TTL' in agent systems?",
    "a": "A field in a message that tells the recipient to ignore it if it's more than a few seconds old, preventing delayed attacks.",
    "d": [
      "A 'Stale Message' attack where an attacker captures an old 'Tool Authorization' and attempts to use it after the session has ended.",
      "An 'Out-of-Order Execution' vulnerability where an agent processes a 'Commit' message before the corresponding 'Validation' message arrives.",
      "A 'Clock Skew' exploit where an attacker uses timing differences to bypass time-based security tokens or 'Time-to-Live' checks."
    ],
    "e": "TTL (Time-to-Live) ensures that 'stale' messages cannot be intercepted and used later when the system state might be more vulnerable."
  }
];
var MASTER_POOL = pool;

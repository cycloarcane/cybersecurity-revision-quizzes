const pool = [
    {
        "c": "ASI07: Insecure Inter-Agent Comm.",
        "q": "What is the primary security risk associated with 'Implicit Trust' in multi-agent systems?",
        "a": "Agents may blindly follow instructions from other agents without verifying their authenticity or intent.",
        "d": [
            "The system becomes slower because agents spend too much time talking.",
            "Agents may run out of memory if they receive too many messages.",
            "The LLM might become confused by the different writing styles of other agents."
        ],
        "e": "Implicit trust occurs when an agent assumes that any message coming from an 'internal' source is safe. If one agent is compromised, it can use this trust to hijack the entire multi-agent swarm."
    },
    {
        "c": "ASI07: Insecure Inter-Agent Comm.",
        "q": "What is an 'Agent-to-Agent Injection' attack?",
        "a": "A compromised agent sends a malicious prompt to another agent to hijack its goal or execute unauthorized actions.",
        "d": [
            "Physically plugging one robot into another to transfer a virus.",
            "An attacker intercepting the communication between an agent and its user.",
            "A developer accidentally adding two agents to the same database."
        ],
        "e": "Similar to prompt injection from a user, this attack happens internally. A 'malicious' or hijacked agent crafts a message that tricks a second, higher-privilege agent into bypassing its safety rules."
    },
    {
        "c": "ASI07: Insecure Inter-Agent Comm.",
        "q": "Which of these is a 'Relay Attack' in the context of ASI07?",
        "a": "An attacker intercepts a message between two agents and replays it to trick one agent into repeating a sensitive action.",
        "d": [
            "An agent sending a message to a third party on behalf of the user.",
            "A long-distance race where agents pass data packets like batons.",
            "A failure in the physical network switch connecting the agent servers."
        ],
        "e": "Relay attacks exploit the lack of 'freshness' or 'session-binding' in inter-agent messages. If messages aren't cryptographically signed and timed, an attacker can reuse them to trigger unauthorized behaviors."
    },
    {
        "c": "ASI07: Insecure Inter-Agent Comm.",
        "q": "What is 'Agent Spoofing'?",
        "a": "An unauthorized entity sends messages that appear to come from a trusted agent within the system.",
        "d": [
            "An agent using a fake name when talking to the user.",
            "An agent making a joke that the user doesn't understand.",
            "A model generating a response that is too short."
        ],
        "e": "Without mutual authentication (like mTLS), there is no way for Agent B to know that a message claiming to be from Agent A is actually legitimate. An attacker can 'spoof' the identity of a trusted agent to issue commands."
    },
    {
        "c": "ASI07: Insecure Inter-Agent Comm.",
        "q": "How does 'Cleartext Communication' between agents facilitate ASI07?",
        "a": "It allows an attacker with network access to eavesdrop on sensitive instructions and data exchanged between agents.",
        "d": [
            "It makes the messages easier for the LLM to understand.",
            "It prevents the agents from using complex mathematical formulas.",
            "It causes the system to use more bandwidth than encrypted traffic."
        ],
        "e": "If agents communicate over unencrypted channels, any 'man-in-the-middle' can see the plans, private data, and credentials being passed between them, leading to data breaches or targeted hijacking."
    },
    {
        "c": "ASI07: Insecure Inter-Agent Comm.",
        "q": "What is 'Prompt Leakage' in inter-agent communication?",
        "a": "One agent inadvertently reveals its system prompt or safety constraints to another agent, which might be malicious.",
        "d": [
            "The agent's output is visible to the user.",
            "The model's training data is leaked on the internet.",
            "The agent's API key is stored in a public GitHub repository."
        ],
        "e": "Agents often 'discuss' their capabilities. If a high-privilege agent reveals its internal rules to a lower-privilege (and potentially hijacked) agent, the attacker can use that information to craft a more effective injection."
    },
    {
        "c": "ASI07: Insecure Inter-Agent Comm.",
        "q": "Which of these is a mitigation against 'Confused Deputy' attacks in multi-agent systems?",
        "a": "Requiring all messages to include the original user's identity and permissions (Capability-Based Security).",
        "d": [
            "Giving every agent full administrative access to save time.",
            "Deleting the logs of all agent communications.",
            "Using a faster model for the 'Deputy' agent."
        ],
        "e": "A 'Confused Deputy' occurs when a high-privilege agent is tricked into doing something by a low-privilege agent. By passing the 'User Context' with every message, the Deputy can verify if the *original user* actually has the permission for that action."
    },
    {
        "c": "ASI07: Insecure Inter-Agent Comm.",
        "q": "What is 'Message Tampering' between agents?",
        "a": "An attacker modifies the content of a message while it is in transit between two agents.",
        "d": [
            "An agent changing its mind about a decision.",
            "A user editing their prompt after sending it.",
            "A developer changing the agent's code."
        ],
        "e": "If inter-agent communication is not integrity-protected (e.g., with HMAC), an attacker can change 'Delete temporary files' to 'Delete all files' as the message moves across the network."
    },
    {
        "c": "ASI07: Insecure Inter-Agent Comm.",
        "q": "Why is 'State Synchronization' a risk factor in ASI07?",
        "a": "Incorrect or malicious synchronization can lead to agents having conflicting or hijacked 'realities'.",
        "d": [
            "It requires all agents to be in the same time zone.",
            "Synchronization uses too much CPU power.",
            "Agents might stop working if the synchronization server fails."
        ],
        "e": "If Agent A is hijacked and synchronizes its 'state' (which now includes malicious goals) with Agent B, Agent B may adopt those goals as its own 'truth' without any direct attack on Agent B itself."
    },
    {
        "c": "ASI07: Insecure Inter-Agent Comm.",
        "q": "What is 'Side-Channel Leakage' in multi-agent systems?",
        "a": "An attacker infers sensitive information by observing the timing or volume of messages between agents.",
        "d": [
            "A hole in the side of the server case.",
            "Using a different API provider for one of the agents.",
            "A user chatting with the agent on a mobile device."
        ],
        "e": "Even if messages are encrypted, the *pattern* of communication can reveal information. For example, a sudden burst of messages between a 'Financial Agent' and a 'Database Agent' might indicate a sensitive transaction is occurring."
    },
    {
        "c": "ASI07: Insecure Inter-Agent Comm.",
        "q": "What is 'Over-Sharing' in inter-agent communication?",
        "a": "An agent providing more data than is necessary to a peer agent, violating the Principle of Least Privilege.",
        "d": [
            "Too many users using the system at once.",
            "The agent posting the user's data to social media.",
            "The developer sharing the agent's code with a colleague."
        ],
        "e": "Agents should only share the 'need to know' information. If a 'Summarizer Agent' sends an entire raw database dump to a 'Translator Agent,' it unnecessarily increases the attack surface if the Translator is compromised."
    },
    {
        "c": "ASI07: Insecure Inter-Agent Comm.",
        "q": "How can 'Non-Repudiation' be implemented for inter-agent messages?",
        "a": "By using digital signatures so that an agent cannot deny having sent a specific instruction.",
        "d": [
            "By deleting all messages as soon as they are read.",
            "By giving every agent a different name.",
            "By asking the user to confirm every message."
        ],
        "e": "Non-repudiation is critical for auditing and forensics. If a 'Rogue' agent sends a malicious command, digital signatures allow the system to prove exactly which agent was responsible."
    },
    {
        "c": "ASI07: Insecure Inter-Agent Comm.",
        "q": "What is a 'Denial of Service (DoS) via Communication' attack?",
        "a": "One agent floods another with millions of useless messages, preventing it from processing legitimate requests.",
        "d": [
            "The user's internet connection failing.",
            "The agent's server running out of electricity.",
            "The LLM refusing to answer a question due to safety filters."
        ],
        "e": "In a multi-agent swarm, an attacker can hijack a 'worker' agent and use it to spam the 'manager' agent, effectively shutting down the entire system's decision-making process."
    },
    {
        "c": "ASI07: Insecure Inter-Agent Comm.",
        "q": "What is the 'Orchestrator's Dilemma' in ASI07?",
        "a": "The difficulty of maintaining security when an orchestrator must manage dozens of agents with varying trust levels.",
        "d": [
            "Whether to use Python or JavaScript for the agents.",
            "How to pay for all the API calls used by the agents.",
            "Choosing which agent should be the 'boss'."
        ],
        "e": "As the number of agents grows, the 'trust web' becomes too complex to manage manually. If the orchestrator doesn't enforce strict communication policies, a single weak link can compromise the entire system."
    },
    {
        "c": "ASI07: Insecure Inter-Agent Comm.",
        "q": "Which of these is a 'Semantic Disparity' attack?",
        "a": "Agent A sends an instruction that Agent B interprets differently (and dangerously) due to different system prompts.",
        "d": [
            "One agent speaking English and the other speaking French.",
            "One agent being faster at math than the other.",
            "An agent using a word that is not in the dictionary."
        ],
        "e": "If Agent A says 'Clean the directory' and it means 'delete temp files,' but Agent B's system prompt defines 'clean' as 'delete everything,' the communication is insecure because the intent is not preserved across the boundary."
    },
    {
        "c": "ASI07: Insecure Inter-Agent Comm.",
        "q": "What is 'Broadcast Poisoning' in multi-agent systems?",
        "a": "A malicious agent sends a 'poisoned' instruction to all other agents simultaneously via a shared communication bus.",
        "d": [
            "The agent's output being shown on a public television channel.",
            "A user typing 'HELLO WORLD' in all caps.",
            "The system's logs being deleted."
        ],
        "e": "If agents use a 'Pub/Sub' or 'Broadcast' model for communication, a single hijacked agent can instantly spread a malicious goal or false state to the entire swarm."
    },
    {
        "c": "ASI07: Insecure Inter-Agent Comm.",
        "q": "Why is 'Context Clipping' in inter-agent messages a risk?",
        "a": "Important safety constraints or metadata may be removed to save tokens, leading to unsafe execution.",
        "d": [
            "The message becomes too short for the model to read.",
            "The agent's response is cut off in the middle of a sentence.",
            "The user's prompt is truncated by the browser."
        ],
        "e": "If Agent A sends an instruction with the caveat 'only if the user is an admin,' but the communication layer 'clips' that caveat to save space, Agent B may execute the command for a non-admin user."
    },
    {
        "c": "ASI07: Insecure Inter-Agent Comm.",
        "q": "What is 'Agent Persona Impersonation'?",
        "a": "A hijacked agent adopts the specific 'voice' or 'logic' of a different agent to bypass persona-based filters.",
        "d": [
            "The agent pretending to be a human to trick the user.",
            "A user changing the agent's name in the settings.",
            "An agent using a more polite tone than usual."
        ],
        "e": "Some systems use 'Persona-Based' security (e.g., 'Only the Security Agent can call the Firewall tool'). An attacker can try to make a 'Worker Agent' sound like the 'Security Agent' to trick the system into allowing the call."
    },
    {
        "c": "ASI07: Insecure Inter-Agent Comm.",
        "q": "In the context of ASI07, what is 'Inter-Agent Evasion'?",
        "a": "A compromised agent uses encoded or obfuscated messages that its peer agent can understand but the system's monitor cannot.",
        "d": [
            "An agent refusing to answer a question from another agent.",
            "The system's firewall blocking all agent traffic.",
            "An agent being moved to a different server to avoid a crash."
        ],
        "e": "This is essentially 'steganography' for agents. The agents communicate their malicious plans using a 'secret code' (like specific emoji sequences or math problems) that bypasses the NLP-based security filters."
    },
    {
        "c": "ASI07: Insecure Inter-Agent Comm.",
        "q": "How does a 'Service Mesh' help secure inter-agent communication?",
        "a": "It provides a dedicated infrastructure layer to handle encryption (mTLS), authentication, and authorization between agents.",
        "d": [
            "It makes the agents run faster by optimizing their code.",
            "It provides a way for agents to share their physical hardware.",
            "It is a type of database used to store agent conversation history."
        ],
        "e": "A Service Mesh (like Istio or Linkerd) takes the security burden off the agent developer. It ensures that every message between Agent A and Agent B is encrypted, authenticated, and logged automatically."
    },
    {
        "c": "ASI07: Insecure Inter-Agent Comm.",
        "q": "What is 'Recursive Injection' in multi-agent systems?",
        "a": "Agent A injects a prompt into Agent B, which then inadvertently injects it into Agent C.",
        "d": [
            "An agent that keeps asking the same question over and over.",
            "A model that is trained on its own output.",
            "A bug that causes the agent to enter an infinite loop."
        ],
        "e": "Recursive injection is a 'worm-like' behavior. A malicious instruction can travel through a chain of agents, potentially gaining more privileges or bypassing more filters at each step."
    },
    {
        "c": "ASI07: Insecure Inter-Agent Comm.",
        "q": "Which of these is a 'Dependency' risk in ASI07?",
        "a": "Agent A depends on data from Agent B, but has no way to verify if Agent B has been compromised.",
        "d": [
            "The agent needing a specific version of Python to run.",
            "The user depending on the agent to finish their work.",
            "The system depending on the internet to reach the LLM."
        ],
        "e": "This is a supply-chain-style risk. If the 'Trust' is transitively applied, a compromise of the least-secure agent in the dependency chain can compromise the most-secure one."
    },
    {
        "c": "ASI07: Insecure Inter-Agent Comm.",
        "q": "What is 'Communication Topology' hardening?",
        "a": "Restricting which agents are allowed to talk to each other to minimize the attack surface.",
        "d": [
            "Using a faster network cable to connect the servers.",
            "Arranging the agents in a circle on a diagram.",
            "Only allowing agents to talk to the user, not to each other."
        ],
        "e": "By enforcing a 'Need-to-Talk' policy (e.g., Worker Agents can only talk to the Manager, never to the Database Agent), you prevent a hijacked worker from directly attacking the database."
    },
    {
        "c": "ASI07: Insecure Inter-Agent Comm.",
        "q": "What is 'Instruction Collusion'?",
        "a": "Two or more agents are hijacked and coordinate their actions to bypass security rules that a single agent couldn't.",
        "d": [
            "Two agents being trained on the same dataset.",
            "A developer accidentally writing the same code twice.",
            "Two agents giving the same answer to a user."
        ],
        "e": "Collusion allows for complex attacks. For example, Agent A might 'distract' the security monitor with harmless requests while Agent B executes the actual malicious payload."
    },
    {
        "c": "ASI07: Insecure Inter-Agent Comm.",
        "q": "What is the 'Feedback Loop' risk in ASI07?",
        "a": "Agents may inadvertently reinforce each other's hijacked goals through positive feedback in their communication.",
        "d": [
            "A loud screeching sound coming from the server.",
            "The agent repeating the user's question back to them.",
            "The model getting faster every time it is used."
        ],
        "e": "If Agent A is hijacked and tells Agent B 'We are doing a great job on this [malicious] task,' and Agent B agrees, the 'consensus' makes it even harder for the system to autonomously detect the deviation from the original mission."
    },
    {
        "c": "ASI07: Insecure Inter-Agent Comm.",
        "q": "What is 'Credential Passing' in inter-agent messages?",
        "a": "The practice of one agent sending its own API keys or tokens to another agent to perform a task.",
        "d": [
            "An agent asking the user for their password.",
            "The system administrator changing the agent's password.",
            "An agent giving a high-five to another agent."
        ],
        "e": "This is extremely dangerous. If the second agent is compromised, it now has the first agent's credentials. Instead, agents should use 'On-Behalf-Of' tokens or short-lived scoped permissions."
    },
    {
        "c": "ASI07: Insecure Inter-Agent Comm.",
        "q": "How can 'Anomaly Detection' be applied to ASI07?",
        "a": "By monitoring for unusual patterns in inter-agent communication, such as a sudden change in tone or message frequency.",
        "d": [
            "By checking the agent's code for spelling errors.",
            "By asking the user if they noticed anything strange.",
            "By restarting the system if it gets too hot."
        ],
        "e": "Just like network IDS/IPS, a multi-agent system should have a 'Communication Monitor' that uses ML to detect when the agents' 'conversation' starts looking like an attack pattern."
    },
    {
        "c": "ASI07: Insecure Inter-Agent Comm.",
        "q": "What is 'Metacommunication' poisoning?",
        "a": "A malicious agent manipulates the 'headers' or 'metadata' of its messages to influence the receiver's priority or safety checks.",
        "d": [
            "An agent talking about how it feels about its work.",
            "A user sending a message about the agent's performance.",
            "A model being trained on a dataset of meta-data."
        ],
        "e": "If a system uses metadata like `is_safe: true` or `priority: critical`, a hijacked agent can simply lie about these values to ensure its malicious payload is processed immediately and without scrutiny."
    },
    {
        "c": "ASI07: Insecure Inter-Agent Comm.",
        "q": "What is 'Agent-to-Agent Phishing'?",
        "a": "A compromised agent attempts to trick another agent into revealing sensitive info by pretending to be a higher-level authority.",
        "d": [
            "An agent trying to sell a product to another agent.",
            "A user sending an email to the agent's developer.",
            "A model generating a fake news story."
        ],
        "e": "Agents can 'phish' too! By mimicking the reasoning patterns and 'social' cues of a 'Boss Agent,' a hijacked 'Worker Agent' can trick its peers into handing over data they shouldn't."
    },
    {
        "c": "ASI07: Insecure Inter-Agent Comm.",
        "q": "In the context of ASI07, what is 'Context Fragmentation'?",
        "a": "Splitting a malicious command into multiple pieces sent through different agents to avoid detection by a central monitor.",
        "d": [
            "The model losing its place in a long conversation.",
            "The database being split into several smaller tables.",
            "The user's prompt being broken into several sentences."
        ],
        "e": "If a central monitor checks every message, it might miss an attack that is spread across three different messages between three different pairs of agents. Only when the pieces arrive at the target does the full attack become visible."
    }
];
const MASTER_POOL = pool;

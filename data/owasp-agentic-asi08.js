var pool = [
  {
    "c": "ASI08: Cascading Agent Failures",
    "q": "What is 'Cascading Agent Failures' (ASI08)?",
    "a": "A failure or compromise in one agent triggers a chain reaction of errors or malicious actions across a multi-agent system.",
    "d": [
      "Resource exhaustion in the central orchestrator due to an unhandled exception loop in a child agent.",
      "A logical inconsistency in one agent's output that triggers a 'Semantic Failure' in all downstream consumers.",
      "A 'Deadlock' condition where multiple agents are waiting for each other to release shared tool locks."
    ],
    "e": "In a tightly coupled agent ecosystem, a single 'bad' output from one agent can be interpreted as a 'valid' instruction by the next, spreading the failure rapidly."
  },
  {
    "c": "ASI08: Cascading Agent Failures",
    "q": "What is a 'Feedback Loop' in the context of ASI08?",
    "a": "Two or more agents enter a cycle of escalating requests or actions that consume all system resources.",
    "d": [
      "A 'Message Echo' where an agent's response is mistakenly re-injected as a new instruction into its own input stream.",
      "A 'Token Exhaustion' feedback loop where agents repeatedly request clarification for increasingly malformed prompts.",
      "A 'State Synchronization' error that leads to inconsistent model behaviors across different regions of a cluster."
    ],
    "e": "For example, Agent A asks Agent B for help, Agent B asks Agent A for clarification, and they keep going forever, causing a Denial of Service."
  },
  {
    "c": "ASI08: Cascading Agent Failures",
    "q": "What is 'State Explosion'?",
    "a": "A single agent request triggers an exponentially increasing number of sub-tasks across other agents, overwhelming the system.",
    "d": [
      "A 'Recursive Tool Call' where an agent triggers a task that exponentially spawns new agent instances.",
      "A 'Context Window Saturation' attack that forces the agent to lose its initial safety constraints.",
      "An 'Infinite Reasoning' loop where the LLM attempts to resolve an ambiguous or paradoxical system instruction."
    ],
    "e": "This is like an 'AI Fork Bomb,' where the autonomy of agents is used against the system to exhaust all CPU or memory."
  },
  {
    "c": "ASI08: Cascading Agent Failures",
    "q": "How can a 'Circuit Breaker' mitigate cascading failures?",
    "a": "By automatically stopping communication between agents if the error rate or request volume exceeds a safe threshold.",
    "d": [
      "By implementing 'Inter-Agent Rate Limiting' to prevent a single agent from flooding the communication bus.",
      "By using 'Isolation Sandboxes' that automatically disconnect agents showing high anomalous error rates.",
      "By utilizing 'Degraded Operation Modes' that disable non-essential agent capabilities during a system-wide stress event."
    ],
    "e": "Circuit breakers 'fail fast' to protect the overall system's health, preventing a localized error from taking down the entire agent fleet."
  },
  {
    "c": "ASI08: Cascading Agent Failures",
    "q": "What is 'Malicious Intent Propagation'?",
    "a": "A hijacked agent sends 'valid-looking' instructions to other agents, causing them to perform harmful actions without knowing they are part of an attack.",
    "d": [
      "A 'Privilege Escalation' attack where a compromised agent sends 'High-Trust' instructions to a more powerful peer.",
      "A 'Data Poisoning' event where a rogue agent modifies the shared vector database used for 'Retrieved Context'.",
      "A 'Confused Deputy' attack where an agent is tricked into using its administrative credentials for a malicious sub-task."
    ],
    "e": "This is a cascading *security* failure. The hijacked 'Planner Agent' tells the 'File Agent' to delete everything, and the 'File Agent' obeys because it trusts the planner."
  },
  {
    "c": "ASI08: Cascading Agent Failures",
    "q": "What is 'Retry Storm' in agentic AI?",
    "a": "Multiple agents repeatedly retrying failed requests at the same time, worsening a bottleneck or system crash.",
    "d": [
      "A 'Synchronized Restart' where all agents attempt to re-authenticate at once after a network hiccup, causing a DoS.",
      "A lack of 'Jitter' in retry logic, leading to 'Periodic Spikes' in traffic that overwhelm the API gateway.",
      "An 'Exponential Backoff' failure where agents retry failing tasks too aggressively, preventing the system from recovering."
    ],
    "e": "Exponential backoff and jitter are necessary in agent communication to prevent a small hiccup from turning into a massive 'storm' of traffic."
  },
  {
    "c": "ASI08: Cascading Agent Failures",
    "q": "Which of these is a 'Generic Scenario' for ASI08?",
    "a": "An 'Email Agent' fails and returns an error; the 'Supervisor Agent' interprets this error as a 'User Instruction' and begins a destructive task.",
    "d": [
      "A 'Semantic Corruption' where a failure in a 'Translation Agent' causes all subsequent agents to receive nonsensical data.",
      "A 'Tool Dependency Failure' where the unavailability of a single external API causes a hang across the entire agent fleet.",
      "A 'Bypass of Human-in-the-loop' (HITL) where an error cascade allows an agent to execute a high-risk action without approval."
    ],
    "e": "This shows how poor error handling in one agent can lead to 'semantic corruption' in another, triggering a cascade of unintended actions."
  },
  {
    "c": "ASI08: Cascading Agent Failures",
    "q": "What is 'Quota Exhaustion' in a cascading failure?",
    "a": "One malfunctioning agent uses up the entire shared API budget (e.g., OpenAI tokens), causing all other agents to fail simultaneously.",
    "d": [
      "A 'Shared Context Leakage' where one agent's failure to clear its buffer exposes sensitive data to other agents.",
      "A 'Global Rate Limit' hit on the underlying LLM provider, caused by a single agent entering a 'Chatter Loop'.",
      "A 'Priority Inversion' where low-value logging tasks consume the entire token budget of a mission-critical security agent."
    ],
    "e": "Shared resource limits must be carefully managed with 'per-agent' quotas to ensure that one 'rogue' agent doesn't starve the others."
  },
  {
    "c": "ASI08: Cascading Agent Failures",
    "q": "How does 'Graceful Degradation' protect the system?",
    "a": "By allowing the system to continue working with reduced functionality if some agents or tools are unavailable.",
    "d": [
      "By automatically switching to a 'Local LLM' with lower capability but higher availability when the primary cloud API fails.",
      "By implementing 'Circuit Breakers' on all external tool calls to prevent a slow third-party API from hanging the agent.",
      "By using 'Asynchronous Messaging' to decouple agent tasks and prevent a failure in one from blocking the execution thread of another."
    ],
    "e": "A resilient agent system should be able to say 'I can't send the email right now, but I have saved the draft' instead of crashing the entire workflow."
  },
  {
    "c": "ASI08: Cascading Agent Failures",
    "q": "What is 'Deadlock' in a multi-agent system?",
    "a": "Two agents are waiting for each other to finish a task, causing both to hang indefinitely and block the rest of the queue.",
    "d": [
      "A 'Circular Dependency' where Agent A is waiting for Agent B, which is waiting for a tool locked by Agent A.",
      "A 'Resource Starvation' scenario where an agent holds onto a database connection while waiting for a slow LLM response.",
      "A 'Livelock' where agents are constantly changing their state in response to each other but making no progress on the task."
    ],
    "e": "Deadlocks are common in complex asynchronous systems. Agents need 'timeouts' for every interaction to ensure they don't wait forever for a peer."
  },
  {
    "c": "ASI08: Cascading Agent Failures",
    "q": "What is 'Stochastic Resonance' in agent failures?",
    "a": "Random, minor errors in several agents happen to align perfectly to create a major, catastrophic system failure.",
    "d": [
      "An 'Emergent Misalignment' where small, non-obvious errors in individual agents combine into a catastrophic system-wide failure.",
      "A 'Stochastic Buffer Overflow' caused by the unpredictable length of LLM outputs in a tightly coupled multi-agent chain.",
      "A 'Cascading Hallucination' where one agent's false assumption is treated as a hard fact by all subsequent agents in the workflow."
    ],
    "e": "This highlights the difficulty of testing multi-agent systems. The 'emergent behavior' of the fleet can be far more unpredictable than any single agent."
  },
  {
    "c": "ASI08: Cascading Agent Failures",
    "q": "How can 'Observability' help stop a cascade?",
    "a": "By providing real-time dashboards that show the 'health' and 'traffic' between all agents, allowing for manual intervention.",
    "d": [
      "By implementing 'Distributed Tracing' (e.g., Jaeger) to visualize the flow of instructions and identify the origin of a failure.",
      "By using 'Real-time Anomaly Detection' to flag agent behaviors that deviate from the 'Baseline Security Profile'.",
      "By providing 'Automated Rollbacks' that revert the entire agent fleet to a known-good configuration if a cascade is detected."
    ],
    "e": "You cannot stop what you cannot see. Distributed tracing (like OpenTelemetry) is essential for identifying the 'root cause' of a cascade."
  },
  {
    "c": "ASI08: Cascading Agent Failures",
    "q": "What is the 'Thundering Herd' problem?",
    "a": "A large number of agents all wake up or restart at the exact same time and overwhelm a shared resource (like a database).",
    "d": [
      "A 'Cold Start' problem where all agents attempt to load their large 'System Prompts' simultaneously, exhausting memory.",
      "A 'Cache Miss Storm' where a failure in the caching layer causes all agents to hit the backend LLM at the same time.",
      "A 'Resource Exhaustion' attack where an attacker triggers a large number of 'Agentic Workflows' that compete for the same CPU cores."
    ],
    "e": "To prevent this, agent startups and tasks should be 'jittered' (randomly delayed) so they don't all hit the system at the same microsecond."
  },
  {
    "c": "ASI08: Cascading Agent Failures",
    "q": "What is 'Priority Inversion' in agentic AI?",
    "a": "Low-priority 'background' agent tasks block high-priority 'emergency' tasks from being processed.",
    "d": [
      "A 'Lock Contention' issue where a low-priority 'Cleaner Agent' prevents a high-priority 'Emergency Agent' from accessing the database.",
      "A 'Scheduling Failure' where the orchestrator assigns too many tasks to a single agent, causing its 'Latency' to spike.",
      "A 'Token Depletion' scenario where high-priority security checks are skipped because the agent's 'Context Window' is full of low-priority data."
    ],
    "e": "A robust system needs a 'Quality of Service' (QoS) layer that ensures critical security or safety tasks always have the resources they need."
  },
  {
    "c": "ASI08: Cascading Agent Failures",
    "q": "How does 'Health Checking' mitigate ASI08?",
    "a": "By having a central monitor that 'pings' agents and removes them from the available pool if they don't respond correctly.",
    "d": [
      "By utilizing 'Active Probing' to verify that an agent can still correctly interpret safety instructions before assigning it a new task.",
      "By implementing 'Watchdog Timers' that automatically kill and restart agents that have not reported 'Success' within a defined window.",
      "By verifying the 'Checksum' of the agent's current 'System Prompt' to ensure it hasn't been modified by an attacker."
    ],
    "e": "Active health checks can 'detect and isolate' a failing agent before it has a chance to send corrupted data to its peers."
  },
  {
    "c": "ASI08: Cascading Agent Failures",
    "q": "What is 'Fail-Open' vs 'Fail-Closed' in agent security?",
    "a": "'Fail-Closed' means the agent stops all actions if it encounters an error, which is generally more secure for cascading failures.",
    "d": [
      "Fail-Open means the system ignores a failed 'Safety Check' and allows the agent to continue, potentially leading to a cascade.",
      "Fail-Closed means the system terminates the entire workflow if any individual agent reports a 'Security Exception'.",
      "Fail-Open is often the default for 'Performance' reasons, but it can allow a small compromise to spread across the entire fleet."
    ],
    "e": "If a security agent fails, it should 'Fail-Closed' (block everything) to prevent an attacker from exploiting the 'gap' left by the failure."
  },
  {
    "c": "ASI08: Cascading Agent Failures",
    "q": "What is 'Recursive Task Bomb'?",
    "a": "An agent is tricked into creating a task that creates two more tasks, which create four more, etc., until the system is overwhelmed.",
    "d": [
      "A 'Fork Bomb' equivalent where an agent's logic is tricked into spawning infinite sub-agents.",
      "A 'Depth Limit' breach where a recursive agentic workflow exceeds the system's available stack memory.",
      "A 'Cycle Detection' failure that allows a task to be passed back and forth between two agents indefinitely."
    ],
    "e": "This is a classic 'Denial of Service' pattern. Systems must have a 'Maximum Depth' for task recursion to prevent this cascade."
  },
  {
    "c": "ASI08: Cascading Agent Failures",
    "q": "How can 'Statelessness' help prevent cascading failures?",
    "a": "By ensuring that an error in one task doesn't 'linger' and corrupt the agent's state for the next, unrelated task.",
    "d": [
      "By using 'Functional Programming' principles for agent tasks, ensuring they have no 'Side Effects' that could corrupt the global state.",
      "By implementing 'Task Isolation' where every agent request runs in a fresh, ephemeral container or process.",
      "By providing 'Atomic Transactions' for agent actions, allowing the system to 'Roll Back' if a multi-stage task fails halfway through."
    ],
    "e": "If an agent is 'reset' between tasks, a failure in Task A is much less likely to cascade into a failure in Task B."
  },
  {
    "c": "ASI08: Cascading Agent Failures",
    "q": "What is 'Distributed Consensus' (like Paxos/Raft) for agents?",
    "a": "A way for multiple agents to agree on a 'safe' state or goal, preventing a single rogue agent from making a bad decision alone.",
    "d": [
      "A 'Byzantine Fault' where an agent is compromised and deliberately sends conflicting information to its peers to prevent agreement.",
      "A 'Quorum-Based Decision' model where a majority of agents must agree on a 'Safe Plan' before it is executed.",
      "A 'Leader Election' failure in an agent cluster, leading to multiple agents trying to act as the 'Supervisor' simultaneously."
    ],
    "e": "Consensus protocols can prevent a 'cascading hijack' by requiring a majority of agents to agree before any high-impact action is taken."
  },
  {
    "c": "ASI08: Cascading Agent Failures",
    "q": "What is 'Pressure-Based Shedding'?",
    "a": "The system automatically starts dropping 'low-value' agent tasks when it detects it is nearing a resource-induced failure.",
    "d": [
      "A 'Priority-Based Task Dropping' mechanism that preserves 'Critical Paths' (like security logging) during a resource crunch.",
      "A 'Token-Bucket' algorithm that limits the total rate of agentic actions across the entire system.",
      "A 'Backpressure' signal that tells upstream agents to slow down their request rate when a downstream tool is overwhelmed."
    ],
    "e": "Shedding load 'gracefully' prevents the entire system from hitting a 'hard' failure wall that would cause a complete shutdown."
  },
  {
    "c": "ASI08: Cascading Agent Failures",
    "q": "How can 'Semantic Isolation' protect against ASI08?",
    "a": "By ensuring that an error message from Agent A is never directly parsed as a command by Agent B.",
    "d": [
      "By using 'Validation Envelopes' that require Agent B to verify the 'Type' and 'Schema' of a message before processing it.",
      "By implementing 'Strict Interface Definitions' (like Protobuf) that prevent agents from 'Improvising' on their communication protocol.",
      "By using 'Semantic Sanitizers' that strip potentially executable code or malicious prompts from inter-agent messages."
    ],
    "e": "Error messages should be 'typed' and 'structured,' and agents should have specific 'error-handling' logic that is separate from their 'task-handling' logic."
  },
  {
    "c": "ASI08: Cascading Agent Failures",
    "q": "What is 'Byzantine Fault Tolerance' for agent systems?",
    "a": "A design that allows the system to function correctly even if some agents are malfunctioning or acting maliciously (Byzantine nodes).",
    "d": [
      "A 'Threshold Signature' scheme where no single agent can authorize a high-impact action without the 'Approval' of other nodes.",
      "An 'm-of-n' Redundancy' system that can tolerate the complete failure or compromise of 'm' agents in a fleet of 'n'.",
      "A 'State Machine' architecture that restricts agents to a set of 'Pre-defined Valid Transitions' to prevent unpredictable emergent behavior."
    ],
    "e": "This is the 'gold standard' for resilience, assuming that some parts of the system *will* be compromised and designing to survive that reality."
  },
  {
    "c": "ASI08: Cascading Agent Failures",
    "q": "What is 'Cascading Latency'?",
    "a": "A delay in one agent causes other agents to 'wait' and 'pile up,' eventually leading to a complete system hang.",
    "d": [
      "A 'Queue Congestion' scenario where a single slow 'Reasoning Agent' causes a timeout in all 'User-Facing' agents.",
      "A 'Blocking Call' on a shared resource that prevents other agents from performing their independent tasks.",
      "A 'Head-of-Line Blocking' (HoL) issue in the agent communication multiplexer."
    ],
    "e": "Latency cascades can be just as destructive as error cascades. Timeouts and asynchronous 'fire-and-forget' patterns can help mitigate this."
  },
  {
    "c": "ASI08: Cascading Agent Failures",
    "q": "How does 'Bulkheading' prevent cascades?",
    "a": "By partitioning the agent system into independent 'compartments' so that a failure in one cannot physically or logically reach the others.",
    "d": [
      "By using 'Micro-Segmentation' to ensure that a failure in the 'Public Agent' network cannot reach the 'Internal Tool' network.",
      "By implementing 'Tenant Isolation' to prevent a failure in one customer's agent from affecting another's on the same infrastructure.",
      "By partitioning 'Resource Pools' so that a 'Token Storm' in one project doesn't starve the budget of another."
    ],
    "e": "If the 'Search compartment' fails, it should not be able to affect the 'Billing compartment,' even if they are part of the same overall application."
  },
  {
    "c": "ASI08: Cascading Agent Failures",
    "q": "What is 'Error Propagation Limit'?",
    "a": "A setting that prevents an agent from 'passing on' an error message more than X number of times in a chain.",
    "d": [
      "A 'Graph Analysis' tool that identifies 'Infinite Recursion' paths in the agent's possible 'Chain of Thought'.",
      "A 'TTL' (Time-To-Live) for every agentic task, after which it is automatically aborted to prevent 'Zombie Tasks'.",
      "A 'Max-Hops' restriction on how many times an instruction can be passed between agents before it must be re-validated."
    ],
    "e": "This prevents 'infinite error loops' where Agent A tells Agent B about an error, and Agent B tells Agent A, and so on."
  },
  {
    "c": "ASI08: Cascading Agent Failures",
    "q": "What is 'State Reconstruction' after a cascade?",
    "a": "The ability of the system to 'wipe' all current agent states and rebuild them from a known-good 'event log'.",
    "d": [
      "The use of 'Snapshot Isolation' to allow agents to work on a 'Point-in-Time' copy of the data, avoiding 'Race Conditions'.",
      "A 'Self-Healing' mechanism that automatically detects 'Stuck' agents and restarts them with a clean 'Context State'.",
      "A 'Write-Ahead Log' (WAL) that records every agent action before it happens, allowing for 'Post-Mortem Reconstruction'."
    ],
    "e": "Event sourcing is a great way to achieve this. If a cascade happens, you can 'replay' the history up until the point the failure started."
  },
  {
    "c": "ASI08: Cascading Agent Failures",
    "q": "What is 'Agent Fatigue' in a cascading failure scenario?",
    "a": "A high-load situation where the LLM's 'reasoning quality' drops due to context window saturation, leading to more errors and further cascading.",
    "d": [
      "A 'Model Degradation' event where the LLM's 'Perplexity' increases under heavy load, leading to more frequent 'Logical Errors'.",
      "A 'Context Drift' where the agent's 'Internal State' becomes increasingly decoupled from the 'External Reality' over long conversations.",
      "A 'Knowledge Poisoning' cascade where one agent's 'Hallucinated Tool Output' is cached and used by all other agents."
    ],
    "e": "This is a 'soft' failure. As the system gets stressed, the 'brain' of the agent gets 'confused,' making it more likely to make the very mistakes that cause a crash."
  },
  {
    "c": "ASI08: Cascading Agent Failures",
    "q": "How can 'Chaos Engineering' help against ASI08?",
    "a": "By deliberately 'killing' agents or 'injecting' errors in a test environment to see how the system handles cascades.",
    "d": [
      "By 'Fuzzing' the agent's communication protocol to identify edge cases that could trigger an 'Unhandled Exception' cascade.",
      "By performing 'Stress Testing' on the 'Shared Memory' or 'Vector DB' to see how many concurrent agents it can support before failing.",
      "By using 'Adversarial Agent Testing' where one agent is specifically tasked with trying to break the 'Resilience' of the others."
    ],
    "e": "Tools like 'Chaos Monkey' for agents can help developers find and fix the 'weak links' that would allow a cascade to happen in production."
  },
  {
    "c": "ASI08: Cascading Agent Failures",
    "q": "What is 'Multi-Model Redundancy'?",
    "a": "Using two different AI models for the same agent task. If one produces a 'failing' or 'dangerous' output, the other acts as a check.",
    "d": [
      "A 'N-Version Programming' approach where different agents are implemented using completely different 'Prompt Engineering' techniques.",
      "A 'Model Voting' system where a consensus is required before a high-impact 'Tool Call' is permitted.",
      "A 'Cross-Model Verification' strategy to detect 'Jailbreaks' that might only be effective against a specific LLM architecture."
    ],
    "e": "Models from different vendors often have different 'blind spots.' Using a 'Diversity' strategy can prevent a single model-specific failure from cascading."
  },
  {
    "c": "ASI08: Cascading Agent Failures",
    "q": "What is a 'Global Kill-Switch' for agents?",
    "a": "A manual or automated 'Emergency Stop' button that immediately terminates all agent processes across the entire organization.",
    "d": [
      "A 'Hardware-Level Disconnect' for the AI accelerators to ensure that a rogue cascade can be stopped even if the software is compromised.",
      "An 'Automated Kill-Switch' that is triggered if the system's 'Financial Spend' or 'Error Rate' exceeds a critical threshold.",
      "A 'Manual Override' that allows a human operator to 'Hijack' any agent process and stop a spreading cascade in real-time."
    ],
    "e": "In the case of a 'Rogue Agent' or 'Hyper-Cascade' that is spreading too fast to fix, the kill-switch is the final defense to protect the organization's assets."
  }
];
var MASTER_POOL = pool;

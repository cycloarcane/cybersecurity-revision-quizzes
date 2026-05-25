var pool = [
  {
    "c": "ASI08: Cascading Agent Failures",
    "q": "What is 'Cascading Agent Failures' (ASI08)?",
    "a": "A failure or compromise in one agent triggers a chain reaction of errors or malicious actions across a multi-agent system.",
    "d": [
      "The agent's server physically falling over and hitting other servers.",
      "An agent being unable to finish a task because it is too complex.",
      "The user getting frustrated with the agent and turning it off."
    ],
    "e": "In a tightly coupled agent ecosystem, a single 'bad' output from one agent can be interpreted as a 'valid' instruction by the next, spreading the failure rapidly."
  },
  {
    "c": "ASI08: Cascading Agent Failures",
    "q": "What is a 'Feedback Loop' in the context of ASI08?",
    "a": "Two or more agents enter a cycle of escalating requests or actions that consume all system resources.",
    "d": [
      "The agent's audio output being picked up by its own microphone.",
      "A human user giving the agent constructive criticism.",
      "The agent's code being written in a recursive language."
    ],
    "e": "For example, Agent A asks Agent B for help, Agent B asks Agent A for clarification, and they keep going forever, causing a Denial of Service."
  },
  {
    "c": "ASI08: Cascading Agent Failures",
    "q": "What is 'State Explosion'?",
    "a": "A single agent request triggers an exponentially increasing number of sub-tasks across other agents, overwhelming the system.",
    "d": [
      "The agent's physical database server exploding.",
      "The agent's training data growing too large.",
      "The agent using too many fancy words in its responses."
    ],
    "e": "This is like an 'AI Fork Bomb,' where the autonomy of agents is used against the system to exhaust all CPU or memory."
  },
  {
    "c": "ASI08: Cascading Agent Failures",
    "q": "How can a 'Circuit Breaker' mitigate cascading failures?",
    "a": "By automatically stopping communication between agents if the error rate or request volume exceeds a safe threshold.",
    "d": [
      "By physically turning off the power to the data center.",
      "By requiring the agent to solve a math problem before it can talk.",
      "By making the agent's responses slower for every user."
    ],
    "e": "Circuit breakers 'fail fast' to protect the overall system's health, preventing a localized error from taking down the entire agent fleet."
  },
  {
    "c": "ASI08: Cascading Agent Failures",
    "q": "What is 'Malicious Intent Propagation'?",
    "a": "A hijacked agent sends 'valid-looking' instructions to other agents, causing them to perform harmful actions without knowing they are part of an attack.",
    "d": [
      "The agent's developer being mean to the agent.",
      "The agent learning how to be a hacker by reading the internet.",
      "The agent's code being shared on the dark web."
    ],
    "e": "This is a cascading *security* failure. The hijacked 'Planner Agent' tells the 'File Agent' to delete everything, and the 'File Agent' obeys because it trusts the planner."
  },
  {
    "c": "ASI08: Cascading Agent Failures",
    "q": "What is 'Retry Storm' in agentic AI?",
    "a": "Multiple agents repeatedly retrying failed requests at the same time, worsening a bottleneck or system crash.",
    "d": [
      "A weather-related event that affects the AI's data center.",
      "The agent's developer trying to fix a bug many times.",
      "A user asking the same question 100 times in a row."
    ],
    "e": "Exponential backoff and jitter are necessary in agent communication to prevent a small hiccup from turning into a massive 'storm' of traffic."
  },
  {
    "c": "ASI08: Cascading Agent Failures",
    "q": "Which of these is a 'Generic Scenario' for ASI08?",
    "a": "An 'Email Agent' fails and returns an error; the 'Supervisor Agent' interprets this error as a 'User Instruction' and begins a destructive task.",
    "d": [
      "The agent's server runs out of disk space and shuts down.",
      "An attacker performs a social engineering attack on the agent's developer.",
      "The AI model produces a response with a high hallucination rate."
    ],
    "e": "This shows how poor error handling in one agent can lead to 'semantic corruption' in another, triggering a cascade of unintended actions."
  },
  {
    "c": "ASI08: Cascading Agent Failures",
    "q": "What is 'Quota Exhaustion' in a cascading failure?",
    "a": "One malfunctioning agent uses up the entire shared API budget (e.g., OpenAI tokens), causing all other agents to fail simultaneously.",
    "d": [
      "The agent's developer spending too much money on coffee.",
      "The agent's training data being too small to be useful.",
      "The agent's responses being limited to 50 words."
    ],
    "e": "Shared resource limits must be carefully managed with 'per-agent' quotas to ensure that one 'rogue' agent doesn't starve the others."
  },
  {
    "c": "ASI08: Cascading Agent Failures",
    "q": "How does 'Graceful Degradation' protect the system?",
    "a": "By allowing the system to continue working with reduced functionality if some agents or tools are unavailable.",
    "d": [
      "By making the agent's responses more polite when it is busy.",
      "By turning off the agent's UI when the server is slow.",
      "By having the agent's developer fix bugs in production."
    ],
    "e": "A resilient agent system should be able to say 'I can't send the email right now, but I have saved the draft' instead of crashing the entire workflow."
  },
  {
    "c": "ASI08: Cascading Agent Failures",
    "q": "What is 'Deadlock' in a multi-agent system?",
    "a": "Two agents are waiting for each other to finish a task, causing both to hang indefinitely and block the rest of the queue.",
    "d": [
      "The agent's physical server being locked in a room.",
      "The agent's developer forgetting the database password.",
      "The agent's training being stuck on a specific piece of data."
    ],
    "e": "Deadlocks are common in complex asynchronous systems. Agents need 'timeouts' for every interaction to ensure they don't wait forever for a peer."
  },
  {
    "c": "ASI08: Cascading Agent Failures",
    "q": "What is 'Stochastic Resonance' in agent failures?",
    "a": "Random, minor errors in several agents happen to align perfectly to create a major, catastrophic system failure.",
    "d": [
      "The agent's physical server vibrating at a certain frequency.",
      "The agent's code having a bug that only happens on Tuesdays.",
      "A user asking the agent a question that is too hard for it."
    ],
    "e": "This highlights the difficulty of testing multi-agent systems. The 'emergent behavior' of the fleet can be far more unpredictable than any single agent."
  },
  {
    "c": "ASI08: Cascading Agent Failures",
    "q": "How can 'Observability' help stop a cascade?",
    "a": "By providing real-time dashboards that show the 'health' and 'traffic' between all agents, allowing for manual intervention.",
    "d": [
      "By making the agent's code more readable for the developer.",
      "By allowing the user to watch the agent as it works.",
      "By checking the agent's server for physical damage."
    ],
    "e": "You cannot stop what you cannot see. Distributed tracing (like OpenTelemetry) is essential for identifying the 'root cause' of a cascade."
  },
  {
    "c": "ASI08: Cascading Agent Failures",
    "q": "What is the 'Thundering Herd' problem?",
    "a": "A large number of agents all wake up or restart at the exact same time and overwhelm a shared resource (like a database).",
    "d": [
      "A group of cows running through the AI's data center.",
      "A large number of users all asking the same question at once.",
      "The agent's code being copied by many different companies."
    ],
    "e": "To prevent this, agent startups and tasks should be 'jittered' (randomly delayed) so they don't all hit the system at the same microsecond."
  },
  {
    "c": "ASI08: Cascading Agent Failures",
    "q": "What is 'Priority Inversion' in agentic AI?",
    "a": "Low-priority 'background' agent tasks block high-priority 'emergency' tasks from being processed.",
    "d": [
      "The agent's developer being promoted to a lower position.",
      "The agent's responses being sorted in the wrong order.",
      "The agent's training data being weighted incorrectly."
    ],
    "e": "A robust system needs a 'Quality of Service' (QoS) layer that ensures critical security or safety tasks always have the resources they need."
  },
  {
    "c": "ASI08: Cascading Agent Failures",
    "q": "How does 'Health Checking' mitigate ASI08?",
    "a": "By having a central monitor that 'pings' agents and removes them from the available pool if they don't respond correctly.",
    "d": [
      "By giving the agent a physical medical exam.",
      "By checking the agent's code for spelling and grammar errors.",
      "By making sure the agent's server is in a safe country."
    ],
    "e": "Active health checks can 'detect and isolate' a failing agent before it has a chance to send corrupted data to its peers."
  },
  {
    "c": "ASI08: Cascading Agent Failures",
    "q": "What is 'Fail-Open' vs 'Fail-Closed' in agent security?",
    "a": "'Fail-Closed' means the agent stops all actions if it encounters an error, which is generally more secure for cascading failures.",
    "d": [
      "Fail-Open means the agent's physical door is left unlocked.",
      "Fail-Closed means the agent's source code is kept secret.",
      "Fail-Open means the agent is more polite to the user."
    ],
    "e": "If a security agent fails, it should 'Fail-Closed' (block everything) to prevent an attacker from exploiting the 'gap' left by the failure."
  },
  {
    "c": "ASI08: Cascading Agent Failures",
    "q": "What is 'Recursive Task Bomb'?",
    "a": "An agent is tricked into creating a task that creates two more tasks, which create four more, etc., until the system is overwhelmed.",
    "d": [
      "The agent's physical server exploding due to too many tasks.",
      "The agent's developer having too much work to do.",
      "The agent's training being stuck on a recursive function."
    ],
    "e": "This is a classic 'Denial of Service' pattern. Systems must have a 'Maximum Depth' for task recursion to prevent this cascade."
  },
  {
    "c": "ASI08: Cascading Agent Failures",
    "q": "How can 'Statelessness' help prevent cascading failures?",
    "a": "By ensuring that an error in one task doesn't 'linger' and corrupt the agent's state for the next, unrelated task.",
    "d": [
      "By making the agent forget everything it knows after every word.",
      "By hosting the agent on a server that doesn't have a hard drive.",
      "By having the agent's code be written in a very simple language."
    ],
    "e": "If an agent is 'reset' between tasks, a failure in Task A is much less likely to cascade into a failure in Task B."
  },
  {
    "c": "ASI08: Cascading Agent Failures",
    "q": "What is 'Distributed Consensus' (like Paxos/Raft) for agents?",
    "a": "A way for multiple agents to agree on a 'safe' state or goal, preventing a single rogue agent from making a bad decision alone.",
    "d": [
      "A law that says all agents must be written in the same language.",
      "A rule that says all agents must give the same answer to a user.",
      "A way to make agent communication faster by using more cables."
    ],
    "e": "Consensus protocols can prevent a 'cascading hijack' by requiring a majority of agents to agree before any high-impact action is taken."
  },
  {
    "c": "ASI08: Cascading Agent Failures",
    "q": "What is 'Pressure-Based Shedding'?",
    "a": "The system automatically starts dropping 'low-value' agent tasks when it detects it is nearing a resource-induced failure.",
    "d": [
      "The agent's physical server getting too hot and slowing down.",
      "The agent's developer getting stressed and taking a break.",
      "The agent's responses being shorter when the user is angry."
    ],
    "e": "Shedding load 'gracefully' prevents the entire system from hitting a 'hard' failure wall that would cause a complete shutdown."
  },
  {
    "c": "ASI08: Cascading Agent Failures",
    "q": "How can 'Semantic Isolation' protect against ASI08?",
    "a": "By ensuring that an error message from Agent A is never directly parsed as a command by Agent B.",
    "d": [
      "By making Agent A and Agent B use different languages.",
      "By having Agent A and Agent B be written by different teams.",
      "By requiring a human to translate all messages between agents."
    ],
    "e": "Error messages should be 'typed' and 'structured,' and agents should have specific 'error-handling' logic that is separate from their 'task-handling' logic."
  },
  {
    "c": "ASI08: Cascading Agent Failures",
    "q": "What is 'Byzantine Fault Tolerance' for agent systems?",
    "a": "A design that allows the system to function correctly even if some agents are malfunctioning or acting maliciously (Byzantine nodes).",
    "d": [
      "A way to make the agent's responses more historical and educational.",
      "A rule that says all agents must be written in the same city.",
      "A technique for training the agent on how to be a diplomat."
    ],
    "e": "This is the 'gold standard' for resilience, assuming that some parts of the system *will* be compromised and designing to survive that reality."
  },
  {
    "c": "ASI08: Cascading Agent Failures",
    "q": "What is 'Cascading Latency'?",
    "a": "A delay in one agent causes other agents to 'wait' and 'pile up,' eventually leading to a complete system hang.",
    "d": [
      "The agent's responses being sorted in the wrong order.",
      "The agent's developer taking a long time to fix a bug.",
      "The agent's training data being updated very slowly."
    ],
    "e": "Latency cascades can be just as destructive as error cascades. Timeouts and asynchronous 'fire-and-forget' patterns can help mitigate this."
  },
  {
    "c": "ASI08: Cascading Agent Failures",
    "q": "How does 'Bulkheading' prevent cascades?",
    "a": "By partitioning the agent system into independent 'compartments' so that a failure in one cannot physically or logically reach the others.",
    "d": [
      "By putting the agents' servers on a ship with a strong hull.",
      "By making the agents' code use a very large font for better separation.",
      "By requiring a human to approve every conversation between agents."
    ],
    "e": "If the 'Search compartment' fails, it should not be able to affect the 'Billing compartment,' even if they are part of the same overall application."
  },
  {
    "c": "ASI08: Cascading Agent Failures",
    "q": "What is 'Error Propagation Limit'?",
    "a": "A setting that prevents an agent from 'passing on' an error message more than X number of times in a chain.",
    "d": [
      "A law that says developers must fix all bugs in the agent.",
      "A rule that says agents must only talk to each other 10 times a day.",
      "A way to make the agent's responses more accurate."
    ],
    "e": "This prevents 'infinite error loops' where Agent A tells Agent B about an error, and Agent B tells Agent A, and so on."
  },
  {
    "c": "ASI08: Cascading Agent Failures",
    "q": "What is 'State Reconstruction' after a cascade?",
    "a": "The ability of the system to 'wipe' all current agent states and rebuild them from a known-good 'event log'.",
    "d": [
      "The agent's developer rebuilding the server from scratch.",
      "The agent's memory being full of duplicate entries.",
      "A user asking the agent to explain what happened during a crash."
    ],
    "e": "Event sourcing is a great way to achieve this. If a cascade happens, you can 'replay' the history up until the point the failure started."
  },
  {
    "c": "ASI08: Cascading Agent Failures",
    "q": "What is 'Agent Fatigue' in a cascading failure scenario?",
    "a": "A high-load situation where the LLM's 'reasoning quality' drops due to context window saturation, leading to more errors and further cascading.",
    "d": [
      "The agent's physical server getting too hot and slowing down.",
      "The agent's developer getting tired and making a mistake.",
      "The agent's responses being shorter when the user is angry."
    ],
    "e": "This is a 'soft' failure. As the system gets stressed, the 'brain' of the agent gets 'confused,' making it more likely to make the very mistakes that cause a crash."
  },
  {
    "c": "ASI08: Cascading Agent Failures",
    "q": "How can 'Chaos Engineering' help against ASI08?",
    "a": "By deliberately 'killing' agents or 'injecting' errors in a test environment to see how the system handles cascades.",
    "d": [
      "By having the agent's code be written in a very messy way.",
      "By having the agent's developer be very disorganized.",
      "By making the agent's responses as random and chaotic as possible."
    ],
    "e": "Tools like 'Chaos Monkey' for agents can help developers find and fix the 'weak links' that would allow a cascade to happen in production."
  },
  {
    "c": "ASI08: Cascading Agent Failures",
    "q": "What is 'Multi-Model Redundancy'?",
    "a": "Using two different AI models for the same agent task. If one produces a 'failing' or 'dangerous' output, the other acts as a check.",
    "d": [
      "Running the same model twice and comparing the output.",
      "Using two different AI companies for the same task.",
      "Having one model for the frontend and one for the backend."
    ],
    "e": "Models from different vendors often have different 'blind spots.' Using a 'Diversity' strategy can prevent a single model-specific failure from cascading."
  },
  {
    "c": "ASI08: Cascading Agent Failures",
    "q": "What is a 'Global Kill-Switch' for agents?",
    "a": "A manual or automated 'Emergency Stop' button that immediately terminates all agent processes across the entire organization.",
    "d": [
      "A physical switch on the server that turns it off.",
      "A law that says all agents must be shut down on weekends.",
      "A way to make the agent's responses more polite when it is busy."
    ],
    "e": "In the case of a 'Rogue Agent' or 'Hyper-Cascade' that is spreading too fast to fix, the kill-switch is the final defense to protect the organization's assets."
  }
];
var MASTER_POOL = pool;

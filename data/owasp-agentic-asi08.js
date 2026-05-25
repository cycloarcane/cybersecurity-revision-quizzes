const pool = [
    {
        "c": "ASI08: Cascading Failures",
        "q": "What is the primary characteristic of a 'Cascading Failure' in an agentic system?",
        "a": "A failure in one agent or component triggers a series of subsequent failures across the entire system.",
        "d": [
            "The agent's server shutting down due to a scheduled maintenance window.",
            "A single agent failing to answer a user's question correctly.",
            "The model's weights being updated to a newer version."
        ],
        "e": "Cascading failures are systemic. In a multi-agent environment, the output of one agent is the input of another. If the first agent produces garbage or crashes, it can 'poison' the entire pipeline, leading to a total system collapse."
    },
    {
        "c": "ASI08: Cascading Failures",
        "q": "What is an 'Agentic Loop' and why is it a risk for ASI08?",
        "a": "A situation where two or more agents keep passing the same task back and forth without finishing it, exhausting resources.",
        "d": [
            "A special type of neural network architecture used for vision.",
            "The process of a model being retrained on the same data twice.",
            "A way to make the agent's code run more efficiently."
        ],
        "e": "Agentic loops are like infinite loops in traditional code but occur at the reasoning level. They can consume massive amounts of API credits, CPU, and memory before they are detected."
    },
    {
        "c": "ASI08: Cascading Failures",
        "q": "How does a 'Circuit Breaker' help mitigate ASI08?",
        "a": "It automatically halts communication or task execution when a failure threshold is reached, preventing the failure from spreading.",
        "d": [
            "It is a physical fuse that pops if the server uses too much electricity.",
            "It is a safety filter that blocks the user from asking about sensitive topics.",
            "It is a backup model that takes over if the primary model is too slow."
        ],
        "e": "Circuit breakers are a classic distributed systems pattern. In agentic systems, they stop 'runaway' agents or failing sub-systems from dragging down the rest of the application."
    },
    {
        "c": "ASI08: Cascading Failures",
        "q": "What is 'Error Propagation' in multi-agent systems?",
        "a": "A small error in an early agent's output is amplified by subsequent agents, leading to a catastrophic final failure.",
        "d": [
            "The process of sending bug reports to the development team.",
            "The agent's ability to fix its own mistakes over time.",
            "The user receiving multiple error messages at the same time."
        ],
        "e": "Because agents often 'reason' based on previous outputs, a 'hallucination' or 'logic error' in step 1 becomes the 'fact' that step 2 and step 3 use to make even more dangerous decisions."
    },
    {
        "c": "ASI08: Cascading Failures",
        "q": "What is a 'Resource Exhaustion' cascade?",
        "a": "A failure in one agent causes others to enter retry loops that consume all available API tokens or memory.",
        "d": [
            "The agent's developer running out of coffee.",
            "The user's laptop running out of battery while chatting.",
            "The system's database being deleted by an attacker."
        ],
        "e": "If Agent B is programmed to 'retry until success' and Agent A is permanently broken, Agent B will burn through resources indefinitely. In a swarm of 100 agents, this can lead to massive financial and operational costs."
    },
    {
        "c": "ASI08: Cascading Failures",
        "q": "Which of these is a 'State Collapse' in the context of ASI08?",
        "a": "The shared 'memory' or 'state' of the system becomes corrupted by a failing agent, making all other agents dysfunctional.",
        "d": [
            "The agent's server being physically moved to a different country.",
            "The model's context window being reduced in size.",
            "The user closing their browser tab in the middle of a task."
        ],
        "e": "In systems with a shared blackboard or state, a single 'rogue' or 'glitched' write can invalidate the assumptions of every other agent, causing the entire collective reasoning process to fail."
    },
    {
        "c": "ASI08: Cascading Failures",
        "q": "What is 'Retry Storm' in agentic architectures?",
        "a": "A massive surge in API requests caused by many agents simultaneously retrying failed dependencies.",
        "d": [
            "A weather simulation performed by a specialized weather agent.",
            "An attacker trying to guess the user's password many times.",
            "A bug that causes the agent to repeat its last sentence."
        ],
        "e": "Retry storms occur when a backend service goes down. Instead of failing gracefully, all agents start retrying at once, which can act as a self-inflicted Distributed Denial of Service (DDoS) attack."
    },
    {
        "c": "ASI08: Cascading Failures",
        "q": "How does 'Dead Letter Queueing' apply to ASI08?",
        "a": "It captures messages that agents cannot process, preventing them from being retried indefinitely or causing a crash.",
        "d": [
            "A way to delete all emails sent by the agent.",
            "A list of users who have been banned from using the system.",
            "A backup server that is only used if the main server dies."
        ],
        "e": "By moving 'poison' messages (messages that cause an agent to fail) to a separate queue, you allow the rest of the system to continue functioning while the failure is investigated."
    },
    {
        "c": "ASI08: Cascading Failures",
        "q": "What is the risk of 'Homogeneous Agent Swarms' in ASI08?",
        "a": "If all agents use the same model, a single logic flaw or 'jailbreak' will affect every agent in the system simultaneously.",
        "d": [
            "Agents that are too similar in their personalities.",
            "Agents that all use the same programming language.",
            "A swarm where all agents are owned by the same company."
        ],
        "e": "Diversity is a security feature. If you use different models (e.g., GPT-4, Claude, and Llama) for different tasks, a specific 'poison' prompt that works on one might not work on the others, preventing a total cascade."
    },
    {
        "c": "ASI08: Cascading Failures",
        "q": "What is 'Priority Inversion' in an agentic system?",
        "a": "A low-priority background task consumes so many resources that it prevents a high-priority safety agent from functioning.",
        "d": [
            "The agent's list of tasks being sorted in the wrong order.",
            "A user being able to change the priority of their own requests.",
            "An agent giving a lower priority to its own safety rules."
        ],
        "e": "If your 'Safety Monitor' agent is stuck behind a 'PDF Summarizer' agent in a single-threaded queue, the system is vulnerable to a cascade where the summarizer fails and the monitor cannot intervene in time."
    },
    {
        "c": "ASI08: Cascading Failures",
        "q": "How does 'Backpressure' help prevent cascading failures?",
        "a": "It signals upstream agents to slow down when downstream agents are overwhelmed, preventing a total system crash.",
        "d": [
            "A physical fan that blows air onto the server to keep it cool.",
            "The agent's ability to resist pressure from a malicious user.",
            "A way to force the model to give a shorter answer."
        ],
        "e": "Backpressure is essential for stability. If Agent A is generating 1000 tasks per second but Agent B can only process 10, the system will eventually run out of memory and fail without a backpressure mechanism."
    },
    {
        "c": "ASI08: Cascading Failures",
        "q": "What is 'Hallucination Feedback' in ASI08?",
        "a": "An agent generates a hallucination that is accepted as true by a second agent, which then generates further hallucinations based on it.",
        "d": [
            "The user seeing things that aren't actually on the screen.",
            "A model being trained on a dataset of fictional stories.",
            "The agent's output being shown in a VR headset."
        ],
        "e": "This is a 'Truth Cascade.' Once a false premise enters the multi-agent chain, the 'reasoning' of every subsequent agent amplifies the error, potentially leading to a dangerous real-world action based on a complete fabrication."
    },
    {
        "c": "ASI08: Cascading Failures",
        "q": "What is the 'Fail-Fast' principle in agentic design?",
        "a": "Designing agents to immediately stop and report an error rather than attempting to continue with uncertain or corrupted data.",
        "d": [
            "The agent's response time being as fast as possible.",
            "The model being able to process tokens very quickly.",
            "The developer writing the code for the agent in one day."
        ],
        "e": "Failing fast prevents cascades. It is much safer for a system to say 'I encountered an error in step 1' than to try to 'guess' the answer and proceed to a potentially catastrophic step 10."
    },
    {
        "c": "ASI08: Cascading Failures",
        "q": "What is 'Token Exhaustion' as a cascading failure?",
        "a": "A group of agents rapidly consumes the entire project's token budget due to a recursive or inefficient planning loop.",
        "d": [
            "The model running out of words it can use in a sentence.",
            "The user's credit card being declined by the API provider.",
            "A bug that causes the agent to output the same word 'token' over and over."
        ],
        "e": "Token exhaustion is a financial cascading failure. An unmonitored agent swarm can spend thousands of dollars in minutes if it gets caught in a loop or encounters a 'infinite context' bug."
    },
    {
        "c": "ASI08: Cascading Failures",
        "q": "What is 'Plan Fragmentation' in ASI08?",
        "a": "The master plan becomes so complex that agents start executing conflicting sub-tasks, leading to system-wide deadlock.",
        "d": [
            "Breaking a large task into smaller, more manageable pieces.",
            "The agent's code being split across several different files.",
            "A user having multiple different plans for the agent."
        ],
        "e": "Fragmentation occurs when agents lose 'global coherence.' Agent A might be trying to 'Open the Door' while Agent B is simultaneously trying to 'Lock the Door,' causing a failure cascade in the physical or logical world they are controlling."
    },
    {
        "c": "ASI08: Cascading Failures",
        "q": "Why is 'Asynchronous Communication' a risk for Cascading Failures?",
        "a": "It makes it difficult to track the current state and can lead to 'Race Conditions' where agents act on stale information.",
        "d": [
            "It is always slower than synchronous communication.",
            "It requires the agents to be on different continents.",
            "It prevents the use of encryption between agents."
        ],
        "e": "If Agent A sends an 'Abort' message but Agent B has already started the task due to network lag, the system enters an inconsistent and potentially dangerous state that can cascade into further errors."
    },
    {
        "c": "ASI08: Cascading Failures",
        "q": "What is a 'Consensus Failure'?",
        "a": "Agents in a swarm cannot agree on a course of action, causing the system to stall or enter a 'Flapping' state (repeatedly switching between decisions).",
        "d": [
            "The user not liking the agent's answer.",
            "The developer and the user disagreeing on the agent's goal.",
            "A model failing to generate a response that is grammatically correct."
        ],
        "e": "In democratic agent systems (where multiple agents vote on a plan), a tie or a 'split-brain' scenario can lead to a cascade where the system stops responding to the user entirely."
    },
    {
        "c": "ASI08: Cascading Failures",
        "q": "How does 'Rate Limiting' mitigate ASI08?",
        "a": "It prevents any single agent or user from overwhelming the system with too many requests, limiting the 'blast radius' of a failure.",
        "d": [
            "It makes the agent's output more polite.",
            "It limits the number of words the agent can use in a response.",
            "It ensures that the agent is always paid for its work."
        ],
        "e": "Rate limiting at the agent-to-agent level is a key defense. It ensures that even if one agent goes 'rogue' or gets stuck in a loop, it can't take down the entire multi-agent orchestrator."
    },
    {
        "c": "ASI08: Cascading Failures",
        "q": "What is 'Dependency Hell' in agentic systems?",
        "a": "A chain of agents where each one requires the output of the previous, making the entire system only as reliable as its weakest link.",
        "d": [
            "A server that is running an old version of Linux.",
            "An agent that is very difficult to talk to.",
            "The developer having too many projects to work on."
        ],
        "e": "In a linear dependency chain, if Agent 3 of 10 fails, agents 4-10 are useless. This 'Fragility' is a core concern of ASI08, as it leads to frequent and unpredictable system-wide outages."
    },
    {
        "c": "ASI08: Cascading Failures",
        "q": "What is 'Metastable Failure' in an agentic context?",
        "a": "A state where a temporary failure (like a network glitch) causes the system to enter a permanent state of high-load dysfunction even after the glitch is fixed.",
        "d": [
            "A failure that only happens when the agent is using a specific model.",
            "An agent that crashes and then immediately restarts.",
            "A bug that is very difficult for the developer to find."
        ],
        "e": "Metastability is dangerous. For example, a 1-second API outage might cause agents to queue up so many tasks that the system remains at 100% CPU forever, even when the API is back online."
    },
    {
        "c": "ASI08: Cascading Failures",
        "q": "How can 'Chaos Engineering' be used to prevent ASI08?",
        "a": "By intentionally injecting failures (killing agents, delaying messages) to test the system's resilience and recovery mechanisms.",
        "d": [
            "By making the agent's code as messy as possible to confuse attackers.",
            "By asking the user to try and break the agent.",
            "By using a random number generator for all agent decisions."
        ],
        "e": "Chaos engineering (like Netflix's Chaos Monkey) helps identify 'hidden' cascades before they happen in production, ensuring that the system can handle the loss of any single agent without total failure."
    },
    {
        "c": "ASI08: Cascading Failures",
        "q": "What is 'Reasoning Exhaustion'?",
        "a": "The agent enters such a complex multi-step reasoning path that it hits internal timeouts or context limits, failing mid-task.",
        "d": [
            "The model becoming too tired to think after being used all day.",
            "The user becoming confused by the agent's complex answers.",
            "The developer running out of ideas for new agent features."
        ],
        "e": "Reasoning exhaustion occurs when an agent's plan 'explodes' in complexity. If the orchestrator doesn't prune these plans, the agent will eventually fail, potentially leaving resources (like database locks) in an inconsistent state."
    },
    {
        "c": "ASI08: Cascading Failures",
        "q": "What is 'Zombie Agent' syndrome?",
        "a": "An agent that has failed or been disconnected but continues to send stale or erroneous data into the system.",
        "d": [
            "An agent that talks about horror movies all the time.",
            "A model that is used to generate images of monsters.",
            "An agent that cannot be deleted from the database."
        ],
        "e": "Zombie agents can cause 'Ghost Cascades.' Because they are partially alive, they bypass simple 'is-alive' health checks while still poisoning the communication channels with invalid data."
    },
    {
        "c": "ASI08: Cascading Failures",
        "q": "Why is 'Lack of Observability' a risk factor for ASI08?",
        "a": "Without detailed logs and metrics, it is impossible to identify the root cause of a cascade until the entire system is down.",
        "d": [
            "It prevents the user from seeing the agent's face.",
            "It makes the agent's code harder to read for the developer.",
            "It allows the agent to work in secret without anyone knowing."
        ],
        "e": "Observability (Tracing, Logging, Metrics) is the 'MRI' for cascades. If you can see that Agent A's latency is spiking, you can proactively isolate it before it triggers a system-wide failure."
    },
    {
        "c": "ASI08: Cascading Failures",
        "q": "What is a 'Cascading Timeout'?",
        "a": "Agent A waits for Agent B, which waits for Agent C, until the original request from the user times out at the gateway level.",
        "d": [
            "A failure in the system's internal clock.",
            "The agent taking a break after working for an hour.",
            "A user setting a very short timer for a task."
        ],
        "e": "This is a classic 'Long-Chain' failure. Every step in an agentic workflow adds latency. If the chain is too long, the 'tail latency' will eventually exceed the system's global timeout, causing a failure even if every individual agent is 'healthy'."
    },
    {
        "c": "ASI08: Cascading Failures",
        "q": "What is 'Jitter' and how does it help prevent ASI08?",
        "a": "Adding random delays to retries to prevent many agents from 'syncing up' and hitting a server at the exact same moment.",
        "d": [
            "A type of coffee that the developers drink to stay awake.",
            "Small vibrations in the physical server hardware.",
            "The agent's text appearing to shake on the screen."
        ],
        "e": "Jitter breaks the 'Thundering Herd' problem. By staggering retries, you ensure that a recovering system isn't immediately knocked back down by a synchronized wave of agent requests."
    },
    {
        "c": "ASI08: Cascading Failures",
        "q": "What is 'Recursive Self-Modification' risk in ASI08?",
        "a": "An agent that can change its own code or prompt might introduce a bug that triggers a catastrophic and irreversible failure loop.",
        "d": [
            "An agent that can change its own profile picture.",
            "A model that can rewrite its own training data.",
            "An agent that can choose which model it wants to use."
        ],
        "e": "This is the 'God-Mode' cascade. If an agent has the permission to modify the logic of the system, a single reasoning error can lead to a state where the system 'evolves' into a completely broken and unfixable state."
    },
    {
        "c": "ASI08: Cascading Failures",
        "q": "What is 'Orphaned Task' accumulation?",
        "a": "A failure in a manager agent leaves dozens of worker agents running tasks whose results will never be used, wasting resources.",
        "d": [
            "Tasks that were created by a user who has since deleted their account.",
            "A task that has no clear goal or objective.",
            "A bug that causes the agent to forget what it was doing."
        ],
        "e": "Orphaned tasks are a 'Silent Cascade.' They don't crash the system immediately, but they slowly drain resources (cost, CPU) until the system becomes sluggish or eventually fails due to 'Resource Exhaustion'."
    },
    {
        "c": "ASI08: Cascading Failures",
        "q": "What is 'Semantic Deadlock'?",
        "a": "Two agents are stuck waiting for each other to clarify an ambiguous instruction, neither being able to proceed.",
        "d": [
            "A failure in the system's dictionary service.",
            "An agent that is unable to understand any language other than English.",
            "A user and an agent having a disagreement about a fact."
        ],
        "e": "Semantic deadlock is a logic-level failure. Unlike a traditional deadlock (which is about locks), this is about 'meaning.' Without a 'Tie-Breaker' agent or human intervention, the workflow stays stuck forever."
    },
    {
        "c": "ASI08: Cascading Failures",
        "q": "What is the 'Global Shutdown' trigger in ASI08 mitigation?",
        "a": "A manual or automatic 'kill switch' that immediately terminates all active agent processes when a critical cascade is detected.",
        "d": [
            "The power button on the front of the server.",
            "A command that the user can type to stop the agent.",
            "A safety filter that blocks the agent from saying 'goodbye'."
        ],
        "e": "In a severe cascade (like a financial loop or an infinite tool-use loop), a 'Kill Switch' is the only way to prevent massive damage. It is a fundamental safety requirement for autonomous multi-agent systems."
    }
];
const MASTER_POOL = pool;

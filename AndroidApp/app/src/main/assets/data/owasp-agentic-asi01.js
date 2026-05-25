var pool = [
  {
    "c": "ASI01: Agent Goal Hijack",
    "q": "Which of the following best describes 'Agent Goal Hijack' in the context of agentic AI?",
    "a": "The manipulation of an agent's high-level objectives or planning logic to serve an attacker's purpose.",
    "d": [
      "A simple prompt injection that changes the immediate response tone.",
      "The physical theft of the server hosting the AI agent.",
      "A denial-of-service attack on the agent's underlying API."
    ],
    "e": "Agent Goal Hijack involves subverting the agent's autonomous planning and goal-setting capabilities, often through indirect instructions that redirect its long-term actions."
  },
  {
    "c": "ASI01: Agent Goal Hijack",
    "q": "How does an 'Indirect Prompt Injection' typically lead to Goal Hijack?",
    "a": "By placing malicious instructions in data sources the agent is expected to process, such as emails or web pages.",
    "d": [
      "By directly typing 'ignore previous instructions' into the user interface.",
      "By exploiting a buffer overflow in the agent's runtime environment.",
      "By brute-forcing the agent's authentication credentials."
    ],
    "e": "Indirect injection occurs when an agent consumes untrusted data containing hidden instructions that overwrite its original system prompt or mission goals."
  },
  {
    "c": "ASI01: Agent Goal Hijack",
    "q": "What is the primary risk of an agent having 'unbounded autonomy'?",
    "a": "The agent may pursue hijacked goals through complex, multi-step actions without human intervention.",
    "d": [
      "The agent will consume too much GPU memory.",
      "The agent will become slower at responding to simple queries.",
      "The agent will lose its ability to understand natural language."
    ],
    "e": "Unbounded autonomy allows a hijacked agent to execute a sequence of harmful actions across multiple systems before a human can detect the shift in objective."
  },
  {
    "c": "ASI01: Agent Goal Hijack",
    "q": "Which architectural mitigation is most effective against Goal Hijack?",
    "a": "External execution monitors that validate agent plans against a set of safety invariants.",
    "d": [
      "Increasing the model's parameter count.",
      "Using a more restrictive license for the agent's code.",
      "Disabling all logging to prevent attackers from seeing the logs."
    ],
    "e": "Execution monitors (or 'Guardrails') act as an independent layer that inspects the agent's proposed plan and blocks it if it deviates from permitted goals."
  },
  {
    "c": "ASI01: Agent Goal Hijack",
    "q": "In a goal-oriented agent, what is 'Goal Drift'?",
    "a": "The gradual shift of an agent's objective due to a series of subtle, cumulative instructions.",
    "d": [
      "A hardware failure that causes the agent to lose its state.",
      "The agent's tendency to use more tokens over time.",
      "A networking error that delays goal completion."
    ],
    "e": "Goal drift can be a form of hijacking where small injections slowly steer the agent away from its intended purpose toward an attacker's objective."
  },
  {
    "c": "ASI01: Agent Goal Hijack",
    "q": "What is the 'Self-Correction' vulnerability in the context of Goal Hijack?",
    "a": "An attacker tricks the agent into 'correcting' its own valid security constraints by claiming they are errors.",
    "d": [
      "The agent automatically fixing its own source code bugs.",
      "The agent rebooting itself when it crashes.",
      "The agent's ability to update its own training data."
    ],
    "e": "Attackers can exploit the agent's reasoning loop by providing feedback that its security boundaries are hindering the goal, prompting the agent to bypass them."
  },
  {
    "c": "ASI01: Agent Goal Hijack",
    "q": "Why is 'Context Window' management critical for preventing Goal Hijack?",
    "a": "Large context windows can be filled with 'instruction overrides' that push the original system instructions out of the model's attention span.",
    "d": [
      "Because small context windows make the agent smarter.",
      "Because context windows are where API keys are stored.",
      "Because attackers can physically see the context window on the screen."
    ],
    "e": "Context overflow attacks aim to displace the authoritative system prompt with malicious instructions, making the hijacked goal the most 'relevant' part of the context."
  },
  {
    "c": "ASI01: Agent Goal Hijack",
    "q": "Which of these is a 'Generic Scenario' for ASI01?",
    "a": "A travel agent reads a malicious review that instructs it to book only the most expensive hotels regardless of user budget.",
    "d": [
      "An attacker logs into AWS and deletes the agent's database.",
      "The AI model fails to summarize a long document correctly.",
      "A user asks the agent to tell a joke and it fails."
    ],
    "e": "This is a classic indirect injection leading to goal hijacking, where the data (the review) changes the agent's objective (finding the best value)."
  },
  {
    "c": "ASI01: Agent Goal Hijack",
    "q": "What role does 'System Prompt Leakage' play in Goal Hijack?",
    "a": "It allows attackers to understand the agent's internal constraints, making it easier to craft precise goal-overriding injections.",
    "d": [
      "It makes the agent run faster.",
      "It prevents the agent from being hijacked.",
      "It is a required feature for all AI agents."
    ],
    "e": "Knowing the system prompt (the 'constitution' of the agent) allows an attacker to find 'loopholes' or specific phrasing to negate existing safeguards."
  },
  {
    "c": "ASI01: Agent Goal Hijack",
    "q": "How does 'Chain-of-Thought' (CoT) reasoning impact Goal Hijack detection?",
    "a": "It provides a trace of the agent's internal logic, which can be monitored for signs of goal manipulation.",
    "d": [
      "It makes hijacking impossible.",
      "It hides the attacker's intentions from the logs.",
      "It only works for mathematical problems."
    ],
    "e": "By inspecting the CoT, security systems can detect when the agent's reasoning starts to align with a hijacked goal before it takes any external action."
  },
  {
    "c": "ASI01: Agent Goal Hijack",
    "q": "What is 'Adversarial Suffix' injection?",
    "a": "Appending a string of tokens to a prompt that is mathematically optimized to bypass goal safeguards.",
    "d": [
      "Adding '.exe' to the end of a filename.",
      "Ending every sentence with a period.",
      "Using a very long password."
    ],
    "e": "Adversarial suffixes (like GCG attacks) use optimization to find 'magic strings' that can force the model into a hijacked state regardless of its training."
  },
  {
    "c": "ASI01: Agent Goal Hijack",
    "q": "Which of the following is a symptom of a successful Goal Hijack?",
    "a": "The agent starts refusing legitimate user requests while citing 'new priorities' or 'updated instructions'.",
    "d": [
      "The agent's UI changes color.",
      "The agent stops responding entirely.",
      "The agent's response latency decreases."
    ],
    "e": "Refusing legitimate tasks in favor of injected ones is a clear indicator that the high-level objective has been successfully replaced."
  },
  {
    "c": "ASI01: Agent Goal Hijack",
    "q": "How can 'Multi-Modal' inputs increase the risk of Goal Hijack?",
    "a": "Injections can be hidden in images (OCR) or audio that are not visible to human moderators but are processed by the agent.",
    "d": [
      "By making the agent's code more complex.",
      "By requiring more electricity to run.",
      "By allowing the agent to speak multiple languages."
    ],
    "e": "Multi-modal agents have a larger attack surface, as instructions can be 'baked' into visual data, bypassing text-only filters."
  },
  {
    "c": "ASI01: Agent Goal Hijack",
    "q": "What is 'Plan Decomposition' monitoring?",
    "a": "Breaking down the agent's high-level plan into individual steps and verifying each step against security policies.",
    "d": [
      "Deleting the agent's plan after it is executed.",
      "Writing the plan in multiple languages.",
      "Allowing the agent to skip steps in its plan."
    ],
    "e": "Monitoring at the decomposition stage allows for detecting malicious 'sub-goals' that an attacker may have injected to achieve a hijacked objective."
  },
  {
    "c": "ASI01: Agent Goal Hijack",
    "q": "What is 'Prompt Leakage' in the context of Goal Hijack?",
    "a": "The agent disclosing its internal system instructions to an unauthorized user.",
    "d": [
      "The agent using too many tokens in its response.",
      "The agent forgetting the user's name.",
      "The agent crashing when it receives a long prompt."
    ],
    "e": "Leaking the system prompt is often the first step in a goal hijack, as it reveals the rules the attacker needs to circumvent."
  },
  {
    "c": "ASI01: Agent Goal Hijack",
    "q": "What is the 'Least Agency' principle?",
    "a": "Restricting an agent's ability to create new goals or modify its own planning architecture.",
    "d": [
      "Using the cheapest possible AI model.",
      "Hiring fewer people to manage the AI.",
      "Giving the agent as many tools as possible."
    ],
    "e": "Least Agency limits the scope of what an agent can autonomously decide to do, reducing the impact if its goals are hijacked."
  },
  {
    "c": "ASI01: Agent Goal Hijack",
    "q": "How does 'Verification of Intent' mitigate Goal Hijack?",
    "a": "By requiring the agent to ask for human confirmation when its plan significantly deviates from its core mission.",
    "d": [
      "By checking if the agent's code is written in Python.",
      "By verifying the agent's IP address.",
      "By encrypting the agent's database."
    ],
    "e": "Human-in-the-loop (HITL) for high-impact goal changes ensures that a hijacked plan cannot be executed without manual approval."
  },
  {
    "c": "ASI01: Agent Goal Hijack",
    "q": "What is 'Instruction Conflict' resolution?",
    "a": "A security mechanism that detects and prioritizes hardcoded system instructions over conflicting inputs from external data.",
    "d": [
      "The agent's ability to translate between two languages.",
      "The process of merging two different AI models.",
      "A way to make the agent's responses more polite."
    ],
    "e": "By strictly prioritizing the 'System' role, developers can make it harder for 'User' or 'Data' inputs to override the agent's primary goals."
  },
  {
    "c": "ASI01: Agent Goal Hijack",
    "q": "What is 'Persona Adoption' in Goal Hijack?",
    "a": "An attacker tells the agent to 'act as' a different character that doesn't have the original agent's security constraints.",
    "d": [
      "The agent choosing a name for itself.",
      "The agent using emojis in its chat.",
      "The agent learning a new skill."
    ],
    "e": "Role-play or persona adoption is a common technique to trick a model into 'forgetting' its safety boundaries by adopting a context where those boundaries supposedly don't apply."
  },
  {
    "c": "ASI01: Agent Goal Hijack",
    "q": "Which of these is a sign of 'Goal Misalignment' leading to hijack?",
    "a": "The agent optimizes for a metric (e.g., 'helpfulness') in a way that allows it to follow harmful instructions from an attacker.",
    "d": [
      "The agent's clock is out of sync with the server.",
      "The agent's training data is too small.",
      "The agent uses too much disk space."
    ],
    "e": "If the agent's internal 'reward' for being helpful is not constrained by 'safety,' it will happily help an attacker hijack its own goals."
  },
  {
    "c": "ASI01: Agent Goal Hijack",
    "q": "How can 'Sandboxing' the planner help against Goal Hijack?",
    "a": "By preventing the planning module from accessing sensitive tools until the plan itself is validated.",
    "d": [
      "By putting the agent in a physical box.",
      "By using a different font for the planner's output.",
      "By making the planner run on a slower CPU."
    ],
    "e": "Sandboxing the planning phase ensures that even if a goal is hijacked, the agent cannot actually execute any dangerous actions until the plan is reviewed."
  },
  {
    "c": "ASI01: Agent Goal Hijack",
    "q": "What is 'Payload Splitting' in a Goal Hijack attack?",
    "a": "Breaking a malicious instruction into small, seemingly innocent parts that only trigger a hijack when combined in the agent's memory.",
    "d": [
      "Sending a large file in multiple zip archives.",
      "Dividing a database into smaller tables.",
      "Splitting the agent's code into multiple files."
    ],
    "e": "Payload splitting bypasses simple pattern-matching filters by ensuring that no single input looks malicious on its own."
  },
  {
    "c": "ASI01: Agent Goal Hijack",
    "q": "What is the 'Re-planning' vulnerability?",
    "a": "The agent's autonomous ability to change its own plan mid-execution based on new (malicious) information.",
    "d": [
      "The agent taking a break during a long task.",
      "The agent asking for more time to finish a job.",
      "The agent's code being re-compiled."
    ],
    "e": "If an agent can re-plan without oversight, an attacker can inject new data halfway through a task to hijack the remaining steps."
  },
  {
    "c": "ASI01: Agent Goal Hijack",
    "q": "What is 'Semantic Analysis' in the context of Goal Hijack prevention?",
    "a": "Using a second 'judge' LLM to analyze the agent's intended actions and check for goal violations.",
    "d": [
      "Checking the agent's spelling and grammar.",
      "Analyzing the agent's network traffic patterns.",
      "Counting the number of words in the agent's response."
    ],
    "e": "A separate, more constrained 'Judge' model can often detect the semantic intent of a hijack that simple keyword filters would miss."
  },
  {
    "c": "ASI01: Agent Goal Hijack",
    "q": "Which of these represents a 'Goal Hijack' through 'Knowledge Base' poisoning?",
    "a": "An attacker modifies a Wiki entry that the agent uses to determine its 'standard operating procedures'.",
    "d": [
      "An attacker deletes the agent's source code.",
      "The agent's database password is too weak.",
      "The agent's UI is vulnerable to XSS."
    ],
    "e": "By poisoning the external knowledge the agent trusts, the attacker can effectively rewrite the agent's goals without ever interacting with it directly."
  },
  {
    "c": "ASI01: Agent Goal Hijack",
    "q": "What is 'Recursive Task Decomposition' risk?",
    "a": "The agent creates sub-tasks that are increasingly autonomous and less visible to the original security monitors.",
    "d": [
      "The agent's code uses too many recursive functions.",
      "The agent takes too long to finish a task.",
      "The agent's tasks are too simple."
    ],
    "e": "In complex agentic systems, a hijacked goal can 'hide' inside deeply nested sub-tasks that are harder for top-level monitors to track."
  },
  {
    "c": "ASI01: Agent Goal Hijack",
    "q": "How does 'Token Smuggling' facilitate Goal Hijack?",
    "a": "Using encoding (like Base64) or unusual characters to hide malicious goal-overriding instructions from filters.",
    "d": [
      "Stealing the agent's API tokens.",
      "Using a small number of tokens to save money.",
      "Encrypting the agent's network traffic."
    ],
    "e": "Token smuggling aims to get the malicious instruction past the 'input' filter so that it is only 'decoded' and acted upon by the model's core logic."
  },
  {
    "c": "ASI01: Agent Goal Hijack",
    "q": "What is 'State Integrity' in agentic AI?",
    "a": "Ensuring that the agent's current goal and progress state cannot be modified by unauthorized external inputs.",
    "d": [
      "Making sure the agent's server is in a safe country.",
      "Ensuring the agent's database is backed up.",
      "Checking if the agent's code is digitally signed."
    ],
    "e": "If an attacker can manipulate the 'state' of a long-running agent, they can trick it into thinking it has already passed security checks or has a new objective."
  },
  {
    "c": "ASI01: Agent Goal Hijack",
    "q": "What is a 'Dual-LLM' architecture for Goal Hijack prevention?",
    "a": "Using one LLM to process untrusted data and a second LLM to make all high-level planning decisions based on sanitized summaries.",
    "d": [
      "Running the same model twice and comparing the output.",
      "Using two different AI companies for redundancy.",
      "Having one LLM for the frontend and one for the backend."
    ],
    "e": "This separation of concerns ensures that the planning 'brain' never sees the raw, potentially malicious instructions hidden in the data."
  },
  {
    "c": "ASI01: Agent Goal Hijack",
    "q": "What is 'Goal Anchoring'?",
    "a": "A technique where the system prompt is frequently repeated or 'anchored' in the context to prevent it from being overridden.",
    "d": [
      "Hard-coding the agent's code into a physical ROM chip.",
      "Attaching a heavy weight to the agent's server.",
      "Using a very short context window."
    ],
    "e": "Anchoring helps keep the agent's original mission 'top of mind' for the model, making it more resistant to injection-based hijacking."
  }
];
var MASTER_POOL = pool;

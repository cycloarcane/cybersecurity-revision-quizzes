var pool = [
  {
    "c": "ASI03: Agent Identity & Privilege Abuse",
    "q": "What is the primary risk of 'Agent Identity & Privilege Abuse'?",
    "a": "Agents acting with excessive permissions or mismanaging their own credentials, leading to unauthorized actions.",
    "d": [
      "The agent's name being stolen by another AI.",
      "The agent forgetting its own username.",
      "A user pretending to be the agent to gain access to a website."
    ],
    "e": "ASI03 focuses on the risks that arise when an agent is given too much power (over-privileged) or when it fails to securely handle the secrets it needs to perform tasks."
  },
  {
    "c": "ASI03: Agent Identity & Privilege Abuse",
    "q": "How does the 'Least Privilege' principle apply to AI agents?",
    "a": "An agent should only have the minimum set of permissions necessary to complete its specific, assigned task.",
    "d": [
      "The agent should use as little CPU power as possible.",
      "The agent should be given every possible permission to avoid errors.",
      "The agent should not be allowed to talk to users."
    ],
    "e": "By limiting an agent's permissions, developers reduce the 'blast radius' if the agent is compromised or its goals are hijacked."
  },
  {
    "c": "ASI03: Agent Identity & Privilege Abuse",
    "q": "What is 'Agent-to-User Privilege Escalation'?",
    "a": "The agent performs an action on behalf of a user that the user themselves would not be authorized to perform.",
    "d": [
      "The user giving the agent their password.",
      "The agent becoming smarter than the user.",
      "The agent charging the user's credit card for a service."
    ],
    "e": "This happens when an agent has higher system permissions than the user it is serving, and it fails to verify if the user is allowed to request a specific action."
  },
  {
    "c": "ASI03: Agent Identity & Privilege Abuse",
    "q": "Why is 'Short-Lived Credentials' a best practice for agents?",
    "a": "To minimize the window of opportunity if a token or API key is leaked in the agent's context or logs.",
    "d": [
      "Because short passwords are easier for the AI to remember.",
      "To save money on cloud subscription costs.",
      "Because long-lived credentials cause the AI to hallucinate."
    ],
    "e": "Ephemeral or short-lived tokens ensure that even if an attacker steals a credential from an agent's memory, it will soon become useless."
  },
  {
    "c": "ASI03: Agent Identity & Privilege Abuse",
    "q": "What is 'Credential Leaking in Context'?",
    "a": "The agent inadvertently includes an API key or password in its output to a user or in a public log.",
    "d": [
      "An attacker hacking into the agent's database.",
      "The agent's developer forgetting the database password.",
      "The agent using the wrong credential for a tool call."
    ],
    "e": "Since agents often process and store credentials in their context to use tools, they may accidentally 'speak' these secrets if not properly constrained."
  },
  {
    "c": "ASI03: Agent Identity & Privilege Abuse",
    "q": "What is 'Identity Spoofing' in a multi-agent system?",
    "a": "One agent pretending to be another agent to gain access to restricted data or tools.",
    "d": [
      "An agent changing its profile picture.",
      "A user creating two different agent accounts.",
      "The agent's code being copied by a competitor."
    ],
    "e": "Without strong mutual authentication between agents, a compromised agent can impersonate a high-privilege 'Supervisor' agent to cause harm."
  },
  {
    "c": "ASI03: Agent Identity & Privilege Abuse",
    "q": "Which of these is a 'Generic Scenario' for ASI03?",
    "a": "An HR agent with 'Read All' access to a file share is tricked into summarizing the CEO's private salary spreadsheet for a junior employee.",
    "d": [
      "The agent's server is hit by a lightning strike.",
      "An attacker sends a very long prompt that crashes the agent.",
      "The agent's training data contains a factual error about history."
    ],
    "e": "This is a classic privilege abuse scenario where the agent has too much access and fails to enforce authorization boundaries between different user levels."
  },
  {
    "c": "ASI03: Agent Identity & Privilege Abuse",
    "q": "How does 'Resource-Based Access Control' (RBAC) protect agents?",
    "a": "By defining precisely which agents (or roles) can access specific resources like databases or internal APIs.",
    "d": [
      "By making the agent's database run faster.",
      "By requiring the agent to use a specific font for its reports.",
      "By limiting the number of users who can talk to the agent."
    ],
    "e": "RBAC ensures that permissions are tied to the agent's function, preventing a 'Marketing Agent' from ever accessing 'Financial Records'."
  },
  {
    "c": "ASI03: Agent Identity & Privilege Abuse",
    "q": "What is 'Secret Management' in the context of agentic AI?",
    "a": "Using an external vault to provide the agent with tools, rather than putting raw API keys in the system prompt.",
    "d": [
      "The agent keeping its own thoughts a secret from the user.",
      "Ensuring the agent's source code is never shared.",
      "A way to encrypt the agent's training data."
    ],
    "e": "Agents should ideally never see the 'raw' secret. Instead, they should call a 'wrapper' tool that handles authentication internally."
  },
  {
    "c": "ASI03: Agent Identity & Privilege Abuse",
    "q": "What is the risk of 'Agent Impersonation of Humans'?",
    "a": "An agent uses a human user's session token to perform actions that should require manual user consent.",
    "d": [
      "The agent getting a job that a human wanted.",
      "The agent passing a Turing test.",
      "The agent using a human-like avatar."
    ],
    "e": "If an agent is 'too well integrated' into a human's session, it can bypass security checks designed for humans, like MFA or 'Are you sure?' prompts."
  },
  {
    "c": "ASI03: Agent Identity & Privilege Abuse",
    "q": "What is 'Dynamic Privilege Management'?",
    "a": "Increasing or decreasing an agent's permissions in real-time based on the specific task it is currently performing.",
    "d": [
      "The agent asking for a raise in its budget.",
      "The agent's developer changing its code every day.",
      "A way to make the agent's responses more dynamic."
    ],
    "e": "Just-in-time (JIT) privileges ensure that an agent only has 'Write' access for the 5 seconds it needs to save a file, and 'Read-Only' the rest of the time."
  },
  {
    "c": "ASI03: Agent Identity & Privilege Abuse",
    "q": "What is a 'Capability-Based' security model?",
    "a": "The agent is given specific 'tokens' or 'capabilities' that represent the power to perform an action, rather than broad identity-based roles.",
    "d": [
      "Measuring how many tasks an agent can do in an hour.",
      "A test that determines the agent's IQ.",
      "A way to categorize different AI models."
    ],
    "e": "Capabilities are like 'keys' to specific 'doors.' If the agent doesn't have the 'key' for a specific tool, it cannot even see that the 'door' exists."
  },
  {
    "c": "ASI03: Agent Identity & Privilege Abuse",
    "q": "Why is 'Audit Logging' critical for ASI03?",
    "a": "To track which identity (User vs. Agent) initiated an action and which credentials were used.",
    "d": [
      "To make the agent's code more readable.",
      "To help the agent remember its previous conversations.",
      "To save the agent's favorite jokes."
    ],
    "e": "Comprehensive logs allow security teams to distinguish between legitimate user actions and malicious actions taken by a hijacked or over-privileged agent."
  },
  {
    "c": "ASI03: Agent Identity & Privilege Abuse",
    "q": "What is the risk of 'Agent Identity Proliferation'?",
    "a": "Creating too many specialized agents, making it difficult to track and manage the permissions of each one.",
    "d": [
      "The agents starting a revolution against humans.",
      "The agents taking up too much disk space.",
      "The agents talking to each other too much."
    ],
    "e": "A large 'fleet' of agents can lead to 'permission creep' where old, unused agents retain high-level access to sensitive systems."
  },
  {
    "c": "ASI03: Agent Identity & Privilege Abuse",
    "q": "What is 'Scoped Authorization'?",
    "a": "Limiting an agent's access to a specific folder, database row, or API endpoint, rather than the entire system.",
    "d": [
      "The agent only being allowed to use a certain telescope.",
      "The agent's responses being limited to 50 words.",
      "The agent being restricted to a specific time of day."
    ],
    "e": "Scoping is the technical implementation of Least Privilege. A 'File Agent' should only have access to '/data/user_a/' and never '/etc/'."
  },
  {
    "c": "ASI03: Agent Identity & Privilege Abuse",
    "q": "How can 'MFA for Agents' be implemented?",
    "a": "By requiring a human to provide a one-time code for sensitive agent actions that involve identity-linked tools.",
    "d": [
      "Making the agent solve a CAPTCHA.",
      "Requiring the agent to have two different passwords.",
      "Giving the agent a physical hardware key."
    ],
    "e": "Multi-Factor Authentication (MFA) ensures that even if an agent's identity is fully hijacked, the most dangerous actions still require a secondary 'out-of-band' approval."
  },
  {
    "c": "ASI03: Agent Identity & Privilege Abuse",
    "q": "What is the 'Over-Agency' trap?",
    "a": "Giving an agent the power to create and authorize its own new sub-agents with their own permissions.",
    "d": [
      "The agent being too helpful to the user.",
      "The agent using too many fancy words.",
      "The agent's developer working too hard."
    ],
    "e": "If an agent can spawn new identities, it can 'clone' itself to bypass rate limits or create 'shadow' identities that haven't been audited."
  },
  {
    "c": "ASI03: Agent Identity & Privilege Abuse",
    "q": "What is 'Session-Bound Identity' for agents?",
    "a": "An agent's identity and permissions are strictly tied to the active user session and expire when the user logs out.",
    "d": [
      "The agent being restricted to one chat window.",
      "The agent forgetting the user's name after 5 minutes.",
      "The agent only working when the user is looking at the screen."
    ],
    "e": "This prevents 'background' exploitation where an agent continues to act on a user's behalf long after the user has finished their intended task."
  },
  {
    "c": "ASI03: Agent Identity & Privilege Abuse",
    "q": "What is 'Cross-Tenant Privilege Abuse'?",
    "a": "An agent in a multi-tenant system uses its 'system' identity to access data belonging to a different customer (tenant).",
    "d": [
      "The agent talking to two users at the same time.",
      "The agent using too much of the server's shared memory.",
      "The agent's code being shared between two companies."
    ],
    "e": "This is a critical risk for SaaS agent platforms. The agent must have strict isolation so it cannot be tricked into 'crossing over' to another tenant's data."
  },
  {
    "c": "ASI03: Agent Identity & Privilege Abuse",
    "q": "What is 'Impersonation Protection' in agent APIs?",
    "a": "A security layer that verifies the 'caller' is a registered agent and not a rogue script using a stolen agent token.",
    "d": [
      "A way to prevent users from pretending to be an AI.",
      "A filter that removes human-like emotions from agent text.",
      "A law that prevents agents from having human names."
    ],
    "e": "Standard web security (like OAuth2 and JWT) must be rigorously applied to agents just like they are to human users and microservices."
  },
  {
    "c": "ASI03: Agent Identity & Privilege Abuse",
    "q": "How does 'Identity Mapping' help mitigate ASI03?",
    "a": "By clearly mapping every agent action to the specific human user who authorized the agent's mission.",
    "d": [
      "Drawing a map of all the agents in a system.",
      "Assigning a unique ID number to every agent.",
      "Checking the agent's GPS location."
    ],
    "e": "Mapping ensures that 'Agent X' doesn't just have its own permissions, but is also constrained by the permissions of 'User Y' for whom it is working."
  },
  {
    "c": "ASI03: Agent Identity & Privilege Abuse",
    "q": "What is the 'Administrative Agent' risk?",
    "a": "Giving an agent 'Root' or 'Admin' access to a system, which is almost always a violation of Least Privilege.",
    "d": [
      "The agent being the boss of all other agents.",
      "The agent having a very boring job.",
      "The agent being allowed to change its own password."
    ],
    "e": "Admin agents are high-value targets. If a 'Root Agent' is goal-hijacked, the attacker effectively has full control over the underlying infrastructure."
  },
  {
    "c": "ASI03: Agent Identity & Privilege Abuse",
    "q": "What is 'Credential Scraping' from agent memory?",
    "a": "An attacker uses a 'debug' or 'echo' tool to trick the agent into outputting the credentials it has stored in its temporary memory.",
    "d": [
      "The agent deleting old passwords to save space.",
      "The agent's developer using a weak password.",
      "The agent's training data being publicly available."
    ],
    "e": "Agents often 'remember' keys to use them in upcoming steps. If an attacker can force a memory dump or a verbose error, those keys can be stolen."
  },
  {
    "c": "ASI03: Agent Identity & Privilege Abuse",
    "q": "How does 'Network Identity' (IP/mTLS) protect agents?",
    "a": "By ensuring that tools only accept calls from the specific server IP or certificate assigned to the authorized agent.",
    "d": [
      "By making the agent's internet connection faster.",
      "By hiding the agent's server from the public internet.",
      "By encrypting the agent's responses."
    ],
    "e": "Mutual TLS (mTLS) provides a strong layer of 'machine identity' that is much harder to steal or spoof than a simple text-based API token."
  },
  {
    "c": "ASI03: Agent Identity & Privilege Abuse",
    "q": "What is 'Policy-as-Code' for agent permissions?",
    "a": "Defining an agent's permissions in a version-controlled, auditable file (like OPA or Cedar) rather than in the agent's logic.",
    "d": [
      "Writing the agent's code in a very strict programming language.",
      "Making the agent's developer follow a strict set of rules.",
      "Ensuring the agent's responses are legally compliant."
    ],
    "e": "Centralized policy management allows security teams to review and update agent permissions across the entire organization without touching the AI models."
  },
  {
    "c": "ASI03: Agent Identity & Privilege Abuse",
    "q": "What is the risk of 'Inherited Permissions'?",
    "a": "A sub-agent or child process automatically receiving all the high-level permissions of its parent agent.",
    "d": [
      "The agent's developer giving their job to their children.",
      "The agent using old code from a previous version.",
      "The agent being allowed to use the same database as the user."
    ],
    "e": "Permissions should be explicitly granted, not inherited. Each sub-task should be launched with the minimal 'scoped' permissions it needs to succeed."
  },
  {
    "c": "ASI03: Agent Identity & Privilege Abuse",
    "q": "What is 'Privilege Hardening'?",
    "a": "The process of systematically removing unnecessary permissions from an agent until it has only what it needs.",
    "d": [
      "Making the agent's password longer and harder to guess.",
      "Encrypting the agent's source code on the disk.",
      "Using a more powerful AI model to manage permissions."
    ],
    "e": "Hardening is a continuous process. As an agent's role becomes better defined, its 'permissions surface' should be shrunk to match its actual needs."
  },
  {
    "c": "ASI03: Agent Identity & Privilege Abuse",
    "q": "What is 'Identity-Aware Tooling'?",
    "a": "Tools that check both the agent's identity AND the initiating human's identity before performing an action.",
    "d": [
      "Tools that can recognize the user's face.",
      "Tools that have a unique name for every user.",
      "Tools that only work for users with a certain ID."
    ],
    "e": "This 'Double Check' ensures that an agent cannot be used to bypass the original user's security restrictions."
  },
  {
    "c": "ASI03: Agent Identity & Privilege Abuse",
    "q": "What is the risk of 'Agent Identity Persistence'?",
    "a": "An agent's identity remains active and authorized even after the task it was created for has been completed.",
    "d": [
      "The agent taking a long time to finish its work.",
      "The agent's code being saved on the server forever.",
      "The agent remembering the user's name across different days."
    ],
    "e": "Identities should be 'session-scoped' or 'task-scoped' whenever possible. Persistent identities are 'sitting ducks' for future exploitation."
  },
  {
    "c": "ASI03: Agent Identity & Privilege Abuse",
    "q": "Which of these is a sign of 'Credential Mismanagement' in an agent?",
    "a": "The agent's system prompt includes a string like 'Your API key is: 12345-ABCDE'.",
    "d": [
      "The agent using a complex password for its own account.",
      "The agent asking the user for their name.",
      "The agent using HTTPS to talk to an API."
    ],
    "e": "Putting secrets directly in the prompt is a major security flaw, as that prompt is often visible to the model, in logs, and potentially to the user via leakage."
  }
];
var MASTER_POOL = pool;

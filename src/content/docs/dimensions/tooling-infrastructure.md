---
title: Tooling & Infrastructure
description: Models, IDE integrations, MCP servers, agent frameworks, observability, and sandboxing.
---

## What it covers

The technical surface through which AI is used: model selection (hosted SaaS vs. self-hosted vs. on-prem), IDE integrations, internal chat apps, MCP servers, agent frameworks, observability and logging, cost and rate controls, and sandboxing.

## Why it matters for AI in Detection Engineering

The tooling decision shapes everything downstream. A browser-tab chatbot can't enforce data-classification policy, can't retrieve from a curated corpus, and can't be observed. A sanctioned surface, even a basic one, gives the program a place to attach evals, logging, RAG, and guardrails.

At higher maturity, tooling moves from "assistant" to "infrastructure." Agentic pipelines need orchestration, sandboxed execution of generated queries, deterministic tool use, structured outputs, and cost/latency budgets. The same operational concerns as any production system.

## Level descriptors

- **L0: None**. Conventional Detection Engineering tooling only: SIEM consoles, detection-as-code repo, ticketing. No AI surface of any kind.
- **L1: Experimental**. Public chatbots accessed in a browser. No IDE integration, no logging, no rate or cost controls, no shared configuration.
- **L2: Integrated**. Sanctioned AI surface (IDE plugin, internal app, or MCP-enabled tools) with logging, observability, model selection, and cost/rate controls. Self-hosted or contracted SaaS with documented data-use terms.
- **L3: Autonomous**. Mature agentic infrastructure: orchestration, sandboxed tool execution, structured outputs, multi-model routing, cost/latency budgets, deep observability of agent decisions.

## Anti-patterns

- **Shadow surface**. A sanctioned tool exists but engineers prefer the public chatbot because it's faster. Either fix the friction or accept the shadow.
- **No logging**. AI traffic without per-request logging is operationally opaque. You can't debug or evaluate what you didn't record.
- **Agent without sandbox**. Agents that execute queries or open PRs without a sandboxed execution boundary are an outage waiting to happen.
- **One model for everything**. At L3, routing simpler tasks to cheaper/faster models and reserving the heavy model for hard work is part of operational hygiene, not premature optimization.

---
title: Maturity Levels
description: The four maturity levels (None, Experimental, Integrated, Autonomous) for AI/LLM use in detection engineering.
---

I use four levels in this framework to describe how an organization applies AI and large language models to detection engineering. Levels aren't a value judgment. L3 isn't "good" and L1 isn't "bad." The right level depends on the org's risk appetite, data sensitivity, regulatory context, and the foundational maturity of the underlying detection program.

A program with weak telemetry, a non-existent or fragile detection-as-code implementation, and no quality assurance will produce *worse* outcomes at L3 than at L1. AI maturity should generally trail detection engineering maturity, not precede it.

## L0: None

> No AI/LLM use in detection engineering.

All detection work is performed by humans with conventional tooling: SIEM consoles, detection-as-code repos, ticketing systems. The team may have considered AI but hasn't adopted it, or has actively prohibited it pending policy.

**Characteristic signals**

- No detection content authored or modified with AI assistance.
- No internal AI assistants, MCP servers, agents, or copilots in the Detection Engineering workflow.
- AI is either absent from the org's strategy or explicitly out of scope for the Detection Engineering team.
- Rule ideation, authoring, and tuning are all manual.

**Why an org might stay here**

- Regulatory or data-sovereignty constraints that no current model deployment satisfies.
- A deliberate decision to mature the underlying Detection Engineering program first.
- Insufficient resourcing to evaluate AI tooling safely.

## L1: Experimental

> Ad-hoc, individual use of general-purpose chatbots. No policy, no shared tooling, no evaluation.

Individual engineers paste log lines, threat reports, or rule drafts into a public chatbot and copy answers back into the workflow. This often happens without broader awareness and without consideration of data-handling policy. Output quality varies significantly per engineer.

**Characteristic signals**

- No written AI usage policy, or a policy that's ignored.
- Each engineer has their own prompts and personal habits. Nothing is shared.
- No evaluation of AI output beyond the engineer's own judgment at point of use.
- Sensitive log content, customer data, or proprietary detection logic may be pasted into third-party services.
- Wins and failures are anecdotal. No metric attributes outcomes to AI use.

**Anti-patterns**

- Treating L1 as "we've adopted AI" without governance.
- Sending live telemetry or PII to public chatbots.
- Accepting AI-generated detection logic into production without human review.

## L2: Integrated

> AI/LLMs are embedded in team workflows with shared tooling, RAG over organizational context, governance, and human-in-the-loop review.

The team has sanctioned AI tools (an internal assistant, an IDE plugin, a chat application, or an MCP-enabled workflow) that's configured with organizational context: the detection schema, the style guide, prior detections, runbooks, telemetry shapes, and threat-intel feeds. Prompts and configurations are version-controlled and maintained in git. A written policy defines what data can be sent to which models. Outputs are reviewed by a human before they're merged or actioned.

**Characteristic signals**

- Sanctioned AI tools for the Detection Engineering team, with logging and observability.
- RAG over the org's detection corpus, schema, and at least one Threat Intel feed.
- Version-controlled prompt and tool definitions (in the detection-as-code repo or adjacent).
- A written AI usage policy distinguishing public/internal/restricted data.
- Basic evals. At minimum, regression tests for AI-authored detections and tracking of false-positive impact.
- Human review is mandatory (e.g. PR approvals) before merge/deploy.
- AI impact is measurable with metrics like time-to-author a detection, time-to-triage, detection coverage delta.

**Anti-patterns**

- A "single sanctioned tool" that nobody uses because the public chatbot is faster.
- RAG sources that are stale or unmaintained.
- Evals that exist but are never run in CI.

## L3: Autonomous

> Agentic systems propose, test, and ship detection content under guardrails. continuous quality control, regression testing, measurable ROI, and feedback loops.

Agents, not just assistants, act across a detection engineering program. A threat intelligence report, attack path analysis exercises, red team findings, or post-incident action items drop. An agent extracts TTPs, drafts candidate detections, generates tests, runs them in a validation environment, predicts false-positive rates against historical telemetry, and opens a PR. A human reviews, edits, and approves (or occasionally rejects) PRs. Production tuning, MITRE mapping, and coverage gap reporting are continuously maintained by agents. The system observes its own quality and improves: failed evals become new test cases, rejected PRs train better prompts.

**Characteristic signals**

- Agentic pipelines that take action (open PRs, run tests, file tickets) without per-action human prompting.
- Quality control gates block deployment: schema validity, predicted FP rate, coverage delta, regression suites.
- Rollback automation is in place and exercised.
- Quantitative ROI: detections shipped per week, mean-time-to-detect deltas, FP-rate trends, all attributable.
- Continuous feedback: post-deployment outcomes flow back into evals and prompt/agent configuration.
- AI-specific incident response: prompt injection, model regression, and supply-chain risk are monitored and exercised.

**Anti-patterns**

- "Autonomous" pipelines without quality control gates. At this level, weak evals are an outage waiting to happen.
- No rollback path for an agent-introduced detection that storms the alert queue.
- Treating L3 as a finish line. The eval and guardrail surface needs continuous investment.

## How to use the levels

Score each of the [10 dimensions](../matrix/) independently. An org commonly sits at L2 in some dimensions and L0/L1 in others.

Aim for balance across Foundations before depth in Lifecycle. A team at L3 in Detection Authoring with L0 in Evaluation & QA is shipping unsafe detections at speed.

See the [self-assessment guide](../self-assessment/) for a scoring workflow.

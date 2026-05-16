---
title: Detection Engineering AI Maturity Framework
description: A community framework for assessing how organizations apply AI and large language models across a detection engineering program.
---

A community framework for assessing how organizations apply AI and large language models across a detection engineering program, from the involved people, processes, and technology to detection ideation, authoring, testing, tuning, and continuous improvement.

:::note[Inspired by and complementary to]
- [Detection Engineering Maturity Matrix](https://detectionengineering.io) by Kyle Bailey
- [Threat Detection Maturity Framework](https://github.com/haidermdost/Threat-Detection-Maturity-Framework) by Haider Dost

These frameworks assess the maturity of the overall detection program. I highly recommend that all teams use them to help drive the foundational components of their detection engineering programs. This framework focuses specifically on the AI/LLM dimension of that program.
:::

## Framework overview

Four maturity levels across ten dimensions (six Foundations plus four Detection Lifecycle).

### Levels

| | Name | Defining trait |
|---|---|---|
| **L0** | None | No AI/LLM use in detection engineering. |
| **L1** | Experimental | Ad-hoc individual use of public chatbots. No governance, no shared tooling, no evaluation. |
| **L2** | Integrated | AI is embedded in team workflows with shared tooling, org-context RAG, policy, and human-in-the-loop review. |
| **L3** | Autonomous | Agentic systems propose, test, and ship detections under guardrails with measurable ROI and continuous quality control. |

See [Maturity Levels](./levels/) for full definitions and characteristic signals.

### Dimensions

**Foundations**

- [Strategy & Governance](./dimensions/strategy-governance/)
- [People & Skills](./dimensions/people-skills/)
- [Tooling & Infrastructure](./dimensions/tooling-infrastructure/)
- [Data & Knowledge](./dimensions/data-knowledge/)
- [Evaluation & QA](./dimensions/evaluation-qa/)
- [Security, Privacy & Safety](./dimensions/security-privacy-safety/)

**Detection Lifecycle**

- [Detection Opportunity Ideation](./dimensions/detection-ideation/)
- [Detection Authoring](./dimensions/detection-authoring/)
- [Detection Testing & Validation](./dimensions/detection-testing/)
- [Tuning, Coverage & Continuous Improvement](./dimensions/tuning-coverage/)

See [The Matrix](./matrix/) for the full level-by-level criteria.

## Using this framework

1. Read [The Matrix](./matrix/) and the [Maturity Levels](./levels/).
2. Score your organization against each dimension using the [Self-Assessment](./self-assessment/) guide.
3. Identify gaps and prioritize the lowest-scoring dimensions that materially affect program safety.

:::caution[It's important to balance your maturity levels]
A team at L3 in Detection Authoring with L0 in Evaluation & QA ships unsafe detections faster than a team at L1 across the board. Foundations gate Lifecycle.
:::

## Why this framework exists

In recent years (possibly even months), AI in detection engineering has moved from curiosity and experimentation to operational reality. Many teams are somewhere on the journey from "individuals quietly use ChatGPT" to "agentic systems author and tune detections." There isn't a shared vocabulary for where any given team is on that journey, what the next step looks like, or prerequisites for moving forward.

This framework is my attempt at that vocabulary. It's opinionated, vendor-neutral, and open-source so the community can correct, sharpen, and extend it.

## License

[CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/).

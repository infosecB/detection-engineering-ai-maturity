---
title: Security, Privacy & Safety
description: Prompt-injection defenses, data-egress controls, PII/secret redaction, output validation, and supply-chain risk.
---

## What it covers

Protecting the AI surface and the data that flows through it: prompt-injection defenses, data-egress controls, PII/secret redaction, output validation, model supply-chain risk, and AI-specific incident response.

## Why it matters for AI in Detection Engineering

Detection engineering AI surfaces consume some of the most sensitive data in the org: raw telemetry, threat intel, incident notes, sometimes user content. They also generate code that runs against production data. That combination of privileged input plus consequential output makes the AI surface a high-value target. Prompt injection isn't theoretical when the model is reading attacker-controlled log lines or threat reports.

Output safety also matters. An agent that opens a detection PR with a query the SIEM happily executes against the wrong index can produce a real outage.

## Level descriptors

- **L0: None**. Not applicable. No AI surface to secure.
- **L1: Experimental**. No prompt-injection or data-egress controls. PII, secrets, customer data, and proprietary detection logic may leave the org via public chatbots.
- **L2: Integrated**. Data-classification enforced at the AI surface: PII/secret redaction, allowed-source lists, model-routing based on sensitivity. Outputs validated against schema/policy before action. Model and provider SBOM tracked.
- **L3: Autonomous**. Prompt-injection defenses red-teamed on a schedule. Output validators block unsafe tool use and dangerous actions. Model supply chain monitored for regressions and provenance. AI-specific incident-response runbooks exercised.

## Anti-patterns

- **Redaction at the wrong layer**. Redacting in the UI but logging the raw prompt server-side. The data leaves where the data is sent, not where the user sees it.
- **Trusted log content**. Treating log fields as trusted strings inside a prompt. Attacker-controlled fields (user agents, filenames, command lines) can carry injection payloads.
- **Unbounded tools**. Giving an agent a tool that can drop indexes, modify detections in production, or send messages to customers, with no validator and no sandbox.
- **No model-regression watch**. A model provider silently updates a model and your eval pass rate drops 20%. Without monitoring, the first signal is a production incident.

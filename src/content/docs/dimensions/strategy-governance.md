---
title: Strategy & Governance
description: Leadership sponsorship, AI usage policy, model/vendor selection, risk acceptance, and ethics.
---

## What it covers

Leadership sponsorship, written AI usage policy, model and vendor selection, risk acceptance, intellectual-property handling, and ethics. This dimension is really asking whether the org has actually decided what AI use in Detection Engineering looks like, in writing, and whether that decision is operative.

## Why it matters for AI in Detection Engineering

Detection engineering handles privileged telemetry. Endpoint events, network flows, authentication logs, sometimes customer data. Without a governance position, individual engineers will independently decide what's acceptable to send to a third-party model. Those decisions vary, accumulate quietly, and surface only after an incident. Governance is the dimension that converts AI from a personal productivity choice into a program asset.

Governance also determines what kind of AI program is *possible* downstream. Tooling, data, and autonomy decisions all rest on a defensible policy.

## Level descriptors

- **L0: None**. No AI strategy for Detection Engineering. AI is either out of scope or actively prohibited pending policy.
- **L1: Experimental**. Unofficial acceptance of individual AI use. No written policy, no leadership visibility, no risk acceptance.
- **L2: Integrated**. Written AI usage policy in force: data-sensitivity tiers, approved models/vendors, escalation paths. Leadership sponsors a defined pilot scope. AI-specific risks (data egress, hallucination impact, model regression) are on the risk register.
- **L3: Autonomous**. AI is a funded line in the Detection Engineering roadmap with reported ROI. Model and vendor reviews are periodic. Governance forum reviews agent autonomy expansions. Policy is enforced by tooling, not just memo.

## Anti-patterns

- **Policy by memo**. A written policy that no tooling enforces ages into theater. Approved-vendor lists need to be reflected in the AI surface itself.
- **Permanent pilot**. A "pilot" with no exit criteria and no scaling decision is a way to avoid governance, not practice it.
- **Vendor lock without review**. Selecting a model vendor early and never reassessing as the market shifts. Periodic reviews keep the program honest.
- **Banning AI without an alternative**. A blanket prohibition that doesn't address the underlying productivity pressure drives shadow use, which is the worst of L1.

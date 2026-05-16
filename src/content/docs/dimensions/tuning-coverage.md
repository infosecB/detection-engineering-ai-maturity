---
title: Tuning, Coverage & Continuous Improvement
description: AI-driven tuning, coverage-gap analysis, and feedback loops from post-deploy outcomes.
---

## What it covers

The use of AI to tune deployed detections (FP reduction, threshold adjustment), maintain coverage maps (ATT&CK, crown-jewel, data-source), identify gaps, and close the loop from post-deploy outcomes back to the program. This is where AI moves from authoring artifacts to managing a portfolio.

## Why it matters for AI in Detection Engineering

Most detection programs lose more value to under-maintained detections than to missing detections. Tuning is the chronic, unglamorous work that AI is well-suited to: root-cause analysis of FP spikes, recommending threshold or exclusion changes, identifying detections that have decayed into low-signal noise, and keeping coverage maps current as the environment changes.

At higher levels, this dimension closes the loop that makes the rest of the framework legitimate. Post-deploy FP/TP outcomes feed back into evals, prompts, and agent behavior. Without that loop, the program is open-loop and accumulates silent drift.

## Level descriptors

- **L0: None**. Manual tuning, reactive and ticket-driven. MITRE mapping is sparse or absent.
- **L1: Experimental**. Engineers ask chatbots for tuning ideas case-by-case. No systematic loop, no coverage view.
- **L2: Integrated**. AI assists with FP root-cause analysis and recommends tuning changes. Coverage maps (MITRE, crown-jewel) are AI-maintained and reviewed. Recommendations require human approval.
- **L3: Autonomous**. Continuous AI-driven tuning, coverage-gap analysis, and prioritization. Post-deploy outcomes feed agent learning. Detection portfolio health (coverage, FP-rate, age, ownership) is reported automatically to leadership.

## Anti-patterns

- **Tuning to silence**. Reducing FP rate by narrowing the rule until it fires for almost nothing. AI recommendations that optimize for "low FP" without measuring "still catches the bad case" produce theater.
- **Coverage maps that lie**. Auto-generated MITRE maps that claim coverage based on rule names, not rule behavior. Always validate coverage with tests.
- **No portfolio view**. Tuning happens per-detection without seeing which detections are doing the work and which are decoration. A portfolio view is the unit of management at L3.
- **Open loop**. Tuning recommendations without a feedback mechanism from production outcomes. The recommendations can't improve over time.

---
title: Detection Testing & Validation
description: AI-assisted test generation, FP prediction, adversary emulation, and validation gating.
---

## What it covers

The use of AI to generate test cases for detections, run validation against historical or synthetic telemetry, predict false-positive rates, and orchestrate adversary emulation. Covers atomic-test generation (e.g., Atomic Red Team-style), purple-team scenario design, and CI integration.

## Why it matters for AI in Detection Engineering

Testing is the bridge between authoring and trust. AI-authored detections are only safe to autonomize if the same AI program can generate and execute tests that catch its own bad outputs. The interaction between authoring and testing is what unlocks higher levels. Neither dimension can outrun the other.

It also matters for the human-authored portion of the program. A sufficiently mature testing capability raises the floor on all detections, AI-authored or not.

## Level descriptors

- **L0: None**. Manual review if any. Mostly visual inspection of rules before deploy.
- **L1: Experimental**. Engineers occasionally ask a chatbot for test ideas or sample log lines. No structured generation, no execution.
- **L2: Integrated**. AI generates atomic-style tests aligned to each new detection. Tests execute in a validation environment as part of CI. FP rate is estimated against a sample of historical telemetry before merge.
- **L3: Autonomous**. Agents predict FP rate against full historical telemetry, generate adversary-emulation scenarios mapped to MITRE techniques, and gate PRs on validation outcomes. Failed validations become new evals automatically.

## Anti-patterns

- **Synthetic-only telemetry**. Tests that pass against generated log lines but never see real noise. FP rate predictions are meaningless without realistic data.
- **Test-as-rule-restatement**. An AI-generated "test" that just restates the rule's predicate in a different shape. It tests itself, not the detection.
- **No FP budget**. Validating that the rule fires on the bad case without measuring how often it fires on benign data. Half of detection quality is what *doesn't* fire.
- **Tests without ownership**. Auto-generated tests with no owner age into broken tests that everyone ignores. Tests are detections. They need ownership.

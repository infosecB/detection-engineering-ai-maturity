---
title: Evaluation & QA
description: Golden datasets, regression suites, hallucination tracking, drift monitoring, and red-team evals.
---

## What it covers

How AI output quality is measured: golden datasets, regression suites, hallucination tracking, drift monitoring, and (at higher levels) red-team evals against prompt injection and policy bypass. continuous quality control is what separates an AI program from AI experiments.

## Why it matters for AI in Detection Engineering

AI output in detection engineering has a high blast radius. A hallucinated field in a generated detection produces a rule that never fires. A subtly wrong query produces a rule that fires constantly. Both kinds of failure can hide inside output that *reads* correctly. Eyeballing isn't a quality strategy.

Evals also unblock autonomy. The reason an org can let an agent open detection PRs is that the eval suite catches its bad outputs reliably. Without that, autonomy is a liability.

## Level descriptors

- **L0: None**. No AI output to evaluate.
- **L1: Experimental**. No formal evals. "Looks right to me" review at point of use. Wins and failures are anecdotal.
- **L2: Integrated**. Golden datasets exist for the main AI use cases (rule authoring, Threat Intel extraction, triage). Regression suites run in CI. Hallucination, FP impact, and drift are tracked.
- **L3: Autonomous**. Continuous evals gate production deploys. Outcome-based metrics (post-deploy FP/TP, MTTD deltas) feed back into evals. Red-team eval suites cover prompt injection, jailbreaks, and policy bypass.

## Anti-patterns

- **Evals without gates**. A regression suite that runs but doesn't block bad outputs. The suite becomes a status dashboard for failures, not a quality control.
- **Single-snapshot golden set**. A golden dataset frozen at launch and never updated. Eval pass rates drift into uninformative.
- **Model-judge only**. Using an LLM-as-judge without periodic human calibration produces a metric that looks objective and isn't.
- **No outcome loop**. Evals measure pre-deploy quality. Without a feedback loop from post-deploy FP/TP, the evals don't know whether they're catching the failures that actually matter.

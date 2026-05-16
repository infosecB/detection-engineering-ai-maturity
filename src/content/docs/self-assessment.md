---
title: Self-Assessment
description: How to score your detection engineering team against the framework and prioritize the gaps.
---

This guide walks a detection engineering team through assessing itself against the framework, picking the right L for each of the ten dimensions, and turning the result into a prioritized roadmap.

## How to score

For each of the ten [dimensions](../dimensions/), pick the lowest level for which all descriptors are true of your org *today*. If a row is partially true, the honest score is the level below it.

Scores aren't averaged. Treat them as a profile, a 10-dimensional vector, not a single number. An aggregate "we're at L2" is almost always misleading, because the lowest-scoring dimension is what bounds the program's safety.

## Suggested format

A scorecard with one row per dimension:

| Dimension | Today (L?) | Target (L?) | Notes / evidence |
|---|---|---|---|
| Strategy & Governance | | | |
| People & Skills | | | |
| Tooling & Infrastructure | | | |
| Data & Knowledge | | | |
| Evaluation & QA | | | |
| Security, Privacy & Safety | | | |
| Detection Opportunity Ideation | | | |
| Detection Authoring | | | |
| Detection Testing & Validation | | | |
| Tuning, Coverage & Continuous Improvement | | | |

The **Notes / evidence** column is where the assessment is honest or dishonest. A score with no evidence is aspirational.

## Visualizing the profile

A radar chart with the ten dimensions on the spokes makes the gaps and balance immediately legible. Two overlays (current state and 12-month target) are usually enough.

A heatmap (dimensions by levels) is an alternative: shade the current level for each dimension and the target level in a different color.

Either visualization makes the "weakest link" problem visible, which is the point.

## Prioritization

Score the profile honestly first, then prioritize using these heuristics:

1. **Foundations before Lifecycle**. Strategy, Tooling, Evaluation, and Security/Privacy are gating dimensions. Advancing Detection Authoring or Tuning past L1 is unsafe without at least L2 in those four.
2. **Lowest score that touches production**. If Evaluation & QA is at L0 and any Lifecycle dimension is past L1, that gap is your top priority. AI is shipping content with no quality control.
3. **Risk before convenience**. Security/Privacy gaps trump throughput gaps. A team at L1 in Security/Privacy with engineers pasting raw telemetry into public chatbots is one mistake from an incident.
4. **Don't skip levels**. Going from L1 to L3 in any dimension without passing through L2 means skipping the governance, observability, and eval that make L3 safe.

## Reassessment cadence

Re-score on a fixed cadence (quarterly works for most teams) and after material events: a new AI tool adoption, a model-provider change, an AI-related incident, or a shift in regulatory context.

## What the framework doesn't score

- **Underlying detection program maturity**. This framework assumes you already have one. If you don't, the [Detection Engineering Maturity Matrix](https://detectionengineering.io) or the [Threat Detection Maturity Framework](https://github.com/haidermdost/Threat-Detection-Maturity-Framework) are the right places to start.
- **Vendor selection**. This framework is vendor-neutral. Which model, which provider, and which agent framework are downstream decisions.
- **Cost or ROI in dollars**. Mentioned at L2/L3, but a quantitative model is out of scope.

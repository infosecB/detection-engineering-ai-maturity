---
title: Detection Authoring
description: AI-assisted detection drafting, refactoring, translation, and metadata authoring.
---

## What it covers

The use of AI to draft, refactor, and translate detection content: SIEM rules, EDR queries, Sigma rules, correlation logic, and supporting metadata (descriptions, ATT&CK mappings, severity, runbook links). Covers cross-platform translation (e.g., Sigma to KQL to SPL) and adherence to the org's style guide and schema.

## Why it matters for AI in Detection Engineering

Detection authoring is the most visible AI use case in Detection Engineering, and the easiest to do badly. The failure mode is detections that look right and parse cleanly but reference fields that don't exist in the org's schema, encode subtle logical errors, or restate detections the team already ships. RAG over the org's detection corpus and schema is what makes the difference between "looks like a detection" and "fits the program."

At higher levels, agents that author detections from Threat Intel inputs can compress days of work into a PR. But only if testing and quality control gates are mature enough to trust.

## Level descriptors

- **L0: None**. Engineers hand-write all detections from scratch. No AI assistance.
- **L1: Experimental**. Engineers paste threat reports into ChatGPT for ad-hoc rule drafts. No shared prompts, no eval, no schema awareness. Output quality varies wildly per engineer.
- **L2: Integrated**. Shared AI assistant with RAG over the org's detection corpus, log schema, and style guide. Generated detections require human review before merge. Prompts and tool definitions are version-controlled and maintained in git.
- **L3: Autonomous**. Agents draft, test, and open PRs for detections from detection opportunity inputs. Humans approve PRs. They don't author them. Cross-platform translation (e.g., Sigma to KQL to SPL) is automated. Quality control gates block low-quality submissions.

## Anti-patterns

- **Schema-blind drafts**. Output referencing `event.process.command_line` when your schema uses `process.command_line`. RAG over the actual schema fixes this.
- **Duplicate detections**. Generating a rule that re-implements an existing detection because the corpus wasn't consulted.
- **Plausible-but-wrong logic**. A rule that correctly describes the behavior in prose but encodes a subtle operator error (e.g., `AND` vs. `OR`) in the query. Tests, not eyeballs, catch this.
- **Skipping the metadata**. AI-authored detections with weak descriptions, missing ATT&CK mappings, or no runbook links. Operational debt the next on-call inherits.

---
title: Data & Knowledge Management
description: RAG corpora, telemetry-as-context, prompt libraries, eval datasets, and rejected outputs.
---

## What it covers

The corpora and context AI systems are given access to: the detection repo, log schemas, runbooks, prior incident notes, threat-intel feeds, and (at higher levels) live telemetry shapes and knowledge graphs. Also covers prompt libraries, eval datasets, and rejected outputs as versioned assets.

## Why it matters for AI in Detection Engineering

A generic chatbot doesn't know your log schema, your naming conventions, your prior detections, your tuned exceptions, or what "high signal" means in your environment. Without that context, AI output is plausible-looking but disconnected from operational reality. RAG and curated context are how generic models become useful detection engineers.

Data is also a moat that compounds. A team that treats prompts, evals, and rejected AI outputs as versioned, owned assets accumulates leverage every quarter. A team that treats them as throwaway loses it every quarter.

## Level descriptors

- **L0: None**. No AI-accessible knowledge corpus. Tribal knowledge lives in engineers' heads and scattered wikis.
- **L1: Experimental**. Engineers paste snippets and reports into chatbots ad-hoc. No indexed corpus, no retrieval, no curation.
- **L2: Integrated**. Maintained RAG corpora over the detection repo, log/schema docs, runbooks, and at least one Threat Intel feed. Corpora are owned, scheduled for refresh, and version-controlled.
- **L3: Autonomous**. Telemetry-as-context: agents query live data shapes, incident graphs, and threat-intel knowledge graphs. Prompt libraries, eval datasets, and rejected outputs are versioned, first-class assets.

## Anti-patterns

- **Stale RAG**. A corpus refreshed quarterly when the schema changes weekly. Engineers stop trusting outputs.
- **No ownership**. A RAG corpus with no listed owner ages until it's actively misleading.
- **Whole-repo dumping**. Treating "give the model the whole detection repo" as RAG. Without retrieval quality, irrelevant detections crowd out the relevant ones.
- **PII in prompts**. Including raw, unredacted log samples in prompt libraries or eval datasets. A slow data-handling violation.

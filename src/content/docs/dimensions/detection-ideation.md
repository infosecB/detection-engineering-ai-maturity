---
title: Detection Opportunity Ideation
description: AI-assisted sourcing and prioritization of detection ideas from threat intel, Incident Response post-mortems, red/purple team work, threat modeling, and attack-path analysis.
---

## What it covers

The use of AI to source, normalize, and prioritize detection opportunities from the multiple inputs a mature Detection Engineering program draws on:

- Threat intelligence reports and feeds
- Incident response and SIRT post-mortems
- Red team and purple team assessments
- Threat modeling exercises
- Attack path analysis and graph-based exposure assessments
- ATT&CK coverage and gap analyses

Covers extracting structured detection candidates from prose inputs, prioritizing against current coverage and the org's environment, and tracking provenance back to the source.

## Why it matters for AI in Detection Engineering

Detection ideas come from many sources. Threat Intel reports are the most visible source, but Incident Response post-mortems, red/purple team work, and internal threat modeling exercises usually produce higher-signal opportunities because they're grounded in the org's actual environment, telemetry, and adversary behavior. Most Detection Engineering programs are bad at converting that material into structured detection candidates at the speed it arrives.

This is one of the higher-ROI applications of AI in detection engineering. The inputs arrive as unstructured prose. They need to be normalized into indicators, techniques, and detection hypotheses, then filtered through "is this observable in my environment, and is it already covered?" That pipeline benefits from LLM reasoning over the org's RAG corpus.

It's also high-risk for hallucination. A generated TTP attribution that doesn't reflect the source material can mislead an entire detection effort. Eval discipline matters here.

## Level descriptors

- **L0: None**. Manual ideation from Threat Intel reports, Incident Response post-mortems, red/purple team findings, and threat models. Detection opportunities surface in heads and meetings.
- **L1: Experimental**. Engineers paste reports, post-mortems, or assessment write-ups into a chatbot for ad-hoc summarization or IOC/TTP extraction. Output is unstructured and unverified.
- **L2: Integrated**. Sanctioned tooling extracts detection opportunities from multiple input sources (Threat Intel, Incident Response post-mortems, red/purple team reports, threat models) into a normalized format. Opportunities are contextualized against the org's environment, telemetry, and prior coverage.
- **L3: Autonomous**. Agentic pipeline runs continuously: ingest from all sources, enrich, contextualize against org telemetry, propose prioritized detection opportunities based on coverage gaps and observed adversary activity. Opportunities are tied to observable evidence in-org and weighted by source confidence.

## Anti-patterns

- **Single-source thinking**. Treating Threat Intel feeds as the only input. Incident Response post-mortems and purple-team findings usually produce higher-signal opportunities, because they're grounded in the org's actual environment.
- **Hallucinated TTPs**. LLM output mapping a behavior to a technique that the source material doesn't support. Always cite back to the source.
- **Context-free opportunities**. "Build a detection for Kerberoasting" with no reference to whether the org has the telemetry to observe it. Useful opportunities are environment-aware.
- **Indicator dumping**. Bulk-extracting IOCs from reports without deduplication, decay, or quality filtering. Drowns the SIEM in low-signal entries.
- **No source provenance**. Detection opportunities stored without a link back to the originating report, post-mortem, or assessment. They age into folklore.

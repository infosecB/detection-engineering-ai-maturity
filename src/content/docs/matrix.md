---
title: The Maturity Matrix
description: The full 10x4 maturity matrix for AI/LLM use in detection engineering.
tableOfContents: false
head:
  - tag: style
    content: |
      :root {
        --sl-content-width: 80rem;
      }
      .sl-markdown-content table {
        font-size: 0.8rem;
        table-layout: fixed;
        width: 100%;
      }
      .sl-markdown-content table th,
      .sl-markdown-content table td {
        width: 25%;
      }

      /* Mobile: stack each row vertically with level labels */
      @media (max-width: 768px) {
        /* Collapse table/tbody from layout entirely; rows become the visible boxes */
        .sl-markdown-content table,
        .sl-markdown-content table tbody {
          display: contents !important;
        }
        .sl-markdown-content table thead,
        .sl-markdown-content table thead tr,
        .sl-markdown-content table thead th {
          display: none !important;
        }
        .sl-markdown-content table tbody tr:nth-child(even) {
          background: transparent !important;
        }
        .sl-markdown-content table tr {
          display: block !important;
          width: 100% !important;
          border: 1px solid var(--sl-color-hairline) !important;
          margin: 1rem 0 1.25rem 0 !important;
          padding: 0 !important;
          background: transparent !important;
        }
        .sl-markdown-content table td {
          display: block !important;
          width: 100% !important;
          border: none !important;
          border-bottom: 1px solid var(--sl-color-hairline) !important;
          padding: 0.85rem 1rem !important;
          font-size: 0.95rem;
        }
        .sl-markdown-content table tr td:last-child {
          border-bottom: none !important;
        }
        .sl-markdown-content table td::before {
          display: block;
          font-weight: 600;
          color: var(--sl-color-accent-high);
          font-size: 0.7rem;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          margin-bottom: 0.35rem;
        }
        .sl-markdown-content table td:nth-child(1)::before { content: "L0: None"; }
        .sl-markdown-content table td:nth-child(2)::before { content: "L1: Experimental"; }
        .sl-markdown-content table td:nth-child(3)::before { content: "L2: Integrated"; }
        .sl-markdown-content table td:nth-child(4)::before { content: "L3: Autonomous"; }
      }
---

## Foundations

### Strategy & Governance

| L0: None | L1: Experimental | L2: Integrated | L3: Autonomous |
|---|---|---|---|
| No AI strategy for Detection Engineering. AI is either out of scope or actively prohibited pending policy. | Unofficial acceptance of individual AI use. No written policy, no leadership visibility, no risk acceptance. | Written AI usage policy in force: data-sensitivity tiers, approved models/vendors, escalation paths. Leadership sponsors a defined pilot scope. AI-specific risks (data egress, hallucination impact, model regression) are on the risk register. | AI is a funded line in the Detection Engineering roadmap with reported ROI. Model and vendor reviews are periodic. Governance forum reviews agent autonomy expansions. Policy is enforced by tooling, not just memo. |

### People & Skills

| L0: None | L1: Experimental | L2: Integrated | L3: Autonomous |
|---|---|---|---|
| No AI literacy expected or developed. No training. AI experience isn't a hiring criterion. | Individual self-teaching. A few engineers are heavy AI users. Most aren't. Skill is unevenly distributed and tribal. | Team-wide AI fluency baseline: prompt design, RAG behavior, oversight discipline. Reviewing AI output is a defined competency. Hiring assesses AI workflow experience. | Engineers design and tune agents, write quality control evals, and audit AI behavior. Oversight discipline is taught and measured. Career ladders include AI-native Detection Engineering roles distinct from "user of AI tools." |

### Tooling & Infrastructure

| L0: None | L1: Experimental | L2: Integrated | L3: Autonomous |
|---|---|---|---|
| Conventional Detection Engineering tooling only: SIEM consoles, detection-as-code repo, ticketing. No AI surface of any kind. | Public chatbots accessed in a browser. No IDE integration, no logging, no rate or cost controls, no shared configuration. | Sanctioned AI surface (IDE plugin, internal app, or MCP-enabled tools) with logging, observability, model selection, and cost/rate controls. Self-hosted or contracted SaaS with documented data-use terms. | Mature agentic infrastructure: orchestration, sandboxed tool execution, structured outputs, multi-model routing, cost/latency budgets, deep observability of agent decisions. |

### Data & Knowledge Management

| L0: None | L1: Experimental | L2: Integrated | L3: Autonomous |
|---|---|---|---|
| No AI-accessible knowledge corpus. Tribal knowledge lives in engineers' heads and scattered wikis. | Engineers paste snippets and reports into chatbots ad-hoc. No indexed corpus, no retrieval, no curation. | Maintained RAG corpora over the detection repo, log/schema docs, runbooks, and at least one Threat Intel feed. Corpora are owned, scheduled for refresh, and version-controlled. | Telemetry-as-context: agents query live data shapes, incident graphs, and threat-intel knowledge graphs. Prompt libraries, eval datasets, and rejected outputs are versioned, first-class assets. |

### Evaluation & QA

| L0: None | L1: Experimental | L2: Integrated | L3: Autonomous |
|---|---|---|---|
| No AI output to evaluate. | No formal evals. "Looks right to me" review at point of use. Wins and failures are anecdotal. | Golden datasets exist for the main AI use cases (rule authoring, Threat Intel extraction, triage). Regression suites run in CI. Hallucination, FP impact, and drift are tracked. | Continuous evals gate production deploys. Outcome-based metrics (post-deploy FP/TP, MTTD deltas) feed back into evals. Red-team eval suites cover prompt injection, jailbreaks, and policy bypass. |

### Security, Privacy & Safety

| L0: None | L1: Experimental | L2: Integrated | L3: Autonomous |
|---|---|---|---|
| Not applicable. No AI surface to secure. | No prompt-injection or data-egress controls. PII, secrets, customer data, and proprietary detection logic may leave the org via public chatbots. | Data-classification enforced at the AI surface: PII/secret redaction, allowed-source lists, model-routing based on sensitivity. Outputs validated against schema/policy before action. Model and provider SBOM tracked. | Prompt-injection defenses red-teamed on a schedule. Output validators block unsafe tool use and dangerous actions. Model supply chain monitored for regressions and provenance. AI-specific incident-response runbooks exercised. |

## Detection Lifecycle

### Detection Opportunity Ideation

| L0: None | L1: Experimental | L2: Integrated | L3: Autonomous |
|---|---|---|---|
| Manual ideation from Threat Intel reports, Incident Response post-mortems, red/purple team findings, and threat modeling exercises. Detection opportunities surface in heads and meetings. | Engineers paste reports, post-mortems, or assessment write-ups into a chatbot for ad-hoc summarization or IOC/TTP extraction. Output is unstructured and unverified. | Sanctioned tooling extracts detection opportunities from multiple input sources (Threat Intel, Incident Response post-mortems, red/purple team reports, threat models) into a normalized format. Opportunities are contextualized against the org's environment, telemetry, and prior coverage. | Agentic pipeline runs continuously: ingest from all sources, enrich, contextualize against org telemetry, propose prioritized detection opportunities based on coverage gaps and observed adversary activity. Opportunities are tied to observable evidence in-org and weighted by source confidence. |

### Detection Authoring

| L0: None | L1: Experimental | L2: Integrated | L3: Autonomous |
|---|---|---|---|
| Engineers hand-write all detections from scratch. No AI assistance. | Engineers paste threat reports into ChatGPT for ad-hoc rule drafts. No shared prompts, no eval, no schema awareness. Output quality varies wildly per engineer. | Shared AI assistant with RAG over the org's detection corpus, log schema, and style guide. Generated detections require human review before merge. Prompts and tool definitions are version-controlled and maintained in git. | Agents draft, test, and open PRs for detections from detection opportunity inputs. Humans approve PRs. They don't author them. Cross-platform translation (e.g., Sigma to KQL to SPL) is automated. Quality control gates block low-quality submissions. |

### Detection Testing & Validation

| L0: None | L1: Experimental | L2: Integrated | L3: Autonomous |
|---|---|---|---|
| Manual review if any. Mostly visual inspection of rules before deploy. | Engineers occasionally ask a chatbot for test ideas or sample log lines. No structured generation, no execution. | AI generates atomic-style tests aligned to each new detection. Tests execute in a validation environment as part of CI. FP rate is estimated against a sample of historical telemetry before merge. | Agents predict FP rate against full historical telemetry, generate adversary-emulation scenarios mapped to MITRE techniques, and gate PRs on validation outcomes. Failed validations become new evals automatically. |

### Tuning, Coverage & Continuous Improvement

| L0: None | L1: Experimental | L2: Integrated | L3: Autonomous |
|---|---|---|---|
| Manual tuning, reactive and ticket-driven. MITRE mapping is sparse or absent. | Engineers ask chatbots for tuning ideas case-by-case. No systematic loop, no coverage view. | AI assists with FP root-cause analysis and recommends tuning changes. Coverage maps (MITRE, crown-jewel) are AI-maintained and reviewed. Recommendations require human approval. | Continuous AI-driven tuning, coverage-gap analysis, and prioritization. Post-deploy outcomes feed agent learning. Detection portfolio health (coverage, FP-rate, age, ownership) is reported automatically to leadership. |
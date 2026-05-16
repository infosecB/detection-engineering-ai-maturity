# Detection Engineering AI Maturity Framework

A community framework for assessing how organizations apply AI and large language models across a detection engineering program, from the involved people, processes, and technology to detection ideation, authoring, testing, tuning, and continuous improvement.

> Inspired by and complementary to:
>
> - [**Detection Engineering Maturity Matrix**](https://detectionengineering.io) by Kyle Bailey
> - [**Threat Detection Maturity Framework**](https://github.com/haidermdost/Threat-Detection-Maturity-Framework) by Haider Dost
>
> Where These frameworks assess the maturity of the overall detection program, this framework focuses specifically on the AI/LLM dimension of that program.

## Framework Overview

Four maturity levels across ten dimensions (six Foundations plus four Detection Lifecycle).

### Levels

| | Name | Defining trait |
|---|---|---|
| **L0** | None | No AI/LLM use in detection engineering. |
| **L1** | Experimental | Ad-hoc individual use of public chatbots. No governance, no shared tooling, no evaluation. |
| **L2** | Integrated | AI is embedded in team workflows with shared tooling, org-context RAG, policy, and human-in-the-loop review. |
| **L3** | Autonomous | Agentic systems propose, test, and ship detections under guardrails with measurable ROI and continuous quality control. |

### Dimensions

**Foundations**: Strategy & Governance, People & Skills, Tooling & Infrastructure, Data & Knowledge, Evaluation & QA, Security, Privacy & Safety.

**Detection Lifecycle**: Detection Opportunity Ideation, Detection Authoring, Detection Testing & Validation, Tuning, Coverage & Continuous Improvement.

See the [full matrix](src/content/docs/matrix.md) for level-by-level criteria.

## Tech Stack

The site is built with [Astro](https://astro.build) and [Starlight](https://starlight.astro.build). Content lives as markdown in `src/content/docs/`. The published site is deployed to GitHub Pages via the workflow in `.github/workflows/deploy.yml`.

```
.
├── astro.config.mjs              # Astro + Starlight config (nav, theme, base path)
├── package.json
├── tsconfig.json
├── public/
│   └── assets/matrix.csv         # Machine-readable mirror of the matrix
├── src/
│   ├── styles/custom.css         # Table tweaks
│   └── content/docs/
│       ├── index.md              # Landing page
│       ├── matrix.md             # The full 10x4 matrix
│       ├── levels.md             # L0 to L3 in depth
│       ├── self-assessment.md
│       ├── references.md
│       └── dimensions/           # 10 per-dimension pages + index
└── .github/workflows/deploy.yml  # Deploys to GitHub Pages on push to main
```

## Local Development

Requires Node 20+.

```bash
npm install
npm run dev      # http://localhost:4321/detection-engineering-ai-maturity/
npm run build    # writes static site to ./dist
npm run preview  # serve the built site locally
```

## Contributing

Contributions welcome. See [Contributing](https://github.com/infosecB/detection-engineering-ai-maturity/blob/main/CONTRIBUTING.md). This framework is vendor-neutral. PRs referencing specific products will be asked to generalize.

## License

[CC BY-SA 4.0](LICENSE).

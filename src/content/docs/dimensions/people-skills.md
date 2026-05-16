---
title: People & Skills
description: AI literacy of the Detection Engineering team, prompt design, oversight discipline, hiring criteria, and career paths.
---

## What it covers

AI literacy of the detection engineering team: prompt design, retrieval behavior, oversight discipline, evaluation thinking, and (at higher levels) the ability to design and tune agents and evals. Also covers hiring criteria and career paths.

## Why it matters for AI in Detection Engineering

Detection engineers are the humans in the loop. The quality of AI-authored or AI-tuned detections is bounded by the engineer's ability to recognize when an output is wrong, subtly biased toward a common-case pattern, or hallucinating a field that doesn't exist in your schema. Without that skill on the team, the AI surface produces convincing-looking detections that fail silently in production.

This dimension distinguishes between *using AI tools* and *operating an AI-augmented detection program*. The latter is a different role.

## Level descriptors

- **L0: None**. No AI literacy expected or developed. No training. AI experience isn't a hiring criterion.
- **L1: Experimental**. Individual self-teaching. A few engineers are heavy AI users. Most aren't. Skill is unevenly distributed and tribal.
- **L2: Integrated**. Team-wide AI fluency baseline: prompt design, RAG behavior, oversight discipline. Reviewing AI output is a defined competency. Hiring assesses AI workflow experience.
- **L3: Autonomous**. Engineers design and tune agents, write quality control evals, and audit AI behavior. Oversight discipline is taught and measured. Career ladders include AI-native Detection Engineering roles distinct from "user of AI tools."

## Anti-patterns

- **Tool training, not skill training**. A vendor training on "how to use the chatbot" doesn't build the judgment to spot a hallucinated log field.
- **Heroes over baseline**. Relying on two senior engineers who "get AI" instead of leveling up the team. Bus factor and quality both suffer.
- **No review rubric**. Asking engineers to "review AI output" without a written rubric for what to check produces inconsistent rejection thresholds.
- **AI literacy without Detection Engineering literacy**. A prompt expert who doesn't know the org's log schema will ship plausible nonsense.

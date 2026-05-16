import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";

export default defineConfig({
  site: "https://infosecb.github.io",
  base: "/detection-engineering-ai-maturity",
  integrations: [
    starlight({
      title: "Detection Engineering AI Maturity Framework",
      description:
        "A community framework for assessing AI/LLM use across a detection engineering program.",
      social: [
        {
          icon: "github",
          label: "GitHub",
          href: "https://github.com/infosecb/detection-engineering-ai-maturity",
        },
      ],
      editLink: {
        baseUrl:
          "https://github.com/infosecb/detection-engineering-ai-maturity/edit/main/",
      },
      lastUpdated: true,
      tableOfContents: { minHeadingLevel: 2, maxHeadingLevel: 4 },
      sidebar: [
        { label: "Home", link: "/" },
        { label: "The Matrix", link: "/matrix/" },
        { label: "Maturity Levels", link: "/levels/" },
        {
          label: "Dimensions",
          items: [
            { label: "Overview", link: "/dimensions/" },
            {
              label: "Foundations",
              collapsed: false,
              items: [
                { label: "Strategy & Governance", link: "/dimensions/strategy-governance/" },
                { label: "People & Skills", link: "/dimensions/people-skills/" },
                { label: "Tooling & Infrastructure", link: "/dimensions/tooling-infrastructure/" },
                { label: "Data & Knowledge", link: "/dimensions/data-knowledge/" },
                { label: "Evaluation & QA", link: "/dimensions/evaluation-qa/" },
                { label: "Security, Privacy & Safety", link: "/dimensions/security-privacy-safety/" },
              ],
            },
            {
              label: "Detection Lifecycle",
              collapsed: false,
              items: [
                { label: "Detection Opportunity Ideation", link: "/dimensions/detection-ideation/" },
                { label: "Detection Authoring", link: "/dimensions/detection-authoring/" },
                { label: "Detection Testing & Validation", link: "/dimensions/detection-testing/" },
                { label: "Tuning, Coverage & Continuous Improvement", link: "/dimensions/tuning-coverage/" },
              ],
            },
          ],
        },
        { label: "Self-Assessment", link: "/self-assessment/" },
        { label: "References", link: "/references/" },
      ],
      customCss: ["./src/styles/custom.css"],
    }),
  ],
});

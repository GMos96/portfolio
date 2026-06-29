import type { FocusItem } from "./types";

// What I'm focused on right now — surfaced on the homepage. Edit freely.
export const currentFocus: FocusItem[] = [
  {
    label: "Building",
    title: "Vault",
    description:
      "Leading two teams on a document vectorization platform for Lexis+ Protege — splitting the monolith into microservices behind a BFF microfrontend, modernizing Angular 12 → 20 via Module Federation, and an auto-scaling job pipeline (35% lower cost, 40% more throughput).",
  },
  {
    label: "Learning",
    title: "AI / LLM engineering",
    description:
      "Sharpening multi-modal AI workflow design across multiple LLMs — retrieval, vectorization, and enterprise-scale document processing for 50K+ users.",
  },
  {
    label: "Exploring",
    title: "AI agents & tooling",
    description:
      "Agentic developer workflows built on LLMs and the tooling around them — this portfolio's own build process being a small example.",
  },
];

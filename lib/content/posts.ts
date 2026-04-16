import {
  aiHardwareBottlenecks,
  aiChipsTimeline,
  globalHardwareRegions,
  hardwareStackCore,
  openVsClosedComparison,
} from "@/lib/content";
import { aiHardwareExplainedVisually } from "@/lib/content/ai-hardware-post";
import { VisualPost } from "@/lib/types";

const placeholderPosts: VisualPost[] = [
  {
    slug: "ai-chips-over-time",
    title: "AI Chips Over Time",
    subtitle: "From GPU repurposing to specialized accelerators",
    description:
      "A timeline-driven essay tracing how AI hardware architectures evolved.",
    date: "",
    tags: ["History", "Compute", "Roadmaps"],
    heroSummary:
      "A visual chronology of the hardware shifts behind AI capability growth.",
    intro: "Planned post.",
    status: "comingSoon",
    sections: [
      {
        id: "timeline-preview",
        type: "timeline",
        title: "Hardware progression timeline",
        intro: "Previewing the reusable timeline module.",
        dataKey: "aiChipsTimeline",
      },
    ],
  },
  {
    slug: "the-cost-of-a-prompt",
    title: "The Cost of a Prompt",
    subtitle: "Economics from token to data center",
    description:
      "A breakdown of energy, hardware amortization, and serving tradeoffs per AI request.",
    date: "",
    tags: ["Economics", "Inference", "Ops"],
    heroSummary:
      "What one prompt costs across silicon, electricity, and infrastructure.",
    intro: "Planned post.",
    status: "comingSoon",
    sections: [
      {
        id: "cost-bottlenecks",
        type: "bottleneckFlow",
        title: "Inference bottleneck chain",
        dataKey: "aiHardwareBottlenecks",
      },
    ],
  },
  {
    slug: "open-vs-closed-ai-ecosystems",
    title: "Open vs Closed AI Ecosystems",
    subtitle: "Strategic tradeoffs in model distribution",
    description:
      "A comparison-grid essay on ecosystem design choices and market outcomes.",
    date: "",
    tags: ["Strategy", "Ecosystems", "Governance"],
    heroSummary:
      "A visual comparison of open and closed AI ecosystem trajectories.",
    intro: "Planned post.",
    status: "comingSoon",
    sections: [
      {
        id: "ecosystem-grid",
        type: "comparisonGrid",
        title: "Operating model tradeoffs",
        dataKey: "openVsClosedComparison",
      },
    ],
  },
];

export const posts: VisualPost[] = [
  aiHardwareExplainedVisually,
  ...placeholderPosts,
];

export const postDatasets = {
  hardwareStackCore,
  globalHardwareRegions,
  aiHardwareBottlenecks,
  aiChipsTimeline,
  openVsClosedComparison,
} as const;

export type DatasetKey = keyof typeof postDatasets;

export function getAllPosts() {
  return posts.slice().sort((a, b) => {
    const aTime = a.date ? new Date(a.date).getTime() : 0;
    const bTime = b.date ? new Date(b.date).getTime() : 0;
    return bTime - aTime;
  });
}

export function getPostBySlug(slug: string) {
  return posts.find((post) => post.slug === slug);
}

export function getPublishedPosts() {
  return posts.filter((post) => post.status === "published");
}

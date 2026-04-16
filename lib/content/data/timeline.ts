import { TimelineEvent } from "@/lib/types";

export const aiChipsTimeline: TimelineEvent[] = [
  {
    id: "2012",
    year: "2012",
    title: "Deep learning training shifts to GPUs",
    summary: "ImageNet breakthroughs make GPU-accelerated neural networks mainstream.",
    metric: "From niche to default training stack",
  },
  {
    id: "2017",
    year: "2017",
    title: "Transformer era increases hardware intensity",
    summary: "Attention-based models increase total training compute demand.",
    metric: "Scaling curves steepen",
  },
  {
    id: "2020",
    year: "2020",
    title: "Cloud-scale AI clusters become core moat",
    summary: "Model frontier progression aligns with cluster scale and orchestration sophistication.",
    metric: "Clusters move into 10k+ accelerator class",
  },
  {
    id: "2024",
    year: "2024",
    title: "Memory and packaging constraints surface",
    summary: "HBM and advanced packaging capacity become top practical bottlenecks.",
    metric: "Supply chain now sets release cadence",
  },
];

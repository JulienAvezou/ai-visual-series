import { VisualPost } from "@/lib/types";

export const aiHardwareExplainedVisually: VisualPost = {
  slug: "ai-hardware-explained-visually",
  title: "AI Hardware, Explained Visually",
  subtitle: "How global physical constraints now shape AI progress",
  description:
    "A visual essay on the compute, memory, fabrication, networking, and energy systems behind modern AI.",
  date: "2026-04-15",
  tags: ["Infrastructure", "Semiconductors", "Supply Chain", "AI Systems"],
  heroSummary:
    "Modern AI scaling is no longer just an algorithm story. It is a systems story across chips, memory, power, and geopolitical supply chains.",
  intro:
    "This essay walks through the stack from silicon to grid, then maps where bottlenecks now define the pace of AI progress.",
  status: "published",
  sections: [
    {
      id: "physical-stack",
      type: "prose",
      eyebrow: "Foundation",
      title: "AI is now a global physical stack",
      paragraphs: [
        "Modern AI performance does not emerge from software alone. Every capability jump now rides on physical systems: accelerator supply, memory bandwidth, advanced packaging, network fabrics, and data center power delivery.",
        "As model demand accelerates, the constraint moves from algorithms to throughput across the entire stack. The question is no longer only how big a model can be, but whether enough hardware and infrastructure can be assembled, synchronized, and cooled in time.",
      ],
    },
    {
      id: "hardware-stack",
      type: "hardwareStack",
      eyebrow: "Visualization",
      title: "The AI hardware stack",
      intro:
        "Select each layer to see what it does, why it matters, and where bottlenecks form.",
      dataKey: "hardwareStackCore",
    },
    {
      id: "supply-chain",
      type: "worldMap",
      eyebrow: "Visualization",
      title: "Global supply chain and chokepoints",
      intro:
        "Filter by capability or switch to chokepoint mode to reveal concentration risk.",
      dataKey: "globalHardwareRegions",
    },
    {
      id: "bottleneck-flow",
      type: "bottleneckFlow",
      eyebrow: "Visualization",
      title: "Where scaling gets blocked",
      intro: "Compare bottleneck severity between training and inference workloads.",
      dataKey: "aiHardwareBottlenecks",
    },
    {
      id: "systems-thesis",
      type: "prose",
      eyebrow: "Conclusion",
      title: "Scaling AI is now systems engineering",
      paragraphs: [
        "The leading edge of AI is constrained by coordinated throughput across compute, memory, packaging, networking, and energy. Improvements in one layer are often neutralized by drag in another.",
        "That shifts competitive advantage toward organizations that can orchestrate the full system: securing scarce components, integrating globally distributed supply chains, and operating power-dense infrastructure with high reliability.",
      ],
    },
    {
      id: "closing-callout",
      type: "callout",
      tone: "insight",
      heading: "Key takeaway",
      body: "AI scaling has become a bottleneck orchestration problem. The winners are not only those with better models, but those with better systems capacity.",
    },
  ],
};

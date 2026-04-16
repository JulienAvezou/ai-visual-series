import { ComparisonRow } from "@/lib/types";

export const openVsClosedComparison: ComparisonRow[] = [
  {
    id: "stack",
    dimension: "Infrastructure model",
    openModel: "Distributed contribution and heterogeneous deployment",
    closedModel: "Tight vertical integration around owned stack",
    implication: "Open ecosystems iterate broadly; closed systems optimize deeply.",
  },
  {
    id: "economics",
    dimension: "Unit economics",
    openModel: "Lower switching cost, variable quality",
    closedModel: "Higher lock-in, potentially better consistency",
    implication: "Buyer strategy depends on risk tolerance and control needs.",
  },
  {
    id: "velocity",
    dimension: "Release velocity",
    openModel: "Rapid model experimentation across the community",
    closedModel: "Coordinated productized launches",
    implication: "Different operating models produce different innovation rhythms.",
  },
];

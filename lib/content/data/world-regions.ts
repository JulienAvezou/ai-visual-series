import { WorldRegion } from "@/lib/types";

export const globalHardwareRegions: WorldRegion[] = [
  {
    id: "united-states",
    name: "United States",
    longitude: -98.5,
    latitude: 39.8,
    capabilities: ["design", "deployment", "backend"],
    chokepointWeight: 4,
    detail: {
      headline: "Design and hyperscale deployment anchor",
      summary:
        "Leads in chip architecture, cloud deployment, and platform integration for frontier model training.",
      strengths: ["GPU and ASIC design", "Hyperscale data center demand", "Cloud AI software stack"],
      risk: "Power interconnection timelines are becoming a scaling governor.",
    },
  },
  {
    id: "taiwan",
    name: "Taiwan",
    longitude: 121.0,
    latitude: 23.7,
    capabilities: ["fabrication", "backend"],
    chokepointWeight: 5,
    detail: {
      headline: "Leading-edge fabrication chokepoint",
      summary:
        "Hosts critical advanced logic production capacity for most top-tier AI accelerators.",
      strengths: ["Leading process nodes", "High-yield manufacturing", "Deep supplier ecosystems"],
      risk: "Geopolitical or natural disruptions could cascade through global AI supply.",
    },
  },
  {
    id: "south-korea",
    name: "South Korea",
    longitude: 127.9,
    latitude: 36.2,
    capabilities: ["memory", "fabrication"],
    chokepointWeight: 5,
    detail: {
      headline: "Memory dominance for AI-era bandwidth",
      summary:
        "Major HBM capacity sits with Korean suppliers central to accelerator performance.",
      strengths: ["HBM roadmaps", "Memory manufacturing scale", "Packaging integration momentum"],
      risk: "HBM ramp delays ripple directly into GPU shipment schedules.",
    },
  },
  {
    id: "netherlands",
    name: "Netherlands",
    longitude: 5.3876,
    latitude: 52.1562,
    capabilities: ["lithography"],
    chokepointWeight: 5,
    detail: {
      headline: "Lithography equipment concentration",
      summary:
        "Critical EUV lithography equipment originates from a narrow supplier base.",
      strengths: ["EUV platform leadership", "Process roadmap influence"],
      risk: "Tool delivery bottlenecks can bottleneck node migrations globally.",
    },
  },
  {
    id: "japan",
    name: "Japan",
    longitude: 138.3,
    latitude: 36.2,
    capabilities: ["materials", "lithography", "backend"],
    chokepointWeight: 4,
    detail: {
      headline: "Materials and precision equipment backbone",
      summary:
        "Supplies high-purity materials and specialized tooling needed for semiconductor yield.",
      strengths: ["Photoresists and chemicals", "Precision manufacturing equipment"],
      risk: "Material supply tightness can constrain fab utilization.",
    },
  },
  {
    id: "china",
    name: "China",
    longitude: 104.2,
    latitude: 35.9,
    capabilities: ["deployment", "backend", "materials"],
    chokepointWeight: 3,
    detail: {
      headline: "Scale in deployment and electronics assembly",
      summary:
        "Large domestic deployment and electronics supply-chain depth remain significant.",
      strengths: ["Electronics manufacturing scale", "Large domestic AI demand"],
      risk: "Export controls and policy shifts increase architectural uncertainty.",
    },
  },
  {
    id: "southeast-asia",
    name: "Southeast Asia",
    longitude: 106.0,
    latitude: 10.0,
    capabilities: ["backend", "deployment", "materials"],
    chokepointWeight: 3,
    detail: {
      headline: "Backend assembly and test hub",
      summary:
        "Regional OSAT and electronics assembly ecosystems support global chip finishing.",
      strengths: ["Assembly and test capacity", "Manufacturing diversification"],
      risk: "Climate and logistics disruptions can create intermittent throughput shocks.",
    },
  },
  {
    id: "europe",
    name: "Europe",
    longitude: 12.0,
    latitude: 50.0,
    capabilities: ["deployment", "materials", "design"],
    chokepointWeight: 2,
    detail: {
      headline: "Research, equipment, and sovereign deployment",
      summary:
        "Contributes to R&D, industrial hardware, and regional compute infrastructure rollout.",
      strengths: ["Research institutions", "Industrial AI deployment", "Equipment suppliers"],
      risk: "Fragmented market execution can slow scaling compared with hyperscale regions.",
    },
  },
];

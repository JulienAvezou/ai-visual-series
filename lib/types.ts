export type PostStatus = "published" | "draft" | "comingSoon";

export type SectionType =
  | "prose"
  | "hardwareStack"
  | "worldMap"
  | "bottleneckFlow"
  | "timeline"
  | "comparisonGrid"
  | "callout";

export type CapabilityFilter =
  | "design"
  | "fabrication"
  | "memory"
  | "lithography"
  | "materials"
  | "backend"
  | "deployment";

export interface BaseSection {
  id: string;
  type: SectionType;
  title?: string;
  eyebrow?: string;
}

export interface ProseSectionData extends BaseSection {
  type: "prose";
  paragraphs: string[];
}

export interface CalloutSectionData extends BaseSection {
  type: "callout";
  tone: "insight" | "warning" | "neutral";
  heading: string;
  body: string;
}

export interface HardwareStackSectionData extends BaseSection {
  type: "hardwareStack";
  intro?: string;
  dataKey: "hardwareStackCore";
}

export interface WorldMapSectionData extends BaseSection {
  type: "worldMap";
  intro?: string;
  dataKey: "globalHardwareRegions";
}

export interface BottleneckFlowSectionData extends BaseSection {
  type: "bottleneckFlow";
  intro?: string;
  dataKey: "aiHardwareBottlenecks";
}

export interface TimelineSectionData extends BaseSection {
  type: "timeline";
  intro?: string;
  dataKey: "aiChipsTimeline";
}

export interface ComparisonGridSectionData extends BaseSection {
  type: "comparisonGrid";
  intro?: string;
  dataKey: "openVsClosedComparison";
}

export type PostSection =
  | ProseSectionData
  | CalloutSectionData
  | HardwareStackSectionData
  | WorldMapSectionData
  | BottleneckFlowSectionData
  | TimelineSectionData
  | ComparisonGridSectionData;

export interface VisualPost {
  slug: string;
  title: string;
  subtitle: string;
  description: string;
  date: string;
  tags: string[];
  heroSummary: string;
  intro: string;
  status: PostStatus;
  sections: PostSection[];
}

export interface HardwareLayer {
  id: string;
  label: string;
  shortLabel?: string;
  what: string;
  why: string;
  keyFact: string;
  bottleneckInsight: string;
}

export interface RegionDetail {
  headline: string;
  summary: string;
  strengths: string[];
  risk: string;
}

export interface WorldRegion {
  id: string;
  name: string;
  longitude: number;
  latitude: number;
  capabilities: CapabilityFilter[];
  chokepointWeight: number;
  detail: RegionDetail;
}

export interface BottleneckStage {
  id: string;
  label: string;
  trainingSeverity: number;
  inferenceSeverity: number;
  fact: string;
  why: string;
  insight: string;
}

export interface TimelineEvent {
  id: string;
  year: string;
  title: string;
  summary: string;
  metric?: string;
}

export interface ComparisonRow {
  id: string;
  dimension: string;
  openModel: string;
  closedModel: string;
  implication: string;
}

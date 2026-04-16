import { postDatasets } from "@/lib/content/posts";
import { PostSection } from "@/lib/types";

import { BottleneckFlowChart } from "@/components/visualizations/bottleneck-flow-chart";
import { ComparisonGrid } from "@/components/visualizations/comparison-grid";
import { HardwareStackDiagram } from "@/components/visualizations/hardware-stack-diagram";
import { InteractiveWorldMap } from "@/components/visualizations/interactive-world-map";
import { TimelineVisualizer } from "@/components/visualizations/timeline-visualizer";

import { CalloutCard } from "./callout-card";
import { ProseSection } from "./prose-section";
import { VisualizationShell } from "./visualization-shell";

interface SectionRendererProps {
  section: PostSection;
}

export function SectionRenderer({ section }: SectionRendererProps) {
  switch (section.type) {
    case "prose": {
      return (
        <div id={section.id} className="scroll-mt-24">
          <ProseSection eyebrow={section.eyebrow} title={section.title} paragraphs={section.paragraphs} />
        </div>
      );
    }

    case "callout": {
      return (
        <div id={section.id} className="scroll-mt-24">
          <CalloutCard tone={section.tone} heading={section.heading} body={section.body} />
        </div>
      );
    }

    case "hardwareStack": {
      const data = postDatasets[section.dataKey];
      return (
        <VisualizationShell
          id={section.id}
          eyebrow={section.eyebrow}
          title={section.title}
          intro={section.intro}
        >
          <HardwareStackDiagram layers={data} />
        </VisualizationShell>
      );
    }

    case "worldMap": {
      const data = postDatasets[section.dataKey];
      return (
        <VisualizationShell
          id={section.id}
          eyebrow={section.eyebrow}
          title={section.title}
          intro={section.intro}
        >
          <InteractiveWorldMap regions={data} />
        </VisualizationShell>
      );
    }

    case "bottleneckFlow": {
      const data = postDatasets[section.dataKey];
      return (
        <VisualizationShell
          id={section.id}
          eyebrow={section.eyebrow}
          title={section.title}
          intro={section.intro}
        >
          <BottleneckFlowChart stages={data} />
        </VisualizationShell>
      );
    }

    case "timeline": {
      const data = postDatasets[section.dataKey];
      return (
        <VisualizationShell
          id={section.id}
          eyebrow={section.eyebrow}
          title={section.title}
          intro={section.intro}
        >
          <TimelineVisualizer events={data} />
        </VisualizationShell>
      );
    }

    case "comparisonGrid": {
      const data = postDatasets[section.dataKey];
      return (
        <VisualizationShell
          id={section.id}
          eyebrow={section.eyebrow}
          title={section.title}
          intro={section.intro}
        >
          <ComparisonGrid rows={data} />
        </VisualizationShell>
      );
    }

    default: {
      return null;
    }
  }
}

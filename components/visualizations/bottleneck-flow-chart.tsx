"use client";

import { useMemo, useState } from "react";
import { motion } from "framer-motion";

import { BottleneckStage } from "@/lib/types";

type Workload = "training" | "inference";

interface BottleneckFlowChartProps {
  stages: BottleneckStage[];
}

function severityTheme(value: number) {
  if (value >= 5) {
    return {
      label: "Critical",
      bar: "bg-red-400",
      text: "text-red-200",
      activeCard: "border-red-400/60 bg-red-500/10",
      detailBorder: "border-red-400/35",
    };
  }
  if (value >= 4) {
    return {
      label: "High",
      bar: "bg-orange-400",
      text: "text-orange-200",
      activeCard: "border-orange-400/60 bg-orange-500/10",
      detailBorder: "border-orange-400/35",
    };
  }
  if (value >= 3) {
    return {
      label: "Medium",
      bar: "bg-yellow-300",
      text: "text-yellow-200",
      activeCard: "border-yellow-300/60 bg-yellow-400/10",
      detailBorder: "border-yellow-300/35",
    };
  }
  return {
    label: "Low",
    bar: "bg-emerald-300",
    text: "text-emerald-200",
    activeCard: "border-emerald-300/60 bg-emerald-400/10",
    detailBorder: "border-emerald-300/35",
  };
}

export function BottleneckFlowChart({ stages }: BottleneckFlowChartProps) {
  const [workload, setWorkload] = useState<Workload>("training");
  const [activeId, setActiveId] = useState(stages[0]?.id);

  const activeStage = useMemo(
    () => stages.find((stage) => stage.id === activeId) ?? stages[0],
    [activeId, stages],
  );
  const activeSeverity = activeStage
    ? workload === "training"
      ? activeStage.trainingSeverity
      : activeStage.inferenceSeverity
    : 0;
  const activeTheme = severityTheme(activeSeverity);

  return (
    <div className="space-y-6">
      <div className="flex flex-wrap items-center gap-2">
        <button
          type="button"
          onClick={() => setWorkload("training")}
          className={`rounded-full border px-3 py-1.5 text-xs uppercase tracking-[0.14em] ${
            workload === "training"
              ? "border-accent-300/40 bg-accent-400/15 text-accent-100"
              : "border-ink-600/80 bg-ink-700/50 text-ink-200"
          }`}
        >
          Training
        </button>
        <button
          type="button"
          onClick={() => setWorkload("inference")}
          className={`rounded-full border px-3 py-1.5 text-xs uppercase tracking-[0.14em] ${
            workload === "inference"
              ? "border-accent-300/40 bg-accent-400/15 text-accent-100"
              : "border-ink-600/80 bg-ink-700/50 text-ink-200"
          }`}
        >
          Inference
        </button>
      </div>

      <div className="flex flex-wrap gap-2 text-xs">
        {[
          { label: "Critical", className: "border-red-400/50 bg-red-500/10 text-red-200" },
          { label: "High", className: "border-orange-400/50 bg-orange-500/10 text-orange-200" },
          { label: "Medium", className: "border-yellow-300/50 bg-yellow-400/10 text-yellow-200" },
          { label: "Low", className: "border-emerald-300/50 bg-emerald-400/10 text-emerald-200" },
        ].map((entry) => (
          <span key={entry.label} className={`rounded-full border px-3 py-1 ${entry.className}`}>
            {entry.label}
          </span>
        ))}
      </div>

      <div className="grid gap-3 md:grid-cols-6">
        {stages.map((stage, index) => {
          const severity = workload === "training" ? stage.trainingSeverity : stage.inferenceSeverity;
          const active = stage.id === activeStage?.id;
          const theme = severityTheme(severity);

          return (
            <motion.button
              type="button"
              key={stage.id}
              onMouseEnter={() => setActiveId(stage.id)}
              onFocus={() => setActiveId(stage.id)}
              onClick={() => setActiveId(stage.id)}
              className={`rounded-xl border p-3 text-left transition ${
                active
                  ? theme.activeCard
                  : "border-ink-600/80 bg-ink-700/60 hover:border-ink-500"
              }`}
            >
              <p className="text-xs uppercase tracking-[0.14em] text-ink-300">Stage {index + 1}</p>
              <p className="mt-1 text-sm font-medium text-ink-100">{stage.label}</p>
              <div className="mt-3 h-2 rounded-full bg-ink-700">
                <motion.div
                  className={`h-2 rounded-full ${theme.bar}`}
                  animate={{ width: `${(severity / 5) * 100}%` }}
                  transition={{ duration: 0.35 }}
                />
              </div>
              <p className={`mt-2 text-xs ${theme.text}`}>{theme.label}</p>
            </motion.button>
          );
        })}
      </div>

      {activeStage ? (
        <motion.div
          key={`${workload}-${activeStage.id}`}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className={`surface border p-5 ${activeTheme.detailBorder}`}
        >
          <h3 className="font-display text-2xl text-ink-50">{activeStage.label}</h3>
          <dl className="mt-4 grid gap-4 text-sm leading-7 text-ink-100/90 md:grid-cols-3">
            <div>
              <dt className="text-xs uppercase tracking-[0.14em] text-ink-300">Fact</dt>
              <dd>{activeStage.fact}</dd>
            </div>
            <div>
              <dt className="text-xs uppercase tracking-[0.14em] text-ink-300">Why it matters</dt>
              <dd>{activeStage.why}</dd>
            </div>
            <div>
              <dt className="text-xs uppercase tracking-[0.14em] text-ink-300">Insight</dt>
              <dd>{activeStage.insight}</dd>
            </div>
          </dl>
        </motion.div>
      ) : null}
    </div>
  );
}

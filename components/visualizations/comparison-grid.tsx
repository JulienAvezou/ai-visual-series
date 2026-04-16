"use client";

import { useMemo, useState } from "react";

import { ComparisonRow } from "@/lib/types";

type Focus = "implication" | "open" | "closed";

interface ComparisonGridProps {
  rows: ComparisonRow[];
}

export function ComparisonGrid({ rows }: ComparisonGridProps) {
  const [focus, setFocus] = useState<Focus>("implication");

  const orderedRows = useMemo(() => {
    if (focus === "implication") {
      return rows;
    }
    return [...rows].sort((a, b) =>
      focus === "open"
        ? a.openModel.localeCompare(b.openModel)
        : a.closedModel.localeCompare(b.closedModel),
    );
  }, [focus, rows]);

  return (
    <div className="space-y-4">
      <div className="flex flex-wrap gap-2">
        {([
          ["implication", "Strategic view"],
          ["open", "Open-first view"],
          ["closed", "Closed-first view"],
        ] as const).map(([value, label]) => (
          <button
            key={value}
            type="button"
            onClick={() => setFocus(value)}
            className={`rounded-full border px-3 py-1.5 text-xs uppercase tracking-[0.14em] ${
              focus === value
                ? "border-accent-300/40 bg-accent-400/12 text-accent-100"
                : "border-ink-600/80 bg-ink-700/50 text-ink-200"
            }`}
          >
            {label}
          </button>
        ))}
      </div>

      <div className="overflow-hidden rounded-xl border border-ink-700/70">
        <table className="w-full text-left">
          <thead className="bg-ink-800/85 text-xs uppercase tracking-[0.16em] text-ink-300">
            <tr>
              <th className="px-4 py-3">Dimension</th>
              <th className="px-4 py-3">Open</th>
              <th className="px-4 py-3">Closed</th>
              <th className="px-4 py-3">Implication</th>
            </tr>
          </thead>
          <tbody>
            {orderedRows.map((row) => (
              <tr key={row.id} className="border-t border-ink-700/70 bg-ink-800/55 text-sm text-ink-100/90">
                <td className="px-4 py-3 font-medium text-ink-50">{row.dimension}</td>
                <td className="px-4 py-3">{row.openModel}</td>
                <td className="px-4 py-3">{row.closedModel}</td>
                <td className="px-4 py-3">{row.implication}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

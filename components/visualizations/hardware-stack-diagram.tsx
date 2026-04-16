"use client";

import { useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

import { HardwareLayer } from "@/lib/types";

interface HardwareStackDiagramProps {
  layers: HardwareLayer[];
}

export function HardwareStackDiagram({ layers }: HardwareStackDiagramProps) {
  const [selectedId, setSelectedId] = useState(layers[0]?.id);

  const selectedLayer = useMemo(
    () => layers.find((layer) => layer.id === selectedId) ?? layers[0],
    [layers, selectedId],
  );

  return (
    <div className="grid gap-6 lg:grid-cols-[minmax(0,1fr)_minmax(280px,360px)]">
      <div className="relative">
        <div className="pointer-events-none absolute left-5 top-6 h-[calc(100%-3rem)] w-px bg-gradient-to-b from-accent-300/0 via-accent-300/45 to-accent-300/0" />

        <div className="space-y-3">
          {layers.map((layer) => {
            const active = selectedLayer?.id === layer.id;
            return (
              <motion.button
                type="button"
                key={layer.id}
                layout
                onClick={() => setSelectedId(layer.id)}
                className={`relative flex w-full items-center justify-between rounded-xl border px-5 py-4 text-left transition ${
                  active
                    ? "border-accent-300/60 bg-accent-400/15 shadow-glow"
                    : "border-ink-600/80 bg-ink-800/70 hover:border-ink-500"
                }`}
              >
                <div className="flex items-center gap-4">
                  <span
                    className={`inline-flex h-5 w-5 rounded-full border ${
                      active ? "border-accent-200 bg-accent-200" : "border-ink-500"
                    }`}
                  />
                  <span className="text-sm font-medium text-ink-100 md:text-base">{layer.label}</span>
                </div>
                <span className="text-xs uppercase tracking-[0.16em] text-ink-300">Layer</span>
              </motion.button>
            );
          })}
        </div>
      </div>

      <div className="surface border border-ink-600/80 p-5">
        <AnimatePresence mode="wait">
          {selectedLayer ? (
            <motion.div
              key={selectedLayer.id}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.3 }}
            >
              <h3 className="font-display text-2xl text-ink-50">{selectedLayer.label}</h3>
              <dl className="mt-4 space-y-4 text-sm leading-7 text-ink-100/90">
                <div>
                  <dt className="text-xs uppercase tracking-[0.14em] text-ink-300">What it is</dt>
                  <dd>{selectedLayer.what}</dd>
                </div>
                <div>
                  <dt className="text-xs uppercase tracking-[0.14em] text-ink-300">Why it matters</dt>
                  <dd>{selectedLayer.why}</dd>
                </div>
                <div>
                  <dt className="text-xs uppercase tracking-[0.14em] text-ink-300">Key fact</dt>
                  <dd>{selectedLayer.keyFact}</dd>
                </div>
                <div>
                  <dt className="text-xs uppercase tracking-[0.14em] text-ink-300">Bottleneck insight</dt>
                  <dd>{selectedLayer.bottleneckInsight}</dd>
                </div>
              </dl>
            </motion.div>
          ) : null}
        </AnimatePresence>
      </div>
    </div>
  );
}

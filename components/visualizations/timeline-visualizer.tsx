"use client";

import { useState } from "react";
import { motion } from "framer-motion";

import { TimelineEvent } from "@/lib/types";

interface TimelineVisualizerProps {
  events: TimelineEvent[];
}

export function TimelineVisualizer({ events }: TimelineVisualizerProps) {
  const [activeId, setActiveId] = useState(events[0]?.id);

  return (
    <div className="space-y-5">
      <div className="overflow-x-auto">
        <div className="flex min-w-[680px] items-center gap-3 rounded-2xl border border-ink-700/70 bg-ink-800/50 p-4">
          {events.map((event, index) => {
            const active = activeId === event.id;
            return (
              <div key={event.id} className="flex items-center gap-3">
                <button
                  type="button"
                  onClick={() => setActiveId(event.id)}
                  className={`rounded-lg border px-3 py-2 text-left text-sm ${
                    active
                      ? "border-accent-300/50 bg-accent-400/12 text-accent-100"
                      : "border-ink-600/80 bg-ink-700/60 text-ink-200"
                  }`}
                >
                  <p className="text-xs uppercase tracking-[0.14em] text-ink-300">{event.year}</p>
                  <p className="mt-1">{event.title}</p>
                </button>
                {index < events.length - 1 ? <span className="h-px w-7 bg-ink-600" /> : null}
              </div>
            );
          })}
        </div>
      </div>

      {events
        .filter((event) => event.id === activeId)
        .map((event) => (
          <motion.div
            key={event.id}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            className="surface border border-ink-600/80 p-5"
          >
            <h3 className="font-display text-2xl text-ink-50">{event.title}</h3>
            <p className="mt-2 text-sm leading-7 text-ink-100/90">{event.summary}</p>
            {event.metric ? <p className="mt-3 text-sm text-accent-200">{event.metric}</p> : null}
          </motion.div>
        ))}
    </div>
  );
}

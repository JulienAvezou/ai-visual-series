"use client";

import { useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { geoNaturalEarth1, geoPath } from "d3-geo";
import { feature } from "topojson-client";
import worldLand from "world-atlas/land-110m.json";

import { CapabilityFilter, WorldRegion } from "@/lib/types";

type MapMode = "capability" | "chokepoint";

const MAP_WIDTH = 1000;
const MAP_HEIGHT = 500;

const capabilityOptions: Array<"all" | CapabilityFilter> = [
  "all",
  "design",
  "fabrication",
  "memory",
  "lithography",
  "materials",
  "backend",
  "deployment",
];

const chokepointIds = new Set(["taiwan", "netherlands", "south-korea"]);

interface InteractiveWorldMapProps {
  regions: WorldRegion[];
}

interface ProjectedRegion {
  region: WorldRegion;
  xPercent: number;
  yPercent: number;
}

export function InteractiveWorldMap({ regions }: InteractiveWorldMapProps) {
  const [mode, setMode] = useState<MapMode>("capability");
  const [capability, setCapability] = useState<"all" | CapabilityFilter>("all");
  const [selectedId, setSelectedId] = useState(regions[0]?.id);

  const selectedRegion = useMemo(
    () => regions.find((region) => region.id === selectedId) ?? regions[0],
    [regions, selectedId],
  );

  const visibleRegions = useMemo(() => {
    if (mode === "chokepoint") {
      return regions;
    }
    if (capability === "all") {
      return regions;
    }
    return regions.filter((region) => region.capabilities.includes(capability));
  }, [capability, mode, regions]);

  const mapProjection = useMemo(() => {
    const topology = worldLand as any;
    const land = feature(topology, topology.objects.land) as any;
    const projection = geoNaturalEarth1().fitSize([MAP_WIDTH, MAP_HEIGHT], land);
    const landPath = geoPath(projection)(land) ?? "";
    return { landPath, projection };
  }, []);

  const projectedVisibleRegions = useMemo<ProjectedRegion[]>(() => {
    return visibleRegions
      .map((region) => {
        const point = mapProjection.projection([region.longitude, region.latitude]);
        if (!point) {
          return null;
        }

        return {
          region,
          xPercent: (point[0] / MAP_WIDTH) * 100,
          yPercent: (point[1] / MAP_HEIGHT) * 100,
        };
      })
      .filter((entry): entry is ProjectedRegion => entry !== null);
  }, [mapProjection.projection, visibleRegions]);

  return (
    <div className="grid gap-6 xl:grid-cols-[minmax(0,1.5fr)_minmax(0,1fr)]">
      <div className="surface border border-ink-600/80 p-4">
        <div className="mb-4 flex flex-col gap-4 border-b border-ink-700/70 pb-4">
          <div className="flex flex-wrap gap-2">
            <button
              type="button"
              onClick={() => setMode("capability")}
              className={`rounded-full px-3 py-1.5 text-xs uppercase tracking-[0.14em] ${
                mode === "capability"
                  ? "border border-accent-300/40 bg-accent-400/15 text-accent-100"
                  : "border border-ink-600/80 bg-ink-700/50 text-ink-200"
              }`}
            >
              By capability
            </button>
            <button
              type="button"
              onClick={() => setMode("chokepoint")}
              className={`rounded-full px-3 py-1.5 text-xs uppercase tracking-[0.14em] ${
                mode === "chokepoint"
                  ? "border border-copper-300/40 bg-copper-400/15 text-copper-200"
                  : "border border-ink-600/80 bg-ink-700/50 text-ink-200"
              }`}
            >
              By chokepoint
            </button>
          </div>

          <div className="flex flex-wrap gap-2">
            {capabilityOptions.map((option) => (
              <button
                key={option}
                type="button"
                onClick={() => {
                  setMode("capability");
                  setCapability(option);
                }}
                className={`rounded-full border px-3 py-1 text-xs ${
                  option === capability && mode === "capability"
                    ? "border-accent-300/40 bg-accent-400/10 text-accent-100"
                    : "border-ink-600/80 bg-ink-700/60 text-ink-200"
                }`}
              >
                {option}
              </button>
            ))}
          </div>
        </div>

        <div className="relative h-[420px] overflow-hidden rounded-xl border border-ink-700/70 bg-[#08111c]">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_18%,rgba(70,198,235,0.14),transparent_42%),radial-gradient(circle_at_84%_14%,rgba(239,183,122,0.08),transparent_36%)]" />

          <svg
            viewBox={`0 0 ${MAP_WIDTH} ${MAP_HEIGHT}`}
            preserveAspectRatio="none"
            className="absolute inset-0 h-full w-full"
          >
            <path
              d={mapProjection.landPath}
              fill="rgba(128,146,176,0.17)"
              stroke="rgba(143,155,179,0.5)"
              strokeWidth="1.3"
            />
          </svg>

          <div className="absolute inset-0">
            <AnimatePresence>
              {projectedVisibleRegions.map(({ region, xPercent, yPercent }) => {
                const active = region.id === selectedRegion?.id;
                const chokepoint = mode === "chokepoint" && chokepointIds.has(region.id);

                return (
                  <motion.button
                    key={region.id}
                    type="button"
                    onClick={() => setSelectedId(region.id)}
                    className="group absolute -translate-x-1/2 -translate-y-1/2"
                    style={{ left: `${xPercent}%`, top: `${yPercent}%` }}
                    initial={{ opacity: 0, scale: 0.85 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.8 }}
                    transition={{ duration: 0.2 }}
                    aria-label={region.name}
                    title={region.name}
                  >
                    <span
                      className={`block h-3.5 w-3.5 rounded-full border ${
                        active
                          ? "border-yellow-200 bg-yellow-300"
                          : chokepoint
                            ? "border-copper-200 bg-copper-300"
                            : "border-accent-100 bg-accent-200"
                      }`}
                    />

                    <span className="pointer-events-none absolute left-1/2 top-5 -translate-x-1/2 whitespace-nowrap rounded-md border border-ink-600/80 bg-ink-900/90 px-2 py-1 text-[11px] text-ink-100 opacity-0 transition group-hover:opacity-100 group-focus-visible:opacity-100">
                      {region.name}
                    </span>
                  </motion.button>
                );
              })}
            </AnimatePresence>
          </div>
        </div>

        <div className="mt-4 flex flex-wrap gap-x-4 gap-y-2 text-xs">
          {visibleRegions.map((region) => {
            const active = region.id === selectedRegion?.id;
            const chokepoint = mode === "chokepoint" && chokepointIds.has(region.id);
            return (
              <button
                key={region.id}
                type="button"
                onClick={() => setSelectedId(region.id)}
                className={`transition ${
                  active
                    ? chokepoint
                      ? "text-copper-200 underline underline-offset-4"
                      : "text-accent-100 underline underline-offset-4"
                    : "text-ink-300 hover:text-ink-100"
                }`}
              >
                {region.name}
              </button>
            );
          })}
        </div>
      </div>

      <aside className="surface border border-ink-600/80 p-5">
        {selectedRegion ? (
          <div>
            <p className="text-xs uppercase tracking-[0.16em] text-ink-300">Region detail</p>
            <h3 className="mt-2 font-display text-2xl text-ink-50">{selectedRegion.name}</h3>
            <p className="mt-1 text-sm text-ink-300">{selectedRegion.detail.headline}</p>
            <p className="mt-4 text-sm leading-7 text-ink-100/88">{selectedRegion.detail.summary}</p>
            <div className="mt-5 border-t border-ink-700/70 pt-4">
              <p className="text-xs uppercase tracking-[0.14em] text-ink-300">Strengths</p>
              <ul className="mt-2 space-y-2 text-sm text-ink-100/90">
                {selectedRegion.detail.strengths.map((strength) => (
                  <li key={strength} className="rounded-lg border border-ink-600/80 bg-ink-700/50 px-3 py-2">
                    {strength}
                  </li>
                ))}
              </ul>
            </div>
            <div className="mt-5 border-t border-ink-700/70 pt-4">
              <p className="text-xs uppercase tracking-[0.14em] text-ink-300">Risk</p>
              <p className="mt-2 text-sm leading-7 text-ink-100/90">{selectedRegion.detail.risk}</p>
            </div>
          </div>
        ) : null}
      </aside>
    </div>
  );
}

"use client";

import { motion } from "framer-motion";

interface CalloutCardProps {
  tone: "insight" | "warning" | "neutral";
  heading: string;
  body: string;
}

const toneClassMap: Record<CalloutCardProps["tone"], string> = {
  insight: "border-accent-300/40 bg-accent-400/10",
  warning: "border-copper-300/50 bg-copper-400/10",
  neutral: "border-ink-500/70 bg-ink-700/50",
};

export function CalloutCard({ tone, heading, body }: CalloutCardProps) {
  return (
    <motion.aside
      initial={{ opacity: 0, y: 14 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.45 }}
      className={`surface mx-auto w-full max-w-3xl border p-6 ${toneClassMap[tone]}`}
    >
      <p className="text-xs uppercase tracking-[0.16em] text-ink-300">Callout</p>
      <h3 className="mt-2 font-display text-2xl text-ink-50">{heading}</h3>
      <p className="mt-3 text-base leading-8 text-ink-100/90">{body}</p>
    </motion.aside>
  );
}

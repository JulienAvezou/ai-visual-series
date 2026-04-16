import Link from "next/link";

export function SiteNav() {
  return (
    <header className="sticky top-0 z-40 -mx-5 border-b border-ink-700/30 bg-ink-900/35 px-5 py-4 backdrop-blur-sm md:-mx-10 md:px-10">
      <div className="flex items-center justify-between">
        <Link href="/" className="group inline-flex items-center gap-3">
          <span className="font-display text-lg text-ink-50 transition-colors group-hover:text-accent-100">
            AI Visual Series
          </span>
        </Link>

        <p className="hidden text-xs uppercase tracking-[0.16em] text-ink-300 md:block">
          Interactive Visual Essays
        </p>
      </div>
    </header>
  );
}

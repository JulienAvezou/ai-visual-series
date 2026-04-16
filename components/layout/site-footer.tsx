export function SiteFooter() {
  return (
    <footer className="border-t border-ink-700/70 pb-8 pt-7 text-sm text-ink-300/80 md:pb-12 md:pt-9">
      <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
        <p className="max-w-xl">
          Interactive visual essays about AI infrastructure, economics, and
          tradeoffs.
        </p>
        <p className="text-ink-400">
          By{" "}
          <a
            href="https://www.julienavezou.com/"
            target="_blank"
            rel="noreferrer"
            className="text-ink-200 hover:text-accent-100"
          >
            Julien Avezou
          </a>
        </p>
      </div>
    </footer>
  );
}

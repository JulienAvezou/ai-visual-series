interface VisualizationShellProps {
  id?: string;
  eyebrow?: string;
  title?: string;
  intro?: string;
  children: React.ReactNode;
}

export function VisualizationShell({ id, eyebrow, title, intro, children }: VisualizationShellProps) {
  return (
    <section id={id} className="surface scroll-mt-24 p-5 md:p-8">
      {(eyebrow ?? title ?? intro) ? (
        <header className="mb-6 border-b border-ink-700/70 pb-5">
          {eyebrow ? <p className="text-xs uppercase tracking-[0.18em] text-ink-300">{eyebrow}</p> : null}
          {title ? <h2 className="mt-2 font-display text-3xl text-ink-50 md:text-4xl">{title}</h2> : null}
          {intro ? <p className="mt-3 max-w-3xl text-sm leading-7 text-ink-100/85 md:text-base">{intro}</p> : null}
        </header>
      ) : null}
      {children}
    </section>
  );
}

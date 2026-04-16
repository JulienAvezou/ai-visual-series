interface ProseSectionProps {
  eyebrow?: string;
  title?: string;
  paragraphs: string[];
}

export function ProseSection({ eyebrow, title, paragraphs }: ProseSectionProps) {
  return (
    <section className="mx-auto w-full max-w-3xl">
      {eyebrow ? <p className="mb-3 text-xs uppercase tracking-[0.2em] text-ink-300">{eyebrow}</p> : null}
      {title ? <h2 className="mb-6 font-display text-3xl text-ink-50 md:text-4xl">{title}</h2> : null}
      <div className="reading-prose">
        {paragraphs.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
      </div>
    </section>
  );
}

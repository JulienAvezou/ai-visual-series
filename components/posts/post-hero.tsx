import { VisualPost } from "@/lib/types";

interface PostHeroProps {
  post: VisualPost;
}

export function PostHero({ post }: PostHeroProps) {
  return (
    <section className="grid gap-8 border-b border-ink-700/70 pb-10 md:grid-cols-[minmax(0,2fr)_minmax(0,1fr)] md:pb-14">
      <div>
        <p className="mb-5 text-xs uppercase tracking-[0.22em] text-accent-200">Visual Essay</p>
        <h1 className="font-display text-4xl leading-tight text-ink-50 md:text-6xl">{post.title}</h1>
        <p className="mt-3 text-lg text-ink-200/90 md:text-2xl">{post.subtitle}</p>
        <p className="mt-7 max-w-3xl text-base leading-8 text-ink-100/90 md:text-lg">{post.heroSummary}</p>
      </div>

      <aside className="surface h-fit p-5 md:p-6">
        <p className="text-xs uppercase tracking-[0.16em] text-ink-300">Reading Intro</p>
        <p className="mt-3 text-sm leading-7 text-ink-100/85">{post.intro}</p>
        <div className="mt-5 border-t border-ink-700/80 pt-4 text-sm text-ink-200">
          <p>{post.date || "TBD"}</p>
          <div className="mt-3 flex flex-wrap gap-2">
            {post.tags.map((tag) => (
              <span key={tag} className="rounded-full border border-ink-600/70 px-2.5 py-1 text-xs text-ink-200/95">
                {tag}
              </span>
            ))}
          </div>
        </div>
      </aside>
    </section>
  );
}

import Link from "next/link";

import { PostCard } from "@/components/home/post-card";
import { getAllPosts, getPublishedPosts } from "@/lib/content/posts";

export default function HomePage() {
  const posts = getAllPosts();
  const featured = getPublishedPosts()[0];
  const backlog = posts.filter((post) => post.slug !== featured?.slug);

  return (
    <div className="space-y-14 md:space-y-20">
      <section className="grid gap-8 border-b border-ink-700/70 pb-12 md:grid-cols-[minmax(0,2fr)_minmax(0,1fr)]">
        <div>
          <h1 className="mt-4 max-w-4xl font-display text-5xl leading-tight text-ink-50 md:text-7xl">
            Visual essays to better understand AI.
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-ink-100/90">
            A series of interactive visual essays that explain AI systems,
            infrastructure, economics, and bottlenecks through data-driven
            storytelling.
          </p>
        </div>

        <aside className="surface h-fit p-5 md:p-6">
          <p className="text-xs uppercase tracking-[0.16em] text-ink-300">
            Series Direction
          </p>
          <p className="mt-3 text-sm leading-7 text-ink-100/88">
            Each post combines concise narrative writing with interactive visual
            components. The goal is high-signal explanation.
          </p>
        </aside>
      </section>

      {featured ? (
        <section className="space-y-5">
          <div className="flex items-center justify-between">
            <h2 className="font-display text-3xl text-ink-50 md:text-4xl">
              Featured Essay
            </h2>
            <Link
              href={`/posts/${featured.slug}`}
              className="rounded-full border border-accent-300/40 bg-accent-400/10 px-4 py-2 text-sm text-accent-100"
            >
              Open essay
            </Link>
          </div>
          <PostCard post={featured} featured />
        </section>
      ) : null}

      <section className="space-y-5">
        <h2 className="font-display text-3xl text-ink-50 md:text-4xl">
          Roadmap Essays
        </h2>
        <p className="max-w-3xl text-sm leading-7 text-ink-200/85 md:text-base">
          Upcoming essays show the direction of the series, using the same
          reusable section and visualization system.
        </p>

        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {backlog.map((post) => (
            <PostCard key={post.slug} post={post} />
          ))}
        </div>
      </section>
    </div>
  );
}

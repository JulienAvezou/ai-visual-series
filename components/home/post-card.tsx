import Link from "next/link";

import { VisualPost } from "@/lib/types";

const statusClasses: Record<VisualPost["status"], string> = {
  published: "border-accent-300/40 bg-accent-400/10 text-accent-100",
  draft: "border-copper-300/40 bg-copper-400/10 text-copper-200",
  comingSoon: "border-ink-500/60 bg-ink-700/40 text-ink-200",
};

const statusLabel: Record<VisualPost["status"], string> = {
  published: "Published",
  draft: "Draft",
  comingSoon: "Coming Soon",
};

interface PostCardProps {
  post: VisualPost;
  featured?: boolean;
}

export function PostCard({ post, featured = false }: PostCardProps) {
  const href = `/posts/${post.slug}`;
  const content = (
    <>
      <div className="mb-5 flex items-center justify-between gap-4">
        <span
          className={`rounded-full border px-3 py-1 text-xs uppercase tracking-[0.16em] ${statusClasses[post.status]}`}
        >
          {statusLabel[post.status]}
        </span>
        <span className="text-xs uppercase tracking-[0.14em] text-ink-300">
          {post.date || "TBD"}
        </span>
      </div>

      <h3
        className={`font-display text-2xl text-ink-50 transition-colors group-hover:text-accent-100 ${featured ? "md:text-4xl" : ""}`}
      >
        {post.title}
      </h3>
      <p className="mt-2 text-sm uppercase tracking-[0.15em] text-ink-300/95">
        {post.subtitle}
      </p>
      <p className="mt-5 max-w-2xl text-sm leading-7 text-ink-100/85 md:text-base">
        {post.description}
      </p>

      <div className="mt-6 flex flex-wrap gap-2">
        {post.tags.map((tag) => (
          <span
            key={tag}
            className="rounded-full border border-ink-600/80 bg-ink-700/60 px-3 py-1 text-xs text-ink-200"
          >
            {tag}
          </span>
        ))}
      </div>

      {post.status === "published" ? (
        <p className="mt-6 text-sm text-accent-200">Read visual essay →</p>
      ) : (
        <></>
      )}
    </>
  );

  const className = `group surface block overflow-hidden p-6 transition duration-300 hover:-translate-y-0.5 hover:border-accent-300/40 hover:shadow-glow ${
    featured ? "md:p-8" : ""
  }`;

  if (post.status === "published") {
    return (
      <Link href={href} className={className}>
        {content}
      </Link>
    );
  }

  return <article className={className}>{content}</article>;
}

import { Metadata } from "next";
import { notFound } from "next/navigation";

import { PostHero } from "@/components/posts/post-hero";
import { SectionRenderer } from "@/components/posts/section-renderer";
import { getAllPosts, getPostBySlug } from "@/lib/content/posts";

interface PostPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return getAllPosts().map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: PostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    return {
      title: "Post Not Found",
      description: "The requested visual essay was not found.",
    };
  }

  const canonical = `/posts/${post.slug}`;

  return {
    title: post.title,
    description: post.description,
    alternates: {
      canonical,
    },
    openGraph: {
      title: post.title,
      description: post.description,
      type: "article",
      url: canonical,
      ...(post.date ? { publishedTime: post.date } : {}),
      tags: post.tags,
      images: [{ url: `/posts/${post.slug}/opengraph-image` }],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.description,
      images: [`/posts/${post.slug}/opengraph-image`],
    },
  };
}

export default async function PostPage({ params }: PostPageProps) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  return (
    <article className="space-y-10 md:space-y-14">
      <PostHero post={post} />

      {post.status !== "published" ? (
        <section className="surface border border-copper-300/40 bg-copper-400/10 p-5 text-copper-200">
          This post is in {post.status} status and shown as a preview.
        </section>
      ) : null}

      <div className="space-y-12 md:space-y-16">
        {post.sections.map((section) => (
          <SectionRenderer key={section.id} section={section} />
        ))}
      </div>
    </article>
  );
}

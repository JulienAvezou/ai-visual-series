import { MetadataRoute } from "next";

import { getAllPosts } from "@/lib/content/posts";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://ai-visual-series.example.com";
  const posts = getAllPosts();

  return [
    {
      url: `${base}/`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
    ...posts.map((post) => ({
      url: `${base}/posts/${post.slug}`,
      lastModified: post.date ? new Date(post.date) : new Date(),
      changeFrequency: "monthly" as const,
      priority: post.status === "published" ? 0.9 : 0.5,
    })),
  ];
}

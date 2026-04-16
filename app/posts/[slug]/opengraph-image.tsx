import { ImageResponse } from "next/og";

import { getPostBySlug } from "@/lib/content/posts";

export const runtime = "edge";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

interface OGImageProps {
  params: Promise<{ slug: string }>;
}

export default async function PostOpenGraphImage({ params }: OGImageProps) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    return new ImageResponse(
      (
        <div
          style={{
            height: "100%",
            width: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            background: "#0d121f",
            color: "#f4f7fb",
            fontSize: 72,
          }}
        >
          AI Visual Series
        </div>
      ),
      { ...size },
    );
  }

  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "linear-gradient(140deg, #0d121f 0%, #0b1724 50%, #07232d 100%)",
          color: "#f4f7fb",
          padding: "72px",
          fontFamily: "Arial",
        }}
      >
        <div style={{ letterSpacing: "0.2em", fontSize: 24, textTransform: "uppercase", color: "#8de2ff" }}>
          AI Visual Series
        </div>
        <div>
          <div style={{ fontSize: 74, lineHeight: 1.04, maxWidth: "94%" }}>{post.title}</div>
          <div style={{ marginTop: "18px", fontSize: 30, color: "#d8e1f0", maxWidth: "90%" }}>
            {post.subtitle}
          </div>
        </div>
      </div>
    ),
    { ...size },
  );
}

import { ImageResponse } from "next/og";

export const runtime = "edge";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "linear-gradient(135deg, #0d121f 0%, #0b1724 55%, #07232d 100%)",
          color: "#f4f7fb",
          padding: "72px",
          fontFamily: "Arial",
        }}
      >
        <div style={{ letterSpacing: "0.2em", fontSize: 24, textTransform: "uppercase", color: "#8de2ff" }}>
          AI Visual Series
        </div>
        <div style={{ fontSize: 78, lineHeight: 1.05, maxWidth: "90%" }}>
          Interactive visual essays for AI systems and infrastructure
        </div>
      </div>
    ),
    { ...size },
  );
}

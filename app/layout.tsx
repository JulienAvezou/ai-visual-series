import type { Metadata } from "next";

import "./globals.css";
import { SiteFooter } from "@/components/layout/site-footer";
import { SiteNav } from "@/components/layout/site-nav";

export const metadata: Metadata = {
  metadataBase: new URL("https://ai-visual-series.example.com"),
  title: {
    default: "AI Visual Series",
    template: "%s | AI Visual Series",
  },
  description:
    "Interactive visual essays explaining AI systems, infrastructure, tradeoffs, and trends through data-driven storytelling.",
  openGraph: {
    title: "AI Visual Series",
    description:
      "Interactive visual essays explaining AI systems, infrastructure, tradeoffs, and trends.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Visual Series",
    description:
      "Interactive visual essays explaining AI systems, infrastructure, tradeoffs, and trends.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body>
        <div aria-hidden="true" className="site-tech-bg">
          <div className="site-tech-grid" />
          <div className="site-tech-network site-tech-network-a" />
          <div className="site-tech-network site-tech-network-b" />
          <div className="site-tech-chip site-tech-chip-a" />
          <div className="site-tech-chip site-tech-chip-b" />
          <div className="site-tech-chip site-tech-chip-c" />
          <div className="site-tech-node site-tech-node-a" />
          <div className="site-tech-node site-tech-node-b" />
          <div className="site-tech-node site-tech-node-c" />
          <div className="site-tech-node site-tech-node-d" />
        </div>

        <div className="relative z-10 mx-auto flex min-h-screen w-full max-w-7xl flex-col px-5 md:px-10">
          <SiteNav />
          <main className="flex-1 pb-16 pt-8 md:pb-24 md:pt-12">{children}</main>
          <SiteFooter />
        </div>
      </body>
    </html>
  );
}

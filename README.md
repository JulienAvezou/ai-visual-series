# AI Visual Series

Interactive visual-essay platform built with Next.js App Router.

First published essay: **AI Hardware, Explained Visually**.

## Tech Stack

- Next.js (App Router)
- TypeScript
- Tailwind CSS
- Framer Motion
- Structured typed content/data files
- Reusable data-driven visualization components

## What This Repo Includes

- Editorial homepage with published and upcoming posts
- Dynamic post routes (`/posts/[slug]`)
- Per-post metadata + Open Graph image routes
- Reusable section renderer and visualization system
- First complete interactive post implementation

## Project Structure

- `app/` app router pages, layout, metadata, OG routes
- `components/layout/` nav/footer
- `components/home/` homepage cards
- `components/posts/` post scaffolding and section renderer
- `components/visualizations/` reusable interactive visuals
- `lib/content/` post registry and typed datasets
- `lib/types.ts` shared content + data models

# AwesomeAI · AI Directory

A one-stop AI directory that curates **AI companies**, **AI models** and **AI tools**. It ships with bilingual UI (Chinese / English), search, category filters and a timeline of AI history.

## Features

- 🏢 **AI Companies** — global and Chinese AI companies with country, founding year and field
- 🧩 **AI Models** — LLMs, reasoning, multimodal and image/video/audio generation models, labeled open / closed
- 🛠️ **AI Tools** — chat assistants, coding, design, audio/video and productivity tools with pricing labels
- 🕰️ **AI History** — a timeline from the 1950s to today, plus a major model release timeline
- 🌏 **Bilingual** — switch between Chinese and English anywhere in the site
- 🔍 Search + category filters, fully responsive

## Tech Stack

- [Next.js 15](https://nextjs.org) (App Router)
- TypeScript
- Tailwind CSS

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view it.

## Build

```bash
npm run build
npm run start
```

## Deployment

This project is ready for [Vercel](https://vercel.com). Import the repository and Vercel will detect Next.js and build it automatically. Every push to `main` triggers an automatic production deployment.

## Data

All directory data lives in [`lib/data.ts`](./lib/data.ts), with English translations in [`lib/data.en.ts`](./lib/data.en.ts) and history content in [`lib/history.ts`](./lib/history.ts). The data is manually curated for reference only; please refer to official sources.

## License

MIT

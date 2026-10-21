# Portfolio spec — Roit Sovanmongkol

Objective: a personal brand portfolio site for Roit Sovanmongkol, UX/UI designer, Phnom Penh.
Status: built, verified, ready to deploy once the five placeholders are filled.

## Decisions (from the grill, 2026-10-21)

| Area | Decision |
| --- | --- |
| Goal | Personal brand / showcase, not a job-application microsite |
| Positioning | Fast-learning generalist |
| Proof | Wide gallery of all work, each project gets its own shareable page |
| Publishing | Public-facing work only. MPTC screens not published. |
| Images | Mostly Figma exports. Placeholders shipped, real exports overwrite them. |
| Depth | Card in grid + own detail page per project |
| Look | Dark, cinematic. Near-black base, acid lime accent. |
| Type | Space Grotesk (display) + IBM Plex Mono (labels, meta) |
| Stack | Next.js App Router, static export, GitHub Pages |
| Hero | Process-forward, short |
| Contact | Telegram + email + LinkedIn |
| Language | English only |
| Sections | Hero, work grid, timeline, about, contact. Plus resume download. |
| Grid | Uniform 2-col, filter chips (Product / Campaign / Event) |
| Motion | Rich. Scroll reveals, cursor glow, progress bar, hover zoom. Reduced-motion respected. |
| Timeline | Vertical line, left rail |
| About | Portrait + bio + skill chips |
| Copy | I drafted, Roit edits |

## What was built

- 12 static pages: home, 8 project pages, resume, 404.
- `public/resume/roit-sovanmongkol-resume.pdf` — A4, 2 pages, generated from `/resume`.
- `.github/workflows/deploy.yml` — builds and publishes to GitHub Pages on push to main.
- `public/.nojekyll` — stops GitHub Pages stripping `_next`.
- `scripts/placeholders.mjs` — regenerates the 37 placeholder images.
- `scripts/print-resume.mjs` — prints `/resume` to A4 PDF over CDP.

## Stack notes

- Next.js static export (`output: 'export'`), `trailingSlash: true` for GitHub Pages.
- `basePath` defaults to `/kol-portfolio`, set in `next.config.mjs` and `lib/paths.ts`.
  The deploy workflow overrides it from the repo name.
- `next/image` with `images.unoptimized: true`. Plain `<img>` in effect, still handles basePath.
- No Tailwind, no CSS framework, no UI library. One stylesheet: `app/globals.css`.
- Fonts self-hosted by `next/font/google` at build time.

## Gotchas hit during the build

- Font variables must sit on `<html>`, not `<body>`. `:root` defines `--sans: var(--font-sans)`,
  so a body-scoped `--font-sans` makes the whole page fall back to Times.
- `body::before` (the vignette) is fixed at z-index 1 and paints over anything static.
  The resume sheet needed its own z-index to stay white.
- Raw `<a href="/...">` misses the basePath. Use `next/link` or `asset()`.

## Placeholders Roit must fill before deploy

1. `NEXT_PUBLIC_BASE_PATH` — GitHub Pages path. Workflow handles it; check the repo name.
2. Telegram handle — `data/site.ts`, `telegramHandle`. Currently `YOUR_TELEGRAM_HANDLE`.
3. Real project images — export from Figma over `public/work/*`, same names, 1600x1000.
4. Portrait photo — `public/images/portrait.webp`, 800x1000.
5. `NEXT_PUBLIC_SITE_URL` — set in the workflow. Feeds the Open Graph tags.

Also worth swapping: `public/og.png` is a generated placeholder.

## Copy still needs Roit's voice

`data/projects.ts` and `data/timeline.ts` hold drafted copy. The "what I learned"
lines in particular are written as plausible UX takeaways. They should describe
what actually happened to him, not what sounds good.

# kol-portfolio

Personal portfolio site for Roit Sovanmongkol, UX/UI designer, Phnom Penh.

Next.js, statically exported, deployed to GitHub Pages. No CMS, no database, no
runtime. One CSS file, no framework, no Tailwind.

## Run it locally

```bash
npm install
npm run dev
```

Open http://localhost:3000/kol-portfolio/ (the base path applies in dev too).

```bash
npm run build     # static export into out/
```

## Before you deploy

Five things are placeholders. They are the only manual steps.

1. **Base path.** `next.config.mjs` and `lib/paths.ts` both default to
   `/kol-portfolio`. If your repo is named something else, set
   `NEXT_PUBLIC_BASE_PATH=/your-repo-name` when building. The deploy workflow
   does this automatically from the repo name.
2. **Telegram handle.** `data/site.ts`, field `telegramHandle`. It currently
   reads `YOUR_TELEGRAM_HANDLE`, so the Telegram button links to a dead profile.
3. **Project images.** Every file in `public/work/` is a generated placeholder.
   Export your real screens from Figma and overwrite them, same names:

   ```
   public/work/<slug>/cover.webp   1600x1000
   public/work/<slug>/01.webp      1600x1000
   public/work/<slug>/02.webp      1600x1000
   public/work/<slug>/03.webp      1600x1000
   public/work/<slug>/04.webp      1600x1000
   ```

   PNG or JPG works too, but then update the extension in `data/projects.ts`.
   Run `npm run placeholders` to regenerate the placeholder set at any time.
4. **Portrait.** `public/images/portrait.webp`, 800x1000, 4:5. A real photo of
   you, not a placeholder. The site greys it out until hover.
5. **Site URL.** `NEXT_PUBLIC_SITE_URL` in the deploy workflow. It is used for
   Open Graph tags, so a shared link shows your name instead of a blank card.

## Editing copy

All text lives in two files:

- `data/projects.ts` — every project: title, summary, intro, what you did, what
  you learned, image paths, category.
- `data/timeline.ts` — the timeline, skill groups, awards, and the about
  paragraphs.

The hero text, contact details, and links are in `data/site.ts`.

The copy currently in those files is a first draft. Rewrite it in your own
words, particularly the "what I learned" lines, which should describe what you
actually learned rather than what sounds good.

## Adding a project

1. Add an entry to `projects` in `data/projects.ts`.
2. Drop the images in `public/work/<slug>/`.
3. Build. The route and its card are generated from the data.

The `CASE / CMS` project is the exception: it has `cover: null` and renders a
typographic card instead of a screenshot, because the ministry screens are not
cleared for publication yet. If you get written clearance, set `cover` to the
image path, add the images array, and remove `glyph`.

## Resume

`/resume/` is a print-optimised page. The PDF served from the Resume button is
generated from it:

```bash
npm run dev
# in another terminal
node scripts/print-resume.mjs http://localhost:3000/kol-portfolio/resume/
```

That writes `public/resume/roit-sovanmongkol-resume.pdf` at A4. It needs
Google Chrome installed. Commit the regenerated PDF.

## Deploy

Push to `main`. `.github/workflows/deploy.yml` builds and publishes to GitHub
Pages. In the repo settings, set Pages to deploy from GitHub Actions.

For a custom domain, add a `CNAME` file to `public/` and point the domain at
`username.github.io`.

## Notes

- `public/.nojekyll` exists so GitHub Pages does not strip the `_next`
  directory. Do not delete it.
- Motion respects `prefers-reduced-motion`. Everything still works with
  JavaScript disabled, and the scroll reveal is a no-op for screen readers.
- The site is dark only by design.

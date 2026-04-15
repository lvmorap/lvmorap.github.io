# Valeria Mora Parra Portfolio

Modern Next.js + TypeScript portfolio optimized for GitHub Pages.

## Tech Stack

- Next.js (App Router)
- TypeScript
- Tailwind CSS
- shadcn/ui
- Framer Motion
- Lucide React

## Local Development

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Production Build

```bash
npm run lint
npm run build
```

Static files are exported to `out/`.

## GitHub Pages Deployment

This repository includes `.github/workflows/deploy.yml`.

### Required repository settings

1. Go to **Settings → Pages**.
2. Set **Source** to **GitHub Actions**.
3. Push to `main` to trigger deployment.

### Base path notes

- For user pages (`<username>.github.io`), keep `NEXT_PUBLIC_BASE_PATH=""`.
- For project pages, set `NEXT_PUBLIC_BASE_PATH` to `/<repo-name>` in workflow env.

## Content updates

Edit `/home/runner/work/lvmorap.github.io/lvmorap.github.io/lib/content.ts` to update profile, experience, education, awards, skills, and links.

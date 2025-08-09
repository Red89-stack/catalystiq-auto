# CatalystIQ Frontend (Clean Starter)

A minimal, clean Next.js App Router + Tailwind + React Calendar setup:
- App Router (`src/app`)
- Global CSS imported only in `src/app/layout.tsx`
- Tailwind configured (PostCSS OK for Vercel)
- Clickable Services grid + dynamic service detail pages
- Booking page with `react-calendar` (global CSS imported in layout)

## Getting Started

```bash
npm install
npm run dev
```

## Build & Run

```bash
npm run build
npm start
```

## Deploy

1. Push to a GitHub repo:
   ```bash
   git init
   git add .
   git commit -m "init clean frontend"
   git branch -M main
   git remote add origin git@github.com:<your-username>/<your-repo>.git
   git push -u origin main
   ```

2. Connect the repo on Vercel and deploy.

## Notes

- If you change or add global CSS from external libs, import it only in `src/app/layout.tsx`.
- Lint/TS build checks are disabled in `next.config.js` to avoid blocking deploys. Re-enable later by removing those flags.

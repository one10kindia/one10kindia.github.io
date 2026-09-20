# ONE10K Bengaluru — Website

A React + Vite single-page site for **ONE10K Bengaluru** — a single-category,
point-to-point 10K on NICE Road, Nayandahalli, 7 March 2027.

## Stack

- React 19 + Vite
- React Router (`HashRouter`, so it works on GitHub Pages without extra config)
- Plain CSS per component, driven by design tokens in `src/theme.js`

## Design tokens

`src/theme.js` is the single source of truth for color and type. On load,
`src/main.jsx` mirrors those values onto CSS custom properties
(`--c-green`, `--f-display`, etc.), and every component stylesheet reads
from those variables instead of hardcoding values. Change a color or font
once in `theme.js` and it updates everywhere.

## Structure

```
src/
  theme.js            design tokens (colors, fonts, layout)
  components/          shared UI (Navbar, Footer, Countdown, SectionLink)
  sections/             homepage sections (Hero, RouteSection, Experience, ...)
  sections/sponsors/   sponsor-page sections
  pages/                Home.jsx, Sponsors.jsx
  assets/images/       brand assets cropped from the sponsor deck & logo sheets
```

## Develop

```bash
npm install
npm run dev
```

## Build

```bash
npm run build   # outputs to dist/
npm run preview # serve the production build locally
```

## Deploy to GitHub Pages

A workflow at `.github/workflows/deploy.yml` builds and deploys `dist/` on
every push to `main`. In the repo settings, set **Pages → Source** to
**GitHub Actions**, then push to `main`.

The Vite `base` is set to `'./'` (relative) and routing uses `HashRouter`,
so the site works unmodified whatever the repo name ends up being — no
need to hardcode a `/repo-name/` base path.

## Custom domain (one10k.in)

Not wired up yet by design — the site is published on the default
`https://one10kindia.github.io/` URL for now. When ready to point
`one10k.in` at it: add a `public/CNAME` file containing `one10k.in`, add the
DNS records GitHub Pages asks for, then set the custom domain in
**Settings → Pages**.

## Before going live — TODO

- **Email capture** (`UpdatesCTA.jsx`): the "Notify Me" form is UI-only.
  Wire it to a real provider (Google Forms, Mailchimp, etc.) before launch.
- **Social links**: Instagram/Strava are marked "coming soon" in the footer.
- **Sponsor deck download**: `/assets/ONE10K_Bengaluru_Sponsor_Deck.pptx` is
  served as-is from the original file for the Sponsors page download button.

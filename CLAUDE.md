# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev       # Dev server (Vite, hot reload)
npm run build     # tsc && vite build → dist/
npm run preview   # Preview the production build locally
```

No lint script or test suite configured.

## Architecture

This is a single-page React + TypeScript application (Vite) for the Allcance corporate site at https://allcance.co.

### Routing (`src/app/routes.tsx`)

All routes are wrapped by `renderWithNav()`, which injects `<Navbar>` and `<Footer>`. The `isLanding` flag passed to `Navbar` controls its behavior:
- `isLanding: true` → nav links use `react-scroll` (smooth scroll to sections)
- `isLanding: false` → nav links use `react-router-dom` (navigate to `/`)

Routes: `/` (Landing), `/blog`, `/single`, `/Nr1`, `/Disc`, `/Cultura`.

### Landing page (`src/pages/index.tsx`)

Renders all sections in sequence: Home → Services → Portfolio → Clients → News → Skills → Team → Milestones → About → Pricing → Contact. Has a 500ms loader with fade-out animation on mount.

### Content data (`src/data/`)

All editable content lives in JSON files — never hardcoded in components. Each section imports its own JSON. `markdownToHTML()` in `src/utils/converter.ts` converts a limited markdown subset (`**bold**`, `[link](url)`, `\n`) to HTML for rendering JSON content with formatting.

### Styling

Uses Bootstrap 5 as the CSS foundation plus custom CSS in `src/assets/css/`. The main styles are split across `style.css` (section-by-section, see table of contents at top), `setup.css` (CSS reset), and `responsive.css`. Fonts: Karla and Roboto via `@fontsource`.

### Navbar (`src/components/Navbar.tsx`)

Logo links to `/` via RouterLink always. Nav items from `navbar.json` render as ScrollLinks on the landing page and RouterLinks on blog pages. Mobile toggle state managed locally with `useState`.

## Deploy

Build output goes to `dist/`. Deploy by copying to the VPS:

```bash
# From project root, after npm run build:
scp -r dist/* root@187.77.242.217:/var/www/allcance-site/
```

The site is served by an Nginx container at `/var/www/allcance-site/`. Infrastructure details are in `VPS/CLAUDE.md`.

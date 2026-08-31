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

Deployment is automatic. **Pushing to `main` is the deploy** — a GitHub App webhook triggers Dokploy on the VPS. There is no manual copy step; the older `scp dist/*` workflow is gone.

What happens on push:

1. Dokploy clones this repo.
2. It builds `Dockerfile` — a two-stage build: `node:20-alpine` runs `npm ci && npm run build`, then the resulting `dist/` is copied into an `nginx:alpine` image alongside `nginx.conf`.
3. The image runs as a Docker Swarm service, routed by Traefik at `allcance.co` and `www.allcance.co` over TLS from Let's Encrypt.

The Dokploy application is `app-index-mobile-interface-m6v1yn`, in the project `allcance-co-site`. The generated name looks nothing like the site — that is expected, Dokploy assigns it.

`docker-compose.yml` and `deploy.sh` in the repo root are **legacy** and no longer used. They belonged to the pre-Dokploy setup, where the site ran as a standalone Compose project on the VPS under `/opt/allcance-site` (removed on 2026-08-31). Do not run `deploy.sh` — it would `git pull` and rebuild in a directory that no longer exists.

`node_modules/` is gitignored and **not** tracked. It used to be committed; that was undone on 2026-08-31 because it bloated every clone, including the one Dokploy makes on each deploy.

### Static content that is NOT in this repo

`nginx.conf` serves eleven path prefixes — `/allcare/`, `/alltomate/`, `/cookies/`, `/inst/`, `/landpage/`, `/lgpd/`, `/nr1/`, `/persuasao/`, `/psi-nr1/`, `/recrutamento/`, `/termos-de-uso/` — from `/srv/static`, which is a bind mount of `/var/www/allcance-site` on the host.

That content is PDFs, standalone landing pages and legal pages, published by `scp` straight to the host. It is not in this repository and not part of the build. Two consequences worth knowing before you touch anything there:

- **Changing a file there needs no deploy.** It is served directly off the host.
- **Adding a new folder needs both**: a new entry in the `location` regex in `nginx.conf`, and a deploy.

A folder added there must be traversable by others (`chmod o+x`). Without that bit nginx cannot enter it and returns 403 on the directory and 404 on files inside — even though the files themselves are readable. This silently broke `/landpage/` for weeks.

Anything served under `/assets/` or any other path comes from the built SPA in the image, not from the mount.

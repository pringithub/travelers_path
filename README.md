# Traveler's Path

An interactive 3D globe tracing the journeys of history's famous explorers and
travelers — Magellan, Zheng He, Ibn Battuta, James Cook, and more. Built as a
static site so it can be hosted free on GitHub Pages.

See [.plan/](.plan/) for the full design/architecture plan.

## Stack

Vite + React + TypeScript, [globe.gl](https://github.com/vasturiano/globe.gl)
(Three.js) for the globe, [world-atlas](https://github.com/topojson/world-atlas)
for keyless land geometry, Zustand for state.

## Develop

```bash
npm install
npm run dev
```

## Build

```bash
npm run build   # outputs to dist/
npm run preview # preview the production build locally
```

## Deploy (GitHub Pages)

Push to `main` and the [deploy workflow](.github/workflows/deploy.yml) builds
and publishes `dist/` via GitHub Actions. One-time repo setup: **Settings →
Pages → Build and deployment → Source: GitHub Actions**.

The Vite `base` path defaults to `/travelers_path/` (a project site under
`https://<user>.github.io/travelers_path/`). Override via the `VITE_BASE` env
var if the repo name or hosting layout differs (see
[.plan/06-hosting-and-deploy.md](.plan/06-hosting-and-deploy.md)).

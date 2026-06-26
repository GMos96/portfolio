# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

Run from the repository root.

- `npm run dev` — start the Next.js dev server on http://localhost:3000
- `npm run build` — production build
- `npm run start` — serve the production build
- `npm run lint` — run ESLint (uses flat config from `eslint.config.mjs`, with `eslint-config-next` core-web-vitals + TypeScript rules)

There are no tests in this repo yet. TypeScript checking is done via `tsc --noEmit` behavior implied by `tsconfig.json` (no separate script); run `npx tsc --noEmit` if you need a type check.

## Stack

- **Framework:** Next.js 16.2.9 (App Router)
- **React:** 19.2.4
- **Styling:** Tailwind CSS v4 via `@tailwindcss/postcss` PostCSS plugin (no `tailwind.config.js` — Tailwind v4 uses CSS-first config in `app/globals.css` via `@theme inline { ... }`)
- **Language:** TypeScript 5 with `strict: true` and `jsx: "react-jsx"`
- **Fonts:** Geist Sans + Geist Mono loaded via `next/font/google` in `app/layout.tsx`
- **Lint:** ESLint v9 flat config

## Architecture

Single-page Next.js App Router app. Currently only one route: `app/page.tsx` (home).

- `app/layout.tsx` — root layout. Imports `globals.css`, wires up the two Geist fonts as CSS variables (`--font-geist-sans`, `--font-geist-mono`), sets `<html>` and `<body>` classes (`h-full antialiased`, `min-h-full flex flex-col`), and exports `metadata`.
- `app/page.tsx` — the only page; renders the default `create-next-app` starter content. **This is the file to replace when building out the portfolio.**
- `app/globals.css` — Tailwind import + theme tokens (`--color-background`, `--color-foreground`) and dark-mode override via `prefers-color-scheme`. Add new design tokens here under `@theme inline`.
- `app/favicon.ico` — default favicon.
- `public/` — static assets (`next.svg`, `vercel.svg`, etc.) served from the root.
- `next.config.ts` — currently empty; add Next.js config here.
- `tsconfig.json` — path alias `@/*` maps to the repo root, so `@/app/page` works (though starter doesn't use it).

## Conventions

- All pages/layouts live under `app/` per App Router conventions. Add new routes as `app/<route>/page.tsx`.
- Static assets go in `public/` and are referenced as `/filename.ext`.
- Use the `@/` import alias for cross-module imports rather than relative paths.
- Tailwind v4 doesn't need a config file — define theme tokens in `app/globals.css` with `@theme inline { ... }`.
- The `npm run lint` script runs ESLint with the flat config; don't add a `.eslintrc` — `eslint.config.mjs` is the source of truth.

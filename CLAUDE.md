# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project

Personal CV / portfolio website for Julian Badillo. Originally exported from a Figma Make file (https://www.figma.com/design/p6yzmaeY5FQxP3HbbytENI/Replicate-Design) and progressively turned into hand-built React sections. Single-page site with smooth-scroll navigation between Hero, Skills, Experience, Education, Awards, Footer.

## Commands

```bash
npm i          # install (also works with bun — bun.lock is committed)
npm run dev    # start Vite dev server
npm run build  # production build to dist/
```

No tests, linter, or formatter are configured.

## Stack & conventions

- **Vite 6 + React 18 + TypeScript** (no tsconfig in repo — Vite/SWC handles TS via `@vitejs/plugin-react`).
- **Tailwind CSS v4** via the `@tailwindcss/vite` plugin. There is no `tailwind.config.js` and no `autoprefixer` — both are handled by the v4 plugin. `postcss.config.mjs` is intentionally empty (see file's own comment). Tailwind sources are declared inside CSS via `@source` in [src/styles/tailwind.css](src/styles/tailwind.css).
- **shadcn/ui** components live in [src/app/components/ui/](src/app/components/ui/). The `cn()` helper in [src/app/components/ui/utils.ts](src/app/components/ui/utils.ts) is the standard `clsx + tailwind-merge` combo.
- **Path alias `@/`** → `./src` (configured in [vite.config.ts](vite.config.ts)).
- **Figma asset imports**: any import starting with `figma:asset/<filename>` is rewritten by the custom `figmaAssetResolver` Vite plugin to `src/assets/<filename>`. Don't remove this plugin; Figma-exported code relies on it.
- The vite config comment notes both `react()` and `tailwindcss()` plugins are required even if Tailwind isn't actively used — do not remove them.
- `assetsInclude` is restricted to `**/*.svg` and `**/*.csv`. Per the comment, never add `.css`, `.tsx`, or `.ts` there.

## Architecture

Entry: [src/main.tsx](src/main.tsx) mounts [src/app/App.tsx](src/app/App.tsx), which composes section components in [src/app/components/](src/app/components/) (`Navigation`, `HeroSection`, `SkillsSection`, `ExperienceSection`, `EducationSection`, `AwardsSection`, `Footer`).

- **Two parallel representations of the design exist**:
  - [src/app/components/](src/app/components/) — the **active**, hand-authored, semantically-structured sections that App.tsx actually renders. Edit these.
  - [src/imports/MacBookAir2/MacBookAir2.tsx](src/imports/MacBookAir2/MacBookAir2.tsx) — the **raw Figma export** with absolute-positioned divs. Reference only; not rendered.
- **Content is hard-coded inline** in each section component (e.g. the `experiences` array in `ExperienceSection.tsx`). There is no CMS, JSON, or data layer — editing CV content means editing those arrays/JSX directly.
- **Section IDs (`home`, `skills`, `experience`, `education`, `awards`) are the contract between `Navigation.tsx` (smooth-scroll target) and each section's wrapper `<section id="…">`.** Renaming an ID requires updating both sides.
- **Styling**: most sections use inline Tailwind utilities with hard-coded brand colors (`#2f9ddc` blue, `#29e7d1` teal, `#32333c` dark, `#f1fdff` off-white) and Figma fonts (`Sansita One`, `Alexandria` — loaded from Google Fonts in [src/styles/fonts.css](src/styles/fonts.css)). The shadcn theme tokens in [src/styles/theme.css](src/styles/theme.css) are present for the UI library but the CV sections mostly bypass them with explicit colors.
- **`default_shadcn_theme.css`** at the repo root is a reference copy of the shadcn globals (marked `KEEP_IN_SYNC(fullscreen/resources/figmake/shadcn/globals.css)`). The file actually loaded by the app is [src/styles/theme.css](src/styles/theme.css). Keep them aligned if upgrading shadcn.

## Notes when editing

- Adding a new section: create `XxxSection.tsx` with a `<section id="xxx">` wrapper, import it in `App.tsx` in the desired order, and add a matching `scrollToSection('xxx')` button to `Navigation.tsx`.
- The repo includes a `pnpm-workspace.yaml` declaring `.` as the only package, but the working lockfile is `bun.lock`. Stick with one package manager per change to avoid lockfile churn.

# AGENTS.md

## Stack

React 19 + TypeScript 5.9 + Vite 7 + Tailwind CSS 4 SPA. No backend — static site served by a Bun file server in production (Docker).

## Commands

```bash
npm run dev       # Vite dev server (HMR)
npm run build     # tsc && vite build → dist/
npm run lint      # eslint .
npm run preview   # vite preview (serves dist/ locally)
```

Build is `tsc` **then** `vite build` — TypeScript errors fail the build.

## Project structure

```
src/
  main.tsx            # Entrypoint — StrictMode, HelmetProvider
  App.tsx             # BrowserRouter, all routes defined here
  components/         # Layout, Navbar, Footer, ProjectCard
  pages/              # About(/), Experience, Projects, Blog, BlogPost, Contact
  data/               # Static data arrays (projects.ts, blog.ts, experiences.ts)
  content/blog/*.md   # Blog posts as markdown with YAML frontmatter
  hooks/              # useTheme (dark mode via .dark class on <html>)
  types/              # Shared interfaces (Project, BlogPost, ContactItem)
  index.css           # Tailwind v4 entry + custom theme + global styles
serve.ts              # Bun static file server (production only, port 3000)
```

## Key patterns

- **Routing**: react-router-dom v7 with `BrowserRouter`. All routes in `App.tsx` inside a `<Layout>` wrapper route. SPA fallback via `serve.ts` (returns `index.html` for unknown paths).
- **Blog**: Markdown files in `src/content/blog/` with YAML frontmatter (`title`, `date`, `lang`). Loaded via `import.meta.glob('?raw', { eager: true })` and parsed at build time in `data/blog.ts`. Rendered with `react-markdown`.
- **Dark mode**: Class-based (`.dark` on `<html>`), toggled via `useTheme` hook, persisted in `localStorage('theme')`. CSS uses `.dark` descendant selectors, Tailwind uses `@custom-variant dark`.
- **Styling**: Tailwind CSS v4 via `@tailwindcss/vite` plugin. Two custom font families: Inter (body) and Lexend (headings) via `@fontsource`. Typography plugin for prose content.
- **SEO**: `react-helmet-async` for per-page `<title>` and meta tags.
- **Data**: No API calls. Projects and blog posts are static arrays/files in `src/data/` and `src/content/`.
- **Exports**: Components use named exports (`export function`). `App` is the only default export.

## TypeScript

Strict mode enabled with `noUnusedLocals`, `noUnusedParameters`, `erasableSyntaxOnly`, `verbatimModuleSyntax`. Target ES2022, module ESNext, bundler resolution. Only `src/` and `vite.config.ts` are included.

## Deployment

- **Docker**: Multi-stage build using `oven/bun:1.2-alpine`. Build stage uses `bun install --frozen-lockfile` + `bun run build`. Runtime copies `dist/` and `serve.ts`, runs `bun serve.ts` on port 3000.
- **CI**: GitHub Actions on push to `main` (ignores `**.md`). Builds multi-arch Docker images (amd64 + arm64) and pushes to `mizzcode/my-portofolio` on DockerHub.
- **Lockfile**: Both `bun.lock` and `package-lock.json` exist. Docker uses `bun.lock` (`--frozen-lockfile`). Local dev uses npm.

## Adding content

- **New blog post**: Create `src/content/blog/<slug>.md` with frontmatter:
  ```yaml
  ---
  title: Post Title
  date: YYYY-MM-DD
  lang: ID
  ---
  ```
  Auto-discovered by `import.meta.glob`. Slug derives from filename.
- **New project**: Add entry to `src/data/projects.ts` array following the `Project` interface.
- **New page**: Add component in `src/pages/`, add `<Route>` in `App.tsx`.

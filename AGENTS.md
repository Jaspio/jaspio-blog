# Agent instructions

These instructions apply throughout this project, regardless of the coding agent or editor. Follow any more specific `AGENTS.md` instructions in subdirectories when present.

## Project overview

- Personal blog at https://jaspio.net, built as a static site with Astro.
- Uses TypeScript in strict mode, Astro components, Markdown, MDX, and plain CSS.
- Uses npm and the committed `package-lock.json`.
- Read `README.md` for the project structure and content authoring examples.

## Setup and commands

- Requires Node.js 22.23.4 or newer.
- Run `npm install` when dependencies need to be installed.
- `npm run dev` starts the development server, normally at http://localhost:4321.
- `npm run build` generates the production site in `dist/`.
- `npm run preview` serves an existing production build.
- Use `npm run astro -- --help` to inspect available CLI commands.
- Reuse an existing development server when possible. Use the runner's background-process support if a server must remain available, and verify that it responds.

## Working conventions

- Read the relevant implementation and its call sites before editing.
- Prefer small, focused changes that solve the underlying issue.
- Follow existing component, formatting, naming, and styling patterns.
- Reuse existing helpers, especially taxonomy logic in `src/utils/taxonomy.ts`.
- Preserve type safety; avoid `any`, unnecessary casts, and silent error handling.
- Prefer static Astro rendering. Add client-side JavaScript or dependencies only when needed.
- Update directly affected documentation when behavior, commands, or content conventions change.

## Content and assets

- Published posts live in `src/content/blog/YYYY/MM/<slug>/index.md` or `index.mdx` and belong to the `blog` collection.
- Page content lives in `src/content/pages/<slug>/index.md` or `index.mdx`; page routes are defined in `src/pages/`.
- Collection loaders and frontmatter schemas are defined in `src/content.config.ts`. Keep content consistent with those schemas.
- Colocate post- and page-specific images with their content. Use relative Markdown image paths.
- Use MDX image imports and Astro's `Image` component when linking a preview to a full-size image; use the imported original's `.src` for the link.
- Leave blank lines around Markdown images nested inside HTML blocks such as `<figure>`.
- Use `public/` for files that must be served unchanged, such as favicons. Do not reintroduce dependencies on old WordPress upload URLs.
- Preserve existing slugs, public routes, publication dates, and content unless the task calls for changing them.
- Keep category archive filtering and sidebar counts consistent. Parent counts include descendant categories, with each post counted once.

## Styling

- Shared styles live in `src/styles/global.css`.
- Fonts are configured in `astro.config.mjs`, loaded through the shared head's Astro `Font` components, and referenced using the configured CSS variables.
- Avoid duplicate `@font-face` declarations or hard-coded font families that bypass the provider.
- Preserve desktop and mobile layouts, readable contrast, meaningful image alt text, and keyboard accessibility.
- When comparing against the live site, inspect computed browser styles rather than relying only on stylesheet declarations.

## Validation

- Run `npm run build` after code, configuration, or content changes.
- There are currently no dedicated test or lint scripts in `package.json`; do not claim those checks ran.
- For content moves, verify that public URLs, collection IDs, archive links, and RSS links remain valid.
- For image changes, verify both the rendered image and any full-size click-through URL.
- For UI changes, inspect the affected page in a browser when available, including relevant responsive layouts.
- Documentation-only changes do not require a production build.
- Report the checks performed and any failures or verification limits.

## Change safety

- Preserve unrelated working-tree and staged changes.
- Do not edit generated output in `dist/`, `.astro/`, or installed dependencies in `node_modules/`.
- Never commit credentials, secrets, or private backup data.
- Do not commit, push, delete unrelated files, or run destructive Git commands without the user's request.
- Before deleting assets, check source references and generated page URLs.
- Finish with a concise summary of changes and validation.

## Reference documentation

Consult the relevant official Astro guide when changing framework-specific behavior:

- [Content collections](https://docs.astro.build/en/guides/content-collections/)
- [Images](https://docs.astro.build/en/guides/images/)
- [Routing](https://docs.astro.build/en/guides/routing/)
- [Astro components](https://docs.astro.build/en/basics/astro-components/)
- [Styling](https://docs.astro.build/en/guides/styling/)

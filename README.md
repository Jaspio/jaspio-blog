# jaspio.net

Source for [We Can Download It for You Wholesale](https://jaspio.net), Jasper's personal blog. Built with Astro, Markdown, and MDX, with category and tag archives, RSS, and a sitemap.

## Development

Requires Node.js 22.23.4 or newer.

```sh
npm install
npm run dev
```

The development server runs at `http://localhost:4321` by default.

| Command | Purpose |
| --- | --- |
| `npm run dev` | Start the development server |
| `npm run build` | Generate the static site in `dist/` |
| `npm run preview` | Preview the production build locally |
| `npm run astro -- --help` | Show Astro CLI commands |

## Project structure

| Location | Purpose |
| --- | --- |
| `src/content/blog/` | Published blog content by `YYYY/MM` and colocated images (`blog` collection) |
| `src/content/pages/` | Page content and colocated images (`pages` collection) |
| `src/content/categories.json` | Nested category definitions |
| `src/content/tags.json` | Tag definitions |
| `src/content.config.ts` | Collection loaders, schemas, and category flattening |
| `src/pages/` | Routes, archives, and RSS endpoint |
| `src/components/` | Shared components, including the sidebar |
| `src/layouts/` | Site and post layouts |
| `src/styles/global.css` | Global styles |
| `src/assets/fonts/` | Local fonts managed by Astro's font provider |
| `public/` | Files served unchanged, including favicons |
| `astro.config.mjs` | Site URL, integrations, and font configuration |

## Content and images

Keep each post or page in its own folder, with its images alongside `index.md` or `index.mdx`:

```text
src/content/blog/2024/06/my-post/
  index.md
  cover.jpg

src/content/pages/about/
  index.md
  linkedinSnap.jpg
```

Post folders determine their `/blog/<post-slug>/` URLs; `index` is omitted. Page content is rendered by explicit routes in `src/pages/`.

Use relative Markdown paths for images:

```md
![Alt text](./cover.jpg)
```

Astro processes local images during the build. Optional `heroImage` frontmatter on posts and `image` frontmatter on pages accept relative paths validated by Astro's `image()` helper. Externally hosted images remain external.

For clickable images, use MDX imports so both the preview and full-size link resolve correctly:

```mdx
import { Image } from 'astro:assets';
import preview from './preview.jpg';
import original from './original.jpg';

<a href={original.src}><Image src={preview} alt="Description" /></a>
```

When mixing Markdown images with HTML such as `<figure>`, leave blank lines around the Markdown image so it is parsed correctly.

The legacy public media directory has been removed. Keep new content images colocated rather than referencing old WordPress upload URLs.

See the [Astro content collections documentation](https://docs.astro.build/en/guides/content-collections/) for more details.

# Astro Starter Kit: Blog

```sh
npm create astro@latest -- --template blog
```

> 🧑‍🚀 **Seasoned astronaut?** Delete this file. Have fun!

Features:

- ✅ Minimal styling (make it your own!)
- ✅ 100/100 Lighthouse performance
- ✅ SEO-friendly with canonical URLs and Open Graph data
- ✅ Sitemap support
- ✅ RSS Feed support
- ✅ Markdown & MDX support

## 🚀 Project Structure

Inside of your Astro project, you'll see the following folders and files:

```text
├── public/
├── src/
│   ├── assets/
│   ├── components/
│   ├── content/
│   ├── layouts/
│   └── pages/
├── astro.config.mjs
├── README.md
├── package.json
└── tsconfig.json
```

Astro looks for `.astro` or `.md` files in the `src/pages/` directory. Each page is exposed as a route based on its file name.

There's nothing special about `src/components/`, but that's where we like to put any Astro/React/Vue/Svelte/Preact components.

The `src/content/` directory contains collections of related Markdown and MDX documents. Published posts belong to the `blog` collection and live in `src/content/posts/<post-slug>/index.md`, alongside their post-specific images:

```text
src/content/posts/my-post/
├── index.md
└── cover.jpg
```

Reference colocated images with `![Alt text](./cover.jpg)`. Optional `heroImage: ./cover.jpg` frontmatter is validated with Astro's `image()` helper. Astro processes these local images during the build. The folder name determines the existing `/blog/<post-slug>/` URL; `index` is not included.

Pages follow the same structure in `src/content/pages/<page-slug>/index.md`, with page-specific images alongside the Markdown file. Reference images with relative Markdown paths; optional `image: ./portrait.jpg` frontmatter is validated with Astro's `image()` helper. Existing page entry IDs remain unchanged.

For clickable images, use `index.mdx` and import the colocated images so Astro resolves both the preview and full-size link:

```mdx
import { Image } from 'astro:assets';
import preview from './preview.jpg';
import original from './original.jpg';

<a href={original.src}><Image src={preview} alt="Description" /></a>
```

Existing externally hosted images remain external. Local content images and full-size image links are resolved from colocated assets, not the legacy public media directory. Legacy public files are retained for backwards compatibility with old external URLs. Starter examples in `src/content/blog/` are separate from the published blog posts.

See [Astro's Content Collections docs](https://docs.astro.build/en/guides/content-collections/) to learn more.

Any static assets, like images, can be placed in the `public/` directory.

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:4321`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `npm run astro -- --help` | Get help using the Astro CLI                     |

## 👀 Want to learn more?

Check out [our documentation](https://docs.astro.build) or jump into our [Discord server](https://astro.build/chat).

## Credit

This theme is based off of the lovely [Bear Blog](https://github.com/HermanMartinus/bearblog/).

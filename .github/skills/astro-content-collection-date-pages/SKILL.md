---
name: astro-content-collection-date-pages
description: Build year and month listing pages for an Astro content collection (for example blog posts stored in YYYY/MM folders). Use when adding /blog/[year] or /blog/[year]/[month] pages, grouping posts by month, sorting by pubDate, restructuring collection folders by date, or fixing "collection does not exist or is empty" and build errors in Astro content collections.
---

# Astro content collection year and month pages

## When to use
- Restructuring collection entries into `src/content/<collection>/YYYY/MM/` folders.
- Adding `src/pages/<base>/[year]/index.astro` and `src/pages/<base>/[year]/[month]/index.astro`.
- Grouping or sorting posts by date, or changing how the date and title are shown.
- Diagnosing a build that works in one directory but fails in another.

## Folder layout
- Put each entry at `src/content/blog/YYYY/MM/<slug>.md(x)`.
- Update every relative path inside moved files by one level per folder added. Check `heroImage`, body images, and component imports such as `../../components/X.astro`.
- The loader's glob (for example `**/*.{md,mdx}`) picks up nested folders. Confirm it does.
- Entry IDs now include the folders (`2022/07/first-post`), so URLs become `/blog/2022/07/first-post/`. Update any hard-coded links, and add redirects if old URLs must keep working. RSS and index links use `post.id` and update automatically.

## Static paths: derive params from the collection
Do not scan the filesystem for years and months. A `process.cwd()` path such as `./src/content/blog/` only resolves when Astro runs from the project root. Running from the monorepo root fails with `ENOENT` or `collection "blog" does not exist or is empty`.

Derive the params from `getCollection()` instead:

```astro
export async function getStaticPaths() {
	const posts = await getCollection('blog');
	const years = new Set(posts.map((post) => post.data.pubDate.getFullYear().toString()));
	return [...years].map((year) => ({ params: { year } }));
}
```

For months, build a `YYYY/MM` key from the same date and split it into `{ year, month }`. Pad the month with `String(getMonth() + 1).padStart(2, '0')`.

## Helpers inside getStaticPaths
Astro hoists `getStaticPaths()` out of the module, so module-level helper functions and imports are not in scope there. Errors look like `X is not defined`. Define helpers inside the function, or inline them.

## Dates and timezones
- `z.coerce.date()` parses `'Jun 01 2024'` as local midnight. Filter with local getters (`getFullYear()`, `getMonth()`), not UTC getters. UTC getters move a June 1 post into May in western timezones.
- Month params are 1-based. `getMonth()` is 0-based, so compare with `parseInt(month, 10) - 1`.
- Astro caches parsed content in `node_modules/.astro/data-store.json` and does not invalidate it when `TZ` changes. When you change timezone, parsing, or schema, delete `node_modules/.astro/` before you verify.
- Sort newest first with `b.data.pubDate.valueOf() - a.data.pubDate.valueOf()`. Because the list is sorted, group consecutive posts with the same month in one `reduce`.

## Verifying
1. Clear the content cache listed above (`node_modules/.astro/`) if the timezone, parsing, or schema changed.
2. Build from the project directory: `npm run build`.
3. Build from the repository root: `npx --prefix <project> astro build --root <project>`. Both must exit 0 with the same routes. Compare the `dist/**/index.html` lists.
4. Check the rendered HTML, for example that `Jun 1, 2024 — Using MDX` appears under a June heading.

`astro check` needs `@astrojs/check` and `typescript`. Ask before installing them.

## Checklist
- [ ] Posts are in `YYYY/MM/` folders, and relative paths are updated.
- [ ] `getStaticPaths()` uses `getCollection()`, not the filesystem.
- [ ] Helpers are inside `getStaticPaths()`.
- [ ] Filters and labels use local date getters.
- [ ] `node_modules/.astro/` is cleared when timezone, parsing, or schema changed.
- [ ] Builds pass from both the project directory and the repository root.

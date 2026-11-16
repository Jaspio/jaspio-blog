import type { CollectionEntry } from 'astro:content';

export const normalizeTaxonomyName = (name: string) => name.replace(/&amp;/g, '&').trim();

export const getPostsForCategory = (
	categoryPath: string,
	categories: CollectionEntry<'categories'>[],
	posts: CollectionEntry<'blog'>[],
) => {
	const categoryNames = new Set(
		categories
			.filter(
				(category) =>
					category.data.path === categoryPath ||
					category.data.path.startsWith(`${categoryPath}/`),
			)
			.map((category) => normalizeTaxonomyName(category.data.name)),
	);

	return posts.filter((post) =>
		post.data.categories.some((name) => categoryNames.has(normalizeTaxonomyName(name))),
	);
};
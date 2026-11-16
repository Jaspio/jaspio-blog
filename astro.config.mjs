// @ts-check

import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import { defineConfig, fontProviders } from 'astro/config';

// https://astro.build/config
export default defineConfig({
	site: 'https://jaspio.github.io',
	base: '/',
	integrations: [mdx(), sitemap()],
	fonts: [
		{
			provider: fontProviders.local(),
			name: 'Lato v23',
			cssVariable: '--font-lato',
			fallbacks: ['sans-serif'],
			options: {
				variants: [
					{
						src: ['./src/assets/fonts/lato-v23-latin-regular.woff2'],
						weight: 400,
						style: 'normal',
						display: 'swap',
					},
					{
						src: ['./src/assets/fonts/lato-v23-latin-700.woff2'],
						weight: 700,
						style: 'normal',
						display: 'swap',
					},
					{
						src: ['./src/assets/fonts/lato-v23-latin-italic.woff2'],
						weight: 400,
						style: 'italic',
						display: 'swap',
					},
					{
						src: ['./src/assets/fonts/lato-v23-latin-700italic.woff2'],
						weight: 700,
						style: 'italic',
						display: 'swap',
					},
				],
			},
		},
		{
			provider: fontProviders.local(),
			name: 'Raleway v27',
			cssVariable: '--font-raleway',
			fallbacks: ['sans-serif'],
			options: {
				variants: [
					{
						src: ['./src/assets/fonts/raleway-v27-latin-regular.woff2'],
						weight: 400,
						style: 'normal',
						display: 'swap',
					},
					{
						src: ['./src/assets/fonts/raleway-v27-latin-700.woff2'],
						weight: 700,
						style: 'normal',
						display: 'swap',
					},
				],
			}
		}
	],
});

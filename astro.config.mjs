// @ts-check

import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import { defineConfig, fontProviders } from 'astro/config';

// https://astro.build/config
export default defineConfig({
	site: 'https://jaspio.github.io',
	base: '/',
	integrations: [mdx(), sitemap()],
	redirects: {
		'/blog/dancing-orc/': '/blog/2005/04/dancing-orc/',
		'/blog/my-first-posting/': '/blog/2005/04/my-first-posting/',
		'/blog/the-times-who-is-flourishing-under-labour/': '/blog/2005/04/the-times-who-is-flourishing-under-labour/',
		'/blog/budget-travellers-guide-to-sleeping-in-airports/': '/blog/2005/05/budget-travellers-guide-to-sleeping-in-airports/',
		'/blog/flags-of-the-world-japanese-prefectures/': '/blog/2005/05/flags-of-the-world-japanese-prefectures/',
		'/blog/whats-on/': '/blog/2005/05/whats-on/',
		'/blog/whats-on-2/': '/blog/2005/05/whats-on-2/',
		'/blog/on-a-tangent-wikipedia-adventure/': '/blog/2005/08/on-a-tangent-wikipedia-adventure/',
		'/blog/welcome/': '/blog/2005/08/welcome/',
		'/blog/planet-funk/': '/blog/2005/09/planet-funk/',
		'/blog/the-daily-show-is-back/': '/blog/2005/09/the-daily-show-is-back/',
		'/blog/daily-show-vs-ford/': '/blog/2006/01/daily-show-vs-ford/',
		'/blog/dvd-to-cd-conversion-made-easy/': '/blog/2006/01/dvd-to-cd-conversion-made-easy/',
		'/blog/forget-the-nsa-flash-is-spying-on-you/': '/blog/2006/01/forget-the-nsa-flash-is-spying-on-you/',
		'/blog/the-fifth-element-still-rocks/': '/blog/2006/01/the-fifth-element-still-rocks/',
		'/blog/help-unqualified-incompetant-bush-cronies/': '/blog/2006/02/help-unqualified-incompetant-bush-cronies/',
		'/blog/macsaber-take-the-force-with-you/': '/blog/2006/05/macsaber-take-the-force-with-you/',
		'/blog/new-538-dance-smash-hits-cd-a-big-disappointment/': '/blog/2006/07/new-538-dance-smash-hits-cd-a-big-disappointment/',
		'/blog/prinsengrachtconcert-2006/': '/blog/2006/08/prinsengrachtconcert-2006/',
		'/blog/iis-60-indentifying-application-pools/': '/blog/2006/09/iis-60-indentifying-application-pools/',
		'/blog/multiple-websites-in-iis-51-windows-xp/': '/blog/2006/09/multiple-websites-in-iis-51-windows-xp/',
		'/blog/soapbox-microsofts-attempt-to-rival-youtube/': '/blog/2006/09/soapbox-microsofts-attempt-to-rival-youtube/',
		'/blog/toyota-the-human-touch/': '/blog/2006/09/toyota-the-human-touch/',
		'/blog/moving-on/': '/blog/2006/10/moving-on/',
		'/blog/new-spam-gets-abstract/': '/blog/2006/10/new-spam-gets-abstract/',
		'/blog/too-many-connections-on-linksys-router/': '/blog/2006/10/too-many-connections-on-linksys-router/',
		'/blog/family-guy-saving-private-brian/': '/blog/2006/11/family-guy-saving-private-brian/',
		'/blog/family-guys-is-back-and-more-popular-than-ever/': '/blog/2006/11/family-guys-is-back-and-more-popular-than-ever/',
		'/blog/how-to-block-ie-7-from-auto-installing/': '/blog/2006/11/how-to-block-ie-7-from-auto-installing/',
		'/blog/me-grimlock-like-new-body/': '/blog/2006/12/me-grimlock-like-new-body/',
		'/blog/trip-to-rome/': '/blog/2006/12/trip-to-rome/',
		'/blog/my-transformers-collection-so-far/': '/blog/2007/01/my-transformers-collection-so-far/',
		'/blog/spelling-checker-in-firefox-20/': '/blog/2007/01/spelling-checker-in-firefox-20/',
		'/blog/whatthefont/': '/blog/2007/01/whatthefont/',
		'/blog/more-transformers-big-fucking-guns/': '/blog/2007/07/more-transformers-big-fucking-guns/',
		'/blog/transformers-collection-update/': '/blog/2007/07/transformers-collection-update/',
		'/blog/save-mr-whitey/': '/blog/2007/11/save-mr-whitey/',
		'/blog/india-days-3-and-4/': '/blog/2008/02/india-days-3-and-4/',
		'/blog/india-pictures-available/': '/blog/2008/02/india-pictures-available/',
		'/blog/my-trip-to-india-part-one/': '/blog/2008/02/my-trip-to-india-part-one/',
		'/blog/holux-m-1000-and-my-nokia-e65-phone-now-play-nice/': '/blog/2008/04/holux-m-1000-and-my-nokia-e65-phone-now-play-nice/',
		'/blog/second-life-woos-corporations-too-little-too-late/': '/blog/2008/04/second-life-woos-corporations-too-little-too-late/',
		'/blog/stephen-colbert-still-has-a-wish/': '/blog/2008/04/stephen-colbert-still-has-a-wish/',
		'/blog/seasick-steve-walkin-man/': '/blog/2008/10/seasick-steve-walkin-man/',
		'/blog/northern-gannet/': '/blog/2009/09/northern-gannet/',
		'/blog/street-art/': '/blog/2009/09/street-art/',
		'/blog/a-song-for-grandma/': '/blog/2009/12/a-song-for-grandma/',
		'/blog/funny-sign-in-singapore/': '/blog/2009/12/funny-sign-in-singapore/',
		'/blog/this-blog-has-been-resurrected/': '/blog/2009/12/this-blog-has-been-resurrected/',
		'/blog/drm-ebooks-and-the-ipad/': '/blog/2010/08/drm-ebooks-and-the-ipad/',
		'/blog/html5-intellisense-support-in-visual-studio-2008/': '/blog/2011/08/html5-intellisense-support-in-visual-studio-2008/',
		'/blog/breaking-through-my-impostor-syndrome/': '/blog/2015/06/breaking-through-my-impostor-syndrome/',
		'/blog/debugging-responsive-websites/': '/blog/2015/06/debugging-responsive-websites/',
		'/blog/heading-to-sitecore-symposium/': '/blog/2018/09/heading-to-sitecore-symposium/',
	},
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

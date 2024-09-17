// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	site: 'https://erralb.github.io/ia',
	base: '/ia/',

	// site: 'https://erralb.com/ia',
	// base: '/ia/',

	// site: import.meta.env.SITE,
	// base: import.meta.env.BASE,
	integrations: [
		starlight({
			title: 'Intelligence Artificelle',
			logo: {
			  src: './src/assets/logo.svg',
			},
			favicon: './src/assets/logo.svg',
			customCss: [
				'./src/style.css',
			],
			social: {
				github: 'https://github.com/erralb/ia'
			},
			components: {
			  ThemeSelect: './src/components/ThemeSelect.astro',
			},
			sidebar: [
				// {
				// 	label: '1. Introduction',
				// 	slug: '01-introduction',
				// },
				{
					label: '1. Introduction',
					collapsed: true,
					autogenerate: {
						directory: '01-intro',
					}
					// collapsed: true,
					// items: [
					// 	{
					// 		label: '1. Définitions et historique',
					// 		collapsed: true,
					// 		autogenerate: {
					// 			directory: '01-concepts',
					// 		}
					// 	},
					// ]
				},
				{
					label: '2. Recherche Heuristique',
					collapsed: true,
					autogenerate: {
						directory: '02-recherche',
					}
				},
			],
		}),
	],
});

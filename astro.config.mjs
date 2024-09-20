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
			title: 'Intelligence Artificielle',
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
			  PageTitle: './src/components/PageTitle.astro',
			},
			sidebar: [
				{
					label: 'Informations',
					slug: '00-infos/planning-2024-2025',
				},
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
				{
					label: '3. Constraint Satisfaction Problems',
					collapsed: true,
					autogenerate: {
						directory: '03-csp',
					}
				},
			],
		}),
	],
});

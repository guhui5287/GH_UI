import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
	title: 'Custom title',
	description: 'Custom description',
	lastUpdated: true,
	themeConfig: {
		// https://vitepress.dev/reference/default-theme-config
		nav: [
			{ text: 'Home', link: '/' },
			{ text: 'Examples', link: '/guide/markdown-examples' },
			{
				text: '下拉框',
				items: [
					{
						text: 'options1',
						link: '/',
					},
					{
						text: 'options2',
						link: 'http://www.baidu.com',
					},
				],
			},
		],
		sidebar: [
			{
				text: 'Examples',
				items: [{ text: 'Markdown Examples', link: '/guide/markdown-examples' }],
				collapsed: true, //是否可折叠
			},
			{
				text: 'Examples2',
				items: [
					{ text: 'Runtime API Examples', link: '/guide/api-examples' },
					{ text: 'Markdown Examples', link: '/guide/markdown-examples' },
				],
			},
		],

		socialLinks: [{ icon: 'github', link: 'https://github.com/vuejs/vitepress' }],
		docFooter: { prev: '上一篇', next: '下一篇' },
		editLink: {
			pattern: 'https://github.com/vuejs/vitepress/edit/main/docs/:path',
			text: 'Edit this page on GitHub',
		},
		lastUpdatedText: '最近更新时间',
		logo: '',
		// 页脚通过 footer 进行配置。如果 Sidebar 存在则页脚不会存在
		footer: {
			message: 'Released under the MIT License.',
			copyright: 'Copyright © 2019-present Evan You',
		},
	},
})

import { viteBundler } from '@vuepress/bundler-vite'
import { defaultTheme } from '@vuepress/theme-default'
import { markdownMathPlugin } from '@vuepress/plugin-markdown-math'
import { markdownImagePlugin } from '@vuepress/plugin-markdown-image'
import { defineUserConfig } from 'vuepress'

const navbar_def = require('./config/nav.js');
const sidebar_def = require('./config/sidebar.js');

export default defineUserConfig({
	bundler: viteBundler({
		viteOptions: {
			server: {
				allowedHosts: [
					"vuepress-dev.thecodeway.com"
				]
			}
		},
		vuePluginOptions: {}
	}),
	theme: defaultTheme({
		logo: 'favicon.png',
		navbar: navbar_def,
		sidebar: sidebar_def,
		sidebarDepth: 4,
	}),
	lang : 'zh-CN',
	title: '我的博客和笔记',
	description: '理性派，数学，物理，程序',
	plugins: [
		markdownMathPlugin({
			// options
			type: 'mathjax',
			output: 'chtml'
		}),
		
		markdownImagePlugin({
			// Enable figure
			figure: true,
			// Enable image lazyload
			lazyload: true,
			// Enable image mark
			mark: true,
			// Enable image size
			size: false,
		}),
	],
	markdown: {
		lineNumbers: false
	}
})

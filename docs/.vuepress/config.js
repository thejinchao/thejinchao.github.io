import { viteBundler } from '@vuepress/bundler-vite'
import { defaultTheme } from '@vuepress/theme-default'
import { markdownMathPlugin } from '@vuepress/plugin-markdown-math'
import { markdownImagePlugin } from '@vuepress/plugin-markdown-image'
import { defineUserConfig } from 'vuepress'
import { getDirname, path } from 'vuepress/utils'

const navbar_def = require('./config/nav.js');
const sidebar_def = require('./config/sidebar.js');
const __dirname = getDirname(import.meta.url)

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
		lastUpdated: false,
		repo: "https://github.com/thejinchao/thejinchao.github.io",
		colorMode: "light",
	}),
	head:[
		['link', { rel: 'icon', href: 'favicon.png' }]
	],
	lang : 'zh-CN',
	title: '我的博客和笔记',
	description: '理性派，数学，物理，程序',
	plugins: [
		markdownMathPlugin({
			// options
			type: 'mathjax',
			output: 'svg'
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
		lineNumbers: false,
		importCode: {
			handleImportPath: (str) =>
			str.replace(/^@public/, path.resolve(__dirname, 'public/')),
		},
	}
})

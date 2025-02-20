const head = require('./config/head.js');
//const plugins = require('./config/plugins.js');
const themeConfig = require('./config/themeConfig.js');

module.exports = {
	base: '/',
	dest: 'dist',
	locales: {
	'/': {
		title: "我的博客",
		description: '死理性派，喜欢程序，数学，物理',
		lang: 'zh-CN'
	}
	},
	head,
	//plugins,
	themeConfig,
	markdown: {
		lineNumber: false
	},
	extendMarkdown: md => {
		md.set({ breaks: true });
		md.use(require('markdown-it-mathjax3'), {tex: {tags: 'ams'}});
	}
}

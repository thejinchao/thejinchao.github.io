// nav
module.exports = [
	{ text: '首页', link: '/' },
	{ text: '文章', link: '/blog/' },
	{
		text: '开源项目',
		children: [
			{ text: "TurboLink", link: "https://github.com/thejinchao/turbolink"},
			{text: "TinyEncrypt", link: 'https://github.com/thejinchao/TinyEncrypt' },
			{text: "UnrealStyleGuide", link: 'https://github.com/thejinchao/ue5-style-guide' },
			{text: "AxTrace", link: 'https://github.com/thejinchao/AxTrace' },
			{text: "Cyclone", link: 'https://github.com/thejinchao/cyclone' }
		]
	},
	{
		text: '个人笔记',
		children: [
			{ text: '数学相关', link: '/note/math/' },
			{ text: '图形学', link: '/note/graphics/'},
			{ text: '密码学', link: '/note/cryptography/'},
			{ text: '编程语言', link: '/note/language/'}
		]
	},
	{ text: '关于', link: 'about'}
]

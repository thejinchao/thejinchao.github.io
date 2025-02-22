// nav
module.exports = [
	{ text: '首页', link: '/' },
	{ text: '文章', link: '/blog/' },
	{
		text: '开源项目',
		children: [
			{ text: "TurboLink", link: "https://github.com/thejinchao/turbolink"}
		]
	},
	{
		text: '个人笔记',
		children: [
			{ text: '数学相关', link: '/math/' },
			{ text: '图形学', link: '/graphics/'},
			{ text: '密码学', link: '/cryptography/'},
			{ text: '编程语言', link: '/language/'}
		]
	}
]

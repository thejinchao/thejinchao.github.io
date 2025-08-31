import { navbar } from "vuepress-theme-hope";

export default navbar([
	{
		text: "主页",
		icon: "house",
		link: "/",
	},
	{
		text: "文章",
		icon: "book",
		link: "/blog/",
	},
	{
	text: "开源项目",
	icon: "diagram-project",
	children: [
		{text: "TurboLink", link: "https://github.com/thejinchao/turbolink", },
		{text: "TinyEncrypt", link: 'https://github.com/thejinchao/TinyEncrypt' },
		{text: "UnrealStyleGuide", link: 'https://github.com/thejinchao/ue5-style-guide' },
		{text: "AxTrace", link: 'https://github.com/thejinchao/AxTrace' },
		{text: "Cyclone", link: 'https://github.com/thejinchao/cyclone' }, 
		],
	},
	{
		text: '个人笔记',
		icon: "lightbulb",
		children: [
			{ text: '数学相关', link: '/note/math/' },
			{ text: '图形学', link: '/note/graphics/'},
			{ text: '密码学', link: '/note/cryptography/'},
			{ text: '编程语言', link: '/note/language/'}
		]
	},
	{
		text: "关于",
		icon: 'user-astronaut',
		link: '/about',
	}
]);

module.exports = [
	{
		text: '我的文章',
		prefix: '/blog/',
		collapsible: true,
		children: [
			{ 
				text: '从抛币协议到智能合约', 
				collapsible: true,
				children: [
					{ text: "Part1", link: "2025/02/MentalPoker01.md" },
					{ text: "Part2", link: "2025/02/MentalPoker02.md" }
				]
			},
			{
				text: 'JPEG算法解密',
				collapsible: true,
				children: [
					{ text: "Part1", link: "2025/02/JPEG001.md" },
					{ text: "Part2", link: "2025/02/JPEG002.md" },
					{ text: "Part3", link: "2025/02/JPEG003.md" },
					{ text: "Part4", link: "2025/02/JPEG004.md" },
					{ text: "Part5", link: "2025/02/JPEG005.md" },
					{ text: "Github", link: "http://github.com/thejinchao/jpeg_encoder" }
				]
			},
			{
				text: 'SPH算法简介',
				collapsible: true,
				children: [
					{ text: "Part1", link: "2025/02/SPH001.md" },
					{ text: "Part2", link: "2025/02/SPH002.md" },
					{ text: "Part3", link: "2025/02/SPH003.md" },
					{ text: "Part4", link: "2025/02/SPH004.md" },
					{ text: "Github", link: "https://github.com/thejinchao/fluid" }
				]
			},
			"2025/02/Martingle.md",
			"2025/02/RandRound.md",
			"2025/02/DH.md",
			"2025/02/SegmentCircle.md",
			"2025/02/Ellipse.md",
			"2025/02/Fibonacci.md"
		]
	},
	{
		text: '开源项目',
		collapsible: true,
		children: [
			{text: "TurboLink", link: 'https://github.com/thejinchao/turbolink' }
		],
	},
	{
		text: '学习笔记',
		collapsible: true,
		children: [
			{
				text: '数学相关',
				
				collapsible: true,
				children: [
					{text: '常用数学符号', 	link: '/math/symbol'},
					{text: '群', 			link: '/math/group'},
					{text: '数论（一）', 		link: '/math/number_theory_1'},
					{text: '数论（二）',		link: '/math/number_theory_2'},
					{text: '数论（三）', 		link: '/math/number_theory_3'},
					{text: '概率', 			link: '/math/probability'}
				]
			}
		]
	}
]

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
			"2025/02/Fibonacci.md",
			{
				text: '匀速贝塞尔曲线运动的实现',
				collapsible: true,
				children: [
					{ text: "Part1", link: "2025/03/BezierLine01.md" },
					{ text: "Part2", link: "2025/03/BezierLine02.md" }
				]
			}
		]
	},
	{
		text: '开源项目',
		collapsible: true,
		children: [
			{text: "TurboLink", link: 'https://github.com/thejinchao/turbolink' },
			{text: "TinyEncrypt", link: 'https://github.com/thejinchao/TinyEncrypt' },
			{text: "UnrealStyleGuide", link: 'https://github.com/thejinchao/ue5-style-guide' },
			{text: "AxTrace", link: 'https://github.com/thejinchao/AxTrace' },
			{text: "Cyclone", link: 'https://github.com/thejinchao/cyclone' }
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
					{text: '常用数学符号', 	link: '/note/math/symbol.md'},
					{text: '群', 			link: '/note/math/group.md'},
					{text: '数论（一）', 		link: '/note/math/number_theory_1.md'},
					{text: '数论（二）',		link: '/note/math/number_theory_2.md'},
					{text: '数论（三）', 		link: '/note/math/number_theory_3.md'},
					{text: '概率', 			link: '/note/math/probability.md'}
				]
			},
			{
				text: '密码学',
				collapsible: true,
				children: [
					{text: 'RSA', 			link: '/note/cryptography/rsa'},
					{text: '抛币协议', 		link: '/note/cryptography/flip_coin'},
					{text: '智能扑克协议', 	link: '/note/cryptography/mental_poker'}
				]
			},
			{
				text: '图形学',
				collapsible: true,
				children: [
					{
						text: '数学基础',
						collapsible: true,
						children: [
							{text: '矢量', link: '/note/graphics/math/math_01'},
							{text: '矩阵', link: '/note/graphics/math/math_02'},
							{text: '立体角', link: '/note/graphics/math/math_03'},
							{text: '几何变换(一)', link: '/note/graphics/math/transform_01'},
							{text: '几何变换(二)', link: '/note/graphics/math/transform_02'},
							{text: '法线变换', link: '/note/graphics/math/transform_03'},
							{text: '摄像机变换', link: '/note/graphics/math/transform_04'}
						]
					},
					{
						text: '光栅化',
						collapsible: true,
						children: [
							{text: '基础', link: '/note/graphics/rasterization/raster01'},
							{text: '边界判定', link: '/note/graphics/rasterization/raster02'}
						]
					},
					{
						text: '光照模型',
						collapsible: true,
						children: [
							{text: '传统光照模型', link: '/note/graphics/illumination_model/classic/illumination_model_01'},
							{text: '光度学', link: '/note/graphics/illumination_model/luminosity/luminosity'},
							{text: '双向反射分布函数\(BRDF\)', link: '/note/graphics/illumination_model/BRDF/BRDF'},
							{text: '微平面理论(一)', link: '/note/graphics/illumination_model/microfacets/microfacets_1'},
							{text: '微平面理论(二)', link: '/note/graphics/illumination_model/microfacets/microfacets_2'},
							{text: '微平面理论(三)', link: '/note/graphics/illumination_model/microfacets/microfacets_3', },
							{text: '光照方程', link: '/note/graphics/illumination_model/render_function/render_function_1'}
						]
					},
					{
						text: '环境光渲染',
						collapsible: true,
						children: [
							{text: '环境光渲染(一)', link: '/note/graphics/image_based_lighting/ibl_01'},
							{text: '环境光渲染(二)', link: '/note/graphics/image_based_lighting/ibl_02'}
						]
					}
				]
			},
			{
				text: '编程语言',
				collapsible: true,
				children: [
					{
						text: 'JavaScript',
						collapsible: true,
						children: [
							{text:'环境搭建', link:'/note/language/javascript/helloworld.md'},
							{text:'基本语法', link:'/note/language/javascript/grammar.md'},
							{text:'函数', link:'/note/language/javascript/function.md'},
							{text:'对象和类', link:'/note/language/javascript/object_and_class.md'}
						]
					}
				]
			}
		]
	}
]

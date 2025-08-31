import { defineUserConfig } from "vuepress";
import { getDirname, path } from 'vuepress/utils'

import theme from "./theme.js";
const __dirname = getDirname(import.meta.url)

export default defineUserConfig({
  base: "/",

  lang: "zh-CN",
  title: "我的博客和笔记",
  description: "理性派，数学，物理，程序",

  theme,

  // 和 PWA 一起启用
  // shouldPrefetch: false,
	markdown: {
		importCode: {
			handleImportPath: (str) =>
			str.replace(/^@public/, path.resolve(__dirname, 'public/')),
		},
	},

});

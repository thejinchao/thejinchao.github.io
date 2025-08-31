import { hopeTheme } from "vuepress-theme-hope";

import navbar from "./navbar.js";
import sidebar from "./sidebar.js";

export default hopeTheme({
  hostname: "https://thejinchao.github.io",

  author: {
    name: "JinChao",
    url: "https://thecodeway.com",
  },

  logo: "favicon.png",

  //repo: "vuepress-theme-hope/vuepress-theme-hope",
  repoDisplay: false,
  editLink: false,
  prevLink: false,
  nextLink: false,

  docsDir: "docs",

  // 导航栏
  navbar,

  // 侧边栏
  sidebar,
  toc: false,
  pageInfo: false,
  // 页脚
  footer: '使用 <a href="https://theme-hope.vuejs.press/zh/" target="_blank">VuePress Theme Hope</a> 主题 | <a href="https://beian.miit.gov.cn/" target="_blank">京ICP备16018986号-1</a>',
  displayFooter: true,
  copyright: false,

  // 多语言配置
  metaLocales: {
    editLink: "在 GitHub 上编辑此页",
  },

  // 此处开启了很多功能用于演示，你应仅保留用到的功能。
  markdown: {
    align: true,
    attrs: true,
    codeTabs: true,
    component: true,
    demo: true,
    figure: true,
    gfm: true,
    imgLazyload: true,
    imgSize: true,
    include: true,
    mark: true,
    plantuml: true,
    spoiler: true,
    stylize: [
      {
        matcher: "Recommended",
        replacer: ({ tag }) => {
          if (tag === "em")
            return {
              tag: "Badge",
              attrs: { type: "tip" },
              content: "Recommended",
            };
        },
      },
    ],
    sub: true,
    sup: true,
    tabs: true,
    tasklist: true,
    vPre: true,

    math: {
       type: "mathjax",
    },
  },

  // 在这里配置主题提供的插件
  plugins: {

    components: {
      components: ["Badge", "VPCard"],
    },

    icon: {
      prefix: "fa6-solid:",
    },

  },

});

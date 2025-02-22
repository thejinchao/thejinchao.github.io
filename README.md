# My Blog and Notebook

Visit: [https://thejinchao.github.io](https://thejinchao.github.io)

## 开发环境搭建
1. 安装node.js [https://nodejs.org](https://nodejs.org)
2. 安装yarn [https://classic.yarnpkg.com/lang/en/docs/install/#windows-stable](https://classic.yarnpkg.com/lang/en/docs/install/#windows-stable)
```
npm install --global yarn
yarn --version
```
## 安装必须组件

### 安装 vuepress
```
npm install -D vuepress@next
```
### 安装打包工具和主题
```
npm install -D @vuepress/bundler-vite@next @vuepress/theme-default@next
```
### 安装sass-embedded
```
yarn add -D sass-embedded
```
#### Add math support to your VuePress site
```
npm i -D @vuepress/plugin-markdown-math@next
npm i -D mathjax-full
```
### Add additional features to your markdown images
```
npm i -D @vuepress/plugin-markdown-image@next
```


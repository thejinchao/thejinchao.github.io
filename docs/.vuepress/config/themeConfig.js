const nav = require('./nav.js');
const sidebar = require('./sidebar.js');

// 主题配置
module.exports = {
  logo: '/favicon.png',
  nav,
  sidebar,
  sidebarDepth: 2,
  repo: '',
  searchMaxSuggestions: 10,
  docsDir: 'docs',
  editLinks: false
}

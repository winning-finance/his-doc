const sidebar = require('./utils/gen-sidebar')()

module.exports = {
  title: '大his项目前端手册',
  description: '大 his 项目文档',
  base: '/his-doc',
  themeConfig: {
    nav: [
      { text: '指南', link: '/guide/' },
      { text: '配置', link: '/config/' },
      { text: 'API', link: '/api/' },
      { text: '插件', link: '/plugins/' },
      { text: '常见问题', link: '/issues/' }
    ],
    // displayAllHeaders: true,
    sidebarDepth: 3,
    sidebar: sidebar,
    lastUpdated: 'Last Updated',

    repo: 'winning-finance/his-doc',
    repoLabel: '查看源码',
  },

  dest: './dist',
};

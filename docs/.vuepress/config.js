/*
 * @Author: smallalso<hu141418@gmail.com>
 * @Date: 2020-12-08 18:33:27
 * @LastEditors: smallalso<hu141418@gmail.com>
 * @LastEditTime: 2020-12-17 15:28:24
 * @FilePath: /his-doc/docs/.vuepress/config.js
 */
// const sidebar = require('./utils/gen-sidebar')()
const navConf = require('./nav.conf.json')

module.exports = {
  base: '/his-doc/',
  title: 'HIS-前端开发手册',
  head: [
    ['link', { rel: 'icon', href: '/favicon.png' }],
  ],
  themeConfig: {
    nav: navConf,
    sidebarDepth: 3,
    sidebar: {
      '/guide/': [],
      '/tool/': [],
      '/standard/': []
    },
    lastUpdated: 'Last Updated',
    repo: 'winning-finance/his-doc',
    repoLabel: '查看源码',
  },
  dest: './dist',
};

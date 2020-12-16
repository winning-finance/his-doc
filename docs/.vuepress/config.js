/*
 * @Author: smallalso<hu141418@gmail.com>
 * @Date: 2020-12-08 18:33:27
 * @LastEditors: smallalso<hu141418@gmail.com>
 * @LastEditTime: 2020-12-15 16:28:22
 * @FilePath: /his-doc/docs/.vuepress/config.js
 */
// const sidebar = require('./utils/gen-sidebar')()
const navConf = require('./nav.conf.json')

module.exports = {
  title: '大His前端开发手册',
  description: '大his 项目文档',
  base: '/his-doc',
  themeConfig: {
    nav: navConf,
    // displayAllHeaders: true,
    sidebarDepth: 3,
    sidebar: {
      '/guide/': [{
        group: '开始',
        children: [
         'index',
         'introduction'
        ]
      }]
    },
    lastUpdated: 'Last Updated',
    repo: 'winning-finance/his-doc',
    repoLabel: '查看源码',
  },

  dest: './dist',
};

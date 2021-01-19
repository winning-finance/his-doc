/*
 * @Author: smallalso<hu141418@gmail.com>
 * @Date: 2020-12-08 18:33:27
 * @LastEditors: smallalso<hu141418@gmail.com>
 * @LastEditTime: 2020-12-18 16:46:50
 * @FilePath: /his-doc/docs/.vuepress/config.js
 */
// const sidebar = require('./utils/gen-sidebar')()
const navConf = require('./nav.conf.json')
const isDev = process.env.NODE_ENV === 'development'
// console.log(process.env.NODE_ENV === 'development', 888)

module.exports = {
  base: isDev ? '/' : '/his-doc/',
  title: isDev ? '' : 'HIS-前端开发手册',
  head: isDev ? '' : [
    ['link', { rel: 'icon', href: '/favicon.ico' }],
  ],
  themeConfig: {
    nav: navConf,
    sidebarDepth: 3,
    lastUpdated: 'Last Updated',
    repo: 'winning-finance/his-doc',
    repoLabel: '查看源码',
  },
  dest: './dist',
};

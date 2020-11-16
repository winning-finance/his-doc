let scanMd = require('./utils/scanMd');
let formatSidebar = require('./utils/formatSidebar');

let scanRes = scanMd();
let sidebar = formatSidebar(scanRes);

// console.log(sidebar);
module.exports = {
  title: '大 his 项目文档',
  description: '大 his 项目文档',
  base: '/his-doc/',
  themeConfig: {
    // 顶部导航栏
    nav: [
      { text: '首页', link: '/' },
      // { text: 'Guide', link: '/guide/' },
      // { text: 'External', link: 'https://google.com' },
    ],
    // displayAllHeaders: true,
    sidebarDepth: 2,
    // 侧边栏
    // sidebar: [
    //   {
    //     title: 'guide', // 必要的
    //     // path: '/guide/', // 可选的, 标题的跳转链接，应为绝对路径且必须存在
    //     collapsable: false, // 可选的, 默认值是 true,
    //     // sidebarDepth: 2, // 可选的, 默认值是 1
    //     children: ['/guide/'],
    //   },
    //   {
    //     title: 'blog',
    //     // path: '/blog/',
    //     collapsable: false, // 可选的, 默认值是 true,
    //     // sidebarDepth: 2, // 可选的, 默认值是 1
    //     children: ['/blog/', '/blog/one'],
    //   },
    // ],
    sidebar: sidebar,
    // sidebar: 'auto',
    lastUpdated: 'Last Updated',

    repo: 'winning-finance/his-doc',
    repoLabel: '查看源码',
  },

  dest: './dist',
};

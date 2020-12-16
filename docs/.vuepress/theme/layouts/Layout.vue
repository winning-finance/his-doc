<!--
 * @Author: smallalso<hu141418@gmail.com>
 * @Date: 2020-12-14 21:13:33
 * @LastEditors: smallalso<hu141418@gmail.com>
 * @LastEditTime: 2020-12-16 20:46:09
 * @FilePath: /his-doc/docs/.vuepress/theme/layouts/Layout.vue
-->
<template>
  <section>
    <his-header :navs="navs"></his-header>
    <main class="doc-main typo"
          :class="$page.path !== '/' ? 'doc-main-md' : ''">
      <template v-if="$page.path !== '/'">
        <his-side :sidebar="sidebar"></his-side>
      </template>
      <template v-if="content">
        <component :is="content"></component>
      </template>
      <template v-else>
        <Content/>
      </template>
    </main>
    <footer class="doc-footer"></footer>
  </section>
</template>

<script>
import Header from './Header'
import SideBar from './SideBar'

export default {
  name: 'his-layout',
  created () {
    // console.log(this.$page, this.$site, 'ggg')
  },
  computed: {
    navs () {
      const { themeConfig: { nav } } = this.$site
      return nav || []
    },
    currentNav () {
      const { path }  = this.$page
      return this.navs.find(item => {
        return path.indexOf(item.link) !== -1
      })
    },
    sidebar () {
      const { pages } = this.$site
      const sidebar = []
      pages.forEach(page => {
        if (page.path.indexOf(this.currentNav.link) !== -1) {
          if (!page.headers || !page.headers.length) return
          const validPage = page.headers.find(header => header.level === 2)
          if (validPage) {
            sidebar.push({
              title: validPage.title,
              path: page.path
            })
          }
        }
      })
      // console.log(sidebar, 'kkk')
      return sidebar
    },
    content () {
      const { frontmatter: { content } } = this.$page
      return content
    }
  },
  components: {
    [Header.name]: Header,
    [SideBar.name]: SideBar
  }
}
</script>
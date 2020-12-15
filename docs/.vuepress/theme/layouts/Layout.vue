<!--
 * @Author: smallalso<hu141418@gmail.com>
 * @Date: 2020-12-14 21:13:33
 * @LastEditors: smallalso<hu141418@gmail.com>
 * @LastEditTime: 2020-12-15 13:28:47
 * @FilePath: /his-doc/docs/.vuepress/theme/layouts/Layout.vue
-->
<template>
  <section>
    <his-header :navs="navs"></his-header>
    <main class="doc-main">
      <template v-if="$page.path !== '/'">
        <his-side></his-side>
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
    console.log(this.$site, 'ggg')
  },
  computed: {
    navs () {
      const { themeConfig: { nav } } = this.$site
      return nav || []
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
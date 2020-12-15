<!--
 * @Author: smallalso<hu141418@gmail.com>
 * @Date: 2020-12-14 10:03:38
 * @LastEditors: smallalso<hu141418@gmail.com>
 * @LastEditTime: 2020-12-15 11:36:13
 * @FilePath: /his-doc/docs/.vuepress/theme/layouts/Header.vue
-->

<template>
  <div>
    <header class="doc-header">
      <h2 class="doc-header-logo">
        <router-link to="/">
          <img src="../imgs/his.svg" alt="">
          <span>前端开发手册</span>
        </router-link>
      </h2>
      <ul class="doc-header-nav">
        <li v-for="nav in navs"
            class="doc-header-nav-item">
          <router-link :to="nav.link"
                       class="doc-header-nav-item-link">
            {{nav.text}}
          </router-link>
        </li>
      </ul>
    </header>
  </div>
</template>

<script>
export default {
  name: 'his-header',
  props: {
    navs: {
      type: Array,
      default: () => ([])
    }
  }
}
</script>

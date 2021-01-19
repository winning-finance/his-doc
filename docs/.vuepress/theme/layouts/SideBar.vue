<!--
 * @Author: smallalso<hu141418@gmail.com>
 * @Date: 2020-12-15 13:07:22
 * @LastEditors: smallalso<hu141418@gmail.com>
 * @LastEditTime: 2020-12-15 16:19:07
 * @FilePath: /his-doc/docs/.vuepress/theme/layouts/SideBar.vue
-->
<template>
  <aside class="doc-aside">
    <ul class="doc-aside-nav">
      <li v-for="side in sidebar"
          :key="side.path">
        <router-link :to="side.path">{{side.title}}</router-link>
      </li>
    </ul>
  </aside>
</template>

<script>
export default {
  name: 'his-side',
  props: {
    sidebar: {
      type: Array,
      default: () => ([])
    }
  }
}
</script>

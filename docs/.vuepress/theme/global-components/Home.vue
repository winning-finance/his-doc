<!--
 * @Author: smallalso<hu141418@gmail.com>
 * @Date: 2020-12-14 21:28:56
 * @LastEditors: smallalso<hu141418@gmail.com>
 * @LastEditTime: 2020-12-15 11:27:48
 * @FilePath: /his-doc/docs/.vuepress/theme/global-components/Home.vue
-->
<template>
  <div>
    <section class="his-banner">
      <ul class="his-banner-content">
        <li class="his-banner-title">
          <h3>HIS前端开发手册</h3>
        </li>
        <li class="his-banner-desc">
          开发his产品，请务必好好阅读此文档，做到知己知彼
        </li>
        <li>
          <button class="his-start-btn">快速开始 →</button>
        </li>
      </ul>
    </section>
    <section class="his-index-content">
      <ul class="his-index-desc">
        <li v-for="desc in descList"
            :key="desc.name"
            class="his-index-desc-item">
          <dl>
            <dt class="his-index-desc-item-name">{{desc.name}}</dt>
            <dd class="his-index-desc-item-text">
              {{desc.text}}
            </dd>
            <dd>
              <button class="his-index-desc-item-btn">去看看 →</button>
            </dd>
          </dl>
        </li>
      </ul>
    </section>

    <footer class="his-index-footer">
      <p>Copyright © 2021-present Powered by <a href="https://github.com/winning-finance">HIS-FE</a></p>
    </footer>
  </div>
</template>

<script>
export default {
  name: 'his-index',
  data () {
    return {
      descList: [{
        name: '指南',
        text: '了解his产品的前世今生和其所采用的技术方案，帮助开发人员建立全局的开发观念',
        link: ''
      }, {
        name: '工具',
        text: '为保持his项目的统一，方便后续代码维护、修改、同时为解决减少重复开发的问题、提高开发效率，我们开发了部分工具',
        link: ''
      }, {
        name: 'UI规范',
        text: 'HIS(医院管理系统)作为一个整体的系统，在整体产品形象展示必须统一，公共的UI标准，请在此查看',
        link: ''
      }]
    }
  }
}
</script>

<style lang="scss">
.his {
  &-banner {
    padding: 100px 0;
    background-color: #f5f6f8;
    &-content {
      text-align: center;
    }
    &-title {
      font-size: 42px;
      line-height: 50px;
    }
    &-desc {
      color: #454d64;
      margin: 16px 0 32px;
    }
  }
  &-start {
    &-btn {
      background-color: #329aff;
      color: #fff;
      height: 44px;
      border-radius: 40px;
      padding: 0 30px;
    }
  }
  &-index {
    &-content {
      max-width: 1140px;
      margin: 0 auto;
    }
    &-desc {
      display: flex;
      padding: 0;
      margin: 50px 0;
      &-item {
        text-align: center;
        flex: 1;
        // border: 1px solid #329aff;
        padding: 20px 36px;
        min-height: calc(100vh - 636px);
        &-name {
          color: #333;
          font-size: 24px;
        }
        &-text {
          line-height: 22px;
          padding: 20px 0;
          min-height: 70px;
          color: #717484;
        }
        &-btn {
          background-color: transparent;
          color: #329aff;
        }
      }
    }
    &-footer {
      color: #b0b1ba;
      text-align: center;
      font-size: 14px;
    }
  }
}
</style>

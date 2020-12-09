<template>
  <div>
    <h2>大his开发文档</h2>
    <ul>
      <li>
        <button>
          <a href="/views/">
            项目说明
          </a>
        </button>
      </li>
      <li>
        <button>
          <a href="http://172.16.6.201/webcomponents-finance-common/" target="blank">
            组件库
          </a>
        </button>
      </li>
    </ul>
    <!-- <button @click="onclick">button</button> -->
  </div>
</template>

<script>
export default {
  data: () => {
    return {
      isChange: false,
    };
  },
  methods: {
    onclick() {
      this.isChange = !this.isChange;
    },
  },
};
</script>

<style></style>

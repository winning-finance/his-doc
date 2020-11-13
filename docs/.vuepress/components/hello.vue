<template>
  <div>
    <span :style="{ color: this.isChange ? 'red' : 'blue' }"
      >测试vue组件效果</span
    >
    <br />
    <button @click="onclick">button</button>
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

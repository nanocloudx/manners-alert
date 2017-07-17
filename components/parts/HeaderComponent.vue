<template>
  <p class="header">{{message}}</p>
</template>

<script>
  export default {
    props: ['message']
  }
</script>

<style lang="scss" scoped>
  .header {
    position: fixed;
    z-index: 1;
    top: 10px;
    left: 0;
    right: 0;
    background-color: rgba(0, 0, 0, 0.7);
    color: #ffffff;
    text-align: center;
    padding: 5px;
    font-size: 16px;
    line-height: 30px;
  }
</style>

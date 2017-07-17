<template>
  <progress :value="percentage" max="100"></progress>
</template>

<script>
  export default {
    props: ['percentage']
  }
</script>

<style lang="scss" scoped>
  progress {
    position: fixed;
    z-index: 1;
    top: 0;
    left: 0;
    right: 0;
    width: 100%;
    height: 10px;
    background-color: #000000;
  }
  progress::-webkit-progress-value {
    transition: width 1s ease;
  }
</style>

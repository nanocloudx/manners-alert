<template>
  <div class="button-container">
    <button v-if="isDisable" class="main disable">{{message}}</button>
    <button v-else class="main" @click="onSelect()">{{message}}</button>
    <p class="option" v-if="optionMessage" @click="onOptionSelect ? onOptionSelect() : null">{{optionMessage}}</p>
  </div>
</template>

<script>
  export default {
    props: ['isDisable', 'message', 'optionMessage', 'onSelect', 'onOptionSelect']
  }
</script>

<style lang="scss" scoped>
  .button-container {
    position: fixed;
    z-index: 1;
    background-color: rgba(0, 0, 0, 0.7);
    bottom: 0;
    left: 0;
    right: 0;
    padding: 15px;
    text-decoration: none;
    text-align: center;
    .main {
      color: #ffffff;
      background-color: #4ca8c3;
      border-radius: 30px;
      border-style: none;
      font-size: 18px;
      width: 80%;
      padding: 10px 20px;
      cursor: pointer;
    }
    .disable {
      background-color: #999999;
    }
    .option {
      color: #ffffff;
      font-size: 12px;
      margin-top: 12px;
    }
  }
</style>

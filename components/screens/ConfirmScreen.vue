<template>
  <div>
    <div class="content">
      <img class="image" src="~assets/images/businessman_cry_woman.png" />
      <div class="summary">
        <h3>問題</h3>
        <p>{{ problemName }}</p>
        <h3>場所</h3>
        <p>{{ address }}</p>
        <h3>人物</h3>
        <p>{{ profile }}</p>
      </div>
    </div>
    <button-component
      :message="'送信する'"
      :optionMessage="'やりなおす'"
      :onSelect="onSelectConfirm"
      :onOptionSelect="onSelectReset"
    >
    </button-component>
  </div>
</template>

<script>
  import ButtonComponent from '~components/parts/ButtonComponent.vue'
  export default {
    components: {
      ButtonComponent
    },
    props: ['problemName', 'address', 'profile'],
    mounted() {
      window.ga('set', 'page', '/wizard#confirm')
      window.ga('send', 'pageview')
    },
    methods: {
      onSelectConfirm() {
        this.$emit('onSelectConfirm')
      },
      onSelectReset() {
        this.$emit('onSelectReset')
      }
    }
  }
</script>

<style lang="scss" scoped>
  .content {
    margin-bottom: 110px;
  }
  .image {
    width: 40%;
    margin: 15px auto;
    display: block;
  }
  .summary {
    text-align: center;
    padding: 15px;
    h3 {
      font-size: 18px;
    }
    p {
      margin-bottom: 10px;
    }
  }
</style>

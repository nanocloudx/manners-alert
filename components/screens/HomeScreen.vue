<template>
  <div>
    <div class="container">
      <div class="title">
        <h1>マナーアラート</h1>
        <p class="version">テスト運用中</p>
      </div>
      <nuxt-link :to="{path: '/'}"><img class="information" src="~assets/images/mark_question.png" /></nuxt-link>
      <img class="image" src="~assets/images/job_police_kidoutai.png" />
      <div class="notice">
        <h3>注意</h3>
        <p>緊急の場合は<span>110</span>へ電話</p>
        <p>相談したい場合は<span>#9110</span>へ電話</p>
      </div>
    </div>
    <button-component
      :message="'問題を報告する'"
      :onSelect="onSelectStart"
    ></button-component>
  </div>
</template>

<script>
  import ButtonComponent from '~components/parts/ButtonComponent.vue'
  import NuxtLink from '../../.nuxt/components/nuxt-link'
  export default {
    mounted() {
      window.ga('set', 'page', '/wizard#home')
      window.ga('send', 'pageview')
    },
    components: {
      NuxtLink,
      ButtonComponent
    },
    methods: {
      onSelectStart() {
        this.$emit('onSelectStart')
      }
    }
  }
</script>

<style lang="scss" scoped>
  .container {
    position: fixed;
    width: 100%;
    margin-top: -50px;
    padding: 15px;
  }
  .title {
    h1 {
      font-size: 30px;
    }
  }
  .image {
    display: block;
    margin: 0 auto;
    width: 100%;
  }
  .information {
    position: absolute;
    top: 20px;
    right: 20px;
    width: 30px;
  }
  .notice {
    position: fixed;
    bottom: 90px;
    left: 15px;
    right: 15px;
    padding: 10px;
    background-color: rgba(255,255,255,0.8);
    text-align: center;
    border: 2px solid #ff007c;
    border-radius: 5px;
    h3 {
      font-size: 16px;
      font-weight: bold;
    }
    p {
      font-size: 14px;
    }
    span {
      color: #ff007c;
      font-weight:bold;
      font-size: 16px;
    }
  }
</style>

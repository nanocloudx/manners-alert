<template>
  <div>
    <div class="content">
      <img class="thanks" src="~assets/images/job_koumuin_men_women.png" />
      <div class="message">
        <h2>ありがとうございます</h2>
        <p>調査に協力いただきありがとうございます。</p>
        <p>集められた情報は匿名で保存されます。</p>
        <p class="tips">※現在このアプリは<strong>テスト運用中</strong>です。</p>
        <p class="tips">このアプリは問題を直接的に解決するものではありません。利用状況を鑑みて、想定より多くの有意な情報が集まりましたら、何らかの形で各自治体などへ公開するかもしれませんし、しないかもしれません。</p>
      </div>
    </div>
    <button-component
      :message="'ホームへもどる'"
      :onSelect="onSelectComplete"
    ></button-component>
  </div>
</template>

<script>
  import ButtonComponent from '~components/parts/ButtonComponent.vue'
  export default {
    components: {
      ButtonComponent
    },
    mounted() {
      window.ga('set', 'page', '/wizard#complete')
      window.ga('send', 'pageview')
    },
    methods: {
      onSelectComplete() {
        this.$emit('onSelectComplete')
      }
    }
  }
</script>

<style lang="scss" scoped>
  .content {
    margin-bottom: 110px;
  }
  .thanks {
    width: 80%;
    display: block;
    margin: 0 auto 15px;
  }
  .message {
    text-align: center;
    padding: 15px;
    h2 {
      font-size: 24px;
      margin-bottom: 15px;
    }
    p {
      font-size: 14px;
      margin-bottom: 5px;
    }
    .tips {
      font-size: 12px;
      color: #777777;
    }
  }
</style>

<template>
  <div>
    <div class="header">
      <div class="container">
        <h1>マナーアラート</h1>
        <div>
          <img class="image" src="~assets/images/job_koumuin_men_women.png" />
        </div>
      </div>
    </div>
    <div class="wizard-launch">
      <div class="container">
        <nuxt-link :to="{path:'/wizard'}"><button>アプリを起動する</button></nuxt-link>
        <p class="tips">※スマートフォンブラウザに対応しています</p>
      </div>
    </div>
    <div class="section gray">
      <div class="container">
        <h3>このサービスについて</h3>
        <div class="paragraph">
          <p>通勤中や通学中、あるいはお買い物の帰り道や散歩中、路上でマナーの悪い行動を見かけたことはありませんか？</p>
          <p>せっかく気分がいい日だとしても、マナーの悪い行動を見ると、なんだか嫌な気持ちになりますよね...</p>
          <p>このアプリは<strong>「警察に通報するほどではないけれど許したくない！」</strong>そんな気持ちを匿名で通報するサービスです。</p>
          <p>（その場で相手に注意できるほど正義感の強い人ばかりではないですからね）</p>
        </div>
      </div>
    </div>
    <div class="section">
      <div class="container">
        <h3>使い方</h3>
        <div class="paragraph">
          <p>使い方はとてもシンプルです。</p>
          <p>基本的に<strong>このアプリを起動する必要はありません</strong>(それが一番良いことです！)</p>
          <p>ただ、もしもマナーの悪い行動をみかけたら、そっとこのアプリを起動してください。</p>
        </div>
        <div class="paragraph">
          <p>アプリを起動するとあなたの現在位置が表示されますので、そこで何が起きていたか選択してください。</p>
          <p>送信すると<strong>「時間、場所、何が起きたか」</strong>などの情報を<strong>匿名</strong>で登録することが出来ます。</p>
        </div>
        <div class="paragraph">
          <p>情報が蓄積されることで、地域で発生している問題を視覚化することができるかもしれません。</p>
          <p>例えばゴミのポイ捨てが集中している箇所が分かれば、各行政がゴミ箱を設置する参考になるかもしれません。</p>
          <p>危険な飛び出しが集中している箇所が分かれば、信号や横断歩道を増やす参考になるかもしれません。</p>
          <p>(※このサービスは<strong>テスト運用中</strong>です。集められたデータを閲覧する機能はいまのところありません。また利用状況や運用の理由により、サービスを中断あるいは停止する可能性があります。)</p>
        </div>
      </div>
    </div>
    <div class="section gray">
      <div class="container">
        <h3>注意</h3>
        <div class="paragraph">
          <p>もし緊急性の高い問題が発生した場合は、迷わずに警察へ通報することをおすすめします。</p>
          <p>このアプリは問題を直接的に解決するものではありません。利用状況を鑑みて、想定より多くの有意な情報が集まりましたら、何らかの形で各自治体などへ公開するかもしれませんし、しないかもしれません。</p>
        </div>
      </div>
    </div>
    <div class="section">
      <div class="container">
        <h3>開発について</h3>
        <div class="paragraph">
          <p>このサービスは <a href="https://twitter.com/nanocloudx" target="_blank">@nanocloudx</a> が個人で開発しています。</p>
          <p>お問い合わせは twitter の DM よりお願い致します。</p>
        </div>
      </div>
    </div>
    <div class="footer">
      <div class="container">
        <p>マナーアラート(テスト運用中)</p>
        <p class="copyright">&copy; <a href="https://www.drossel.io/">drossel</a></p>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    mounted() {
      window.ga('set', 'page', '/')
      window.ga('send', 'pageview')
    }
  }
</script>
<style lang="scss" scoped>
  .container {
    max-width: 960px;
    margin: 0 auto;
  }
  .wizard-launch {
    background-color: #ffc800;
    padding: 15px;
    text-align: center;
    button {
      width: 60%;
      color: #ffffff;
      background-color: #4ca8c3;
      border-radius: 30px;
      border-style: none;
      font-size: 18px;
      padding: 10px 20px;
      cursor: pointer;
    }
    .tips {
      color: #777777;
      font-size: 14px;
    }
  }
  .section {
    &.gray {
      background-color: #f5f5f5;
    }
    padding: 30px 15px;
    h3 {
      font-size: 26px;
      padding: 10px;
      text-align: center;
    }
    .paragraph {
      padding: 10px;
    }
  }
  .header {
    padding: 20px 15px;
    h1 {
      font-size: 28px;
      padding: 10px 0;
    }
    .image {
      display: block;
      margin: 0 auto;
      width: 80%;
    }
  }
  .footer {
    color: #fdfdfd;
    background-color: #303c42;
    margin-top: 30px;
    padding: 20px 15px;
    p {
      color: #fdfdfd;
      text-align: center;
      font-size: 14px;
    }
    .copyright {
      font-size: 12px;
    }
    a {
      color: #fdfdfd;
    }
  }
</style>
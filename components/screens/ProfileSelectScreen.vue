<template>
  <div>
    <div class="content">
      <div class="select-list">
        <h3>性別</h3>
        <label class="select-list-item half"><input v-model.number="genderId" type="radio" name="gender" value="1"><span>男性</span></label>
        <label class="select-list-item half"><input v-model.number="genderId" type="radio" name="gender" value="2"><span>女性</span></label>
      </div>
      <div class="select-list">
        <h3>年齢</h3>
        <label class="select-list-item"><input v-model.number="ageId" type="radio" name="age" value="1"><span>10代以下</span></label>
        <label class="select-list-item"><input v-model.number="ageId" type="radio" name="age" value="2"><span>20~30代</span></label>
        <label class="select-list-item"><input v-model.number="ageId" type="radio" name="age" value="3"><span>40~50代</span></label>
        <label class="select-list-item"><input v-model.number="ageId" type="radio" name="age" value="4"><span>60代以上</span></label>
      </div>
    </div>
    <button-component
      :message="'この人物を報告する'"
      :optionMessage="formattedProfile"
      :onSelect="onSelectProfile"
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
    data() {
      return {
        genderId: 1,
        ageId: 1
      }
    },
    mounted() {
      window.ga('set', 'page', '/wizard#profileSelect')
      window.ga('send', 'pageview')
    },
    computed: {
      formattedProfile() {
        let gender
        let age
        switch (this.genderId) {
          case 1:
            gender = '男性'
            break
          case 2:
            gender = '女性'
            break
        }
        switch (this.ageId) {
          case 1:
            age = '10代以下'
            break
          case 2:
            age = '20~30代'
            break
          case 3:
            age = '40~50代'
            break
          case 4:
            age = '60代以上'
            break
          }
        return `${age} ${gender}`
      }
    },
    methods: {
      onSelectProfile() {
        this.$emit('onSelectProfile', this.genderId, this.ageId, this.formattedProfile)
      }
    }
  }
</script>

<style lang="scss" scoped>
  .content {
    margin-bottom: 110px;
  }
  .select-list {
    margin: 10px 15px;
    h3 {
      font-size: 20px;
    }
    .select-list-item > span {
      box-sizing: border-box;
      line-height: 28px;
      font-size: 18px;
      width: 100%;
      display: block;
      text-align: center;
      border-radius: 20px;
      margin: 10px auto;
      padding: 5px;
    }
  }
  input[type="radio"] {
    display: none;
  }
  input[type="radio"]:checked + span {
    outline: 5px solid skyblue;
    font-weight: bold;
  }
</style>

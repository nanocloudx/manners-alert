<template>
  <div>
    <div class="content">
      <div class="list-container">
        <ul class="menu-list">
          <li v-for="problem in problems" :class="{selected: selectedProblem.id === problem.id}" class="menu-list-item" @click="onClickItem(problem.id)">
            <p>{{problem.name}}</p>
            <p>{{problem.description}}</p>
          </li>
        </ul>
      </div>
    </div>
    <button-component
      v-show="selectedProblem.id"
      :message="'この問題を報告する'"
      :optionMessage="selectedProblem.name"
      :onSelect="onSelectProblem"
    ></button-component>
  </div>
</template>

<script>
  import ButtonComponent from '~components/parts/ButtonComponent.vue'
  export default {
    components: {
      ButtonComponent
    },
    props: ['problems'],
    data() {
      return {
        selectedProblem: {}
      }
    },
    mounted() {
      window.ga('set', 'page', '/wizard#problemSelect')
      window.ga('send', 'pageview')
    },
    methods: {
      onClickItem(problemId) {
        this.selectedProblem = this.problems.find((item) => {
          return item.id === problemId
        })
      },
      onSelectProblem() {
        this.$emit('onSelectProblem', this.selectedProblem)
      }
    }
  }
</script>

<style lang="scss" scoped>
  .content {
    margin-bottom: 110px;
  }
  .list-container {
    margin-bottom: 110px;
  }
  .menu-list {
    .menu-list-item {
      padding: 10px 20px;
      border-bottom: 1px solid #dddddd;
      &.selected {
        background-color: #dddddd;
      }
      &:last-child {
        border-bottom: none;
        margin-bottom: 15px;
      }
    }
  }
</style>

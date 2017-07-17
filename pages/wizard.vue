<template>
  <div class="main">
    <div class="preload">
      <img src="~assets/images/job_police_kidoutai.png" />
      <img src="~assets/images/space_jinkoueisei.png" />
      <img src="~assets/images/businessman_cry_woman.png" />
      <img src="~assets/images/job_koumuin_men_women.png" />
    </div>
    <progress-component v-show="progressPercentage" :percentage="progressPercentage"></progress-component>
    <header-component v-show="headerMessage" :message="headerMessage"></header-component>
    <div class="screens">
      <home-screen
        v-if="selectedScreen=='home'"
        @onSelectStart="onSelectStart()"
      ></home-screen>
      <location-select-screen
        v-if="selectedScreen=='locationSelect'"
        @onSelectLocation="onSelectLocation(...arguments)"
      ></location-select-screen>
      <problem-select-screen
        v-if="selectedScreen=='problemSelect'"
        :problems="problems"
        @onSelectProblem="onSelectProblem(...arguments)"
      ></problem-select-screen>
      <profile-select-screen
        v-if="selectedScreen=='profileSelect'"
        @onSelectProfile="onSelectProfile(...arguments)"
      ></profile-select-screen>
      <confirm-screen
        v-if="selectedScreen=='confirm'"
        :problem-name="problemName"
        :address="formattedAddress"
        :profile="formattedProfile"
        @onSelectConfirm="onSelectConfirm(...arguments)"
        @onSelectReset="onSelectReset()"
      ></confirm-screen>
      <complete-screen
        v-if="selectedScreen=='complete'"
        @onSelectComplete="onSelectComplete()"
      ></complete-screen>
    </div>
  </div>
</template>

<script>
import axios from '~plugins/axios'
import ProgressComponent from '~components/parts/ProgressComponent.vue'
import HeaderComponent from '~components/parts/HeaderComponent.vue'
import HomeScreen from '~components/screens/HomeScreen.vue'
import LocationSelectScreen from '~components/screens/LocationSelectScreen.vue'
import ProblemSelectScreen from '~components/screens/ProblemSelectScreen.vue'
import ProfileSelectScreen from '~components/screens/ProfileSelectScreen.vue'
import ConfirmScreen from '~components/screens/ConfirmScreen.vue'
import CompleteScreen from '~components/screens/CompleteScreen.vue'
export default {
  components: {
    ProgressComponent,
    HeaderComponent,
    HomeScreen,
    LocationSelectScreen,
    ProblemSelectScreen,
    ProfileSelectScreen,
    ConfirmScreen,
    CompleteScreen
  },
  data() {
    return {
      problems: null,
      progressPercentage: 0,
      headerMessage: null,
      selectedScreen: 'home',
      formattedAddress: null,
      formattedProfile: null,
      problemName: null,
      sendData: {
        address: {},
        problemId: null,
        genderId: null,
        ageId: null
      }
    }
  },
  mounted() {
    axios.get('/api/problem-list').then(result => {
      this.problems = result.data
    })
  },
  methods: {
    mountHomeScreen() {
      this.selectedScreen = 'home'
      this.progressPercentage = null
      this.headerMessage = null
    },
    mountSelectLocationScreen() {
      this.selectedScreen = 'locationSelect'
      this.progressPercentage = 20
      this.headerMessage = '問題の発生した場所を選択します'
    },
    mountSelectProblemScreen() {
      this.selectedScreen = 'problemSelect'
      this.progressPercentage = 40
      this.headerMessage = '問題の内容について選択します'
    },
    mountSelectProfileScreen() {
      this.selectedScreen = 'profileSelect'
      this.progressPercentage = 60
      this.headerMessage = '問題の人物について選択します'
    },
    mountConfirmScreen() {
      this.selectedScreen = 'confirm'
      this.progressPercentage = 80
      this.headerMessage = '以下の内容でよろしいですか？'
    },
    mountCompleteScreen() {
      this.selectedScreen = 'complete'
      this.progressPercentage = 100
      this.headerMessage = null
    },
    sendServer() {
      return axios.post('/api/problem', this.sendData)
    },
    onSelectStart() {
      this.mountSelectLocationScreen()
    },
    onSelectLocation(address, formattedAddress) {
      this.sendData.address = address
      this.formattedAddress = formattedAddress
      this.mountSelectProblemScreen()
    },
    onSelectProblem(problem) {
      this.problemName = problem.name
      this.sendData.problemId = problem.id
      this.mountSelectProfileScreen()
    },
    onSelectProfile(genderId, ageId, formattedProfile) {
      this.sendData.genderId = genderId
      this.sendData.ageId = ageId
      this.formattedProfile = formattedProfile
      this.mountConfirmScreen()
    },
    onSelectConfirm() {
      this.sendServer().then(result => {
        console.log(result); // eslint-disable-line
        this.mountCompleteScreen()
      })
    },
    onSelectReset() {
      this.mountSelectLocationScreen()
    },
    onSelectComplete() {
      this.mountHomeScreen()
    }
  },
  events: {
    //
  },
  head () {
    return {
      title: `マナーアラート`
    }
  }
}
</script>

<style lang="scss" scoped>
  .screens {
    position: absolute;
    top: 50px;
    left: 0;
    right: 0;
    bottom: 0;
  }
  .preload {
    display: none;
  }
</style>

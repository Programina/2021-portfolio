import { mapState } from 'vuex'
  export default {
    computed: {
        ...mapState({currentRoute: state => state.currentRoute}),
        currentRoutePath() {
          console.log("Store", this.currentRoute.path, "router", this.$router.currentRoute)
          return this.currentRoute.path
        },
        currentRoute(){
          return this.currentRoute
        }
  } ,
  watch: {
    'currentRoutePath': {
      deep: true,
      immediate: true,
      handler(newVal, oldVal) {
        if (newVal) {
          console.log("currentRoute changed value", newVal, oldVal)
        }
      }
    }
  },
}
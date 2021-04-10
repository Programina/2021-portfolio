import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    currentRoute: {
      path: '',
      name: ''
    }
  },
  mutations: {
  },
  actions: {
    setCurrentRoute({commit, state}, routeInfo)
  },
  modules: {
  }
})

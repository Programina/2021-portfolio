import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    currentRoute: {
      path: '',
      name: ''
    },      
    disclaimer: '<strong>Please note:</strong> I have been employed full-time ever since I became a developer. Everything I code and design on here, I do in my free time. My companies’ products were mostly proprietary, so I have very little to share.',

  },
  mutations: {
    UPDATE_CURRENT_ROUTE(state, routeResult) {
      state.currentRoute = routeResult
    }
  },
  actions: {
    setCurrentRoute({commit}, route) {
      let routeResult = {
        path: route.path,
        name: route.name
      }

      commit('UPDATE_CURRENT_ROUTE', routeResult)
    }
  },
  modules: {
  }
})

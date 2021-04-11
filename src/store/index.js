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

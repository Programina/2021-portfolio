
import store from '@/store/index'


export default {
  setCurrentRoute(route) {
    store.dispatch('setCurrentRoute', {path: route.path})
  }
}
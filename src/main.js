import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify';
import NavService from '@/services/NavService.js'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App),
  beforeCreate(){
    NavService.setCurrentRoute(this.$router.currentRoute)
  }
}).$mount('#app')

<template>
  <div id="home" :class="[isMobile ? 'isMobile' : undefined]">
    <div v-if="currentRoute.path === '/'  || currentRoute.path ===  '/home' || currentRoute.path ===  '/ux-ui'  ">
      <UxUi/>
    </div>
    <div v-else>
     <router-view />
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
// @ is an alias to /src
import UxUi from '@/views/UxUi.vue'
import ismobile from '@/mixins/ismobile.js'

export default {
  name: 'Home',
  mixins: [ismobile],
  components: {
    UxUi
  },
  computed: {
    ...mapState(["currentRoute"])
  }
}
</script>

<style lang="scss" scoped>
   #home {
     &.isMobile {
       padding: 0 30px; 
     }
   
   }
 
</style>

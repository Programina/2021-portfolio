<template>
  <div id="home">
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

export default {
  name: 'Home',
  components: {
    UxUi
  },
  computed: {
    ...mapState(["currentRoute"])
  }
}
</script>

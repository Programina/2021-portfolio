<template>
  <div id="nav-second-level" class="my-3">
    <router-link v-for="(navItem, i) in navigation" :id="navItem.name" :key="i" :to="navItem.to"  :class="[!isMobile ? 'mx-5' : 'mx-2']">{{ navItem.name }}
    </router-link>
  </div>
</template>

<script>
import ismobile from '@/mixins/ismobile.js'
import {mapState} from 'vuex'
export default {
  name: "NavBarSecondLevel",
  components: {},
  
  mixins: [ismobile],
  props: {},
  data() {
    return {
      uxEl: null,
      isHomeScreen: true,
      navigation: [
        {
          to: "/ux-ui",
          name: "UX & UI",
        },
        {
          to: "/development",
          name: "Development",
        },
        {
          to: "/other",
          name: "Other",
        },
      ],
    };
  },
  computed: {
  ...mapState(["currentRoute"]),
   },
  mounted(){
    this.isHomeScreen = true
    if(this.currentRoute.path === ('/' || '/home' || '/ux-ui') && this.isHomeScreen) {
      this.uxEl = document.getElementById('UX & UI')
      this.uxEl.style.backgroundImage = "linear-gradient(transparent 50%, #C9F8F7 0%)"
    } 
  }, 
  watch: {
    'currentRoute.path'(newVal, oldVal) {
      if(newVal != oldVal && this.uxEl) {
        this.isHomeScreen = false
        this.uxEl.removeAttribute("style")
      }
    }
  },
  beforeDestroy(){
    this.isHomeScreen = false
  }
};
</script>
<style lang="scss" scoped>
 #nav-second-level {

    a:hover, a:active, .router-link-exact-active {
      background-image: linear-gradient(transparent 50%, #C9F8F7 0%);
    }

   a, a:hover, a:visited, a:active, a:focus {
     text-decoration: none;
   }
 }
</style>
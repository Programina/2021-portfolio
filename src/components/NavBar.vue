<template>
  <v-app-bar
    id="navbar"
    flat
    :style="{'flex': '0 1 auto'}, { 'background-color': color}"
    :class="[{ 'mobile-spacing': isMobile }, [isMobile ? 'navbar' : undefined]]"
  >
    <div class="d-flex align-center">
      <router-link :style="{'color': fontColor}" to="/">
        <v-img
              alt="Amina Belabbes Logo"
              class="shrink mr-2"
              contain
              src="@/assets/logo_transparent.png"
              transition="scale-transition"
              width="80"
            />
      </router-link>
    </div>

    <v-spacer v-if="!isMobile"></v-spacer>

    <div id="nav" v-if="!isMobile">
      <router-link :style="{'color': fontColor + ' !important'}" v-for="(navItem, i) in navigation" :key="i" :to="navItem.to"
        >{{ navItem.name }}
      </router-link>
      <a
        :style="{'color': fontColor + ' !important'}"
        href="./abelabbesResume.pdf"
        download="Amina_Belabbes_Resume_2021.pdf"
        filetype="pdf"
        >Resume (German)</a
      >
      <router-link :style="{'color': fontColor + ' !important', 'font-weight': 'bolder'}" to="contact"
        >Contact
      </router-link>
    </div>

    <v-spacer v-if="isMobile"></v-spacer>

    <v-app-bar-nav-icon style="color: black !important" v-if="isMobile" @click.stop="toggleDrawer">
    </v-app-bar-nav-icon> 
  </v-app-bar>
</template>

<script>
import ismobile from '@/mixins/ismobile.js'
export default {
  name: "NavBar",
  mixins: [ismobile],
  props: {
    color: {
      type: String,
      required: true
    },
    fontColor: {
      type: String,
      required: true
    },
  },
  methods: {
    toggleDrawer(){
      this.$emit('toggle-drawer')
    }
  },
  data() {
    return {
      navigation: [
        {
          to: "/",
          name: "Home",
        },
        {
          to: "/about",
          name: "About",
        }
      ]
    };
  }
};
</script>

<style lang="scss" scoped>

  a, a:hover, a:active, a:visited, a:focus {
    text-decoration: none;
  }

  .navbar {
    position: fixed !important; 
    top: 0 !important;
    z-index: 2 !important;
  }

  #nav {
    a:hover, a:active {
      background-image: linear-gradient(transparent 50%, #C9F8F7 0%);
    }
  }
 
</style>

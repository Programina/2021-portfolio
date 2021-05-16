<template>
  <v-app-bar
    id="navbar"
    flat
    :style="{'flex': '0 1 auto'}, { 'background-color': color}"
    :class="[{ 'mobile-spacing': isMobile }, [isMobile ? 'navbar' : undefined]]"
  >
    <div class="d-flex align-center">
      <router-link :style="{'color': fontColor}" to="/">
        <v-img v-if="isMobile"
              alt="Amina Belabbes Logo"
              class="shrink mr-2"
              contain
              src="@/assets/logo.png"
              transition="scale-transition"
              width="60"
            />

         <v-img v-else
              alt="Amina Belabbes Logo"
              class="shrink mr-2"
              contain
              src="@/assets/logo_text.png"
              transition="scale-transition"
              width="140"
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
        target="_blank"
        download="Amina_Belabbes_Resume_2021.pdf"
        @click="openPdf"
        >German CV</a
      >
      <router-link :style="{'color': '#3bcea0' + ' !important', 'font-weight': 'bolder'}" to="contact"
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
    },
    openPdf() {
      window.open('./abelabbesResume.pdf');
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
    margin-left: 25px;
  }

  .navbar {
    position: fixed !important; 
    top: 0 !important;
    z-index: 2 !important;
  }

  #nav {

    a:active {
      background-image: linear-gradient(transparent 50%, #C9F8F7 0%);
    }
    .router-link-exact-active {
      background-image: linear-gradient(transparent 50%, #C9F8F7 0%);
    }

    a:hover {
      background-image: linear-gradient(transparent 50%, #C9F8F7 0%);
      // background-size: 0 100%;
      // background-repeat: no-repeat;
      transition: all .2s ease-out;
      -webkit-transition: all .2s ease-out;
    }
  }
 
</style>

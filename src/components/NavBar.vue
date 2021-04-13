<template>
  <v-toolbar
    :style="[{'flex': '0 1 auto'}, { 'background-color': color}]"
    :class="{ 'mobile-spacing': isMobile }"
    flat
    light
  >
    <div class="d-flex align-center">
      <router-link :style="{'color': fontColor}" to="/">
        <!-- <v-img
              alt="Vuetify Logo"
              class="shrink mr-2"
              contain
              src="./assets/logo.png"
              transition="scale-transition"
              width="40"
            /> -->
        <div>Amina</div>
      </router-link>
    </div>

    <v-spacer v-if="!isMobile"></v-spacer>

    <div id="nav" v-if="!isMobile">
      <router-link :style="{'color': fontColor}" v-for="(navItem, i) in navigation" :key="i" :to="navItem.to"
        >{{ navItem.name }}
      </router-link>
      <a
        :style="{'color': fontColor}"
        href="./abelabbesResume.pdf"
        download="Amina_Belabbes_Resume_2021.pdf"
        filetype="pdf"
        >Resume (German)</a
      >
    </div>

    <v-spacer v-if="isMobile"></v-spacer>

    <v-app-bar-nav-icon v-if="isMobile" @click.stop="drawer = !drawer">
    </v-app-bar-nav-icon>
  </v-toolbar>
</template>

<script>
import ismobile from '@/mixins/ismobile.js'
export default {
  name: "NavBar",
  mixins: [ismobile],
  props: {
    color: {
      type: String,
      required: false
    },
    fontColor: {
      type: String,
      required: false
    },
  },
  data() {
    return {
      navigation: [
        {
          to: "/",
          name: "Home",
        },
        {
          to: "/contact",
          name: "Contact",
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

<style lang="css" scoped></style>

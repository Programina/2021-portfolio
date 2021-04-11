<template>
  <v-toolbar
    color="background"
    :class="{ 'mobile-spacing': isMobile }"
    flat
    light
  >
    <div class="d-flex align-center">
      <router-link to="/">
        <!-- <v-img
              alt="Vuetify Logo"
              class="shrink mr-2"
              contain
              src="./assets/logo1.png"
              transition="scale-transition"
              width="40"
            /> -->
        <div>Amina</div>
      </router-link>
    </div>

    <v-spacer v-if="!isMobile"></v-spacer>

    <div id="nav" v-if="!isMobile">
      <router-link v-for="(navItem, i) in navigation" :key="i" :to="navItem.to"
        >{{ navItem.name }}
      </router-link>
      <a
        href="@/assets/abelabbesCV2020.pdf"
        download="Amina_Belabbes_Resume_2021.pdf"
        filetype="pdf"
        >Resume</a
      >
    </div>

    <v-spacer v-if="isMobile"></v-spacer>

    <v-app-bar-nav-icon v-if="isMobile" @click.stop="drawer = !drawer">
    </v-app-bar-nav-icon>
  </v-toolbar>
</template>

<script>
export default {
  name: "NavBar",
  components: {},
  props: {},
  data() {
    return {};
  }
};
</script>

<style lang="css" scoped></style>

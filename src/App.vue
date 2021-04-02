<template>
  <v-app>
    <v-app-bar app color="background" :class="{'d-flex' : isMobile}" data-qa="data" flat light>
      <div class="d-flex align-center">
        <v-img
          alt="Vuetify Logo"
          class="shrink mr-2"
          contain
          src="./assets/logo1.png"
          transition="scale-transition"
          width="40"
        />
      </div>

      <!-- <v-spacer v-if="!isMobile"></v-spacer>

      <div id="nav" v-if="!isMobile">
        <router-link to="/">Home</router-link> |
        <router-link to="/about">About</router-link> |
        <router-link to="/contact">Contact</router-link> 
      </div>

      <v-spacer v-if="!isMobile"></v-spacer> -->

      <v-btn
          v-if="isMobile" 
          href="#"
          target="_blank"
          fab
          small
          depressed
          color="background"
          class="button-gradient"
        > 
        <v-icon >mdi-menu</v-icon>
      </v-btn>

    </v-app-bar>

    <v-main>
      <router-view />
      <!-- <Home/>
      <About/>
      <Contact/> -->
    </v-main>
  </v-app>
</template>

<script>
import Home from "./views/Home";
import About from "./views/About";
import Contact from "./views/Contact";

export default {
  name: "App",

  components: {
    Home,
    About,
    Contact,
  },

  data: () => ({
    //
  }),
  
  computed: {
      isMobile () {
        switch (this.$vuetify.breakpoint.name) {
          case 'xs': return true
          case 'sm': return true
          case 'md': return false
          case 'lg': return false
          case 'xl': return false
        }
      },
    },
};
</script>

<style lang="scss" >
html,
body {
  background: #fff;
  height: 100%;
  width: 100%;
  margin: 0;
  padding: 0;
  font-family: 'Poppins', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.heading1 {
  font-weight: 500;
  font-size: 25px;
  letter-spacing: 0px;
}
.heading2 {
  font-weight: 400;
  font-size: 17px;
  letter-spacing: 0px;
}

</style>
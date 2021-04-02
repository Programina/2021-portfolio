<template>
  <v-app>
    <v-app-bar app color="background" :class="{'mobile-spacing' : isMobile}" data-qa="DAATAAAA  " flat light>
      <div class="d-flex align-center">
        <router-link to="/">
           <v-img
              alt="Vuetify Logo"
              class="shrink mr-2"
              contain
              src="./assets/logo1.png"
              transition="scale-transition"
              width="40"
            />
        </router-link>
      </div>

      <v-spacer v-if="!isMobile"></v-spacer>

      <div id="nav" v-if="!isMobile" >
        <router-link to="/">Home</router-link> 
        <router-link to="/about">About</router-link> 
        <router-link to="/contact">Contact</router-link> 
      </div>

      <v-spacer v-if="!isMobile"></v-spacer>

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

.mobile-spacing {
    display: flex !important;

    .v-toolbar__content {
      width: 100%;
      flex-direction: row !important;
      justify-content: space-between !important;
    }
}

#nav {
  margin-left: -48px !important;

  a {
    padding: 0 15px;
  }
}

</style>
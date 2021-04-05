<template>
  <v-app>
    <v-app-bar
      app
      color="background"
      :class="{ 'mobile-spacing': isMobile }"
      data-qa="DAATAAAA  "
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
        </router-link>
      </div>
    
      <v-spacer v-if="!isMobile"></v-spacer>

      <div id="nav" v-if="!isMobile">
        <router-link v-for="(navItem, i) in navigation" :key="i"  :to="navItem.to">{{navItem.name}}</router-link>
      </div>

      <v-spacer v-if="!isMobile"></v-spacer>
      <!-- 
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
        
      </v-btn> -->
      <v-app-bar-nav-icon
        v-if="isMobile"
        @click.stop="drawer = !drawer"
      ></v-app-bar-nav-icon>
    </v-app-bar>

    <v-main>
      <router-view />
    </v-main>
      <v-navigation-drawer v-if="isMobile" v-model="drawer" absolute right temporary>
        <v-list nav dense>
          <v-list-item-group
            v-model="group"
            active-class="deep-purple--text text--accent-4"
          >
            <v-list-item v-for="(navItem, i) in navigation" :key="i" >
              <v-list-item-title> 
                <router-link :to="navItem.to">{{navItem.name}}</router-link>
              </v-list-item-title>
            </v-list-item>
          </v-list-item-group>
        </v-list>
      </v-navigation-drawer>
    <footer>Copyright Amina Belabbes (c) 2021</footer>
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
    drawer: false,
    group: null,
    navigation: [
      {
        to: '/',
        name: 'Home'
      },
      {
        to: '/contact',
        name: 'Contact'
      },
      {
        to: '/about',
        name: 'About'
      },
    ]
  }),

  computed: {
    isMobile() {
      switch (this.$vuetify.breakpoint.name) {
        case "xs":
          return true;
        case "sm":
          return true;
        case "md":
          return false;
        case "lg":
          return false;
        case "xl":
          return false;
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
  font-family: "Poppins", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

a,
.btn-link a {
  text-decoration: none;
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
  // margin-left: -48px !important; needs to be added if there is a logo

  a {
    padding: 0 15px;
  }
}

footer {
  height: 50px;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  color: #959595;
  font-size: 0.9em;
}
</style>
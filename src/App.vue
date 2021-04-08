<template>
  <v-app>
    <v-app-bar
      app
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
        </router-link>
      </div>

      <v-spacer v-if="!isMobile"></v-spacer>

      <div id="nav" v-if="!isMobile">
        <router-link
          v-for="(navItem, i) in navigation"
          :key="i"
          :to="navItem.to"
          >{{ navItem.name }}
          </router-link>
        <a href="">Resume</a>
      </div>

      <v-spacer v-if="!isMobile"></v-spacer>
      

      <v-app-bar-nav-icon
        v-if="isMobile"
        @click.stop="drawer = !drawer"
      ></v-app-bar-nav-icon>
    </v-app-bar>

    <v-main class="main">
      <router-view />
    </v-main>
    <v-navigation-drawer
      v-if="isMobile"
      v-model="drawer"
      absolute
      right
      temporary
    >
      <v-list 
      nav 
      dense>
        <v-list-item-group
          v-model="group"
        >
          <v-list-item v-for="(navItem, i) in navigation" :key="i">
            <v-list-item-title>
              <router-link :to="navItem.to">{{ navItem.name }}</router-link>
            </v-list-item-title>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
    <v-footer class="footer d-flex flex-column align-center justify-center">
        <div class="footer-icons d-flex align-center justify-center">
            <a data-v-2c037838="" href="mailto:programina.belabbes@gmail.com"
              ><i data-v-2c037838="" class="fa fa-envelope"></i></a
            ><a data-v-2c037838="" href="http://www.twitter.com/MsAminaBelabbes"
              ><i data-v-2c037838="" class="fa fa-twitter"></i></a
            ><a data-v-2c037838="" href="https://www.instagram.com/programina/"
              ><i data-v-2c037838="" class="fa fa-instagram"></i></a
            ><a data-v-2c037838="" href="https://github.com/programina-gui"
              ><i data-v-2c037838="" class="fa fa-github"></i></a
            ><a data-v-2c037838="" href="https://codepen.io/programina-gui"
              ><i data-v-2c037838="" class="fa fa-codepen"></i></a
            ><a data-v-2c037838="" href="https://stackblitz.com/@Programina"
              ><i data-v-2c037838="" class="fa fa-flash"></i
            ></a>
          </div>
        <div class="d-flex align-center justify-center"> Copyright Amina Belabbes (c) 2021</div>
    </v-footer>
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
      },
    ],
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
  watch: {
    group () {
      this.drawer = false
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

.button-gradient {
  background: transparent linear-gradient(351deg, #0093E9 0%, #75CBCA 40%, #80D0C7 49%, #80D0C7 100%) 0% 0% no-repeat padding-box;
  box-shadow: 0px 3px 6px #00000029;
  opacity: 1;
}

.footer {

  color: #959595;
  font-size: 0.9em;
  padding: 20px;

  .footer-icons {
    margin: 10px;
    a, a:hover, a:active {
      padding: 10px;
      color: #959595;
    }
  }
}
</style>
TODO: add currentRoute in store to make header only displays when in HOME

<template>
  <v-app id="app-wrapper">
    <v-toolbar
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
            <div>Amina</div>
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
        <a href="@/assets/abelabbesCV2020.pdf">Resume</a>
      </div>

      <v-spacer v-if="isMobile"></v-spacer>

      <v-app-bar-nav-icon
        v-if="isMobile"
        @click.stop="drawer = !drawer"
      >
      </v-app-bar-nav-icon>
    </v-toolbar>

    <v-main>
      <v-row class="ma-10">
          <v-col v-if="isMobile" class="mb-5" cols="12">
            <MobileHeader :copy="copy" />
          </v-col>
          <v-col
            v-if="!isMobile"
            class="d-flex align-center my-5 justify-end"
            cols="6"
             style="text-align: right;"
          >
              <h3 class="mb-3" v-html="copy.profile"></h3>
          </v-col>
          <v-col cols="6" class="d-flex justify-start align-center" v-if="!isMobile">
                <v-img
                  :src="require('@/assets/design-and-development-process-1721879-1.svg')"
                  max-height="280"
                  max-width="450"
                  contain
                ></v-img>
          </v-col>
      </v-row>

      <router-view />

    </v-main>

    <v-navigation-drawer
      v-if="isMobile"
      v-model="drawer"
      absolute
      right
      temporary
    >
      <v-list nav dense>
        <v-list-item-group v-model="group">
          <v-list-item v-for="(navItem, i) in navigation" :key="i">
           <router-link :to="navItem.to">
              <v-list-item-title class="px-2">
               {{ navItem.name }}
              </v-list-item-title>
            </router-link>
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
      <div class="d-flex align-center justify-center">
        Copyright Amina Belabbes (c) 2021
      </div>
    </v-footer>
  </v-app>
</template>

<script>
import MobileHeader from "@/components/MobileHeader";
import { mapState } from "vuex";

export default {
  name: "App",

  components: {
    MobileHeader,
  },

  data() {
    return {
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
        }
    ],
    copy: {
      profile:
        "Nice to meet you –  I'm Amina Belabbes. <br/> I'm a <b>Junior UX Designer</b> and <b>Web Developer</b> based in Germany.",
      heading1: "Amina Belabbes",
    }
    }
    
  },

  computed: {
    // ...mapState({currentRoute: state => state.currentRoute}),
    // currentRoutePath() {
    //   console.log(this.currentRoute.path)
    //   return this.currentRoute.path
    // },
    currentRoute(){
      console.log("Current Route, ", this.$router.currentRoute)
      return this.$router.currentRoute
    },
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
    group() {
      this.drawer = false;
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
    font-family: "Muli", sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  h3 {
      font-family: "Muli", Sans-serif;
      font-size: 1.6em;
      font-weight: 400;
      line-height: 1.7em;
  }

  a,
  .btn-link a {
    text-decoration: none;
  }

  #app-wrapper {
    overflow-x: hidden;
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
  background: transparent
    linear-gradient(351deg, #0093e9 0%, #75cbca 40%, #80d0c7 49%, #80d0c7 100%)
    0% 0% no-repeat padding-box;
  box-shadow: 0px 3px 6px #00000029;
  opacity: 1;
}

.footer {
  color: #959595 !important;
  font-size: 0.9em !important;
  padding: 20px;

  .footer-icons {
    margin: 10px;
    a,
    a:hover,
    a:active {
      padding: 10px;
      color: #959595;
    }
  }
}

.home {
  background-color: #f5f5f5;
}
</style>
TODO: add currentRoute in store to make header only displays when in HOME, change navigation drawer

<template>
  <v-app id="app-wrapper">
    <NavBar :color="colr.color" :fontColor="colr.fontColor" @toggle-drawer="toggleDrawer"/>

    <v-main>
      <v-row v-if="isMobile"  class="ma-10" >
          <v-col class="mb-5" cols="12">
            <MobileHeader :copy="copy" />
          </v-col>
      </v-row>
      <v-row v-if="!isMobile">
        <DesktopHeaderTemplate :copy="copy" :fontColor="colr.fontColor" :color="colr.color" :height="height" style="width: 100%"/>
      </v-row>
      <v-row class="ma-10 justify-center" >
         <NavBarSecondLevel/>
      </v-row>
      <router-view />

    </v-main>

    <v-navigation-drawer
      v-if="isMobile"
      v-model="drawer"
      absolute
      right
      clipped 
      floating
      app
      temporary
    >
      <v-list nav two-line>
         <v-list-item 
          v-for="(nav, index) in navigation"
          :key="index"
          link
          @click="$router.push({ path: nav.to })"
        >
          <v-list-item-content>
            <v-list-item-title v-html="nav.name"></v-list-item-title>
          </v-list-item-content>
        </v-list-item >
      </v-list>
    </v-navigation-drawer>

    <v-footer class="footer d-flex flex-column align-center justify-center">
      <div class="footer-icons d-flex align-center justify-center">
        <a data-v-2c037838="" href="https://www.instagram.com/programina/"
          ><i data-v-2c037838="" class="fa fa-instagram"></i></a
        ><a data-v-2c037838="" href="https://github.com/programina-gui"
          ><i data-v-2c037838="" class="fa fa-github"></i></a
        ><a data-v-2c037838="" href="https://codepen.io/programina"
          ><i data-v-2c037838="" class="fa fa-codepen"></i></a
        ><a data-v-2c037838="" href="https://stackblitz.com/@Programina"
          ><i data-v-2c037838="" class="fa fa-flash"></i
        ></a>
        <a data-v-2c037838="" href="https://www.linkedin.com/in/amina-b-b98703149/"
          ><i data-v-2c037838="" class="fa fa-linkedin"></i
        ></a>
        <a data-v-2c037838="" href="https://www.xing.com/profile/Amina_Belabbes/cv"
          ><i data-v-2c037838="" class="fa fa-xing"></i
        ></a>

        
      </div>
      <router-link to="/imprint" class="d-flex align-center justify-center">
        Imprint
      </router-link>
      <div class="ma-5">Last update April 2021</div>
    </v-footer>
     <!-- <v-snackbar
      v-model="snackbar"
    >
      {{ text }}

      <template v-slot:action="{ attrs }">
        <v-btn
          color="pink"
          text
          v-bind="attrs"
          @click="snackbar = false"
        >
          Close
        </v-btn>
      </template>
    </v-snackbar> -->
  </v-app>
</template>

<script>
import MobileHeader from "@/components/headers/MobileHeader"
import ismobile from '@/mixins/ismobile.js'
import NavBar from '@/components/NavBar'
import DesktopHeaderTemplate from '@/components/DesktopHeaderTemplate'
import NavBarSecondLevel from '@/components/NavBarSecondLevel'
import { mapState } from "vuex"

export default {
  name: "App",
  mixins: [ismobile],
  components: {
    MobileHeader, 
    NavBar, 
    DesktopHeaderTemplate, 
    NavBarSecondLevel
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
        },
        {
          to: "/contact",
          name: "Contact",
        }
      ],
      
      copy: {
        profile1: "Nice to meet you –  I'm Amina Belabbes. <br/> I am a ",
        profile1_2: "<br/> I am a ", 
        profile2: "based in Germany.",
        transitionItem: ['designer ', 'developer ']
      },
      drawer: false,
      group: null,
      height: '400',
      colors: [
        {  
          color: '#2c0f1a',
          fontColor: '#fff',
          path: '/home'
        },
        {  
          color: '#2c0f1a',
          fontColor: '#fff',
          path: '/'
        },
         { 
          color: '#715a55', 
          fontColor: '#fff',
          path: '/about'
        }, 
        {
          color: '#4f1f13',
          fontColor: '#fff',
          path: '/contact'
        }, 
        {
          color: '#4f1f13',
          fontColor: '#fff',
          path: '/contact-success'
        },
        { 
          color: '#80636e',
          fontColor: '#fff',
          path: '/habit-stacks'
        },
        { 
          color: '#c5aea9',
          fontColor: 'black',
          path: '/date-saver'
        },
        { 
          color: '#a37367',
          fontColor: '#fff',
          path: '/portfolio'
        },
        { 
          color: '#421726',
          fontColor: '#fff',
          path: '/ux-ui'
        },
        { 
          color: '#a8867e',
          fontColor: 'black',
          path: '/development'
        },
        { 
          color: '#752e1d',
          fontColor: '#fff',
          path: '/other'
        },
        { 
          color: '#421726',
          fontColor: '#fff',
          path: '/imprint'
        },
        { 
          color: '#2c0f1a',
          fontColor: '#fff',
          path: '/rss'
        }

      ]
    }
    
  },
  methods: {
    toggleDrawer() {
      this.drawer = !this.drawer
    }
  } ,
  computed: {
  ...mapState(["currentRoute"]), 
   colr() {
     let colr;
      if(this.currentRoute.path) {
        colr = this.colors.find(val => val.path === this.currentRoute.path)
        
      } else {
        colr = {
          color: '#fff', 
          fontColor: "black",
          path: '/'
        }
      }

      if(colr) {   
        return colr
      } else 
      {
        colr = {
          color: '#fff', 
          fontColor: "black",
          path: '/'
        }
      }
   }
  },
  watch: {
    group() {
      this.drawer = false;
    }
  },
};
</script>

<style lang="scss">
// .swatch {
//   color: #662C91;
//   color: #1F2041;
//   color: #824670;
//   color: #de8579;
//   color: #304C89;
//   color: #e8cf7d;
//   color: #4C4C9D;
//   color: #b8ddf9;
//   color: #ffebf2;
//   color: #98e5cd;
// }

blockquote {
  max-width: 630px;
  padding-top: 0px;
  padding-bottom: 0px;
  border-style: solid;
  border-width: 0px 0px 0px 2px;
  border-color: #000 #000 #000 #69ae95;
  background-color: transparent;
  line-height: 36px;
  margin-right: auto;
  margin-bottom: 0px;
  margin-left: auto;
  padding: 40px;
  float: none;
  clear: none;
  letter-spacing: 0.2px;
  font-size: 24px;
  font-family: 'Libre Baskerville', sans-serif;
}

html,
body {
    background: #fff;
    height: 100%;
    width: 100%;
    margin: 0;
    padding: 0;
    font-family: "Muli", sans-serif;
    font-size: 18px;
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
    text-transform: uppercase;
    color: black !important;
  }

  a:hover, a:active, a:focus {
    text-decoration: underline;
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
    linear-gradient(351deg, #2c0f1a 0%, #421726 20%, #a37367 49%, #c5aea9 100%)
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
    a:visited,
    a:active {
      padding: 10px;
      color: #959595;
    }

    i{
      color: #959595;
      font-size: 1.6em;
      padding: 10px;
    }
  }
}

.enumeration {
  font-size: 2em;
  color: #C0E589;
}

</style>
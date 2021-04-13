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
        <a data-v-2c037838="" href="https://www.instagram.com/programina/"
          ><i data-v-2c037838="" class="fa fa-instagram"></i></a
        ><a data-v-2c037838="" href="https://github.com/programina-gui"
          ><i data-v-2c037838="" class="fa fa-github"></i></a
        ><a data-v-2c037838="" href="https://codepen.io/programina-gui"
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
    </v-footer>
  </v-app>
</template>

<script>
import MobileHeader from "@/components/MobileHeader"
import ismobile from '@/mixins/ismobile.js'
import NavBar from '@/components/NavBar'
import DesktopHeaderTemplate from '@/components/DesktopHeaderTemplate'
import NavBarSecondLevel from '@/components/NavBarSecondLevel'
import { mapState } from "vuex";

export default {
  name: "App",
  mixins: [ismobile],
  components: {
    MobileHeader, NavBar, DesktopHeaderTemplate, NavBarSecondLevel
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
        profile1:
          "Nice to meet you –  I'm Amina Belabbes. <br/> I am a",
        profile2: "based in Germany.",
        transitionItem: ['<b>UX designer</b> ', '<b>frontend developer</b> ']
      },
      drawer: false,
      group: null,
      height: '400',
      colors: [
        {  
          color: '#b8ddf9',
          fontColor: 'black',
          path: '/home'
        },
        {  
          color: '#b8ddf9',
          fontColor: 'black',
          path: '/'
        },
         { 
          color: '#98e5cd', 
          fontColor: 'black',
          path: '/about'
        }, 
        {
          color: '#ffebf2',
          fontColor: 'black',
          path: '/contact'
        }, 
        { 
          color: '#89b1cc',
          fontColor: '#fff',
          path: '/home/habit-stacks'
        },
        { 
          color: '#de8579',
          fontColor: '#fff',
          path: '/home/date-saver'
        },
        { 
          color: '#de8579',
          fontColor: '#fff',
          path: '/home/ux-ui'
        },
        { 
          color: '#8D5A97',
          fontColor: '#fff',
          path: '/home/development'
        },
        { 
          color: '#e8cf7d',
          fontColor: 'black',
          path: '/other'
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
      return colr
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
// }

blockquote {
  max-width: 630px;
  padding-top: 0px;
  padding-bottom: 0px;
  border-style: solid;
  border-width: 0px 0px 0px 2px;
  border-color: #000 #000 #000 #89b1cc;
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

</style>
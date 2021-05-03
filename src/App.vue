TODO: add currentRoute in store to make header only displays when in HOME, change navigation drawer

<template>
  <v-app id="app-wrapper">
    <NavBar :color="colr.color" :fontColor="colr.fontColor" @toggle-drawer="toggleDrawer"/>

    <v-main>
      <v-row>
        <HeaderTemplate :colr="colr" />
      </v-row>
      <v-row class="ma-10 justify-center" >
         <NavBarSecondLevel/>
      </v-row>
      <router-view />

      
  
    </v-main>

    <v-navigation-drawer
      v-if="isMobile"
      v-model="drawer"
      fixed
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

          <v-list-item 
            link
          >
          <a
          href="./abelabbesResume.pdf"
          download="Amina_Belabbes_Resume_2021.pdf"
          filetype="pdf"
          >
              <v-list-item-content>
              <v-list-item-title v-html="'Resume (German)'"></v-list-item-title>
            </v-list-item-content>
          
        </a
        > </v-list-item>
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

      <div :class="['back-to-top', [isScrolled ? 'on-scroll' : undefined]]" @click="scrollToTop">
        <span class="back-to-top__icon"></span>
      </div>
    </v-footer>
  </v-app>
</template>

<script>
import ismobile from '@/mixins/ismobile.js'
import NavBar from '@/components/NavBar'
import HeaderTemplate from '@/components/HeaderTemplate'
import NavBarSecondLevel from '@/components/NavBarSecondLevel'
import { mapState } from "vuex"

export default {
  name: "App",
  mixins: [ismobile],
  components: {
    NavBar, 
    HeaderTemplate, 
    NavBarSecondLevel
  },

  data() {
    return {
      isScrolled: false,
      scrolling: null,
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
      drawer: false,
      group: null,
      height: '400',
      colors: [
        {  
          color: '#fff',
          fontColor: 'black',
          path: '/home'
        },
        {  
          color: '#fff',
          fontColor: 'black',
          path: '/'
        },
         { 
          color: '#fff',
          fontColor: 'black',
          path: '/about'
        }, 
        {
          color: '#fff',
          fontColor: 'black',
          path: '/contact'
        }, 
        {
          color: '#fff',
          fontColor: 'black',
          path: '/contact-success'
        },
        { 
          color: '#fff',
          fontColor: 'black',
          path: '/habit-stacks'
        },
        { 
          color: '#fff',
          fontColor: 'black',
          path: '/date-saver'
        },
        { 
          color: '#fff',
          fontColor: 'black',
          path: '/portfolio'
        },
        { 
          color: '#fff',
          fontColor: 'black',
          path: '/ux-ui'
        },
        { 
          color: '#fff',
          fontColor: 'black',
          path: '/development'
        },
        { 
          color: '#fff',
          fontColor: 'black',
          path: '/other'
        },
        { 
          color: '#fff',
          fontColor: 'black',
          path: '/imprint'
        },
        { 
          color: '#fff',
          fontColor: 'black',
          path: '/rss'
        }

      ]
    }
  },
  methods: {
    toggleDrawer() {
      this.drawer = !this.drawer
    },
    scrollToTop(){
      window.scrollTo(0, 0);
      this.isScrolled = true
      this.scrolling = setTimeout(() => 
      {
        this.isScrolled = false
      }, 1000)
    },
    stopScrolling(){
      clearTimeout(this.scrolling)
      this.isScrolled = false
    },
  },
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
      return colr;
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
  font-size: 1.3rem;
  font-family: 'Libre Baskerville', sans-serif;
}

html {
  scroll-behavior: smooth;
}

html,
body {
    background: #eefcff;
    height: 100%;
    width: 100%;
    margin: 0;
    padding: 0;
    font-family: "Muli", sans-serif;
    font-size: 18px;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  h1 {
    font-size: 2.5rem;
  }

  h3 {
      font-family: "Muli", Sans-serif;
      font-size: 1.6rem;
      font-weight: 400;
      line-height: 2rem;
      padding: 20px 0;
  }

  .v-navigation-drawer__content {
    a, a:hover, a:visited, a:active, a:focus {
      color: black !important;
      text-decoration: none;
      text-transform: initial;
    }
  }

  a,
  .btn-link a {
    text-decoration: none;
    text-transform: uppercase;
    color: black !important;
  }

  a:hover, a:active, a:focus {
    text-decoration: underline;
    color: black !important;
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

// .button-gradient {
//   background: transparent
//     linear-gradient(351deg, #2c0f1a 0%, #421726 20%, #a37367 49%, #c5aea9 100%)
//     0% 0% no-repeat padding-box;
//   box-shadow: 0px 3px 6px #00000029;
//   opacity: 1;
// }

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

.back-to-top {
  opacity: 1;
  visibility: visible;
  position: absolute;
  bottom: 30px;
  right: 3%;
  cursor: pointer;
  z-index: 5;
  transition: all 0.3s;

  &.on-scroll {
    opacity: 0;
    visibility: hidden;
  }

  .back-to-top__icon {
    display: block;
    background: url(/assets/arrow-up.svg) no-repeat;
    background-size: contain;
    width: 60px;
    height: 60px;
  }
}

</style>
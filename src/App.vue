TODO: add currentRoute in store to make header only displays when in HOME, change navigation drawer

<template>
  <v-app id="app-wrapper">
    <NavBar v-if="colr" :color="colr.color" :fontColor="colr.fontColor" @toggle-drawer="toggleDrawer"/>
    <v-main>
      <v-row v-if="colr">
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
              <v-list-item-title v-html="'CV (German PDF)'"></v-list-item-title>
            </v-list-item-content>
          
        </a
        > </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-footer class="footer d-flex flex-column align-center justify-center">
      <div class="footer-icons d-flex align-center justify-center">
        <a data-v-2c037838="" href="https://www.instagram.com/programina/"
          ><i data-v-2c037838="" :class="[!isMobile ? 'fa fa-instagram' : 'fa fa-instagram is-mobile']"></i></a
        ><a data-v-2c037838="" href="https://github.com/programina-gui"
          ><i data-v-2c037838="" :class="[!isMobile ? 'fa fa-github' : 'fa fa-github is-mobile']"></i></a
        ><a data-v-2c037838="" href="https://codepen.io/programina"
          ><i data-v-2c037838="" :class="[!isMobile ? 'fa fa-codepen' : 'fa fa-codepen is-mobile']"></i></a
        >
        <a data-v-2c037838="" href="https://twitter.com/MsAminaBelabbes"
          ><i data-v-2c037838="" :class="[!isMobile ? 'fa fa-twitter' : 'fa fa-twitter is-mobile']"></i></a
        >
        <a data-v-2c037838="" href="https://www.linkedin.com/in/amina-b-b98703149/"
          ><i data-v-2c037838="" :class="[!isMobile ? 'fa fa-linkedin' : 'fa fa-linkedin is-mobile']"></i
        ></a>
        <a data-v-2c037838="" href="https://www.xing.com/profile/Amina_Belabbes/cv"
          ><i data-v-2c037838="" :class=" [!isMobile ? 'fa fa-xing' : 'fa fa-xing is-mobile']"></i
        ></a>
      </div>

      <router-link to="/imprint" class="d-flex align-center justify-center">
        Imprint
      </router-link>
      <div class="ma-5 text-center">Last update May 2021. <br/> This website was coded by Amina Belabbes using Vue and Vuetify.</div>

      <div :class="['back-to-top', [isScrolled ? 'on-scroll' : undefined]]" @click="scrollToTop">
        <span class="back-to-top__icon"></span>
      </div>
    </v-footer>

   <portal-target name="destination" multiple></portal-target>
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
          path: '/easytutor'
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
  border-color: #000 #000 #000 #3BCEA0;
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
    background: #fff;
    height: 100%;
    width: 100%;
    margin: 0;
    padding: 0;
    font-family: "Muli", sans-serif;
    font-size: 18px;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    overflow: auto;
    &.lightbox-active {
      overflow: hidden;
    } 
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
       &.is-mobile {
        font-size: 1.3em;
      }
    }
  }
}

.enumeration {
  font-size: 2em;
  color: #5DEAE8;
  margin-bottom: 10px;
}

.back-to-top {
  opacity: 1;
  visibility: visible;
  position: absolute;
  bottom: 123px;
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



/* Styles the lightbox, removes it from sight and adds the fade-in transition */

.lightbox-target {
position: fixed;
top: 0;
bottom: 0;
left: 0; 
right: 0;
width: 100%;
background: rgba(0,0,0,.7);
-webkit-transition: opacity .5s ease-in-out;
-moz-transition: opacity .5s ease-in-out;
-o-transition: opacity .5s ease-in-out;
transition: opacity .5s ease-in-out;
overflow: hidden;
display: flex;
flex-direction: row; 
justify-content: center; 
align-items: center;
z-index: 3;
}



/* Provides part of the "X" to eliminate an image from the close link */

.lightbox-close:after {
content: "";
display: block;
height: 30px;
width: 1px;
background: black;
position: absolute;
left: 26px;
top:10px;
-webkit-transform:rotate(-45deg);
-moz-transform:rotate(-45deg);
-o-transform:rotate(-45deg);
transform:rotate(-45deg);
}


/* Styles the close link, adds the slide down transition */

.lightbox-close {
display: block;
width:50px;
height:50px;
box-sizing: border-box;
background: white;
color: black;
text-decoration: none;
position: absolute;
top: 0;
right: 0;
cursor: pointer;
-webkit-transition: .5s ease-in-out;
-moz-transition: .5s ease-in-out;
-o-transition: .5s ease-in-out;
transition: .5s ease-in-out;
}


.lightbox-img-container-sm {
  overflow: hidden;
  position: relative;
  max-width: 85%;

  &.is-vertical {
    height: 750px;
    max-width: 350px;
  }
  &.is-extra-large {
    max-height: 830px;
    height: 830px ;
    max-width: 300px;
  }
}

.lightbox-img-container-lg {
  overflow: hidden;
  max-height: 100%;
  max-width: 70%;
  
  &.is-vertical {
    height: 850px ;
    max-width: 400px;
  }
  &.is-extra-large {
    max-height: 95%;
    height: 95%;
    max-width: 29%;
    width: 29%;
  }
}

.lightbox-target .v-image {
  // margin: auto;
  // position: absolute;
  // top: 0;
  // left: 0;
  // right: 0;
  // bottom: 0;
  max-height: 100%;
  max-width: 100%;
  display: block;
  box-shadow: 0px 0px 8px rgba(0,0,0,.3);
  box-sizing: border-box;
  -webkit-transition: .5s ease-in-out;
  -moz-transition: .5s ease-in-out;
  -o-transition: .5s ease-in-out;
  transition: .5s ease-in-out;
}


.lightbox-target:target {
opacity: 1;
top: 0;
bottom: 0;
}

.green-link {
  text-decoration: none !important; 
  text-transform: none !important; 
  color: #3bcea0 !important; 
}


</style>
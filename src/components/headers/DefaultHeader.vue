<template>
  <div
    id="default-header"
    :style="{
      'background-color': color,
      color: fontColor
    }"
    :class="[isMobile ? 'd-flex flex-column justify-center align-center' : undefined]"
  >

    <div :class="['header-container d-flex justify-center align-center', [isMobile ? 'mobile-header flex-column' : 'desktop-header']]" >

      
          <v-img
            v-if="isMobile"
            :src="require('@/assets/amina.png')"
            contain
            :key="'dev-gif'"
            :width="imageParameter"
          />


            <div cols="5" :class="[isMobile ? 'text-container mobile': 'pr-8 text-container']">
                <span class="heading-animated" v-html="copy.profile1"></span>

                <div v-if="designerImageDisplayed" style="display: inline-block; margin: 0 10px;">
                  <v-scroll-y-transition>
                    <div :class="['heading-animated', [startSliding ? 'slideInDown' : undefined]]" style="display: inline-block;">{{ copy.transitionItem[0] }}</div>
                  </v-scroll-y-transition>
                </div>
                <div v-if="!designerImageDisplayed" style="display: inline-block; margin: 0 10px;" >
                    <v-scroll-y-transition>
                    <div :class="['heading-animated', [startSliding ? 'slideInDown' : undefined]]">{{ copy.transitionItem[1] }}</div>
                    </v-scroll-y-transition>
                </div>
                <span class="heading-animated" v-html="copy.profile2"></span>
            </div>
            <div cols="1" style="width: 50px"> </div>

            <div  v-if="isMobile">
              <router-link  v-if="currentRoute.path != '/contact' || currentRoute.path != '/contact-success' " to="/contact" style="text-decoration: none">
                <v-btn rounded depressed color="primary" class="pa-6 mr-2">Get in touch </v-btn>
              </router-link>
            </div>
            <div cols="6">
                <v-img v-if="!isMobile" 
                  
                  :src="require('@/assets/amina.png')"
                  contain
                  :height="imageParameter"
                  :width="imageParameter"
                />
            </div>
            
  
      </div>
     
      
    </div>

  </div>
</template>

<script>

import ismobile from '@/mixins/ismobile.js'
import { mapState } from "vuex";
import "splitting/dist/splitting.css";
import "splitting/dist/splitting-cells.css";
import Splitting from "splitting";

export default {
  name: "DefaultHeader",
  mixins: [ismobile],
  props: {
    color: {
      type: String,
      required: false,
    },
    fontColor: {
      type: String,
      required: false,
    }
  },
  data() {
    return {
      startSliding: false,
      designerImageDisplayed: false,
      scrollY: false,
      interval: null,
      pseudoColor: null,
      copy: {
        profile1: "Nice to meet you.<br/> I'm Amina Belabbes.<br/>  I am a ",
        profile1_2: "<br/> I am a ", 
        profile2: "based in Germany.",
        transitionItem: ['UX designer ', 'web developer ']
      },
    };
  },
  methods: {
    imageIntervall() {
      this.interval = setInterval(
        () => (this.designerImageDisplayed = !this.designerImageDisplayed),
        2500
      );
    },
    toggleScrollY() {
      this.scrollY = !this.scrollY;
    },
    stopSwitch() {
      clearInterval(this.interval);
    },
  },
  mounted() {
    setTimeout( () => { this.designerImageDisplayed = !this.designerImageDisplayed; this.imageIntervall(); this.startSliding = true;  } , 2000);
    Splitting();
  },
  beforeDestroy() {
    this.stopSwitch();
  },
  computed: {
    ...mapState(["currentRoute"]),
    imageParameter() {
      if(this.isMobile) {
        return 200
      } else {
        return 230
      }
    }
  },
};
</script>

<style lang="scss" scoped>

#default-header {
  width: 100%;

   .header-container {
     width: 100%;
   }
}

.text-container {
  text-align: right;
  margin: 30px 0;
  &.mobile {
    text-align: center;
  }
}

.heading-animated {
  font-family: "Muli", Sans-serif;
  font-size: 1.6em;
  font-weight: 400;
  line-height: 1.7em;
}

// ==================================================
// Base styles imported from original Animated Verbs
// https://codepen.io/hexagoncircle/pen/oNvMLRQ
// ==================================================

.headline {
  font-weight: bold;
  font-weight: 700;
  font-size: calc(1.8em) !important;
  height: 200px;
  overflow: hidden;
  padding: 0 10px;
  perspective: 1000px;
  scroll-snap-align: start;
}

.container {
  max-height: 100vh;
  overflow-y: scroll;
  position: relative;
  scroll-snap-type: y mandatory;
  -webkit-overflow-scrolling: touch;
}

.headline {
  align-items: center;
  background-color: var(--color);
  font-family: "Lexend Deca", sans-serif;
  font-weight: 700;
  font-size: calc(1rem + 15vmin);
  overflow: hidden;
  perspective: 1000px;
  scroll-snap-align: start;
}

::v-deep .word:after {
  background-color: #fff;
}
</style>

<style lang="scss" scoped>
.heading-animated {
    font-family: "Muli", Sans-serif;
    font-size: 1.6em;
    font-weight: 400;
    line-height: 1.7em;
}
.desktop-header {
  height: 360px;
  // margin: 40px 0;
}
.mobile-header {
  height: 560px;
  margin: 0 20px;
  max-width: 350px;
  div.col {
    width: 100%;
    display: flex;
    justify-content: center;
  }
}

a, a:hover, a:active, a:focus, .btn-link a, .theme--light.v-btn {
  color: white !important;
}



@keyframes slideInDown {
  0%   {transform: translate3d(0, -50%, 0); opacity: 1;}
  50%  {transform: translate3d(0, -3%, 0); opacity: 1;}
  65%  {transform: translate3d(0, 0, 0);opacity: 1;}
  85%  {transform: translate3d(0, 0, 0); opacity: 0.8;}
  100% {transform: translate3d(0, 30%, 0); opacity: 0;}
}

.slideInDown {
	animation-name: slideInDown;
  animation: slideInDown 2.5s infinite;
}


.is-mobile {
  height: 190px;
}

.flip-card-inner {
  position: relative;
  width: 100%;
  height: 100%;
  text-align: center;
  transition: transform 0.6s;
  transform-style: preserve-3d;
}

.flip-card:hover .flip-card-inner {
  transform: rotateY(180deg);
}

.flip-card-front, .flip-card-back {
  position: absolute;
  width: 100%;
  height: 100%;
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
}

.flip-card-front {
}

.flip-card-back {
  transform: rotateY(180deg);
}

</style>
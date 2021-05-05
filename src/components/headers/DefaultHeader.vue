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

      
            <div class="flip-card" cols="6">
                <div class="flip-card-inner mb-5">
                  <div class="flip-card-front">    
                    <v-img
                        :src="require('@/assets/developer.png')"
                        contain
                        :key="'dev-gif'"
                        :height="height"
                      />
                  </div>
                  <div class="flip-card-back">
                    <v-img
                      :src="require('@/assets/designer.png')"
                      contain
                      :height="height"
                    />
                  </div>
              </div>
            </div>
            <div cols="1" style="width: 50px"> </div>

            <div cols="5" class="pr-8" :class="[isMobile ? 'text-container mobile': 'text-container']">
                <span class="heading-animated" v-html="copy.profile1"></span>

                <div v-if="designerImageDisplayed" style="display: inline-block; margin: 0 10px;">
                  <v-scroll-y-transition>
                    <div class="heading-animated slideInDown" style="display: inline-block;">{{ copy.transitionItem[0] }}</div>
                  </v-scroll-y-transition>
                </div>
                <div v-if="!designerImageDisplayed" style="display: inline-block; margin: 0 10px;" >
                    <v-scroll-y-transition>
                    <div class="heading-animated slideInDown" >{{ copy.transitionItem[1] }}</div>
                    </v-scroll-y-transition>
                </div>
                <span class="heading-animated" v-html="copy.profile2"></span>
            </div>


            <div  v-if="isMobile" >
              <router-link  v-if="currentRoute.path != '/contact' || currentRoute.path != '/contact-success' " to="/contact" style="text-decoration: none">
                <v-btn rounded elevation="10" color="primary" class="pa-6 mr-2">Get in touch </v-btn>
              </router-link>
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

    // keep just in case
    // if(this.color) {
    //    this.pseudoColor = window.getComputedStyle( document.querySelector('span'), ':after'
    //   ).getPropertyValue('background-color')
    // }
    this.imageIntervall();
    Splitting();
  },
  beforeDestroy() {
    this.stopSwitch();
  },
  computed: {
    ...mapState(["currentRoute"]),
    height() {
      if(this.isMobile) {
        return 200
      } else {
        return 300
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
  text-align: left;
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

<style lang="scss">
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
  0%   {transform: translate3d(0, -100%, 0); opacity: 1;}
  50%  {transform: translate3d(0, -3%, 0); opacity: 1;}
  65%  {transform: translate3d(0, 0, 0);opacity: 1;}
  85%  {transform: translate3d(0, 0, 0); opacity: 0.8;}
  100% {transform: translate3d(0, 30%, 0); opacity: 0;}
}

.slideInDown {
	animation-name: slideInDown;
  animation: slideInDown 2.5s infinite;
}


.flip-card {
  background-color: transparent;
  width: 300px;
  height: 300px;
  perspective: 1000px;
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
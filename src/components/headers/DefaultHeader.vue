<template>
  <div
    data-qa="default-header"
    class="d-flex justify-center align-center"
    :style="{
      'background-color': color,
      color: fontColor
    }"
  >
    <div v-if="!isMobile" class="d-flex justify-center align-center" style="max-width: 80%">

      <div class="pr-8" style="text-align: right">
        <span class="heading-animated" v-html="copy.profile1"></span>
        <span v-show="designerImageDisplayed">
          <span
            data-splitting
            class="heading-animated headline headline--hide"
            >{{ copy.transitionItem[0] }}</span
          >
        </span>
        <span v-show="!designerImageDisplayed">
          <span
            data-splitting
            class="heading-animated headline headline--hide"
            >{{ copy.transitionItem[1] }}</span
          >
        </span>

        <span class="heading-animated" v-html="copy.profile2"></span>
      </div>

      <div cols="6" class="d-flex justify-start align-center">
        <v-slide-x-transition hide-on-leave>
          <v-img
            v-if="designerImageDisplayed"
            :src="require('@/assets/designer.png')"
            class="mt-5"
            contain
            :width="220"
          />
          <v-img
            v-else
            :src="require('@/assets/developer.png')"
            class="mt-5"
            contain
            :key="'dev-gif'"
            :width="220"
          />
        </v-slide-x-transition>
      </div>
    </div>

    <div v-else>
      <v-col cols="12" class="d-flex justify-center">
        <v-scroll-y-transition hide-on-leave >
          <v-img
          v-if="designerImageDisplayed"
          :src="require('@/assets/designer.png')"
          
          class="mt-5"
          contain
          height="300"
        />
        <v-img
          v-else
          :src="require('@/assets/developer.png')"
          class="mt-5"
          contain
          :key="'dev-gif'"
          height="300"
        />
        </v-scroll-y-transition>
      
      </v-col>
      <v-col class="mb-3"  style="text-align: center" >
        
        <div class="heading-animated" v-html="copy.profile1"/>
        <v-slide-x-transition hide-on-leave>
          <span v-if="designerImageDisplayed" >
            <div class="heading-animated" v-html="copy.transitionItem[0]"/>
          </span>
         <span class="mb-3" v-else>
          <div class="heading-animated" v-html="copy.transitionItem[1]"></div>
        </span>
        </v-slide-x-transition>
       
         <div class="heading-animated"> {{copy.profile2}}</div>
      </v-col>
      <v-col
        class="mb-5"
        cols="12"
         style="text-align: center"
      >
       <router-link  v-if="currentRoute.path != '/contact' || currentRoute.path != '/contact-success' " to="/contact">
          <v-btn rounded elevation="10" color="primary" class="pa-6 mr-2">Get in touch </v-btn>
       </router-link>
       
      </v-col>
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
    copy: {
      type: Object,
      required: true,
    },
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
      interval: null,
      pseudoColor: null
    };
  },
  methods: {
    imageIntervall() {
      this.interval = setInterval(
        () => (this.designerImageDisplayed = !this.designerImageDisplayed),
        9000
      );
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
    ...mapState(["currentRoute"])
  },
};
</script>

<style lang="scss" scoped>
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

a, a:hover, a:active, a:focus, .btn-link a, .theme--light.v-btn {
  color: white !important;
}


.headline--hide {
  --dur: 4.5s;
}

.word,
.char {
  animation-delay: var(--del);
  animation-direction: var(--dir, normal);
  animation-duration: var(--dur);
  animation-iteration-count: var(--it, infinite);
  animation-name: var(--name);
  animation-timing-function: var(--tf);
  animation-fill-mode: var(--fill, forwards);
  display: inline-block;
  position: relative;
  transform-origin: 50% 100%;
  z-index: 1;
}

.word:after {
  animation: hide-cover calc(var(--dur) * 2) ease-out infinite;
  border-top: 4px solid #fff;
  content: "";
  height: 150%;
  left: -5%;
  position: absolute;
  top: 100%;
  width: 110%;
  z-index: 2;
}

.char {
  --name: hide-jump;
  --del: calc(var(--char-index) * 0.02s);
  --td: cubic-bezier(0.215, 0.61, 0.355, 1);
  --dir: alternate;

  transform-origin: 50% 100%;

  &[data-char="i"]:after {
    --name: hide-peek;
    --dir: alternate;

    animation: var(--name) var(--dur) var(--td) infinite var(--dir);
    content: attr(data-char);
    visibility: visible;
  }
}

@keyframes hide-jump {
  0%,
  10% {
    transform: translateY(0);
  }
  15% {
    transform: translateY(-25%);
  }
  20%,
  100% {
    transform: translateY(100%);
  }
}

@keyframes hide-peek {
  0%,
  35% {
    transform: translateY(0);
  }
  40%,
  60% {
    transform: translateY(-40%);
  }
  70%,
  90% {
    transform: translateY(-45%) skewY(10deg);
  }
  95%,
  100% {
    transform: translateY(-46%) skewY(-10deg);
  }
}

@keyframes hide-cover {
  0%,
  7% {
    transform: scaleX(0);
  }
  8%,
  95% {
    transform: scaleX(1);
  }
  98%,
  100% {
    transform: scaleX(0);
  }
}
</style>
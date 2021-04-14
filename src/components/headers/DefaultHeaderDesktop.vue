<template>
  <div
    data-qa="default-header"
    class="d-flex justify-center"
    :style="{
      'background-color': color,
      color: fontColor,
      height: height + 'px',
    }"
  >

    <!-- <div class="header-container d-flex justify-center">

      <div
        class="d-flex flex-column align-center justify-end slider pr-10"
        cols="6"
        style="text-align: right"
        data-qa="desktop-showcase"
      >
      <div data-qa="textbox">
        <div class="heading-animated animated-caption" v-html="copy.profile1" />
        <div class="text-box" :width="[designerImageDisplayed ? '300px' : '150px']">
            <div :class="['heading-animated', {'developer' : !designerImageDisplayed}]" v-html="copy.transitionItem[0]" />
            <div :class="['heading-animated', {'designer' : designerImageDisplayed}]" v-html="copy.transitionItem[1]" />
        </div>
        <span class="heading-animated right-of-line" v-html="copy.profile1_2"/><div style="display: inline-block" :width="[designerImageDisplayed ? '300 px' : '200px']"/><span class="heading-animated right-of-line" v-html="copy.profile2"/>
      </div>
        
      </div>

      <div cols="6" class="d-flex justify-start align-center">
        <div class="text-box">
          <div> 
             <img
            :src="require('@/assets/designer.png')"
            alt="Amina's Portrait"
            class="mt-5"
            contain
            width="250"
          />

          </div>
         <div >
          <img
            
            :src="require('@/assets/developer.png')"
            class="mt-5"
            alt="Amina's Portrait"
            contain
            :key="'dev-gif'"
            width="250"
          />
         </div>
          
        </div>
      </div>


    </div> -->
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "DefaultHeaderDesktop",
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
    },
    height: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      designerImageDisplayed: false,
      interval: null,
      textWidth: '140px'
    }
  },
  methods: {
    imageIntervall(){
      this.interval = setInterval( 
        ()=> this.designerImageDisplayed =! this.designerImageDisplayed, 2500);
    },
    stopSwitch(){
      clearInterval(this.interval)
    }
  },
  mounted() {
    this.imageIntervall()
  }, 
  beforeDestroy() {
    this.stopSwitch()
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
}

.header-container {
  max-width: 880px;
}

body{
	margin: 0;
	padding: 0;
	font-family: 'Abril Fatface', serif;
}

.slider{
	position: relative;
	animation: 5s forwards infinite;
}

.animated-caption{
	position: relative;
}
.left-of-line {
  transform: translate(-200px, -50%);
}
.right-of-line {
  transform: translateY(-50%);
}

.text-box{
	display: inline-block;
  width: 200px;
  transform: translateY(-60px);
	position: relative;
}

.text-box div{
	display: inline-block;
	position: absolute;
  left: -200px;
	transform: rotateX(-90deg);
	opacity: 0;
	animation-timing-function: ease;
}

.text-box .developer{
	animation: rollDown 5s forwards infinite;
}

.text-box .designer{
	animation: rollDown2 5s forwards infinite;
}

// .text-box div:nth-child(3){
// 	animation: rollDown3 5s forwards infinite;
// }

@keyframes rollDown {
	0%{
		top: -200px;
		transform: rotateX(-90deg);
	}
	12%{
		top: -74px;
		transform: rotateX(0deg);
		opacity: 1;
	}
	24%{
		top: -74px;
		transform: rotateX(0deg);
		opacity: 1;
	}
	38%{
		top: 50px;
		transform: rotateX(30deg);
		opacity: 0;
	}
}

@keyframes rollDown2 {
	50%{
		top: -200px;
		transform: rotateX(-90deg);
	}
	62%{
		top: -74px;
		transform: rotateX(0deg);
		opacity: 1;
	}
	84%{
		top: -74px;
		transform: rotateX(0deg);
		opacity: 1;
	}
	100%{
		top: 50px;
		transform: rotateX(30deg);
		opacity: 0;
	}
}

// @keyframes rollDown3 {
// 	66%{
// 		top: -200px;
// 		transform: rotateX(-90deg);
// 	}
// 	77%{
// 		top: -74px;
// 		transform: rotateX(0deg);
// 		opacity: 1;
// 	}
// 	88%{
// 		top: -74px;
// 		transform: rotateX(0deg);
// 		opacity: 1;
// 	}
// 	99%{
// 		top: 50px;
// 		transform: rotateX(30deg);
// 		opacity: 0;
// 	}
// }

</style>
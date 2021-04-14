<template>
  <div data-qa="mobile-header">
      <v-col cols="12" >
        <v-scroll-y-transition hide-on-leave >
          <v-img
          v-if="designerImageDisplayed"
          :src="require('@/assets/designer.png')"
          
          class="mt-5"
          contain
          :height="height"
        />
        <v-img
          v-else
          :src="require('@/assets/developer.png')"
          class="mt-5"
          contain
          :key="'dev-gif'"
          :height="height"
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
       <router-link to="/contact">
          <v-btn class="mr-2" color="primary">Get in touch </v-btn>
       </router-link>
       
      </v-col>
  </div>
</template>

<script>
export default {
  name: 'MobileHeader',
  components: {},
  props: {
    copy: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      designerImageDisplayed: false,
      interval: null
    }
  },
  computed: {
    height(){
       switch (this.$vuetify.breakpoint.name) {
          case 'xs': return 250
          case 'sm': return 250
          case 'md': return 350
        }
    }
  },
  methods: {
    imageIntervall(){
      this.interval = setInterval( 
        ()=> this.designerImageDisplayed =! this.designerImageDisplayed, 3000);
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
  }
}
</script>

<style lang="scss" scoped>
.heading-animated {
    font-family: "Muli", Sans-serif;
    font-size: 1.6em;
    font-weight: 400;
    line-height: 1.7em;
}
</style>
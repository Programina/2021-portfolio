<template>
  <div data-qa="default-header" class="d-flex justify-center align-center" :style="{ 'background-color': color, 'color': fontColor, 'height': height + 'px'}">
    <div class="d-flex justify-center" style="max-width: 80%;">
      <div
      class="d-flex align-center justify-end"
      cols="6"
      style="text-align: right"
      data-qa="desktop-showcase"
    >
      <h3 class="mb-3" v-html="text"></h3>
    </div>
    <div
      cols="6"
      class="d-flex justify-start align-center"
    >
      <v-img
        :src="require('@/assets/amina.gif')"
        max-height="280"
        max-width="450"
        contain
      ></v-img>
    </div>
    </div>
    
  </div>
</template>

<script>
import {mapState} from 'vuex'
export default {
  name: "DefaultHeaderDesktop",
  props: {
    copy: {
      type: Object,
      required: true
    },
    color: {
      type: String,
      required: false
    },   
    fontColor: {
      type: String,
      required: false
    },
    height: {
      type: String,
      required: true
    }
  },
  data() {
    return {
     
    };
  },
  mounted() {},
  computed: {
    ...mapState(["currentRoute"]), 
    text(){
      return 'Nice to meet you – I am Amina Belabbes, <strong>frontend developer</strong> and aspiring <strong>UX Designer</strong> based in  Germany.'
    },
    profileText(){
      return this.copy.profile1 + this.copy.transitionItem + this.copy.profile2
    }
  },
  methods: {},
};
</script>
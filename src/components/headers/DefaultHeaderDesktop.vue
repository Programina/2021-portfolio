<template>
  <v-row class="ma-10"  :style="{ 'background-color': color, 'color': fontColor, 'height': height + 'px'}">
    <v-col
      class="d-flex align-center my-5 justify-end"
      cols="6"
      style="text-align: right"
      data-qa="desktop-showcase"
    >
      <h3 class="mb-3" v-html="profileText"></h3>
    </v-col>
    <v-col
      cols="6"
      class="d-flex justify-start align-center"
    >
      <v-img
        :src="require('@/assets/design-and-development-process-1721879-1.svg')"
        max-height="280"
        max-width="450"
        contain
      ></v-img>
    </v-col>
  </v-row>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "DefaultHeaderDesktop",

  props: {
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
      copy: {
        profile1:
          "Nice to meet you –  I'm Amina Belabbes. <br/> ",
        profile2: "based in Germany.",
        transitionItem: '<b>Junior UX Designer</b> '
      },
    };
  },
  mounted() {},
  computed: {
    ...mapState(["currentRoute"]), 
    profileText(){
      return this.copy.profile1 + this.copy.transitionItem + this.copy.profile2
    }
  },
  methods: {},
};
</script>
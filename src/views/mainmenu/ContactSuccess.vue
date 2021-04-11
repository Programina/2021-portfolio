<template>
  <v-row :class="[isMobile ? 'd-flex flex-column justify-center align-center' : undefined]">
    <v-col cols="6" class="d-flex flex-column justify-center align-center" style="text-align: right;">
      <h1>YAY!</h1>
      <h2>I love getting feedback! Thanks!</h2> 
    </v-col>
    <v-col cols="6" class="d-flex justify-center align-center" style="text-align: left;">
          <v-img
            class="ml-5"
            :src="require('@/assets/catching-bird-during-busy-day.png')"
            max-height="550"
            max-width="450"
            contain
          ></v-img>
    </v-col>
   
  </v-row>
</template>

<script>
import ismobile from '@/mixins/ismobile.js'

export default {
  name: 'ContactSuccess',
  components: {},
  props: {},
  mixins: [ismobile],
  data() {
    return {}
  },
  computed: {
    isMobile() {
      switch (this.$vuetify.breakpoint.name) {
        case "xs":
          return true;
        case "sm":
          return true;
        case "md":
          return false;
        case "lg":
          return false;
        case "xl":
          return false;
      }
    }
  }
}
</script>

<style lang="css" scoped></style>

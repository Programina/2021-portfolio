<template>
  <div data-qa="mobile-header">
      <v-col cols="12">
        <v-img
          :src="require('../assets/female-developer-vector.jpg')"
          class="mt-5"
          contain
          height="200"
        />
      </v-col>
      <v-col >
        <div class="heading1">
        First Project
        </div>
        <div class="heading2 mb-3">Subheading</div>
      </v-col>
      <v-col
        class="mb-5"
        cols="12"
      >
       <router-link to="/contact">
         <v-btn
              href="#"
              target="_blank"
              text
              rounded
              color="background"
              class="button-gradient"
            > 
          <span class="mr-2">Get in touch</span>
        
        </v-btn>
       </router-link>
       
      </v-col>
  </div>
</template>

<script>
export default {
  name: 'MobileHeader',
  components: {},
  props: {},
  data() {
    return {}
  },
  mounted() {},
  beforeDestroy() {},
  methods: {}
}
</script>

<style lang="scss" scoped>
  .button-gradient {
    background: transparent linear-gradient(351deg, #0093E9 0%, #75CBCA 40%, #80D0C7 49%, #80D0C7 100%) 0% 0% no-repeat padding-box;
    box-shadow: 0px 3px 6px #00000029;
    opacity: 1;
  }
</style>
<template>
  <div data-qa="mobile-header">
      <v-col cols="12">
        <v-img
          :src="require('@/assets/design-and-development-process-1721879-1.svg')"
          class="mt-5"
          contain
          :height="height"
        />
      </v-col>
      <v-col style="text-align: center">
         <div class="heading1">
          {{copy.heading1}}
        </div>
        <p v-html="copy.profile"></p>
      </v-col>
      <v-col
        class="mb-5"
        cols="12"
         style="text-align: center"
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
  props: {
    copy: {
      type: Object,
      required: true
    }
  },
  data() {
    return {}
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
  beforeDestroy() {},
  methods: {}
}
</script>

<style lang="scss" scoped>

.heading1 {
  font-weight: 500;
  font-size: 3em;
  letter-spacing: 0px;
}
.heading2 {
  font-weight: 400;
  font-size: 2em;
  letter-spacing: 0px;
}
</style>
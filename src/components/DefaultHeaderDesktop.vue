<template>
  <v-row v-if="isMobile" class="ma-10">
    <v-col
      v-if="!isMobile && this.currentRoutePath === '/'"
      class="d-flex align-center my-5 justify-end"
      cols="6"
      style="text-align: right"
      data-qa="desktop-showcase"
    >
      <h3 class="mb-3" v-html="copy.profile"></h3>
    </v-col>
    <v-col
      cols="6"
      class="d-flex justify-start align-center"
      v-if="!isMobile && this.currentRoutePath === '/'"
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
import currentRouteMx from '@/mixins/currentRouteMx.js'

export default {
  name: "DefaultHeaderDesktop",
  
  mixins: [ismobile, currentRouteMx],
  props: {},
  data() {
    return {};
  },
  mounted() {},
  beforeDestroy() {},
  methods: {},
};
</script>

<style lang="css" scoped></style>

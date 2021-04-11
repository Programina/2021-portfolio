<template>
  <v-row class="ma-10">
    <v-col
      v-if="this.currentRoute.path === '/'"
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
      v-if="this.currentRoute.path === '/'"
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
import { mapState } from 'vuex'
export default {
  name: "DefaultHeaderDesktop",
  
  props: {},
  data() {
    return {};
  },
  mounted() {},
  computed: mapState(['currentRoute']) ,
  methods: {},
};
</script>

<style lang="css" scoped></style>

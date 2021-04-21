<template>
  <v-container>
    <v-row>
      <v-col class="ma-2" cols="2">
        <img
          alt="Angular"
          class="cld-responsive"
          src="https://res.cloudinary.com/academind-gmbh/image/upload/f_auto,q_auto/c_limit,dpr_1.0,g_center,w_200/v1/academind.com/site/topics/angular"
      /></v-col>
      <v-col class="ma-2" cols="2">
        <img
          alt="React"
          data-src="https://res.cloudinary.com/academind-gmbh/image/upload/f_auto,q_auto/c_limit,dpr_auto,g_center,w_auto/v1/academind.com/site/topics/react"
          class="cld-responsive"
          src="https://res.cloudinary.com/academind-gmbh/image/upload/f_auto,q_auto/c_limit,dpr_1.0,g_center,w_200/v1/academind.com/site/topics/react"
        />
      </v-col>
      <v-col class="ma-2" cols="2">
        <img
          alt="Vue.js"
          data-src="https://res.cloudinary.com/academind-gmbh/image/upload/f_auto,q_auto/c_limit,dpr_auto,g_center,w_auto/v1/academind.com/site/topics/vue"
          class="cld-responsive"
          data-width="50"
          src="https://res.cloudinary.com/academind-gmbh/image/upload/f_auto,q_auto/c_limit,dpr_1.0,g_center,w_200/v1/academind.com/site/topics/vue"
        />
      </v-col>
      <v-col class="ma-2" cols="2"
        ><img
          alt="JavaScript"
          data-src="https://res.cloudinary.com/academind-gmbh/image/upload/f_auto,q_auto/c_limit,dpr_auto,g_center,w_auto/v1/academind.com/site/topics/javascript"
          class="cld-responsive"
          data-width="50"
          src="https://res.cloudinary.com/academind-gmbh/image/upload/f_auto,q_auto/c_limit,dpr_1.0,g_center,w_200/v1/academind.com/site/topics/javascript"
      /></v-col>
    </v-row>

      <v-row>
        <v-col class="ma-2" cols="2"
          ><img
            alt="NodeJS"
            src="https://res.cloudinary.com/academind-gmbh/image/upload/f_auto,q_auto/c_limit,dpr_1.0,g_center,w_200/v1/academind.com/site/topics/nodejs"
        /></v-col>
        <v-col class="ma-2" cols="2">
          <img
            alt="TypeScript"
            src="https://res.cloudinary.com/academind-gmbh/image/upload/f_auto,q_auto/c_limit,dpr_1.0,g_center,w_200/v1/academind.com/site/topics/typescript"
          />
        </v-col>
        <v-col class="ma-2" cols="2">
          <img
            alt="HTML"
            src="https://res.cloudinary.com/academind-gmbh/image/upload/f_auto,q_auto/c_limit,dpr_1.0,g_center,w_200/v1/academind.com/site/topics/html"
        /></v-col>
        <v-col class="ma-2" cols="2">
          <img
            alt="CSS"
            src="https://res.cloudinary.com/academind-gmbh/image/upload/f_auto,q_auto/c_limit,dpr_1.0,g_center,w_200/v1/academind.com/site/topics/css"
        /></v-col>
      </v-row>
      <v-row>
        <v-col class="ma-2" cols="2">
          <img
            alt="Svelte"
            src="@/assets/Svelte.png"
            style="width: 70px"
        /></v-col>
      
        <v-col class="ma-2" cols="2">
          <img
            alt="Bootstrap"
            style="width: 120px; margin-top: -25px;"
            src="@/assets/bootstrap.png"
        /></v-col>
        <v-col class="ma-2" cols="2">
          <img
            alt="Photoshop"
            style="width: 70px; margin-left: 17px;"
            src="@/assets/photoshop.png"
        /></v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "Svgs",
  components: {},
  props: {},
  data() {
    return {};
  },
  mounted() {},
  beforeDestroy() {},
  methods: {},
};
</script>

<style lang="css" scoped>
ul {
  list-style: none;
}

img {
  width: 100px;
}
</style>

<template>
  <div class="d-flex flex-column justify-center align-center about-background" :style="{ 'background-color': color, 'height': height + 'px'}">
    <h1 :style="{'color': fontColor}">Hi, I am Amina!</h1>
    <h3 :style="{'color': fontColor}">I am a designer and developer with a love for detail and white space.</h3>
  </div>
</template>

<script>
export default {
  name: "AboutHeader",
  components: {},
  props: {
    color: {
      type: String,
      required: true
    },   
    fontColor: {
      type: String,
      required: true
    },
    height: {
      type: String,
      required: true
    }
  },
};
</script>

<style lang="scss" scoped>
  .about-background {
    width: 100%;
  }
</style>

<template>
  <div class="d-flex justify-center align-center about-background" :style="{ 'background-color': color, 'height': height + 'px'}">
    <h1 :style="{'color': fontColor}">About me</h1>
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

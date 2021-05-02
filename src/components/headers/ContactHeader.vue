<template>
   <div class="d-flex justify-center align-center contact-background" :style="{ 'background-color': color, 'color': fontColor, 'height': height + 'px'}">
    <h1 :style="{'color': fontColor}">Contact me</h1>
  </div>
</template>

<script>
export default {
  name: 'ContactHeader',
  props: {
     fontColor: {
      type: String,
      required: true
    },
    color: {
      type: String,
      required: true
    }, 
    height: {
      type: String,
      required: true
    }
  }
}
</script>


<style lang="scss" scoped>
  .contact-background {
    width: 100%;
  }
</style>

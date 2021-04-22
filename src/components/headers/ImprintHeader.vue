<template>
   <div class="d-flex justify-center align-center imprint-background" :style="{ 'background-color': color, 'color': fontColor, 'height': height + 'px'}">
    <h1 :style="{'color': fontColor}">Imprint</h1>
  </div>
</template>

<script>
export default {
  name: 'ImprintHeader',  
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
  .imprint-background {
    width: 100%;
  }
</style>

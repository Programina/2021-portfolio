<template>
    <div class="d-flex flex-column justify-center align-center ux-background"  :style="{ 'background-image': 'url(' + computedImage + ')', 'background-color': color, 'height': height + 'px'}">
   
      <span class="text-center">
        <h1 :style="{'color': fontColor}">UX and UI</h1>
        <h3 :style="{'color': fontColor}">This is what I design</h3>
      </span> 

  </div>
</template>

<script>
export default {
  name: 'UxUiHeader',
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
    },
    image: {
      type: String,
      required: false
    }
  },
  computed: {
    computedImage(){
      if(this.image) {
        let img = require('@/assets/'+ this.image + '')
        return img.substring(1);
        
      }
    }
  }
}
</script>

<style lang="scss" scoped>
  .ux-background {
    width: 100%;
    background-repeat: no-repeat;
    background-position: left bottom; 
    background-size: 400px 300px;
  }
</style>

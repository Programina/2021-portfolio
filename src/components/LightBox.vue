<template>
<div id="lightbox">
    <div class="lightbox" @click="toggleLightBox">
      <v-img
              :class="imgClass"
              :width="width"
              :height="height"
              :alt="alt | image"
              :src="require('@/assets/' + image + '')"
       ></v-img>
    </div> 
     <portal to="destination" :order="order">
        <div class="lightbox-target" v-if="!lightBoxClosed">
          <div :class="[[!isMobile ? 'lightbox-img-container-lg' : 'lightbox-img-container-sm' ], [isVertical ? ' is-vertical' : undefined], [isXL ? 'is-extra-large' : undefined]]">
           <v-img
              :alt="alt | image"
              :src="require('@/assets/' + image + '')"
            ></v-img>
          </div>
          <div :class="[!lightBoxClosed ? 'lightbox-close' : undefined]" @click="toggleLightBox"></div>
        </div>
    </portal>
</div>

</template>

<script>
import ismobile from '@/mixins/ismobile.js'
export default {
  name: 'LightBox',
  mixins: [ismobile],
  data() {
    return {
      lightBoxClosed: true
    }
  },
  props: {
    image: {
      type: String,
      required: true
    },
    order: {
      type: Number,
      required: false
    },
    imgClass: {
      type: String | Array,
      required: false
    }, 
    width: {
      type: String | Number,
      required: false
    }, 
    height: {
      type: String | Number,
      required: false
    },
    alt: {
      type: String,
      required: false
    },
    isVertical: {
      type: Boolean,
      required: false
    },
    isXL: {
      type: Boolean,
      required: false
    }
  },
  methods: {
    toggleLightBox(){
      this.lightBoxClosed = !this.lightBoxClosed
    }
  }
}
</script>

<style scoped lang="scss">

.lightbox {
  cursor: pointer;
}


/* Styles the lightbox image, centers it vertically and horizontally, adds the zoom-in transition and makes it responsive using a combination of margin and absolute positioning */



/* Provides part of the "X" to eliminate an image from the close link */

.lightbox-close:before {
content: "";
display: block;
height: 30px;
width: 1px;
background: black;
position: absolute;
left: 26px;
top:10px;
-webkit-transform:rotate(45deg);
-moz-transform:rotate(45deg);
-o-transform:rotate(45deg);
transform:rotate(45deg);
}


/* Uses the :target pseudo-class to perform the animations upon clicking the .lightbox-target anchor */

</style>
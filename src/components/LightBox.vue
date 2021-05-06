<template>
<div>
    <a class="lightbox" :href="'#' + image.substring(0, image.length - 4)">
      <v-img
              :class="imgClass"
              :width="width"
              :height="height"
              :alt="alt | image"
              :src="require('@/assets/' + image + '')"
       ></v-img>
    </a> 
     <portal to="destination" :order="order">
        <div class="lightbox-target" :id="image.substring(0, image.length - 4)">
          <div :class="[[!isMobile ? 'lightbox-img-container-lg' : 'lightbox-img-container-sm' ], [isVertical ? 'is-vertical' : undefined]]">
           <v-img
              :alt="alt | image"
              :src="require('@/assets/' + image + '')"
            ></v-img>
          </div>
          <a class="lightbox-close" href="#"></a>
        </div>
    </portal>
</div>

</template>

<script>
import ismobile from '@/mixins/ismobile.js'
export default {
  name: 'LightBox',
  mixins: [ismobile],
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
    }
  },
}
</script>

<style scoped lang="scss">


a.lightbox .v-image {
}


/* Styles the lightbox image, centers it vertically and horizontally, adds the zoom-in transition and makes it responsive using a combination of margin and absolute positioning */



/* Styles the close link, adds the slide down transition */

a.lightbox-close {
display: block;
width:50px;
height:50px;
box-sizing: border-box;
background: white;
color: black;
text-decoration: none;
position: absolute;
top: -80px;
right: 0;
-webkit-transition: .5s ease-in-out;
-moz-transition: .5s ease-in-out;
-o-transition: .5s ease-in-out;
transition: .5s ease-in-out;
}

/* Provides part of the "X" to eliminate an image from the close link */

a.lightbox-close:before {
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

/* Provides part of the "X" to eliminate an image from the close link */

a.lightbox-close:after {
content: "";
display: block;
height: 30px;
width: 1px;
background: black;
position: absolute;
left: 26px;
top:10px;
-webkit-transform:rotate(-45deg);
-moz-transform:rotate(-45deg);
-o-transform:rotate(-45deg);
transform:rotate(-45deg);
}

/* Uses the :target pseudo-class to perform the animations upon clicking the .lightbox-target anchor */

</style>
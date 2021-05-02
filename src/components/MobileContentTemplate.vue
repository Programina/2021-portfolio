<template>
  <div data-qa="mobile-content-template">
    <div
      v-for="(card, i) in cards"
      :key="i"
      class="mx-3"
      target="_blank"
      ref="scrollTransition"
    >
      <v-card>
        <v-img
          height="250"
          :src="require('@/assets/' + card.imgMblSrc + '')"
        ></v-img>

        <v-card-title>{{ card.title }}</v-card-title>
        <v-card-text> {{ card.description }} <br/><span v-if="card.href">  
              <v-card-text>
          <div class="d-flex flex-row flex-wrap justify-end" :data-qa="card.title">
            <div v-for="(tag, j) in card.tags" :key="j">
              <v-chip class="ma-2" color="primary" outlined>
                  <a :href="tag.tagHref" class="px-2" style="text-decoration: none !important; text-transform: none !important; color: inherit !important;"> {{ tag.tag }}</a>

                <v-icon left> mdi-{{ tag.tagIcon }} </v-icon>
              </v-chip>
            </div>
          </div>
        </v-card-text>
           <router-link :to="card.href"> <v-btn rounded elevation="10" color="primary" class="pa-6  ma-6">See Case Study </v-btn></router-link
          ></span></v-card-text>
  
      </v-card>
      <br />
    </div>
    <v-container v-if="currentRoute.path === '/ux-ui' || currentRoute.path === '/development'  ">
       <v-row>
     <v-col v-if="disclaimer" class="d-flex justify-center">
        <div class="my-10" style="max-width: 630px; font-size: 0.7em; text-align: left" v-html="disclaimer"/>
      </v-col>
    </v-row>
    </v-container>
    </div>
</template>

<script>

import { mapState } from "vuex"
import scrollbehavior from "@/mixins/scrollbehavior.js"

export default {
  name: 'MobileContentTemplate',
  misins: [scrollbehavior],
  props: {
     cards: {
      type: Array,
      required: true,
    }
  },
  data() {
    return {}
  },
  computed: {
  ...mapState(["currentRoute", "disclaimer"]),
   }
}
</script>

<style lang="scss" scoped>
    a, 
    a:hover, 
    a:active, a:focus, .btn-link a, .theme--light.v-btn {
      color: white !important
    } 
</style>

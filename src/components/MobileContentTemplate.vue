<template>
  <div>
    <div
      v-for="(card, i) in cards"
      :key="i"
      class="mx-3"
      target="_blank"
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
     <v-col class="d-flex justify-center">
        <div class="my-10" style="max-width: 630px; font-size: 1.1em; text-align: left">
          I have been employed full-time ever since I became a developer. Everything I code and design on here, I do in my free time. 
          My companies’ products were mostly proprietary, so I have very little to share.
        </div>
      </v-col>
    </v-row>
    </v-container>
    </div>
</template>

<script>

import { mapState } from "vuex"

export default {
  name: 'MobileContentTemplate',
  components: {},
  props: {
     cards: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {}
  },
  computed: {
  ...mapState(["currentRoute"]),
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

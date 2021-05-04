<template>
  <v-col class="mb-5 px-8" cols="12" justify="center">
    <v-row
      v-for="(card, i) in cards"
      :key="i"
      class="align-center my-5"
      cols="12"
    >
      <!--text left -->

      <v-col ref="scrollTransition" cols="6" v-if="card.id % 2 === 0" class="pr-12 d-flex align-center mb-6">
        <div data-qa="desktop-content-template" style="width: inherit">
          <h3 class="heading2 mb-3" style="text-align: right">
            {{ card.title }}
          </h3>
          <p style="text-align: right">{{ card.description }}</p>

          <div class="d-flex mb-10 justify-end">
            <div
              v-for="chip in card.chips"
              :key="chip.label"
              style="display: flex; flex-wrap: wrap"
            >
              <v-chip class="ma-2" filter>
                {{ chip.label }}
              </v-chip>
            </div>
          </div>

          <router-link
            v-if="card.href"
            :to="card.href"
            class="d-flex mb-10 justify-end"
          >
            <v-btn rounded elevation="10" color="primary" class="pa-6"
              >See Case Study
            </v-btn>
          </router-link>
        </div>
      </v-col>
      
      <!--image right -->
      <v-col ref="scrollTransition" cols="6" v-if="card.id % 2 === 0" class="pl-12 mb-6">
        <v-img
          class="ml-5"
          :alt="card.imgSrc"
          :src="require('@/assets/' + card.imgSrc + '')"
        ></v-img>
      </v-col>

      <!--image left -->
      <v-col ref="scrollTransition" cols="6" v-if="card.id % 2 != 0" class="pr-12 mb-6">
        <v-img
          :alt="card.imgSrc"
          class="ml-5"
          :src="require('@/assets/' + card.imgSrc + '')"
        ></v-img>
      </v-col>
      <v-spacer></v-spacer>

      <!-- text right -->
      <v-col ref="scrollTransition" cols="6" v-if="card.id % 2 != 0" class="pl-12 d-flex align-center mb-6">
        <div data-qa="desktop-content-template" style="width: inherit">
          <h3 class="heading2 mb-3" style="text-align: left">
            {{ card.title }}
          </h3>
          <p style="text-align: left">{{ card.description }}</p>
          <div class="d-flex mb-10">
            <span
              v-for="chip in card.chips"
              :key="chip.label"
              style="display: flex; flex-direction: row"
            >
              <v-chip class="ma-2" filter>
                {{ chip.label }}
              </v-chip>
            </span>
          </div>

          <router-link
            v-if="card.href"
            :to="card.href"
            class="d-flex mb-10 justify-start"
          >
            <v-btn rounded elevation="10" color="primary" class="pa-6 pa-2"
              >See Case Study
            </v-btn></router-link
          >
        </div>
      </v-col>
    </v-row>

    <v-row v-if="currentRoute.path === '/ux-ui' || currentRoute.path === '/development' ">
      <v-col v-if="disclaimer" class="d-flex justify-center">
        <div class="my-10" style="max-width: 630px; font-size: 0.7em; text-align: left" v-html="disclaimer"/>
      </v-col>
    </v-row>
  </v-col>
</template>

<script>
import { gsap } from "gsap"
import { mapState } from "vuex"
import scrollbehavior from "@/mixins/scrollbehavior.js"


export default {
  name: "DesktopContentTemplate",
  mixins: [scrollbehavior],
  props: {
    cards: {
      type: Array,
      required: true,
    }
  },
  data() {
    return {
      components: [{ name: "DateSaver" }, { name: "HabitStacks" }],
    };
  },
  computed: {
    ...mapState(["currentRoute", "disclaimer"]),
  }
};
</script>

<style lang="scss" scoped>
    a, 
    a:hover, 
    a:active, a:focus, .btn-link a, .theme--light.v-btn {
      color: white !important
    } 
</style>

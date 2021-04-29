<template>
   <v-container>
    <v-row class="text-center">
     
      <v-col v-if="isMobile" class="mb-5 px-8" cols="12" justify="center">
        <MobileContentTemplate :cards="cards" />
      </v-col>
   <v-col v-else class="mb-5 px-8" cols="12" justify="center">
        <DesktopContentTemplate :cards="cards" />
      </v-col>
     
    </v-row>
<!--     
    <v-row class="justify-center align-center my-10">
      <v-col cols="6">
        <h3>Honorable Mentions</h3>

        <div class="frame">
            <v-img alt="lotto" src="@/assets/lotto.jpg"/>
        </div>

      </v-col>
      <v-col cols="6">
         <v-img alt="lotto" src="@/assets/gardena.jpg" />
      </v-col>
    </v-row> -->
  </v-container>
</template>

<script>

import ismobile from '@/mixins/ismobile'
import MobileHeader from "@/components/headers/MobileHeader";
import MobileContentTemplate from "@/components/MobileContentTemplate";
import DesktopContentTemplate from "@/components/DesktopContentTemplate";

export default {
  name: 'Dev',
  mixins: [ismobile],
  components: { MobileHeader, MobileContentTemplate, DesktopContentTemplate },
  props: {},
  data() {
    return {cards: [
      {
        id: 1,
        title: "This Portfolio",
        href: "/portfolio",
        imgSrc: "portfolio.jpg",
        imgMblSrc: "portfolio.jpg",
        description:
          "This portfolio is still work in progress. I am documenting my changes and intentions.",
        
        chips: [
          {
            label: "Adobe Xd",
          },
          {
            label: "VueJS",
          },
          {
            label: "Vuetify",
          },
          {
            label: "Photoshop 2021",
          },
        ],
      },
      {
        id: 2,
        title: "DateSaver",
        href: "/date-saver",
        imgSrc: "datesaver.png",
        imgMblSrc: "datesaver.png",
        description:
          "This is an app I developed with little to no fancy visual design. However I put some thought into the user experience. Also, I am about to redesign it. The idea is simple: help people have less decisions to make about what to do on a date.",       
        chips: [
          {
            label: "VueJs",
          },
        ],
      },
      {
        id: 3,
        title: "RSS Feed",
        href: "/rss",
        imgSrc: "rssApp.png",
        imgMblSrc: "rssApp.png",
        description: 'Simple RSS Feed SPA I made for an interview.',
        chips: [
          {
            label: "Angular",
          },
        ],
      },
    ],}
  },
  mounted() {},
  beforeDestroy() {},
  methods: {}
}
</script>


<style lang="css" scoped>
  .frame {
  box-shadow: 0px 3px 6px #00000029;
  border: 2px solid white;
  }

</style>


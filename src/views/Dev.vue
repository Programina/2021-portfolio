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
    </v-row>
  </v-container>
</template>

<script>

import ismobile from '@/mixins/ismobile'
import MobileHeader from "@/components/MobileHeader";
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
        imgSrc: "habitApp.png",
        imgMblSrc: "habit.png",
        height: 200,
        description:
          "My personal project for an app to create long-term habits. The problem was to think of a target audience other than myself, to find the right layout and sequence of content.",
        tags: [
          {
            tag: "Adobe Creative Cloud",
            tagIcon: "web",
            tagHref: "https://xd.adobe.com/view/af881c31-3473-4945-8b4a-4208e189d823-fadb/",
          },
        ],
        chips: [
          {
            label: "Adobe Xd",
          },
        ],
      },
      {
        id: 2,
        title: "DateSaver",
        href: "/date-saver",
        imgSrc: "datesaver.jpg",
        imgMblSrc: "datesaver.jpg",
        description:
          "This is an app I developed with little to no fancy visual design. However I put some thought into the user experience. Also, I am about to redesign it. The idea is simple: help people have less decisions to make about what to do on a date.",
        height: 200,
        tags: [
          {
            tag: "DateSaver",
            tagIcon: "web",
            tagHref: "http://love.frontendpoint.com/",
          }
        ],
        chips: [
          {
            label: "VueJs",
          },
        ],
      }
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


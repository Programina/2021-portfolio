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
        title: "Habit App",
        href: "/habit-app",
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
        imgSrc: "fitnessapp.png",
        imgMblSrc: "pareto.png",
        description:
          "This is an app I developed with little to no fancy bling bling design, however there was some thought put into the user experience beforehand. I am about to redesign. It grew out of a need to automate the decision making process my boyfriend and I had to go through every evening to find out what to do. I did all the coding myself and am on a mission to improve design and UX.",
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
      },
      {
        id: 3,
        title: "RSS Feed App",
        href: "/gamification-app",
        imgSrc: "rssApp.png",
        imgMblSrc: "rssApp.png",
        description:
          "Eiusmod in labore est consequat dolore ea voluptate pariatur ad dolore incididunt labore irure. Mollit culpa cillum exercitation in laborum amet eu. Minim ipsum nostrud nulla labore anim. Reprehenderit nisi adipisicing incididunt esse consequat dolore Lorem labore aute irure occaecat quis. Culpa elit commodo voluptate nisi. Eu sint occaecat ex adipisicing eu duis ipsum nostrud proident duis.",
        height: 200,
        tags: [
          {
            tag: "Development",
            tagIcon: "code",
          },
          {
            tag: "GitHub",
            tagIcon: "github",
            tagHref: "https://github.com/programina-gui/RSS-Testapp",
          },
          {
            tag: "Website",
            tagIcon: "web",
            tagHref: "http://netz98-at-amina.belabb.es/",
          },
        ],
        chips: [
          {
            label: "Marvel",
          },
        ],
      },
      {
        id: 4,
        title: "Pareto App",
        href: "/pareto-app",
        imgSrc: "pareto.png",
        imgMblSrc: "pareto.png",
        description:
          "Eiusmod in labore est consequat dolore ea voluptate pariatur ad dolore incididunt labore irure. Mollit culpa cillum exercitation in laborum amet eu. Minim ipsum nostrud nulla labore anim. Reprehenderit nisi adipisicing incididunt esse consequat dolore Lorem labore aute irure occaecat quis. Culpa elit commodo voluptate nisi. Eu sint occaecat ex adipisicing eu duis ipsum nostrud proident duis.",
        height: 200,
        tags: [
          {
            tag: "Marvel Prototype",
            tagIcon: "github",
            tagHref: "https://marvelapp.com/60c71ad",
          },
          {
            tag: "Website",
            tagIcon: "web",
            tagHref: "https://github.com/programina-gui/RSS-Testapp",
          },
        ],
        chips: [
          {
            label: "Marvel",
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

<style lang="css" scoped></style>

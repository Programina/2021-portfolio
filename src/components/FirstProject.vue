<template>
  <v-container>
    <v-row class="text-center">
      <v-col v-if="isMobile" class="mb-5" cols="12">
        <MobileHeader :copy="copy" />
      </v-col>
      <v-col
        v-if="!isMobile"
        class="d-flex justify-center align-center"
        cols="12"
      >
        <div>
          <div class="heading1" >
            {{ copy.heading1 }}
          </div>
          <div class="heading2 mb-3">{{ copy.heading2 }}</div>
          <p>{{ copy.profile }}</p>
        </div>
      </v-col>

      <v-col v-if="isMobile" class="mb-5 px-8" cols="12" justify="center">
        <MobileContent :cards="cards" />
      </v-col>

      <v-col v-if="!isMobile" class="mb-5 px-8" cols="12" justify="center">
        <v-row v-for="(card, i) in cards" :key="i" class="my-5" cols="12"> 
            <v-card v-if="card.id && card.id % 2 != 0" width="100%">

             <div class="d-flex flex-no-wrap justify-space-between">
              <div>
              <v-card-title class="headline">
                {{card.title}}
              </v-card-title>
  
              <v-card-subtitle>{{card.description}}</v-card-subtitle>
              </div>
              <v-avatar
                class="ma-3"
                size="125"
                tile
              >
              <v-img
                class="mr-5"
                :src="require('@/assets/' + card.imgSrc + '')"
              ></v-img>
              </v-avatar>
             </div>
            </v-card>
           
            <!-- <v-col cols="6" v-if="card.id && card.id % 2 === 0">
              <v-img
                width="100%"
                class="mr-5"
                :src="require('@/assets/' + card.imgSrc + '')"
              ></v-img>
          </v-col> -->
          <v-col cols="6" v-if="card.id && card.id % 2 === 0" class="d-flex align-center justify-center">
                 <div>
                    <div class="heading2 mb-3"> {{card.title}}</div>
                    <p> {{card.description}}</p>
                </div>
          </v-col>
           
            <v-col cols="6" v-if="card.id && card.id % 2 === 0">
                <v-img
                  class="ml-5"
                  :src="require('@/assets/' + card.imgSrc + '')"
                ></v-img>
            </v-col>
         
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import MobileHeader from "./MobileHeader";
import MobileContent from "./MobileContent";
export default {
  name: "FirstProject",
  components: { MobileHeader, MobileContent },
  data: () => ({
    cards: [
      {
        id: 1,
        title: "Habit App",
        href: "/habit-app",
        imgSrc: "habitApp.png",
        height: 200,
        description: "My personal project for an app to create long-term habits. The problem was to think of a target audience other than myself, to find the right layout and sequence of content.",
        tags: [
          {
            tag: "GitHub",
            tagIcon: "github",
            tagHref: "https://github.com/programina-gui/RSS-Testapp",
          },
          {
            tag: "Website",
            tagIcon: "web",
            tagHref: "https://github.com/programina-gui/RSS-Testapp",
          },
        ],
      },
      {
        id: 2,
        title: "Fitness App",
        href: "/fitness-app",
        imgSrc: "fitnessapp.png",
        height: 200,
        tags: [
          {
            tag: "Marvel Prototype",
            tagIcon: "github",
            tagHref: "https://marvelapp.com/project/2876725",
          },
          {
            tag: "Website",
            tagIcon: "web",
            tagHref: "https://github.com/programina-gui/RSS-Testapp",
          },
        ],
      },
      {
        id: 3,
        title: "Gamification App",
        href: "/gamification-app",
        imgSrc: "gameApp.png",
        tags: [
          {
            tag: "GitHub",
            tagIcon: "github",
            tagHref: "https://github.com/programina-gui/RSS-Testapp",
          },
          {
            tag: "Website",
            tagIcon: "web",
            tagHref: "https://github.com/programina-gui/RSS-Testapp",
          },
        ],
      },
      {
        id: 4,
        title: "RSS Feed App",
        href: "/gamification-app",
        imgSrc: "rssFeed.png",
        tags: [
          {
            tag: "GitHub",
            tagIcon: "github",
            tagHref: "https://github.com/programina-gui/RSS-Testapp",
          },
          {
            tag: "Website",
            tagIcon: "web",
            tagHref: "https://github.com/programina-gui/RSS-Testapp",
          },
        ],
      },
      {
        id: 5,
        title: "Pareto App",
        href: "/pareto-app",
        imgSrc: "pareto.png",
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
      },
    ],
    copy: {
      heading1: "Amina Belabbes",
      heading2: "UX Designer and Frontend Developer",
      profile: "Love for detail and for white space",
    },
  }),
  computed: {
    isMobile() {
      switch (this.$vuetify.breakpoint.name) {
        case "xs":
          return true;
        case "sm":
          return true;
        case "md":
          return false;
        case "lg":
          return false;
        case "xl":
          return false;
      }
    },
    height() {
      switch (this.$vuetify.breakpoint.name) {
        case "md":
          return 350;
        case "lg":
          return 450;
        case "xl":
          return 550;
      }
    }
  },
};
</script>

<style lang="scss" scoped>
.heading1 {
  font-weight: 500;
  font-size: 4em;
  letter-spacing: 0px;
}
.heading2 {
  font-weight: 400;
  font-size: 2em;
  letter-spacing: 0px;
}

</style>
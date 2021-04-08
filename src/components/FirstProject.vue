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
          <div class="heading1">
            {{ copy.heading1 }}
          </div>
          <div class="heading2 mb-3">{{ copy.heading2 }}</div>
          <p v-html="copy.profile"></p>
        </div>
      </v-col>

      <v-col v-if="isMobile" class="mb-5 px-8" cols="12" justify="center">
        <MobileContent :cards="cards" />
      </v-col>

      <v-col v-if="!isMobile" class="mb-5 px-8" cols="12" justify="center">
        <v-row v-for="(card, i) in cards" :key="i" class="my-5" cols="12">
          <!--image right -->

          <v-col cols="6" v-if="card.id % 2 === 0" class="d-flex align-center">
            <div>
              <div class="heading2 mb-3">{{ card.title }}</div>
              <p style="text-align: left">{{ card.description }}</p>
              <router-link :to="card.href">See more</router-link>

              <div class="d-flex my-4 justify-start">
                <div v-for="(tag) in card.tags" :key="tag.tag">
                  <v-chip class="ma-2" color="primary" outlined>
                    <span class="px-2"> {{ tag.tag }}</span>

                    <v-icon left> mdi-{{ tag.tagIcon }} </v-icon>
                  </v-chip>
                </div>
                <div v-for="(chip) in card.chips" :key="chip.label">
                  <v-chip class="ma-2" filter>
                    {{ chip.label }}
                  </v-chip>
                </div>
              </div>
            </div>
          </v-col>
          <v-col cols="6" v-if="card.id % 2 === 0">
            <v-img
              class="ml-5"
              :src="require('@/assets/' + card.imgSrc + '')"
            ></v-img>
          </v-col>

          <!--image left -->
          <v-col cols="6" v-if="card.id % 2 != 0">
            <v-img
              class="ml-5"
              :src="require('@/assets/' + card.imgSrc + '')"
            ></v-img>
          </v-col>
          <v-col cols="6" v-if="card.id % 2 != 0" class="d-flex align-center">
            <div>
              <div class="heading2 mb-3">{{ card.title }}</div>
              <p style="text-align: right">{{ card.description }}</p>
              <router-link :to="card.href">See more</router-link>

              <div class="d-flex my-4 justify-end">
                <div v-for="(tag) in card.tags" :key="tag.tag" class="d-flex">
                  <v-chip class="ma-2" color="primary" outlined>
                    <span class="px-2"> {{ tag.tag }}</span>

                    <v-icon left> mdi-{{ tag.tagIcon }} </v-icon>
                  </v-chip>
                </div>
                <div v-for="(chip) in card.chips" :key="chip.label">
                  <v-chip class="ma-2" filter>
                    {{ chip.label }}
                  </v-chip>
                </div> 
              </div>
            </div>
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
        imgMblSrc: "habit.png",
        height: 200,
        description:
          "My personal project for an app to create long-term habits. The problem was to think of a target audience other than myself, to find the right layout and sequence of content.",
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
        chips: [
          {
            label: "Marvel",
          },
        ],
      },
      {
        id: 2,
        title: "Fitness App",
        href: "/fitness-app",
        imgSrc: "fitnessapp.png",
        imgMblSrc: "pareto.png",
        description:
          "Eiusmod in labore est consequat dolore ea voluptate pariatur ad dolore incididunt labore irure. Mollit culpa cillum exercitation in laborum amet eu. Minim ipsum nostrud nulla labore anim. Reprehenderit nisi adipisicing incididunt esse consequat dolore Lorem labore aute irure occaecat quis. Culpa elit commodo voluptate nisi. Eu sint occaecat ex adipisicing eu duis ipsum nostrud proident duis.",
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
        chips: [
          {
            label: "Marvel",
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
      },
    ],
    copy: {
      heading1: "Amina Belabbes",
      heading2: "Junior UX Designer and Frontend Developer",
      profile:
        "I'm a <b>Web Developer</b> with 2+ years of professional experience and about half a year of experience as a <b>UX Designer</b>, looking to transition into UX design. I love helping people transform their ideas into products they and their customers love to use. This is my portfolio which at the moment mostly includes private projects as the professional ones were mostly confidential.",
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
    },
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
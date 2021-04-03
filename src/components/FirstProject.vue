<template>
  <v-container>
    <v-row class="text-center">
      <v-col v-if="isMobile" class="mb-5" cols="12">
        <MobileHeader :copy="copy" />
      </v-col>

      <v-col v-if="!isMobile" cols="6">
        <v-img
          :src="require('../assets/female-developer-vector.jpg')"
          class="mt-5"
          contain
          :height="height"
        />
      </v-col>
      <v-col
        v-if="!isMobile"
        class="d-flex justify-center align-center"
        cols="6"
      >
        <div>
          <div class="heading1">
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
        <v-row v-for="(card, i) in cards" :key="i"> 
          <v-col cols="6">
            <v-img
              height="height"
              :src="require('@/assets/' + card.imgSrc + '.jpg')"
            ></v-img>
          </v-col>
          <v-col cols="6">
               <div class="heading2 mb-3"> {{card.title}}</div>
               <p> {{card.description}}</p>
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
        title: "Habit App",
        href: "/habit-app",
        imgSrc: "1",
        description: "New Description",
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
        title: "Fitness App",
        href: "/fitness-app",
        imgSrc: "2",
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
        title: "Gamification App",
        href: "/gamification-app",
        imgSrc: "3",
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
    },
  },
};
</script>

<style lang="scss" scoped>
.heading1 {
  font-weight: 500;
  font-size: 3em;
  letter-spacing: 0px;
}
.heading2 {
  font-weight: 400;
  font-size: 2em;
  letter-spacing: 0px;
}
</style>
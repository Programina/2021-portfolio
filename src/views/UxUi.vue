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
import DesktopContentTemplate from "@/components/DesktopContentTemplate";
import MobileContentTemplate from "@/components/MobileContentTemplate";

export default {
  name: "UxUi",
  mixins: [ismobile],
  components: { MobileContentTemplate, DesktopContentTemplate },
  data: () => ({
    cards: [
       {
        id: 1,
        title: "Easy Tutor",
        href: "/easytutor",
        imgSrc: "easytutor.png",
        imgMblSrc: "easytutor.png",
        description:
          "An unsolicited redesign of an online tutoring website.",
        
        chips: [
          {
            label: "Figma",
          },
           {
            label: "Photoshop 2021",
          }
        ],
      },
      {
        id: 2,
        title: "Habit Stacks",
        href: "/habit-stacks",
        imgSrc: "habitApp.png",
        imgMblSrc: "habit.png",
        description:
          "My personal project for an app to create long-term habits.",
        
        chips: [
          {
            label: "Adobe Xd",
          },
        ],
      }
      
    ],
    
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

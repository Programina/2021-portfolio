<template>
  <v-container id="other">
    <v-row>
      <v-col>
            <div class="d-flex justify-center align-center my-10"> 
      <div  style="max-width: 400px; text-align: center;">
       
      </div>
    </div>
     <v-col v-if="isMobile" class="mb-5 px-8" cols="12" justify="center">
        <MobileContentTemplate :cards="cards" />
      </v-col>
   <v-col v-else class="mb-5 px-8" cols="12" justify="center">
        <DesktopContentTemplate :cards="cards" />
      </v-col>
    <div
      v-for="(card, i) in cards"
      :key="i"
      class="mx-3"
      target="_blank"
    >

    </div>
      </v-col>
    </v-row>


  </v-container>
</template>

<script>

import MobileHeader from "@/components/headers/MobileHeader";
import MobileContentTemplate from "@/components/MobileContentTemplate";
import DesktopContentTemplate from "@/components/DesktopContentTemplate";
import ismobile from '@/mixins/ismobile'
export default {
  name: 'Other',
  components: {},
  mixins: [ismobile],
  components: { MobileHeader, MobileContentTemplate, DesktopContentTemplate },
  data() {
    return {
      cards: [
      {
        id: 1,
        title: "Live Event Drawing",
        href: "",
        imgSrc: "livedrawing.jpg",
        imgMblSrc: "livedrawing.jpg",
        height: 200,
        description:
          "I really enjoyed doing this fun project at my first development job. It was a company goal brought to life on a white board. I'd seen someone do it on a Tedx Talk in Frankfurt and wanted to try it myself. Would definitely do it again. :) ",
        tags: [
          {
            tag: "The Event - Xyna Conference",
            tagIcon: "web",
            tagHref: "https://www.gip.com/doc-bernds-futurelab/xyna-konferenz-reviews/2018/",
          },
        ],
        chips: [],
      },
      {
        id: 2,
        title: "Rails Girls Frankfurt 2017",
        href: "",
        imgSrc: "railsgirls2017.jpg",
        imgMblSrc: "railsgirls2017.jpg",
        description:
          "This was the first time I got to do modern coding and had so much fun being around other enthusiastic teachers and learners and I made new friends. After the event, I joined a club called Techettes e.V. (Women in Tech) of which I have been a member since.",
        height: 200,
        tags: [
          {
            tag: "Rails Girls Frankfurt ",
            tagIcon: "web",
            tagHref: "https://www.facebook.com/RailsGirlsFrankfurt/",
          }
        ],
        chips: [],
      }
      ]
    }
  },
}
</script>

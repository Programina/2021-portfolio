<template>
  <div id="other">
    <div class="d-flex justify-center align-center my-10"> 
      <div  style="max-width: 400px; text-align: center;">
        <h3>Here are some things I also enjoyed doing, either at work or in my free time.</h3>
      </div>
    </div>
    
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
        <v-card-text> {{ card.description }} <br/>
        <span v-if="card.href">  <router-link :to="card.href">
            <v-btn color="primary">See Case Study </v-btn></router-link
          ></span>
        
        </v-card-text>
        <v-card-text>
          <div class="d-flex flex-row flex-wrap justify-end" :data-qa="card.title">
            <div v-for="(tag, j) in card.tags" :key="j">
              <v-chip class="ma-2" color="primary" outlined>
                <span class="px-2"> {{ tag.tag }}</span>

                <v-icon left> mdi-{{ tag.tagIcon }} </v-icon>
              </v-chip>
            </div>

           
          </div>
        </v-card-text>
      </v-card>
      <br />

    </div>

  </div>
</template>

<script>

import ismobile from '@/mixins/ismobile'
export default {
  name: 'Other',
  components: {},
  mixins: [ismobile],
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
        chips: [
          {
            label: "Adobe Xd",
          },
        ],
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
        chips: [
          {
            label: "VueJs",
          },
        ],
      }
    ],}
  },
}
</script>

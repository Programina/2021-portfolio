<template>
  <v-container class="dates">
    <v-row>
      <stats-overview-card :stats="stats"></stats-overview-card>
    </v-row>
    <v-row>
      <v-col class="d-flex flex-column justify-center mt-10">

      
        <h3>Problem</h3>
        <p>
          Two years into our relationship, my boyfriend and I had developed the
          habit of ping-ponging our decision on how to spend our time together.
        </p>
        <v-row >
          <v-col class="d-flex justify-center">
             <v-img
          width="400"
          :src="require('@/assets/bored-couch.jpg')"
        ></v-img>
          </v-col>
        </v-row>
       
        <p class="my-5">
          We both love variety, but tire easily of making decisions.
          I thought of a way to approach this recurring problem strategically. I
          created an app.
        </p>
        <strong>
          We needed something simple to help make viable decisions on the activity. It should not take much time to type in further considerations like our current budget, the weather and time of day. 
        </strong>

        
        <h3 class="mt-16">Process</h3>
         <div class="enumeration mt-5">01</div>
        <p> 
          I wanted the interface to be familiar and fun. What is
          often used to reach a decision?
          Two things that came to mind were tossing a coin and a magic 8 ball
          works well too.
        </p>
        <v-row >
          <v-col class="d-flex justify-center">
              <v-img
          width="400"
          :src="require('@/assets/magic-8.jpg')"
        ></v-img>

          </v-col>
        </v-row>
      
        <div class="enumeration mt-12">02</div>
        <p> 
         I took a weekend to code, getting the local time and weather from APIs. </p>
         <p>
         The current version works like this: You click a button and get a suggestion for what to do. 
        </p>
        <p>
          The suggestions are mostly random, but with a subset of factors that are taken into account. 
          The app takes into consideration the local time and weather (just in Mainz so far) and lets you choose between three price ranges for your activities.
        </p>

        
        <v-row >
          <v-col class="d-flex justify-center">
             <a href="http://love.frontendpoint.com/">
        <v-img
          width="400"
          :src="require('@/assets/datesaverold.jpg')"
        ></v-img>
      </a>
          </v-col>
        </v-row>
     
        

        <div class="enumeration mt-12">03</div>
        <p> 
         I had not put much effort into the design, so I redesigned it recently. I started making a rough sketch on paper.
        </p>
      

        
        <v-row>
          <v-col class="d-flex justify-center">
              <v-img
              width="400"
              :src="require('@/assets/redesignone.jpg')"
            ></v-img>
          </v-col>
        </v-row>

        <div class="enumeration mt-12">04</div>
        <p> 
         Next was a moodboard. I tried finding the layout and colors of a magic 8 ball.
        </p>


        <v-row >
          <v-col class="d-flex justify-center">
            
        <v-img
          width="400"
          :src="require('@/assets/moodboarddatesaver.jpg')"
        ></v-img>
          </v-col>
        </v-row>



         <div class="enumeration mt-12">05</div>
        <p> 
        Thankfully the app was meant to be simple, so it did not take long to get to a nerly finished high fidelity mockup.
        </p>


        <v-row >
          <v-col class="d-flex justify-center">
            
        <v-img
          width="400"
          class="mb-12"
          :src="require('@/assets/datesavertwo.jpg')"
        ></v-img>

          </v-col>
        </v-row>


      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import StatsOverviewCard from "../../components/StatsOverviewCard.vue";
export default {
  name: "DateSaver",
  components: { StatsOverviewCard },
  props: {},
  data() {
    return {
      stats: {
        client: "My boyfriend and I",
        time: "A weekend in 2020",
        role: "Creator, designer, developer",
        sector: "Entertainment",
        status: "WIP",
        tags: [
          {
            tag: "DateSaver Website",
            tagIcon: "web",
            tagHref: "http://love.frontendpoint.com/",
          },
          {
            tag: "Adobe Mockup",
            tagIcon: "web",
            tagHref: "https://xd.adobe.com/view/dcb3ae1a-d272-464a-bd2d-89fa33031f24-89e0/",
          }
        ],
      },
    };
  },
};
</script>

<style lang="scss" scoped>
.dates {
  max-width: 630px;
  padding: 0 20px;
}

ul {
  li {
    a,
    a:visited,
    a:hover,
    a:active,
    a:focus {
      text-transform: inherit;
    }
  }
}
</style>

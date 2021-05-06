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
          habit of ping-ponging our decision on how to spend our evenings together.
        </p>
        <v-row >
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
          I wanted the interface to be familiar and fun, so I thought of a magic 8 ball.
        </p>
        <v-row >
        </v-row>
      
        <div class="enumeration mt-12">02</div>
        <p> 
         I took a weekend to code, getting the local time and weather from APIs. </p>
         <p>
         The current version works like this: You click a button and get a suggestion for what to do. 
        </p>
        <p>
          The suggestions are based on the local time in Mainz, the weather and the price range the user decided on.
        </p>

        
        <v-row >
          <v-col class="d-flex justify-center">
            
            <div style="text-align: center">
              <LightBox  class="py-1" :image="'datesaverold.jpg'" :width="400" :order="3"/>
              <a href="http://love.frontendpoint.com/" style="text-decoration: none !important; text-transform: none !important; color: #3bcea0 !important; "> Click here for the current Website</a>
      
            </div>
      
          </v-col>
        </v-row>
     
        

        <div class="enumeration mt-12">03</div>
        <p> 
         I had not put much effort into the design, so I redesigned it recently. I started making a rough sketch on paper.
        </p>
      

        
        <v-row>
          <v-col class="d-flex justify-center">
            <LightBox :image="'redesignone.jpg'" :width="400" :order="4"/>
          </v-col>
        </v-row>

        <div class="enumeration mt-12">04</div>
        <p> 
         Next was a moodboard. I tried finding the layout and colors of a magic 8 ball.
        </p>


        <v-row >
          <v-col class="d-flex justify-center">
            <LightBox :image="'moodboarddatesaver.png'" :width="400" :order="5"/>
          </v-col>
        </v-row>



         <div class="enumeration mt-12">05</div>
        <p> 
        Thankfully the app was meant to be simple, so it did not take long to get to a nerly finished high fidelity mockup.
        </p>


        <v-row >
          <v-col class="d-flex justify-center">
            <LightBox :image="'datesavertwo.jpg'" :width="400" imgClass="mb-12" :order="6"/>
          </v-col>
        </v-row>


      </v-col>
    </v-row>
  </v-container>
</template>

<script>

import LightBox from "@/components/LightBox"
import StatsOverviewCard from "../../components/StatsOverviewCard.vue";
export default {
  name: "DateSaver",
  components: { StatsOverviewCard, LightBox },
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

<template>
  <v-container class="dates" :class="[isMobile ? 'mobile' : undefined]">
    <v-row>
      <stats-overview-card :stats="stats"></stats-overview-card>
    </v-row>
    <v-row>
      <v-col class="d-flex flex-column justify-center mt-10">

      
        <h3>Challenge</h3>
        <p>
          My boyfriend and I had gotten in a rut deciding on what to do with our evenings together. 
        </p>
        <strong>
          I wanted an app to help us make decisions. It should not take much time, be fun and easy to use and have a surprise factor. The suggestions should still be viable though.  
        </strong>

        
        <h3 class="mt-16">Process</h3>
         <div class="enumeration mt-5">01</div>
        <p> 
          I wanted the interface to be familiar and fun. My first iteration focussed on programming, so I did not give the interface enough thought. This was months ago. After having learned a lot about user experience, I would approach this differently.
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
          <v-col class="d-flex flex-column justify-center text-center centered-image-group">
              <LightBox  class="py-1"  imgClass="rounded-lg" :image="'datesaverold.jpg'" :order="3"/>
              <a href="http://love.frontendpoint.com/"> Click here for the current Website</a>
          </v-col>
        </v-row>
     
        

        <div class="enumeration mt-12">03</div>
        <p> 
         I did a redesign and started with a rough sketch on paper.</p>

         <p>
         The app I had built did not 'spark joy', neither with me nor my boyfriend. So <strong>user testing revealed a bad user experience</strong>.
        </p>


        <v-row>
          <v-col class="d-flex justify-center mb-6 centered-image-group">
            <LightBox :image="'redesignone.jpg'" imgClass="rounded-lg" :width="400" :order="4"/>
          </v-col>
        </v-row>
        
        <p>It simply was not pleasant to look at or fun enough to use. I wanted a simpler,less noisy interface and something fun and playful. Connecting that to decision-making, I thought of a magic 8 ball.</p>
      

        <div class="enumeration mt-12">04</div>
        <p> 
         Next was a moodboard. I tried finding the layout and colors of a magic 8 ball.
        </p>


        <v-row >
          <v-col class="d-flex justify-center centered-image-group" >
            <LightBox :image="'moodboarddatesaver.png'" imgClass="rounded-lg elevation-2" :width="400" :order="5"/>
          </v-col>
        </v-row>



        <h3 class="mt-15">Current Design</h3>
        <p> 
        The mockup is still work in progress. I plan on introducing a better contrast around the buttons as well as more depth and add info on the time of day. 
        </p>


        <v-row >
          <v-col class="d-flex flex-column justify-center text-center mb-12 centered-image-group">
          
            <LightBox :image="'datesavertwo.jpg'" imgClass="rounded-lg elevation-2" :order="6"/> 
            <a href="https://xd.adobe.com/view/dcb3ae1a-d272-464a-bd2d-89fa33031f24-89e0/"> Click here for the current Mockup</a>
  
          </v-col>
        </v-row>

        <p>I will then create a clickable prototype. 
        I also plan on structuring my design systems better, so colors are not the first thing you see on clicking the Adobe link.</p>


      </v-col>
    </v-row>

    <p class="mb-8" >
    
            <p class="text-center mb-16">
              <router-link to="/other" class="my-8 green-link" style="font-weight: bolder" > Check out what else I do in 'Other'  
              <span class="inline-arrow">
               <svg  height="30px" fill="#3bcea0" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                  viewBox="0 0 512 512" style="enable-background:new 0 0 512 512;" xml:space="preserve">
                <g id="XMLID_1_">
                  <polyline id="XMLID_3_" points="0,263.9 506.5,263.9 506.5,248.1 0,248.1 	"/>
                  <polygon id="XMLID_4_" points="439.5,334 512,261.5 512,250.5 439.5,178 428.5,189 494.7,256 428.5,323 	"/>
                </g>
                </svg>

              </span>
              </router-link>
            </p>
    </p>
  </v-container>
</template>

<script>

import LightBox from "@/components/LightBox"
import StatsOverviewCard from "../../components/StatsOverviewCard.vue";
import ismobile from "@/mixins/ismobile";
export default {
  name: "DateSaver",
  components: { StatsOverviewCard, LightBox },
  mixins: [ismobile],
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

  &.mobile {
    padding: 0 70px;
  }
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


a, a:hover, a:active, a:visited, a:focus {
  text-decoration: none !important; 
  text-transform: none !important; 
  color: #3bcea0 !important; 
}

.centered-image-group {
  max-width: 100%;
  width: 100%;
 
  ::v-deep #lightbox {
    display: flex;
    justify-content: center;
    
    &.mobile {
     width: 100%;
    }
      .lightbox {
      width: 100%;
    }
  }
}

</style>

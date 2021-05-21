<template>
  <v-container class="habits" :class="[isMobile ? 'mobile' : undefined]">
    <v-row>
      <stats-overview-card :stats="stats"></stats-overview-card>
    </v-row>

    <v-row>
      <v-col>
        <h3>Challenge</h3>
        <p>I wanted to create an app that helps facilitate long-term change through habits.
        </p>
           <p>
          HabitStacks is the working name for an app I am in the process of
          creating. So far, all I have is a design.
        </p>

      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <h3>Process</h3>
     
       
        <p>
          I got inspiration from this design on Instagram. I had a weekend and was super
          eager to try and create my own version of it.
        </p>
        <LightBox image="idea.jpg" height="350" imgClass="my-12 rounded-lg" alt="Instagram mobile design" :order="8"/>

        <h3>Research</h3>

         <p>
          This project is still in its early stages. Ideally, in the near future, I will conduct some foundational research, create a user persona to get an idea of my target audience. 
         
         </p>
         <p>The design might evoke too cool and distanced emotions, I want it to be engaging and fun. </p>
       
       <h3>Current Design</h3>
       
        <LightBox image="habit.png" height="300" imgClass="my-12 rounded-lg" alt="habit app adobe xd mockup" :order="7"/>

        
          
        <h3>Learnings</h3>
         

        <p class="mb-16">During the process I noticed that I had fallen prey to the "false consensus bias". Only because I like a design, other people might not. 

        
        
            <p class="text-center mb-16">
              <router-link to="/portfolio" class="my-8 green-link" style="font-weight: bolder" > Next up is this Portfolio  
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
     
   
    

      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import LightBox from '@/components/LightBox';
import StatsOverviewCard from "../../components/StatsOverviewCard.vue";
import ismobile from "@/mixins/ismobile";

export default {
  name: "HabitStacks",
  components: { StatsOverviewCard, LightBox },
  mixins: [ismobile],
  data() {
    return {
      stats: {
        client: "Me",
        time: "A weekend in 2020 - ongoing",
        role: "Creator",
        sector: "Self-development",
        status: "WIP",
        tags: [
          {
            tag: "Mockup in Adobe Xd",
            tagIcon: "web",
            tagHref: "https://xd.adobe.com/view/af881c31-3473-4945-8b4a-4208e189d823-fadb/",
          },
        ],
      },
    };
  },
};
</script>

<style lang="scss" scoped>
.habits {
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

p {
  margin-bottom: 26px;
}

h3 {
  margin: 6px 0 16px 0;
}
</style>

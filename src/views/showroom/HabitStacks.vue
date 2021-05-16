<template>
  <v-container class="habits">
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
        <LightBox image="idea.jpg" height="250" imgClass="my-12" alt="Instagram mobile design" :order="8"/>

        <h3>Research</h3>

         <p>
          I will gather some data via secondary research and perhaps develop a short survey and a user persona to get an idea if this solves other people's problems as well as my own and if so, who might use the app and what kinds of apps they have been using in the past. 
         
         </p>
         <p>The design might evoke too cool and distanced emotions, I want it to be engaging and fun. </p>
       
       <h3>Current Design</h3>
       
        <LightBox image="habit.png" height="250" imgClass="my-12" alt="habit app adobe xd mockup" :order="7"/>

        
          
        <h3>Learnings</h3>
         

     <p>During the process I noticed that I had fallen prey to the "false consensus bias". Only because I like a design, other people might not. </p>
     
     <p> Here is an info graphic I made on the biases I learned about at the Google UX Design Certificate Course.</p>
     <div style="widt: 100%" class="d-flex justify-center">
        <LightBox image="CommonBiases.png" height="990" :isXL="true" :isVertical="true" width="380" imgClass="my-12" alt="Info graphic on biases" :order="14"/>
     </div>
     <p> 
If this had not been a project for personal use, I would have done more in-depth foundational research, found out who the product was for and what problem it solved before engating in the design process. </p>

      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import LightBox from '@/components/LightBox';
import StatsOverviewCard from "../../components/StatsOverviewCard.vue";
export default {
  name: "HabitStacks",
  components: { StatsOverviewCard, LightBox },
  props: {},
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

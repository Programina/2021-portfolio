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
          same routine every evening, where he'd say "Honey, what are we going
          to do tonight?" and everytime I was so overwhelmed with decision fatigue that we'd end up doing the same things.
        </p>
        <v-img
          height="250"
          width="400"
          :src="require('@/assets/bored-couch.jpg')"
        ></v-img>
        <p>
          We both love variety and changing things up every once in a while, so
          I thought of a way to approach this recurring problem strategically. I
          created an app.
        </p>

        <h3>Requirements</h3>
        <p>
          We needed something simple that took away the effort of considering our current budget, the weather and time of day. 
           
        </p>

        
        <h3>Process</h3>
         <div class="enumeration mt-12">01</div>
        <p> 
          I wanted the interface to be familiar and fun. What is
          often used to reach a decision?
          Two things that came to mind were tossing a coin and a Magic 8 Ball
          works well too. Both have a super simple user interface. :)
        </p>

        <v-img
          height="250"
          width="400"
          :src="require('@/assets/magic-8.jpg')"
        ></v-img>

         <div class="enumeration mt-12">02</div>
        <p> 
         I took a weekend to code, getting the local time and weather from APIs, writing down a set of data. I listed a bunch of activities, attributed times of day in which you would do them, attribute a type of weather that was suitable and a budget. 
         It is still work in progress, but usually we got some good guesses from the program. 
        </p>

        
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
        role: "Creator, includes branding strategist, UX designer, developer",
        sector: "Entertainment",
        tags: [
          {
            tag: "DateSaver Website",
            tagIcon: "web",
            tagHref: "http://netz98-at-amina.belabb.es/",
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

<template>
  
   <v-container>
    <v-row>
      <stats-overview-card :stats="stats"></stats-overview-card>
    </v-row>
   </v-container>

</template>

<script>
import StatsOverviewCard from "../../components/StatsOverviewCard.vue";
export default {
  name: 'EasyTutor',
  components: {StatsOverviewCard},
  props: {},
  
  data() {
    return {
      stats: {
        client: "Easy-Tutor",
        time: "Three to four hours in May 2021",
        role: "UI Designer",
        sector: "E-Learning, Education",
        status: "Finished",
        tags: [
          {
            tag: "Figma Mockup, Design System and Moodboard",
            tagIcon: "web",
            tagHref: "https://www.figma.com/file/gCIyRBm2RvCrelhRb2tZDh/Easy-Tutor?node-id=0%3A1",
          }
        ],
      },
    };
  },
}
</script>

<style lang="scss" scoped>

a,
a:visited,
a:hover,
a:active,
a:focus {
  text-transform: inherit;
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

.enumeration {
  font-size: 2em;
  color: #f5e29e;
}
</style>


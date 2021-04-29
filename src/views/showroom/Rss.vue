<template>
  
   <v-container class="rss">
    <v-row>
      <stats-overview-card :stats="stats"></stats-overview-card>
    </v-row>
   </v-container>

</template>

<script>
import StatsOverviewCard from "../../components/StatsOverviewCard.vue";
export default {
  name: 'Rss',
  components: {StatsOverviewCard},
  props: {},
  
  data() {
    return {
      stats: {
        client: "Netz98",
        time: "A weekend in 2019",
        role: "UI Designer, Developer",
        sector: "E-Commerce",
        tags: [
          {
            tag: "DateSaver Website",
            tagIcon: "web",
            tagHref: "http://love.frontendpoint.com/",
          },
          {
            tag: "Github",
            tagIcon: "github",
            tagHref: "https://github.com/programina-gui/RSS-Testapp"
          }
        ],
      },
    };
  },
}
</script>

<style lang="scss" scoped>
.rss {
  max-width: 630px;
  padding: 0 20px;
}

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


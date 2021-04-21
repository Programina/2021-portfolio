<template>
  <v-container class="dates">
    <v-row>
      <stats-overview-card :stats="stats"></stats-overview-card>
    </v-row>
    <v-row>
      <v-col class="d-flex flex-column justify-center mt-10">
        <p>
          Two years into our relationship, my boyfriend and I had developed the
          same routine every evening, where he'd say "Honey, what are we going
          to do tonight?" and I'd think long and hard, trying to be creative,
          but, after a long day at work, the only things I could think of were
          "Let's watch a movie" or "Let's play a video game". That got boring
          quickly.
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
        <p>
          Creating a user persona seemed a bit of an overkill for two people.
          When I thought of the interface and what it would have to look like, I
          went back to thinking about the reality of me and my boyfriend sitting
          on the couch trying to think as little as possible. I thought: What is
          the easiest and fastest way to reach a decision?
        </p>
        <p>
          My initial thought: toss a coin. On second thought: a Magic 8 Ball
          works well too. Both have a super simple user interface. :)
        </p>

        <v-img
          height="250"
          width="400"
          :src="require('@/assets/magic-8.jpg')"
        ></v-img>
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
            tagHref: "http://love.frontendpoint.com/",
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

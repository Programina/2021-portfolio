<template>
  <v-container class="habits">
    <v-row>
      <stats-overview-card :stats="stats"></stats-overview-card>
    </v-row>

    <v-row>
      <v-col>
        <h3>The Problem</h3>
        <p>Having goals is easy, creating change can be hard. I wanted to create an app that helps facilitate long-term change.
        </p>

      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <h3>The conception</h3>
        <p>
          HabitStacks is the working name for an app I am in the process of
          creating. So far, all I have is a design.
        </p>

        <v-img
          alt="Instagram mobile design"
          height="250"
          class="my-12"
          :src="require('@/assets/habit.png')"
        ></v-img>

        <p>
          I got inspiration from this design on Instagram. I had a weekend and was super
          eager to try and create my own version of an inspiring design I had found on Instagram.
        </p>

        <v-img
          alt="Instagram mobile design"
          height="250"
          class="my-12"
          :src="require('@/assets/idea.jpg')"
        ></v-img>

        <h3>Going forward</h3>
        <p>
          I intend on going back to wireframing and designing a few more frames. Then start development and testing the stages with friends and possible users.
        </p>
        <h3>Learnings</h3>
        <p>
          I will have to either change software or figure out a way to make sure my prototypes are not re-formatted as they are downloaded from the cloud.
          </p>
          <p>
The design looks nice and modern, but too cool and emotionally not engaging. Wanting to change a habit, you have to be emotionally invested. So I will likely spend some time on re-iterating the design.</p>

     <p>
I will not skip the steps of research on user acceptance with a prototype next time. </p>

      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import StatsOverviewCard from "../../components/StatsOverviewCard.vue";
export default {
  name: "HabitStacks",
  components: { StatsOverviewCard },
  props: {},
  data() {
    return {
      stats: {
        client: "Me",
        time: "A weekend in 2020 - ongoing",
        role: "Creator, includes branding strategist, UX designer, developer",
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

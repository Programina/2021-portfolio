<template>
  <v-container class="habits">
    <v-row>
      <stats-overview-card :stats="stats"></stats-overview-card>
    </v-row>

    <v-row>
      <v-col>
        <h3>The Problem</h3>
        <p>Having goals is easy, creating change can be hard. Want to change your habits? I wanted to change mine.  I read a some books, downloaded some apps. Little stuck long-term 
        </p>

        <p>I later found out I made these <strong>four mistakes</strong> over and over again: </p>


        <p>
          <ol class="ml-6">
            <li>wanting to work on too many habits at the same time</li>
            <li>wanting to progress to the next level too early</li>
            <li>“Shiny object syndrome”</li>
            <li>not taking advantage of already existing habits</li>
          </ol>
        </p>



        <v-img
          height="250"
          alt="A woman's face looking at objects"
          class="my-12"
          :src="require('@/assets/habits.jpg')"
        ></v-img>

        
        <p>I wanted to get out of the loop of making those mistakes, so I created HabitStacks.</p>

      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <h3>The conception</h3>
        <p>
          HabitStacks is the working name for an app I am in the process of
          creating. So far, all I have is a design.
        </p>

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
          Next, I will implement a way to highlight existing
          habits to connect them to existing ones. Another important focus will be to prevent users from overwhelm by picking habits that are realistically not doable longterm. 
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
        client: "Me and other self-development fans - most likely millenials",
        time: "A weekend in 2020 - ongoing",
        role: "Creator, includes branding strategist, UX designer, developer",
        sector: "Self-development",
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

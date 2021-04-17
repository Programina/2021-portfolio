<template>
  <v-container class="portfolio">
    <v-row>
      <stats-overview-card :stats="stats"></stats-overview-card>
    </v-row>

    <v-row>
      <v-col>
        <h3>The Problem</h3>
        <p>
          The first idea was to give potential clients and employers a digital
          business card so they would know how to get in touch.
        </p>

        <div class="enumeration mt-12">01</div>
        <p>
          To start coding, I started with something that felt
          <strong>doable</strong> and to just include the social media links as
          sort of a
          <a href="https://en.wikipedia.org/wiki/Call_to_action_(marketing)"
            >"Call to Action (CTA)"</a
          >.
        </p>

        <v-img
          height="550"
          alt="Amina's first Website"
          :src="require('@/assets/firstwebsite.jpg')"
        ></v-img>

        <div class="enumeration mt-12">02</div>
        <p>
          I set the background image to a female programmer, because being
          female in the industry is still rare and stands out about me. I used
          this particular shade of green, because I work with VueJs and I wanted
          to use their main color. It felt fresh and modern.
        </p>

        <div class="enumeration mt-12">03</div>
        <p>
          Next, I created a mood board with images using blue and green. I had
          learned that more than two colors in a beginner’s portfolio could ruin
          the piece and that they would to good to keep it simple.
        </p>

        <div class="enumeration mt-12">04</div>
        <p>
          After reading an article on "best in class" UX design portfolios, however,
          I realized that a lot of
          emphasis was placed on personality and that color could be okay.
        </p>

         <div class="enumeration mt-12">05</div>
        <p>Now I had done three mobile frames and got so excited that I started coding right away. The result was ok, but I realized I did not need the time lines on the left, they added little to the visuals and would have been a pain to implement.</p>

        <h3>First iteration</h3>

        <v-row class="my-5">
          <v-col>
               <v-img
          alt="design1"
          width="400"
          :src="require('@/assets/old2.jpg')"
        ></v-img>
          </v-col>
          <v-col>
             <v-img
          alt="design1 mobile"
          width="100"
          :src="require('@/assets/old3.jpg')"
        ></v-img>
          </v-col>
        </v-row>
       

        <h3>Second iteration</h3>

        
        <v-row class="my-5">
          <v-col>
               <v-img
          alt="design1"
          width="400"
          :src="require('@/assets/secondIteration.jpg')"
        ></v-img>
          </v-col>
          <v-col>
             <v-img
          alt="design1 mobile"
          width="100"
          :src="require('@/assets/seconditerationmobile.jpg')"
        ></v-img>
          </v-col>
        </v-row>


      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import StatsOverviewCard from '../../components/StatsOverviewCard.vue';
export default {
  name: "Portfolio",
  components: {StatsOverviewCard},
  props: {},
  data() {
    return {
      stats: {
        client: "Me",
        time: "Beginning of 2020 – ongoing",
        role: "Creator, includes branding strategist, UX designer, developer",
        sector: "IT / Tech",
        tags: [
          {
            tag: "Portfolio with Adobe Xd",
            tagIcon: "web",
            tagHref:
              "https://xd.adobe.com/view/340e7b2d-309f-4edb-b067-cc86ad272e08-615d/",
          },
          {
            tag: "GitHub Repo",
            tagIcon: "github",
            tagHref: "https://github.com/Programina/2021-portfolio",
          },
        ],
      },
    };
  },
  methods: {},
};
</script>


<style lang="scss" scoped>
.portfolio {
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

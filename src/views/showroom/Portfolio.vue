<template>
  <v-container class="portfolio">
    <v-row>
      <stats-overview-card :stats="stats"></stats-overview-card>
    </v-row>

    <v-row>
      <v-col>
        <h3>The Problem</h3>
        <p>
          I had been a developer for years and had started designing, but was scattered all over the net with my designs and with my code. <strong>I needed a single business-card type of website to show to people.</strong>
        </p>

        <div class="enumeration mt-12">01</div>
        <p>
          To start coding, I started including the social media links as
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
          I set the background image to a female programmer, because I am proud to be a female developer. 
        </p>

        <div class="enumeration mt-12">03</div>
        <p>
          Next, I created a mood board with images using two colors, trying to be minimal. 
        </p>

        <v-img
          width="620"
          alt="Amina's first Website"
          :src="require('@/assets/portfoliomoodboard.jpg')"
        ></v-img>


        <div class="enumeration mt-12">04</div>
        <p>
          I then designed a mobile mockup in Adobe Xd, knowing that development is usually mobile first and that I was likely to start coding before I had a finished design.
        </p>

        <v-img
          width="620"
          alt="Amina's first Website"
          :src="require('@/assets/portfolio.jpg')"
        ></v-img>

         <div class="enumeration mt-12">05</div>
        <p>Now I switched between coding and redesigning.</p>

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
          width="100%"
          :src="require('@/assets/seconditeration.gif')"
        ></v-img>
          </v-col>
        </v-row>

         <div class="enumeration mt-12">06</div>

    
        <p>I wanted colors, but had no color scheme in place, so I used the Adobe color wheel, picked one color I liked and got matching colors.</p>
        <v-row class="my-5">
          <v-col>
               <v-img
          width="620"
          alt="Third iteration"
          :src="require('@/assets/colorpallette.jpg')"
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
        status: "WIP",
        tags: [
          {
            tag: "Mockup in Adobe Xd",
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

</style>

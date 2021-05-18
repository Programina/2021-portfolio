<template>
  <v-container class="portfolio">
    <v-row>
      <stats-overview-card :stats="stats"></stats-overview-card>
    </v-row>

    <v-row>
      <v-col>
        <h3>The Problem</h3>
        <p>
          I had been a developer for years and had started designing, but was
          scattered all over the net with my designs and with my code.
          <strong
            >I needed a single business-card type of website to show to
            people.</strong
          >
        </p>

        <div class="enumeration mt-12">01</div>
        <p>
          To start coding, I started including the social media links as sort of
          a
          <a href="https://en.wikipedia.org/wiki/Call_to_action_(marketing)"
            >"Call to Action (CTA)"</a
          >.
        </p>
        <LightBox
          image="firstwebsite.jpg"
          height="550"
          imgClass="my-12 rounded-lg"
          alt="Amina's first Website"
          :order="11"
        />

        <div class="enumeration mt-12">02</div>
        <p>
          Next, I created a mood board with images using two colors, trying to
          be minimal.
        </p>

        <LightBox
          image="portfoliomoodboard.jpg"
          imgClass="rounded-lg"
          width="620"
          alt="Moodboard"
          :order="11"
        />

        <div class="enumeration mt-12">03</div>
        <p>
          I then designed a mobile mockup in Adobe Xd, knowing that development
          is usually mobile first and that I was likely to start coding before I
          had a finished design.
        </p>
        <LightBox
          image="portfolio.jpg"
          imgClass="rounded-lg"
          width="620"
          alt="Amina's first Website"
          :order="12"
        />

        <div class="enumeration mt-12">04</div>
        <p>Now I switched between coding and redesigning.</p>

        <h3>First iteration</h3>

        <v-row class="my-5">
          <v-col>
            <LightBox image="old2.jpg" imgClass="rounded-lg" width="400" alt="design1" :order="13" />
          </v-col>
          <v-col>
            <LightBox
              image="old3.jpg" v-bind:isVertical="true"
              imgClass="rounded-lg"
              width="130"
              alt="design1 mobile"
              :order="14"
            />
          </v-col>
        </v-row>

        <div class="enumeration mt-12">05</div>

        <p>
          I messed up trying to find a matching color scheme. I thought I'd go
          for colors I found in my profile pic, but the contrast was terribly
          off - not good for accessibility.
        </p>
        <v-row class="my-5">
          <v-col>
            <LightBox
              imgClass="rounded-lg"
              image="colorpallette.jpg"
              width="620"
              alt="Third iteration"
              :order="15"
            />
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import LightBox from "@/components/LightBox";
import StatsOverviewCard from "../../components/StatsOverviewCard.vue";
export default {
  name: "Portfolio",
  components: { StatsOverviewCard, LightBox },
  props: {},
  data() {
    return {
      stats: {
        client: "Me",
        time: "Beginning of 2020 – ongoing",
        role: "Creator",
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

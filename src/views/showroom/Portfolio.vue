<template>
  <v-container class="portfolio">
    <v-row>
      <stats-overview-card :stats="stats"></stats-overview-card>
    </v-row>

    <v-row>
      <v-col>
        <h3>Challenge</h3>
        <p>
          My online presence had no unified brand and was scattered all over the net with my designs and with my code.
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
          imgClass="my-12 rounded-lg elevation-2"
          alt="Amina's first Website"
          :order="11"
        />

        <div class="enumeration mt-12">02</div>
        <p>
          Next, I created a mood board with images using no more than two colors, which was a tip I had gotten from a senior designer.
        </p>

        <LightBox
          image="portfoliomoodboard.jpg"
          imgClass="rounded-lg elevation-2 mt-10 mb-14"
          width="620"
          alt="Moodboard"
          :order="16"
        />

        <p>
         For inspiration I went to Dribbble, Behance and Instagram but also <strong>actually looked at what other great design portfolios did</strong>. 
        </p>

        <div class="enumeration mt-12">03</div>
        <p>
          I then designed a mobile mockup in Adobe Xd, knowing that development
          is usually mobile first. Being short on time, I was likely to start coding before I
          had a finished design.
        </p>
        <LightBox
          image="portfolio.jpg"
          imgClass="rounded-lg elevation-2 mt-10 mb-14"
          width="620"
          alt="Amina's first Website"
          :order="12"
        />

        <div class="enumeration mt-12">04</div>
        <p>Now I switched between coding and redesigning.</p>

       

        <v-row class="mt-10 mb-14 d-flex justify-center">
          <v-col>
            <LightBox image="old2.jpg" imgClass="rounded-lg elevation-2" width="400" alt="design1" :order="13" />
            
          </v-col>
          <v-col>
            <LightBox
              image="old3.jpg" 
              :isVertical="true"
              imgClass="rounded-lg elevation-2"
              width="126"
              alt="design1 mobile"
              :order="14"
            />
          </v-col>

          <div style="color: #959595 !important; text-align: center; font-size: 0.9em !important;">First iteration</div>
        </v-row>

      

        <div class="enumeration mt-12">05</div>
        <p>
          I messed up trying to find a matching color scheme that was terrible for accessibility and I could not decide on one.
        </p>
        <v-row>
          <v-col>
            <LightBox
              imgClass="rounded-lg elevation-2 mt-10 mb-8"
              image="colorpallette.jpg"
              width="620"
              alt="Third iteration"
              :order="15"
            />
          </v-col>
        </v-row>
        <div class="enumeration mt-12">06</div>

        <p>
          Reverting back to minimalism therefore seemed like a good idea and I chose the colors I had used at the very beginning, since I felt they were <strong>modern, fresh, lively and fun</strong>, all attributes I want to fit my personal brand and style.
        </p>
        <p>To get a little more feedback, I set all my social media banners to my new logo and checked in if it got me any more page views - and it did.</p>
        
         <div class="enumeration mt-12">07</div>

        <p>
          In parallel I had started redesigning my logo, which I felt looked clunky, amateurish. I thought I was being smart using development symbolism to represent me as a developer, when really I want to be recognized as designer.
          Here is what I ended up with after a few attempts and tutorials.   
        </p>
        
         <v-row>
          <v-col>
            <LightBox
              imgClass="rounded-lg elevation-2 mt-10 mb-14"
              image="logoattempts.png"
              width="620"
              height="220"
              alt="Third iteration"
              :order="15"
            />
          </v-col>
        </v-row>

         <h3>Learnings</h3>

         <v-card class="mx-auto" elevation="0" max-width="600" tile>
                  <v-list dense>
                      <v-list-item>
                        <v-list-item-icon>
                          <v-icon v-text="'mdi-shield-sun-outline'"></v-icon>
                        </v-list-item-icon>
                        <v-list-item-content
                          > I had started quite a few attempts at designing a portfolio prior to this one, but really getting to a point where I would send it out seemed impossible. Either I spent too much time on coding and not enough on the design or the other way around.
                          </v-list-item-content
                          >
                      </v-list-item>
                      <v-list-item>
                        <v-list-item-icon>
                          <v-icon v-text="'mdi-shield-sun-outline'"></v-icon>
                        </v-list-item-icon>
                        <v-list-item-content>
                          What was crucial for succeeding this time was increasing the quantity of sources of inspiration, strategically sourcing learning material to improve and starting small.
                        </v-list-item-content>
                      </v-list-item>

                      <v-list-item>
                        <v-list-item-icon>
                          <v-icon v-text="'mdi-shield-sun-outline'"></v-icon>
                        </v-list-item-icon>
                        <v-list-item-content>
                         Also, crucially, I got a friend who is a UX designer to give me critical feedback. Asking my friends usually resulted in "I love it, it's great", which is flattering, but no use.
                        </v-list-item-content>
                      </v-list-item>

                      <v-list-item>
                        <v-list-item-icon>
                          <v-icon v-text="'mdi-shield-sun-outline'"></v-icon>
                        </v-list-item-icon>
                        <v-list-item-content>
                          Had I chosen to do the entire portfolio on a hosting site like Squarespace or Adobe Portfolio, I would habe been faster, but it would have not represented me as much. 
                        </v-list-item-content>
                      </v-list-item>
                  </v-list>
              </v-card>
   

         <h3>Final Design</h3>
          <v-row class="my-5">
          <v-col>
            <LightBox
              imgClass="rounded-lg elevation-2"
              image="portfolioclean.png"
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

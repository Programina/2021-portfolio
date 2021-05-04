<template>
   <v-container>
    <v-row class="text-center">
     
      <v-col v-if="isMobile" class="mb-5 px-8" cols="12" justify="center">
        <MobileContentTemplate :cards="cards" />
      </v-col>
      <v-col v-else class="mb-5 px-8" cols="12" justify="center">
        <DesktopContentTemplate :cards="cards" />
      </v-col>
     
    </v-row>
    
    
     
    <v-row class="d-flex justify-center align-center ma-10">
    <v-col>
       <h3>Honorable Mentions</h3>
    </v-col>

      <v-col cols="12" class="ma-5">
         <v-row>
            <v-col cols="12" class="d-flex justify-center">
              <a href="https://www.lotto-thueringen.de/eurojackpot/eurojackpot/spielschein.html ">
                <v-img height="200" width="300" alt="lotto" src="@/assets/lotto.png"/>
              </a>           
            </v-col>
            <v-col cols="12" class="py-5 d-flex justify-center">
              For about two months I worked on the corporate website for Lotto Thüringen as part of a team of frontend developers and UX designers. 
            </v-col>
            <v-col cols="12" class="d-flex justify-center">
                <v-chip class="ma-2" filter>
                      HTML
                    </v-chip>
                    <v-chip class="ma-2" filter>
                      JQuery
                    </v-chip>
                    <v-chip class="ma-2" filter>
                      SCSS
                    </v-chip>
                    <v-chip class="ma-2" filter>
                      Invision
                    </v-chip>
            </v-col>
        </v-row>
      </v-col>
      <v-col cols="12" class="ma-5">
        <v-row>
          <v-col cols="12" class="d-flex justify-center">
              <a href="https://www.gardena.com/de/">
                <v-img height="200" width="300" alt="gardena" src="@/assets/gardena.png" />
              </a>
          </v-col>
          <v-col cols="12" class="py-5 d-flex justify-center">
            For about three months I worked on the corporate website for Gardena as part of a team of frontend developers and UX designers. 
          </v-col>
          <v-col cols="12" class="d-flex justify-center">
                <v-chip class="ma-2" filter>
                      HTML
                    </v-chip>
                    <v-chip class="ma-2" filter>
                      JQuery
                    </v-chip>
                    <v-chip class="ma-2" filter>
                      SCSS
                    </v-chip>
                    <v-chip class="ma-2" filter>
                      Invision
                    </v-chip>
          </v-col>
        </v-row>
      </v-col>
            
    </v-row>
  </v-container>
</template>

<script>
import ismobile from "@/mixins/ismobile";
import MobileContentTemplate from "@/components/MobileContentTemplate";
import DesktopContentTemplate from "@/components/DesktopContentTemplate";

export default {
  name: "Dev",
  mixins: [ismobile],
  components: { MobileContentTemplate, DesktopContentTemplate },
  data() {
    return {
      cards: [
        {
          id: 1,
          title: "This Portfolio",
          href: "/portfolio",
          imgSrc: "portfolio.jpg",
          imgMblSrc: "portfolio.jpg",
          description:
            "This portfolio is still work in progress. I am documenting my changes and intentions.",

          chips: [
            {
              label: "Adobe Xd",
            },
            {
              label: "VueJS",
            },
            {
              label: "Vuetify",
            },
            {
              label: "Photoshop 2021",
            },
          ],
        },
        {
          id: 2,
          title: "DateSaver",
          href: "/date-saver",
          imgSrc: "datesaver.png",
          imgMblSrc: "datesaver.png",
          description:
            "This is an app I developed with little to no fancy visual design. However I put some thought into the user experience. Also, I am about to redesign it. The idea is simple: help people have less decisions to make about what to do on a date.",
          chips: [
            {
              label: "VueJs",
            },
            {
              label: "AdobeXd",
            },
          ],
        },
        {
          id: 3,
          title: "RSS Feed",
          href: "/rss",
          imgSrc: "rssApp.png",
          imgMblSrc: "rssApp.png",
          description: "Simple RSS Feed SPA I made for an interview.",
          chips: [
            {
              label: "Angular",
            },
          ],
        },
      ],
    };
  }
};
</script>


<style lang="css" scoped>
.frame {
  box-shadow: 0px 3px 6px #00000029;
  border: 2px solid white;
}
</style>


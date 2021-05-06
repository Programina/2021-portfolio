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

      <v-col cols="12" class="ma-5" >
         <v-row justify="center" :class="[isMobile ? 'flex-column' : undefined]">
            <v-col cols="12" class="d-flex justify-center">
              <div style="text-align: center">
               <LightBox :image="'lotto.png'" :height="mobileImage.height"  :width="mobileImage.width" alt="lotto" imgClass="mb-2" :order="6"/>
               <a href="https://www.lotto-thueringen.de/eurojackpot/eurojackpot/spielschein.html" style="text-decoration: none !important; text-transform: none !important; color: #3bcea0 !important; "> Click here for the current Website</a> 
              </div>        
            </v-col>
            <v-col cols="12" class="py-5 justify-center" >
                  <div>
                    <p :class="[isMobile ? undefined : 'mx-10  px-16']">
                      For about two months I worked on the corporate website for Lotto Thüringen as part of a team of frontend developers and UX designers. 
                    </p>
                    <div class="d-flex justify-center" style="flex-wrap: wrap;">
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
                    </div>
                  </div>
            </v-col>
        </v-row>
      </v-col>
      <v-col cols="12" class="ma-5">
        <v-row justify="center" :class="[isMobile ? 'flex-column' : undefined]">
          <v-col cols="12" class="d-flex justify-center">
          <div style="text-align: center">
              <LightBox :image="'gardena.png'" :height="mobileImage.height" :width="mobileImage.width" imgClass="mb-2" alt="gardena" :order="6"/>
              <a href="https://www.gardena.com/de/" style="text-decoration: none !important; text-transform: none !important; color: #3bcea0 !important; "> Click here for the current Website</a> 
          </div> 
          </v-col>
          <v-col cols="12" class="py-5 justify-center">
            <div>
              <p :class="[isMobile ? undefined : 'mx-10  px-16']">For about three months I worked on the corporate website for Gardena as part of a team of frontend developers and UX designers. </p>
              <div class="d-flex justify-center" style="flex-wrap: wrap;">
                <v-chip class="ma-2">
                  HTML
                </v-chip>
                <v-chip class="ma-2">
                  JQuery
                </v-chip>
                <v-chip class="ma-2">
                  SCSS
                </v-chip>
                <v-chip class="ma-2">
                  Invision
                </v-chip>
            </div>
            </div>
          </v-col>
        </v-row>
      </v-col>
            
    </v-row>
  </v-container>
</template>

<script>

import LightBox from "@/components/LightBox"
import ismobile from "@/mixins/ismobile";
import MobileContentTemplate from "@/components/MobileContentTemplate";
import DesktopContentTemplate from "@/components/DesktopContentTemplate";

export default {
  name: "Dev",
  mixins: [ismobile],
  components: { MobileContentTemplate, DesktopContentTemplate, LightBox },
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
            "An app I am in the process of making to help people make  decisions about what to do on a date.",
          chips: [
            {
              label: "VueJs",
            },
            {
              label: "AdobeXd",
            },
          ],
        }
        // ,
        // {
        //   id: 3,
        //   title: "RSS Feed",
        //   href: "/rss",
        //   imgSrc: "rssApp.png",
        //   imgMblSrc: "rssApp.png",
        //   description: "Simple RSS Feed SPA I made for an interview.",
        //   chips: [
        //     {
        //       label: "Angular",
        //     },
        //   ],
        // },
      ],
    };
  },
  computed: {
    mobileImage(){
      let mobImg = {
        height: null,
        width: null
      }

      if(this.isMobile) {
        mobImg.height = 170
        mobImg.width = 250
      } else {
        mobImg.height = 300
        mobImg.width = 400
      }
      return  mobImg
    }
  }
};
</script>


<style lang="css" scoped>
.frame {
  box-shadow: 0px 3px 6px #00000029;
  border: 2px solid white;
}
</style>


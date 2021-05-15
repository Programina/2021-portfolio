<template>
  <v-container :class="['about', [isMobile ? 'mobile-about' : undefined]]">
    <h3>
      I am passionate about making software beautiful, easy to use and fun.
    </h3>

    <p class="my-5">
      My name is Amina, I am a frontend developer and UX designer from Germany with 3 years of
      experience as a developer and half a year of experience as a designer.
    </p>

    <p>
      I am largely self-taught and will hopefully never stop learning. If you
      are after degrees, I have one of those Master's degrees and you may find
      my
      <a
        style="text-transform: inherit; color: #3bcea0 !important"
        href="./abelabbesResume.pdf"
        download="Amina_Belabbes_Resume_2021.pdf"
        filetype="pdf"
        >resume</a
      >
      interesting.
    </p>
    <blockquote class="my-5">
      “You can fail at what you don't want, so you might as well take a chance
      on doing what you love.” – Jim Carrey
    </blockquote>

    <p>
      It has been my dream of many years to pursue a creative
      career and I know I can do outstanding work being a UX designer.
    </p>
    <p>
      Learning to code hasn't always been easy, but it gave me great confidence in my ability to not only have ideas, but to make them come to life.
    </p>


    

      

    <v-row class="my-5">
          <v-col class="d-flex flex-column justify-center">
            <h3>UX Design Certificates</h3>
            <LightBox image="GoogleCertificate.png" width="500px"></LightBox>
          </v-col>
    </v-row>
    

    <v-row class="my-5">
      <v-col>
        <h3>Current projects</h3>

          <v-card class="my-5" :color="'#fff'">
            <div class="d-flex flex-no-wrap justify-space-between">
              <div>
                <v-card-title class="text-h5"
                  >Google UX Design Professional Certificate</v-card-title
                >

                <v-card-subtitle class="pt-5">
                  I attend Google's series of seven courses to get the 
                  <a
                    href="https://www.coursera.org/professional-certificates/google-ux-design?utm_source=gg&utm_medium=sem&utm_campaign=15-GoogleUXDesign-ROW&utm_content=15-GoogleUXDesign-ROW&campaignid=12566638067&adgroupid=119528847077&device=c&keyword=google%20ux%20design%20certificate&matchtype=p&network=g&devicemodel=&adpostion=&creativeid=507197228289&hide_mobile_promo&gclid=Cj0KCQjwsqmEBhDiARIsANV8H3ZFaveHjHXxApoC19Ly3i9HZPQdbKla8R2BvqkrM_vaJCNSSTvBNHMaAtjuEALw_wcB"
                    style="text-transform: inherit; color: #3bcea0 !important"
                    >Google UX Design Professional Certificate</a
                  >. 
    
                </v-card-subtitle>
              </div>

              <a
                href="https://www.coursera.org/professional-certificates/google-ux-design?utm_source=gg&utm_medium=sem&utm_campaign=15-GoogleUXDesign-ROW&utm_content=15-GoogleUXDesign-ROW&campaignid=12566638067&adgroupid=119528847077&device=c&keyword=google%20ux%20certification&matchtype=b&network=g&devicemodel=&adpostion=&creativeid=507197228289&hide_mobile_promo&gclid=Cj0KCQjwgtWDBhDZARIsADEKwgOsbdETicgHXbb_Q--9T0REBsLycMQK29MHZc2XbwS6yc175Pkl8LsaAhioEALw_wcB"
                style="text-transform: inherit; color: #3bcea0 !important"
                ><v-avatar class="ma-3"  tile>
                  <v-img
                    src="@/assets/designcertificate.jpg"
                  ></v-img> </v-avatar></a>
            </div>
          </v-card>

      

  
          <v-card class="my-5" :color="'#fff'">
            <div class="d-flex flex-no-wrap justify-space-between">
              <div>
                <v-card-title class="text-h5">Photoshop Tutorial</v-card-title>

                <v-card-subtitle class="pt-5">
                  I teach myself Photoshop with
                  <a
                    href="https://www.skillshare.com/classes/Adobe-Photoshop-CC-%E2%80%93-Essentials-Training-Course/1810443793/projects"
                    style="text-transform: inherit; color: #3bcea0 !important"
                    >Daniel Scott on Skillshare
                  </a>

                </v-card-subtitle>
              </div>

              <a
                href="https://www.skillshare.com/classes/Adobe-Photoshop-CC-%E2%80%93-Essentials-Training-Course/1810443793/projects"
                ><v-avatar class="ma-3" size="150" tile>
                  <v-img src="@/assets/photoshop.png"></v-img> </v-avatar
              ></a>
            </div>
          </v-card>
      </v-col>
    </v-row>

    <v-row>
      <v-col> </v-col>
    </v-row>
    <v-row class="mb-8 justify-center">
      <v-col>
        <h3>Skills</h3>
        <Svgs />
      </v-col>
    </v-row>

    <v-row class="my-8 justify-center">
          <v-col>
            <h3>Philosophy and Values</h3>
              <v-card class="mx-auto" elevation="0" max-width="600" tile>
                 <v-list dense>
                   <v-list-item-group color="primary">
                    <v-list-item>
                      <v-list-item-icon>
                        <v-icon v-text="'mdi-shield-sun-outline'"></v-icon>
                      </v-list-item-icon>
                      <v-list-item-content
                        ><b>The user always comes first.</b> Thou shalt not design without research and thou shalt always consider not everyone is like you.</v-list-item-content
                      >
                    </v-list-item>
                    <v-list-item>
                      <v-list-item-icon>
                        <v-icon v-text="'mdi-shield-sun-outline'"></v-icon>
                      </v-list-item-icon>
                      <v-list-item-content>
                        <b>Be humble.</b> Whether it be towards your team or by challenging your own biases and beliefs. You may not always have the answer, but someone else might.
                      </v-list-item-content>
                    </v-list-item>

                    <v-list-item>
                      <v-list-item-icon>
                        <v-icon v-text="'mdi-shield-sun-outline'"></v-icon>
                      </v-list-item-icon>
                      <v-list-item-content>
                        <b>Be ethical.</b> If you would not use or buy a product or service and if you don't understand it, don't sell it.
                      </v-list-item-content>
                    </v-list-item>

                    <v-list-item>
                      <v-list-item-icon>
                        <v-icon v-text="'mdi-shield-sun-outline'"></v-icon>
                      </v-list-item-icon>
                      <v-list-item-content>
                       <b>Be curious and never stop learning.</b> Liz Gilbert suggested to always follow your curiosity. Curiosity is great fuel for creativity.
                      </v-list-item-content>
                    </v-list-item>
                    </v-list-item-group>
                 </v-list>
            </v-card>
          
          </v-col>
    </v-row>

    <v-row class="my-8 justify-center">
      <v-col>
        <h3>Personal interests and fun facts</h3>
        <v-card class="mx-auto" elevation="0" max-width="600" tile>
          <v-list dense>
            <v-list-item-group color="primary">
              <v-list-item>
                <v-list-item-icon>
                  <v-icon v-text="'mdi-account-music'"></v-icon>
                </v-list-item-icon>
                <v-list-item-content
                  >I love karaoke and singing.</v-list-item-content
                >
              </v-list-item>
              <v-list-item>
                <v-list-item-icon>
                  <v-icon v-text="'mdi-chart-bubble'"></v-icon>
                </v-list-item-icon>
                <v-list-item-content>
                  I love popping bubble wrap.
                </v-list-item-content>
              </v-list-item>

              <v-list-item>

                <v-list-item-icon>
                  <v-icon v-text="'mdi-airplane-takeoff'"></v-icon>
                </v-list-item-icon>
                <v-list-item-content>
                  My favorite countries are Scotland and Japan. 
                </v-list-item-content>
              </v-list-item>

              <v-list-item>
                <v-list-item-icon>
                  <v-icon v-text="'mdi-school'"></v-icon>
                </v-list-item-icon>
                <v-list-item-content>
                 I even learned some Japanese, but forgot most of it.
                </v-list-item-content>
              </v-list-item>

              <v-list-item>

                <v-list-item-icon>
                  <v-icon v-text="'mdi-kettle-steam'"></v-icon>
                </v-list-item-icon>
                <v-list-item-content>
                  I love British culture like tea time and botanical gardens.
                </v-list-item-content>
              </v-list-item>

              <v-list-item>
                <v-list-item-icon>
                  <v-icon v-text="'mdi-book'"></v-icon>
                </v-list-item-icon>
                <v-list-item-content>
                  I enjoy fantasy movies and literature.</v-list-item-content
                >
              </v-list-item>

                 <v-list-item>
                <v-list-item-icon>
                  <v-icon v-text="'mdi-trophy-award'"></v-icon>
                </v-list-item-icon>
                <v-list-item-content>
                  My first web dev teacher at university liked the static website I programmed so much, he used it as demo for later courses.</v-list-item-content
                >
              </v-list-item>

              <v-list-item>

                <v-list-item-icon>
                  <v-icon v-text="'mdi-card-account-details-outline'"></v-icon>
                </v-list-item-icon>
                <v-list-item-content>
                  I printed my first business card calling myself "Web Designer"
                  when I was still at university.
                </v-list-item-content>
              </v-list-item>
              <v-list-item>
               <v-list-item-icon>
                  <v-icon v-text="'mdi-balloon'"></v-icon>
                </v-list-item-icon>
                <v-list-item-content
                  >One reason for becoming a programmer: I liked that some IT
                  companies had ball pits.
                </v-list-item-content>
              </v-list-item>
            </v-list-item-group>
          </v-list>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import scrollbehavior from "@/mixins/scrollbehavior.js"
import Svgs from "@/components/Svgs"
import LightBox from "@/components/LightBox"
import ismobile from "@/mixins/ismobile"

export default {
  name: "About",
  mixins: [scrollbehavior, ismobile],
  components: { Svgs, LightBox},
};
</script>

<style lang="scss" scoped>
.about {
  max-width: 630px;
  padding: 0 20px;

  &.mobile-about {
    padding: 0 70px;
    width: 100%;
    max-width: 100%;
    display: flex; 
    flex-direction: column;
    justify-content: center;
  }
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

::v-deep div.v-image__image--cover {
  background-position: left center !important;
  // width: 150px;
}

.v-card__title {
  word-break: break-word;
}

.v-avatar {
  height: 150px !important;
  width: 150px  !important;
  min-width: 150px  !important;
}
 @media only screen and (max-width: 570px) {
  .v-avatar {
    height: 100px  !important;
    width: 100px  !important;
    min-width: 100px  !important;
  }
}

 @media only screen and (max-width: 430px) {
  .v-avatar {
    display: none !important;
  }
}


</style>

<template>
  <v-container class="about">
    <p>
      Hi, I am Amina Belabbes and I am passionate about making the web a more
      beautiful, easy to use and fun place. I love creating designs that make an
      impact 😊 . I'm a full-time frontend developer with 2+ years of
      professional experience and about half a year of experience as a UX
      designer, looking to transition into UX design.
    </p>
    <blockquote class="my-5">
      “You can fail at what you don't want, so you might as well take a chance
      on doing what you love.” – Jim Carrey
    </blockquote>

    <p>
      I got my Master’s degree in Translation Studies, specializing in Computer
      Science. After a detour of six years, working as a translator and a PA, I
      ended up teaching myself a lot more than I learned at university to be
      able to build great software. Someone hired me and here I am - a
      developer.
    </p>

    <v-row class="my-5">
      <v-col>
        <h3>Current projects</h3>
        <v-card class="my-5" :color="'#fff'">
          <div class="d-flex flex-no-wrap justify-space-between">
            <div>
              <v-card-title class="text-h5"
                >Google UX Design Certificate</v-card-title
              >

              <v-card-subtitle class="pt-5"> 
                <ul>
                  <li>I am taking the Google UX Design Certificate</li>
                  <li>
                    Also currently teaching myself photoshop with Skillshare and
                    Youtube
                  </li>
                </ul>
              </v-card-subtitle>

              <!-- <v-card-actions>
              

                </v-card-actions> -->
            </div>

            <v-avatar class="ma-3" size="150" tile>
              <v-img src="@/assets/designcertificate.jpg"></v-img>
            </v-avatar>
          </div>
        </v-card>
      </v-col>
    </v-row>

    <v-row>
      <v-col> </v-col>
    </v-row>
    <v-row class="my-8 justify-center">
      <v-col>
        <h3>Skills</h3>

        <Svgs />
      </v-col>
    </v-row>

    <v-row class="my-8 justify-center">
      <v-col>
        <h3>Sources I learn from</h3>
        <p>
          I found that having projects I really wanted to see come to life were
          my greatest motivator to progress. However, I would have never gotten
          very far without the internet and all the free and high-quality
          opportunities to learn.
        </p>
        <blockquote>
          “An investment in knowledge pays the best interest.” – Benjamin
          Franklin
        </blockquote>
        <ul>
          <li>AJ&Smart</li>
          <li>Coursetro</li>
          <li><a href="https://www.kevinpowell.co/">Kevin Powell</a></li>
          <li>Skillshare (the quality of information varies here)</li>
          <li>Team Treehouse</li>
          <li>Traversy Media</li>
          <li>Academind</li>
          <li>OpenClassrooms</li>
          <li>Udacity</li>
          <li>Medium (the quality of information varies here)</li>
          <li>Nearly no need to mention: Stackoverflow</li>
          <li>
            <a href="https://uibreakfast.com/getting-started-ui-ux/"
              >UX Breakfast by Jane Portman, a very kind friend of a friend</a
            >
          </li>

          <li>
            About to get the Coursera
            <a
              href="https://www.coursera.org/professional-certificates/google-ux-design?utm_source=gg&utm_medium=sem&utm_campaign=15-GoogleUXDesign-ROW&utm_content=15-GoogleUXDesign-ROW&campaignid=12566638067&adgroupid=119528847077&device=c&keyword=google%20ux%20certification&matchtype=b&network=g&devicemodel=&adpostion=&creativeid=507197228289&hide_mobile_promo&gclid=Cj0KCQjwgtWDBhDZARIsADEKwgOsbdETicgHXbb_Q--9T0REBsLycMQK29MHZc2XbwS6yc175Pkl8LsaAhioEALw_wcB"
              style="text-transform: normal"
              >Google UX Design Certificate</a
            >
          </li>
        </ul>
      </v-col>
    </v-row>
  </v-container>
</template>


<script>
import Svgs from "@/components/Svgs";

export default {
  name: "About",
  components: { Svgs },
};
</script>

<style lang="scss" scoped>
.about {
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

::v-deep div.v-image__image--cover {
  background-position: left center !important;
  width: 150px;
}
</style>
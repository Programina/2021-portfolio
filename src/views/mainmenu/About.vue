<template>
  <v-container class="about">
      <h3>
      I am passionate about making software
      beautiful, easy to use and fun.
      </h3>
      
      <p class="my-5">Hi, I am Amina. I a frontend developer and UX designer from Germany with 3 years of experience as a developer and half a year experience as a designer. I am currently employed full-time, but feel free to get in touch, I am always open to hear how I can help. 😊
    </p>

    <p>  
      I am largely self-taught. Working in software, you never stop learning. However, I also have a Master's degree and a little background in IT and Design. For a more precise overview, have a look at my    <a
        style="text-transform: inherit; color: #3bcea0 !important"
        href="./abelabbesResume.pdf"
        download="Amina_Belabbes_Resume_2021.pdf"
        filetype="pdf"
        >Resume</a
      >.
    </p>
    <blockquote class="my-5">
      “You can fail at what you don't want, so you might as well take a chance
      on doing what you love.” – Jim Carrey
    </blockquote>

    
    <p>
      I printed my first business card calling myself "Web Designer" when I was still at university, could not stop talking to everyone about the importance of user experience, since I started developing. 
      I even applied to a couple of design jobs, having nothing but a prototype I created on <a href="https://marvelapp.com/prototype/60c71ad/screen/38925966" style="text-transform: inherit; color: #3bcea0 !important">Marvel</a>. Needless to say, I needed a portfolio and more structured education.
    </p>
    <p>
      It took me even longer to admit that my deepest desire was to create and to make people happy and satisfied along the way. I do not feel complete unless I also design. 
      What gave me confidence to explore that side of me, was learning that creativity was a structured process that did not depend on luck or subjectivity. 
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
                  <li>I attend Google's Coursera course to get the <a href="https://www.coursera.org/professional-certificates/google-ux-design?utm_source=gg&utm_medium=sem&utm_campaign=15-GoogleUXDesign-ROW&utm_content=15-GoogleUXDesign-ROW&campaignid=12566638067&adgroupid=119528847077&device=c&keyword=google%20ux%20design%20certificate&matchtype=p&network=g&devicemodel=&adpostion=&creativeid=507197228289&hide_mobile_promo&gclid=Cj0KCQjwsqmEBhDiARIsANV8H3ZFaveHjHXxApoC19Ly3i9HZPQdbKla8R2BvqkrM_vaJCNSSTvBNHMaAtjuEALw_wcB">Google UX Design Certificate</a></li>
                  <li>
                    Also currently teaching myself Photoshop with Skillshare and
                    Youtube
                  </li>
                </ul>
              </v-card-subtitle>

              <!-- <v-card-actions>
              

                </v-card-actions> -->
            </div>

            <a
              href="https://www.coursera.org/professional-certificates/google-ux-design?utm_source=gg&utm_medium=sem&utm_campaign=15-GoogleUXDesign-ROW&utm_content=15-GoogleUXDesign-ROW&campaignid=12566638067&adgroupid=119528847077&device=c&keyword=google%20ux%20certification&matchtype=b&network=g&devicemodel=&adpostion=&creativeid=507197228289&hide_mobile_promo&gclid=Cj0KCQjwgtWDBhDZARIsADEKwgOsbdETicgHXbb_Q--9T0REBsLycMQK29MHZc2XbwS6yc175Pkl8LsaAhioEALw_wcB"
              style="text-transform: normal"
              ><v-avatar class="ma-3" size="150" tile>
              <v-img src="@/assets/designcertificate.jpg"></v-img>
            </v-avatar></a>
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
        <h3> Sources I learn from</h3>
        <div class="my-5">
          <p>
          I found that having projects I really wanted to see come to life were
          my greatest motivator to progress. However, I would have never gotten
          very far without the internet and all the free and high-quality
          opportunities to learn.
        </p>
        <blockquote class="my-3">
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
            Coursera
          </li>
        </ul>
        </div>
        
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
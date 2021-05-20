<template>
  <v-container class="easytutor">
    <v-row>
      <stats-overview-card :stats="stats"></stats-overview-card>
    </v-row>

    <v-row>
      <v-col>
        <h3>Challenge</h3>
        <p>
          <strong
            >Modernize the website and make it easier to navigate and understand
            for users.
          </strong>
        </p>

        <p>
          Easy-tutor is an online platform for parents to help find a suitable
          online tutor for their child. A lot of noise on the webpage distracts from this message. 
        </p>


      <div class="my-12">
       <LightBox
          image="et1.png"
          height="350"
          imgClass=" rounded-lg elevation-2"
          alt="Easy tutor website"
          :order="8"
        />
     <div class="d-flex justify-center text-center"> <a href="https://www.easy-tutor.eu/" class="green-link">This is their current website</a></div>
      </div>
      
          <p>I wanted to tidy up both the color scheme
          and formal language and modernize the style.
          </p>
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <h3>Process</h3>

        <div class="enumeration"> 01</div>

        <p>
          I got inspiration from
          <a href="https://gumroad.com/l/figma-design-system-td"
            class="green-link" >Mizko's design system for figma</a
          >

         
          as well as the
          <a
            href="https://dribbble.com/shots/15323968-Online-Learning-I-Ofspace" class="green-link"
            >Ofspace design on Dribble</a
          >. I had a few hours and wanted to do a quick draft, to see what I could do in a short time. 
         
        </p>

        <div class="enumeration">02</div>

        <p>
          I have learned a lot about surveys, A/B testing, usability testing and interviews recently. 
        </p>
        <p>
          Doing research is possible at any stage of the product development process, however it is usually very important to do some up front to be able to design with the user's needs in mind. Due to time restraints, this was not possible for this short project.</p>

        <v-row>
        <v-col class="d-flex justify-center">
        <LightBox
          image="mooddesignsystemeasytutor.png"
          height="670"
          width="395"
          :isXL="true" 
          imgClass="my-12 rounded-lg elevation-2"
          alt="easy tutor current design"
          :order="7"
        />
        </v-col>
        </v-row>
 
        <p> I therefore put together my main inspiration and the primary and accent colors I found from the original page.</p>
       
       <div class="enumeration">03</div>
        <p>I picked a rounded sans-serif font, as sans serif is more easily readable on screens, while rounded evokes emotions of friendliness and playfulness, yet it should still look sleek and professional. I got inspired googling "fonts for teachers".</p>

        <div class="enumeration">04</div>
        <p>For the final design I also looked for an illustrated vector graphic tutorial image to replace the noisy loop video that is currently played on the website.</p>
        <p>Without having confirmed this hypothesis, I believe people are less likely to be offended or irritated by illustrations than by imagery of actual people and it is a lot easier to match the company style and color scheme in the illustrations. </p>



        
        <h3>Current Design</h3>

        <div class="my-12">
            <LightBox
              image="easytutorcurrent.png"
              height="450"
              imgClass=" rounded-lg elevation-2"
              alt="easy tutor current design"
              :order="7"
            />
            <div class="d-flex justify-center text-center"> <a href="https://www.figma.com/file/gCIyRBm2RvCrelhRb2tZDh/Easy-Tutor?node-id=0%3A1" class="green-link">This is my current Figma mockup</a></div>

        </div>
        

        

        <h3>Learnings</h3>

        <p>
         I have shown the design to one of the employees at Easy-Tutor. She agreed I had recognized some of their pain points as they were already in the process of redesining the page. 
        </p>
        <p>What I would have liked more was user feedback though.</p>

        <p><p>
        Hypothetically speaking, if this were a longterm project, I would do some <strong>quantiative research</strong> first, using <strong>surveys</strong>. I would try and find a large group of people of different backgrounds that fit the criteria of "needing remote help and being willing to work from a computer at home" and "wanting to tutor or needing tutoring either for themselves or their children".</p>
        <p>
         I would be asking about which products they have recently used that were similar and helpful. That gives me a good sense of what users  are looking for. I would also ask about how they feel about using the website and what kind of problems they may have come across (if any), to figure out <strong>user pain points</strong>. 
        </p>
        <p>
        It would also be interesting to know what kind of info they would be looking for in the Easy-Tutor website to make that info more easily accessible. </p>

        <p>
         Having collected data, I would create two to three <strong>user personas</strong> to see what kind of user we are dealing with. At the moment I only have a vague idea of the struggle of parents and tutors using the page. I don't know what other customers may be using the page.   
        </p>
</p>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import StatsOverviewCard from "../../components/StatsOverviewCard.vue";
import LightBox from "@/components/LightBox"
export default {
  name: "EasyTutor",
  components: { StatsOverviewCard, LightBox },
  props: {},

  data() {
    return {
      stats: {
        client: "Easy-Tutor",
        time: "Three to four hours in May 2021",
        role: "UI Designer",
        sector: "E-Learning, Education",
        status: "Finished",
        tags: [
          {
            tag: "Figma Mockup, Design System and Moodboard",
            tagIcon: "web",
            tagHref:
              "https://www.figma.com/file/gCIyRBm2RvCrelhRb2tZDh/Easy-Tutor?node-id=0%3A1",
          },
        ],
      },
    };
  },
};
</script>

<style lang="scss" scoped>
.easytutor {
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

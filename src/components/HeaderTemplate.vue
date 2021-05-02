<template>
  <div id="header-template" v-if="component">

  <div v-if="component.title != 'Default'" class="d-flex flex-column justify-center align-center rss-background"  :style="{ 'background-image': 'url(' + computedImage + ')', 'background-color': component.backgroundColor}, {'height' : heightAndTop.height}, {'margin-top' : heightAndTop.top}">
   
   <span class="text-center" style="padding: 0 50px;">
     <h1 :style="{'color': component.fontColor}">{{component.title}}</h1>
     <h3 :style="{'color': component.fontColor}">{{component.subtitle}}</h3>
  </span> 

  </div>

  
   <component v-else 
      is="DefaultHeader"
      :style="{'height' : heightAndTop.height}, {'margin-top' : heightAndTop.top}"
      :color="component.backgroundColor"
      :fontColor="component.fontColor"
      :image="component.img"
      :copy="copy"
    /> 
  </div>
</template>

<script>

import ismobile from '@/mixins/ismobile.js'
import DefaultHeader from "@/components/headers/DefaultHeader";
// import ContactHeader from "@/components/headers/ContactHeader";
// import HabitStacksHeader from "@/components/headers/HabitStacksHeader";
// import DateSaverHeader from "@/components/headers/DateSaverHeader";
// import AboutHeader from "@/components/headers/AboutHeader";
// import OtherH from "@/components/headers/OtherH";
// import ImprintHeader from "@/components/headers/ImprintHeader";
// import UxUiHeader from "@/components/headers/UxUiHeader";
// import PortfolioH from "@/components/headers/PortfolioH";
// import DevelopmentHeader from "@/components/headers/DevelopmentHeader";
// import RssH from "@/components/headers/RssH";

// ContactHeader,
//     DateSaverHeader,
//     HabitStacksHeader,
//     AboutHeader,
//     OtherH,
//     ImprintHeader,
//     UxUiHeader,
//     RssH,
//     PortfolioH,
//     DevelopmentHeader


import { mapState } from "vuex";


export default {
  name: "HeaderTemplate",
  components: {
    DefaultHeader,
    
  },
  data() {
    return {
      copy: {
        profile1: "Nice to meet you –  I'm Amina Belabbes. <br/> I am a ",
        profile1_2: "<br/> I am a ", 
        profile2: "based in Germany.",
        transitionItem: ['designer ', 'developer ']
      },
      components: [
        {
          title: "Default",
          path: "/home"
        },
        {
          title: "Default",
          path: "/",
        },
        {
          title: "I am Amina",
          subtitle: "Design is my passion and I strive to improve a little every day.",
          path: "/about",
          // img: "brushes.png"
        },
        {
          title: "Contact me",
          subtitle: "I'd love to hear from you.",
          path: "/contact",
          // img: "brushes.png"
        },
        {
          title: "Thank you!",
          subtitle: "I am glad you got in touch.",
          path: "/contact-success",
          // img: "brushes.png"
        },
        {
          title: "HabitStacks",
          subtitle: "Build habits taking baby steps without losing sight of the bigger picture.",
          path: "/habit-stacks",
          // img: "brushes.png"
        },
        {
          title: "DateSaver",
          subtitle: "",
          path: "/date-saver",
          // img: "brushes.png"
        },
        {
          title: "UX Design",
          subtitle: "Visual Design, Interaction Design, Wireframing, Prototyping, User Research",
          path: "/ux-ui",
          // img: "brushes.png"
        },
        {
          title: "Development",
          subtitle: "Have a look at my code.",
          path: "/development",
          // img: "brushes.png"
        },
        {
          title: "Imprint",
          subtitle: "",
          path: "/imprint",
          // img: "brushes.png"
        },
        {
          title: "Portfolio",
          subtitle: "",
          path: "/portfolio",
          // img: "brushes.png"
        },
        {
          title: "Other",
          subtitle: "Other things I enjoy doing.",
          path: "/other",
          // img: "brushes.png"
        },
        {
          title: "Rss Feed",
          subtitle: "",
          path: "/rss",
          // img: "brushes.png"
        },
      ],
    };
  },
  props: {
    colr: {
      type: Object,
      required: true
    }
  },
  mixins: [ismobile],
  computed: {
    ...mapState(["currentRoute"]),
    heightAndTop(){
      if(!this.isMobile){
       return {
          height: '350px',
          top: '50px'
        }
      } else {
        return {
          height: '600px',
          top: '100px'
        }
       
      }
    },
    component() {
      let comp;
      let mappedComponent;
      let colors = JSON.parse(JSON.stringify(this.colr));
      let fontColor = colors.fontColor;
      let backgroundColor = colors.color;
      if (this.currentRoute.path) {
        comp = this.components.find(
          val => val.path === this.currentRoute.path
        );
        
     mappedComponent = { ...comp, fontColor, backgroundColor }
      console.log("Mapped",  mappedComponent)
      } else {
        mappedComponent = {
          title: "Default",
          subtitle: "Hello I am Amina",
          fontColor: "#fff", 
          backgroundColor: "#69ae95",
          path: "/"
        };
      }
      return mappedComponent
    },
    computedImage(){
      if (this.component.img) {
        let img = require("@/assets/" + this.component.img + "");
        return img.substring(1);
      }
    }
  },
};
</script>


<style lang="scss" scoped>
   #header-template {
    width: 100%;
    background-repeat: no-repeat;
    background-position: left bottom; 
    background-size: 400px 300px;

      div:first-child {
       
      }
  }

 
</style>
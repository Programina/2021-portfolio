<template>
  <v-container>
    <v-row class="svg-row">
      <v-col>
        <div class="shadow-box" id="angular"></div>
      </v-col>
      <v-col>
        <div class="shadow-box" id="vue"></div>
      </v-col>
      <v-col>
        <div class="shadow-box" id="nodejs"></div>
      </v-col>
      <v-col>
        <div class="shadow-box" id="javascript"></div>
      </v-col>
    </v-row>
    <v-row class="svg-row">
      <v-col>
        <div class="shadow-box" id="adobexd"></div>
      </v-col>
      <v-col>
        <div class="shadow-box" id="figma"></div>
      </v-col>
      <v-col>
        <div class="shadow-box" id="photoshop"></div>
      </v-col>
      <v-col>
        <div class="shadow-box" id="typescript"></div>
      </v-col>
      </v-row>
      <v-row class="svg-row">
      <v-col>
        <div class="shadow-box" id="html"></div>
       </v-col>
      <v-col>
        <div class="shadow-box" id="css"></div>
      </v-col>
      <v-col>
        <div class="shadow-box" id="svelte"></div>
     </v-col>
     <v-col>
        <div class="shadow-box" id="bootstrap"></div>
     </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "Svgs",
  components: {},
  props: {},
  data() {
    return {};
  },
  mounted() {},
  beforeDestroy() {},
  methods: {},
};
</script>

<style lang="scss" scoped>

.svg-row {
    .col {
      padding: 0;
    }

    .shadow-box {
      width: 80px;
      height: 80px;
      border-radius: 50px;
      /* center content using flex box */
      display: flex;
      justify-content: center;
      align-items: center;
      /* overlay */
      box-shadow: 0 0 0 100px inset, 0 0 5px lightgrey;
      /* hover out transition */
      transition: box-shadow 1s;
      float: left;
      margin: 10px;
      color: rgba(93, 175, 141, 0.9);
      font-size: 0.85em;      
    }

     @media only screen and (max-width: 557px) {
      .shadow-box {
        width: 65px;
        height: 65px;
        font-size: 0.7em;
      }
     }

     @media only screen and (max-width: 566px) {
      .col {
        max-width: 25%;
      }
     }

    @media only screen and (max-width: 400px) {
      .col {
        max-width: 100%;
      }
    }

    .shadow-box:hover {
      box-shadow: 0 0 0 5px inset, 0 0 5px lightgrey, 0 0 10px lightgrey inset;
      transition: box-shadow 1s;
    }

    .shadow-box:hover::after {
      opacity: 0;
      transition: opacity 0.5s;
    }

    .shadow-box:after {
      width: 80%;
      height: 80%;
      display: block;
      white-space: pre;
      color: white;
      text-align: center;
      /* center content using flex box */
      display: flex;
      justify-content: center;
      align-items: center;
      /* hover out transition */
      transition: opacity 1s 0.5s;
    }
}


ul {
  list-style: none;
}

img {
  width: 100px;
  box-shadow: 0 0 0 100px inset, 0 0 5px lightgrey;
}



#angular {
  background-image: url(https://res.cloudinary.com/academind-gmbh/image/upload/f_auto,q_auto/c_limit,dpr_1.0,g_center,w_200/v1/academind.com/site/topics/angular);
  background-position: center center;
  background-size: cover;
}

#angular::after {
  content: "Angular";
}

#react {
  background-image: url(https://res.cloudinary.com/academind-gmbh/image/upload/f_auto,q_auto/c_limit,dpr_1.0,g_center,w_200/v1/academind.com/site/topics/react);
  background-position: center center;
  background-size: cover;
}

#react::after {
  content: "React";
}

#vue {
  background-image: url(https://res.cloudinary.com/academind-gmbh/image/upload/f_auto,q_auto/c_limit,dpr_auto,g_center,w_auto/v1/academind.com/site/topics/vue);
  background-position: center center;
  background-size: cover;
}

#vue::after {
  content: "Vue";
}

#javascript {
  background-image: url(https://res.cloudinary.com/academind-gmbh/image/upload/f_auto,q_auto/c_limit,dpr_auto,g_center,w_auto/v1/academind.com/site/topics/javascript);
  background-position: center center;
  background-size: cover;
}

#javascript::after {
  content: "Javascript";
}

#nodejs {
  background-image: url(https://res.cloudinary.com/academind-gmbh/image/upload/f_auto,q_auto/c_limit,dpr_1.0,g_center,w_200/v1/academind.com/site/topics/nodejs);
  background-position: center center;
  background-size: cover;
}

#nodejs::after {
  content: "NodeJs";
}

#typescript {
  background-image: url(https://res.cloudinary.com/academind-gmbh/image/upload/f_auto,q_auto/c_limit,dpr_1.0,g_center,w_200/v1/academind.com/site/topics/typescript);
  background-position: center center;
  background-size: cover;
}

#typescript::after {
  content: "Typescript";
}

#html {
  background-image: url(https://res.cloudinary.com/academind-gmbh/image/upload/f_auto,q_auto/c_limit,dpr_1.0,g_center,w_200/v1/academind.com/site/topics/html);
  background-position: center center;
  background-size: cover;
}

#html::after {
  content: "HTML5";
}

#css {
  background-image: url(https://res.cloudinary.com/academind-gmbh/image/upload/f_auto,q_auto/c_limit,dpr_1.0,g_center,w_200/v1/academind.com/site/topics/css);
  background-position: center center;
  background-size: cover;
}

#css::after {
  content: "CSS3";
}


#svelte {
  background-image: url('/assets/Svelte.png');
  background-position: center center;
  background-size: cover;
}

#svelte::after {
  content: "Svelte";
}

#bootstrap {
  background-image:  url('/assets/bootstrap.png');
  background-position: center center;
  background-size: cover;
}

#bootstrap::after {
  content: "Bootstrap";
}

#photoshop {
  background-image: url('/assets/photoshop.png');
  background-position: center center;
  background-size: cover;
}

#photoshop::after {
  content: "Photoshop";
}

#adobexd {
  background-image: url('/assets/adobexd.png');
  background-position: center center;
  background-size: cover;
}

#adobexd::after {
  content: "AdobeXd";
}

#figma {
  background-image: url('/assets/figma.png');
  background-position: center center;
  background-size: cover;
}

#figma::after {
  content: "Figma";
}
</style>

<template>
  <div data-qa="header-template" v-if="component">
    <component
      :is="component.componentName"
      :color="color"
      :fontColor="fontColor"
      :height="height"
      :image="component.img"
      :copy="component.componentName === 'DefaultHeaderDesktop' ? copy : undefined"
    />
  </div>
</template>

<script>
import DefaultHeaderDesktop from "@/components/headers/DefaultHeaderDesktop";
import ContactHeader from "@/components/headers/ContactHeader";
import HabitStacksHeader from "@/components/headers/HabitStacksHeader";
import DateSaverHeader from "@/components/headers/DateSaverHeader";
import AboutHeader from "@/components/headers/AboutHeader";
import OtherHeader from "@/components/headers/OtherHeader";
import ImprintHeader from "@/components/headers/ImprintHeader";
import UxUiHeader from "@/components/headers/UxUiHeader";
import PortfolioHeader from "@/components/headers/PortfolioHeader";
import DevelopmentHeader from "@/components/headers/DevelopmentHeader";


import { mapState } from "vuex";

export default {
  name: "DesktopHeaderTemplate",
  components: {
    DefaultHeaderDesktop,
    ContactHeader,
    DateSaverHeader,
    HabitStacksHeader,
    AboutHeader,
    OtherHeader,
    ImprintHeader,
    UxUiHeader,
    PortfolioHeader,
    DevelopmentHeader
  },
  data() {
    return {
      components: [
        {
          componentName: "DefaultHeaderDesktop",
          path: "/home"
        },
        {
          componentName: "DefaultHeaderDesktop",
          path: "/",
        },
        {
          componentName: "AboutHeader",
          path: "/about",
          img: "brushes.png"
        },
        {
          componentName: "ContactHeader",
          path: "/contact",
          img: "brushes.png"
        },
        {
          componentName: "ContactHeader",
          path: "/contact-success",
          img: "brushes.png"
        },
        {
          componentName: "HabitStacksHeader",
          path: "/habit-stacks",
          img: "brushes.png"
        },
        {
          componentName: "DateSaverHeader",
          path: "/date-saver",
          img: "brushes.png"
        },
        {
          componentName: "UxUiHeader",
          path: "/ux-ui",
          img: "brushes.png"
        },
        {
          componentName: "DevelopmentHeader",
          path: "/development",
          img: "brushes.png"
        },
        {
          componentName: "ImprintHeader",
          path: "/imprint",
          img: "brushes.png"
        },
        {
          componentName: "PortfolioHeader",
          path: "/portfolio",
          img: "brushes.png"
        },
        {
          componentName: "OtherHeader",
          path: "/other",
          img: "brushes.png"
        },
      ],
    };
  },
  mounted(){
    console.log("copy", this.copy)
  },
  props: {
    copy: {
      type: Object,
      required: true
    },
    fontColor: {
      type: String,
      required: false,
    },
    color: {
      type: String,
      required: false,
    },
    height: {
      type: String,
      required: true,
    },
  },
  computed: {
    ...mapState(["currentRoute"]),
    component() {
      let comp;
      if (this.currentRoute.path) {
        comp = this.components.find(
          (val) => val.path === this.currentRoute.path
        );
      } else {
        comp = {
          componentName: "DefaultHeaderDesktop",
          path: "/"
        };
      }

      console.log("Component name ", comp ? comp.componentName : "Kein Name");
      return comp ? comp : undefined;
    }
  },
};
</script>


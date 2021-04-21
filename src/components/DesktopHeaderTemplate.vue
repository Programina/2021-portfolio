<template>
  <div data-qa="header-template" style="box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 6px -1px, rgba(0, 0, 0, 0.06) 0px 2px 4px -1px;" v-if="component">
    <component
      :is="component"
      :color="color"
      :fontColor="fontColor"
      :height="height"
      :copy="component === 'DefaultHeaderDesktop' ? copy : undefined"
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
  },
  data() {
    return {
      components: [
        {
          componentName: "DefaultHeaderDesktop",
          path: "/home",
        },
        {
          componentName: "DefaultHeaderDesktop",
          path: "/",
        },
        {
          componentName: "AboutHeader",
          path: "/about",
        },
        {
          componentName: "ContactHeader",
          path: "/contact",
        },
        {
          componentName: "ContactHeader",
          path: "/contact-success",
        },
        {
          componentName: "HabitStacksHeader",
          path: "/habit-stacks",
        },
        {
          componentName: "DateSaverHeader",
          path: "/date-saver",
        },
        {
          componentName: "DefaultHeaderDesktop",
          path: "/ux-ui",
        },
        {
          componentName: "DefaultHeaderDesktop",
          path: "/development",
        },
        {
          componentName: "DefaultHeaderDesktop",
          path: "/imprint",
        },
        {
          componentName: "DefaultHeaderDesktop",
          path: "/portfolio",
        },
        {
          componentName: "OtherHeader",
          path: "/other",
        },
      ],
    };
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
          path: "/",
        };
      }

      console.log("Component name ", comp ? comp.componentName : "Kein Name");
      return comp ? comp.componentName : undefined;
    },
  },
};
</script>


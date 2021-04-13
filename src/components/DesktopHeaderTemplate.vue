<template>
  <div v-if="component">
    <component
      :is="component"
      :color="color"
      :fontColor="fontColor"
      :height="height"
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
          componentName: "HabitStacksHeader",
          path: "/home/habit-stacks",
        },
        {
          componentName: "DateSaverHeader",
          path: "/home/date-saver",
        },
        {
          componentName: "DefaultHeaderDesktop",
          path: "/home/ux-ui",
        },
        {
          componentName: "DefaultHeaderDesktop",
          path: "/home/development",
        },
        {
          componentName: "OtherHeader",
          path: "/other",
        },
      ],
    };
  },
  props: {
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


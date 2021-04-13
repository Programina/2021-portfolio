<template>
  <div id="nav" >
    <router-link v-for="(navItem, i) in navigation" :key="i" :to="navItem.to" class="mx-5"
      >{{ navItem.name }}
    </router-link>
  </div>
</template>

<script>
export default {
  name: "NavBarSecondLevel",
  components: {},
  props: {},
  data() {
    return {
      navigation: [
        {
          to: "/home/ux-ui",
          name: "UX & UI",
        },
        {
          to: "/development",
          name: "Development",
        },
        {
          to: "/other",
          name: "Other",
        },
      ],
    };
  }
};
</script>

<template>
  <div id="nav-second-level" class="my-3">
    <router-link v-for="(navItem, i) in navigation" :key="i" :to="navItem.to" :class="[!isMobile ? 'mx-5' : 'mx-2']">{{ navItem.name }}
    </router-link>
  </div>
</template>

<script>
import ismobile from '@/mixins/ismobile.js'
export default {
  name: "NavBarSecondLevel",
  components: {},
  
  mixins: [ismobile],
  props: {},
  data() {
    return {
      navigation: [
        {
          to: "/ux-ui",
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

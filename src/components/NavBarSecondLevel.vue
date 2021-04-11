<template>
  <v-container>
    <v-row>
      <v-column>
        <div id="nav" v-if="!isMobile">
          <router-link
            v-for="(navItem, i) in navigation"
            :key="i"
            :to="navItem.to"
            >{{ navItem.name }}
          </router-link>
        </div></v-column
      >
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "NavBarSecondLevel",
  components: {},
  props: {},
  data() {
    return { navigation: [
        {
          to: "/",
          name: "Home",
        },
        {
          to: "/contact",
          name: "Contact",
        },
        {
          to: "/about",
          name: "About",
        }
      ]};
  },
  methods: {},
};
</script>

<style lang="css" scoped></style>

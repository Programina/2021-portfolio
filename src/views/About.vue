<template>
  <v-container class="about">
      <v-row>
       <v-col class="mb-5" cols="12">
          <div class="about">
          <h1>This is an about page</h1>
        </div>
       </v-col>
      </v-row>
      <v-row>
        <v-col class="mb-3">
          <Svgs/>
        </v-col>
      </v-row>
  </v-container>
</template>


<script>
import Svgs from '@/components/Svgs'

export default {
  name: "About",
  components: {Svgs},
  props: {
  },
  methods: {},
};
</script>

<style lang="css" scoped></style>

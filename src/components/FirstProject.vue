<template>
  <v-container>
    <v-row class="text-center">
      <v-col cols="12">
        <v-img
          :src="require('../assets/female-developer-vector.jpg')"
          class="my-3"
          contain
          height="200"
        />

      </v-col>

      <v-col class="mb-4">
        <div class="heading1">
         First Project
        </div>
        <div class="heading2 mb-3">Subheading</div>
      </v-col>

      <v-col
        class="mb-5"
        cols="12"
      >

        <v-row justify="center">
          <a
            v-for="(next, i) in whatsNext"
            :key="i"
            :href="next.href"
            class="subheading mx-3"
            target="_blank"
          >
            <v-card>
              <v-card-title>TITLE CARD</v-card-title>
              <v-card-text>Text</v-card-text>
            </v-card>
          </a>
        </v-row>
      </v-col>

      <v-col
        class="mb-5"
        cols="12"
      >
       
          <v-btn
            href="#"
            target="_blank"
            text
            rounded
            color="background"
            class="button-gradient"
          > 
        <span class="mr-2">Get in touch</span>
       
      </v-btn>

      </v-col>

    </v-row>
  </v-container>
</template>

<script>
  export default {
    name: 'FirstProject',

    data: () => ({
      cards: [
        {
          text: 'Explore components',
          href: '/api-explorer',
        }
      ],
    }),
  }
</script>

<style lang="scss" scoped>

  .button-gradient {
    background: transparent linear-gradient(351deg, #0093E9 0%, #75CBCA 40%, #80D0C7 49%, #80D0C7 100%) 0% 0% no-repeat padding-box;
    box-shadow: 0px 3px 6px #00000029;
    opacity: 1;
  }
</style>
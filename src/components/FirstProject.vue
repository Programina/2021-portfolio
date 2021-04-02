<template>
  <v-container>
 
    <v-row class="text-center">

      <v-col cols="12">
        <v-img
          :src="require('../assets/female-developer-vector.jpg')"
          class="mt-5"
          contain
          height="200"
        />
      </v-col>

      <v-col >
        <div class="heading1">
        First Project
        </div>
        <div class="heading2 mb-3">Subheading</div>
      </v-col>
       
       <v-col
        class="mb-5"
        cols="12"
      >
       <router-link to="/contact">
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
       </router-link>
       

      </v-col>


      <v-col
        class="mb-5 px-8"
        cols="12"
        justify="center"
      >
          <router-link
            v-for="(card, i) in cards"
            :key="i"
            :to="card.href"
            class="subheading mx-3 "
            target="_blank"
          >
            <v-card>
              <v-img
                height="250"
                :src="require('@/assets/' + card.imgSrc + '.jpg')"
              ></v-img>
              
              <v-card-title>{{card.title}}</v-card-title>
              <v-card-text><router-link :to="card.href">See more</router-link></v-card-text>
            </v-card>
            <br/>
          </router-link>
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
          title: 'Habit App',
          href: '/habit-app',
          imgSrc: '1'
        },
        {
          title: 'Fitness App',
          href: '/fitness-app',
          imgSrc: '2'
        },
        {
          title: 'Gamification App',
          href: '/gamification-app',
          imgSrc: '3'
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
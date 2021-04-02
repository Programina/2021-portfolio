<template>
  <v-container>
 
    <v-row class="text-center">
      <v-col
        class="mb-5"
        cols="12"
      >
      <MobileHeader/>
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
  import MobileHeader from './MobileHeader';
  export default {
    name: 'FirstProject',
    components: { MobileHeader },
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


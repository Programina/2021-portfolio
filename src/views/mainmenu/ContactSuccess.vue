<template>
  <v-row :class="[isMobile ? 'd-flex flex-column justify-center align-center' : undefined]">
    <v-col cols="6" class="d-flex flex-column justify-center align-center" >
      <h1 style="width: 100%" :class="[!isMobile ?  'text-right' : 'text-center']">YAY!</h1>
      <h2 style="width: 100%"  :class="[!isMobile ?  'text-right' : 'text-center']">I love getting feedback! Thanks!</h2> 
    </v-col>
    <v-col cols="6" class="d-flex justify-start align-center mb-15" style="text-align: left;">
          <v-img
            class="ml-5 mb-15"
            :src="require('@/assets/catching-bird-during-busy-day.png')"
            max-height="550"
            max-width="450"
            contain
          ></v-img>
    </v-col>
   
  </v-row>
</template>

<script>
import ismobile from '@/mixins/ismobile.js'

export default {
  name: 'ContactSuccess',
  mixins: [ismobile]
}
</script>


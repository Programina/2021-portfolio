<template>
  <v-col class="mb-5 px-8" cols="12" justify="center">
    <v-row  v-for="(card, i) in cards" :key="i" class="align-center my-5" cols="12">
      <!--image right -->

      <v-col cols="6" v-if="card.id % 2 === 0" class="d-flex align-center mb-6">
        <div data-qa="desktop-content-template" style="width: inherit">
          <h3 class="heading2 mb-3" style="text-align: right">
            {{ card.title }}
          </h3>
          <p style="text-align: right">{{ card.description }}</p>

          <div class="d-flex mb-10 justify-end">
            <div v-for="chip in card.chips" :key="chip.label" style="display: flex; flex-wrap: wrap">
              <v-chip class="ma-2" filter>
                {{ chip.label }}
              </v-chip>
            </div>
          </div>

          <router-link :to="card.href" class="d-flex mb-10 justify-end">
            <v-btn color="primary">See Case Study </v-btn>
          </router-link>
        </div>
      </v-col>

      <!--IMAGE -->
      <v-col cols="6" v-if="card.id % 2 === 0" class="mb-6">
        <v-img
          class="ml-5"
          :alt="card.imgSrc"
          :src="require('@/assets/' + card.imgSrc + '')"
        ></v-img>
      </v-col>

      <!--image left -->
      <v-col cols="6" v-if="card.id % 2 != 0" class="mb-6">
        <!--IMAGE -->
        <v-img
          :alt="card.imgSrc"
          class="ml-5"
          :src="require('@/assets/' + card.imgSrc + '')"
        ></v-img>
      </v-col>

      <v-col cols="6" v-if="card.id % 2 != 0" class="d-flex align-center mb-6" >
        <div data-qa="desktop-content-template" style="width: inherit">
          <h3 class="heading2 mb-3" style="text-align: left">
            {{ card.title }}
          </h3>
          <p style="text-align: left">{{ card.description }}</p>
          <div class="d-flex mb-10">
            <span v-for="chip in card.chips" :key="chip.label" style="display: flex; flex-direction: row">
              <v-chip class="ma-2" filter>
                {{ chip.label }}
              </v-chip>
            </span>
          </div>
          

          <router-link :to="card.href" class="d-flex mb-10 justify-start">
            <v-btn color="primary">See Case Study </v-btn></router-link
          >
        </div>
      </v-col>
    </v-row>


    <v-row>
      <div class="my-10" style="font-size: 1.1em; text-align: left;">
        As you can imagine, having been employed full-time for most of my
        developer days. I have not yet had a massive amount of professional
        projects to put here. My companies’ products were mostly
        proprietary and not for me to share.
      </div>
      <p  style="text-align: left;">
        You will notice, the private projects I share are mostly works in
        progress, too. There are a lot of funny memes about programmers and
        their side-projects and I am afraid they are very accurate in my case.
      </p>
    </v-row>
  </v-col>
</template>

<script>
export default {
  name: "DesktopContentTemplate",
  components: {},
  props: {
    cards: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
      components: [{ name: "DateSaver" }, { name: "HabitStacks" }],
    };
  },
};
</script>

<style lang="css" scoped></style>

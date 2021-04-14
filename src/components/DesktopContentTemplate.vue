<template>
  <v-col class="mb-5 px-8" cols="12" justify="center">
    <v-row  v-for="(card, i) in cards" :key="i" class="align-center my-5" cols="12">
      <!--image right -->

      <v-col cols="6" v-if="card.id % 2 === 0" class="d-flex align-center">
        <div>
          <h3 class="heading2 mb-3" style="text-align: right">
            {{ card.title }}
          </h3>
          <p style="text-align: right">{{ card.description }}</p>
          <div class="d-flex mt-2 mb-10 justify-end">
            <div v-for="tag in card.tags" :key="tag.tag">
              <v-chip class="ma-2" color="primary" outlined>
                <span class="px-2"> {{ tag.tag }}</span>

                <v-icon left> mdi-{{ tag.tagIcon }} </v-icon>
              </v-chip>
            </div>
            <div v-for="chip in card.chips" :key="chip.label">
              <v-chip class="ma-2" filter>
                {{ chip.label }}
              </v-chip>
            </div>
          </div>

          <router-link :to="card.href">
            <v-btn color="primary">See Case Study </v-btn>
          </router-link>
        </div>
      </v-col>

      <!--IMAGE -->
      <v-col cols="6" v-if="card.id % 2 === 0">
        <v-img
          class="ml-5"
          :alt="card.imgSrc"
          :src="require('@/assets/' + card.imgSrc + '')"
        ></v-img>
      </v-col>

      <!--image left -->
      <v-col cols="6" v-if="card.id % 2 != 0">
        <!--IMAGE -->
        <v-img
          :alt="card.imgSrc"
          class="ml-5"
          :src="require('@/assets/' + card.imgSrc + '')"
        ></v-img>
      </v-col>

      <v-col cols="6" v-if="card.id % 2 != 0" class="d-flex align-center">
        <div>
          <h3 class="heading2 mb-3" style="text-align: left">
            {{ card.title }}
          </h3>
          <p style="text-align: left">{{ card.description }}</p>

          <div class="d-flex mt-2 mb-10 justify-start">
            <div v-for="tag in card.tags" :key="tag.tag" class="d-flex">
              <v-chip class="ma-2" color="primary" outlined>
                <span class="px-2"> {{ tag.tag }}</span>

                <v-icon left> mdi-{{ tag.tagIcon }} </v-icon>
              </v-chip>
            </div>
            <div v-for="chip in card.chips" :key="chip.label">
              <v-chip class="ma-2" filter>
                {{ chip.label }}
              </v-chip>
            </div>
          </div>

          <router-link :to="card.href">
            <v-btn color="primary">See Case Study </v-btn></router-link
          >
        </div>
      </v-col>
    </v-row>


    <v-row>
      <h3>
        As you can imagine, having been employed full-time for most of my
        developer days, I have not yet had a massive amount of professional
        projects to put into my portfolio. My companies’ products were mostly
        proprietary and not for me to share.
      </h3>
      <p>
        You will notice, the private projects I share are mostly works in
        progress, too. There are a lot of funny memes about programmers and
        their side-projects and I am afraid for me they are true.
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

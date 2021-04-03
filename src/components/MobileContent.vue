<template>
  <div>
    <router-link
      v-for="(card, i) in cards"
      :key="i"
      :to="card.href"
      class="subheading mx-3"
      target="_blank"
    >
      <v-card>
        <v-img
          height="250"
          :src="require('@/assets/' + card.imgSrc + '')"
        ></v-img>

        <v-card-title>{{ card.title }}</v-card-title>
        <v-card-text> {{ card.description }} <br/><span> <router-link :to="card.href">See more</router-link></span></v-card-text>
        <v-card-text>
          <div class="d-flex flex-row justify-end" :data-qa="card.title">
            <a href="" v-for="(tag, j) in card.tags" :key="j">
              <v-chip class="ma-2" color="primary" outlined>
                <span class="px-2"> {{ tag.tag }}</span>

                <v-icon left> mdi-{{ tag.tagIcon }} </v-icon>
              </v-chip>
            </a>

           
          </div>
        </v-card-text>
      </v-card>
      <br />
    </router-link>
  </div>
</template>

<script>
export default {
  name: "MobileContent",
  components: {},
  props: {
    cards: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {};
  },
  mounted() {},
  beforeDestroy() {},
  methods: {},
};
</script>

<style lang="css" scoped></style>

<template>
  <div><div
      v-for="(card, i) in cards"
      :key="i"
      class="mx-3"
      target="_blank"
    >
      <v-card>
        <v-img
          height="250"
          :src="require('@/assets/' + card.imgMblSrc + '')"
        ></v-img>

        <v-card-title>{{ card.title }}</v-card-title>
        <v-card-text> {{ card.description }} <br/><span v-if="card.href">  
              <v-card-text>
          <div class="d-flex flex-row flex-wrap justify-end" :data-qa="card.title">
            <div v-for="(tag, j) in card.tags" :key="j">
              <v-chip class="ma-2" color="primary" outlined>
                  <a :href="tag.tagHref" class="px-2" style="text-decoration: none !important; text-transform: none !important; color: inherit !important;"> {{ tag.tag }}</a>

                <v-icon left> mdi-{{ tag.tagIcon }} </v-icon>
              </v-chip>
            </div>
          </div>
        </v-card-text>
           <router-link :to="card.href"> <v-btn color="primary" class="ma-6">See Case Study </v-btn></router-link
          ></span></v-card-text>
  
      </v-card>
      <br />
    </div></div>
</template>

<script>
export default {
  name: 'MobileContentTemplate',
  components: {},
  props: {
     cards: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {}
  },
  mounted() {},
  beforeDestroy() {},
  methods: {}
}
</script>

<style lang="css" scoped></style>

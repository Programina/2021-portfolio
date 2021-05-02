<template>
  <v-card  elevation="1" class="mx-auto mb-8" max-width="374" outlined>
    <v-list-item three-line>
      <v-list-item-content>
        <div class="mb-4">
          <v-list-item-title class="overline mb-1">Client</v-list-item-title>
          <v-list-item-subtitle>{{ stats.client }}</v-list-item-subtitle>
        </div>
        <div class="mb-4">
          <v-list-item-title class="overline mb-1">Time</v-list-item-title>
          <v-list-item-subtitle>{{ stats.time }}</v-list-item-subtitle>
        </div>

        <div class="mb-4">
          <v-list-item-title class="overline mb-1">My role</v-list-item-title>
          <v-list-item-subtitle>{{ stats.role }}</v-list-item-subtitle>
        </div>
        <div class="mb-4">
          <v-list-item-title class="overline mb-1">Sector</v-list-item-title>
          <v-list-item-subtitle>{{ stats.sector }}</v-list-item-subtitle>
        </div>
        <div class="mb-4" v-if="stats.status">
          <v-list-item-title class="overline mb-1">Status</v-list-item-title>
          <v-list-item-subtitle>{{ stats.status }}</v-list-item-subtitle>
        </div>
      </v-list-item-content>

    </v-list-item>
          <v-card-actions>
        <div
          class="d-flex mt-2 justify-start"
          style="display: flex; flex-wrap: wrap"
        >
          <div v-for="tag in stats.tags" :key="tag.tag">
            <v-chip class="ma-2" color="primary" outlined>
              <a
                :href="tag.tagHref"
                class="px-2"
                style="
                  text-decoration: none !important;
                  text-transform: none !important;
                  color: inherit !important;
                "
              >
                {{ tag.tag }}</a
              >

              <v-icon left> mdi-{{ tag.tagIcon }} </v-icon>
            </v-chip>
          </div>
        </div>
      </v-card-actions>
  </v-card>
</template>

<script>
export default {
  name: "StatsOverviewCard",
  components: {},
  props: {
    stats: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {};
  },
};
</script>

<style lang="css" scoped></style>

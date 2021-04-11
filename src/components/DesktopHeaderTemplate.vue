<template>
  <v-container>
    <v-row>
      <v-col>
        <slot></slot>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: 'DesktopHeaderTemplate',
  components: {},
  props: {},
  data() {
    return {
    }
  },
}
</script>

<style lang="css" scoped></style>

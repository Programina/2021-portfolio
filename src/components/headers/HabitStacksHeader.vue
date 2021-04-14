<template>
  <div class="d-flex justify-center align-center habit-background" :style="{ 'background-color': color, 'color': fontColor, 'height': height + 'px'}">
    <div class="d-flex flex-column" style="text-align: center" >
      <h1>HabitStacks</h1>
      <h2>Build habits taking baby steps without losing sight of the bigger picture.</h2>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HabitStacksHeader',
  components: {},
  props: {
    color: {
      type: String,
      required: false
    },   
    fontColor: {
      type: String,
      required: false
    },
    height: {
      type: String,
      required: true
    }
  },
  data() {
    return {}
  },
  mounted() {},
  beforeDestroy() {},
  methods: {}
}
</script>

<style lang="scss" scoped>
  .habit-background {
    width: 100%;
  }
</style>

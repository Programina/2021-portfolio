<template>
  <div class="d-flex justify-center align-center other-background" :style="{ 'background-color': color, 'height': height + 'px'}">
    <h1 :style="{'color': fontColor}">Other things I do</h1>
  </div>
</template>

<script>
export default {
  name: 'OtherHeader',
  components: {},
  props: {
    color: {
      type: String,
      required: true
    },   
    fontColor: {
      type: String,
      required: true
    },
    height: {
      type: String,
      required: true
    }},
  data() {
    return {}
  },
  mounted() {},
  beforeDestroy() {},
  methods: {}
}
</script>

<style lang="scss" scoped>
  .other-background {
    width: 100%;
  }
</style>


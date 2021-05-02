<template>
  <div
    class="d-flex justify-center align-center date-background"
    :style="{ 'background-color': color, height: height + 'px' }"
  >
    <div class="d-flex flex-column justify-center" style="text-align: center">
      <h1>HabitStacks</h1>

      <h3>Making date night more fun</h3>
    </div>
  </div>
</template>

<script>
export default {
  name: "DateSaverHeader",
  components: {},
  props: {
    color: {
      type: String,
      required: false,
    },
    fontColor: {
      type: String,
      required: false,
    },
    height: {
      type: String,
      required: true,
    },
  },
  data() {
    return {};
  },
};
</script>

<style lang="scss" scoped>
.date-background {
  background-color: #de8579;
  width: 100%;
  height: 300px;
}
</style>

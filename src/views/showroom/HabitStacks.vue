<template>
  <div>
    <v-container class="habits">
      <p>
        HabitStacks is the working name for an app I am in the process of
        realizing and have started with a design. I had a weekend and was super
        eager to use a design I felt was really pretty and cutting-edge.
      </p>

      <p>
        I am subscribed to hundreds of UX design channels on my private and my
        public instagram, so there was no lack of inspiration. At the time, I
        was tired of the mostly cute, soft, hip color schemes I had seen on
        other habit apps. I wanted the focus to be on the functionality rather
        on the design, but without the finish looking cheap, pale and boring.
      </p>

      <p>
        For future iterations of this app, I would also like to find an
        intuitive and appealing way to make people aware of already existing
        habits and for them to be able to cluster them together with new habits.
        I would add advice to keep it to the lowest possible unit and build up
        on that periodically, using automation.
      </p>
      <h3>Learnings:</h3>
      <p>
        -After checking out other habit apps and designs on Dribbble & Co.,
        After a few days the design felt Without user acceptance tests
      </p>
    </v-container>
  </div>
</template>

<script>
export default {
  name: "HabitStacks",
  components: {},
  props: {},
  data() {
    return {};
  },
};
</script>

<style lang="scss" scoped>
.habits {
  max-width: 630px;
  padding: 0 20px;
}

ul {
  li {
    a,
    a:visited,
    a:hover,
    a:active,
    a:focus {
      text-transform: inherit;
    }
  }
}
</style>

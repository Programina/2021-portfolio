<template>
  <div id="home">
    <UxUi />
  </div>
</template>

<script>
// @ is an alias to /src
import UxUi from '@/views/UxUi.vue'
import Dev from '@/views/Dev.vue'
import Other from '@/views/Other.vue'

export default {
  name: 'Home',
  components: {
    UxUi, Dev, Other
  }
}
</script>

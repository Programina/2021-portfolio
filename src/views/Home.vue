<template>
  <div class="home">
    <FirstProject />
  </div>
</template>

<script>
// @ is an alias to /src
import FirstProject from '@/components/FirstProject.vue'

export default {
  name: 'Home',
  components: {
    FirstProject
  }
}
</script>

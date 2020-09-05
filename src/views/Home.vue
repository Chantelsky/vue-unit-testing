<template>
  <div>
    <AppHeader />
    <RandomNumber />
  </div>
</template>

<script>
// @ is an alias to /src
import AppHeader from '@/components/AppHeader.vue'
import RandomNumber from '@/components/RandomNumber.vue'

export default {
  components: {
    AppHeader,
    RandomNumber
  }
}
</script>

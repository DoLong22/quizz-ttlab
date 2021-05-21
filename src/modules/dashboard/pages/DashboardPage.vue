<template>
  <div>
    Dashboard Page
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'
export default defineComponent({
  layout ({ $layout }) {
    return $layout.MAIN
  },
  auth: 'guest',
  setup () {
    return {}
  }
})
</script>

<style>

</style>

<template>
  <div>
    UserPage
  </div>
</template>

<script lang="ts">
import { defineComponent, useContext } from '@nuxtjs/composition-api'
import { userService } from '../services/api.service'

export default defineComponent({
  layout ({ $layout }) {
    return $layout.MAIN
  },
  setup () {
    const { $axios } = useContext()
    // use client before use service on setup function
    userService.useClient($axios)
    console.log(userService)

    return {}
  }
})
</script>

<style>

</style>

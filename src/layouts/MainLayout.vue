<template>
  <div>
    <body>
      <LayoutsSwitchColor />
      <div class="wrapper">
        <Nuxt />
      </div>
    </body>
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'
import { MAIN_LAYOUT_NAME } from '@/modules/common/constants'

export default defineComponent({
  name: MAIN_LAYOUT_NAME,
  setup () {
    return { }
  }
})
</script>

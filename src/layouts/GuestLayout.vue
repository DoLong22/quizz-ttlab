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
import { GUEST_LAYOUT_NAME } from '@/modules/common/constants'

export default defineComponent({
  name: GUEST_LAYOUT_NAME,
  auth: false,
  head: {
    bodyAttrs: {
      class: 'main_body'
    }
  }
})
</script>

<style lang="scss" scoped>
.account-logo img {
  width: 300px;
}
.account-page {
  font-family: 'CircularStd', sans-serif;
  font-size: 0.9375rem;
  color: #1f1f1f;
  background-color: #f7f7f7;
  min-height: 100%;
  overflow-x: hidden;
}
</style>

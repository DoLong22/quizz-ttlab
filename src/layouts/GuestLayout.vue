<template>
  <div>
    <body
      class="account-page"
    >
      <!-- Main Wrapper -->
      <div class="main-wrapper">
        <div class="account-content" style="padding: 35px 0">
          <div class="container">
            <!-- Account Logo -->
            <div class="account-logo">
              <router-link
                to="/"
              >
                <img src="@/assets/logo.png" alt="Tokyo Tech Lab">
              </router-link>
            </div>
            <!-- /Account Logo -->
            <div class="account-box">
              <Nuxt />
            </div>
          </div>
        </div>
      </div>
      <!-- /Main Wrapper -->
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

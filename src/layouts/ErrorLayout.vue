<template>
  <div>
    <div v-if="code == 404" class="error404 error-page" style="height: 100vh">
      <!-- Main Wrapper -->
      <div class="main-wrapper">
        <div class="error-box">
          <h1>404</h1>
          <h3><i class="fa fa-warning" /> Oops! Page not found!</h3>
          <p>The page you requested was not found.</p>
          <router-link to="/" class="btn btn-custom">
            Back to Home
          </router-link>
        </div>
      </div>
      <!-- /Main Wrapper -->
    </div>
    <div v-else class="error500 error-page" style="height: 100vh">
      <!-- Main Wrapper -->
      <div class="main-wrapper">
        <div class="error-box">
          <h1>500</h1>
          <h3><i class="fa fa-warning" /> Oops! Something went wrong</h3>
          <p>The page you requested was not found.</p>
          <router-link to="/" class="btn btn-custom">
            Back to Home
          </router-link>
        </div>
      </div>
      <!-- /Main Wrapper -->
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'
import { ERROR_LAYOUT_NAME } from '@/modules/common/constants'

export default defineComponent({
  name: ERROR_LAYOUT_NAME,
  auth: false,
  data () {
    return {
      code: 404
    }
  },
  head: {
    bodyAttrs: {
      class: 'main_body'
    }
  }
})
</script>

<style></style>

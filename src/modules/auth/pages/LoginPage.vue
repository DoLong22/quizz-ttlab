<template>
  <div class="account-wrapper">
    <h3 class="account-title">
      Login
    </h3>
    <!-- Account Form -->
    <LoginForm />
    <!-- /Account Form -->
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'
import LoginForm from '../components/LoginForm.vue'

export default defineComponent({
  name: 'LoginPage',
  components: {
    LoginForm
  },
  layout ({ $layout }) {
    return $layout.GUEST
  }
})
</script>

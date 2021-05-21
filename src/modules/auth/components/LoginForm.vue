<template>
  <ValidationObserver>
    <el-form>
      <BaseInputWithValidation
        v-model="form.email"
        type="text"
        label="Email"
        name="email"
        rules="required|email"
      />
      <BaseInputWithValidation
        v-model="form.password"
        type="password"
        label="Password"
        name="password"
      />
      <el-form-item class="text-center" >
        <el-button type="primary" @click="login">
          Login
        </el-button>
      </el-form-item>
    </el-form>
  </ValidationObserver>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'
import { ILoginForm } from '../types'
import { loginForm } from '../forms'
export default defineComponent({
  setup () {
    const form = loginForm({
      email: 'admin@admin.com',
      password: 'Admin@123',
      remember: true
    } as ILoginForm)

    return { ...form }
  }
})
</script>

<style scoped>

</style>

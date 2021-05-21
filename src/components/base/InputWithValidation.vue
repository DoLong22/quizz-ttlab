<template>
  <ValidationProvider v-slot="{ errors }" :rules="rules" :name="name">
    <el-form-item :label="label" :prop="name" :error="errors[0]">
      <el-input v-model="inputValue" :placeholder="placeholder" :type="type" />
    </el-form-item>
  </ValidationProvider>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'
import { useVModel } from '~/utils/useVModel'

export default defineComponent({
  props: {
    value: {
      type: null,
      default: ''
    },
    type: {
      type: String,
      default: ''
    },
    label: {
      type: String,
      default: ''
    },
    name: {
      type: String,
      default: ''
    },
    error: {
      type: String,
      default: ''
    },
    rules: {
      type: String,
      default: ''
    },
    placeholder: {
      type: String,
      default: ''
    }
  },

  setup (props) {
    const inputValue = useVModel(props, 'value')

    return {
      inputValue
    }
  }
})
</script>

<style scoped>
</style>

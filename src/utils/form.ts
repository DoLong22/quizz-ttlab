import { ref } from '@nuxtjs/composition-api'

export interface IFormOption<F> {
  initValue: F,
  rules?: Record<string, Record<string, string|number|boolean>[]>
}

export const useForm = (options: IFormOption<Object>) => {
  const form = ref(options.initValue)
  const isBusy = ref(false)
  const response = ref({})
  const errors = ref({})
  const rules = ref(options.rules || {})

  return { form, errors, isBusy, response, rules }
}

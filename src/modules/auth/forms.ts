import { useContext } from '@nuxtjs/composition-api'
import { HTTPResponse } from '@nuxtjs/auth-next'
import { ILoginResponse, ILoginForm } from './types'
import { useForm } from '~/utils/form'

export const loginForm = (data: ILoginForm) => {
  const { form, isBusy, response, errors, rules } = useForm({
    initValue: data
  })
  const { $auth } = useContext()
  const login = async () => {
    try {
      isBusy.value = true
      const res = await $auth.loginWith('local', { data: form.value })
      response.value = (res as HTTPResponse).data as ILoginResponse
    } catch (error) {
      errors.value = error
    }
    isBusy.value = false
  }

  return { form, isBusy, response, errors, rules, login }
}

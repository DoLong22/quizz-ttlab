import { Plugin } from '@nuxt/types'
import { initializeAxios } from '~/utils/api'

const accessor: Plugin = (context) => {
  context.$axios.onRequest((_) => {
    let token = ''
    if (context.$auth) {
      token = (context.$auth.strategy as any)?.token?.get()
    }
    context.$axios.setToken(token)
  })
  initializeAxios(context.$axios)
}

export default accessor

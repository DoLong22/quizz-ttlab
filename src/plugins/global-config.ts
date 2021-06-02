import { Plugin } from '@nuxt/types'

export enum Layout {
  MAIN = 'MainLayout',
  GUEST = 'GuestLayout',
  ERROR = 'ErrorLayout',
  ADMIN = 'AdminMainLayout'
}

declare module 'vue/types/vue' {
  // this.$layout inside Vue components
  interface Vue {
    $layout: typeof Layout
  }
}

declare module '@nuxt/types' {
  // nuxtContext.app.$layout inside asyncData, fetch, plugins, middleware, nuxtServerInit
  interface NuxtAppOptions {
    $layout: typeof Layout
  }
  // nuxtContext.$layout
  interface Context {
    $layout: typeof Layout
  }
}

declare module 'vuex/types/index' {
  // this.$layout inside Vuex stores
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  interface Store <S> {
    $layout: typeof Layout
  }
}

const myPlugin: Plugin = (_, inject) => {
  inject('layout', Layout)
}

export default myPlugin

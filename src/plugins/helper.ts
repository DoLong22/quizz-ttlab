import { Plugin, Context } from '@nuxt/types'

declare module 'vue/types/vue' {
  // this.$helper inside Vue components
  interface Vue {
    $helper: Helper
  }
}

declare module '@nuxt/types' {
  // nuxtContext.app.$helper inside asyncData, fetch, plugins, middleware, nuxtServerInit
  interface NuxtAppOptions {
    $helper: Helper
  }
  // nuxtContext.$helper
  interface Context {
    $helper: Helper
  }
}

declare module 'vuex/types/index' {
  // this.$helper inside Vuex stores
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  interface Store <S> {
    $helper: Helper
  }
}

class Helper {
  context: Context

  constructor (context: Context) {
    this.context = context
  }
}

const myPlugin: Plugin = (context, inject) => {
  inject('helper', new Helper(context))
}

export default myPlugin

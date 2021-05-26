import { getRoutes } from './src/utils/app'
require('dotenv').config()

export default {
  srcDir: 'src/',
  server: {
    port: 8080 // default: 3000
  },
  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
  ssr: false,

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'TTLab Management System',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    'bootstrap/dist/css/bootstrap.css',
    'font-awesome/css/font-awesome.css',
    '@/assets/styles/css/line-awesome.min.css',
    '@/assets/styles/css/style.css',
    '@/assets/styles/css/switch.css',
    '@/assets/styles/scss/index.scss'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    '@/plugins/axios-accessor',
    '@/plugins/vee-validate',
    '@/plugins/element-ui',
    '@/plugins/helper',
    '@/plugins/global-config',
    '@/plugins/custom-scroll'
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    '@nuxt/typescript-build',
    // https://composition-api.nuxtjs.org
    '@nuxtjs/composition-api/module',
    // https://github.com/nuxt-community/dotenv-module
    '@nuxtjs/dotenv'
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa',
    // https://auth.nuxtjs.org/
    '@nuxtjs/auth-next'
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    baseURL: process.env.BASE_URL,
    headers: {
      common: {
        Accept: 'application/json, text/plain, */*'
      }
    }
  },

  // PWA module configuration: https://go.nuxtjs.dev/pwa
  pwa: {
    manifest: {
      lang: 'en'
    }
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  },

  // Configuration Router https://go.nuxtjs.dev/configuration-router
  router: {
    linkActiveClass: 'active',
    // middleware: ['auth'],
    extendRoutes (routes) {
      getRoutes().then((results) => {
        routes.push(...results)
      })
      const index = routes.findIndex(route => !route.path)
      if (index > -1) {
        routes[index] = {
          path: '/',
          redirect: '/dashboard'
        }
      }
    }
  },

  auth: {
    vuex: false,
    redirect: {
      login: '/login',
      logout: '/login',
      home: '/dashboard'
    },
    strategies: {
      local: {
        // scheme: 'refresh',
        token: {
          property: 'data.accessToken',
          maxAge: 1800
          // required: true,
          // type: 'Bearer'
        },
        // refreshToken: {
        //   property: 'refresh_token',
        //   data: 'refresh_token',
        //   maxAge: 60 * 60 * 24 * 30
        // },
        user: {
          property: 'data'
          // autoFetch: true
        },
        endpoints: {
          login: { url: '/auth/login', method: 'post' },
          logout: { url: '/auth/logout', method: 'get' },
          user: { url: '/auth/profile', method: 'get' }
        }
      }
    }
  }
}

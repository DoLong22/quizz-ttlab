import Vue from 'vue'
import { extend, ValidationObserver, ValidationProvider } from 'vee-validate'
import * as rules from 'vee-validate/dist/rules'

Object.entries(rules).forEach(([rule, validation]) => {
  extend(rule, {
    ...validation
  })
})

Vue.component('ValidationObserver', ValidationObserver)
Vue.component('ValidationProvider', ValidationProvider)

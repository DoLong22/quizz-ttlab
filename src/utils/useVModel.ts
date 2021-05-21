import { computed, getCurrentInstance } from '@nuxtjs/composition-api'

export const useVModel = (props: any, propName: any) => {
  const vm = getCurrentInstance()?.proxy
  if (propName === 'value') {
    return computed({
      get () {
        return props[propName]
      },
      set (value) {
        vm?.$emit('input', value)
      }
    })
  }
  return computed({
    get () {
      return props[propName]
    },
    set (value) {
      vm?.$emit(`update:${propName}`, value)
    }
  })
}

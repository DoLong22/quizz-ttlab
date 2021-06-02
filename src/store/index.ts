import { Store } from 'vuex'
import user from '@/modules/user/store'
import vocabulary from '@/modules/vocabulary/store'
import { initialiseStores } from '~/utils/storeAccessor'

const initializer = (store: Store<any>) => initialiseStores(store)

export const plugins = [initializer]
export const modules = {
  user, vocabulary
}
export * from '~/utils/storeAccessor'

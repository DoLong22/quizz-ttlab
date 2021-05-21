/* eslint-disable import/no-mutable-exports */
import { Store } from 'vuex'
import { getModule } from 'vuex-module-decorators'
import AppModule from '~/store/app'
import UserModule from '~/modules/user/store'

let user: UserModule
let app: AppModule

function initialiseStores (store: Store<any>): void {
  user = getModule(UserModule, store)
  app = getModule(AppModule, store)
}

export { initialiseStores, user, app }

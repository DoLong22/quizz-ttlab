/* eslint-disable import/no-mutable-exports */
import { Store } from 'vuex'
import { getModule } from 'vuex-module-decorators'
import AppModule from '~/store/app'
import UserModule from '~/modules/user/store'
import VocabularyModule from '~/modules/vocabulary/store'

let user: UserModule
let app: AppModule
let vocabulary: VocabularyModule

function initialiseStores (store: Store<any>): void {
  user = getModule(UserModule, store)
  app = getModule(AppModule, store)
  vocabulary = getModule(VocabularyModule, store)
}

export { initialiseStores, user, app, vocabulary }

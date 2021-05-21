import { Action, Module, Mutation, VuexModule } from 'vuex-module-decorators'

interface AppState {
  isMiniSidebar: boolean
  isExpandMenu:boolean
}
@Module({
  name: 'app',
  stateFactory: true,
  namespaced: true
})
class AppModule extends VuexModule implements AppState {
  isMiniSidebar = false
  isExpandMenu = false

  // ACTIONS
  @Action
  toggleSidebar () {
    this.SET_MINI_SIDEBAR(!this.isMiniSidebar)
  }

  @Action
  toggleExpandMenu () {
    this.SET_EXPAND_MENU(!this.isExpandMenu)
  }
  // GETTERS

  // MUTATION
  @Mutation
  SET_MINI_SIDEBAR (value: boolean) {
    this.isMiniSidebar = value
  }

  @Mutation
  SET_EXPAND_MENU (value: boolean) {
    this.isExpandMenu = value
  }
}

export default AppModule

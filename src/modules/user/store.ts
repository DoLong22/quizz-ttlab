import { Module, VuexModule, Action, Mutation } from 'vuex-module-decorators'
import { IUser, IGetListUserResponse } from './types'
import { userService } from './services/api.service'

@Module({
  name: 'user',
  stateFactory: true,
  namespaced: true
})
class UserModule extends VuexModule {
  users: IUser[] = []
  totalUsers = 0

  // ACTIONS
  @Action
  async getUsers () {
    const response = await userService.getList('/users') as IGetListUserResponse
    if (response.success) {
      const users: IUser[] = response?.data?.items || []
      this.setUsers(users)
      this.setTotalUsers(users.length)
    } else {
      // TODO:
    }
  }

  // GETTERS

  // MUTATION
  @Mutation
  setUsers (users: IUser[]) {
    this.users = users
  }

  @Mutation
  setTotalUsers (totalUsers: number) {
    this.totalUsers = totalUsers
  }
}

export default UserModule

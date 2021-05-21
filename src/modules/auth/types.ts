import { IBodyResponse } from '@/modules/common/types'
import { IUser } from '@/modules/user/types'

export interface ILoginResponse extends IBodyResponse {
  data: {
    accessToken: string,
    user: IUser
  }
}
export interface ILoginForm {
  email: string,
  password: string,
  remember?: boolean
}

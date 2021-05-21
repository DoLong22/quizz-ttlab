import { IGetListResponse } from '@/modules/common/types'
import { UserRoles, UserStatus } from './constants'

export interface IUser {
  avatar: string | null
  createdAt: string
  dateOfBirth: string | null
  deletedAt: string | null
  email: string
  gender: number | null
  id: number
  lastLoginedAt: number
  name: string
  phoneNumber: string | null
  role: UserRoles
  status: UserStatus
  updatedAt: string
  username: string
}

export interface IGetListUserResponse extends IGetListResponse {
  data: {
    items: IUser[]
    totalItems: number
  };
}

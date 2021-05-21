import { BaseService } from '@/utils/api'

class UserApiService extends BaseService {

}

export const userService = new UserApiService({ baseUrl: '/' })

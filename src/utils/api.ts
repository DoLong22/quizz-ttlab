import { NuxtAxiosInstance } from '@nuxtjs/axios'
import { IGetListParams, IService, IServiceOption, IGetListResponse, IBodyResponse } from '~/modules/common/types'

// eslint-disable-next-line import/no-mutable-exports
let $axios: NuxtAxiosInstance

export function initializeAxios (axiosInstance: NuxtAxiosInstance) {
  $axios = axiosInstance
}

export { $axios }
export class BaseService implements IService {
  client: NuxtAxiosInstance
  baseUrl: string

  constructor (params: IServiceOption) {
    this.client = $axios
    this.baseUrl = params.baseUrl
  }

  get detailUrl () {
    return this.baseUrl
  }

  get createUrl () {
    return this.baseUrl
  }

  get updateUrl () {
    return this.baseUrl
  }

  get deleteUrl () {
    return this.baseUrl
  }

  useClient (axios: NuxtAxiosInstance) {
    this.client = axios
  }

  beforeCreate<P> (params: P) {
    return params
  }

  beforeUpdate<P> (params: P) {
    return params
  }

  beforeSave<P> (params: P) {
    return params
  }

  getList<P, R extends IGetListResponse> (params?: P | IGetListParams) {
    return this.client.$get<R>(this.baseUrl, { params })
  }

  getDetail< R extends IBodyResponse> (id: number) {
    return this.client.$get<R>(this.detailUrl + '/' + id)
  }

  create<P, R extends IBodyResponse> (params: P) {
    params = this.beforeSave<P>(params)
    params = this.beforeCreate<P>(params)
    return this.client.$post<R>(this.createUrl, params)
  }

  update<P, R extends IBodyResponse> (params: P) {
    params = this.beforeSave<P>(params)
    params = this.beforeUpdate<P>(params)
    return this.client.$put<R>(this.updateUrl, params)
  }

  delete<R extends IBodyResponse> (id: number) {
    return this.client.$delete<R>(this.deleteUrl + '/' + id)
  }
}

import { NuxtAxiosInstance } from '@nuxtjs/axios'
import { AxiosResponse } from 'axios'

// Interfaces for general response of all apis
export interface IBodyResponse extends AxiosResponse {
  success: boolean;
  isRequestError?: boolean;
  code: number;
  message: string;
  data: {};
  errors?: { key: string; errorCode: number }[];
}

export interface IGetListResponse extends IBodyResponse {
  data: {
    items: Object[]
    totalItems: number
  };
}

export interface IGetListParams {
  limit?: number,
  page?: number
}

export interface IServiceOption {
  baseUrl: string
}

export interface IService {
  client: NuxtAxiosInstance
  baseUrl: string
}

// Interfaces for sidebar
export interface ISubMenu {
  icon?: string,
  name: string,
  class?: string,
  to?: string,
  badge?: number | string,
  active: boolean,
  subdrop?: boolean,
  hasNotify?: boolean,
  childs?: ISubMenu[]
}

export interface IMenuGroup {
  title?: string,
  class?: string,
  submenu: ISubMenu[]
}

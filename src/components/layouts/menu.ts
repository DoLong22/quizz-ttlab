import { IMenuGroup, ISubMenu } from '@/modules/common/types'
// start dashboardGroup
const dashboard: IMenuGroup = {
  title: 'Dashboard',
  class: '',
  submenu: [
    {
      icon: 'dashboard',
      name: 'Dashboard',
      class: '',
      active: true,
      subdrop: false,
      to: '/dashboard'
    }
  ]
}
// end dashboardGroup

// start user group
const userMenu: ISubMenu = {
  icon: 'user',
  name: 'User Profile',
  class: '',
  active: false,
  subdrop: false,
  hasNotify: false,
  childs: [
    {
      name: 'User Management',
      to: '/employees',
      class: '',
      active: false
    },
    {
      name: 'Contract',
      to: '/contract',
      class: '',
      active: false
    }
  ]
}
const timeKeepingMenu: ISubMenu = {
  icon: 'clock-o',
  name: 'Time Keeping',
  class: '',
  active: false,
  subdrop: false,
  hasNotify: false,
  to: '/time-keeping'
}

const userGroup: IMenuGroup = {
  title: 'User',
  class: '',
  submenu: [
    userMenu,
    timeKeepingMenu
  ]
}
// end employeeGroup
export const menus = [dashboard, userGroup]

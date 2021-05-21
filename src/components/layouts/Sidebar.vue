<template>
  <div>
    <!-- <sidebar> -->
    <div
      id="sidebar"
      class="sidebar"
      @mouseenter="expandMenu"
      @mouseleave="expandMenu"
    >
      <div id="style-15" class="sidebar-inner">
        <vue-custom-scrollbar class="scroll-area" :settings="settings">
          <div id="sidebar-menu" class="sidebar-menu">
            <ul>
              <template v-for="(menu, index) in menus">
                <li v-if="menu.title" :key="index" class="menu-title" :class="menu.class">
                  <span>{{ menu.title }}</span>
                </li>
                <template v-for="(submenu, submenuIndex) in menu.submenu">
                  <li :key="`${index}-${submenuIndex}`" class="submenu">
                    <router-link v-if="submenu.to" :to="submenu.to">
                      <i class="la" :class="{['la-' + submenu.icon]: true}" />
                      <span>{{ submenu.name }}</span>
                      <span v-if="submenu.badge" class="badge badge-primary ml-auto">{{ submenu.badge }}</span>
                    </router-link>
                    <a
                      v-else
                      href="javascript:void(0)"
                      :class="{
                        'noti-dot': submenu.hasNotify,
                        'active': submenu.active,
                        'subdrop': submenu.subdrop
                      }"
                      @click="onMenuClick(submenu)"
                    >
                      <i class="la" :class="{['la-' + submenu.icon]: true}" />
                      <span> {{ submenu.name }}</span>
                      <span v-if="submenu.badge" class="badge badge-primary ml-auto">{{ submenu.badge }}</span>
                      <span
                        v-if="submenu.childs"
                        class="menu-arrow"
                      />
                    </a>
                    <transition name="slide">
                      <ul
                        v-if="submenu.childs && submenu.subdrop && (!isMiniSidebar || isExpandMenu)"
                        class="d-block"
                      >
                        <li v-for="(subChild, subIndex) in submenu.childs" :key="subIndex">
                          <router-link :to="subChild.to" :class="subChild.class" @click="onMenuClick(subChild)">
                            {{ subChild.name }}
                            <span v-if="subChild.badge" class="badge badge-pill bg-primary float-right">
                              {{ subChild.badge }}
                            </span>
                          </router-link>
                        </li>
                      </ul>
                    </transition>
                  </li>
                </template>
              </template>
            </ul>
          </div>
        </vue-custom-scrollbar>
      </div>
    </div>
    <!-- </sidebar> -->
  </div>
</template>
<script lang="ts">
import { computed, defineComponent, ref } from '@nuxtjs/composition-api'
import { app } from '@/store'
import { ISubMenu } from '@/modules/common/types'
import { menus as initMenu } from './menu'

export default defineComponent({
  setup () {
    const settings = computed(() => ({
      suppressScrollX: false
    }))

    const menus = ref(initMenu)

    const onMenuClick = (submenu: ISubMenu) => {
      submenu.subdrop = !submenu.subdrop
    }

    const isMiniSidebar = computed(() => app.isMiniSidebar)
    const isExpandMenu = computed(() => app.isExpandMenu)

    const expandMenu = () => {
      if (!isMiniSidebar.value) {
        return
      }
      app.toggleExpandMenu()
    }

    return { settings, menus, onMenuClick, isMiniSidebar, isExpandMenu, expandMenu }
  }
})
</script>
<style lang="scss" scoped>
.scroll-area {
  position: relative;
  margin: auto;
  height: calc(100vh - 60px);
  background-color: transparent !important;
}

.slide-enter-active {
  -moz-transition-duration: 0.3s;
  -webkit-transition-duration: 0.3s;
  -o-transition-duration: 0.3s;
  transition-duration: 0.3s;
  -moz-transition-timing-function: ease-in;
  -webkit-transition-timing-function: ease-in;
  -o-transition-timing-function: ease-in;
  transition-timing-function: ease-in;
}

.slide-leave-active {
  -moz-transition-duration: 0.3s;
  -webkit-transition-duration: 0.3s;
  -o-transition-duration: 0.3s;
  transition-duration: 0.3s;
  -moz-transition-timing-function: cubic-bezier(0, 1, 0.5, 1);
  -webkit-transition-timing-function: cubic-bezier(0, 1, 0.5, 1);
  -o-transition-timing-function: cubic-bezier(0, 1, 0.5, 1);
  transition-timing-function: cubic-bezier(0, 1, 0.5, 1);
}

.slide-enter-to, .slide-leave {
  max-height: 100px;
  overflow: hidden;
}

.slide-enter, .slide-leave-to {
  overflow: hidden;
  max-height: 0;
}
</style>

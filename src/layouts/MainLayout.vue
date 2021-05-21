<template>
  <div class="main-wrapper">
    <layouts-header />
    <layouts-sidebar />
    <!-- Page Wrapper -->
    <div class="page-wrapper">
      <!-- Page Content -->
      <transition name="fade-transform" mode="out-in">
        <Nuxt />
      </transition>
      <!-- /Page Content -->
    </div>
    <!-- /Page Wrapper -->
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'
import { app } from '@/store'
import { MAIN_LAYOUT_NAME } from '@/modules/common/constants'

export default defineComponent({
  name: MAIN_LAYOUT_NAME,
  setup () {
    return { }
  },
  head () {
    const className = ['main_body']
    if (app.isMiniSidebar) {
      className.push('mini-sidebar')
      if (app.isExpandMenu) {
        className.push('expand-menu')
      }
    }
    return {
      bodyAttrs: {
        class: className.join(' ')
      }
    }
  }
})
</script>

<template>
  <div>
    <header>
      <div class="header">
        <!--Logo-->
        <div class="header-left">
          <router-link to="/index" class="logo">
            <img src="@/assets/logo-symbol.png" height="40" alt="">
          </router-link>
        </div>
        <!--/Logo-->
        <a id="toggle_btn" href="javascript:void(0);" @click="toggleSidebar">
          <span class="bar-icon">
            <span />
            <span />
            <span />
          </span>
        </a>
        <!-- Header Title -->
        <div class="page-title-box">
          <h3>Tokyo Tech Lab</h3>
        </div>
        <!-- /Header Title -->
        <a
          id="mobile_btn"
          class="mobile_btn"
          href="#sidebar"
        ><i
          class="fa fa-bars"
        /></a>
        <!-- Header Menu -->
        <ul class="nav user-menu">
          <!-- Language Menu -->
          <li class="nav-item dropdown has-arrow flag-nav">
            <HeaderMenuLanguage />
          </li>
          <!-- /Language Menu -->
          <!-- /Account Menu -->
          <li class="nav-item dropdown has-arrow main-drop">
            <HeaderMenuAccount />
          </li>
          <!-- /Account Menu -->
        </ul>
        <!-- Mobile Menu -->
        <div class="dropdown mobile-user-menu">
          <a
            href="#"
            class="nav-link dropdown-toggle"
            data-toggle="dropdown"
            aria-expanded="false"
          ><i
            class="fa fa-ellipsis-v"
          /></a>
          <div class="dropdown-menu dropdown-menu-right">
            <router-link class="dropdown-item" to="/profile">
              My Profile
            </router-link>
            <router-link class="dropdown-item" to="/settings">
              Settings
            </router-link>
            <router-link class="dropdown-item" to="/login">
              Logout
            </router-link>
          </div>
        </div>
      </div>
    </header>
  </div>
</template>
<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'
import { app } from '@/store'

export default defineComponent({
  setup () {
    const toggleSidebar = () => {
      app.toggleSidebar()
    }

    return { toggleSidebar }
  }
})
</script>
<style scoped>
  .user-menu {
    height: 100%;
  }
</style>

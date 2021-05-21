<template>
  <el-dropdown trigger="click" class="user-dropdown">
    <a href="#" class="nav-link">
      <div>
        <span class="user-img">
          <img src="@/assets/icons/avatar-default.png" alt="">
          <span class="status online" /></span>
        <span class="text-white">Admin</span>
      </div>
    </a>
    <el-dropdown-menu slot="dropdown">
      <el-dropdown-item>
        <router-link to="/profile">
          My Profile
        </router-link>
      </el-dropdown-item>
      <el-dropdown-item>
        <router-link to="/settings">
          Settings
        </router-link>
      </el-dropdown-item>
      <el-dropdown-item>
        <a href="javascript:void(0)" @click="logout">Logout</a>
      </el-dropdown-item>
    </el-dropdown-menu>
  </el-dropdown>
</template>

<script lang="ts">
import { defineComponent, useContext } from '@nuxtjs/composition-api'

export default defineComponent({

  setup () {
    const { $auth } = useContext()
    const logout = () => {
      $auth.logout()
    }

    return { logout }
  }
})
</script>

<style lang="scss">
.user-dropdown {
  background-color: transparent;
  border: none;
  padding: 0 2px;
  height: 100%;
  &:hover, &.show {
    background-color: rgba(0, 0, 0, 0.2);
  }
  .nav-link {
    height: 100%;
    display: flex;
    align-items: center;
    .user-img {
      .status {
        bottom: 0;
      }
    }
  }
}
</style>

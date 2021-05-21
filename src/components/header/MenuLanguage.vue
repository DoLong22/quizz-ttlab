<template>
  <el-dropdown trigger="click" class="language-select">
    <a class="nav-link dropdown-toggle" data-toggle="dropdown" href="#" role="button">
      <img src="@/assets/icons/flags/us.png" alt="" height="20"> <span class="text-white">English</span>
    </a>
    <el-dropdown-menu slot="dropdown">
      <el-dropdown-item>
        <img src="@/assets/icons/flags/us.png" alt="" height="16"> English
      </el-dropdown-item>
      <el-dropdown-item>
        <img src="@/assets/icons/flags/vn.png" alt="" height="16"> Vietnamese
      </el-dropdown-item>
    </el-dropdown-menu>
  </el-dropdown>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'

export default defineComponent({
  setup () {

  }
})
</script>

<style lang="scss">
.language-select {
  background-color: transparent;
  display: flex;
  align-items: center;
  padding: 0 2px;
  height: 100%;
  &:hover, &.show {
    background-color: rgba(0, 0, 0, 0.2);
  }
}
</style>

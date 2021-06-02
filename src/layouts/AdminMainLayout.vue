<template>
  <el-row :gutter="20" type="flex" justify="space-around">
    <el-col :span="3">
      <el-menu
        default-active="2"
        class="el-menu-vertical-demo"
        background-color="#545c64"
        text-color="#fff"
        active-text-color="#ffd04b"
      >
        <el-menu-item index="1">
          <i class="el-icon-user" />
          <span>User</span>
        </el-menu-item>
        <el-menu-item index="2">
          <i class="el-icon-menu" />
          <span>Vocabulary</span>
        </el-menu-item>
        <el-menu-item index="3">
          <i class="el-icon-document" />
          <span>Question</span>
        </el-menu-item>
        <el-menu-item index="4">
          <i class="el-icon-setting" />
          <span>Navigator Four</span>
        </el-menu-item>
      </el-menu>
    </el-col>
    <Nuxt />
  </el-row>
</template>
<script lang="ts">
import { defineComponent } from "@nuxtjs/composition-api";
export default defineComponent({
  layout({ $layout }) {
    return $layout.MAIN;
  },
  setup() {},
});
</script>

<style></style>

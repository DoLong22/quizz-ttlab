<template>
  <el-row class="tac">
    <el-col :span="12">
      <el-menu
        default-active="2"
        class="el-menu-vertical-demo"
        background-color="#545c64"
        text-color="#fff"
        active-text-color="#ffd04b"
        @open="handleOpen"
        @close="handleClose"
      >
        <el-submenu index="1">
          <template slot="title">
            <i class="el-icon-location" />
            <span>Navigator One</span>
          </template>
          <el-menu-item-group title="Group One">
            <el-menu-item index="1-1"> item one </el-menu-item>
            <el-menu-item index="1-2"> item one </el-menu-item>
          </el-menu-item-group>
          <el-menu-item-group title="Group Two">
            <el-menu-item index="1-3"> item three </el-menu-item>
          </el-menu-item-group>
          <el-submenu index="1-4">
            <template slot="title"> item four </template>
            <el-menu-item index="1-4-1"> item one </el-menu-item>
          </el-submenu>
        </el-submenu>
        <el-menu-item index="2">
          <i class="el-icon-menu" />
          <span>Navigator Two</span>
        </el-menu-item>
        <el-menu-item index="3" disabled>
          <i class="el-icon-document" />
          <span>Navigator Three</span>
        </el-menu-item>
        <el-menu-item index="4">
          <i class="el-icon-setting" />
          <span>Navigator Four</span>
        </el-menu-item>
      </el-menu>
    </el-col>
  </el-row>
</template>
<script lang="ts">
import { defineComponent } from "@nuxtjs/composition-api";
export default defineComponent({
  layout({ $layout }) {
    return $layout.MAIN;
  },
  setup() {
    function handleOpen(key, keyPath) {
      console.log(key, keyPath);
    }
    function handleClose(key, keyPath) {
      console.log(key, keyPath);
    }
    return { handleOpen, handleClose };
  },
});
</script>

<style></style>

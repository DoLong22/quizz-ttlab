<template>
  <el-dialog
  title="Warning"
  :visible.sync="centerDialogVisible"
  width="30%"
  center>
  <span>It should be noted that the content will not be aligned in center by default</span>
  <span slot="footer" class="dialog-footer">
    <el-button @click="centerDialogVisible = false">Cancel</el-button>
    <el-button type="primary" @click="centerDialogVisible = false">Confirm</el-button>
  </span>
</el-dialog>
</template>

<script lang="ts">
import { defineComponent, useContext } from "@nuxtjs/composition-api";
import { userService } from "../services/api.service";
export default defineComponent({
  layout({ $layout }) {
    return $layout.MAIN;
  },
  setup() {
    const { $axios } = useContext();
    // use client before use service on setup function
    userService.useClient($axios);
    console.log(userService);

    return {};
  },
});
</script>

<style>
</style>

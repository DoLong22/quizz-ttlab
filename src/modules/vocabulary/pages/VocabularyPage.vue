<template>
  <el-table :data="tableData" style="width: 100%" height="650">
    <el-table-column prop="kanji" label="Kanji" width="180" />
    <el-table-column prop="hiragana" label="Hiragana" width="180" />
    <el-table-column prop="romanji" label="Romaji" />
    <el-table-column prop="kanji_desc" label="Kanji_desc" />
    <el-table-column prop="desc" label="Desc" />
    <el-table-column prop="category" label="Category" />
    <el-table-column prop="" label="Action" />
  </el-table>
</template>
<script lang="ts">
import { defineComponent } from "@nuxtjs/composition-api";
import { vocabularyService } from "../services/api.service";
export default defineComponent({
  layout({ $layout }) {
    return $layout.MAIN;
  },
  setup() {
    // const data = vocabularyService.getList({ limit: 10 });
    return {};
  },
  async asyncData({ $axios }) {
    const tableData = await $axios.$get(
      "http://localhost:8080/vocabulary.json"
    );
    console.log(typeof tableData);

    return { tableData };
  },
});
</script>

<style></style>

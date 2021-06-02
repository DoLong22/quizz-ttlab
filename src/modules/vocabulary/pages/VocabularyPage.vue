<template>
  <el-col :span="20">
    <!-- <template slot="header" slot-scope="scope"> -->
    <el-input v-model="search" placeholder="Type to search" />
    <!-- </template> -->
    <el-table :data="tableData" style="width: 100%" max-height="650" border>
      <el-table-column prop="kanji" label="Kanji" width="180" />
      <el-table-column prop="hiragana" label="Hiragana" width="180" />
      <el-table-column prop="romanji" label="Romaji" />
      <el-table-column prop="kanji_desc" label="Kanji_desc" />
      <el-table-column prop="desc" label="Desc" />
      <el-table-column prop="category" label="Category" />
      <el-table-column align="center" label="Action">
        <template slot-scope="scope">
          <el-button size="mini" @click="handleEdit(scope.$index, scope.row)">
            Edit
          </el-button>
          <el-button
            size="mini"
            type="danger"
            @click="handleDelete(scope.$index, scope.row)"
          >
            Delete
          </el-button>
        </template>
      </el-table-column>
    </el-table>
  </el-col>
</template>
<script lang="ts">
import { defineComponent } from "@nuxtjs/composition-api";
import { vocabularyService } from "../services/api.service";
// import { vocabulary } from "~/store";

export default defineComponent({
  layout({ $layout }) {
    return $layout.ADMIN;
  },
  setup() {
    const search = "";
    const handleEdit = (index: number, row: number) => console.log(index, row);
    const handleDelete = (index: number, row: number) =>
      console.log(index, row);
    return { search, handleEdit, handleDelete };
  },
  async asyncData({ $axios }) {
    vocabularyService.useClient($axios);
    const tableData = await vocabularyService.getList({ limit: 10 });
    console.table(tableData);
    return { tableData };
  },
});
</script>

<style></style>

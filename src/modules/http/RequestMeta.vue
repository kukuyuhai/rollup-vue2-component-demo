<template>
  <el-table :data="data" style="width: 100%" :header-cell-style="{ background: '#fafafa' }">
    <el-table-column label="参数名称" align="center" prop="name"></el-table-column>
    <el-table-column label="必填" width="120" align="center" prop="required">
      <template slot-scope="scope">
        {{ scope.row.required == "1" ? "必填" : "非必填" }}
      </template>
    </el-table-column>
    <el-table-column label="类型" align="center" prop="type">
      <template slot-scope="scope">
        {{ dict_json.getLabel("paramsTypes", scope.row.type) }}
      </template>
    </el-table-column>
    <el-table-column label="描述" align="center" prop="description" width="300"> </el-table-column>
    <el-table-column label="示例值" align="center" prop="simple"> </el-table-column>
  </el-table>
</template>

<script>
import { mapGetters } from "vuex"
export default {
  name: "RequestMeta",
  props: {
    data: {
      type: Array,
      default: () => [],
    },
  },
  computed: {
    ...mapGetters(["dict_json"]),
  },
}
</script>

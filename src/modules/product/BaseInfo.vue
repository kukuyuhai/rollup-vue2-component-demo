<template>
  <div class="base-info">
    <el-descriptions
      :column="1"
      size="medium"
      :labelStyle="{
        color: '#222',
        flexShrink: 0,
      }"
      v-if="baseInfo"
    >
      <el-descriptions-item label="产品名称" :span="24">
        {{ baseInfo.dataName }}
      </el-descriptions-item>
      <el-descriptions-item label="供方名称" :span="24">
        {{ baseInfo.companyName }}</el-descriptions-item
      >
      <el-descriptions-item label="应用版块" :span="24">
        {{ dict_json.getLabel("sectorId", baseInfo.sectorId) }}
      </el-descriptions-item>
      <el-descriptions-item label="数据主题" :span="24">
        {{ dict_json.getLabel("industyOption", baseInfo.industry) }}
      </el-descriptions-item>
      <el-descriptions-item label="产品类型" :span="24">
        {{ baseInfo.dataType == "01" ? "数据集" : "数据服务" }}
      </el-descriptions-item>
      <el-descriptions-item label="产品描述" :span="24">
        {{ baseInfo.dataContent }}
      </el-descriptions-item>
      <el-descriptions-item label="关键词" :span="24">
        {{ baseInfo.keyWord | keyWordFilter }}
      </el-descriptions-item>
    </el-descriptions>
  </div>
</template>

<script>
import { mapGetters } from "vuex"
export default {
  props: {
    baseInfo: Object,
  },
  computed: {
    ...mapGetters(["dict_json"]),
  },
  filters: {
    keyWordFilter(value) {
      return value && value.split(",").join("，")
    },
  },
}
</script>

<style></style>

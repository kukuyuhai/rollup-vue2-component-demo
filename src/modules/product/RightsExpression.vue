<template>
  <el-descriptions
    :column="3"
    size="medium"
    :labelStyle="{
      color: '#222',
    }"
  >
    <el-descriptions-item label="数据生产" v-if="getFile('company_data_01')">
      <attachment-tools :file="getFile('company_data_01')"> </attachment-tools>
    </el-descriptions-item>
    <el-descriptions-item label="公开数据获取" v-if="getFile('company_data_02') || crawling">
      <attachment-tools :file="getFile('company_data_02')"> </attachment-tools>
      <span v-if="crawling">遵循robots协议</span>
    </el-descriptions-item>
    <el-descriptions-item label="授权运营" v-if="getFile('company_data_03')">
      <attachment-tools :file="getFile('company_data_03')"> </attachment-tools>
    </el-descriptions-item>
    <el-descriptions-item label="数据产品交易" v-if="getFile('company_data_04')">
      <attachment-tools :file="getFile('company_data_04')"> </attachment-tools>
    </el-descriptions-item>
  </el-descriptions>
</template>

<script>
import AttachmentTools from "@/components/Attachment/tools.vue"
export default {
  name: "RightsExpression",
  props: {
    crawling: {
      type: [String, Number],
      default: "",
    },
  },
  inject: ["getFile"],
  components: {
    AttachmentTools,
  },
}
</script>

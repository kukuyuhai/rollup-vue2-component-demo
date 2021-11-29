<template>
  <el-descriptions
    :column="3"
    size="medium"
    :labelStyle="{
      color: '#222',
    }"
  >
    <el-descriptions-item label="合规评估证书" v-if="getFile('company_data_05')">
      <attachment-tools style="float: left" :file="getFile('company_data_05')"> </attachment-tools>
      <div style="float: left" v-if="mechanism">({{ mechanism }})</div>
    </el-descriptions-item>
    <el-descriptions-item label="质量评估证书" v-if="getFile('company_data_06')">
      <attachment-tools :file="getFile('company_data_06')"> </attachment-tools>
    </el-descriptions-item>
    <el-descriptions-item label="法律承诺书" v-if="getFile('company_data_07')">
      <attachment-tools :file="getFile('company_data_07')"> </attachment-tools>
    </el-descriptions-item>
    <el-descriptions-item label="资产评估证书" v-if="getFile('company_data_08')">
      <attachment-tools :file="getFile('company_data_08')"> </attachment-tools>
    </el-descriptions-item>
  </el-descriptions>
</template>

<script>
import AttachmentTools from "@/components/Attachment/tools.vue"
export default {
  name: "QualificationProof",
  props: {
    mechanism: String,
  },
  inject: ["getFile"],
  components: { AttachmentTools },
}
</script>

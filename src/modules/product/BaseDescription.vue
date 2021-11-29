<template>
  <el-descriptions
    :column="3"
    size="medium"
    :labelStyle="{
      color: '#222',
    }"
    v-if="baseInfo"
  >
    <!-- <el-descriptions-item label="企业名称">
          {{ baseInfo.companyName }}
        </el-descriptions-item>
        <el-descriptions-item label="英文名称">
          {{ baseInfo.dataNameEn }}
        </el-descriptions-item>
        <el-descriptions-item label="统一社会信用代码">
          {{ baseInfo.businessNumer }}
        </el-descriptions-item> -->
    <el-descriptions-item label="产品名称" :span="24">
      {{ baseInfo.dataName }}
    </el-descriptions-item>
    <el-descriptions-item label="产品描述" :span="24">
      {{ baseInfo.dataContent }}
    </el-descriptions-item>
    <el-descriptions-item label="关键词">
      <div class="product-block__keyword" v-if="baseInfo.keyWord">
        <div class="tag-status blue" v-for="(word, i) in baseInfo.keyWord.split(',')" :key="i">
          {{ word }}
        </div>
      </div>
    </el-descriptions-item>
    <el-descriptions-item label="数据主题">
      {{ dict_json.getLabel("industyOption", baseInfo.industry) }}
    </el-descriptions-item>
    <el-descriptions-item label="产品类型">
      {{ dict_json.getLabel("dataType", baseInfo.dataType) }}
    </el-descriptions-item>
    <el-descriptions-item label="更新频率">
      {{ dict_json.getLabel("updateFrequencyType", baseInfo.updateFrequencyType) }}
    </el-descriptions-item>

    <el-descriptions-item label="数据存储大小" v-if="isDataSet">
      {{ supplierProductStore.dataStore }}
      {{ dict_json.getLabel("dataStoreUnit", supplierProductStore.dataStoreUnit) }}
    </el-descriptions-item>
    <el-descriptions-item label="产品条数" v-if="isDataSet">
      {{ supplierProductStore.dataNumber }}
      {{ dict_json.getLabel("dataNumberUnit", supplierProductStore.dataNumberUnit) }}
    </el-descriptions-item>
    <el-descriptions-item label="增量存储大小" v-if="isDynamic">
      {{ supplierProductStore.preDataStoreIncr }}
      {{ dict_json.getLabel("dataStoreUnit", supplierProductStore.preDataStoreIncrUnit) }}
    </el-descriptions-item>
    <el-descriptions-item label="增量产品条数" v-if="isDynamic">
      {{ supplierProductStore.preDataRowNumIncr }}
      {{ dict_json.getLabel("preDataRowNumIncrUnit", supplierProductStore.preDataRowNumIncrUnit) }}
    </el-descriptions-item>

    <el-descriptions-item label="首次采集时间" v-if="isDataSet">
      {{ baseInfo.collectionTime | parseTime("{y}-{m}-{d}") }}
    </el-descriptions-item>
    <el-descriptions-item label="数据发布时间" v-else>
      {{ baseInfo.releaseTime | parseTime("{y}-{m}-{d}") }}
    </el-descriptions-item>
  </el-descriptions>
</template>

<script>
import { mapGetters } from "vuex"
import { deepErgodic } from "@/utils/index"

export default {
  name: "BaseDescription",
  props: {
    baseInfo: {
      type: Object,
      default: () => {},
    },
  },
  computed: {
    ...mapGetters(["dict_json"]),
    // 存储的一些信息
    supplierProductStore() {
      return this.baseInfo?.supplierProductStore || {}
    },
    isDataSet() {
      return this.baseInfo.dataType == "01"
    },
    isDynamic() {
      return this.isDataSet && this.baseInfo.updateFrequencyType == 2
    },
  },
}
</script>

<style lang="scss" scoped>
.product-block__keyword {
  display: flex;
  align-items: center;
  & .tag-status {
    margin-right: 10px;
  }
}
</style>

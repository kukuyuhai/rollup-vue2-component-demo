<template>
  <div class="physics-info">
    <el-descriptions
      :column="1"
      size="medium"
      :labelStyle="{
        color: '#222',
        flexShrink: 0,
      }"
      v-if="baseInfo"
    >
      <el-descriptions-item label="更新频率" :span="24">
        {{ dict_json.getLabel("updateFrequencyType", baseInfo.updateFrequencyType) }}
        <span v-if="baseInfo.updateFrequencyType == 2">
          ({{ dict_json.getLabel("updateFrequency", baseInfo.updateFrequency) }}更新)
        </span>
      </el-descriptions-item>
      <el-descriptions-item label="覆盖范围" :span="24">
        {{ baseInfo.coverage }}
      </el-descriptions-item>
      <el-descriptions-item label="挂牌日期" :span="24" v-if="baseInfo.createTime">
        {{ new Date(baseInfo.createTime) | parseTime("{y}-{m}-{d}") }}
      </el-descriptions-item>
      <el-descriptions-item label="存储大小" :span="24" v-if="isDataSet">
        {{ baseInfo.dataStore | toThousandFilter }}
        {{ dict_json.getLabel("dataStoreUnit", baseInfo.dataStoreUnit) }}
      </el-descriptions-item>
      <el-descriptions-item label="产品条数" :span="24" v-if="isDataSet">
        {{ baseInfo.dataNumber | toThousandFilter }}
        {{ dict_json.getLabel("dataNumberUnit", baseInfo.dataNumberUnit) }}
      </el-descriptions-item>
    </el-descriptions>
  </div>
</template>

<script>
import { mapGetters } from "vuex"
export default {
  props: {
    baseInfo: Object,
    isDataSet: Boolean,
  },
  computed: {
    ...mapGetters(["dict_json"]),
  },
}
</script>

<style></style>

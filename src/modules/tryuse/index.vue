<template>
  <div class="data-example">
    <div class="content">
      <el-radio-group v-if="showTab" size="small" v-model="currentTab">
        <el-radio-button label="preview">数据预览</el-radio-button>
        <el-radio-button label="distribute">数据分布</el-radio-button>
      </el-radio-group>
      <!-- 数据预览 -->
      <div v-if="currentTab === 'preview' && dataPreview.length > 0" class="data-preview">
        <data-preview-cell v-for="item in dataPreview" :data="item" :key="item.fieldName">
          <template v-slot:preview-chart>
            <chart-bar-mini v-if="item.type === 1" :chart-data="item.fieldChartValues" />
            <chart-pie-mini v-else :chart-data="item.fieldChartValues" />
          </template>
        </data-preview-cell>
      </div>
      <!-- 数据分布 -->
      <div v-else-if="currentTab === 'distribute' && dataDistr.length > 0" class="distribute">
        <div
          v-for="(item, index) in dataDistr"
          :key="index"
          :style="{ width: item.type === 1 ? '100%' : '49%' }"
        >
          <data-distribute-bar v-if="item.type === 1" :data="item">
            <template v-slot:distribute-chart>
              <chart-bar height="240px" :chart-data="item.cvs" />
            </template>
          </data-distribute-bar>
          <data-distribute-pie v-else :data="item">
            <template v-slot:distribute-chart>
              <chart-pie height="200px" :chart-data="item.cvs" />
            </template>
          </data-distribute-pie>
        </div>
      </div>
      <el-empty v-else></el-empty>
      <!-- ifream -->
      <!-- <iframe src="" width="100%" height="400px" frameborder="0" /> -->
    </div>
  </div>
</template>

<script>
import CommPanel from "@/components/CommPanel"
import DataPreviewCell from "./components/DataPreviewCell.vue"
import DataDistributeBar from "./components/DataDistributeBar.vue"
import DataDistributePie from "./components/DataDistributePie.vue"
import ChartBar from "./components/ChartBar.vue"
import ChartBarMini from "./components/ChartBarMini.vue"
import ChartPie from "./components/ChartPie.vue"
import ChartPieMini from "./components/ChartPieMini.vue"
import { fetchDataTryuseAnalysis, fetchDataTryuseShow } from "@/api/tradeHall"
import _ from "lodash"
// type 1-连续 2-离散
export default {
  name: "TryUse",
  props: {
    id: {
      type: String || Number,
    },
    // 过滤数据预览
    filterPreview: {
      type: Function,
      default: dataList => dataList,
    },
    // 过滤数据分布
    fileterDistr: {
      type: Function,
      default: dataList => dataList,
    },
    // 默认显示的 radio
    activeTab: {
      type: String,
      default: "preview",
    },
    // 是否显示 radio
    showTab: {
      type: Boolean,
      default: true,
    },
    // 自定义数据
    customData: {
      type: Object,
    },
  },
  components: {
    CommPanel,
    DataPreviewCell,
    DataDistributeBar,
    DataDistributePie,
    ChartBar,
    ChartBarMini,
    ChartPie,
    ChartPieMini,
  },
  data() {
    return {
      currentTab: this.activeTab,
      fetchDataPreview: [],
      fetchDataDistr: [],
    }
  },
  computed: {
    dataPreview() {
      return this.customData ? this.customData.dataPreview : this.fetchDataPreview
    },
    dataDistr() {
      return this.customData ? this.customData.dataDistr : this.fetchDataDistr
    },
  },
  mounted() {
    if (typeof this.id === "string" || typeof this.id === "number") {
      this.getTryUseData()
    }
  },
  methods: {
    filterPreviewData(data) {
      if (_.isFunction(this.filterPreview)) return this.filterPreview(data)
      return data
    },
    filterDistrDate(data) {
      if (_.isFunction(this.fileterDistr)) return this.fileterDistr(data)
      return data
    },
    // 获取数据预览数据
    getPreviewData(responsePreviewData, responseDistrData) {
      const keys = _.keys(responsePreviewData[0])
      const result = _.map(keys, key => {
        return {
          fieldName: key,
          fieldValues: _.map(responsePreviewData, key),
          fieldChartValues: _.find(responseDistrData, item => item.filed === key)?.cvs || [],
          type: _.find(responseDistrData, item => item.filed === key)?.type,
        }
      })
      return this.filterPreviewData(result)
    },
    async getTryUseData() {
      const responsePreview = await fetchDataTryuseShow(this.id)
      const responseDistr = await fetchDataTryuseAnalysis(this.id)
      if (responsePreview.code === 200 && responseDistr.code === 200) {
        this.fetchDataPreview = this.getPreviewData(
          responsePreview?.data || [],
          responseDistr?.data || []
        )
        this.fetchDataDistr = this.filterDistrDate(responseDistr?.data || [])
      }
    },
  },
}
</script>

<style lang="scss" scoped>
.data-example {
  ::v-deep .el-radio-button__orig-radio:checked + .el-radio-button__inner {
    color: var(--color-theme-color);
    background-color: transparent;
    border-color: #357fed;
    box-shadow: -1px 0 0 0 #357fed;
  }
  ::v-deep .el-radio-button:first-child .el-radio-button__inner {
    border-radius: 2px 0 0 2px;
  }
  ::v-deep .el-radio-button:last-child .el-radio-button__inner {
    border-radius: 2px 0 0 2px;
  }
  ::v-deep .title {
    height: 56px;
    line-height: 56px;
  }
  ::v-deep .p_content {
    padding: 0;
  }
  ::v-deep .title_name {
    margin-left: 0;
  }
  .data-preview {
    margin: 8px 0;
    display: flex;
    flex-wrap: nowrap;
    overflow: scroll;
    height: 500px;
    position: relative;
    & > * {
      margin-right: 8px;
    }
    > &:last-child {
      margin-right: 0;
    }
  }
  .distribute {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    margin: 16px 0;
    & > * {
      margin-bottom: 16px;
    }
  }
  .title {
    height: 56px;
    line-height: 56px;
  }
  .p_content {
    padding: 0;
  }
  .title .title_name {
    margin-left: 0;
  }
}
</style>

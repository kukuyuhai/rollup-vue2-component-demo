<template>
  <div class="data-distribute" :style="{ width: width }">
    <div class="head">
      <span> 数据列： {{ data.filed }} </span>
      <span> 数据类型： {{ data.type === 1 ? "连续" : "离散" }} </span>
    </div>
    <div class="data-table">
      <el-table :data="tableData" stripe style="width: 100%">
        <el-table-column prop="missNumber" label="缺失值数量"> </el-table-column>
        <el-table-column prop="missRate" label="缺失率"> </el-table-column>
        <el-table-column prop="max" label="最大值"> </el-table-column>
        <el-table-column prop="mode" label="众数"> </el-table-column>
        <el-table-column prop="avg" label="平均数"> </el-table-column>
        <el-table-column prop="sd" label="标准差"> </el-table-column>
        <el-table-column prop="sum" label="取值加和"> </el-table-column>
        <el-table-column prop="skew" label="偏度"> </el-table-column>
      </el-table>
    </div>
    <div class="data-chart">
      <slot name="distribute-chart"></slot>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    width: {
      type: String,
      default: "100%",
    },
    height: {
      type: String,
    },
    data: {
      type: Object,
    },
  },
  data() {
    return {
      options: [
        {
          value: "选项1",
          label: "黄金糕",
        },
        {
          value: "选项2",
          label: "双皮奶",
        },
        {
          value: "选项3",
          label: "蚵仔煎",
        },
        {
          value: "选项4",
          label: "龙须面",
        },
        {
          value: "选项5",
          label: "北京烤鸭",
        },
      ],
      tableData: [this.data.analysisValue],
    }
  },
}
</script>

<style lang="scss" scoped>
.data-distribute {
  overflow: hidden;
  width: 100%;
  .head {
    display: flex;
    justify-content: space-between;
    height: 32px;
    line-height: 32px;
    color: #555555;
    font-size: 14px;
    margin-bottom: 8px;
  }
  .data-table {
    margin-bottom: 15px;
    .el-table__header .el-table__cell {
      background: #f9f9f9;
      color: #222222;
    }
  }
  .data-chart {
    overflow: hidden;
    height: 240px;
  }
}
</style>

<style lang="scss">
.data-distribute {
  .data-table {
    .el-table__header .el-table__cell {
      background: #f9f9f9;
      color: #222222;
    }
  }
}
</style>

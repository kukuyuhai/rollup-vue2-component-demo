<template>
  <div class="data-distribute" :style="{ width: width }">
    <div class="head">
      <span> 数据列： {{ data.filed }} </span>
      <span> 数据类型： {{ data.type === 1 ? "连续" : "离散" }}</span>
    </div>
    <div class="data-table">
      <el-table :data="tableData" stripe style="width: 100%">
        <el-table-column prop="data1" label="特征个数"> </el-table-column>
        <el-table-column prop="missNumber" label="缺失值数量"> </el-table-column>
        <el-table-column prop="missRate" label="缺失率"> </el-table-column>
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
      tableData: [this.data.analysisValue],
    }
  },
}
</script>

<style lang="scss" scoped>
.data-distribute {
  display: flex;
  flex-direction: column;
  overflow: hidden;
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
    height: 200px;
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

<template>
  <div>
    <div
      v-if="chartData && chartData.length > 0"
      ref="chart"
      :style="{ height: height, width: width }"
    ></div>
    <el-empty style="padding: 0" :image-size="35" v-else></el-empty>
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
      default: "74px",
    },
    chartData: {
      type: Array,
    },
  },
  data() {
    return {
      chartBarOption: {
        grid: {
          left: 0,
          top: 0,
          right: 0,
          bottom: 0,
        },
        xAxis: {
          type: "category",
          show: false,
        },
        yAxis: {
          type: "value",
          show: false,
        },
        series: [
          {
            data: this.chartData.map(item => item.number),
            type: "bar",
            color: ["#357FED"],
            barWidth: "16",
          },
        ],
      },
    }
  },
  methods: {
    getEchartData() {
      const chart = this.$refs.chart
      if (chart) {
        const chartBar = this.$echarts.init(chart)
        chartBar.setOption(this.chartBarOption)
      }
    },
  },
  mounted() {
    this.getEchartData()
  },
}
</script>

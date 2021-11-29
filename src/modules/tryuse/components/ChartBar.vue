<template>
  <div>
    <div
      v-if="chartData && chartData.length > 0"
      class="chart-bar"
      :style="{ height: height, width: width }"
      ref="chart"
    ></div>
    <el-empty style="padding: 0" :image-size="100" v-else></el-empty>
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
      default: "200px",
    },
    chartData: {
      type: Array,
    },
  },
  data() {
    return {
      chartBarOption: {
        grid: {
          left: "0",
          right: "0",
          bottom: "0",
          top: "0",
          containLabel: true,
        },
        xAxis: {
          type: "category",
          data: this.chartData.map(item => item.key),
        },
        yAxis: {
          type: "value",
        },
        series: [
          {
            data: this.chartData.map(item => item.number),
            type: "bar",
            color: ["#357FED"],
            barWidth: "28",
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

<template>
  <div>
    <div
      v-if="chartData && chartData.length > 0"
      class="chart-pie"
      :style="{ height: height, width: width }"
      ref="chart"
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
      chartPieOption: {
        legend: {
          show: false,
        },
        series: [
          {
            name: "访问来源",
            type: "pie",
            radius: "85%",
            color: [
              "#F6BD16",
              "#357FED",
              "#5B8FF9",
              "#5AD8A6",
              "#5D7092",
              "#3ba272",
              "#fc8452",
              "#9a60b4",
              "#ea7ccc",
            ],
            data: this.chartData.map(item => {
              return { value: item.number, name: item.key }
            }),
            emphasis: {
              itemStyle: {
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: "rgba(0, 0, 0, 0.5)",
              },
            },
            labelLine: {
              length: 5,
              length2: 5,
            },
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
        chartBar.setOption(this.chartPieOption)
      }
    },
  },
  mounted() {
    this.getEchartData()
  },
}
</script>

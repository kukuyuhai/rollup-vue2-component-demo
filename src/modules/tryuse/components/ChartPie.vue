<template>
  <div>
    <div
      v-if="chartData && chartData.length > 0"
      class="chart-pie"
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
      default: "240px",
    },
    chartData: {
      type: Array,
    },
  },
  data() {
    return {
      chartPieOption: {
        tooltip: {
          trigger: "item",
        },
        legend: {
          orient: "vertical",
          right: 0,
          top: "middle",
          algin: "left",
          itemWidth: 8,
          itemHeight: 8,
          icon: "circle",
        },
        series: [
          {
            name: "访问来源",
            type: "pie",
            radius: "75%",
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

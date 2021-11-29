<template>
  <div class="product-table">
    <el-tabs v-model="lifeCycle" @tab-click="handlerLifeCycle">
      <el-tab-pane
        :label="item.label"
        :name="item.name"
        v-for="item in lifecycleEnums"
        :key="item.name"
      ></el-tab-pane>
    </el-tabs>

    <!-- autoscroll table -->
    <el-table
      v-el-table-infinite-scroll="load"
      infinite-scroll-disabled="disabled"
      infinite-scroll-immediate="false"
      infinite-scroll-distance="200"
      :show-header="false"
      stripe
      :data="currentList"
      height="350"
    >
      <el-table-column prop="name"></el-table-column>
      <el-table-column prop="status" align="center"></el-table-column>
      <el-table-column prop="time" align="right"></el-table-column>
      <template #append>
        <div class="product-table__tips">
          <p v-if="loading">加载中...</p>
          <p v-if="noMore">没有更多了</p>
        </div>
      </template>
    </el-table>
  </div>
</template>

<script>
import elTableInfiniteScroll from "@/directive/el-table-infinite-scroll"
import { getProductLifecycle } from "@/api/hall"

export default {
  name: "LifeCycle",
  props: {
    productId: {
      type: [String, Number],
      default: "",
    },
    lifecycleEnums: {
      type: Array,
      default: () => [],
    },
  },
  directives: {
    "el-table-infinite-scroll": elTableInfiniteScroll,
  },
  data() {
    return {
      loading: false,
      lifeCycle: "REGISTER",
      lifeCycleList: null,
      currentList: [], //当前生命周期列表
      page: {
        pageNum: 1,
        pageSize: 10,
      },
      total: 0,
    }
  },

  watch: {
    productId: {
      handler(nv) {
        if (nv) {
          this.handlerLifeCycle(this.lifeCycle)
        }
      },
      immediate: true,
    },
  },
  computed: {
    noMore() {
      return this.total > 0 && this.currentList.length >= this.total
    },
    disabled() {
      return this.loading || this.noMore
    },
  },
  methods: {
    async load() {
      this.loading = true
      try {
        this.page.pageNum += 1
        const list = await this.getLifeCycleList(this.lifeCycle)
        this.currentList = this.currentList.concat(list)
        this.loading = false
      } catch (error) {
        this.loading = false
      }
    },
    async handlerLifeCycle() {
      this.resetPage()
      this.currentList = await this.getLifeCycleList(this.lifeCycle)
    },
    async getLifeCycleList(cycle) {
      const queryParms = Object.assign(this.page, {
        id: this.productId,
        isPage: true,
        lifecycleEnums: cycle,
      })
      const result = await getProductLifecycle(queryParms)
      if (result.code === 200) {
        this.total = result.data[0].total
        return result.data[0].companyDataLifecycleList
      } else {
        return []
      }
    },
    resetPage() {
      // 清空组件状态
      this.currentList = []
      this.total = 0
      this.loading = false
      this.page = {
        pageNum: 1,
        pageSize: 10,
      }
    },
  },
}
</script>

<style scoped>
.product-table__tips > p {
  font-size: 14px;
  color: #5e6d82;
  line-height: 1.5em;
  padding: 10px 0;
  text-align: center;
}
</style>

<template>
  <!--
 * @Author: zhaolei
 * @Date: 2021-08-19
 * @Description: 面包屑
-->
  <div class="breadcrumb-wrap">
    <el-breadcrumb separator="/" class="breadcrumb">
      <el-breadcrumb-item
        :to="{ path: item.path }"
        v-for="(item, index) in breadcrumbsComputed"
        :key="index"
      >
        {{ item.name }}
      </el-breadcrumb-item>
    </el-breadcrumb>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: "",
    },
    breadcrumbs: {
      type: Array,
      default: () => [],
    },
  },
  computed: {
    breadcrumbsComputed() {
      if (this.breadcrumbs.length) {
        return this.breadcrumbs
      }
      // 登记默认配置
      return [
        { name: "首页", path: "/" },
        { name: "登记大厅", path: "/registry-hall/" },
        { name: this.title, path: this.$route.fullPath },
      ]
    },
  },
}
</script>

<style lang="scss" scoped>
.breadcrumb-wrap {
  height: 70px;
}
.breadcrumb {
  width: 1200px;
  margin: 0 auto;
  font-size: 14px;
  color: #555555;
  line-height: 70px;
}
</style>

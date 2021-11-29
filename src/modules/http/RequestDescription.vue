<template>
  <div class="api-desc">
    <http-uri :data="httpbaseInfo"></http-uri>
    <!-- 请求参数(Query) -->
    <http-section title="请求参数(Params)" :data="getList('2')">
      <template slot-scope="scope">
        <request-meta v-if="scope.visible" :data="scope.data"></request-meta>
      </template>
    </http-section>
    <!-- 请求参数(Headers) -->
    <http-section title="请求参数(Headers)" :data="getList('3')">
      <template slot-scope="scope">
        <request-meta v-if="scope.visible" :data="scope.data"></request-meta>
      </template>
    </http-section>
    <!-- 请求参数(Body) -->
    <http-section title="请求参数(Body)" :data="httpbaseInfo.requestBody">
      <template slot-scope="scope">
        <Codemirror :code="scope.data" mode="text/javascript" v-if="scope.visible"></Codemirror>
      </template>
    </http-section>
    <!-- 响应参数(Params) -->
    <http-section title="响应参数(Params)" :data="getList('4')">
      <template slot-scope="scope">
        <request-meta v-if="scope.visible" :data="scope.data"></request-meta>
      </template>
    </http-section>
    <!-- 响应参数(Headers) -->
    <http-section title="响应参数(Headers)" :data="getList('5')">
      <template slot-scope="scope">
        <request-meta v-if="scope.visible" :data="scope.data"></request-meta>
      </template>
    </http-section>
    <!-- 响应参数(Body) -->
    <http-section title="响应参数(Body)" :data="httpbaseInfo.responseBody">
      <template slot-scope="scope">
        <Codemirror :code="scope.data" mode="text/javascript" v-if="scope.visible"></Codemirror>
      </template>
    </http-section>
    <http-section title="请求示例" :data="supplierProductApiReqSimples">
      <template slot-scope="scope">
        <div v-if="scope.visible">
          <codemirror-tab v-model="active" :simples="scope.data"></codemirror-tab>
        </div>
      </template>
    </http-section>
    <http-section title="返回示例" :data="httpbaseInfo.responseSimple">
      <template slot-scope="scope">
        <Codemirror :code="scope.data" mode="text/javascript" v-if="scope.visible"></Codemirror>
      </template>
    </http-section>
    <!-- 错误码定义 -->
    <http-section title="错误码定义" :data="supplierProductApiRespCodes">
      <template slot-scope="scope">
        <el-table
          :data="scope.data"
          style="width: 100%"
          :header-cell-style="{ background: '#fafafa' }"
          v-if="scope.visible"
        >
          <el-table-column label="HTTP状态码" align="center" prop="httpStatus"> </el-table-column>
          <el-table-column label="错误码" align="center" prop="respCode"> </el-table-column>
          <el-table-column label="错误信息" align="center" prop="msg"> </el-table-column>
          <el-table-column label="描述" align="center" prop="description"> </el-table-column>
        </el-table>
      </template>
    </http-section>
  </div>
</template>

<script>
import Codemirror from "@/components/Codemirror"
import HttpSection from "./HttpSection.vue"
import RequestMeta from "./RequestMeta.vue"
import CodemirrorTab from "./CodemirrorTab.vue"
import HttpUri from "./HttpUri.vue"

export default {
  props: {
    baseInfo: {
      type: Object,
      default: () => {},
    },
  },
  components: { Codemirror, HttpSection, RequestMeta, CodemirrorTab, HttpUri },
  data() {
    return {
      active: 0,
      simpleLabels: ["java", "python", "go", "curl", "php", "nodejs"],
    }
  },
  computed: {
    // json字典
    dict() {
      return this.$store.state.dict
    },
    // 存储的一些信息
    httpbaseInfo() {
      return {
        requestType: this.baseInfo?.requestType, // API 请求方式
        uri: this.baseInfo?.uri, // API 请求地址
        requestBody: this.baseInfo?.requestBody, // 请求Body
        responseBody: this.baseInfo?.responseBody, // 响应Body
        responseSimple: this.baseInfo?.responseSimple, //响应示例
      }
    },
    // 请求示例
    supplierProductApiReqSimples() {
      let simples = this.baseInfo?.supplierProductApiReqSimples || []
      const temp = []
      simples.forEach((v, i) => {
        const hasSimple = !!v.simple
        if (hasSimple) {
          temp.push({
            language: v.language,
            simple: v.simple,
            label: this.simpleLabels[v.language - 1],
          })
        }
      })
      return temp
    },
    //错误码
    supplierProductApiRespCodes() {
      return this.baseInfo?.supplierProductApiRespCodes || []
    },
  },
  methods: {
    getList(paramType) {
      let supplierProductApiParams = this.baseInfo?.supplierProductApiParams || []
      return supplierProductApiParams.filter(v => v.paramType == paramType)
    },
  },
}
</script>

<template>
  <div
    :style="{
      marginTop: this.showBreadCrumb ? '0' : '24px',
    }"
    v-if="baseInfo"
  >
    <slot name="tab-content"></slot>
    <Breadcrumb :title="baseInfo.dataName" v-if="this.showBreadCrumb"></Breadcrumb>
    <!-- 产品头部信息 -->
    <product-header
      :list="attachmentList"
      :base-info="baseInfo"
      :product-count="productCount"
      :file-id="fileId"
    >
    </product-header>

    <!-- 基础描述 -->
    <common-panel text="数据基本描述">
      <base-description :base-info="baseInfo"></base-description>
    </common-panel>
    <!-- 产品说明书 -->

    <common-panel text="产品说明书">
      <Specification :base-info="baseInfo" />
    </common-panel>
    <!-- API说明 -->
    <common-panel text="API说明" class="api-explain" v-if="!isDataSet">
      <request-description :base-info="baseInfo.supplierProductApiResp"></request-description>
    </common-panel>

    <!-- 权利描述 -->
    <common-panel text="权利描述">
      <rights-expression :crawling="baseInfo.crawling" />
    </common-panel>

    <!-- 资质证明 -->
    <common-panel text="资质证明">
      <qualification-proof :mechanism="baseInfo.mechanism" />
    </common-panel>

    <!-- 数据产品生命周期 -->
    <common-panel text="数据产品生命周期" style="margin-bottom: 60px">
      <life-cycle :lifecycleEnums="lifecycleEnums" :productId="productId" />
    </common-panel>

    <div class="product-foot" v-if="curr_role !== 1">
      <el-button type="primary" style="width: 240px" @click="apply">立即挂牌</el-button>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex"
import { getProductDetail, getProductCount } from "@/api/hall"
import CommonPanel from "../common/CommonPanel.vue"
import Breadcrumb from "../common/Breadcrumb.vue"
import RequestDescription from "../http/RequestDescription"
import BaseDescription from "./BaseDescription.vue"
import Specification from "./Specification.vue"
import RightsExpression from "./RightsExpression.vue"
import LifeCycle from "./LifeCycle.vue"
import ProductHeader from "./Header.vue"
import QualificationProof from "./QualificationProof.vue"

export default {
  name: "ProductDetail",
  props: {
    productId: {
      type: [String, Number],
      default: "",
    },
    showBreadCrumb: {
      type: Boolean,
      default: false,
    },
  },
  components: {
    Breadcrumb,
    RequestDescription,
    CommonPanel,
    BaseDescription,
    Specification,
    RightsExpression,
    LifeCycle,
    ProductHeader,
    QualificationProof,
  },
  provide() {
    return {
      getFile: v => this.getFile(v),
    }
  },
  data() {
    return {
      baseInfo: {},
      attachmentInfo: {},
      attachmentList: [],
      lifecycleEnums: [
        { label: "登记", name: "REGISTER" },
        { label: "浏览", name: "BROWSE" },
        { label: "交易", name: "ORDER" },
        { label: "支付", name: "DELIVERY" },
        { label: "评价", name: "EVALUATE" },
      ],
      productCount: {},
    }
  },
  watch: {
    productId: {
      handler(nv) {
        if (nv) {
          this.fetchData(nv)
          this.getCount(nv)
        }
      },
      immediate: true,
    },
  },
  created() {
    this.$store.dispatch("dict/getIndustry")
  },
  computed: {
    ...mapGetters(["curr_role", "dict_json"]),
    // 是否是数据集
    isDataSet() {
      return this.baseInfo.dataType == "01"
    },
    fileId() {
      return this.getFile("company_data_10") && this.getFile("company_data_10").id
    },
  },
  methods: {
    async fetchData(id) {
      const result = await getProductDetail(id)
      if (result.code === 200) {
        this.baseInfo = Object.freeze(result.data)
        // 这个附件此处默认是唯一的，一个页面只会出现一种文件code。
        let attachmentInfo = {}
        result.data.supplierAttachments.forEach(item => {
          attachmentInfo[item.busiType] = {
            ...item,
          }
        })
        this.attachmentInfo = attachmentInfo
        this.attachmentList = result.data.supplierAttachments
      }
    },
    getFile(busiType) {
      const _filter = this.attachmentList.filter(item => item.busiType === busiType)
      return _filter.length ? _filter[0] : null
    },
    apply() {
      if (this.productId) {
        this.$router.push({
          path: `/registry-hall/${this.productId}/apply-listing`,
        })
      }
    },
    async getCount(id) {
      const result = await getProductCount(id)
      if (result.code === 200) {
        this.productCount = result.data
      }
    },
  },
}
</script>
<style lang="scss" scoped>
.product {
  &-foot {
    width: 1920px;
    height: 80px;
    background: #ffffff;
    box-shadow: 0 -2px 8px 0 rgba(0, 0, 0, 0.08);
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 1001;
  }
}

.product-description {
  border-top: 1px solid #eaeaea;
  padding-top: 10px;
}
.api-explain {
  .section {
    padding-left: 14px;
    margin-top: 30px;
    .sub-title {
      height: 40px;
      line-height: 40px;
      background: rgba(53, 127, 237, 0.2);
      text-indent: 40px;
      margin-bottom: 5px;
      position: relative;
      .prohibit {
        width: 18px;
        position: absolute;
        left: 10px;
        top: 11px;
      }
      .arrow-right {
        width: 0;
        height: 0;
        border-top: 10px solid transparent;
        border-left: 12px solid rgba(53, 127, 237, 0.6);
        border-bottom: 10px solid transparent;
        position: absolute;
        left: 10px;
        top: 10px;
        cursor: pointer;
      }
      .arrow-bottom {
        width: 0;
        height: 0;
        border-left: 10px solid transparent;
        border-right: 10px solid transparent;
        border-top: 12px solid rgba(53, 127, 237, 0.6);
        position: absolute;
        left: 10px;
        top: 15px;
        cursor: pointer;
      }
    }
    .tabs {
      height: 32px;
      margin-bottom: 10px;
      .tab-item {
        height: 100%;
        width: 88px;
        border: 1px solid #d9d9d9;
        color: #666;
        float: left;
        line-height: 30px;
        text-align: center;
        font-size: 14px;
        cursor: pointer;
        &:not(:last-child) {
          border-left: none;
        }
        &:last-child {
          border-left: none;
        }
        &.active {
          border: 1px solid #357fed;
          color: #357fed;
          font-weight: bold;
        }
      }
    }
  }
  .uri,
  .type {
    font-size: 14px;
    padding-left: 14px;
    line-height: 24px;
  }
}
</style>

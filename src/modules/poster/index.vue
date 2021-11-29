<template>
  <div class="poster" id="poster">
    <div class="poster-qrcode">
      <div class="poster-qrcode__image">
        <vue-qr-code
          style="width: 62px; height: 62px; background: #fff; padding: 4px"
          :margin="0"
          :value="basehref"
        ></vue-qr-code>
        <span style="margin-top: 6px">
          挂牌日期：{{ new Date(posterInfo.releaseTime) | parseTime("{y}-{m}-{d}") }}
        </span>
      </div>
      <img :src="require('@/assets/poster/images/logo@2x.png')" style="width: 158px" />
    </div>
    <div class="poster-title">
      <div class="poster-title__t1">可交易数据产品说明书</div>
      <div class="poster-title__t2">{{ posterInfo.dataName }}</div>
      <div class="poster-title__t3">数据产品代码：{{ posterInfo.listedProductCode }}</div>
    </div>

    <!-- 产品热度 -->
    <poster-panel title="基本信息">
      <base-info :base-info="baseData"></base-info>
    </poster-panel>

    <!-- 物理信息 -->
    <poster-panel title="物理信息">
      <physics-info :isDataSet="isDataSet" :base-info="physicsInfo"></physics-info>
    </poster-panel>

    <!-- 内容说明 -->
    <poster-panel title="内容说明">
      <template v-if="!isDataSet">
        <qr-code-scan
          title="输入字段"
          v-if="info.inputData && info.inputData.length"
          :showVerify="false"
          icon="list"
        >
          <data-item-table :columns="info.inputData"></data-item-table>
        </qr-code-scan>
      </template>
      <qr-code-scan
        title="输出字段"
        v-if="info.outputData && info.outputData.length"
        :showVerify="false"
        icon="list"
      >
        <data-item-table :columns="info.outputData"></data-item-table>
      </qr-code-scan>
      <qr-code-scan :showVerify="false">具体内容请扫描顶部二维码查看</qr-code-scan>
    </poster-panel>

    <!-- 使用条件 -->
    <poster-panel title="使用条件">
      <service-cond :base-info="serviceCondData"></service-cond>
    </poster-panel>

    <!-- 使用案例 -->
    <poster-panel title="使用案例">
      <qr-code-scan :showVerify="false">具体内容请扫描顶部二维码查看</qr-code-scan>
    </poster-panel>

    <!-- 使用说明 -->
    <poster-panel title="使用说明">
      <qr-code-scan :showVerify="false"> 具体内容请扫描顶部二维码查看 </qr-code-scan>
      <template>
        <qr-code-scan title="交付交易等级" :showVerify="false" icon="safe">
          <div class="poster-table">
            <div class="poster-table__cell">
              <span>s1</span>
              <img
                :src="require('./images/checked@2x.png')"
                style="height: 14px; margin-left: 50px"
              />
            </div>
            <div class="poster-table__cell">s2</div>
            <div class="poster-table__cell">s3</div>
            <div class="poster-table__cell">s4</div>
          </div>
        </qr-code-scan>
        <qr-code-scan title="交付方式" :showVerify="false" icon="list">
          <el-descriptions size="medium">
            <el-descriptions-item label="交付方式">
              <template v-if="isDataSet">
                <span v-for="item in tableData.deliveryPattern.split(',')" :key="'patten' + item">
                  {{ dict_json.getLabel("deliveryPattern", item) }}
                </span>
              </template>
              <span v-else>API</span>
            </el-descriptions-item>
          </el-descriptions>
        </qr-code-scan>
        <qr-code-scan title="技术文档" :showVerify="false" icon="page">
          {{ isDataSet ? "无" : "具体内容请扫描顶部二维码查看" }}
        </qr-code-scan>
      </template>
    </poster-panel>

    <!-- 来源描述 -->
    <poster-panel class="poster-source clearfix" title="来源描述">
      <qr-code-scan
        title="数据生产"
        icon="production"
        v-if="attachmentList['company_data_01']"
      ></qr-code-scan>
      <qr-code-scan
        title="公开数据获取"
        icon="open"
        v-if="attachmentList['company_data_02']"
      ></qr-code-scan>
      <qr-code-scan
        title="授权运营"
        icon="exchange"
        v-if="attachmentList['company_data_03']"
      ></qr-code-scan>
      <qr-code-scan
        title="数据产品交易"
        icon="coin"
        v-if="attachmentList['company_data_04']"
      ></qr-code-scan>
    </poster-panel>

    <!-- 资质信息 -->
    <poster-panel title="资质信息">
      <qr-code-scan
        title="合规评估文件"
        icon="rule"
        v-if="attachmentList['company_data_05']"
        :id="attachmentList['company_data_05']"
        attachmentType="company_data_05"
        @success="onsuccess"
      >
        具体内容请扫描右侧二维码查看
      </qr-code-scan>
      <qr-code-scan
        title="质量评估证书"
        icon="ask"
        v-if="attachmentList['company_data_06']"
        :id="attachmentList['company_data_06']"
        attachmentType="company_data_06"
        @success="onsuccess"
      >
        具体内容请扫描右侧二维码查看
      </qr-code-scan>
      <qr-code-scan
        title="法律承诺书"
        icon="page"
        v-if="attachmentList['company_data_07']"
        :id="attachmentList['company_data_07']"
        attachmentType="company_data_07"
        @success="onsuccess"
      >
        具体内容请扫描右侧二维码查看
      </qr-code-scan>
      <qr-code-scan
        title="资产评估文件"
        icon="chart"
        v-if="attachmentList['company_data_08']"
        :id="attachmentList['company_data_08']"
        attachmentType="company_data_08"
        @success="onsuccess"
      >
        具体内容请扫描右侧二维码查看
      </qr-code-scan>
    </poster-panel>

    <!-- 产品热度 -->
    <poster-panel title="产品热度">
      <qr-code-scan :showVerify="false">具体内容请扫描顶部二维码查看</qr-code-scan>
    </poster-panel>

    <!-- 产品价格 -->
    <poster-panel title="产品价格">
      <product-price-table :is-dataset="isDataSet" :info="tableData"></product-price-table>
    </poster-panel>
  </div>
</template>

<script>
import PosterPanel from "./PosterPanel.vue"
import PhysicsInfo from "@modules/product/PhysicsInfo"
import BaseInfo from "@modules/product/BaseInfo"
import QrCodeScan from "./QrCodeScan.vue"
import html2canvas from "html2canvas"
import ServiceCond from "@modules/product/ServiceCond.vue"
import VueQrCode from "vue-weblineindia-qrcode"
import ProductPriceTable from "@modules/product/ProductPriceTable.vue"
import DataItemTable from "./DataItemTable.vue"
import { mapGetters } from "vuex"
import { uploadProductSpec } from "@/api/hall"

export default {
  name: "Poster",
  components: {
    PosterPanel,
    BaseInfo,
    PhysicsInfo,
    QrCodeScan,
    ServiceCond,
    VueQrCode,
    ProductPriceTable,
    DataItemTable,
  },
  props: {
    info: {
      type: Object,
      default: () => {},
    },
  },
  data() {
    return {
      basehref: `${window.location.origin}/#/ep-hall/spec?id=${this.$route.query.id}`,
      verify: {},
    }
  },
  created() {
    this.$store.dispatch("dict/getIndustry")
    this.$store.dispatch("dict/sectorFindAllList")
  },
  computed: {
    ...mapGetters(["dict_json"]),
    posterInfo() {
      console.log(this.info.listedProductCode)
      return {
        releaseTime: this.info.releaseTime,
        dataName: this.info.dataName,
        listedProductCode: this.info.listedProductCode,
      }
    },
    baseData() {
      return {
        dataName: this.info.dataName,
        companyName: this.info.supplierCompanyName,
        sectorId: this.info.sectorId,
        industry: this.info.industryId,
        dataContent: this.info.dataContent,
        keyWord: this.info.keyWord,
        dataType: this.info.dataType,
      }
    },
    physicsInfo() {
      if (!this.info.supplierProductStore) return {}

      return Object.assign(this.info.supplierProductStore, {
        updateFrequencyType: this.info.updateFrequencyType,
        updateFrequency: this.info.updateFrequency,
        createTime: this.info.releaseTime, // 这个时间后续要修改掉
      })
    },
    serviceCondData() {
      return {
        usagePurpose: this.info.usagePurpose,
        userReq: this.info.userReq,
        usagePres: this.info.usagePres,
        usagePresUnit: this.info.usagePresUnit,
        rules: this.info.rule,
        otherRestrictions: this.info.otherRestrictions,
      }
    },
    tableData() {
      if (this.isDataSet) {
        return this.getDatasetPrice(this.info)
      } else {
        return this.getApiPrice(this.info)
      }
    },
    attachmentList() {
      if (!this.info.supplierProductAttachment) return {}

      const obj = {}
      this.info.supplierProductAttachment.forEach(item => {
        obj[item.busiType] = item.id
        this.$set(this.verify, item.busiType, false)
      })
      return obj
    },
    isDataSet() {
      return this.info.dataType === "01"
    },
  },
  methods: {
    /**
     * 获取数据集的价格信息
     */
    getDatasetPrice(brokeInfo) {
      const { brokerProductDataset, brokerProductByTimeList } = brokeInfo
      return {
        purchaseForm: brokerProductDataset?.purchaseForm,
        deliveryPattern: brokerProductDataset.deliveryPattern,
        brokerProductByTimeList: brokerProductByTimeList,
        brokerProductDataset: brokerProductDataset,
      }
    },
    /**
     * 获取数据服务（API）的价格信息
     */
    getApiPrice(brokeInfo) {
      const { brokerProductDataserviceTimesList, brokerProductByTimeList, limitNum, restrictNum } =
        brokeInfo
      return {
        brokerProductDataserviceTimesList,
        brokerProductByTimeList,
        limitNum,
        restrictNum,
      }
    },
    onsuccess(v) {
      const attachemntTypes = [
        "company_data_05",
        "company_data_06",
        "company_data_07",
        "company_data_08",
      ]
      this.verify[v] = true
      let flag = true
      Object.keys(this.verify).forEach(item => {
        if (!this.verify[item] && attachemntTypes.includes(item)) {
          flag = false
        }
      })
      // 挂牌状态必须是已挂牌
      if (flag && this.info.status == 2) {
        this.createPosterImage().then(file => {
          this.$emit("poster-success", file)
        })
      }
    },
    createPosterImage() {
      return new Promise((resolve, reject) => {
        this.$nextTick(() => {
          html2canvas(document.querySelector("#poster"), {
            useCORS: true,
            logging: false, // 关闭debug
            scale: window.devicePixelRatio > 2 ? window.devicePixelRatio : 2,
          }).then(canvas => {
            const file = this.dataURLtoBlob(
              canvas,
              `poster_${this.posterInfo.dataName}_${Math.round(Date.now())}.png`
            )
            const fd = new FormData()
            fd.append("file", file)
            fd.append("busiId", this.info.id)
            fd.append("busiDesc", "产品说明书海报")
            uploadProductSpec(fd)
              .then(res => {
                if (res.code == 200) {
                  resolve(res.data)
                }
              })
              .catch(err => {
                reject(err)
              })
          })
        })
      })
    },
    dataURLtoBlob(canvas, attachmentType) {
      const dataurl = canvas.toDataURL("image/png")
      let uint8 = this.getUint8Arr(dataurl)
      return new File([uint8.u8arr], attachmentType, { type: uint8.mime })
    },
    getUint8Arr(dataurl) {
      // 截取base64的数据内容
      let arr = dataurl.split(","),
        mime = arr[0].match(/:(.*?);/)[1],
        bstr = atob(arr[1]),
        // 获取解码后的二进制数据的长度，用于后面创建二进制数据容器
        n = bstr.length,
        // 创建一个Uint8Array类型的数组以存放二进制数据
        u8arr = new Uint8Array(n)
      // 将二进制数据存入Uint8Array类型的数组中
      while (n--) {
        u8arr[n] = bstr.charCodeAt(n)
      }
      return { u8arr, mime }
    },
  },
}
</script>

<style lang="scss" scoped>
.poster {
  font-family: "FZZXHJW";
  font-size: 14px;
  color: #fff;
  width: 638px;
  height: auto;
  overflow: hidden;
  background: url("~@/assets/poster/images/poster-bg@2x.png") no-repeat center center;
  background-size: cover;
  padding: 32px 24px;

  .poster-source {
    ::v-deep {
      .qrcode-scan-wrap {
        width: 50%;
        float: left;
      }
    }
  }

  &-qrcode {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;

    &__image {
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
    }
  }

  &-title {
    width: 100%;
    text-align: center;
    margin-top: 15px;
    margin-bottom: 60px;

    &__t1,
    &__t2 {
      font-family: "FZZXHJW";
      font-weight: 600;
    }

    &__t1 {
      font-size: 32px;
    }

    &__t2 {
      font-size: 26px;
      margin: 8px 0;
    }

    &__t3 {
      font-size: 16px;
    }
  }

  &-table {
    display: flex;
    align-items: center;
    border: 1px solid #6098d0;
    width: 100%;
    height: 32px;

    &__cell {
      flex: 1;
      height: 100%;
      border-right: 1px solid #6098d0;
      display: flex;
      align-items: center;
      justify-content: center;

      &:last-child {
        border-right: none;
      }
    }
  }

  ::v-deep {
    .el-descriptions__body {
      background-color: transparent;
      color: #fff;
    }

    .el-descriptions-item__label {
      color: #fff !important;
    }
  }
}
</style>

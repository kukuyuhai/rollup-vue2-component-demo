<template>
  <div class="try-use-modal">
    <el-dialog
      :title="title || '样例试用'"
      :visible.sync="modalVisible"
      width="997px"
      :before-close="handleClose"
    >
      <try-use :custom-data="customData" :showTab="false" />
      <span slot="footer" class="dialog-footer">
        <el-button type="primary" @click="handleClose">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
import TryUse from "@modules/tryuse"
import { getProductShow } from "@/api/hall"
export default {
  name: "TryUseModal",
  components: { TryUse },
  props: {
    title: {
      type: String,
      default: null,
    },
    modalVisible: {
      type: Boolean,
      default: false,
    },
    fileds: {
      type: Array,
      default: () => {
        return []
      },
    },
  },
  computed: {
    id() {
      return this.$route.query.productId
    },
  },
  data() {
    return {
      customData: {
        dataPreview: [],
      },
    }
  },
  methods: {
    handleClose() {
      this.$emit("toggleModal", false)
    },
    //处理数据预览数据
    getPreviewData(responsePreviewData, responseDistrData) {
      const keys = _.keys(responsePreviewData[0])
      const result = _.map(keys, key => {
        return {
          fieldName: key,
          fieldValues: _.map(responsePreviewData, key),
          fieldChartValues: _.find(responseDistrData, item => item.filed === key)?.cvs || [],
          type: _.find(responseDistrData, item => item.filed === key)?.type,
        }
      })
      return result
    },
    // 获取数据预览数据
    getProductShow(fileds) {
      getProductShow({ fileds, supplierProductId: this.id }).then(res => {
        const response = res.data
        this.customData.dataPreview = this.getPreviewData(
          response?.fileds || [],
          response?.analysisDataList || []
        )
      })
    },
  },
  watch: {
    modalVisible(newValue) {
      if (newValue) {
        const fileds = this.fileds.map(v => v.name)
        this.getProductShow(fileds)
      }
    },
  },
}
</script>

<style lang="scss" scoped>
.try-use-modal {
  .footer {
    display: flex;
    flex-direction: column;
    text-align: center;
    margin-top: 55px;
    color: #222222;
    line-height: 34px;
    align-items: center;
  }
  ::v-deep {
    /* .el-dialog {
      min-height: 560px;
      display: flex;
      flex-direction: column;
    } */

    .el-dialog__header {
      border-bottom: 1px solid #dad9d9;
      padding: 16px 0;
      text-align: center;
      font-size: 20px;
      font-weight: bold;
    }
    .el-dialog__footer {
      border-top: 1px solid #dad9d9;
      padding: 10px;
      text-align: center;
    }
    .el-dialog__body {
      padding: 20px;
      flex: 1 0 auto;
    }
  }
}
</style>

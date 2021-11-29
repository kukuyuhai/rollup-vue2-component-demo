<template>
  <section>
    <div class="product-sections" v-if="isDataSet">
      <h4>数据项：</h4>
      <el-table
        :data="supplierProductFileds"
        style="width: 100%"
        :header-cell-style="{ background: '#fafafa' }"
      >
        <el-table-column label="序号" width="100" align="center">
          <template slot-scope="scope">
            {{ scope.$index + 1 }}
          </template>
        </el-table-column>
        <el-table-column label="字段名称" width="180" align="center" prop="name"> </el-table-column>
        <el-table-column label="字段类型" width="180" align="center" prop="type"> </el-table-column>
        <el-table-column label="字段长度" width="180" align="center" prop="len"> </el-table-column>
        <el-table-column label="字段描述" align="center" prop="description"> </el-table-column>
      </el-table>
    </div>
    <div class="product-sections">
      <h4>数据画像：</h4>
      <div class="rich-text" v-html="baseInfo.dataProfile"></div>
    </div>
    <div class="product-sections">
      <h4>使用描述：</h4>
      <div class="rich-text" v-html="baseInfo.usageDesc"></div>
    </div>
    <el-descriptions
      v-if="isDataSet"
      class="product-sections sample"
      :column="3"
      size="medium"
      :labelStyle="{
        color: '#222',
      }"
    >
      <el-descriptions-item label="数据样例">
        <el-button type="text" class="btn" @click="openPreviewModal">预览</el-button>
      </el-descriptions-item>
    </el-descriptions>
    <try-use-modal
      title="样例数据"
      :modal-visible="modalVisible"
      :fileds="supplierProductFileds"
      @toggleModal="toggleModalVisible"
    />
  </section>
</template>

<script>
import AttachmentTools from "@/components/Attachment/tools.vue"
import TryUseModal from "@modules/common/TryUseModal.vue"

export default {
  name: "Specification",
  inject: ["getFile"],
  props: {
    baseInfo: {
      type: Object,
      default: () => {},
    },
  },
  data() {
    return {
      modalVisible: false,
    }
  },
  components: {
    AttachmentTools,
    TryUseModal,
  },
  computed: {
    isDataSet() {
      return this.baseInfo.dataType == "01"
    },
    supplierProductFileds() {
      return this.baseInfo.supplierProductFileds || []
    },
  },
  methods: {
    openPreviewModal() {
      this.toggleModalVisible(true)
    },
    toggleModalVisible(visible) {
      this.modalVisible = visible
    },
  },
}
</script>

<style lang="scss" scoped>
.product-sections {
  font-size: 14px;
  h4 {
    margin: 10px 0;
  }
  .rich-text {
    // height: 350px;
    border: 1px solid rgb(212, 209, 209);
    overflow: auto;
    background: #fafafa;
    padding: 10px;
    margin-top: 10px;
    ::v-deep {
      ul {
        display: block;
        list-style-type: disc;
        margin-block-start: 1em;
        margin-block-end: 1em;
        margin-inline-start: 0px;
        margin-inline-end: 0px;
        padding-inline-start: 40px;
      }

      ul {
        li {
          display: list-item;
          text-align: -webkit-match-parent;
        }
      }
      img {
        max-width: 100%;
      }
    }
  }
  &:last-child {
    margin-top: 10px;
  }
}
.sample {
  margin-top: 10px;
  .btn {
    margin: 0;
    padding: 0;
    font-size: 14px;
  }
}
</style>

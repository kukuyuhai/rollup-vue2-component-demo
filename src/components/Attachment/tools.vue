<template>
  <div class="attachment-tools">
    <template v-if="file">
      <span v-if="showFileName">
        {{
          file.busiType == "company_data_10"
            ? file.fileName.substring(0, file.fileName.lastIndexOf("."))
            : file.fileName
        }}
      </span>
      <div class="attachment-tools__btn">
        <a
          href="javascript:;"
          class="link border"
          v-if="scene.includes('download')"
          :class="{ link__disabled: loading }"
          @click="download"
        >
          <i class="el-icon-loading" v-if="loading"></i>
          <span>{{ downloadText }}</span>
        </a>
        <a href="javascript:;" v-if="scene.includes('preview')" class="link" @click="preview">
          {{ previewText }}
        </a>
      </div>
      <!-- 预览 -->
      <Attachment
        dialog
        width="100%"
        top="0"
        :visible.sync="dialogVisible"
        ref="attach"
        :file-type="file.fileType"
        :file-name="file.fileName || '预览'"
        :is-supplier="isSupplier"
        :params-key="paramsKey"
      ></Attachment>
    </template>
    <span v-else>-</span>
  </div>
</template>

<script>
import Attachment from "@/components/Attachment/index.vue"
import { MimeType } from "@/utils/mapping"

export default {
  name: "AttachmentTools",
  props: {
    file: {
      type: Object,
      require: true,
    },
    isSupplier: {
      type: Boolean,
      default: true,
    },
    paramsKey: {
      type: String,
      default: "uuid",
    },
    scene: {
      type: Array,
      default: () => ["preview", "download"],
    },
    showFileName: {
      type: Boolean,
      default: false,
    },
    // 预览按钮的文本内容
    previewText: {
      type: String,
      default: "预览",
    },
    // 下载按钮的文本内容
    downloadText: {
      type: String,
      default: "下载",
    },
  },
  components: {
    Attachment,
  },
  data() {
    return {
      dialogVisible: false,
      blobSrc: "",
      loading: false,
    }
  },
  methods: {
    preview() {
      this.dialogVisible = true
      this.$nextTick(() => {
        this.setBlobSrc()
      })
    },
    async setBlobSrc() {
      if (this.$refs.attach) {
        this.$refs["attach"]
          .preview(this.file.id, this.file.fileType)
          .then(src => {
            this.blobSrc = src
            return src
          })
          .catch(error => {
            this.$message.error(JSON.stringify(error))
          })
      }
    },
    download() {
      // 防止多次点击
      if (this.loading) return
      this.loading = true
      // 判断是否已经下载过了，如果下载过了就不用再次下载。
      if (this.blobSrc) {
        this._downloadFile(this.blobSrc)
      } else {
        this.$refs["attach"]
          .getImageBlob(this.file.id, MimeType.get(this.file.fileType), this.paramsKey)
          .then(src => {
            this._downloadFile(src)
          })
          .catch(() => {
            this.loading = false
          })
      }
    },
    _downloadFile(_link) {
      this.loading = false
      const a = document.createElement("a")
      a.href = _link
      a.download = this.file.fileName
      a.click()
    },
  },
}
</script>

<style lang="scss" scoped>
.attachment-tools {
  display: flex;
  align-items: center;
  flex-wrap: wrap;

  &__btn > a.link {
    padding: 0 10px;
    color: #357fed;

    &.link__disabled {
      cursor: not-allowed;
      color: rgb(53, 127, 237, 0.8);
    }
  }

  ::v-deep {
    // .attachment-wrap {
    //   width: 65%;
    // }

    .el-dialog {
      &__header {
        padding: 0 !important;
      }
      &__body {
        height: calc(100vh - 54px);
        overflow-y: auto;
        overflow-x: hidden;
        text-align: center;
        padding: 0 !important;
      }
    }
  }

  a.border {
    border-right: 1px solid #eaeaea;
  }
}
</style>

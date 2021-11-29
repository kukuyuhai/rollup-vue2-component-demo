<template>
  <div class="attactment">
    <!-- 文件类型是图片 -->
    <component
      :is="dialog ? 'el-dialog' : 'attachment-wrap'"
      v-bind="$attrs"
      v-on="$listeners"
      ref="dialogRef"
    >
      <template #title>
        <div class="attachment-pdf" v-if="dialog">
          <el-tooltip :content="fileName">
            <span class="attachment-pdf__name">{{ fileName }}</span>
          </el-tooltip>
          <div class="attachment-pdf__page" v-if="isPdf">
            <a
              href="javascript:;"
              :class="['attachment-pdf__prevBtn', { disabled: current <= 1 }]"
              @click="handlePrev"
              v-if="numPages > 1"
            >
              <i class="el-icon-arrow-left" />
            </a>
            <span>
              <span class="attachment-pdf__curr"> {{ current }}</span> /
              {{ numPages }}
            </span>
            <a
              href="javascript:;"
              :class="['attachment-pdf__nextBtn', { disabled: current >= numPages }]"
              @click="handleNext"
              v-if="numPages > 1"
            >
              <i class="el-icon-arrow-right" />
            </a>
          </div>
        </div>
      </template>
      <el-image
        v-if="isImage"
        :style="{
          width: width + 'px',
          height: height + 'px',
        }"
        :src="url"
        :preview-src-list="[url]"
        v-bind="$attrs"
        lazy
      >
        <template #error>
          <img style="width: 100%" :src="errorUrl" v-if="!$slots.error" alt="图片获取失败" />
          <slot name="error" v-else></slot>
        </template>
      </el-image>
      <!-- pdf -->
      <template v-else-if="fileType === 'pdf'">
        <!-- pdf组件 -->
        <pdf :src="pdfUrl" :page="current" />
      </template>
    </component>
  </div>
</template>

<script>
import { fileFullPath } from "@/api/dict/api_comm.js"
import errorUrl from "./error.jpg"
import pdf from "vue-pdf"
import { MimeType } from "@/utils/mapping"
import { on, off, getScrollContainer, isInContainer } from "@/utils/dom"
import { throttle } from "throttle-debounce"
import { isString, isHtmlElement } from "@/utils/types"
import AttachmentWrap from "../AttachmentWrap/index"

export default {
  name: "Attachment",
  props: {
    uuid: {
      type: [Number, String],
    },
    fileType: {
      type: String,
      default: "png",
      validator: t => {
        return ["png", "jpg", "pdf", "jpeg", "xls", "xlsx", "csv"].indexOf(t.toLowerCase()) > -1
      },
    },
    isSupplier: {
      // 是否是标准产品
      type: Boolean,
      default: true,
    },
    paramsKey: {
      type: String,
      default: "uuid",
    },
    width: String,
    height: String,
    dialog: {
      type: Boolean,
      default: false,
    },
    lazy: {
      type: Boolean,
      default: true,
    },
    fileName: String,
  },
  components: {
    pdf,
    AttachmentWrap,
  },
  data() {
    return {
      url: null,
      errorUrl: errorUrl,
      error: false,
      current: 1,
      numPages: 0,
      scrollContainer: {},
      show: !this.lazy,
    }
  },
  computed: {
    type() {
      return this.fileType.toLowerCase()
    },
    isImage() {
      return (this.type === "png" || this.type === "jpg" || this.type === "jpeg") && this.url
    },
    isPdf() {
      return this.type === "pdf"
    },
    pdfUrl() {
      if (this.url) {
        let src = pdf.createLoadingTask({
          url: this.url,
          cMapUrl: "https://cdn.jsdelivr.net/npm/pdfjs-dist@2.9.359/cmaps/",
          cMapPacked: true,
        })
        return src
      } else {
        return ""
      }
    },
  },
  mounted() {
    if (this.lazy) {
      this.addLazyLoadListener()
    }
  },

  watch: {
    uuid: {
      handler(nv) {
        if (this.show && !this.dialog && nv) {
          this.getImageBlob(nv, this.fileType, this.paramsKey).then(url => {
            this.url = url
          })
        }
      },
      immediate: true,
    },
    show(val) {
      val && this.loadImage()
    },
  },
  methods: {
    loadImage() {
      if (!this.dialog && this.uuid) {
        this.getImageBlob(this.uuid, this.fileType, this.paramsKey).then(url => {
          this.url = url
        })
      }
    },
    addLazyLoadListener() {
      const { scrollContainer } = this
      let _scrollContainer = null
      if (isHtmlElement(scrollContainer)) {
        _scrollContainer = scrollContainer
      } else if (isString(scrollContainer)) {
        _scrollContainer = document.querySelector(scrollContainer)
      } else {
        _scrollContainer = getScrollContainer(this.$el)
      }
      if (_scrollContainer) {
        this._scrollContainer = _scrollContainer
        this._lazyLoadHandler = throttle(200, this.handleLazyLoad)
        on(_scrollContainer, "scroll", this._lazyLoadHandler)
        this.handleLazyLoad()
      }
    },
    handleLazyLoad() {
      if (isInContainer(this.$el, this._scrollContainer)) {
        this.show = true
        this.removeLazyLoadListener()
      }
    },
    removeLazyLoadListener() {
      const { _scrollContainer, _lazyLoadHandler } = this
      if (!_scrollContainer || !_lazyLoadHandler) return
      off(_scrollContainer, "scroll", _lazyLoadHandler)
      this._scrollContainer = null
      this._lazyLoadHandler = null
    },
    getNumPages() {
      this.pdfUrl.promise
        .then(pdf => {
          this.numPages = pdf.numPages
        })
        .catch(err => {
          this.$message({
            type: "error",
            message: "文件加载失败",
          })
        })
    },
    handlePrev() {
      if (this.current <= 1) return
      --this.current
    },
    handleNext() {
      if (this.current >= this.numPages) return
      ++this.current
    },
    onImageError() {
      console.log("error")
    },
    preview(uuid, type) {
      return new Promise((resolve, reject) => {
        if (!this.pdfUrl) {
          this.getImageBlob(uuid, type, this.paramsKey)
            .then(url => {
              this.url = url
              resolve(this.url)
              if (this.isPdf) {
                this.getNumPages(this.pdfUrl)
              }
            })
            .catch(err => {
              reject(err)
            })
        } else {
          if (this.isPdf) {
            this.getNumPages(this.pdfUrl)
          }
        }
      })
    },
    getImageBlob(uuid, fileType, paramsKey) {
      return new Promise((resolve, reject) => {
        fileFullPath(
          {
            [paramsKey]: uuid,
          },
          MimeType.get(fileType),
          this.isSupplier
        )
          .then(url => {
            resolve(url)
          })
          .catch(error => {
            reject(error)
          })
      })
    },
  },
}
</script>

<style lang="scss" scoped>
.attachment {
  &-pdf {
    font-size: 18px;
    color: #fff;
    background: rgb(50, 54, 57);
    display: flex;
    align-items: center;
    height: 54px;
    padding: 0 20px;
    position: relative;

    &__page {
      width: calc(100% - 40px);
      display: flex;
      align-items: center;
      justify-content: center;
      position: absolute;
    }

    &__name {
      width: 200px;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }

    &__prevBtn,
    &__nextBtn {
      position: fixed;
      top: 50%;
      background: rgb(50, 54, 57);
      width: 52px;
      height: 52px;
      line-height: 52px;
      font-size: 32px;
      border-radius: 50%;
      text-align: center;
      &.disabled {
        cursor: not-allowed;
        background: rgba(50, 54, 57, 0.6);
        color: rgba(255, 255, 255, 0.6);
      }
    }

    &__prevBtn {
      left: 16%;
    }

    &__nextBtn {
      right: 16%;
    }

    span {
      font-size: 16px;
    }

    &__curr {
      background: #000;
      width: 24px;
      height: 24px;
      display: inline-block;
      text-align: center;
      line-height: 24px;
    }
  }
}
</style>

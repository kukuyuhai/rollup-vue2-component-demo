<template>
  <div
    class="qrcode-scan-wrap"
    :class="{
      border: id,
    }"
  >
    <div
      class="qrcode-desc"
      :style="{
        height: id ? '64px' : '',
      }"
    >
      <div class="mini-title">
        <img v-if="icon" :src="require(`../images/${icon}@2x.png`)" />
        <span class="text">{{ title }}</span>
        <span class="verify" v-if="showVerify">已认证</span>
      </div>
      <span style="margin-top: 10px" v-if="$slots.default">
        <slot></slot>
      </span>
    </div>
    <div class="qrcode-image" v-if="id">
      <img :src="url" style="width: 100%; height: 100%" />
    </div>
  </div>
</template>

<script>
import QRCode from "qrcode"
import { error } from "@/utils/log"
export default {
  name: "QrCodeScan",
  props: {
    title: String,
    icon: String,
    showVerify: {
      type: Boolean,
      default: true,
    },
    id: [Number, String],
    attachmentType: String,
  },
  data() {
    return {
      url: "",
    }
  },
  computed: {
    qrcodeUrl() {
      return `${window.location.origin}/daep/supplier/attachment/download?uuid=${this.id}`
    },
  },
  watch: {
    id: {
      handler(nv) {
        if (nv) {
          this.generateQR(this.qrcodeUrl)
        }
      },
      immediate: true,
    },
  },
  methods: {
    async generateQR(text) {
      try {
        this.url = await QRCode.toDataURL(text, { errorCorrectionLevel: "L" })
        this.$emit("success", this.attachmentType)
      } catch (err) {
        return error
      }
    },
  },
}
</script>

<style lang="scss" scoped>
.qrcode-scan-wrap {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px 0;

  &.border {
    border-bottom: 1px solid rgba(96, 152, 208, 0.26);
  }

  .qrcode-desc {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    flex: 1;

    .mini-title {
      display: flex;
      align-items: center;
      color: #94fcff;

      img {
        height: 16px;
      }
      .text {
        margin: 0 6px;
      }
      .verify {
        border: 1px solid #ffffff;
        font-size: 12px;
        color: #ffffff;
        letter-spacing: 0;
        text-align: justify;
        padding: 2px;
      }
    }
  }

  .qrcode-image {
    width: 64px;
    height: 65px;
    border: 1px solid #fff;
  }
}
</style>

<template>
  <div
    :class="[
      'attachment-wrap',
      {
        'attachment-wrap__border': border,
      },
    ]"
    :style="wrapStyle"
  >
    <slot></slot>
    <slot name="title"></slot>
  </div>
</template>

<script>
export default {
  name: "AttachmentWrap",
  inheritAttrs: false,
  props: {
    border: {
      type: Boolean,
      default: false,
    },
    width: String,
    height: String,
  },
  computed: {
    wrapStyle() {
      let style = {}
      if (this.width) {
        style.width = this.width
      }
      if (this.height) {
        style.height = this.height
      }
      return style
    },
  },
}
</script>

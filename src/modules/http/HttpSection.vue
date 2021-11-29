<template>
  <div class="section" v-if="!disabled">
    <div class="sub-title" @click="changeVisible">
      <span v-if="!disabled" :class="!visible ? 'arrow-right' : 'arrow-bottom'"></span>
      <span>{{ title }}</span>
    </div>
    <slot :data="data" :visible="visible" />
  </div>
</template>

<script>
import _ from "lodash"
export default {
  name: "HttpSection",
  props: {
    title: {
      type: String,
      default: "",
    },
    data: {
      type: [Array, Object, String, Boolean],
    },
  },
  data() {
    return {
      visible: false,
    }
  },
  watch: {
    data: {
      handler() {
        if (!this.disabled) {
          this.visible = true
        }
      },
      immediate: true,
    },
  },
  computed: {
    disabled() {
      if (_.isArray(this.data)) {
        if (this.data.length) {
          return false
        }
        return true
      } else {
        return _.isEmpty(this.data)
      }
    },
  },
  methods: {
    changeVisible() {
      // 如果是禁用状态，不显示内容
      if (this.disabled) {
        this.visible = false
        return
      }
      this.visible = !this.visible
    },
  },
}
</script>

<style lang="scss" scoped>
.section {
  margin-top: 30px;
  .sub-title {
    height: 40px;
    line-height: 40px;
    background: rgba(53, 127, 237, 0.2);
    text-indent: 40px;
    margin-bottom: 5px;
    position: relative;
    cursor: pointer;
    user-select: none;
    font-size: 14px;

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
      border-left: 10px solid rgba(53, 127, 237, 0.6);
      border-bottom: 10px solid transparent;
      position: absolute;
      left: 10px;
      top: 10px;
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
    }
  }
}
</style>

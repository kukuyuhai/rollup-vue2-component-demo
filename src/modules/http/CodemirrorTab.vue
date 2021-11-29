<template>
  <div class="codemirror-tab">
    <div class="request-type tabs">
      <div
        :class="['tab-item', value == index && 'active']"
        v-for="(item, index) in simples"
        :key="index"
        @click="changeRequestExample(index, item)"
      >
        {{ item.label }}
      </div>
    </div>
    <Codemirror :code="simples[value].simple" mode="text/javascript"></Codemirror>
  </div>
</template>

<script>
import Codemirror from "../../components/Codemirror/index.vue"
export default {
  name: "CodemirrorTab",
  components: {
    Codemirror,
  },
  props: {
    value: {
      type: [String, Number],
      default: 0,
    },
    simples: {
      type: Array,
      default: () => [],
    },
  },
  methods: {
    changeRequestExample(index) {
      this.$emit("input", index)
    },
  },
}
</script>

<style lang="scss" scoped>
.section {
  margin-top: 30px;
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
      &:not(:first-child) {
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
</style>

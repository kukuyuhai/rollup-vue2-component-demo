<template>
  <div class="td-keywords">
    <div class="td-keywords-row">
      <div class="td-keywords-label">{{ label }}：</div>
      <div class="td-keywords-keys">
        <span
          :class="[
            'td-keywords-key',
            {
              'td-keywords-current': value == item.value,
            },
          ]"
          v-for="(item, index) in allSelector"
          :key="index"
          @click="changeFilter(item, index)"
        >
          {{ item.label }}
        </span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "SearchItem",
  props: {
    label: String,
    value: {
      type: [String, Number],
    },
    data: {
      type: Array,
      default: () => [],
    },
    showAll: {
      type: Boolean,
      default: true,
    },
  },
  computed: {
    allSelector() {
      if (this.showAll) {
        return [{ label: "全部", value: "" }, ...this.data]
      }
      return this.data
    },
  },
  methods: {
    changeFilter(item) {
      this.$emit("input", item.value)
    },
  },
}
</script>

<style lang="scss" scoped>
.td-keywords {
  margin-top: 16px;
  &-row {
    display: flex;
    margin-bottom: 8px;
  }
  &-label {
    padding: 6px 0;
    font-size: 14px;
    color: #555555;
  }
  &-keys {
    position: relative;
    flex: 1;
    padding-right: 60px;
    overflow: hidden;
  }
  &-key {
    display: inline-block;
    margin-left: 16px;
    margin-bottom: 8px;
    padding: 6px 14px;
    font-size: 14px;
    color: #222222;
    cursor: pointer;

    &:hover {
      background: #357fed;
      border-radius: 16px;
      color: var(--color-default-white);
    }
  }
  &-current {
    background: #357fed;
    border-radius: 16px;
    color: var(--color-default-white);
  }
  &-show-all {
    font-size: 14px;
    position: absolute;
    right: 5px;
    top: 6px;
    color: #357fed;
    cursor: pointer;
  }
}
</style>

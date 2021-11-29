<template>
  <div class="data-preview-cell">
    <div class="head">{{ data.fieldName }}</div>
    <div class="chart">
      <slot name="preview-chart"></slot>
    </div>
    <div class="data-field">
      <p
        class="field-cell"
        :title="fieldValue"
        v-for="(fieldValue, index) in data.fieldValues"
        :key="index"
      >
        {{ fieldValue }}
      </p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    data: {
      type: Object,
    },
  },
  data() {
    return {}
  },
}
</script>

<style lang="scss" scoped>
.data-preview-cell {
  border-radius: 2px;
  color: #888888;
  flex: 0 0 160px;
  margin-bottom: 15px;
  max-width: 160px;
  .head {
    width: 100%;
    padding: 0 20px;
    height: 48px;
    line-height: 48px;
    border: 1px solid rgba(0, 0, 0, 0.15);
    border-bottom: none;
    background: #fff;
  }
  .chart {
    height: 90px;
    width: 100%;
    padding: 8px 0;
    border: 1px solid rgba(0, 0, 0, 0.15);
    overflow: hidden;
    background: #fff;
  }
  .data-field .field-cell {
    border: 1px solid rgba(0, 0, 0, 0.15);
    border-top: none;
    height: 32px;
    line-height: 32px;
    padding: 0 20px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    margin: 0;
  }
}
</style>

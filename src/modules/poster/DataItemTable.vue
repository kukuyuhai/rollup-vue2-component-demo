<template>
  <table class="poster-price" border="0" cellspacing="0" cellpadding="5">
    <thead>
      <tr>
        <td>序号</td>
        <td>字段名称</td>
        <td>字段描述</td>
        <td v-if="showExample">示例值</td>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(col, idx) in columns" :key="idx">
        <td>{{ idx + 1 }}</td>
        <td>{{ col.name }}</td>
        <td>{{ col.description }}</td>
        <td v-if="col.simple">{{ col.simple }}</td>
      </tr>
    </tbody>
  </table>
</template>

<script>
export default {
  name: "DataItemTable",
  props: {
    columns: {
      type: Array,
      default: () => [],
    },
  },
  computed: {
    showExample() {
      return this.columns[this.columns.length - 1]?.simple
    },
  },
}
</script>

<style lang="scss" scoped>
.poster-price {
  border-top: 1px solid #6098d0;
  border-left: 1px solid #6098d0;
  border-right: 1px solid #6098d0;
  width: 100%;
  text-align: left;
  table-layout: fixed;

  td {
    padding: 6px;
    border-right: 1px solid #6098d0;
    border-bottom: 1px solid #6098d0;
    word-break: break-all;

    &:last-child {
      border-right: none;
    }
  }
}
</style>

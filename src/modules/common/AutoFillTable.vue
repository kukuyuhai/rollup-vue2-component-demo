<template>
  <div class="autofill">
    <el-button
      type="primary"
      icon="el-icon-plus"
      @click="addDataItems"
      class="add-data-item-btn"
      plain
    >
      {{ text }}
    </el-button>
    <!-- dialog  -->
    <el-dialog
      title="批量输入"
      width="80%"
      top="0"
      center
      :visible.sync="dialogVisible"
      :close-on-click-modal="false"
      :close-on-press-escape="false"
    >
      <div class="autofill-table" v-if="headers.length">
        <p>
          <b style="color:#97a8be;">【输入提示】</b>
          <ol>
            <li>
              你可以任意匹配你所需要的数据列，只需要将表格中对应的字段，添加文本数据框第一行，用空格间隔表示，如输入框提示所示。
            </li>
            <li>
              如果您输入的文本和表格显示列一致，您无需添加头部行字段，系统会自动识别。
            </li>
          </ol>
        </p>
        <table border="0" cellPadding="1" cellSpacing="0" style="text-align: center;">
          <thead>
            <tr>
              <td v-for="item in headers" :key="item.name">{{ item.value }}</td>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td v-for="item in headers" :key="item.name">{{ item.label }}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <!-- 输入框 -->
      <textarea
        class="autofill-textarea"
        :placeholder="simple"
        v-model="inputValue"
      ></textarea>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="onDialogConfirm"> 确 定 </el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
import _ from "lodash";

export default {
  name: "AutoFillTable",
  props: {
    text: {
      type: String,
      default: "批量输入",
    },
    headers: {
      type: Array,
      default: () => [],
      required: true,
    },
  },
  data() {
    return {
      inputValue: "",
      dialogVisible: false,
    };
  },
  computed: {
    simple() {
      return `【请参考如下格式输入】
paramName name nameEn
参数名称1 中文名称1 英文名称1
参数名称2 中文名称2 英文名称2
参数名称3 中文名称3 英文名称3
`;
    },
  },
  methods: {
    onDialogConfirm() {
      this.dialogVisible = false;
      const rows = this.inputValue.split("\n");
      if (rows.length) {
        // 获取第一行的数据
        let rowHeaders = rows[0].split(/\s+/);
        const headers = this.headers.map((item) => item.value); // 获取到需要传递过滤的表头数组的value值。
        const intersection = _.intersection(rowHeaders, headers); // 求交集，只返回头部相同字段的值
        // 说明现在是有头部的信息，需要字段匹配，移除第一行输入的值。
        if (intersection.length > 0) {
          rows.shift();
        }
        this.dialogVisible = false;
        this.inputValue = "";
        const compareArr = intersection.length > 0 ? intersection : headers;
        this.$emit("confirm", this.splitRowStr(rows, [], compareArr));
      }
    },
    addDataItems() {
      this.dialogVisible = true;
    },

    /**
     * 分割每一行的字符串
     * @param {*} rows 所有分割行字符串
     * @param {*} arr 未处理的数组
     * @param {*} compareArr 需要分割表格的头部值
     * @return {arrray} 处理后的数组
     */
    splitRowStr(rows, arr, compareArr) {
      rows.forEach((item) => {
        let temp = {};
        const cols = item.split(/\s+/); // 隔开所有空字符
        compareArr.forEach((col, index) => {
          temp[col] = cols[index];
        });
        arr.push(temp);
      });
      return arr;
    },
  },
};
</script>

<style lang="scss" scoped>
$border-color: #ccc;
.autofill {
  display: inline-block;

  &-table {
    margin-bottom: 10px;
  }

  &-textarea {
    min-width: 100%;
    height: calc(100vh - 400px);
    border: 1px solid $border-color;
    outline: none;
    overflow: auto;
  }

  ul,
  ol {
    margin: 0;
    padding: 0;
  }

  table {
    border-bottom: 1px solid $border-color;
  }

  td {
    border-right: 1px solid $border-color;
    border-top: 1px solid $border-color;
    padding: 0 10px;
    text-align: center;

    &:first-child {
      border-left: 1px solid $border-color;
    }
  }
}
</style>

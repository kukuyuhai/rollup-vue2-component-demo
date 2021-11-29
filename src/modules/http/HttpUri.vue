<template>
  <div class="api-desc">
    <el-row class="url">
      <span class="api-desc__label">请求地址：</span>
      <span>https://{{ data.uri }}</span>
      <span @click="handleCopy('https://' + data.uri, $event)">
        <i class="el-icon-document-copy api-desc__copy" />
      </span>
    </el-row>
    <el-row class="type">
      <span class="api-desc__label">请求方式：</span>
      <span>
        {{
          toUpperCaseStr(dict_json.getLabel("requestTypes", data.requestType) || data.requestType)
        }}
      </span>
    </el-row>
    <!-- <el-row class="type"> -->
    <!-- <span class="api-desc__label">支持格式：</span> -->
    <!-- <span>{{ dict_json.getLabel("requestBodyType", data.requestBodyType) }}</span> -->
    <!-- </el-row> -->
  </div>
</template>

<script>
import { mapGetters } from "vuex"
import clip from "@/utils/clipboard" // use clipboard directly

export default {
  props: {
    data: {
      type: Object,
      default: () => {},
    },
  },
  computed: {
    ...mapGetters(["dict_json"]),
  },

  methods: {
    handleCopy(text, event) {
      clip(text, event)
    },
    toUpperCaseStr(str) {
      return String(str).toUpperCase()
    },
  },
}
</script>

<style lang="scss" scoped>
.api-desc {
  padding-left: 14px;
  .type {
    margin-top: 10px;
  }
  &__label {
    font-size: 14px;
  }
  &__copy {
    color: #357fed;
    margin-left: 8px;
    cursor: pointer;
  }
}

.disabled {
  pointer-events: none;
}
</style>

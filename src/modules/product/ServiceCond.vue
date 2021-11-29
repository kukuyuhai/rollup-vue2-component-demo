<template>
  <el-descriptions
    :column="1"
    size="medium"
    :labelStyle="{
      color: '#222',
      flexShrink: 0,
    }"
    v-if="baseInfo"
  >
    <el-descriptions-item label="使用目的" :span="24">
      <span v-for="item in baseInfo.usagePurpose" :key="'usagePurpose' + item">
        {{ dict_json.getLabel("usagePurpose", item) }}
      </span>
    </el-descriptions-item>
    <el-descriptions-item label="使用主体" :span="24"> 仅供购买支付主体使用 </el-descriptions-item>
    <el-descriptions-item label="使用者资质" :span="24">
      <span v-for="item in baseInfo.userReq" :key="'userReq' + item">
        {{ dict_json.getLabel("userReq", item) }}
      </span>
    </el-descriptions-item>
    <el-descriptions-item label="时间限制" :span="24">
      <span v-if="baseInfo.usagePres == 1">实时使用，即仅限当次调用有效、数据不可缓存</span>
      <span v-else-if="baseInfo.usagePres == 0">无限制</span>
      <span v-else-if="baseInfo.usagePres == 2">
        服务合同规定期限内使用，到期后数据不可继续存储
      </span>
      <span v-else>
        时长使用，
        {{ baseInfo.usagePres }}
        {{
          dict_json.getLabel("USAGEPRESUNIT", baseInfo.usagePresUnit)
        }}内使用有效，到期后数据不可继续存储
      </span>
    </el-descriptions-item>
    <!-- <el-descriptions-item label="区域限制" :span="24"> - </el-descriptions-item> -->
    <el-descriptions-item label="不得转让规则" :span="24">
      <span v-for="item in baseInfo.rules" :key="'rule' + item">
        {{ dict_json.getLabel("rule", item) }}
      </span>
    </el-descriptions-item>
    <!-- <el-descriptions-item label="有效时长" :span="24"> -</el-descriptions-item> -->
    <el-descriptions-item label="其他限制" :span="24">
      {{ baseInfo.otherRestrictions }}
    </el-descriptions-item>
  </el-descriptions>
</template>

<script>
import { mapGetters } from "vuex"
export default {
  props: {
    baseInfo: Object,
  },
  computed: {
    ...mapGetters(["dict_json"]),
  },
}
</script>

<style></style>

<template>
  <div v-if="info">
    <table
      class="poster-price"
      border="0"
      cellspacing="0"
      cellpadding="5"
      v-if="isDataset && purchase"
    >
      <thead>
        <tr>
          <td>购买方式</td>
          <td>价格</td>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>测试</td>
          <td>免费</td>
        </tr>
        <tr v-for="(pur, idx) in purchase" :key="'pur' + idx">
          <td>{{ pur.label }}</td>
          <td>{{ pur.price }}</td>
        </tr>
        <template v-if="dasetTimeList && dasetTimeList.price && dasetTimeList.price.length">
          <tr>
            <td class="rowspan" :rowspan="dasetTimeList.price.length">
              {{ dasetTimeList.label }}
            </td>
            <td>{{ getPrice(dasetTimeList.price[0]) }}</td>
          </tr>

          <tr v-for="i in dasetTimeList.price.length - 1" :key="i">
            <td>{{ getPrice(dasetTimeList.price[i]) }}</td>
          </tr>
        </template>
      </tbody>
    </table>
    <table
      class="poster-price"
      border="0"
      cellspacing="0"
      cellpadding="5"
      v-if="!isDataset && info.brokerProductDataserviceTimesList"
    >
      <thead>
        <tr>
          <td>购买方式</td>
          <td>价格</td>
          <td>使用次数</td>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>测试</td>
          <td>免费</td>
          <td>
            <span v-if="info.limitNum == '9999'">不限次数</span>
            <span v-else>{{ info.limitNum }}</span>
          </td>
        </tr>
        <template v-if="info.brokerProductDataserviceTimesList.length">
          <tr>
            <td class="rowspan" :rowspan="info.brokerProductDataserviceTimesList.length">
              按次购买价格
            </td>
            <td>{{ getPriceByTimes(info.brokerProductDataserviceTimesList[0]) }},查得计费</td>
            <td>
              <span v-if="info.brokerProductDataserviceTimesList[0].number == '1'"> 按需 </span>
              <span v-else> {{ `${info.brokerProductDataserviceTimesList[0].number}` }}</span>
            </td>
          </tr>

          <tr v-for="i in info.brokerProductDataserviceTimesList.length - 1" :key="'ci' + i">
            <td>{{ getPriceByTimes(info.brokerProductDataserviceTimesList[i]) }},查得计费</td>
            <td>
              <span v-if="info.brokerProductDataserviceTimesList[i].number == '1'"> 按需 </span>
              <span v-else> {{ `${info.brokerProductDataserviceTimesList[i].number}` }}</span>
            </td>
            <!-- <td v-if="i > 0 && i < info.brokerProductDataserviceTimesList.length">
              {{ `&gt;${info.brokerProductDataserviceTimesList[i - 1].number}` }},
              {{ `&lt;=${info.brokerProductDataserviceTimesList[i].number}` }}
            </td>
            <td v-else>
              {{ `≥${info.brokerProductDataserviceTimesList[i].number}` }}
            </td> -->
          </tr>
        </template>

        <template v-if="info.brokerProductByTimeList.length">
          <!-- 按时长购买价格 -->
          <tr>
            <td class="rowspan" :rowspan="info.brokerProductByTimeList.length">按时长购买价格</td>
            <td>{{ getPrice(info.brokerProductByTimeList[0]) }}</td>
            <td>
              <span v-if="info.restrictNum == '9999'">不限次数</span>
              <span v-else>{{ info.restrictNum }}</span>
            </td>
          </tr>
          <tr v-for="i in info.brokerProductByTimeList.length - 1" :key="'sc' + i">
            <td>{{ getPrice(info.brokerProductByTimeList[i]) }}</td>
            <td>
              <span v-if="info.restrictNum == '9999'">不限次数</span>
              <span v-else>{{ info.restrictNum }}</span>
            </td>
          </tr>
        </template>
      </tbody>
    </table>
  </div>
</template>

<script>
import { mapGetters } from "vuex"
import { toThousandFilter } from "@/filters"
export default {
  name: "",
  props: {
    info: Object,
    isDataset: Boolean,
  },
  computed: {
    ...mapGetters(["dict_json"]),
    purchase() {
      const tmp = {}
      const { purchaseForm, brokerProductDataset } = this.info
      const tempArr = purchaseForm.split(",")
      tempArr.forEach(purchase => {
        // 全量购买
        if (purchase == 1) {
          tmp[purchase] = {
            label: "全量购买价格",
            price: toThousandFilter(brokerProductDataset.allPrice) + "元",
          }
        } else if (purchase == 2) {
          tmp[purchase] = {
            label: "按条购买价格",
            price: toThousandFilter(brokerProductDataset.byNumPrice) + "元/条",
          }
        }
      })
      return tmp
    },
    dasetTimeList() {
      const tempArr = this.info.brokerProductDataset.purchaseForm.split(",")
      if (tempArr.includes("3")) {
        return {
          label: "按时长购买价格",
          price: this.info.brokerProductByTimeList,
        }
      } else {
        return null
      }
    },
  },
  methods: {
    getPrice(v) {
      if (!v) return

      if (v.byTimePrice == "0.09") {
        return "议价"
      } else {
        return toThousandFilter(v.byTimePrice) + "元/" + this.dict_json.getLabel("byTime", v.byTime)
      }
    },
    getPriceByTimes(v) {
      if (!v) return
      if (v.price == "0.09") {
        return "议价"
      } else {
        return toThousandFilter(v.price) + this.dict_json.getLabel("priceUnit", v.priceUnit)
        // + "/次"
      }
    },
  },
}
</script>

<style lang="scss" scoped>
.poster-price {
  width: 100%;
  text-align: left;
  border-left: 1px solid #6098d0;

  td {
    padding: 6px;
    border-right: 1px solid #6098d0;
    border-bottom: 1px solid #6098d0;
  }

  thead {
    height: 43px;
    color: #94fcff;
    font-size: 18px;
    td {
      border-bottom: 1px solid #6098d0 !important;
      border-top: 1px solid #6098d0 !important;
    }
  }
}
</style>

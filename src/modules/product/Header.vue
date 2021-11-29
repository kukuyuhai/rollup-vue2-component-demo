<template>
  <div class="product-detail" v-if="baseInfo">
    <div class="product-detail__img">
      <slot name="attachment">
        <Attachment width="84" :uuid="fileId" fit="contain"></Attachment>
      </slot>
    </div>
    <div class="product-detail__mid">
      <slot name="dataInfo">
        <div class="product-detail__mid--name">{{ baseInfo.dataName }}</div>
        <div class="product-detail__mid--link">
          我的数据域：
          <a
            :href="`https://${strToLowerCase(baseInfo.dataNameEn)}.cdprs.chinadep.com`"
            target="_blank"
            class="link"
          >
            <span> https://{{ strToLowerCase(baseInfo.dataNameEn) }}.cdprs.chinadep.com</span>
          </a>
        </div>
        <div class="product-detail__mid--tag">
          <div
            class="tag-status"
            :class="dict_json.getLabel('colorType', `0${i + 1}`)"
            v-for="(item, i) in tagsList"
            :key="item"
          >
            {{ item }}
          </div>
        </div>
      </slot>
    </div>
    <div class="product-detail__count">
      <div class="product-detail__item" v-for="v in Object.keys(count)" :key="v">
        <span>{{ count[v].label }}</span>
        <span> {{ (productCount[v] || 0) | toThousandFilter }} {{ count[v].unit }} </span>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex"
import Attachment from "@/components/Attachment/index.vue"
export default {
  name: "ProductHeader",
  components: {
    Attachment,
  },
  inject: ["getFile"],
  props: {
    baseInfo: {
      type: Object,
      default: () => {},
    },
    list: {
      type: Array,
      default: () => [],
    },
    productId: {
      type: [String, Number],
      default: "",
    },
    productCount: {
      type: Object,
      default: () => {},
    },
    fileId: {
      type: [String, Number],
    },
  },
  data() {
    return {
      count: Object.freeze({
        delivery_nu: { label: "数据交付数量", unit: "条" },
        evaluate_nu: { label: "数据评价数", unit: "次" },
        product_nu: { label: "产品数量", unit: "条" },
        trade_nu: { label: "数据交易数", unit: "笔" },
        view_nu: { label: "浏览数量", unit: "次" },
      }),
    }
  },

  computed: {
    ...mapGetters(["dict_json"]),
    tagsList() {
      let temp = []
      if (this.list) {
        temp = this.list
          .filter(v => {
            return (
              v.busiType == "company_data_01" ||
              v.busiType == "company_data_02" ||
              v.busiType == "company_data_03" ||
              v.busiType == "company_data_04"
            )
          })
          .map(v => {
            return v.busiDesc
          })
      }
      return temp
    },
  },
  methods: {
    strToLowerCase(v) {
      if (v) {
        return String(v).toLowerCase()
      }
    },
  },
}
</script>

<style lang="scss" scoped>
.product-detail {
  width: 1200px;
  margin: 0 auto;
  background: #fff;
  display: flex;
  padding: 10px 20px;

  &__img {
    width: 84px;
    height: 120px;
    background-color: #f1f2f3;
  }

  &__mid {
    flex: 1;
    font-size: 14px;
    display: flex;
    flex-direction: column;
    padding: 0 20px;
    justify-content: space-around;
    &--name {
      font-size: 16px;
      color: #222;
    }

    &--link {
      font-size: 14px;
      color: #555;
    }

    &--tag {
      display: flex;
      flex-wrap: wrap;

      & .tag-status {
        margin-right: 10px;
      }
    }
  }

  &__count {
    flex-basis: 45%;
    display: flex;
    align-items: center;
    border-left: 1px solid #eaeaea;
    padding-left: 20px;
  }

  &__item {
    text-align: center;
    font-size: 14px;
    flex: 1;
    display: flex;
    flex-direction: column;

    & span:last-child {
      margin-top: 16px;
      color: #357fed;
      font-size: 18px;
      font-weight: 500;
    }
  }
}
</style>

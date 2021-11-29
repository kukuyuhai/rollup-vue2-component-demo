<template>
  <div class="common-panel">
    <level-title v-bind="$attrs" :level="4" v-on="$listeners">
      <template #right>
        <slot name="right"></slot>
      </template>
    </level-title>
    <div class="common-panel__content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import LevelTitle from "@/components/LevelTitle/index.vue"
export default {
  name: "CommonPanel",
  components: {
    LevelTitle,
  },
}
</script>

<style lang="scss" scoped>
.common-panel {
  width: 100%;
  margin: 0 auto;
  background: #fff;
  padding: 10px 20px;
  margin-top: 20px;
  &:last-child {
    margin-bottom: 20px;
  }
}
</style>

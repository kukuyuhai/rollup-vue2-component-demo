<template>
  <div
    class="level-title"
    :class="{
      'level-title__icon--no': !icon,
    }"
  >
    <svg-icon
      :style="{
        fontSize: fontSize + 'px',
        color: color,
      }"
      v-if="icon"
      :icon-class="icon"
    ></svg-icon>
    <component :is="`h${level}`" class="level-title__text">
      <template v-if="this.$slots.default">
        <slot></slot>
      </template>
      <span
        :style="{
          color: color,
          marginLeft: '6px',
        }"
        v-else
      >
        {{ text }}
      </span>
    </component>
    <template v-if="this.$slots.right">
      <slot name="right"></slot>
    </template>
  </div>
</template>
<script>
export default {
  name: "LevelTitle",
  props: {
    level: {
      type: [Number, String],
      required: true,
    },
    text: {
      type: String,
      default: "",
    },
    color: {
      type: String,
    },
    icon: String,
    fontSize: {
      type: [Number, String],
      default: 16,
    },
  },
}
</script>

<style lang="scss" scoped>
.level-title {
  position: relative;
  display: flex;
  align-items: center;

  h2,
  h2,
  h3,
  h4 {
    font-weight: bold !important;
    margin: 24px 0;
  }

  &.level-title__icon--no:before {
    content: " ";
    width: 4px;
    height: 15px;
    display: block;
    background: #357fed;
    position: relative;
    left: 0px;
    border-radius: 2px;
  }

  &__text {
    flex: 1;
  }
}
</style>

<template>
  <div class="poster-panel">
    <div class="title">{{ title }}</div>
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "PosterPanel",
  props: {
    title: {
      type: String,
    },
  },
}
</script>

<style lang="scss" scoped>
.poster-panel {
  .title {
    font-size: 18px;
    color: #94fcff;
    font-family: "FZZXHJW";
    position: relative;
    width: 72px;
    text-align: center;
    font-weight: 600;
    margin-bottom: 9px;
    margin-top: 38px;

    &:after {
      position: absolute;
      width: 100%;
      height: 8px;
      opacity: 0.2;
      background: #ffffff;
      bottom: 4px;
      left: 0;
      display: block;
      content: " ";
    }
  }
}
</style>

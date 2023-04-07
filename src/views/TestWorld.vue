<script setup lang="ts">
import SliderLeft from './home/sliderLeft/index.vue'
</script>

<template>
  <div class="box">
    <slider-left />
    <div class="main">
      <router-view></router-view>
    </div>
  </div>
</template>

<style lang="less" scoped>
.box {
  display: flex;
  position: absolute;
  left: 0;
  right: 0;
  // top: calc(var(--headerHeight) + 10px);
  top: calc(var(--headerHeight));
  bottom: 0;
  z-index: -1;
}
.main {
  padding: 40px;
  position: relative;
  width: 100%;
  max-height: calc(100vh - var(--headerHeight));
  overflow-y: scroll;
  overflow-x: hidden;
}
</style>

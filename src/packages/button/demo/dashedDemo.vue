<script setup lang="ts"></script>
<template>
  <div class="box">
    <div class="title">虚线按钮</div>
    <div class="fx">
      <c-button dashed>Default</c-button>
      <c-button type="success" dashed>success</c-button>
      <c-button type="primary" dashed>primary</c-button>
      <c-button type="info" dashed>info</c-button>
      <c-button type="warning" dashed>warning</c-button>
      <c-button type="danger" dashed>danger</c-button>
      <c-button type="danger" dashed round>danger</c-button>
    </div>
  </div>
</template>
<style lang="less" scoped>
@import '@/packages/style/commom.less';
</style>

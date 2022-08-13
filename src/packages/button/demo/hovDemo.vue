<script setup lang="ts"></script>
<template>
  <div class="box">
    <div class="title">基础</div>
    <div class="fx">
      <c-button>Default</c-button>
      <c-button type="success">success</c-button>
      <c-button type="primary">primary</c-button>
      <c-button type="info">info</c-button>
      <c-button type="warning">warning</c-button>
      <c-button type="danger">danger</c-button>
      <c-button type="danger" round>danger</c-button>
      <c-button type="text">text</c-button>
    </div>
  </div>
</template>
<style lang="less" scoped>
@import '@/packages/style/commom.less';
</style>

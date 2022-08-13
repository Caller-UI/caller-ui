<script setup lang="ts"></script>
<template>
  <div>
    <div>基本按钮</div>
    <div class="box">
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
.box {
  display: flex;
}
</style>

<script setup lang="ts"></script>
<template>
  <div>
    <div>虚线按钮</div>
    <div class="box">
      <c-button dashed>Default</c-button>
      <c-button type="success" dashed>success</c-button>
      <c-button type="primary" dashed>primary</c-button>
      <c-button type="info" dashed>info</c-button>
      <c-button type="warning" dashed>warning</c-button>
      <c-button type="danger" dashed>danger</c-button>
    </div>
  </div>
</template>
<style lang="less" scoped>
.box {
  display: flex;
}
</style>

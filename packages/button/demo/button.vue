<script setup lang="ts"></script>
<template>
  <div class="box">
    <c-button type="success">success</c-button>
    <c-button type="primary">primary</c-button>
    <c-button type="info">info</c-button>
    <c-button type="warning">warning</c-button>
    <c-button type="danger">danger</c-button>
    <c-button type="text">text</c-button>
    <c-button type="dashed">text</c-button>
    <c-button>test</c-button>
    <c-button round>test</c-button>
  </div>
</template>
<style lang="less" scoped>
.box {
  display: flex;
}
</style>

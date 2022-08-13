<script setup lang="ts">
import Hovbutton from './hovDemo.vue'
import Dashedbutton from './dashedDemo.vue'
import SizeDemo from './sizeDemo.vue'
</script>
<template>
  <div>
    <h1>按钮 Button</h1>
    <h5>按钮用来触发一些操作。(Do what you want to do!)</h5>
    <div>
      <h3>演示</h3>
      <Hovbutton />
      <Dashedbutton />
      <SizeDemo />
    </div>
  </div>
</template>
<style lang="less" scoped></style>

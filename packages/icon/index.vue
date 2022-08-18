<script setup lang="ts">
import { PropType, type VNode } from 'vue'

const props = defineProps({
  size: {
    type: String
  },
  color: {
    type: String
  },
  icon: {
    type: Object as PropType<VNode>
  }
})
</script>
<template>
  <i class="c-icon" :style="{ color: props.color, fontSize: props.size }">
    <component :is="props.icon" />
    <slot></slot>
  </i>
</template>
<style lang="less" scoped>
.c-icon {
  height: 1em;
  width: 1em;
  line-height: 1em;
  text-align: center;
  display: inline-block;
  position: relative;
  fill: currentColor;
  transform: translateZ(0);
}
.c-icon svg {
  height: 1em;
  width: 1em;
}
</style>

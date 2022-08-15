<script setup lang="ts">
import { computed } from 'vue'
import { Types, Name, Sizes } from './const'
import './Button.less'
const props = defineProps({
  type: {
    type: String,
    default: ''
  },
  size: {
    type: String,
    default: ''
  },
  round: {
    type: Boolean,
    default: false
  },
  dashed: {
    type: Boolean,
    default: false
  }
})

const cClass = computed(() => {
  return [
    Name,
    Types.includes(props.type) ? `c-button-${props.type}` : 'c-button-default',
    Sizes.includes(props.size) ? ` ${Name}-size-${props.size}` : '',
    props.round ? 'c-button-round' : '',
    props.dashed ? 'c-button-dashed' : ''
  ]
})
</script>

<template>
    <button :class="cClass">
      <slot></slot>
    </button>
</template>

<style lang="less" scoped></style>

<script setup lang="ts">
import { computed } from 'vue'
import { Types, Name, Sizes } from './const'
import './Button.less'

const props = defineProps({
  type: {
    type: String,
    default: ''
  }
})

const cClass = computed(() => {
  return [Types.includes(props.type) ? `c-button-${props.type}` : 'c-button-default']
})
</script>

<template>
  <div :class="Name">
    <button :class="cClass">
      <slot></slot>
    </button>
  </div>
</template>

<style lang="less" scoped></style>

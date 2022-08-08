<script setup lang="ts">
import { computed } from 'vue'
import { Types, Name, Sizes } from './const'
import './Button.less'

const props = defineProps({
  type: {
    type: String,
    default: ''
  },
  round: {
    type: Boolean,
    default: false
  }
})
console.log(props.round, props.type)

const cClass = computed(() => {
  return [Name, Types.includes(props.type) ? `c-button-${props.type}` : 'c-button-default', props.round ? 'c-button-round' : '']
})
</script>

<template>
  <div>
    <button :class="cClass">
      <slot></slot>
    </button>
  </div>
</template>

<style lang="less" scoped></style>

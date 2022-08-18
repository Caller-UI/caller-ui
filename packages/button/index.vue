<script setup lang="ts">
import { computed } from 'vue'
import { Types, Name, Sizes } from './const'
import './Button.less'
import loading from '../icon/loading.vue'

import { buttonEmits } from './button'
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
  },
  circle: {
    type: Boolean,
    default: false
  },
  iconPlacement: {
    type: String,
    default: 'left'
  },
  disabled: {
    type: Boolean,
    default: false
  },
  loading: {
    type: Boolean,
    default: false
  }
})
const emit = defineEmits(buttonEmits)
const handleClick = (evt: MouseEvent) => {
  emit('click', evt)
}
const cClass = computed(() => {
  return [
    Name,
    Types.includes(props.type) ? `c-button-${props.type}` : 'c-button-default',
    Sizes.includes(props.size) ? ` ${Name}-size-${props.size}` : '',
    props.round ? 'c-button-round' : '',
    props.dashed ? 'c-button-dashed' : '',
    props.circle ? 'c-button-circle' : '',
    props.disabled ? 'c-button-disabled' : '',
    props.loading ? 'c-button-loading' : ''
  ]
})
</script>

<template>
  <button :class="cClass" @click="handleClick">
    <slot v-if="iconPlacement === 'left' && props.loading === false" name="icon"></slot>
    <loading v-if="props.loading" />
    <span v-if="$slots.default" :class="`${Name}-span`"><slot></slot></span>
    <slot v-if="iconPlacement === 'right' && props.loading === false" name="icon"></slot>
  </button>
</template>

<style lang="less" scoped></style>

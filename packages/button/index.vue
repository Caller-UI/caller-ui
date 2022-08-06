<script setup lang="ts">
import { computed } from 'vue';
import { Types, Name, Sizes } from './const'
import './Button.less'

const props = defineProps({
  type: {
    type: String,
    default: ""
  }
})
console.log(props.type,Types.includes(props.type));

const cClass = computed(()=>{
  return [Name, Types.includes(props.type) ? `c-button-${props.type}` : '' ]
})

</script>

<template>
  <div :class="cClass">
    <button>
      <slot></slot>
    </button>
  </div>
</template>

<style lang="less" scoped>
</style>

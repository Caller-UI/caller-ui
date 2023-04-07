<script setup lang="ts">
import { computed, PropType } from 'vue'
import { shadowTypes } from './const'

const props = defineProps({
  title: {
    type: String,
    default: undefined
  },
  shadow: {
    type: String as PropType<shadowTypes>
  }
})

const cContent = computed(() => {
  if (props.title) {
    return 'c-card__content'
  } else {
    return 'c-card-noTitle__content'
  }
})
</script>
<template>
  <div class="c-card" :class="props.shadow ? `c-card-${props.shadow}-shadow` : ''">
    <div v-if="$slots.cover" class="c-card-cover"><slot name="cover"></slot></div>
    <div v-if="props.title" class="c-card-header">
      <div v-if="$slots.header" class="c-card-header__main">
        <slot name="header"></slot>
      </div>
      <div v-else class="c-card-header__main">{{ props.title }}</div>
      <div class="c-card-header__extra">
        <slot name="header-extra"></slot>
      </div>
    </div>
    <div v-if="$slots.default" :class="cContent"><slot></slot></div>
    <div v-if="$slots.footer" class="c-card__footer">
      <slot name="footer"></slot>
    </div>
    <div v-if="$slots.action" class="c-card__action">
      <slot name="action"></slot>
    </div>
  </div>
</template>
<style lang="less" scoped>
@import './card.less';
</style>

<script setup lang="ts">
import { IosClose, IosCheckmarkCircleOutline, IosInformationCircleOutline, IosCloseCircle } from '@vicons/ionicons4'
import { Types } from './const'
import { computed, ref, useSlots } from 'vue'

const props = defineProps({
  type: {
    type: String,
    default: 'info'
  },
  showIcon: {
    type: Boolean,
    default: false
  },
  message: {
    type: String
  },
  closable: {
    type: Boolean,
    default: false
  }
})

const visible = ref(true)

const close = () => {
  visible.value = false
}

const slot = useSlots()

const cClass = computed(() => {
  if (slot.description) {
    if (!visible.value) {
      return [Types.includes(props.type) ? `c-alert-${props.type} c-alert-with-description close-start` : 'c-alert-info']
    } else {
      return [Types.includes(props.type) ? `c-alert-${props.type} c-alert-with-description` : 'c-alert-info c-alert-with-description']
    }
  }
  return [Types.includes(props.type) ? `c-alert-${props.type}` : 'c-alert-info']
})

const closeClass = computed(() => {
  if (!visible.value) {
    return 'close-start'
  } else {
    return ''
  }
})
</script>
<template>
  <transition :class="closeClass">
    <div :class="cClass">
      <div :class="closeClass" class="c-alert-icon action" v-if="showIcon">
        <IosCheckmarkCircleOutline
          v-if="showIcon && !$slots.icon && props.type === 'success'"
          :class="[$slots.description ? `alert-icon-${props.type} c-alert-icon` : 'alert-icon-success']"
        />
        <IosInformationCircleOutline
          v-if="showIcon && !$slots.icon && (props.type === 'info' || props.type === 'warning')"
          :class="[$slots.description ? `alert-icon-${props.type} c-alert-icon` : '`alert-icon-${props.type}`']"
        />
        <IosCloseCircle
          v-if="showIcon && !$slots.icon && props.type === 'error'"
          :class="[$slots.description ? `alert-icon-${props.type} c-alert-icon` : 'alert-icon-error']"
        />
        <slot name="icon"></slot>
      </div>
      <div class="c-alert-content" :class="closeClass">
        <slot class="c-alert-message" name="message"></slot>
        <div class="c-alert-message" v-if="!$slots.message">{{ props.message }}</div>
        <slot name="description"></slot>
      </div>
      <IosClose :class="closeClass" v-if="closable" class="alert-icon-close" @click="close" style="color: rgba(0, 0, 0, 0.45)" />
    </div>
  </transition>
</template>
<style lang="less" scoped>
@import './alert.less';
</style>

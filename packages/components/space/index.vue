<script setup lang="ts">
import { ref, useSlots, h, PropType, StyleValue, type VNode } from 'vue'
import { sizeType, SpaceSize } from './const'
// import { extractList } from './extractList'
const props = defineProps({
  inline: {
    type: Boolean,
    default: false
  },
  size: {
    type: [String, Number, Array] as PropType<SpaceSize>,
    default: 'medium'
  }
})

const $slots: any = useSlots()
const slotList: any = ref([])

const list: VNode[] = $slots.default() || []
console.log($slots.default(), 1)

list.forEach((item, index) => {
  slotList.value.push(
    h(
      'div',
      {
        style: 'max-width: 100%;'
      },
      item
    )
  )
})

const setStyleGap = (size: SpaceSize): string => {
  if (size === 'small') {
    return sizeType.small
  } else if (size === 'medium') {
    return sizeType.medium
  } else if (size === 'large') {
    return sizeType.large
  } else if (typeof size === 'number') {
    return size + 'px'
  } else {
    const horizontal = size[0]
    const vertical = size[1]
    return `${horizontal}px ${vertical}px`
  }
}
console.log(setStyleGap(props.size))

const setStyle = () => {
  const styleObj: StyleValue = {}
  styleObj.gap = setStyleGap(props.size)
  styleObj.display = props.inline ? 'inline-flex' : 'flex'
  styleObj.flexFlow = 'row wrap'
  styleObj.alignItems = 'center'
  styleObj.justifyContent = 'flex-start'
  return styleObj
}

const spaceItem = h('div', { style: 'max-width: 100%;' }, slotList.value)
</script>
<template>
  <div :style="setStyle()">
    <slot></slot>
  </div>
</template>
<style lang="less" scoped></style>

<script setup lang="ts">
import { useSlots, h, PropType, StyleValue } from 'vue'
import { sizeType, SpaceSize, SpaceDirection, SpaceAlign, SpaceJustify } from './const'
// import { extractList } from './extractList'
const props = defineProps({
  inline: {
    type: Boolean,
    default: false
  },
  size: {
    type: [String, Number, Array] as PropType<SpaceSize>,
    default: 'medium'
  },
  direction: {
    type: String as PropType<SpaceDirection>,
    default: 'horizontal'
  },
  align: {
    type: String as PropType<SpaceAlign>
  },
  justify: {
    type: String as PropType<SpaceJustify>,
    default: 'start'
  }
})

const $slots: any = useSlots()

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

const setStyle = () => {
  const styleObj: StyleValue = {}
  styleObj.gap = setStyleGap(props.size)
  styleObj.display = props.inline ? 'inline-flex' : 'flex'
  styleObj.flexFlow = 'row wrap'
  styleObj.alignItems = props.align
  styleObj.justifyContent = 'flex-start'
  styleObj.flexDirection = props.direction === 'vertical' ? 'column' : undefined
  styleObj.justifyContent = props.justify
  return styleObj
}

const spaceItem = h(
  'div',
  { style: setStyle() },
  h(() =>
    $slots.default().map((item, index) =>
      h(
        'div',
        {
          style: 'max-width: 100%;'
        },
        h(() => item)
      )
    )
  )
)
</script>
<template>
  <spaceItem></spaceItem>
</template>
<style lang="less" scoped></style>

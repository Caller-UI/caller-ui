<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { CaretDownOutline } from '@vicons/ionicons5'
const props = defineProps({
  compName: {
    type: String,
    default: '',
    require: true
  },
  demoName: {
    type: String,
    default: '',
    require: true
  }
})
const codeShow = ref(false)
const sourceCode = ref('')
const isDev = import.meta.env.MODE === 'development'
onMounted(async () => {
  if (isDev) {
    sourceCode.value = (
      await import(/* @vite-ignore */ `../../../packages/components/${props.compName}/demo/zh/${props.demoName}.vue?raw`)
    ).default
  } else {
    sourceCode.value = await fetch(`../../../packages/components/${props.compName}/demo/zh/${props.demoName}.vue`).then((res) => res.text())
  }
})
</script>

<template>
  <div class="demo-box">
    <div class="show-components">
      <slot />
    </div>
    <transition name="fade">
      <highlightjs autodetect :code="sourceCode" v-show="codeShow" />
    </transition>
    <div class="demo-control" @click="codeShow = !codeShow">
      <CaretDownOutline class="c-icon-caret-bottom" />
      <span class="demo-show-title">{{ codeShow ? '隐藏代码' : '显示代码' }}</span>
    </div>
  </div>
</template>

<style lang="less" scoped>
.demo-box {
  border: 1px solid var(--borderColor);
  .show-components {
    padding: 20px;
  }
  .demo-control {
    transition: 0.3s all;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    cursor: pointer;
    border-top: 1px solid var(--borderColor);
    height: 35px;
    line-height: 35px;
    .demo-show-title {
      font-size: 14px;
      opacity: 0;
      visibility: hidden;
      transition: 0.3s all;
    }
    .c-icon-caret-bottom {
      opacity: 0.4;
      width: 16px;
      height: 16px;
      transition: 0.3s;
    }
    &:hover {
      box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
      .c-icon-caret-bottom {
        transform: translateX(-40px);
        color: var(--mainColor);
        opacity: 1;
      }
      .demo-show-title {
        opacity: 1;
        visibility: visible;
        transform: translateX(-30px);
        color: var(--mainColor);
      }
    }
  }
  margin-bottom: 30px;
}

.fade-enter-active {
  transition: all 0.1s ease-out;
}

.fade-leave-active {
  transition: all 0.1s cubic-bezier(1, 0.5, 0.8, 1);
}

.fade-enter-from,
.fade-leave-to {
  transform: translateY(-10px);
  opacity: 0.5;
}
</style>

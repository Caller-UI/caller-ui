<script setup lang="ts">
import { onMounted, ref } from 'vue'
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
    sourceCode.value = (await import(/* @vite-ignore */ `../../../packages/${props.compName}/demo/${props.demoName}.vue?raw`)).default
  } else {
    sourceCode.value = await fetch(`../../../packages/${props.compName}/demo/${props.demoName}.vue`).then((res) => res.text())
  }
})
</script>

<template>
  <div class="show-box">
    <div class="show-components">
      <slot />
    </div>
    <transition name="fade">
      <highlightjs autodetect :code="sourceCode" v-show="codeShow" />
    </transition>
    <div class="show-code-btn" @click="codeShow = !codeShow">{{ codeShow ? '隐藏代码' : '展示代码' }}</div>
  </div>
</template>

<style lang="less" scoped>
.show-box {
  width: 100%;
  padding: 20px;
  border: 1px solid var(--borderColor);
  .show-code-btn {
    text-align: center;
    cursor: pointer;
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

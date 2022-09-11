<script setup lang="ts">
import { ref } from 'vue'
import { IosBicycle } from '@vicons/ionicons4'

const handleClick = () => {
  loading.value = true
  setTimeout(() => {
    loading.value = false
  }, 2000)
}
const loading = ref<boolean>(false)
</script>
<template>
  <div>
    <c-button :loading="loading" @click="handleClick">try me</c-button>
    <c-button :loading="loading" @click="handleClick">
      <template #icon>
        <c-icon><IosBicycle /></c-icon>
      </template>
      try me
    </c-button>
    <c-button type="primary" :loading="loading" @click="handleClick">try me</c-button>
    <c-button size="large" :loading="loading" @click="handleClick">try me</c-button>
  </div>
</template>
<style lang="less" scoped></style>

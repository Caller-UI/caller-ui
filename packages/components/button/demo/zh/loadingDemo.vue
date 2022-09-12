<script setup lang="ts">
import { ref } from 'vue'
import { IosBicycle } from '@vicons/ionicons4'

const loading = ref<boolean>(false)

const handleClick = () => {
  loading.value = true
  console.log(loading.value)

  setTimeout(() => {
    loading.value = false
    console.log(loading.value)
  }, 2000)
}
</script>
<template>
  <c-space>
    <c-button :loading="loading" @click="handleClick">try me</c-button>
    <c-button :loading="loading" @click="handleClick">
      <template #icon>
        <c-icon><IosBicycle /></c-icon>
      </template>
      try me
    </c-button>
    <c-button type="primary" :loading="loading" @click="handleClick">try me</c-button>
    <c-button size="large" :loading="loading" @click="handleClick">try me</c-button>
  </c-space>
</template>

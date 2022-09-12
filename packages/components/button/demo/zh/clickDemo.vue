<script setup lang="ts">
const handelClick = () => {
  alert('点到我啦')
}
</script>
<template>
  <c-button @click="handelClick">点我</c-button>
</template>

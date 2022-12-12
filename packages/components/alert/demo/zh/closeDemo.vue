<script setup lang="ts">
const handelClose = () => {
  alert('关闭')
}
</script>
<template>
  <c-space direction="vertical">
    <c-alert message="Success类型" type="success" showIcon closable></c-alert>
    <c-alert message="Try Me" type="info" showIcon closable @close="handelClose"></c-alert>
  </c-space>
</template>

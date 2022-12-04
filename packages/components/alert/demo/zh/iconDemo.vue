<script setup lang="ts">
import { IosBasketball } from '@vicons/ionicons4'
</script>
<template>
  <c-space direction="vertical">
    <c-alert message="Success类型" type="success" showIcon></c-alert>
    <c-alert message="Info类型" type="info" showIcon></c-alert>
    <c-alert message="Warning类型" type="warning" showIcon></c-alert>
    <c-alert message="Error类型" type="error" showIcon></c-alert>
    <c-alert message="Error类型" type="info" showIcon>
      <template #icon>
        <c-icon color="#484A47">
          <IosBasketball />
        </c-icon>
      </template>
    </c-alert>
  </c-space>
</template>

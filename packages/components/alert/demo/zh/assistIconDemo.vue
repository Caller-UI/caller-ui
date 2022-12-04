<script setup lang="ts">
import { IosBasketball } from '@vicons/ionicons4'
</script>
<template>
  <c-space direction="vertical">
    <c-alert type="info" message="Wscthhh" closable showIcon>
      <template #description>
        <p>
          Success Description
          <span style="color: red">Success</span>
          Description Success Description
        </p>
      </template>
    </c-alert>
    <c-alert message="Error类型" type="info" closable showIcon>
      <template #description>
        <p>
          Success Description
          <span style="color: red">Success</span>
          Description Success Description
        </p>
      </template>
      <template #icon>
        <c-icon color="#484A47">
          <IosBasketball />
        </c-icon>
      </template>
    </c-alert>
  </c-space>
</template>

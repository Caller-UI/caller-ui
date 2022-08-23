<script setup lang="ts">
import { useLocale } from '@/hooks/index'

const { t } = useLocale()
</script>

<template>
  <c-configProvider>
    {{ t('button.submit') }}
  </c-configProvider>
</template>

<style lang="less" scoped></style>

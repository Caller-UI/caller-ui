<script setup lang="ts">
import { AlarmOutline, BeerOutline } from '@vicons/ionicons5'
</script>
<template>
  <div>
    <c-button type="text">我是文本</c-button>
    <c-button type="text">
      <template #icon>
        <c-icon>
          <AlarmOutline />
        </c-icon>
      </template>
      该起床搬砖啦
    </c-button>
    <c-button type="text" icon-placement="right">
      <template #icon>
        <c-icon>
          <BeerOutline />
        </c-icon>
      </template>
      放松一会吧
    </c-button>
  </div>
</template>

<script setup lang="ts">
import { Heart } from '@vicons/ionicons5'
</script>
<template>
  <div>
    <c-button type="text">It's a no ending story</c-button>
    <c-button type="text">
      <template #icon>
        <c-icon color="red">
          <Heart />
        </c-icon>
      </template>
      I loved a girl
    </c-button>
    <c-button type="text" icon-placement="right">
      <template #icon>
        <c-icon color="purple">
          <Heart />
        </c-icon>
      </template>
      I said her face look beauty
    </c-button>
  </div>
</template>

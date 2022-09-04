<script setup lang="ts">
import { GameControllerOutline, GameController } from '@vicons/ionicons5'
</script>
<template>
  <div>
    <c-icon size="40px">
      <game-controller-outline />
    </c-icon>
    <c-icon size="40px" color="#0e7a0d">
      <game-controller />
    </c-icon>
    <c-icon size="40px" :icon="GameController" />
  </div>
</template>

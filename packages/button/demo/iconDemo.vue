<script setup lang="ts">
import { AirplaneTakeOff16Regular } from '@vicons/fluent'
</script>

<template>
  <div>
    <c-button circle>
      <template #icon>
        <c-icon><AirplaneTakeOff16Regular /></c-icon>
      </template>
    </c-button>
    <c-button circle type="success">
      <c-icon><AirplaneTakeOff16Regular /></c-icon>
    </c-button>
    <c-button circle type="warning">
      <template #icon>
        <c-icon><AirplaneTakeOff16Regular /></c-icon>
      </template>
    </c-button>
    <c-button round type="primary">
      <template #icon>
        <c-icon><AirplaneTakeOff16Regular /></c-icon>
      </template>
    </c-button>
    <c-button type="info">
      <template #icon>
        <c-icon><AirplaneTakeOff16Regular /></c-icon>
      </template>
    </c-button>
  </div>
</template>

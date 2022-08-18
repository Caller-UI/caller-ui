<script setup lang="ts">
import { ref } from 'vue'
import ComponentsItems from '@/utils/components.json'
const ComponentsCurrentIndex = ref<number>()
const ComponentsCurrentName = ref<string>('')
const ComponentClick = (item: string, index: number) => {
  ComponentsCurrentIndex.value = index
  ComponentsCurrentName.value = item
}
</script>
<template>
  <div class="sliderbox">
    <ul v-for="(components, index) in ComponentsItems" :key="index">
      <span class="type">{{ `${components.text} (${components.children.length})` }}</span>
      <li
        v-for="(item, ind) in components.children"
        :key="ind"
        :class="{ active: ComponentsCurrentIndex === ind && ComponentsCurrentName === item.text }"
        @click="ComponentClick(item.text, ind)"
      >
        <a href="javascript:;">{{ item.text }}</a>
      </li>
    </ul>
  </div>
</template>
<style lang="less" scoped>
.sliderbox {
  max-height: calc(100vh - var(--headerHeight));
  display: flex;
  flex-direction: column;
  width: 260px;
  background: inherit;
  padding: 10px 10px 0px 20px;
  overflow-y: auto;
  transition: all 0.5s;
  &::-webkit-scrollbar-thumb {
    display: none;
  }
  &:hover {
    &::-webkit-scrollbar-thumb {
      display: block;
    }
  }
}
ul {
  margin-top: 10px;
}
li {
  transition: all 0.5s;
  opacity: 0.8;
  font-size: 15px;
  border-radius: 4px;
  margin-top: 5px;
  padding: 8px 0 8px 40px;
  cursor: pointer;
  a {
    text-decoration: none;
    color: var(--doctextColor);
  }
  &:hover {
    opacity: 1;
    background-color: var(--sliderLiBgColor);
  }
}
.type {
  margin-left: 25px;
  font-size: 14px;
  color: rgb(118, 124, 130);
}
.active {
  background-color: var(--sliderLiBgColor);
  a {
    color: #18a058;
  }
}
</style>

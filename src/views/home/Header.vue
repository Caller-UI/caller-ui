<script setup lang="ts">
import { menu, system } from './const'
import { searchIndexMap } from '@/utils/IndexMap'
import { ref } from 'vue'
import router from '@/router'

type Isearch = {
  text: string
  url: string
}
const menuCurrent = ref<number>()
const systemCurrent = ref<number>()
const searchListCurrent = ref<number>(0)
const searchVal = ref<string>('')
const searchList = ref<Isearch[]>([])
const searchFlag = ref<boolean>(false)
const menuClick = (index: number) => {
  menuCurrent.value = index
}
const systemClick = (index: number) => {
  systemCurrent.value = index
}

const searchChange = () => {
  if (searchVal.value) {
    searchList.value = searchIndexMap(searchVal.value)
  } else {
    searchList.value = []
  }
}
const listEnter = (index: number) => {
  searchListCurrent.value = index
}
const listActive = (item: Isearch) => {
  router.push(item.url)
  searchVal.value = ''
  searchList.value = []
}
// const searchBlur = () => {
//   searchFlag.value = false
// }
const searchFocus = () => {
  searchFlag.value = true
}
</script>
<template>
  <div class="box">
    <div>icon</div>
    <div class="menuBox">
      <div v-for="(item, index) in menu" :key="index" class="menu" @click="menuClick(index)">
        <span :class="{ menuActive: menuCurrent === index }">{{ item }}</span>
      </div>
      <div class="searchBox">
        <input type="text" placeholder="搜索" @input="searchChange" @focus="searchFocus" @blur="searchBlur" v-model="searchVal" />
        <ul class="list" :class="{ searchBlur: !searchFlag }" v-if="searchList.length !== 0">
          <li
            v-for="(item, index) in searchList"
            :key="index"
            :class="{ searchListActive: searchListCurrent === index }"
            @mouseenter="listEnter(index)"
            @click="listActive(item)"
          >
            {{ item.text }}
          </li>
        </ul>
      </div>
    </div>
    <div class="systemBox">
      <div v-for="(item, index) in system" :key="index" class="system" :class="{ systemActive: systemCurrent === index }">
        <span @click="systemClick(index)">{{ item }}</span>
      </div>
    </div>
  </div>
</template>
<style lang="less" scoped>
@import './index.less';
</style>

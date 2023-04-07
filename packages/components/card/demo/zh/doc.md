<script setup lang="ts">
import BaseDemo from './baseDemo.vue'
import CoverDemo from './coverDemo.vue'
import SlotDemo from './slotDemo.vue'
import NoTitleDemo from './noTitleDemo.vue'
import ShadowDemo from './shadowDemo.vue'
</script>

# 卡片 Card   
<br>

## 演示

### 基础

基础卡片

<show-box comp-name="card" demo-name="baseDemo">
  <BaseDemo/>
</show-box>

### 封面

卡片可以有封面。

<show-box comp-name="card" demo-name="coverDemo">
  <CoverDemo />
</show-box>

### 插槽

卡片有很多插槽，希望能帮你少写点代码。

<show-box comp-name="card" demo-name="slotDemo">
  <SlotDemo />
</show-box>

### 没有标题

谁说卡片一定要有标题呢?

<show-box comp-name="card" demo-name="noTitleDemo">
  <NoTitleDemo />
</show-box>

### 卡片阴影

加个阴影更加魅力?

<show-box comp-name="card" demo-name="shadowDemo">
  <ShadowDemo />
</show-box>


## API
<br>

### Card Props

<div class='c-docTable'>

| 名称 | 类型 | 默认值 | 说明 | 版本 |
| --- | --- | --- | --- | --- |
| title | `string` | `undefined` | 卡片的标题 |  |
| shadow | `always/hover` | `undefined` | 设置阴影显示时机 |  |


</div>


</div>

### Card Slots

<div class="c-docTable">

| 名称    | 参数 | 说明       |
| ------- | ---- | ---------- |
| cover | `()` | 覆盖内容 |
| header    | `()` | 头部内容 |
| header-extra    | `()` | 头部额外内容 |
| default    | `()` | 卡片内容 |
| footer    | `()` | 底部内容 |
| action    | `()` | action |

</div>

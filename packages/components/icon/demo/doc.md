<script setup lang='ts'>
import BaseDemo from './baseDemo.vue'
import DivDemo from './divDemo.vue'
</script>

# 图标 Icon 
<br>

caller-ui 推荐使用 [xicons](https://www.xicons.org/) 作为图标库。

## 演示

### 基础用法

<show-box comp-name="icon" demo-name="baseDemo">
  <BaseDemo/>
</show-box>

### 自定义图标

将自定义 SVG 放入图标。（确保设定了 SVG 的 viewBox 属性）

<show-box comp-name="icon" demo-name="divDemo">
  <DivDemo/>
</show-box>

### 带背景色的图标 

有的时候加个背景显得没那么孤单。

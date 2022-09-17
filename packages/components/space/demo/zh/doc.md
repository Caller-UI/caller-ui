<script setup lang="ts">
import BaseDemo from './baseDemo.vue'
import AligncenterDemo from './aligncenterDemo.vue'
import VerticalDemo from './verticalDemo.vue'
import EndDemo from './endDemo.vue'
import BetweenDemo from './betweenDemo.vue'
import AroundDemo from './aroundDemo.vue'
import CenterDemo from './centerDemo.vue'
</script>

# 间距 Space
##### 非常好用!
<br>

## 演示

### 基础用法

##### 相邻组件水平间距。

<show-box comp-name="space" demo-name="baseDemo">
  <BaseDemo/>
</show-box>

### 居中用法

##### 相邻组件垂直居中。

<show-box comp-name="space" demo-name="aligncenterDemo">
  <AligncenterDemo/>
</show-box>

### 垂直

##### 相邻组件垂直间距。

<show-box comp-name="space" demo-name="verticalDemo">
  <VerticalDemo/>
</show-box>

### 尾部

##### 相邻组件从尾部。

<show-box comp-name="space" demo-name="endDemo">
  <EndDemo/>
</show-box>

### 分散

##### 相邻组件分散。

<show-box comp-name="space" demo-name="betweenDemo">
  <BetweenDemo/>
</show-box>

### 围绕

##### 相邻组件空间围绕。

<show-box comp-name="space" demo-name="aroundDemo">
  <AroundDemo/>
</show-box>

### 从中间

##### 相邻组件中间。

<show-box comp-name="space" demo-name="centerDemo">
  <CenterDemo/>
</show-box>

## API
<br>

### Space Props

<div class='c-table'>

| 名称 | 类型 | 默认值 | 说明 | 版本 |
| --- | --- | --- | --- | --- |
| align | `'start' \| 'end' \| 'center' \| 'baseline' \| 'stretch'` | `undefined` | 垂直排列方式 |  |
| inline | `boolean` | `false` | 是否为行内元素 |  |
| justify | `'start' \| 'end' \| 'center' \| 'space-around' \| 'space-between' \| 'space-evenly'` | `'start'` | 水平排列方式 | `'space-evenly'` 2.28.3 |
| size | `'small' \| 'medium' \| 'large' \| number \| [number, number]` | `'medium'` | 为数字时，是水平和垂直间距；为数组时，是 [水平间距, 垂直间距] |  |
| direction | `'vertical' \| 'horizontal'` | `horizontal` | 是否垂直布局 |  |

</div>
<script setup lang="ts">
import BaseDemo from './baseDemo.vue'
import SizeDemo from './sizeDemo.vue'
import DashedDemo from './dashedDemo.vue'
import ShapeDemo from './shapeDemo.vue'
import IconDemo from './iconDemo.vue'
import TextDemo from './textDemo.vue'
import DisabledDemo from './disabledDemo.vue'
import ClickDemo from './clickDemo.vue'
import LoadingDemo from './loadingDemo.vue'
</script>

# 按钮 Button   
<br>

按钮用来触发一些操作。

## 演示

### 基础

按钮的 `type` 分别为 `default`、`success`、`primary`、`info`、`warning` 、`danger` 和 `text`

<show-box comp-name="button" demo-name="baseDemo">
  <BaseDemo/>
</show-box>


### 虚线按钮

使用 `dashed` 来使用虚线按钮

<show-box comp-name="button" demo-name="dashedDemo">
  <DashedDemo/>
</show-box>

### 尺寸

有`small`、`normal`和`big`尺寸

<show-box comp-name="button" demo-name="sizeDemo">
  <SizeDemo/>
</show-box>

### 形状

有`circle`、`round`和`default`三种形状

<show-box comp-name="button" demo-name="shapeDemo">
  <ShapeDemo/>
</show-box>

### 图标

<show-box comp-name="button" demo-name="iconDemo">
  <IconDemo/>
</show-box>

### 文本按钮

就是文本按钮啊

<show-box comp-name="button" demo-name="textDemo">
  <TextDemo/>
</show-box>

### 禁用

哒咩哒咩哒咩！

<show-box comp-name="button" demo-name="disabledDemo">
  <DisabledDemo/>
</show-box>

### 事件

处理按钮的事件。

<show-box comp-name="button" demo-name="clickDemo">
  <ClickDemo/>
</show-box>

### 加载中

按钮有加载状态。

<show-box comp-name="button" demo-name="loadingDemo">
  <LoadingDemo/>
</show-box>

## API
<br>

### Button Props

<div class='c-table'>

| 名称 | 类型 | 默认值 | 说明 | 版本 |
| --- | --- | --- | --- | --- |
| circle | `boolean` | `false` | 按钮是否为圆形 |  |
| color | `string` | `undefined` | 按钮颜色（支持形如 `#FFF`， `#FFFFFF`， `yellow`，`rgb(0, 0, 0)` 的颜色） |  |
| dashed | `boolean` | `false` | 按钮边框是否为虚线 |  |
| disabled | `boolean` | `false` | 按钮是否禁用 |  |
| icon-placement | `'left' \| 'right'` | `'left'` | 按钮中图标的位置 |  |
| loading | `boolean` | `false` | 按钮是否显示加载状态 |  |
| round | `boolean` | `false` | 按钮是否显示圆角 |  |
| size | `'small' \| 'normal' \| 'large'` | `'normal'` | 按钮的尺寸 |  |
| secondary | `boolean` | `false` | 是否是次要按钮 |  |
| strong | `boolean` | `false` | 按钮文字是否加粗 |  |
| text | `boolean` | `false` | 是否显示为文本按钮 |  |
| type | `'default' \| 'primary' \| 'success' \| 'info' \| 'warning' \| 'danger'` | `'default'` | 按钮的类型 |  |

</div>

### ButtonGroup Props

<div class="c-table">

| 名称 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| size | `'small' \| 'normal' \| 'large'` | `normal` | 在组内的按钮的尺寸。如果设定，内部的按钮尺寸将不生效 |

</div>

### Button Slots

<div class="c-table">

| 名称    | 参数 | 说明       |
| ------- | ---- | ---------- |
| default | `()` | 按钮的内容 |
| icon    | `()` | 按钮的图标 |

</div>

<script setup lang="ts">
import BaseDemo from './baseDemo.vue'
import IconDemo from './iconDemo.vue'
import CloseDemo from './closeDemo.vue'
import AssistDemo from './assistDemo.vue'
import AssistIconDemo from './assistIconDemo.vue'
</script>

# 警示信息 Alert   
##### 有啥想说的就说吧
<br>


## 演示

### 基础

告警提示的 `type` 分别为 `success`、`info`、`warning`和`error`

<show-box comp-name="alert" demo-name="baseDemo">
  <BaseDemo/>
</show-box>

### 图标

是否显示辅助图标

<show-box comp-name="alert" demo-name="iconDemo">
  <IconDemo/>
</show-box>

### 可以关闭

可以平滑的关掉

<show-box comp-name="alert" demo-name="closeDemo">
  <CloseDemo/>
</show-box>

### 带有辅助性文字

Maybe something else you want to say

<show-box comp-name="alert" demo-name="assistDemo">
  <AssistDemo/>
</show-box>

### 带有辅助性文字和图标

加了个图标而已

<show-box comp-name="alert" demo-name="assistIconDemo">
  <AssistIconDemo/>
</show-box>

## API
<br>

### Alert Props

<div class='c-docTable'>

| 名称 | 类型 | 默认值 | 说明 | 版本 |
| --- | --- | --- | --- | --- |
| type | `string` | `info` | 指定警告提示的样式，有四种选择 `success`，`info` ，`warning`，`error`|  |
| showIcon | `boolean` | `false` | 是否显示辅助图标 |  |
| message | `string` \| `slot` | `false` | 警告提示内容 |  |
| closable | `boolean` | `false` | 是否显示关闭按钮 |  |
| icon | `slot` | `undefind` | 自定义图标，要和showIcon一起使用 |
| description | `slot` | `undefind` | 辅助性文字 |  |

</div>

</div>

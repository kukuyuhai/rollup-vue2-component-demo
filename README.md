> 该文件夹下面存放涉及到业务的公用模块组件。

| 文件夹名称 | 描述         | 包含组件功能                           |
| ---------- | ------------ | -------------------------------------- |
| common     | 通用组件     | 产品 panel                             |
| http       | API 说明文档 | headers，request,body,apiExamle        |
| product    | 产品描述相关 | 基础信息、产品说明书、数据产品生命周期 |
| listed     | 挂牌业务相关 | 使用条件                               |
| tryuse     | 样例试用     | --                                     |

## 样例试用

样例试用使用

```
// step1:
import TryUse from "@modules/tryuse"

// step2:
components: {
++ TryUse,
},

返回字段不统一
// step3:
<template>
++ <try-use />
</template>
```

#### 组件属性

| 属性          | 说明                                                                           | 类型                    | 默认值    |
| ------------- | ------------------------------------------------------------------------------ | ----------------------- | --------- |
| id            | 接口调用需要使用的 id                                                          | String\| Number         | ""        |
| filterPreview | 对需要预览的数据过滤,该方法接收一个数组（接口请求的预览数据）,需要返回一个数组 | Function                | -         |
| fileterDistr  | 对分布数据的过滤,该方法接收一个数组（接口请求的分布数据）,需要返回一个数组     | Function                | -         |
| activeTab     | 可以控制默认显示哪一个 tab                                                     | 'preview'\|'distribute' | 'preview' |
| showTab       | 可以控制 tab 是否显示，可以配合 activeTab 属性一起使用，只展示部分数据         | Boolean                 | true      |

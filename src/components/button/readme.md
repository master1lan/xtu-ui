# 按钮组件 Button

## 介绍

//TODO:这里写介绍

## 使用

```ts
// TODO：这里写使用
```

## api

| 参数          | 说明                                                         | 类型      | 默认值    |
| ------------- | ------------------------------------------------------------ | --------- | :-------- |
| type          | button类型，可选值为`default`、`primary`、`warning`五种类型  | `string`  | `default` |
| size          | button尺寸，可选值为`small`、`default`、`large`3种类型       | `string`  | `default` |
| disabled      | 禁用button                                                   | `boolean` | `false`   |
| icon          | button的图标                                                 | `URL()`   | `none`    |
| icondirection | 图标的位置，可选值为`before`和`after`，仅当icon值有效情况下生效 | `string`  | `beforce` |
| shape         | button形状，可选值为`square`、`round`和`circle`              | `string`  | `round`   |
| loading       | button加载状态                                               | `boolean` | `false`   |
| loadinfo      | button加载文字                                               | `string`  | `loading` |

## 使用逻辑

* 当loading为true时，按钮显示加载文字，如有图标也显示图标。当loading被撤销时

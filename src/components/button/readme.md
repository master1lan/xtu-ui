# 按钮组件 Button

## 介绍

//TODO:这里写介绍

## 使用

```ts
// TODO：这里写使用
```

## api

| 参数          | 说明                                                         | 类型        | 默认值    |
| ------------- | ------------------------------------------------------------ | ----------- | :-------- |
| 块级按钮      | 与父级元素等宽按钮，添加block即可                            | single para | none      |
| type          | button类型，可选值为`default`、`primary`、`warning`五种类型  | `string`    | `default` |
| size          | button尺寸，可选值为`small`、`default`、`large`3种类型       | `string`    | `default` |
| disabled      | 禁用button                                                   | `boolean`   | `false`   |
| icon          | button的图标                                                 | `URL()`     | `none`    |
| icondirection | 图标的位置，可选值为`before`和`after`，仅当icon值有效情况下生效 | `string`    | `beforce` |
| shape         | button形状，可选值为`square`、`round`                        | `string`    | `round`   |
| loading       | button加载状态                                               | `boolean`   | `false`   |
| loadinfo      | button加载文字                                               | `string`    | `loading` |

## 使用逻辑

* 当loading为true时，按钮显示加载文字，如有图标也显示图标。当loading不存在或者为false时显示正常文字和图标。loading值应该由外部进行修改。

  > 为什么loading要显示传入true？这是为了兼容框架，以react为例 <Element loading={true} />，如果使用原生传参<element loading />则容易增加心智负担。

* 当disabled为true时，按钮hover、active、focus等伪类失效，点击事件也应该失效。
* 为了支持客制化，大部分属性都采用css3变量定义，可以自行在伪类:host中赋值。

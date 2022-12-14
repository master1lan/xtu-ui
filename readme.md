# 目录结构

- components 放组件文件，按照每个组件一个单独文件夹规范
- docs 作为文档，到时候找个模板渲染一下，主要是介绍怎么使用组件以及 api
- utils 作为工具库，感觉可以按照工具不同再创建文件夹
- example文件夹放示例，比如和react结合，vue结合
- test文件夹用来测试组件，使用dev server开发

# 技术选型
- less with css module
- typescript
- webpack 打包
- pnpm
# 组件
优先写比较简单的组件，比如button，input。
# 组件编写规范
1. 在components文件夹下面新开文件夹，比如button。
2. 样式和代码隔离，建议样式文件名为xxx.module.less
3. 默认导出为同名组件，其他组件可自行导出。
4. 以button为例，默认导出Button组件，其中Button组件内部使用的Button-primary、Button-disable等组件可自行导出；即默认导出的组件应该由其他导出的组件实现而非重新实现。
5. 导出组件的名字首字母大写，多名词使用-间隔，比如Button-primary。
6. 工具类函数应该使用下划线进行命名，比如fn_disable。
7. 如果某个工具函数只在某个组件中使用，则应该在同级文件夹下新建文件，比如默认导出组件所在文件夹为xxx/index.ts，则样式存放于xxx/xxx.module.less中，工具函数存放于xxx/tools.ts中，其他如Button-primary等组件代码可存放于index.ts或者新开文件，但应该保证在index.ts中导出，这样在后期引用时可以直接以下方式使用。
```js
import Button,{Button-primary} from "components/button";
```


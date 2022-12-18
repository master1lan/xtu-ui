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

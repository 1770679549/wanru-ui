# wanru-ui
├─ build         // 编辑打包脚本目录，用于存放脚本文件
│  ├─ rollup.config.js
├─ docs          // 文档目录，用于生成 vuepress 文档页面
│  ├─ .vuepress
│  ├─ guide
│  ├─ README.md      
├─ examples      // 原 src 目录，改成 examples 用于示例展示
│  ├─ App.vue
│  ├─ main.ts
├─ packages      // 新增 packages 目录，用于编写存放组件，如button
│  ├─ button
│  ├─ index.ts
├─ typings      // 新增 typings 目录，用于存放 .d.ts 文件，把shims-vue.d.ts移到这里
│  ├─ shims-vue.d.ts
├─ .npmignore    // 新增 .npmignore 配置文件
├─ vue.config.js // 新增 vue.config.js 配置文件
## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

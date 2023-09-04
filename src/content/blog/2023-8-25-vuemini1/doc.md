---
title: "Vue3源码学习 - 1.搭建项目雏形"
description: "Vue3源码学习"
pubDate: "Jul 02 2023"
heroImage: "http://img.blog.loli.wang/2023-8-25-vuemini1/01.png"
tags:
    - Vue
    - Vue3源码学习
    - Vue3源码学习 - 1.搭建项目雏形
---

# Vue3 源码准备

项目项目源码地址：[itmowang/mini-vue](https://github.com/itmowang/mini-vue)

### 项目所用包管理工具请一切使用 PNPM
``` bash 
npm install pnpm -g
```

### 项目目录结构
```bash
packages/ 
┣ compiler-core/  # 编译器核心模块
┃ ┣ src/
┃ ┃ ┗ index.ts
┃ ┗ README.md
┣ compoler-dom/  # 浏览器部分编译模块
┃ ┣ src/
┃ ┃ ┗ index.ts
┃ ┗ README.md
┣ reactivity/    # 响应性模块
┃ ┣ src/
┃ ┃ ┗ index.ts
┃ ┗ README.md
┣ runtime-core/  # 运行时核心模块
┃ ┣ src/
┃ ┃ ┗ index.ts
┃ ┗ README.md
┣ runtime-dom/   # 浏览器部分运行时模块
┃ ┣ src/
┃ ┃ ┗ index.ts
┃ ┗ README.md
┣ shared/        # 共享公共方法模块
┃ ┣ src/
┃ ┃ ┗ index.ts
┃ ┗ README.md
┗ vue/           # 打包测试项目整体入口模块
  ┣ src/
┃ ┃ ┗ index.ts
  ┗ README.md

```

#### 安装Typescript

```

 pnpm install typescript

 tsc --init # 生成配置文件

```

``` bash 
{
  // 编辑器配置
  "compilerOptions": {
    // 根目录
    "rootDir": ".",
    // 严格模式标志
    "strict": true,
    // 指定类型脚本如何从给定的模块说明符查找文件。
    "moduleResolution": "node",
    // https://www.typescriptlang.org/tsconfig#esModuleInterop
    "esModuleInterop": true,
    // JS 语言版本
    "target": "es5",
    // 允许未读取局部变量
    "noUnusedLocals": false,
    // 允许未读取的参数
    "noUnusedParameters": false,
    // 允许解析 json
    "resolveJsonModule": true,
    // 支持语法迭代：https://www.typescriptlang.org/tsconfig#downlevelIteration
    "downlevelIteration": true,
    // 允许使用隐式的 any 类型（这样有助于我们简化 ts 的复杂度，从而更加专注于逻辑本身）
    "noImplicitAny": false,
    // 模块化
    "module": "esnext",
    // 转换为 JavaScript 时从 TypeScript 文件中删除所有注释。
    "removeComments": false,
    // 禁用 sourceMap
    "sourceMap": false,
    // https://www.typescriptlang.org/tsconfig#lib
    "lib": ["esnext", "dom"],
  },
  // 入口
  "include": ["packages/*/src"]
}
```

### 安装rollup 打包工具

``` bash
pnpm install rollup

pnpm install @rollup/plugin-node-resolve # 模块导入路径补全

pnpm install @rollup/plugin-commonjs # 将代码引用转换为 es2015

pnpm install @rollup/plugin-typescript # ts 支持

pnpm install tslib 
```

```

import resolve from '@rollup/plugin-node-resolve'
import commonjs from '@rollup/plugin-commonjs'
import typescript from '@rollup/plugin-typescript'

// rollup的配置文件
export default [
  {
    // 入口文件
    input: 'packages/vue/src/index.ts',
    // 打包的输出文件
    output: [
      {
        // 开启sourcemap
        sourcemap: true,
        file: 'packages/vue/dist/vue.js',
        format: 'iife',
        name: 'Vue'
      }
    ],
    plugins: [
      // ts 支持
      typescript({
        sourceMap: true
      }),
      // 模块导入路径补全
      resolve(),
      // commonjs 模块转换成 es2015
      commonjs()
    ]
  }
]


```

在package.json文件中新加一个scripts

```
    "build":"rollup -c -w"
```
如果出现以下这样证明成功了

![rollup打包成功](http://img.blog.loli.wang/2023-8-25-vuemini1/02.png)

项目的雏形，一个标准的monorepo项目。
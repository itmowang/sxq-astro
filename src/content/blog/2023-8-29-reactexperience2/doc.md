---
title: "React之路 - 第二篇 "
description: "React之路 - 知识累计篇"
pubDate: "Jul 02 2023"
heroImage: "http://img.blog.loli.wang/2023-8-29-reactexperience2/01.png"
tags:
    - React
    - 学习折腾
    - React之路 - 第二篇
---


也算是用React写过几个项目了，不管是实际业务上面感觉都有一定的把握。特此准备写一个脚手架项目模板。

## 项目准备
```bash
建立 react-admin 文件夹

pnpm init 

# 安装依赖 
pnpm add typescript
pnpm add vite 
pnpm add react 
pnpm add react-router-dom
pnpm add @vitejs/plugin-react-swc

# 生成ts配置文件 
tsc --init
```

创建 **vite.config.ts** 文件

``` bash

import { defineConfig, PluginOption } from "vite";
import react from "@vitejs/plugin-react-swc";

export default defineConfig({
  resolve: {
    alias: {
      "@": "/src",
    },
  },
  plugins: [react()] as PluginOption[],
  server: {
    port: 8081,
  },
  preview: {
    port: 3000,
  },
});

```

.......可能介绍不完了 原本打算边写边做记录的 发现代码量和细节太多了

### React Admin

源自于想后续去写一些小的项目，提前给自己写一套模板，利用了空闲时间抽出来了基础部分，方便后续DIY。( 不适应用于开发，参考学习！ )

依赖

``` bash
  - react (react18)
  - react-router (6x版本)
  - redux
  - antd
  - axios
  - react-query
  - less
  - redux-persist
  - rematch
  - rematch/persist 
  - typescript
  - mock
  - vite
```

预览

![切图1](http://img.blog.loli.wang/2023-8-29-reactexperience2/01.png)

![切图2](http://img.blog.loli.wang/2023-8-29-reactexperience2/02.png)


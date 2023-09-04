---
title: "css新单位dvh，svh 解释"
description: "css新单位dvh，svh 解释"
pubDate: "2023-8-30　23:27:24"
heroImage: "http://img.blog.loli.wang/2023-08-30-cssSvhDvh/03.png"
tags:
    - css
    - 学习折腾
    - css新单位dvh，svh 解释
    - dvh，svh
---

## 什么是vh，vw

在css中 `vh` 表示窗口视图的高度百分比,  `vw` 表示窗口视图的宽度度百分比 , `1vh` 等于窗口视图高度 `1%`，而`1vw` 代表视图宽度的`1%` ，一般我们使用 `100vh` 来自定义我们的视图大小的高度，固定为100%，他对响应式是非常适用，因为他会根据窗口的大小自动适应尺寸。

![切图1](http://img.blog.loli.wang/2023-08-30-cssSvhDvh/01.png)

### 遇见问题

发现新项目模板平板上会出现白屏溢出出现滚动条！！！**不止是高度，宽度也是这样 会出现一定的问题**

![切图2](http://img.blog.loli.wang/2023-08-30-cssSvhDvh/02.png)

### 解决方案

为了解决这个方案出现了新的单位 `dvh` `svh`, 他们在移动端兼容上面会经常用到。也会对移动端进行一定的兼容


参考:
[MDN - CSS](https://developer.mozilla.org/en-US/docs/Mozilla/Firefox/Releases/101)
   
---
title: "JS之多线程Web Worker API"
description: "JS之多线程Web Worker API"
pubDate: "2023-8-31 23:27:24"
heroImage: "http://img.blog.loli.wang/2023-8-23-WebWorker/01.png"
tags:
    - Web Worker
    - 学习折腾
---

## 为什么需要 Web Worker

由于 JavaScript 语言用的是单线程，同一时刻只能做一件事， 如果又多个同步任务执行完之前，下方代码不会执行。造成了堵塞，页面无响应。

但如果把这段代码放到 Web Worker 中执行，这段逻辑在执行中依然可以执行下面的代码，用户的操作也就可以正常响应了

## 什么是 Web Worker

Web Worker 为 Web 内容在后台线程中运行脚本提供了一种简单的方法。线程可以执行任务而不干扰用户界面。但是他不可以操作 dom

## Web Worker 的使用限制

### 同源限制

    分配给 Worker 线程运行的脚本文件，必须与主线程的脚本文件同源。

### 文件限制

    Worker 无法读取本地文件('file://') 他加载的协议必须要来自网络

### 通信限制

    Worker 线程所仔的全局对象，与主线程不一样，区别是
    1. 无法读取主线程所在的网页 DOM 对象
    2. 无法使用 document 、window 、parent 这些对象

    Worker 线程和主线程不在同一个环境，他们不能直接通信，必须通过消息完成 `postMessage` 和 `onMessage`


### 脚本限制

Worker 线程不能使用 alert() 和 confirm() 方法 ，但是可以使用 ajax 和定时器 setTimeout 等 API

## 基本使用

创建线程   

``` bash
const worker = new Worker(aURL, options);
```

`worker.postMessage` 向 worker 内部作用域发送一共消息，消息可以由JavaScript任何对象组成

`worker.terminate`  立刻终止worker。该方法并不会等待woker去完成剩余的操作，会立马停止

`worker.onmessage` 接收到消息会立马触发message消息

`worker.onerror` 当worker出现运行中错误时。会被调用


``` bash

worker.addEventListener('error', function (e) {
    console.log(e.message) // 可读性良好的错误消息
    console.log(e.filename) // 发生错误的脚本文件名
    console.log(e.lineno) // 发生错误时所在脚本文件的行号
})

```

## 多数使用场景
```
    - 打包压缩 另外开辟线程去处理
    - 导出图片太大 另外开辟线程去处理
    - 压缩图片等等
    ....
```


相关文档

[MDN - Web Workers API](https://developer.mozilla.org/zh-CN/docs/Web/API/Web_Workers_API/Using_web_workers)
   
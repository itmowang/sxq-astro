---
title: "JS 微任务和宏任务 "
description: "JS 微任务和宏任务"
pubDate: "Jul 02 2023"
heroImage: "http://img.blog.loli.wang/2023-8-22-EventLoop/01.awebp"
tags:
 - 微任务
 - 宏任务
 - 同步异步
 - Promise
 - 学习折腾
---

### JS 是单线程

js 特性单线程，js 是主要和用户互动，和操作 DOM，决定了他只能是个单线程，否则会出现很复杂的同步问题 。 单线程就意味着，所有任务必须要排队执行，只有执行完前面的，后面的才会执行， 如果前一个任务消耗时间很长， **后面的任务就必须等待前面的任务等着**。

### JS 中的同步异步

同步

    必须要从上至下执行完毕，后一个任务必须要等待上一个任务执行完毕

异步

    前一个任务没有执行完， 没有关系 ， 他也会执行下一个任务，直到执行结束


### 微任务和宏任务

    对同步异步有一定的划分后， 已经知道同步任务是按顺序执行，从上至下。
那么异步任务也有他的执行顺序的， 他也是从上至下， 但是在异步任务里，还有进一层的划分，就是微任务和宏任务，**[微任务比宏任务优先执行]**

#### 微任务代表
    process.nextTick、 Promise、 MutationObserver 等


#### 宏任务代表
    setTimeout、 setInterval、 setImmediate、 IO操作等

注意： Promise有个特殊性，**Promise构造函数中函数体的代码都是立即执行的**，而Promise.then() 和 Promise.catch() 属于微任务， 也就是resolve() 和reject()

![掘金补图](http://img.blog.loli.wang/2023-8-22-EventLoop/01.awebp)


#### 参考资料

掘金-辉夜真是太可爱了  https://juejin.cn/post/6886602875225833480


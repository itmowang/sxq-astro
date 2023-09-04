---
title: '使用 BroadcastChannel 跨页面通信'
description: '使用 BroadcastChannel 跨页面通信'
pubDate: 'Jul 02 2022'
heroImage: "http://img.blog.loli.wang/2023-8-21-BroadcastChannel/01.png" 
tags:
 - BroadcastChannel
 - Web API
 - 跨页面通信
 - 学习折腾
---

### 为什么会有需要用到跨浏览器通信的需求

因公司老项目一次线上出现bug，发现一个用户开了多个浏览器窗口， 发现登录不同用户不同存在浏览器缓存的token已经更换， 但是用户已经更改，页面没有登出，原本的页面还是可以提交最新的数据， 但是因为token变化了， 后端拿取提交人出错， 出现不可描述的问题 。


### 使用
因为是vue项目 我为了在所有地方都可以访问，选择全局挂载

``` bash  main.js

// 构建全局广播

const channel = new BroadcastChannel("channel-name");

Vue.prototype.$channel = channel;

```

点击退出登录， 发送广播

``` bash 
logout(){
    // 发送通知
    this.$channel.postMessage(`logout`);
}

```


在全局地方编写接收广播的逻辑， 例如Vue的App.vue内

``` bash 
created() {
    // 通知其他浏览器窗口是否有退出登录
    this.$channel.onmessage = function(e) {
      if (e.data == "logout") {
        location.href = "/";
      }
};

```

因为本质上退出登录会走接口， 也清理了Store中的数据， 我们只需要通知其他窗口退出即可

![结果](http://img.blog.loli.wang/2023-8-21-BroadcastChannel/02.png)


#### 参考资料

MDN - BroadcastChannel https://developer.mozilla.org/zh-CN/docs/Web/API/BroadcastChannel
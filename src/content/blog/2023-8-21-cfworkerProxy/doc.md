---
title: 'CloudFlare Worker 反向代理 github 给静态博客做图床'
description: 'CloudFlare Worker 反向代理 github 给静态博客做图床 '
pubDate: 'Jul 02 2022'
heroImage: "http://img.blog.loli.wang/2023-8-21-cfworkerProxy/01.png" 
tags:
 - CloudFlare Worker
 - 反向代理
 - 学习折腾
---

## CloudFlare Worker 反向代理 github 博客做图床

目前老师写了一个新的 BLOG 主题，支持纯静态部署的，想到了 github pages 功能，部署静态博客后,发现图片不知道怎么处理，一般来说一个正常的系统图片都会上传到自己的服务器上面，或者私有图床，但是这种纯静态网站是无法做到这种功能的。如果用图床又怕哪天图片挂了或者其他问题，所以决定采取老师的方案，使用 CloudFlare 的 worker 功能做图床功能

#### 实现

``` bash

addEventListener("fetch", event => {
  event.respondWith(handleRequest(event.request))
})

async function handleRequest(request) {
  // Cloudflare Workers 分配的域名
  // 同时绑定自己的域名
  const cf_worker_host = new RegExp("imgcdn.loli5.workers.dev|img.blog.loli.wang","g");
  // GitHub 仓库文件地址
  const github_host = "raw.githubusercontent.com/itmowang/blog-astro/main/src/content/blog/";
  // 替换
  const url = request.url.replace(cf_worker_host, github_host);
  return fetch(url);
}

```

![如何配置](http://img.blog.loli.wang/2023-8-21-cfworkerProxy/02.png)

![md中如何使用](http://img.blog.loli.wang/2023-8-21-cfworkerProxy/03.png)

![一切就绪](http://img.blog.loli.wang/2023-8-21-cfworkerProxy/04.png)


这样一切就大功告成了！



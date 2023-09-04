---
title: '.nojekyll 文件是什么'
description: '.nojekyll 文件是什么 '
pubDate: 'Jul 02 2022'
heroImage: "http://img.blog.loli.wang/2023-8-20-nojekyll-Why/01.png" 
tags:
 - nojekyll
 - nojekyll 是什么
 - Jekyll
 - github Pages
 - 学习折腾
---

## .nojekyll 文件是什么

使用 Nuxt 的过程中，发现在 generate 生成的 dist 文件夹下会有一个名为 .nojekyll 的空白文件，它是干什么用的呢？

Github Pages 默认是基于 Jekyll 构建，Jekyll 是一个将纯文本转换为静态网站的工具，它构建的网站下各种目录都是特定的以下划线开头命名的文件夹，例如 _layouts、_posts ，它会忽略掉其它的以下划线开头的文件夹和文件。

.nojekyll 就是告诉 Github Pages 当前网站不是基于 Jekyll 构建的，不要忽略掉下划线开头的文件和文件夹。

可见 .nojekyll 主要就是用于 Github Pages 这种有默认规则的网站部署平台，如果是部署在自己的服务器上，可以把它删掉。

反之，如果你的网站不是 Jekyll 构建的，要部署到 Github Pages ，并且包含下划线开头的文件或文件夹，那么你就需要在根目录添加一个 .nojekyll 空文件。

参考：
Jekyll 官网 [http://jekyllcn.com/](http://jekyllcn.com/ " Jekyll 官网 ")
Bypassing Jekyll on GitHub Pages [https://github.blog/2009-12-29-bypassing-jekyll-on-github-pages/] 
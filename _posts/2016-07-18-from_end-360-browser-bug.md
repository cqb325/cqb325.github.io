---
layout: post
category: 前端bug资料
title: 360手机浏览器重复请求bug
tagline: by cqb
tags: [前端, 手机端, 360浏览器，bug]
---

###360手机浏览器重复请求bug


1. 版本：  2.5.0
2. 手机型号： iphone6 
3. ios版本： 9.3.2

在新窗口中打开链接发现会重复请求， 2-3次， 请求不到的，关闭窗口还会请求

包含a标签，window.open和form表单提交都存在该问题。

只有单页请求的时候只请求一遍

>发现 jquery("a").click(); 不起作用。
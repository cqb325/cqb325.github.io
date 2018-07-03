---
layout: post
category: 微信
title: 隐藏微信H5底下的操作白条
tagline: by cqb
tags: [微信, jssdk]
---
### 隐藏微信H5底下的操作白条

	// 添加如下代码
    document.addEventListener('WeixinJSBridgeReady', function onBridgeReady() {
          WeixinJSBridge.call('hideToolbar');
          WeixinJSBridge.call('hideOptionMenu');
	}); 

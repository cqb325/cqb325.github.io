---
layout: post
category: 前端资源
title: Safari浏览器返回后不执行js
tagline: by cqb
tags: [前端, 资源, Safari]
---


### Safari浏览器返回后不执行js

在页面中添加即可

    window.addEventListener("pageshow", function(evt){
        if(evt.persisted){
            setTimeout(function(){
                window.location.reload();
            },0);
        }
    }, false);
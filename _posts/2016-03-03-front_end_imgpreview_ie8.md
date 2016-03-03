---
layout: post
category: 浏览器兼容
title: IE8获取图片尺寸，并预览
tagline: by cqb
tags: [前端, IE8,图片尺寸,图片预览]
---

### IE8获取图片尺寸，并预览

	<div class="form-group form-inline text-center" id="previewWrap">
        <img src="" id="imgPreview">
    </div>

- 获取尺寸
- 
	var preload = document.createElement("div"),
            body = document.body,
            data, oriWidth, oriHeight, ratio;

    preload.style.cssText = "width:100px;height:100px;visibility: visible;position: absolute;left: 0px;top: 0px";
    // 设置sizingMethod='image'
    preload.style.filter = "progid:DXImageTransform.Microsoft.AlphaImageLoader(sizingMethod='image')";
    body.insertBefore(preload, body.childNodes[0]);
    ele.select();
    try {
        data = document.selection.createRange().text;
    } finally {
        document.selection.empty();
    }

    if ( !! data) {
        data = data.replace(/[)'"%]/g, function(s) {
            return escape(escape(s));
        });
        //预载图片
        try {
            preload.filters.item("DXImageTransform.Microsoft.AlphaImageLoader").src = data;
        } catch (e) {
            //console.log(e.description);
            return;
        }
    }

    oriWidth = preload.offsetWidth;
    oriHeight = preload.offsetHeight;

    document.body.removeChild(preload);
    preload = null;

- 预览
- 

	var target = $("#imgPreview");
    var parent = target.parent();
    var div = $("<div>");
    parent.prepend(div);
    div.css({
        "filter":"progid:DXImageTransform.Microsoft.AlphaImageLoader(sizingMethod=scale)",
        position: "absolute",
        left: '20px',
        top: '20px'
    });
    div[0].filters.item("DXImageTransform.Microsoft.AlphaImageLoader").src = data;
    var w = parent.width();
    var h = w/oriWidth * oriHeight;
    div[0].style.width = w +"px";
    div[0].style.height = h +"px";
    target.css({height: h+"px"});

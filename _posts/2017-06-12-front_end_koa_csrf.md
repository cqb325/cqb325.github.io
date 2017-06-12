---
layout: post
category: koa2
title: 在Koa中使用csrf的正确姿势
tagline: by cqb
tags: [Koa2, csrf]
---


上例子：
//app.js

	const Koa = require('koa');
	const CSRF = require('koa-csrf');
	const router = require('koa-router')();
	const ejsRender = require('koa-ejs');

	const app = new Koa();

	//view
	ejsRender(app, {
	    root: path.join(__dirname, 'views'),
	    layout: false,
	    viewExt: 'html',
	    cache: false,
	    debug: true
	});
	
	//csrf
	app.use(new CSRF({
	  invalidSessionSecretMessage: 'Invalid session secret',
	  invalidSessionSecretStatusCode: 403,
	  invalidTokenMessage: 'Invalid CSRF token',
	  invalidTokenStatusCode: 403,
	  excludedMethods: [ 'GET', 'HEAD', 'OPTIONS' ],
	  disableQuery: false
	}));
	
	//router
	router.get(/\/.*/, async (ctx, next) => {
	    ctx.state.csrf = ctx.csrf;
	    await next();
	});
	
	router.get('/', async (ctx, next)=>{
	    await next();
	    await ctx.render('index');
	});

	app.use(router.routes());

	app.listen(3000,()=>{
	    console.log("server listen on 3000");
	});

//index.html

	<!DOCTYPE html>
	<html>
	<head>
	    <meta charset="utf-8">
	    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0, user-scalable=no, minimal-ui">
	    <meta name="screen-orientation" content="portrait"/>
	    <meta name="apple-mobile-web-app-capable" content="yes">
	    <meta name="format-detection" content="telephone=no">
	    <meta name="full-screen" content="yes">
	    <meta name="x5-fullscreen" content="true">
	    <meta name="_csrf" content="<%= csrf %>">
	    <title>Koa</title>
	</head>
	<body>
	    <div id="app">
	        Hello World!
	    </div>
	
		<script src="/lib/jquery-1.11.3.min.js"></script>
	</body>
	</html>
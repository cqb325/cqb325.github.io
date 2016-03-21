---
layout: post
category: Grunt
title: 如何全局使用grunt
tagline: by cqb
tags: [前端, Grunt]
---

### 如何全局使用grunt

#loadNpmTasks

我们知道grunt使用插件的时候采用`loadNpmTasks`方式

该函数为grunt的Task类的`loadNpmTasks`方法

代码大致如下：


	task.loadNpmTasks = function(name) {
		loadTasksMessage('"' + name + '" local Npm module');
		var root = path.resolve('node_modules', __dirname+"../../../../");
		var pkgfile = path.join(root, name, 'package.json');
		var pkg = grunt.file.exists(pkgfile) ? grunt.file.readJSON(pkgfile) : {keywords: []};
	
	  	// Process collection plugins.
		if (pkg.keywords && pkg.keywords.indexOf('gruntcollection') !== -1) {
			loadTaskDepth++;
			Object.keys(pkg.dependencies).forEach(function(depName) {
				// Npm sometimes pulls dependencies out if they're shared, so find
				// upwards if not found locally.
				var filepath = grunt.file.findup('node_modules/' + depName, {
					cwd: path.resolve('node_modules', name),
					nocase: true
		  		});
			  	if (filepath) {
					// Load this task plugin recursively.
					task.loadNpmTasks(path.relative(root, filepath));
		  		}
			});
			loadTaskDepth--;
			return;
  		}
	
		// Process task plugins.
		var tasksdir = path.join(root, name, 'tasks');
		if (grunt.file.exists(root)) {
			loadTasks(tasksdir);
		} else {
			grunt.log.error('Local Npm module "' + name + '" not found. Is it installed?');
		}
	};


修改root的路径为本地安装node模块的地址即可，如：

var root = path.resolve('node_modules', __dirname+"../../../../");


## Grunt-cli修改

grunt 命令使用grunt-cli，需要修改cli加载grunt模块的寻址参数
文件为： grunt-cli 中的bin/grunt

	#!/usr/bin/env node
	
	'use strict';
	
	process.title = 'grunt';
	
	// Especially badass external libs.
	var findup = require('findup-sync');
	var resolve = require('resolve').sync;
	
	// Internal libs.
	var options = require('../lib/cli').options;
	var completion = require('../lib/completion');
	var info = require('../lib/info');
	var path = require('path');
	
	
	var basedir = process.cwd();
	var gruntpath;
	
	// Do stuff based on CLI options.
	if ('completion' in options) {
	  completion.print(options.completion);
	} else if (options.version) {
	  info.version();
	} else if (options.base && !options.gruntfile) {
	  basedir = path.resolve(options.base);
	} else if (options.gruntfile) {
	  basedir = path.resolve(path.dirname(options.gruntfile));
	}
	
	basedir = "C:/Users/xxxxx";
	
	try {
	  gruntpath = resolve('grunt', {basedir: basedir});
	} catch (ex) {
	  gruntpath = findup('lib/grunt.js');
	  // No grunt install found!
	  if (!gruntpath) {
	if (options.version) { process.exit(); }
	if (options.help) { info.help(); }
	info.fatal('Unable to find local grunt.', 99);
	  }
	}
	
	// Everything looks good. Require local grunt and run it.
	require(gruntpath).cli();

修改basedir参数为自己存放全局node_modules的地址。
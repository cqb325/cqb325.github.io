---
layout: post
category: React
title: Grunt + ES6 + React 整合开发
tagline: by cqb
tags: [前端, Grunt, ES6, React]
---

### Grunt + ES6 + React 整合开发

- 安装grunt插件

`grunt-react`

	npm install grunt-react

`grunt-babel`

	npm install grunt-babel

`babel-preset-es2015`

	npm install babel-preset-es2015

`babel-preset-react`

	npm install babel-preset-react

`transform-es2015-modules-amd`

	npm install transform-es2015-modules-amd


- 配置grunt

		react: {
		    options: {
		        es6module: true
		    },
		    dynamic_mappings: {
		        files: [
		            {
		                expand: true,
		                cwd: 'src/jsx',
		                src: ['**/*.jsx'],
		                dest: 'src/es6',
		                ext: '.js'
		            }
		        ]
		    }
		},
		babel: {
		    options: {
		        presets: ['es2015','react'],
		        "plugins": ["transform-es2015-modules-amd"]
		    },
		    dist: {
		        files: [{
		            "expand": true,
		            "cwd": "src/jsx",
		            "src": ["**/*.jsx"],
		            "dest": "assets/js",
		            "ext": ".js"
		        }]
		    }
		}


- 加载插件


		grunt.loadNpmTasks('grunt-react');
		grunt.loadNpmTasks('grunt-babel');


## 如需使用全局grunt和babel

修改全局babel-core/lib/transformation/file/options/option-manager.js

修改函数`OptionManager.normalisePlugins`中的


	if (typeof plugin === "string") {
		dirname = "C:/Users/cqb32_000";
		var pluginLoc = _helpersResolve2["default"]("babel-plugin-" + plugin, dirname) || _helpersResolve2["default"](plugin, dirname);
		if (pluginLoc) {
			plugin = require(pluginLoc);
		} else {
			throw new ReferenceError(messages.get("pluginUnknown", plugin, loc, i, dirname));
		}
	}

和函数`OptionManager.prototype.resolvePresets`中的
	
	if (typeof val === "string") {
		dirname = "C:/Users/cqb32_000";
		var presetLoc = _helpersResolve2["default"]("babel-preset-" + val, dirname) || _helpersResolve2["default"](val, dirname);
		if (presetLoc) {
			var _val = require(presetLoc);
			onResolve && onResolve(_val, presetLoc);
			return _val;
		} else {
			throw new Error("Couldn't find preset " + JSON.stringify(val) + " relative to directory " + JSON.stringify(dirname));
		}
	}


## 兼容ie8

要兼容IE8的话需要注意

- 导出使用 `module.exports = xxx;`
- 替换`import` 使用 `require`
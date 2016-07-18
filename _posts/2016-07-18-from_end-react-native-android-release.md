---
layout: post
category: 前端资源
title: React-Native Android打包发布
tagline: by cqb
tags: [react-native,android,打包发布]
---

### React-Native Android打包发布


----------
>启动服务

	    //在项目目录下执行启动服务
		npm start

>生成密匙
	
	`keytool -genkey -v -keystore my-test-key.keystore -alias my-key-alias -keyalg RSA -keysize 2048 -validity 10000`

代码中的 my-test-key.keystore 和 my-key-alias 替换成需要的名字。记住后续步骤中输入的密码等信息，需要用于第四步骤中的gradle脚本的编写。

>下载bundle文件并保存

通过访问`http://localhost:8081/index.android.bundle`地址下载bundle文件保存到`/android/app/src/main/assets`目录下
或者执行
`curl -k "http://localhost:8081/index.android.bundle" > android/app/src/main/assets/index.android.bundle `

>添加 gradle 的 keystore 配置

	// 在 defaultConfig 后面添加
	signingConfigs {
	    release {
	        storeFile file("/my-test-key.keystore") // 替换成你实际密匙文件所在位置
	        storePassword "步骤1中的密码"　　// 替换成你实际的密码
	        keyAlias "my-key-alias"　　　　// 替换
	        keyPassword "步骤1中的密码"　　// 替换
	    }
	}

	// 修改原来的配置，主要是加入 signingConfig 这一行
	buildTypes {
	    release {
	        minifyEnabled enableProguardInReleaseBuilds // 记得修改相应的功能启动
	        proguardFiles fetDefaultProguardFile('proguard-android.txt), 'proguard-rules.pro' 
	        signingConfig signingConfigs.release
	    }
	}

*注意：路径中的 反斜线(\) 要改成 正斜线(/)。*

>启用 Proguard 代码混淆（可选）

Proguard 是一个 Java 字节码混淆压缩工具，可剔除项目文件夹中为使用的部分，有效减少APK的大小。在 build.gradle 文件中，启动 Proguard模块：

	def enableProguardInReleaseBuilds = true

>执行打包脚本

首先：进入项目根目录下的 /android/ 目录中；

然后：执行 gradle assembleRelease 命令。

*注意：如果出现错误或者没有安装 gradle 工具，需要自行安装 gradle 工具和配置好 GRADLE_HOME 和 PATH，注意和 /android/gradle/wrapper/gradele-wrapper.properties 文件中的版本配置保持一致。也可以使用 gradle clean 清理一下缓存。*
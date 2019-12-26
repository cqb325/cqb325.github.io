---
layout: post
category: linux
title: linux 学习 第二弹（vsftpd日志中文乱码修改）
tagline: by cqb
tags: [linux, vagrant, centos7, vsftpd, 日志, 乱码]
---
# centos7 vsftpd 笔记

1、下载 rpm包

	wget http://vault.centos.org/7.4.1708/os/Source/SPackages/vsftpd-3.0.2-22.el7.src.rpm

2、 创建用户（安装的时候会默认使用使用这个用户）
	
	useradd mockbuild

3、进行源码的安装

	rpm -ivh vsftpd-3.0.2-22.el7.src.rpm

4、查看/root/rpmbuild/SOURCES

解压
![](https://i.imgur.com/kIqfOtE.png)

5、修改logging.c

注释函数  `vsf_log_do_log_to_file`中的

	// str_replace_unprintable(p_str, '?');

保存


6、修改完成后返回上一层，使用 tar -zcvf vsftpd-3.0.2.tar.gz vsftpd-3.0.2/命令对vsftpd-3.0.2目录进行压缩

7、压缩完成后返回上一层，进入SPECS/目录下rpmbuild -bb vsftpd.spec命令生成新的vsftpd rpm安装包
在打包之前先使用yum -y install rpm-build和 yum -y install rpmdevtools安装打包环境
使用rpmbuild -bb vsftpd.spec进行打包

8、有依赖的使用yum安装即可

	yum -y install pam-devel libcap-devel openssl-devel tcp_wrappers-devel

9、最后使用rpmbuild -bb vsftpd.spec再进行打包操作就OK了（一定要确认已经安装gcc）打包完成后就可以在rpmbuild/RPMS/x86_64目录下看到新生成的vsftpd包了


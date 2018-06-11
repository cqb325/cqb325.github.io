---
layout: post
category: SQL Server
title: SQL Server 偏僻SQL
tagline: by cqb
tags: [SQL, Server]
---
### 删除数据库中重复数据并保留一条数据

    delete from TableName where exists (select * from TableName a where a.field1=TableName.field1 and 
	a.field2=TableName.field2 group by field1,field2 having count(*) > 1)
	and TableName.rowid not in (select min(rowid) from TableName group by field1,field2 having count(*)>1) 

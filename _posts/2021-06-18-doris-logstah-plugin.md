---
layout: post
category: doris
title: Doris output plugin 改造支持mysql
tagline: by cqb
tags: [Doris, plugin, logstash, mysql]
---
    
官网插件只支持从message字段获取数据

如果数据源inputs为jdbc的话，读取的数据是json数组，也没有message字段无法入库
源码如下

	def flush(events, close=false)
      documents = ""
      event_num = 0
      events.each do |event|
         documents << event.get("[message]") << "\n"
         event_num += 1
      end

      @logger.info("get event num: #{event_num}")
      @logger.debug("get documents: #{documents}")

      hosts = get_host_addresses()

      @request_headers["label"] = label_prefix + "_" + @db + "_" + @table + "_" + Time.now.strftime('%Y%m%d%H%M%S_%L')
      make_request(documents, hosts, @http_query, 1, hosts.sample)
    end

改造后如下，将唯一的区别是配置文件中的columns是必填的
数据将以columns顺序进行读取封装

	def flush(events, close=false)
      columns = @columns.split(",")
      documents = ""
      event_num = 0
      events.each do |event|
         line = ""
         columns.each do |col|
           v = event.get("["+col.strip+"]").nil? == true ? "" : event.get("["+col.strip+"]")
           line << v.to_s << ","
         end
         documents << line[0, line.length - 1] << "\n"
         event_num += 1
      end

      @logger.info("get event num: #{event_num}")
      @logger.debug("get documents: #{documents}")

      hosts = get_host_addresses()

      @request_headers["label"] = label_prefix + "_" + @db + "_" + @table + "_" + Time.now.strftime('%Y%m%d%H%M%S_%L')
      make_request(documents, hosts, @http_query, 1, hosts.sample)
   	end
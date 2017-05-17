### Web Storage (第二版)

##摘要

该规范定义了一个在客户端存储键值对数据的API。



1. 介绍

 *该部分为非规范内容*

该规范介绍了在客户端存储键值对的两种不同机制，类似HTTP会话中的COOKIES.

我们会遇到一种场景，用户在某地存储了一项数据，同时能够在不同的窗口中进行使用.

`Cookies` 并没有完好的解决该问题. For example, a user could be buying plane tickets in two different windows, using the same site. If the site used cookies to keep track of which ticket the user was buying, then as the user clicked from page to page in both windows, the ticket currently being purchased would "leak" from one window to the other, potentially causing the user to buy two tickets for the same flight without really noticing.

2. asd




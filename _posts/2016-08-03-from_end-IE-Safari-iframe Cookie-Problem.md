
### Internet Explorer & Safari: IFrame Session Cookie Problem

在IE和Safari浏览器中，一个域名网页嵌入另外一个域名网页的iframe的时候会发现不能保持cookies，导致session丢失。

*如果在localhost域名下嵌入另外域名的iframe没有问题*

> 例：在`domain A`中嵌入`domain B `的iframe

	<iframe src="http://www.domain-B.com/login.html"></iframe>

> 在`domain B `中登录或注册等创建需要的session

	<form action="dologin.html" method="post">
		<input name="username">
		<input type="password" name="passwrod">
		<input type="submit" value="提交">
	</form>

> 在`domain B `中编写action

	String redirect = request.getParameter("redirect");
	
	if(loginSuccess){
		getSession().setAttribute("user", user);
	}

	//重新定位到domain A的地址
	return "redirect:"+redirect;
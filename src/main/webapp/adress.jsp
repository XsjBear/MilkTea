<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<meta charset="utf-8" />
<title>蜜雪冰城</title>
<meta name="description" content="蜜雪冰城" />
<meta name="keywords" content="蜜雪冰城" />
<meta name="viewport"
	content="initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
<link rel="stylesheet" href="css/amazeui.min.css" />
<link rel="stylesheet" href="css/style.css" />
<script type="text/javascript" src="js/jquery.min.js"></script>
<script type="text/javascript" src="js/amazeui.min.js"></script>
<script type="text/javascript" src="js/adress.js"></script>
</head>
<body>
	<header data-am-widget="header"
		class="am-header am-header-default header">
	<div class="am-header-left am-header-nav">
		<a href="#left-link" class=""> <i
			class="am-header-icon am-icon-angle-left"></i>
		</a>
	</div>
	
	<h1 class="am-header-title">
		<a href="#title-link" class="" style="color: #333;">收货地址</a>
	</h1>
	
	<div class="am-header-right am-header-nav">
		<a href="#right-link" class=""> </a>
	</div>
	
	</header>
	
	<input type="hidden" id = "loginusername" value="${sessionScope.User.username}"/>
	
	<ul class="address-list" id="alladress">
		 <%-- <c:forEach items="${userlist}" var="message">
   I		<li class="curr">
			<p>收货人：${message.username }&nbsp;&nbsp;${message.contactWay }</p>
			<p class="order-add1">收货地址：${message.adress }</p>
			<hr>
			<div class="address-cz">
				<label class="am-radio am-warning"> <input type="radio"
					name="radio3" value="" data-am-ucheck="" checked=""
					class="am-ucheck-radio"><span class="am-ucheck-icons"><i
						class="am-icon-unchecked"></i><i class="am-icon-checked"></i></span> 设为默认
				</label> <a href=""><img src="images/bj.png" style="width: 18px;">&nbsp;编辑</a>
				<a href="">删除</a>
			</div>
		</li>
		</c:forEach>  --%>

	</ul>

</body>
</html>

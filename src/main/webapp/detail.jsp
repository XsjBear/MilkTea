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

</head>
<body>
	<input type="hidden" name="mkname" value="${param.mkname}" />
	<!-- 
	<div data-am-widget="slider" class="am-slider am-slider-default">
		<ul class="am-slides">
			<li><img id="mkname" src="images/detail.png"></li>
		</ul>
	</div>

	 -->
	<div id="milk_all_info"></div>
	<%-- <c:out value="${message.mk.milkTeaNam }" default=" mdm" /> --%>
	<ul class="fixed-btn">

		<li><span class="current">立即购买</span></li>
		<li><span class="current">加入购物车</span></li>
	</ul>


	<script type="text/javascript" src="js/jquery.min.js"></script>
	<script type="text/javascript" src="js/deatil.js"></script>
	<script type="text/javascript" src="js/amazeui.min.js"></script>
</body>
</html>
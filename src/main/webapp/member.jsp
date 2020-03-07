<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8" session="true" %>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8" />
<title>蜜雪冰城</title>
<meta name="description" content="蜜雪冰城" />
<meta name="keywords" content="蜜雪冰城" />
<meta name="viewport" content="initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
<link rel="stylesheet" href="css/amazeui.min.css" />
<link rel="stylesheet" href="css/style.css" />
<script type="text/javascript" src="js/jquery.min.js"></script>
<script type="text/javascript" src="js/amazeui.min.js"></script>
</head>
<body>
	
		<div class="member">
			<div class="member-pic">
		<!-- <img src="images/default_photo.png" /> -->
				<img src="${User.headImgSrc}" alt="头像"/>
			</div>
			<div class="member-infor">${User.contactWay}</div>
		</div>
		
		<ul class="member-nav">
			<li><a href="adress.jsp"><i class="am-icon-map-marker"></i><span>收货地址</span></a></li>
			<li><a href="order.jsp"><i class="am-icon-newspaper-o"></i><span>我的订单</span></a></li>
			<li><a href="BuyCar.jsp"><i class="am-icon-cart-arrow-down"></i><span>购物车</span></a></li>
			<!-- <li><a href=""><i class="am-icon-bell-o"></i><span>系统通知</span></a></li>
			<li><a href=""><i class="am-icon-credit-card"></i><span>会员卡</span></a></li> -->
			<li><a href="haveyhq.jsp"><i class="am-icon-cc-mastercard"></i><span>优惠券</span></a></li>
			<li><a href=""><i class="am-icon-dollar"></i><span>积分</span><span>&nbsp;&nbsp;&nbsp;${sessionScope.User.integral}</span></a></li>
		</ul>
		
		
		<ul class="member-nav mt">
			<li><a href=""><i class="am-icon-phone"></i><span>联系我们</span><span>&nbsp;&nbsp;&nbsp;${sessionScope.User.contactWay}</span></a></li>
		</ul>
		<div class="h50"></div>
		<div data-am-widget="navbar" class="am-navbar am-cf am-navbar-default footer "  id="">
		      <ul class="am-navbar-nav am-cf am-avg-sm-4">
		          <li>
		            <a href="single_Point.jsp" class="">
		                <span class=""><img src="images/nav.png"/></span>
		                <span class="am-navbar-label">点餐</span>
		            </a>
		          </li>
		          
		     <!--      <li>
		            <a href="single_Point.jsp" class="">
		                <span class=""><img src="images/nav2.png"/></span>
		                <span class="am-navbar-label">客说</span>
		            </a>
		          </li>
		          
		          <li>
		            <a href="we.html" class="">
		                <span class=""><img src="images/nav3.png"/></span>
		                <span class="am-navbar-label">我们</span>
		            </a>
		          </li>
		           -->
		          <li >
		            <a href="member.html" class="">
		                <span class=""><img src="images/nav4.png"/></span>
		                <span class="am-navbar-label">我的</span>
		            </a>
		          </li>
		   
		      </ul>
		</div>
	

</body>
</html>
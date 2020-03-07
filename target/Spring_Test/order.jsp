<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<meta charset="utf-8" />
		<title>蜜雪冰城</title>
		<meta name="description" content="蜜雪冰城" />
		<meta name="keywords" content="蜜雪冰城"/>
		<meta name="viewport" content="initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
		<link rel="stylesheet" href="css/amazeui.min.css" />
		<link rel="stylesheet" href="css/style.css" />
		<script type="text/javascript" src="js/jquery.min.js" ></script>
		<script type="text/javascript" src="js/order.js" ></script>
		<script type="text/javascript" src="js/amazeui.min.js" ></script>
		<style type="text/css">
		
			.all{
				color: black;
			}
		</style>
		
</head>
<body>
<header data-am-widget="header" class="am-header am-header-default header">
		  <div class="am-header-left am-header-nav">
		     <a href="#left-link" class=""> 
		       <i class="am-header-icon am-icon-angle-left"></i>
		     </a>
		  </div>
		  <h1 class="am-header-title"> <a href="#title-link" class="" style="color: #333;">全部订单</a></h1>
		  <div class="am-header-right am-header-nav">
		     <a href="#right-link" class=""> </a>
		  </div>
	  </header>
	  
		<div class="cate-search" style="position: relative; top: 0; border-bottom: 0;">
	    	<input type="text" class="cate-input" placeholder="搜索全部订单">
	    	<input type="button" class="cate-btn">
	    </div>
	    
	    
	    <ul class="order-style">
	    	<li class="current"><span class="all">全部</span></li>
	    	<li class=""><span>待付款</span></li>
	    	<li class=""><span>待收货</span></li>
	    	<li class=""><span>待评价</span></li>
	    	<li class=""><span>退换货</span></li>
	    </ul>
	    
	    <div class="show"></div>
	    
		
		
</body>
</html>
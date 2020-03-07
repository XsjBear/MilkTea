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
		<script type="text/javascript" src="js/single_Point.js" ></script>
		<script type="text/javascript" src="js/amazeui.min.js" ></script>
</head>
<body>

		<div data-am-widget="slider" class="am-slider am-slider-default" data-am-slider='{}' >
			  <ul class="am-slides">
			      <li><img src="img/奥利奥玛奇朵.jpg"> </li>
			  </ul> 
		</div>
		
		<a href="search.jsp" class="search">
			开启你的美食之旅...
		</a>
		
		<ul class="nav">
			<li>
				<a href="search.jsp">
					<img src="images/icon.jpg" />
					<p>最新推荐</p>
				</a>
			</li>
			<li>
				<a href="search.jsp">
					<img src="images/icon1.jpg" />
					<p>热门菜谱</p>
				</a>
			</li>
			<li>
				<a href="search.jsp">
					<img src="images/icon2.jpg" />
					<p>人气菜肴</p>
				</a>
			</li>
			<li>
				<a href="yhj.jsp">
					<img src="images/icon3.jpg" />
					<p>优惠券</p>
				</a>
			</li>
		</ul>
		
		<div data-am-widget="titlebar" class="am-titlebar am-titlebar-default title" >
		    <h2 class="am-titlebar-title ">   积分菜品 </h2>
		    <nav class="am-titlebar-nav">
		        <a href="search.jsp" class="">more &raquo;</a>
		    </nav>
		</div>

	<ul data-am-widget="gallery" id="allMilkInfo"
		class="am-gallery am-avg-sm-2 am-avg-md-3 am-avg-lg-4 am-gallery-default product">

<%-- 		<c:forEach items="${mkInfo}" var="mkinfo">
			<li>
				<div class="am-gallery-item">
					<a href="detail.html" class=""> <img src="images/p.png" alt="" />
						<h3 class="am-gallery-title">商务单人餐</h3>
						<div class="am-gallery-desc">
							<em>￥50</em><i class="am-icon-cart-plus"></i>
						</div>
					</a>
				</div>
			</li>
		</c:forEach> --%>

	</ul>
	<div class="h50"></div>
		 
		<div data-am-widget="navbar" class="am-navbar am-cf am-navbar-default footer "  id="">
		      <ul class="am-navbar-nav am-cf am-avg-sm-4">
		          <li >
		            <a href="single_Point.jsp" class="">
		                <span class=""><img src="images/nav.png"/></span>
		                <span  class="am-navbar-label">点餐</span>
		               
		            </a>
		          </li>
		          <!-- <li>
		            <a href="speak.html" class="">
		                <span class=""><img src="images/nav2.png"/></span>
		                <span class="am-navbar-label">客说</span>
		            </a>
		          </li>
		          <li>
		            <a href="we.html" class="">
		                <span class=""><img src="images/nav3.png"/></span>
		                <span class="am-navbar-label">我们</span>
		            </a>
		          </li> -->
		          <li >
		            <a href="member.jsp" class="">
		                <span class=""><img src="images/nav4.png"/></span>
		                <span class="am-navbar-label">我的</span>
		            </a>
		          </li>
		   
		      </ul>
		</div>

</body>
</html>
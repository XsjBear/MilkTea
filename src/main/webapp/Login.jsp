<%@ page language="java" contentType="text/html; charset=utf-8"
	pageEncoding="utf-8"%>
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8">
<title>登陆注册</title>
<!-- 链接外部文件 -->
<link rel="stylesheet"  href="css/login.css" />
<script type="text/javascript" src="js/jquery.min.js"></script>
<script type="text/javascript" src="js/angular.min.js"></script>

<!-- 最新版本的 Bootstrap 核心 CSS 文件 -->
<link rel="stylesheet"
	href="https://cdn.jsdelivr.net/npm/bootstrap@3.3.7/dist/css/bootstrap.min.css"
	integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u"
	crossorigin="anonymous">

<!-- 可选的 Bootstrap 主题文件（一般不用引入） -->
<link rel="stylesheet"
	href="https://cdn.jsdelivr.net/npm/bootstrap@3.3.7/dist/css/bootstrap-theme.min.css"
	integrity="sha384-rHyoN1iRsVXV4nD0JutlnGaslCJuC7uwjduW9SVrLvRYooPp2bWYgmgJQIXwl/Sp"
	crossorigin="anonymous">

</head>
<body>

	<div class="mainBody">
		<ul class="nav nav-pills ">
			<li role="presentation" class="active"><button type="button"
					class="btn btn-primary" onclick="changeLoginStyle()">登陆</button></li>
			<li role="presentation"><button type="button"
					class="btn btn-primary"  onclick="changeRegisterStyle()">注册</button></li>
		</ul>

		<!-- 登陆模块 -->
		<div style="display: block;" id="Log" class="Login">
			<div class="form-group">
				<label for="exampleInputEmail1">用户名</label> <input type="text"
					class="form-control" id="login_username" placeholder="用户名">
			</div>
			<div class="form-group">
				<label for="exampleInputPassword1">密码</label> <input type="password"
					class="form-control" id="login_password" placeholder="密码">
			</div>
			<button type="button" id="Login_Button" 
				class="btn btn-primary btn-lg">&nbsp;&nbsp;&nbsp;登&nbsp;陆&nbsp;&nbsp;&nbsp;</button>

			<!-- 外部登陆接口 -->
			<div class="InterfaceBody">
				<!-- QQ登陆接口 -->
				<div class="QQLogin">
					<img style="width: 40px; height: 40px" alt="QQ" src="img/QQ.png">
				</div>
				<!-- 微信登陆接口图标 -->
				<div class="WeChatLogin">
					<img style="width: 40px; height: 40px" alt="QQ"
						src="img/WeChat.png">
				</div>
			</div>
		</div>

		<!-- 注册模块 -->
		<div style="display: none;" id="Reg" class="Register">
				<div class="form-group">
					<label for="exampleInputEmail1">用户名</label> <input type="text"
						class="form-control" id="register_username" placeholder="用户名">
				</div>
				<div class="form-group">
					<label for="exampleInputPassword1">密码</label> <input
						type="password" class="form-control" id="register_password"
						placeholder="密码">
				</div>
				<div class="form-group">
					<label for="exampleInputEmail1">性别</label> <input type="text"
						class="form-control" id="register_sex" placeholder="性别">
				</div>
				<div class="form-group">
					<label for="exampleInputEmail1">出生日期</label> <input type="text"
						class="form-control" id="register_birth_day" placeholder="出生日期">
				</div>
				
				<div class="form-group">
					<label for="exampleInputEmail1">联系方式</label> <input type="text"
						class="form-control" id="contact_way" placeholder="联系方式">
				</div>
				
				<div class="form-group">
					<label for="exampleInputEmail1">个性签名</label>
					<textarea id="register_personalized_signature" class="form-control"
						rows="5" placeholder="个性签名"></textarea>
				</div>
				<button type="button" id="register_Button"
					class="btn btn-primary btn-lg">&nbsp;&nbsp;&nbsp;注&nbsp;册&nbsp;&nbsp;&nbsp;</button>
		</div>

	</div>
	
	<div style="text-align: center; clear: both;">
		<script src="/gg_bd_ad_720x90.js" type="text/javascript"></script>
		<script src="/follow.js" type="text/javascript"></script>
	</div>

	<!-- 背景 -->
	<canvas id="background"></canvas>
	<script async type="text/javascript" src="js/background.js"></script>

	<!-- 最新的 Bootstrap 核心 JavaScript 文件 -->
	<script
	src="https://cdn.jsdelivr.net/npm/bootstrap@3.3.7/dist/js/bootstrap.min.js"
	integrity="sha384-Tc5IQib027qvyjSMfHjOMaLkfuWVxZxUPnCJA7l2mCWNIpG9mGCD8wGNIcPD7Txa"
	crossorigin="anonymous"></script>
	

	<div
		style="text-align: center; margin: 50px 0; font: normal 14px/24px 'MicroSoft YaHei';"></div>
	
	<script type="text/javascript" src="Ajax.js"></script><!-- 链接JS文件 -->
	<script type="text/javascript">
		
		$('#Login_Button').on('click', function() {
			loginClick();
		});
		$('#register_Button').on('click', function() {
			registerClick();
		});
	</script>
</body>
</html>
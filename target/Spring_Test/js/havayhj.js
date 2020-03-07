$(function(){
	var yhjinfo = {
			"username" : $('#username').val()
	};
	$.ajax({
		type : "POST",
		url : "/MilkTea/adress/yhj_Select_WhoHava.xiong",
		contentType : "application/json ; charset=utf-8",
		data : JSON.stringify(yhjinfo),
		dataType : "json",
		success : function(message){
			var arr=message.Have;
			var str = '';
			if(arr == 'false'){
				alert("暂无优惠卷!!!!!!!!!");
				window.location.href="member.jsp";
			}else{
				for(var i=0;i<arr.length;i++){
    	        	var info = arr[i];//谁有优惠卷
    	        	str += '<div class="coupon-wrap">'+
    				'<img src="images/default_photo.png" alt="logo" class="logo">'+
    				'<p class="name">蜜雪冰城</p>'+
    				'<h1 class="title">'+ info.discountsPrice +'元抵用券</h1>'+
    				'<h2 class="sub-title">满'+ info.howCanUse +'减'+ info.discountsPrice +'</h2>'+
    				'<p class="condition">'+
    				'	使用条件：满<span>'+ info.howCanUse +'</span>元减<span>'+ info.discountsPrice +'</span>元'+
    				'</p>'+
    				'<p class="date">'+
    				'	可用时间：<span>'+ info.useBeginTime +'</span>-<span>'+ info.useFinishTime +'</span>'+
    				'</p>'+
    				'<p class="time">'+
    				'	<span>00:00</span>-<span>24:00</span> <i></i> <i></i>'+
    				'</p>'+
    				'<div class="contact-wrap">'+
    				'	<p class="address">'+
    				'		数量: <span>'+ info.haveDiscountsCount +'</span>'+
    				'	</p>'+
    				'	<p class="address">'+
    				'		优惠卷状态: <span>'+ info.discountsState +'</span>'+
    				'	</p>'+
    				'	<p class="phone">'+
    				'		电话 : <span>'+ info.contactWay +'</span>'+
    				'	</p>'+
    				'</div>'+
    			'</div>'+
//    			'<div class="receive-btn" onclick="receiveCoupon()"'+
//    			'	style="background: rgb(255, 214, 60);">领取</div>'+
    			'<br/><br/><br/>'
    	        }
    	        $("#couponDetail").html(str);
			}
		},
		error : function(message){
			alert("default")
		}
	});
})
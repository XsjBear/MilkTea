$(function(){
//	$.post('/MilkTea/adress/search_one.xiong', {"milkTeaName" : decodeURI(location.search)} , function(data) {
//		var str = '';
//		str += '<div data-am-widget="slider" class="am-slider am-slider-default" data-am-slider=' + '{}' +' >'
//		str += '  <ul class="am-slides">'
//		str += '      <li><img src="images/detail.png"> </li>'
//		str += '      <li><img src="images/detail.png"> </li>'
//		str += '  </ul>'
//		str += '</div>'
//		str += '<div class="detail"> '
//		str += '	<h2>huaxiang1</h2> '
//		str += '	<div class="price"> '
//		str += '		<b>￥30</b><span>（积分可抵扣5元）</span> '
//		str += '	</div>'
//		str += '	<div class="kucun"> '
//		str += '		<p>库存：1000</p> '
//		str += '		<p>运费：免运费</p> '
//		str += '	</div> '
//		str += '</div> '
//		str += '<div class="comment"> '
//		str += '	<h2>宝贝评价（0）</h2> '
//		str += '	<ul> '
//		str += '		<li><a hhref="">有图（0）</a></li> '
//		str += '	<li><a hhref="">好评（0）</a></li> '
//		str += '	<li><a hhref="">中评（0）</a></li> '
//		str += '	<li><a hhref="">差评（0）</a></li> '
//		str += '</ul> '
//		str += '</div> '
//		str += '<div class="detail-con"> '
//		str += '	<p>  排毒排便－香蕉牛奶汁</p> '
//		str += '	<p>  适量加入牛奶调理，可以补充更多钙质，对于正在减肥中的女孩来说，也比较有饱足感。经常失眠或是容易经痛的女孩也可以喝喝看！</p> '
//		str += '	<br /> '
//		str += '<br /> '
//		str += '<p>  止咳防晕－芒果汁</p> '
//		str += '<p>  退火利尿－椰子汁</p> '
//		tr += '<p>  不过有的人会怕椰子的味道，也因为椰子水生冷寒性，因此女孩们如果想喝椰子水来消暑，或是肠胃不好的人，在喝之前还是要三思！</p> '
//		str += '<p>  水果之王－奇异果汁</p> '
//		str += '<img src="images/banner.jpg" /> '
//		str += '</div> '
//		str += '<div class="h50"></div> '
//		str += '<ul class="fixed-btn"> '
//		str += '<li ><a href="" class="current">立即购买</a></li> '
//		str += '<li><a href="javascript:;">加入购物车</a></li> '
//		str += '</ul> '
//        $("#milk_all_info").html(str)
//	},"json");
	
	
	$(".fixed-btn").children('li').click(function(){
		alert("购买成功!!!!!!!!!!");
		var result = {
				"content" : $(this).children('span').html() + "," + $('#mk').val()
		}
    	$.ajax({
    		type : "POST",
    		url : "/MilkTea/buyCar/addCar.xiong",
    		contentType : "application/json ; charset=utf-8",
    		data : JSON.stringify(result),
    		dataType : "json",
    		success : function(message){
    			window.location.href="BuyCar.jsp";
    		},
    		error : function(message){
    			alert("false");
    		}
    	})
		
	})
	
	

	var mkinfo = {
			"milkTeaName" : decodeURI(location.search)
	};
	$.ajax({
		type : "POST",
		url : "/MilkTea/adress/search_one.xiong",
		contentType : "application/json ; charset=utf-8",
		data : JSON.stringify(mkinfo),
		dataType : "json",
		success : function(message){
			var arr=message.mkInfo;
			var str = '';
//			$("#mkname").attr("src",message.mk.milkTeaImgSrc);
//			$("#mkname").attr("src",message.mk.milkTeaImgSrc);
			str += '<div  id ="show" data-am-widget="slider"  class="am-slider am-slider-default" data-am-slider=' + '{}' +' >'
//			str += '  <ul class="am-slides"  >'
			str += '      <img src="'+ message.mk.milkTeaImgSrc + ' " alt="奶茶"/> '
//			str += '  </ul> '
			str += '</div>'
				
			str += '<div class="detail"> '
			str += '	<h2>'+ message.mk.milkTeaName +'</h2> '
			str += '	<div class="price"> '
			str += '		<b>原价:￥'+ message.mk.milkTeaNormalprice +'</b><b>-----></b<b>特价:￥'+ message.mk.milkTeaSpecialprice +'</b><span>（积分可抵扣' + message.dkje +'元）</span> '
			str += '	</div> '
			str += '	<div class="kucun"> '
			str += '		<p>库存：'+ message.mk.milkTeaInventory +'</p> '
			str += '		<p>运费：'+ message.mk.milkTeaFreight +'</p> '
			str += '	</div> '
			str += '</div> '
				
			str += '<div class="comment"> '
			str += '	<h2>宝贝评价（0）</h2> '
			str += '	<ul> '
			str += '		<li><a hhref="">有图（0）</a></li> '
			str += '	<li><a hhref="">好评（0）</a></li> '
			str += '	<li><a hhref="">中评（0）</a></li> '
			str += '	<li><a hhref="">差评（0）</a></li> '
			str += '</ul> '
			str += '</div> <input type="hidden" id="mk" value="'+ message.mk.milkTeaName +'" />'
				
			str += '<div class="detail-con"> '
			str += '	<p>  排毒排便－香蕉牛奶汁</p> '
			str += '	<p>  适量加入牛奶调理，可以补充更多钙质，对于正在减肥中的女孩来说，也比较有饱足感。经常失眠或是容易经痛的女孩也可以喝喝看！</p> '
			str += '	<br /> '
			str += '<br /> '
			str += '<p>  止咳防晕－芒果汁</p> '
			str += '<p>  退火利尿－椰子汁</p> '
			str += '<p>  不过有的人会怕椰子的味道，也因为椰子水生冷寒性，因此女孩们如果想喝椰子水来消暑，或是肠胃不好的人，在喝之前还是要三思！</p> '
			str += '<p>  水果之王－奇异果汁</p> '
			str += '<img src="images/banner.jpg" /> '
			str += '</div> '
		
			$("#milk_all_info").html(str);
		},
		error : function(message){
			alert(message + "false");
		}
	})

	
	
})
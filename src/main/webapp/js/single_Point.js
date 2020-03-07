$(function() {
	$.post('/MilkTea/adress/select_all_mk.xiong', function(data) {
		var arr=data.mkInfo;
		var str = '';
        for(var i=0;i<arr.length;i++){
        	var info = arr[i];
        	str += '<li>'
        	str += '<div class="am-gallery-item">'
        	str += '	<a href="detail.jsp?mkname='+info.milkTeaName+'" class=""> <img src="'+ info.milkTeaImgSrc +'" alt="" />'
        	str += '		<h3 class="am-gallery-title">'+ info.milkTeaName +'</h3>'
        	str += '		<div class="am-gallery-desc">'
        	str += '			<em>原价:￥'+ info.milkTeaNormalprice +'</em><em>-----></em><em>特价:￥' + info.milkTeaSpecialprice + '</em><i class="am-icon-cart-plus"></i>'
        	str += '		</div>'
        	str += '	</a>'
        	str += '</div>'
        	str += '</li>'
        }
        $("#allMilkInfo").html(str)
	},"json");
});

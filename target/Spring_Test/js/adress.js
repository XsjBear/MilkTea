$(function(){
	/*alert("测试")*/
	var adress = {
			"username" : $('#loginusername').val(),
	};
	$.ajax({
		type : "POST",
		url : "/MilkTea/adress/all_adress.xiong",
		contentType : "application/json ; charset=utf-8",
		data : JSON.stringify(adress),
		dataType : "json",
		success : function(message){
			var arr=message.userlist;
			var str = '';
            for(var i=0;i<arr.length;i++){
            	var useradress = arr[i];
            	str += '<li class="curr">'
            	str += '<p>收货人：'+useradress.username + '&nbsp;&nbsp;'+useradress.contactWay + '</p>'
            	str += '<p class="order-add1">收货地址：'+useradress.adress + '</p>'
            	str += '<hr>'
            	str += '<div class="address-cz">'
            	str += '	<label class="am-radio am-warning"> <input type="radio"'
            	str += '		name="radio3" value="" data-am-ucheck="" checked=""'
            	str += '		class="am-ucheck-radio"><span class="am-ucheck-icons"><i'
            	str += '			class="am-icon-unchecked"></i><i class="am-icon-checked"></i></span> 设为默认'
            	str += '	</label> <a href=""><img src="images/bj.png" style="width: 18px;">&nbsp;编辑</a>'
            	str += '	<a href="">删除</a>'
            	str += '</div>'
            	str += '</li>'
            }
            $("#alladress").html(str)
		},
		error : function(message){
			alert("default")
		}
	});

})
$(function(){
	var result = {
			"content" : "1"
	};
	
	$.ajax({
		type : "POST",
		url : "/MilkTea/adress/search_select_all_mk.xiong",
		contentType : "application/json ; charset=utf-8",
		data : JSON.stringify(result),
		dataType : "json",
		success : function(message){
			var arr=message.mkInfos;
			var str = '';
			$("#searchallmilkInfo").html("");
	        for(var i=0;i<arr.length;i++){
	        	var info = arr[i];
	        	str += '<li>'
	        	str += '<div class="am-gallery-item">'
	        	str += '	 <a href="detail.jsp?mkname='+info.milkTeaName+'" class=""><img src="'+ info.milkTeaImgSrc +'" alt="" />'
	        	str += '		<h3 class="am-gallery-title">'+ info.milkTeaName +'</h3>'
	        	str += '		<div class="am-gallery-desc">'
	        	str += '			<em>原价:￥'+ info.milkTeaNormalprice +'</em><em>-----></em><em>特价:￥' + info.milkTeaSpecialprice + '</em><i class="am-icon-cart-plus"></i>'
	        	str += '		</div>'
	        	str += '	</a>'
	        	str += '</div>'
	        	str += '</li>'
	        }
	        $("#searchallmilkInfo").html(str)
		},
		error : function(message){
			alert("false");
		}
	})
	
//	$.post('/MilkTea/adress/search_select_all_mk.xiong', function(data) {
//		alert("fanhui1")

//		var arr=data.mkInfos;
//		var str = '';
//        for(var i=0;i<arr.length;i++){
//        	var info = arr[i];
//        	str += '<li>'
//        	str += '<div class="am-gallery-item">'
//        	str += '	 <a href="detail.jsp?mkname='+info.milkTeaName+'" class=""><img src="'+ info.milkTeaImgSrc +'" alt="" />'
//        	str += '		<h3 class="am-gallery-title">'+ info.milkTeaName +'</h3>'
//        	str += '		<div class="am-gallery-desc">'
//        	str += '			<em>原价:￥'+ info.milkTeaNormalprice +'</em><em>-----></em><em>特价:￥' + info.milkTeaSpecialprice + '</em><i class="am-icon-cart-plus"></i>'
//        	str += '		</div>'
//        	str += '	</a>'
//        	str += '</div>'
//        	str += '</li>'
//        }
//        $("#searchallmilkInfo").html(str)
//	},"json");
	
	$('#searchinput').bind('keypress',function(event){
        if(event.keyCode == "13")    
        {
        	var mkinfo = {
        			"milkTeaName" : $('#searchinput').val()
        	};
        	$.ajax({
        		type : "POST",
        		url : "/MilkTea/adress/search_one_like.xiong",
        		contentType : "application/json ; charset=utf-8",
        		data : JSON.stringify(mkinfo),
        		dataType : "json",
        		success : function(message){
        			$("#searchallmilkInfo").html(' ')
        			var arr=message.searchMilk;
        			var str = '';
        			if(arr == 'false'){
        				alert("您查询的内容为空,请重新输入!!!!!!!!!");
        				window.location.href="search.jsp";
        			}else{
        				for(var i=0;i<arr.length;i++){
            	        	var info = arr[i];
            	        	str += '<li>'
            	        	str += '<div class="am-gallery-item">'
            	        	str += '	 <a href="detail.jsp?mkname='+info.milkTeaName+'" class=""><img src="'+ info.milkTeaImgSrc +'" alt="" />'
            	        	str += '		<h3 class="am-gallery-title">'+ info.milkTeaName +'</h3>'
            	        	str += '		<div class="am-gallery-desc">'
            	        	str += '			<em>原价:￥'+ info.milkTeaNormalprice +'</em><em>-----></em><em>特价:￥' + info.milkTeaSpecialprice + '</em><i class="am-icon-cart-plus"></i>'
            	        	str += '		</div>'
            	        	str += '	</a>'
            	        	str += '</div>'
            	        	str += '</li>'
            	        }
            	        $("#searchallmilkInfo").html(str)
        			}
        		},
        		error : function(message){
        			alert("false");
        		}
        	})
        }
    });
	
	
	$(".paixu").children('li').click(function(){
		var result = {
    			"content" : $(this).children('span').html()
    	};
    	$.ajax({
    		type : "POST",
    		url : "/MilkTea/adress/search_select_all_mk.xiong",
    		contentType : "application/json ; charset=utf-8",
    		data : JSON.stringify(result),
    		dataType : "json",
    		success : function(message){
    			var arr=message.mkInfos;
    			var str = '';
    			$("#searchallmilkInfo").html("");
    	        for(var i=0;i<arr.length;i++){
    	        	var info = arr[i];
    	        	str += '<li>'
    	        	str += '<div class="am-gallery-item">'
    	        	str += '	 <a href="detail.jsp?mkname='+info.milkTeaName+'" class=""><img src="'+ info.milkTeaImgSrc +'" alt="" />'
    	        	str += '		<h3 class="am-gallery-title">'+ info.milkTeaName +'</h3>'
    	        	str += '		<div class="am-gallery-desc">'
    	        	str += '			<em>原价:￥'+ info.milkTeaNormalprice +'</em><em>-----></em><em>特价:￥' + info.milkTeaSpecialprice + '</em><i class="am-icon-cart-plus"></i>'
    	        	str += '		</div>'
    	        	str += '	</a>'
    	        	str += '</div>'
    	        	str += '</li>'
    	        }
    	        $("#searchallmilkInfo").html(str)
    		},
    		error : function(message){
    			alert("false");
    		}
    	})
		});

})



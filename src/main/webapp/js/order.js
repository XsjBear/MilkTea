$(function(){
	var order = {
			"order_state" : "全部"
	};
	$.ajax({
		type : "POST",
		url : "/MilkTea/order/order.xiong",
		contentType : "application/json ; charset=utf-8",
		data : JSON.stringify(order),
		dataType : "json",
		success : function(message){
				 $(".show").html('');
				 var str = '';
				 var arr=message.orderList;
				 for(var i=0;i<arr.length;i++){
				 if(arr[i].order_state == 'fk'){
					 $(".show").html('');
						var arr=message.orderList;
				        for(var i=0;i<arr.length;i++){
				        	var str2 = '';
				        	var info = arr[i];
				        	str += '<div class="c-comment">'
							+'<span class="c-comment-num">订单编号：'+ info.order_id +'</span>'
							+'<span class="c-comment-suc">待付款</span>'
							+'</div>'
							
							for(var j=0;j<info.list.length;j++){
								var info1 = info.list[j];
							str2+='<div class="c-comment-list" style="border: 0;">'
							+'<a class="o-con" href="detail.jsp?mkname='+info1.milk_tea_name+'">'
							+'	<div class="o-con-img"><img src="'+info1.milk_img_src+'"></div>'
							+'    <div class="o-con-txt">'
							+'    	<p>'+info1.milk_tea_name+'</p>'
							+'    	<p class="price">￥'+info1.milk_special_num+'</p>'
							+'    	<p>合计：<span>￥'+info1.milk_special_num *  info1.milk_tea_count + '</span></p>'
							+'   </div>'
							+'	<div class="o-con-much"> <h4>x'+ info1.milk_tea_count +'</h4></div>'
							+'</a>'
							+'<div class="c-com-money">花'+ info1.milk_tea_count +'个商品 实付金额：<span>￥ '+info1.milk_special_num *  info1.milk_tea_count + '</span></div>'
							}
							str +=str2;
							str+='</div>'
							+'<div class="c-com-btn">'
							+'<a href="tureorder.html">立即支付</a>'
							+'<a href="">取消订单</a>'
							+'</div>'
							+'<div class="clear"></div>'
							}
					 $(".show").html(str)
					}else if(arr[i].order_state == 'sh'){
						 $(".show").html('')
							var arr=message.orderList;
//							var str = '';
//							var str2 = '';
					        for(var i=0;i<arr.length;i++){
					        	var str2 = '';
					        	var info = arr[i];
								str+='<div class="c-comment">'
								+'<span class="c-comment-num">订单编号：'+ info.order_id +'</span>'
								+'<span class="c-comment-suc">卖家已发货</span>'
								+'</div>'
								+'<div class="c-comment-list" style="border: 0;">'
								for(var j=0;j<info.list.length;j++){
									var info1 = info.list[j];
								str2+='<a class="o-con" href="">'
								+'	<div class="o-con-img"><img src="'+info1.milk_img_src+'"></div>'
								+'    <div class="o-con-txt">'
								+'   	<p>'+info1.milk_tea_name+'</p>'
								+'    	<p class="price">￥'+info1.milk_special_num+'</p>'
								+'    	<p>合计：<span>￥'+info1.milk_special_num *  info1.milk_tea_count + '</span></p>'
								+'   </div>'
								+'	<div class="o-con-much"> <h4>x'+ info1.milk_tea_count +'</h4></div>'
								+' </a>'
								+'<div class="c-com-money">花'+ info1.milk_tea_count +'个商品 实付金额：<span>￥ '+info1.milk_special_num *  info1.milk_tea_count + '</span></div>'
								+'</div>'
								}
								str +=str2;
								str+='<div class="c-com-btn">'
								+'<a href="">确认收货</a>'
								+'</div>'
								+'<div class="clear"></div>' 
							
					        	
					        }
						 $(".show").html(str)
						}else if(arr[i].order_state == 'pj'){
					 $(".show").html('')
						var arr=message.orderList;
//						var str = '';
//						var str2 = '';
				        for(var i=0;i<arr.length;i++){
				        	var str2 = '';
				        	var info = arr[i];
							str+='<div class="c-comment">'
							+'<span class="c-comment-num">订单编号：'+ info.order_id +'</span>'
							+'<span class="c-comment-suc">卖家已发货</span>'
							+'</div>'
							+'<div class="c-comment-list" style="border: 0;">'
							for(var j=0;j<info.list.length;j++){
								var info1 = info.list[j];
							str2+='<a class="o-con" href="">'
							+'	<div class="o-con-img"><img src="'+info1.milk_img_src+'"></div>'
							+'    <div class="o-con-txt">'
							+'   	<p>'+info1.milk_tea_name+'</p>'
							+'    	<p class="price">￥'+info1.milk_special_num+'</p>'
							+'    	<p>合计：<span>￥'+info1.milk_special_num *  info1.milk_tea_count + '</span></p>'
							+'   </div>'
							+'	<div class="o-con-much"> <h4>x'+ info1.milk_tea_count +'</h4></div>'
							+' </a>'
							+'<div class="c-com-money">花'+ info1.milk_tea_count +'个商品 实付金额：<span>￥ '+info1.milk_special_num *  info1.milk_tea_count + '</span></div>'
							+'</div>'
							}
							str +=str2;
							str+='<div class="c-com-btn">'
							+'<a href="">去评价</a>'
							+'</div>'
							+'<div class="clear"></div>' 
				        }
					 $(".show").html(str)
					}else if(arr[i].order_state == 'thh'){
						 $(".show").html('')
							var arr=message.orderList;
//							var str = '';
//							var str2 = '';
					        for(var i=0;i<arr.length;i++){
					        	var str2 = '';
					        	var info = arr[i];
								str+='<div class="c-comment">'
								+'<span class="c-comment-num">订单编号：'+ info.order_id +'</span>'
								+'<span class="c-comment-suc">卖家已发货</span>'
								+'</div>'
								+'<div class="c-comment-list" style="border: 0;">'
								for(var j=0;j<info.list.length;j++){
									var info1 = info.list[j];
								str2+='<a class="o-con" href="">'
								+'	<div class="o-con-img"><img src="'+info1.milk_img_src+'"></div>'
								+'    <div class="o-con-txt">'
								+'   	<p>'+info1.milk_tea_name+'</p>'
								+'    	<p class="price">￥'+info1.milk_special_num+'</p>'
								+'    	<p>合计：<span>￥'+info1.milk_special_num *  info1.milk_tea_count + '</span></p>'
								+'   </div>'
								+'	<div class="o-con-much"> <h4>x'+ info1.milk_tea_count +'</h4></div>'
								+' </a>'
								+'<div class="c-com-money">花'+ info1.milk_tea_count +'个商品 实付金额：<span>￥ '+info1.milk_special_num *  info1.milk_tea_count + '</span></div>'
								+'</div>'
								}
								str +=str2;
								str+='<div class="c-com-btn">'
								+'<a href="">退换货</a>'
								+'</div>'
								+'<div class="clear"></div>' 
					        }
					        console.log(str);
						 $(".show").html(str)
						}
				 	}
		},
		error : function(message){
			alert(message + "false");
		}
	})
	
	/**********************/
	
	$(".order-style").children('li').click(function(){
		 $('.order-style li').removeClass('current');
		$(this).attr("class","current");
		$(this).children('span').css("color","black");
		
		var order = {
				"order_state" : $(this).children('span').html()
		};
		$.ajax({
			type : "POST",
			url : "/MilkTea/order/order.xiong",
			contentType : "application/json ; charset=utf-8",
			data : JSON.stringify(order),
			dataType : "json",
			success : function(message){
				
				if(message.state == "全部"){
					 $(".show").html('');
					 var str = '';
					
					 var arr=message.orderList;
					 for(var i=0;i<arr.length;i++){
					 if(arr[i].order_state == 'fk'){
						 $(".show").html('');
							var arr=message.orderList;
					        for(var i=0;i<arr.length;i++){
					        	var str2 = '';
					        	var info = arr[i];
					        	str += '<div class="c-comment">'
								+'<span class="c-comment-num">订单编号：'+ info.order_id +'</span>'
								+'<span class="c-comment-suc">待付款</span>'
								+'</div>'
								
								for(var j=0;j<info.list.length;j++){
									var info1 = info.list[j];
								str2+='<div class="c-comment-list" style="border: 0;">'
								+'<a class="o-con" href="detail.jsp?mkname='+info1.milk_tea_name+'">'
								+'	<div class="o-con-img"><img src="'+info1.milk_img_src+'"></div>'
								+'    <div class="o-con-txt">'
								+'    	<p>'+info1.milk_tea_name+'</p>'
								+'    	<p class="price">￥'+info1.milk_special_num+'</p>'
								+'    	<p>合计：<span>￥'+info1.milk_special_num *  info1.milk_tea_count + '</span></p>'
								+'   </div>'
								+'	<div class="o-con-much"> <h4>x'+ info1.milk_tea_count +'</h4></div>'
								+'</a>'
								+'<div class="c-com-money">花'+ info1.milk_tea_count +'个商品 实付金额：<span>￥ '+info1.milk_special_num *  info1.milk_tea_count + '</span></div>'
								}
								str +=str2;
								str+='</div>'
								+'<div class="c-com-btn">'
								+'<a href="tureorder.html">立即支付</a>'
								+'<a href="">取消订单</a>'
								+'</div>'
								+'<div class="clear"></div>'
								}
						 $(".show").html(str)
						}else if(arr[i].order_state == 'sh'){
							 $(".show").html('')
								var arr=message.orderList;
//								var str = '';
//								var str2 = '';
						        for(var i=0;i<arr.length;i++){
						        	var str2 = '';
						        	var info = arr[i];
									str+='<div class="c-comment">'
									+'<span class="c-comment-num">订单编号：'+ info.order_id +'</span>'
									+'<span class="c-comment-suc">卖家已发货</span>'
									+'</div>'
									+'<div class="c-comment-list" style="border: 0;">'
									for(var j=0;j<info.list.length;j++){
										var info1 = info.list[j];
									str2+='<a class="o-con" href="">'
									+'	<div class="o-con-img"><img src="'+info1.milk_img_src+'"></div>'
									+'    <div class="o-con-txt">'
									+'   	<p>'+info1.milk_tea_name+'</p>'
									+'    	<p class="price">￥'+info1.milk_special_num+'</p>'
									+'    	<p>合计：<span>￥'+info1.milk_special_num *  info1.milk_tea_count + '</span></p>'
									+'   </div>'
									+'	<div class="o-con-much"> <h4>x'+ info1.milk_tea_count +'</h4></div>'
									+' </a>'
									+'<div class="c-com-money">花'+ info1.milk_tea_count +'个商品 实付金额：<span>￥ '+info1.milk_special_num *  info1.milk_tea_count + '</span></div>'
									+'</div>'
									}
									str +=str2;
									str+='<div class="c-com-btn">'
									+'<a href="">确认收货</a>'
									+'</div>'
									+'<div class="clear"></div>' 
								
						        	
						        }
							 $(".show").html(str)
							}else if(arr[i].order_state == 'pj'){
						 $(".show").html('')
							var arr=message.orderList;
//							var str = '';
//							var str2 = '';
					        for(var i=0;i<arr.length;i++){
					        	var str2 = '';
					        	var info = arr[i];
								str+='<div class="c-comment">'
								+'<span class="c-comment-num">订单编号：'+ info.order_id +'</span>'
								+'<span class="c-comment-suc">卖家已发货</span>'
								+'</div>'
								+'<div class="c-comment-list" style="border: 0;">'
								for(var j=0;j<info.list.length;j++){
									var info1 = info.list[j];
								str2+='<a class="o-con" href="">'
								+'	<div class="o-con-img"><img src="'+info1.milk_img_src+'"></div>'
								+'    <div class="o-con-txt">'
								+'   	<p>'+info1.milk_tea_name+'</p>'
								+'    	<p class="price">￥'+info1.milk_special_num+'</p>'
								+'    	<p>合计：<span>￥'+info1.milk_special_num *  info1.milk_tea_count + '</span></p>'
								+'   </div>'
								+'	<div class="o-con-much"> <h4>x'+ info1.milk_tea_count +'</h4></div>'
								+' </a>'
								+'<div class="c-com-money">花'+ info1.milk_tea_count +'个商品 实付金额：<span>￥ '+info1.milk_special_num *  info1.milk_tea_count + '</span></div>'
								+'</div>'
								}
								str +=str2;
								str+='<div class="c-com-btn">'
								+'<a href="">去评价</a>'
								+'</div>'
								+'<div class="clear"></div>' 
					        }
						 $(".show").html(str)
						}else if(arr[i].order_state == 'thh'){
							 $(".show").html('')
								var arr=message.orderList;
//								var str = '';
//								var str2 = '';
						        for(var i=0;i<arr.length;i++){
						        	var str2 = '';
						        	var info = arr[i];
									str+='<div class="c-comment">'
									+'<span class="c-comment-num">订单编号：'+ info.order_id +'</span>'
									+'<span class="c-comment-suc">卖家已发货</span>'
									+'</div>'
									+'<div class="c-comment-list" style="border: 0;">'
									for(var j=0;j<info.list.length;j++){
										var info1 = info.list[j];
									str2+='<a class="o-con" href="">'
									+'	<div class="o-con-img"><img src="'+info1.milk_img_src+'"></div>'
									+'    <div class="o-con-txt">'
									+'   	<p>'+info1.milk_tea_name+'</p>'
									+'    	<p class="price">￥'+info1.milk_special_num+'</p>'
									+'    	<p>合计：<span>￥'+info1.milk_special_num *  info1.milk_tea_count + '</span></p>'
									+'   </div>'
									+'	<div class="o-con-much"> <h4>x'+ info1.milk_tea_count +'</h4></div>'
									+' </a>'
									+'<div class="c-com-money">花'+ info1.milk_tea_count +'个商品 实付金额：<span>￥ '+info1.milk_special_num *  info1.milk_tea_count + '</span></div>'
									+'</div>'
									}
									str +=str2;
									str+='<div class="c-com-btn">'
									+'<a href="">退换货</a>'
									+'</div>'
									+'<div class="clear"></div>' 
								
						        	
						        }
						        console.log(str);
							 $(".show").html(str)
							}
				  }
				}else if(message.state == "待付款"){
					 $(".show").html('');
					var arr=message.orderList;
					var str = '';
					
			        for(var i=0;i<arr.length;i++){
			        	var str2 = '';
			        	var info = arr[i];
			        	str += '<div class="c-comment">'
						+'<span class="c-comment-num">订单编号：'+ info.order_id +'</span>'
						+'<span class="c-comment-suc">待付款</span>'
						+'</div>'
						
						for(var j=0;j<info.list.length;j++){
							var info1 = info.list[j];
						str2+='<div class="c-comment-list" style="border: 0;">'
						+'<a class="o-con" href="detail.jsp?mkname='+info1.milk_tea_name+'">'
						+'	<div class="o-con-img"><img src="'+info1.milk_img_src+'"></div>'
						+'    <div class="o-con-txt">'
						+'    	<p>'+info1.milk_tea_name+'</p>'
						+'    	<p class="price">￥'+info1.milk_special_num+'</p>'
						+'    	<p>合计：<span>￥'+info1.milk_special_num *  info1.milk_tea_count + '</span></p>'
						+'   </div>'
						+'	<div class="o-con-much"> <h4>x'+ info1.milk_tea_count +'</h4></div>'
						+'</a>'
						+'<div class="c-com-money">花'+ info1.milk_tea_count +'个商品 实付金额：<span>￥ '+info1.milk_special_num *  info1.milk_tea_count + '</span></div>'
						}
						str +=str2;
						str+='</div>'
						+'<div class="c-com-btn">'
						+'<a href="tureorder.html">立即支付</a>'
						+'<a href="">取消订单</a>'
						+'</div>'
						+'<div class="clear"></div>'
						}
				 $(".show").html(str)
				}else if(message.state == "待收货"){
					 $(".show").html('')
					var arr=message.orderList;
					var str = '';
					var str2 = '';
			        for(var i=0;i<arr.length;i++){
			        	var str2 = '';
			        	var info = arr[i];
						str+='<div class="c-comment">'
						+'<span class="c-comment-num">订单编号：'+ info.order_id +'</span>'
						+'<span class="c-comment-suc">卖家已发货</span>'
						+'</div>'
						+'<div class="c-comment-list" style="border: 0;">'
						for(var j=0;j<info.list.length;j++){
							var info1 = info.list[j];
						str2+='<a class="o-con" href="">'
						+'	<div class="o-con-img"><img src="'+info1.milk_img_src+'"></div>'
						+'    <div class="o-con-txt">'
						+'   	<p>'+info1.milk_tea_name+'</p>'
						+'    	<p class="price">￥'+info1.milk_special_num+'</p>'
						+'    	<p>合计：<span>￥'+info1.milk_special_num *  info1.milk_tea_count + '</span></p>'
						+'   </div>'
						+'	<div class="o-con-much"> <h4>x'+ info1.milk_tea_count +'</h4></div>'
						+' </a>'
						+'<div class="c-com-money">花'+ info1.milk_tea_count +'个商品 实付金额：<span>￥ '+info1.milk_special_num *  info1.milk_tea_count + '</span></div>'
						+'</div>'
						}
						str +=str2;
						str+='<div class="c-com-btn">'
						+'<a href="">确认收货</a>'
						+'</div>'
						+'<div class="clear"></div>' 
					
			        	
			        }
				 $(".show").html(str)
				
				}else if(message.state == "退换货"){
					 $(".show").html('')
						var arr=message.orderList;
						var str = '';
						var str2 = '';
				        for(var i=0;i<arr.length;i++){
				        	var str2 = '';
				        	var info = arr[i];
							str+='<div class="c-comment">'
							+'<span class="c-comment-num">订单编号：'+ info.order_id +'</span>'
							+'<span class="c-comment-suc">卖家已发货</span>'
							+'</div>'
							+'<div class="c-comment-list" style="border: 0;">'
							for(var j=0;j<info.list.length;j++){
								var info1 = info.list[j];
							str2+='<a class="o-con" href="">'
							+'	<div class="o-con-img"><img src="'+info1.milk_img_src+'"></div>'
							+'    <div class="o-con-txt">'
							+'   	<p>'+info1.milk_tea_name+'</p>'
							+'    	<p class="price">￥'+info1.milk_special_num+'</p>'
							+'    	<p>合计：<span>￥'+info1.milk_special_num *  info1.milk_tea_count + '</span></p>'
							+'   </div>'
							+'	<div class="o-con-much"> <h4>x'+ info1.milk_tea_count +'</h4></div>'
							+' </a>'
							+'<div class="c-com-money">花'+ info1.milk_tea_count +'个商品 实付金额：<span>￥ '+info1.milk_special_num *  info1.milk_tea_count + '</span></div>'
							+'</div>'
							}
							str +=str2;
							str+='<div class="c-com-btn">'
							+'<a href="">退换货</a>'
							+'</div>'
							+'<div class="clear"></div>' 
						
				        }
						console.log(str);
					 $(".show").html(str)
					
					}else if(message.state == "待评价"){
					 $(".show").html('')
						var arr=message.orderList;
						var str = '';
						var str2 = '';
				        for(var i=0;i<arr.length;i++){
				        	var str2 = '';
				        	var info = arr[i];
							str+='<div class="c-comment">'
							+'<span class="c-comment-num">订单编号：'+ info.order_id +'</span>'
							+'<span class="c-comment-suc">卖家已发货</span>'
							+'</div>'
							+'<div class="c-comment-list" style="border: 0;">'
							for(var j=0;j<info.list.length;j++){
								var info1 = info.list[j];
							str2+='<a class="o-con" href="">'
							+'	<div class="o-con-img"><img src="'+info1.milk_img_src+'"></div>'
							+'    <div class="o-con-txt">'
							+'   	<p>'+info1.milk_tea_name+'</p>'
							+'    	<p class="price">￥'+info1.milk_special_num+'</p>'
							+'    	<p>合计：<span>￥'+info1.milk_special_num *  info1.milk_tea_count + '</span></p>'
							+'   </div>'
							+'	<div class="o-con-much"> <h4>x'+ info1.milk_tea_count +'</h4></div>'
							+' </a>'
							+'<div class="c-com-money">花'+ info1.milk_tea_count +'个商品 实付金额：<span>￥ '+info1.milk_special_num *  info1.milk_tea_count + '</span></div>'
							+'</div>'
							}
							str +=str2;
							str+='<div class="c-com-btn">'
							+'<a href="">去评价</a>'
							+'</div>'
							+'<div class="clear"></div>' 
				        }
					 $(".show").html(str)
					}
				
			},
			error : function(message){
				alert(message + "false");
			}
		})
	})
	
	
	$('.cate-input').bind('keypress',function(event){
        if(event.keyCode == "13")    
        {
        	alert($('.cate-input').val())
//        	var order = {
//        			"order_state" :  '全部',
//    				"order_id" :  $('.cate-input').val()
//    		};
//        	$.ajax({
//        		type : "POST",
//        		url : "/MilkTea/order/order.xiong",
//        		contentType : "application/json ; charset=utf-8",
//        		data : JSON.stringify(order),
//        		dataType : "json",
//        		success : function(message){
//    				alert("成功返回了")
//    				if(message.state == "全部"){
//    					 $(".show").html('');
//    					 var str = '';
//    					
//    					 var arr=message.orderList;
//    					 for(var i=0;i<arr.length;i++){
//    					 if(arr[i].order_state == 'fk'){
//    						 $(".show").html('');
//    							var arr=message.orderList;
//    					        for(var i=0;i<arr.length;i++){
//    					        	var str2 = '';
//    					        	var info = arr[i];
//    					        	str += '<div class="c-comment">'
//    								+'<span class="c-comment-num">订单编号：'+ info.order_id +'</span>'
//    								+'<span class="c-comment-suc">待付款</span>'
//    								+'</div>'
//    								
//    								for(var j=0;j<info.list.length;j++){
//    									var info1 = info.list[j];
//    								str2+='<div class="c-comment-list" style="border: 0;">'
//    								+'<a class="o-con" href="detail.jsp?mkname='+info1.milk_tea_name+'">'
//    								+'	<div class="o-con-img"><img src="'+info1.milk_img_src+'"></div>'
//    								+'    <div class="o-con-txt">'
//    								+'    	<p>'+info1.milk_tea_name+'</p>'
//    								+'    	<p class="price">￥'+info1.milk_special_num+'</p>'
//    								+'    	<p>合计：<span>￥'+info1.milk_special_num *  info1.milk_tea_count + '</span></p>'
//    								+'   </div>'
//    								+'	<div class="o-con-much"> <h4>x'+ info1.milk_tea_count +'</h4></div>'
//    								+'</a>'
//    								+'<div class="c-com-money">花'+ info1.milk_tea_count +'个商品 实付金额：<span>￥ '+info1.milk_special_num *  info1.milk_tea_count + '</span></div>'
//    								}
//    								str +=str2;
//    								str+='</div>'
//    								+'<div class="c-com-btn">'
//    								+'<a href="tureorder.html">立即支付</a>'
//    								+'<a href="">取消订单</a>'
//    								+'</div>'
//    								+'<div class="clear"></div>'
//    								}
//    						 $(".show").html(str)
//    						}else if(arr[i].order_state == 'sh'){
//    							 $(".show").html('')
//    								var arr=message.orderList;
////    								var str = '';
////    								var str2 = '';
//    						        for(var i=0;i<arr.length;i++){
//    						        	var str2 = '';
//    						        	var info = arr[i];
//    									str+='<div class="c-comment">'
//    									+'<span class="c-comment-num">订单编号：'+ info.order_id +'</span>'
//    									+'<span class="c-comment-suc">卖家已发货</span>'
//    									+'</div>'
//    									+'<div class="c-comment-list" style="border: 0;">'
//    									for(var j=0;j<info.list.length;j++){
//    										var info1 = info.list[j];
//    									str2+='<a class="o-con" href="">'
//    									+'	<div class="o-con-img"><img src="'+info1.milk_img_src+'"></div>'
//    									+'    <div class="o-con-txt">'
//    									+'   	<p>'+info1.milk_tea_name+'</p>'
//    									+'    	<p class="price">￥'+info1.milk_special_num+'</p>'
//    									+'    	<p>合计：<span>￥'+info1.milk_special_num *  info1.milk_tea_count + '</span></p>'
//    									+'   </div>'
//    									+'	<div class="o-con-much"> <h4>x'+ info1.milk_tea_count +'</h4></div>'
//    									+' </a>'
//    									+'<div class="c-com-money">花'+ info1.milk_tea_count +'个商品 实付金额：<span>￥ '+info1.milk_special_num *  info1.milk_tea_count + '</span></div>'
//    									+'</div>'
//    									}
//    									str +=str2;
//    									str+='<div class="c-com-btn">'
//    									+'<a href="">确认收货</a>'
//    									+'</div>'
//    									+'<div class="clear"></div>' 
//    								
//    						        	
//    						        }
//    							 $(".show").html(str)
//    							}else if(arr[i].order_state == 'pj'){
//    						 $(".show").html('')
//    							var arr=message.orderList;
////    							var str = '';
////    							var str2 = '';
//    					        for(var i=0;i<arr.length;i++){
//    					        	var str2 = '';
//    					        	var info = arr[i];
//    								str+='<div class="c-comment">'
//    								+'<span class="c-comment-num">订单编号：'+ info.order_id +'</span>'
//    								+'<span class="c-comment-suc">卖家已发货</span>'
//    								+'</div>'
//    								+'<div class="c-comment-list" style="border: 0;">'
//    								for(var j=0;j<info.list.length;j++){
//    									var info1 = info.list[j];
//    								str2+='<a class="o-con" href="">'
//    								+'	<div class="o-con-img"><img src="'+info1.milk_img_src+'"></div>'
//    								+'    <div class="o-con-txt">'
//    								+'   	<p>'+info1.milk_tea_name+'</p>'
//    								+'    	<p class="price">￥'+info1.milk_special_num+'</p>'
//    								+'    	<p>合计：<span>￥'+info1.milk_special_num *  info1.milk_tea_count + '</span></p>'
//    								+'   </div>'
//    								+'	<div class="o-con-much"> <h4>x'+ info1.milk_tea_count +'</h4></div>'
//    								+' </a>'
//    								+'<div class="c-com-money">花'+ info1.milk_tea_count +'个商品 实付金额：<span>￥ '+info1.milk_special_num *  info1.milk_tea_count + '</span></div>'
//    								+'</div>'
//    								}
//    								str +=str2;
//    								str+='<div class="c-com-btn">'
//    								+'<a href="">去评价</a>'
//    								+'</div>'
//    								+'<div class="clear"></div>' 
//    					        }
//    						 $(".show").html(str)
//    						}else if(arr[i].order_state == 'thh'){
//    							 $(".show").html('')
//    								var arr=message.orderList;
////    								var str = '';
////    								var str2 = '';
//    						        for(var i=0;i<arr.length;i++){
//    						        	var str2 = '';
//    						        	var info = arr[i];
//    									str+='<div class="c-comment">'
//    									+'<span class="c-comment-num">订单编号：'+ info.order_id +'</span>'
//    									+'<span class="c-comment-suc">卖家已发货</span>'
//    									+'</div>'
//    									+'<div class="c-comment-list" style="border: 0;">'
//    									for(var j=0;j<info.list.length;j++){
//    										var info1 = info.list[j];
//    									str2+='<a class="o-con" href="">'
//    									+'	<div class="o-con-img"><img src="'+info1.milk_img_src+'"></div>'
//    									+'    <div class="o-con-txt">'
//    									+'   	<p>'+info1.milk_tea_name+'</p>'
//    									+'    	<p class="price">￥'+info1.milk_special_num+'</p>'
//    									+'    	<p>合计：<span>￥'+info1.milk_special_num *  info1.milk_tea_count + '</span></p>'
//    									+'   </div>'
//    									+'	<div class="o-con-much"> <h4>x'+ info1.milk_tea_count +'</h4></div>'
//    									+' </a>'
//    									+'<div class="c-com-money">花'+ info1.milk_tea_count +'个商品 实付金额：<span>￥ '+info1.milk_special_num *  info1.milk_tea_count + '</span></div>'
//    									+'</div>'
//    									}
//    									str +=str2;
//    									str+='<div class="c-com-btn">'
//    									+'<a href="">退换货</a>'
//    									+'</div>'
//    									+'<div class="clear"></div>' 
//    								
//    						        	
//    						        }
//    						        console.log(str);
//    							 $(".show").html(str)
//    							}
//    				  }
//    				}else if(message.state == "待付款"){
//    					 $(".show").html('');
//    					var arr=message.orderList;
//    					var str = '';
//    					
//    			        for(var i=0;i<arr.length;i++){
//    			        	var str2 = '';
//    			        	var info = arr[i];
//    			        	str += '<div class="c-comment">'
//    						+'<span class="c-comment-num">订单编号：'+ info.order_id +'</span>'
//    						+'<span class="c-comment-suc">待付款</span>'
//    						+'</div>'
//    						
//    						for(var j=0;j<info.list.length;j++){
//    							var info1 = info.list[j];
//    						str2+='<div class="c-comment-list" style="border: 0;">'
//    						+'<a class="o-con" href="detail.jsp?mkname='+info1.milk_tea_name+'">'
//    						+'	<div class="o-con-img"><img src="'+info1.milk_img_src+'"></div>'
//    						+'    <div class="o-con-txt">'
//    						+'    	<p>'+info1.milk_tea_name+'</p>'
//    						+'    	<p class="price">￥'+info1.milk_special_num+'</p>'
//    						+'    	<p>合计：<span>￥'+info1.milk_special_num *  info1.milk_tea_count + '</span></p>'
//    						+'   </div>'
//    						+'	<div class="o-con-much"> <h4>x'+ info1.milk_tea_count +'</h4></div>'
//    						+'</a>'
//    						+'<div class="c-com-money">花'+ info1.milk_tea_count +'个商品 实付金额：<span>￥ '+info1.milk_special_num *  info1.milk_tea_count + '</span></div>'
//    						}
//    						str +=str2;
//    						str+='</div>'
//    						+'<div class="c-com-btn">'
//    						+'<a href="tureorder.html">立即支付</a>'
//    						+'<a href="">取消订单</a>'
//    						+'</div>'
//    						+'<div class="clear"></div>'
//    						}
//    				 $(".show").html(str)
//    				}else if(message.state == "待收货"){
//    					 $(".show").html('')
//    					var arr=message.orderList;
//    					var str = '';
//    					var str2 = '';
//    			        for(var i=0;i<arr.length;i++){
//    			        	var str2 = '';
//    			        	var info = arr[i];
//    						str+='<div class="c-comment">'
//    						+'<span class="c-comment-num">订单编号：'+ info.order_id +'</span>'
//    						+'<span class="c-comment-suc">卖家已发货</span>'
//    						+'</div>'
//    						+'<div class="c-comment-list" style="border: 0;">'
//    						for(var j=0;j<info.list.length;j++){
//    							var info1 = info.list[j];
//    						str2+='<a class="o-con" href="">'
//    						+'	<div class="o-con-img"><img src="'+info1.milk_img_src+'"></div>'
//    						+'    <div class="o-con-txt">'
//    						+'   	<p>'+info1.milk_tea_name+'</p>'
//    						+'    	<p class="price">￥'+info1.milk_special_num+'</p>'
//    						+'    	<p>合计：<span>￥'+info1.milk_special_num *  info1.milk_tea_count + '</span></p>'
//    						+'   </div>'
//    						+'	<div class="o-con-much"> <h4>x'+ info1.milk_tea_count +'</h4></div>'
//    						+' </a>'
//    						+'<div class="c-com-money">花'+ info1.milk_tea_count +'个商品 实付金额：<span>￥ '+info1.milk_special_num *  info1.milk_tea_count + '</span></div>'
//    						+'</div>'
//    						}
//    						str +=str2;
//    						str+='<div class="c-com-btn">'
//    						+'<a href="">确认收货</a>'
//    						+'</div>'
//    						+'<div class="clear"></div>' 
//    					
//    			        	
//    			        }
//    				 $(".show").html(str)
//    				
//    				}else if(message.state == "退换货"){
//    					 $(".show").html('')
//    						var arr=message.orderList;
//    						var str = '';
//    						var str2 = '';
//    				        for(var i=0;i<arr.length;i++){
//    				        	var str2 = '';
//    				        	var info = arr[i];
//    							str+='<div class="c-comment">'
//    							+'<span class="c-comment-num">订单编号：'+ info.order_id +'</span>'
//    							+'<span class="c-comment-suc">卖家已发货</span>'
//    							+'</div>'
//    							+'<div class="c-comment-list" style="border: 0;">'
//    							for(var j=0;j<info.list.length;j++){
//    								var info1 = info.list[j];
//    							str2+='<a class="o-con" href="">'
//    							+'	<div class="o-con-img"><img src="'+info1.milk_img_src+'"></div>'
//    							+'    <div class="o-con-txt">'
//    							+'   	<p>'+info1.milk_tea_name+'</p>'
//    							+'    	<p class="price">￥'+info1.milk_special_num+'</p>'
//    							+'    	<p>合计：<span>￥'+info1.milk_special_num *  info1.milk_tea_count + '</span></p>'
//    							+'   </div>'
//    							+'	<div class="o-con-much"> <h4>x'+ info1.milk_tea_count +'</h4></div>'
//    							+' </a>'
//    							+'<div class="c-com-money">花'+ info1.milk_tea_count +'个商品 实付金额：<span>￥ '+info1.milk_special_num *  info1.milk_tea_count + '</span></div>'
//    							+'</div>'
//    							}
//    							str +=str2;
//    							str+='<div class="c-com-btn">'
//    							+'<a href="">退换货</a>'
//    							+'</div>'
//    							+'<div class="clear"></div>' 
//    						
//    				        }
//    						console.log(str);
//    					 $(".show").html(str)
//    					
//    					}else if(message.state == "待评价"){
//    					 $(".show").html('')
//    						var arr=message.orderList;
//    						var str = '';
//    						var str2 = '';
//    				        for(var i=0;i<arr.length;i++){
//    				        	var str2 = '';
//    				        	var info = arr[i];
//    							str+='<div class="c-comment">'
//    							+'<span class="c-comment-num">订单编号：'+ info.order_id +'</span>'
//    							+'<span class="c-comment-suc">卖家已发货</span>'
//    							+'</div>'
//    							+'<div class="c-comment-list" style="border: 0;">'
//    							for(var j=0;j<info.list.length;j++){
//    								var info1 = info.list[j];
//    							str2+='<a class="o-con" href="">'
//    							+'	<div class="o-con-img"><img src="'+info1.milk_img_src+'"></div>'
//    							+'    <div class="o-con-txt">'
//    							+'   	<p>'+info1.milk_tea_name+'</p>'
//    							+'    	<p class="price">￥'+info1.milk_special_num+'</p>'
//    							+'    	<p>合计：<span>￥'+info1.milk_special_num *  info1.milk_tea_count + '</span></p>'
//    							+'   </div>'
//    							+'	<div class="o-con-much"> <h4>x'+ info1.milk_tea_count +'</h4></div>'
//    							+' </a>'
//    							+'<div class="c-com-money">花'+ info1.milk_tea_count +'个商品 实付金额：<span>￥ '+info1.milk_special_num *  info1.milk_tea_count + '</span></div>'
//    							+'</div>'
//    							}
//    							str +=str2;
//    							str+='<div class="c-com-btn">'
//    							+'<a href="">去评价</a>'
//    							+'</div>'
//    							+'<div class="clear"></div>' 
//    				        }
//    					 $(".show").html(str)
//    					}
//    			},
//        		error : function(message){
//        			alert("false");
//        		}
//        	})
        }
    });
	
	
})
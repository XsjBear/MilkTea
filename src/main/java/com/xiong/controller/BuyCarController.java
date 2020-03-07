package com.xiong.controller;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import com.xiong.dao.BuyCarMapper;
import com.xiong.dao.MilkTeaInfoMapper;
import com.xiong.entity.BuyCar;
import com.xiong.entity.MilkTeaInfo;
import com.xiong.entity.User;
import com.xiong.resultentity.BuyCarBean;
import com.xiong.resultentity.Result;

@Controller
@RequestMapping(value="buyCar")
public class BuyCarController {
	
	@Autowired
	BuyCarMapper buyCar;
	
	@Autowired
	MilkTeaInfoMapper mk;
	
	
	@RequestMapping(value="/showBuyCar.xiong" , method=RequestMethod.POST)
	@ResponseBody 
	public Map<String,Object> showBuyCar(HttpServletRequest request ,HttpServletResponse response) {
		User user = (User) request.getSession().getAttribute("User");
		Map<String,Object> map = new HashMap<>();
		if(user != null) {
			BuyCar buy = new BuyCar();
			buy.setUsername(user.getUsername());
			List<BuyCar> list = buyCar.selectByUsername(buy);
			List<BuyCarBean> lists = new ArrayList<>();
			for (BuyCar buyCar : list) {
				MilkTeaInfo mkInfo = new MilkTeaInfo();
				mkInfo.setMilkTeaName(buyCar.getMilkTeaName());
				mkInfo = mk.select_one(mkInfo);
				lists.add(new BuyCarBean(null, mkInfo.getMilkTeaName(), mkInfo.getMilkTeaImgSrc(),
						buyCar.getMilkTeaCount(), null, mkInfo.getMilkTeaSpecialprice(), buyCar.getUsername(),
						null, null, null, null, null, null, null, null));
			}
			map.put("result", lists);
		}else {
			map.put("result", "false");
		}
		return map;
	}
	

	@RequestMapping(value="/buyNow.xiong" , method=RequestMethod.POST)
	@ResponseBody 
	public void buyNow(HttpServletRequest request ,HttpServletResponse response) {
		
	}
	
	@RequestMapping(value="/addCar.xiong" , method=RequestMethod.POST)
	@ResponseBody 
	public Result addBuyCar(@RequestBody Result result ,HttpServletRequest request ,HttpServletResponse response) {
		String flag = result.getContent().substring(0, result.getContent().indexOf(","));
		String mkName = result.getContent().substring(result.getContent().indexOf(",") + 1, result.getContent().length());
		Result re = new Result();
		if(flag.equals("加入购物车")) {
			//想购物车中添加记录然后跳转到购物车界面去
			//先查看购物车中是否存在这种商品,如果存在,则数量加1,如果不存在,则直接插入
			BuyCar buycar = new BuyCar();
			buycar.setUsername(((User)request.getSession().getAttribute("User")).getUsername());
			buycar.setMilkTeaName(mkName);
			buycar.setMilkTeaCount(1);
			BuyCar b =  buyCar.selectByUsernameanMkname(buycar);
			System.out.println("b>>" + b);
			int res = 0;
			if(b == null) {
				//说明数据库中没有这种商品
				res = buyCar.insert(buycar);
				System.out.println(res + "成功的");
			}else {
				buycar.setMilkTeaCount(b.getMilkTeaCount() + 1);
				res = buyCar.updatabyUsernameAndMkname(buycar);
				System.out.println(res + "失败的");
			}
			
			if(res == 0) {
				//插入失败
				re.setResult(false);
			}else {
				//插入成功
				re.setResult(true);
			}
		}else if(flag.equals("立即购买")) {
			//进行订单创建,然后让用户进行支付,当支付成功时订单状态为待收货,当支付失败时订单状态为代付款
			
			
			
		}
	
	return re;
	}
	
}

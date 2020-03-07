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

import com.xiong.dao.MilkTeaInfoMapper;
import com.xiong.dao.OrderCommodityMapper;
import com.xiong.dao.OrderMapper;
import com.xiong.entity.MilkTeaInfo;
import com.xiong.entity.User;
import com.xiong.resultentity.OneMilk;
import com.xiong.resultentity.OneOrder;
import com.xiong.resultentity.OrderBean;

@Controller
@RequestMapping(value = "order")
public class orderController {

	@Autowired
	OrderMapper orderMapper;
	
	@Autowired
	OrderCommodityMapper orderCommodityMapper;
	
	
	@Autowired
	MilkTeaInfoMapper milkInfo;
	
	@RequestMapping(value = "/order.xiong", method = RequestMethod.POST)
	@ResponseBody
	public Map<String,Object> select_all_adress(@RequestBody OrderBean ob , HttpServletRequest request, HttpServletResponse response) {
		System.out.println(ob.getOrder_state() + "订单状态");
		String state = ob.getOrder_state();
		//存放订单的容器,包含订单的所有商品
		List<OneOrder> lists = new ArrayList<>();
		Map<String,Object> map = new HashMap<>();
		User user = (User) request.getSession().getAttribute("User");
		ob.setUsername(user.getUsername());
		if(state.equals("全部")) {
			//从数据库中查询出来的所有的数据
			List<OrderBean> list = orderMapper.selectAll(ob); 
			//遍历所有数据
			for (OrderBean orderBean : list) {
				if(lists.size() == 0) {
					//判断订单容器是否为空,如果为空,则直接加入
					List<OneMilk> l = new ArrayList<>();
					l.add(new OneMilk(orderBean.getMilk_tea_name(),orderBean.getMilk_tea_count()));
					//往lists中加一个订单
					lists.add(new OneOrder(orderBean.getOrder_id() + "",
							orderBean.getUsername(),
							orderBean.getRemarks(),
							orderBean.getDiscounts_num(), 
							orderBean.getIntegral_num(), 
							orderBean.getOrder_begin_time(),
							orderBean.getOrder_finish_state(),
							orderBean.getDistribution_man(), 
							orderBean.getAdress(), 
							orderBean.getOrder_state(), 
							orderBean.getOrder_finish_state(),
							l));
				}else {
					boolean flag = true;
					//遍历lists,如果当前OrderBean中的id与List中已经存在的id相同的话,则只需将当前OrderBean中的商品加入到OneOrder的List中即可
					for (OneOrder oneOrder : lists) {
						if(oneOrder.getOrder_id().equals(orderBean.getOrder_id())) {
							OneMilk om = new OneMilk(orderBean.getMilk_tea_name(), orderBean.getMilk_tea_count());
							oneOrder.getList().add(om);
							flag = false;
						}
					}
					//如果遍历完任然没有,则在list中新建一个
					if(flag) {
						//表示当前商品未创建订单
						List<OneMilk> l = new ArrayList<>();
						l.add(new OneMilk(orderBean.getMilk_tea_name(),orderBean.getMilk_tea_count()));
						//往lists中加一个订单
						lists.add(new OneOrder(orderBean.getOrder_id() + "",
								orderBean.getUsername(),
								orderBean.getRemarks(),
								orderBean.getDiscounts_num(), 
								orderBean.getIntegral_num(), 
								orderBean.getOrder_begin_time(),
								orderBean.getOrder_finish_state(),
								orderBean.getDistribution_man(), 
								orderBean.getAdress(), 
								orderBean.getOrder_state(), 
								orderBean.getOrder_finish_state(),
								l));
					}
				}
			}
		}else if(state.equals("待付款") || state.equals("待收货") || state.equals("待评价") || state.equals("退换货")) {
			//从数据库中查询出来的所有的数据
			chageState(ob);
			System.out.println(ob.toString() + ">>>>ob");
			List<OrderBean> list = orderMapper.selectsome(ob); 
			System.out.println(list.toString() + ">>>>>>>>>>>>>>" + list.size());
			//遍历所有数据
			for (OrderBean orderBean : list) {
				System.out.println(orderBean.toString());
				if(lists.size() == 0) {
					//判断订单容器是否为空,如果为空,则直接加入
					List<OneMilk> l = new ArrayList<>();
					l.add(new OneMilk(orderBean.getMilk_tea_name(),orderBean.getMilk_tea_count()));
					//往lists中加一个订单
					lists.add(new OneOrder(orderBean.getOrder_id() + "",
							orderBean.getUsername(),
							orderBean.getRemarks(),
							orderBean.getDiscounts_num(), 
							orderBean.getIntegral_num(), 
							orderBean.getOrder_begin_time(),
							orderBean.getOrder_finish_state(),
							orderBean.getDistribution_man(), 
							orderBean.getAdress(), 
							orderBean.getOrder_state(), 
							orderBean.getOrder_finish_state(),
							l));
				}else {
					System.out.println("应该只进来一次");
					boolean flag = true;
					//遍历lists,如果当前OrderBean中的id与List中已经存在的id相同的话,则只需将当前OrderBean中的商品加入到OneOrder的List中即可
					for (OneOrder oneOrder : lists) {
						if(oneOrder.getOrder_id().equals(orderBean.getOrder_id())) {
							System.out.println("加一次");
							OneMilk om = new OneMilk(orderBean.getMilk_tea_name(), orderBean.getMilk_tea_count());
							oneOrder.getList().add(om);
							flag = false;
						}
					}
					//如果遍历完任然没有,则在list中新建一个
					if(flag) {
						System.out.println("加一个");
						//表示当前商品未创建订单
						List<OneMilk> l = new ArrayList<>();
						l.add(new OneMilk(orderBean.getMilk_tea_name(),orderBean.getMilk_tea_count()));
						//往lists中加一个订单
						lists.add(new OneOrder(orderBean.getOrder_id() + "",
								orderBean.getUsername(),
								orderBean.getRemarks(),
								orderBean.getDiscounts_num(), 
								orderBean.getIntegral_num(), 
								orderBean.getOrder_begin_time(),
								orderBean.getOrder_finish_state(),
								orderBean.getDistribution_man(), 
								orderBean.getAdress(), 
								orderBean.getOrder_state(), 
								orderBean.getOrder_finish_state(),
								l));
					}
				}
			}
			System.out.println(lists.size());
			System.out.println(lists.toString());
		}
		getSomeInfo(lists);
		map.put("orderList", lists);
		map.put("state", state);
		return map;
	}
	
	
	public void getSomeInfo(List<OneOrder> lists) {
		for (OneOrder oneOrder : lists) {
			List<OneMilk> list = oneOrder.getList();
			for (OneMilk oneMilk : list) {
				MilkTeaInfo mki = new MilkTeaInfo();
				mki.setMilkTeaName(oneMilk.getMilk_tea_name());
				mki = milkInfo.select_one(mki);
				oneMilk.setMilk_img_src(mki.getMilkTeaImgSrc());
				oneMilk.setMilk_special_num(mki.getMilkTeaSpecialprice());
			}
		}
		System.out.println(lists.toString() + ">>>>>>>改变后");
	}
	
	/**
	 * 格式转换
	 * @param ob
	 */
	public void chageState(OrderBean ob) {
		if(ob.getOrder_state().equals("待付款")) {
			ob.setOrder_state("fk");
		}else if(ob.getOrder_state().equals("待收货")) {
			ob.setOrder_state("sh");
		}else if(ob.getOrder_state().equals("待评价")) {
			ob.setOrder_state("pj");
		}else if(ob.getOrder_state().equals("退换货")) {
			ob.setOrder_state("thh");
		}
//		else if(ob.getOrder_state().equals("换货")) {
//			ob.setOrder_state("hh");
//		}
	}
	
}

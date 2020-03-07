package com.xiong.controller;

import java.io.UnsupportedEncodingException;
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

import com.xiong.dao.AdressMapper;
import com.xiong.dao.DiscountsMapper;
import com.xiong.dao.MilkTeaInfoMapper;
import com.xiong.dao.UserMapper;
import com.xiong.dao.WhoHaveDiscountsMapper;
import com.xiong.entity.Adress;
import com.xiong.entity.Discounts;
import com.xiong.entity.MilkTeaInfo;
import com.xiong.entity.User;
import com.xiong.entity.WhoHaveDiscounts;
import com.xiong.resultentity.Res;
import com.xiong.resultentity.Result;
import com.xiong.resultentity.YhjEntity;

@Controller
@RequestMapping(value = "adress")
public class Adress_Controller {

	@Autowired
	AdressMapper adress;
	
	@Autowired
	MilkTeaInfoMapper milkInfo;
	
	@Autowired
	DiscountsMapper dis;
	
	@Autowired
	WhoHaveDiscountsMapper whoHave;
	
	@Autowired
	UserMapper userMapper;

	@RequestMapping(value = "/all_adress.xiong", method = RequestMethod.POST)
	@ResponseBody
	public Map<String,Object> select_all_adress(@RequestBody Adress adre , HttpServletRequest request, HttpServletResponse response) {
		List<Adress> result = adress.selectAll(adre);
		Map<String,Object> map = new HashMap<String, Object>();
		map.put("userlist", result);
//		request.getSession().setAttribute("Userlist", result);
//		JSON json = JSONObject.fromObject(map);
//		String jsonString = json.toString();
//		this.writeJSON(request, response,jsonString);
		System.out.println(map.size());
		return map;
	}
	
	@RequestMapping(value = "/select_all_mk.xiong" , method = RequestMethod.POST)
	@ResponseBody
	public Map<String,Object> select_all_mk(HttpServletRequest request, HttpServletResponse response) {
		//查询前四行
		List<MilkTeaInfo> list = milkInfo.selectTopFour();
		Map<String,Object> map = new HashMap<>();
		map.put("mkInfo", list);
		for (MilkTeaInfo milkTeaInfo : list) {
			System.out.println(milkTeaInfo.toString());
		}
		return map;
	}
	
	@RequestMapping(value = "/search_select_all_mk.xiong"  , method = RequestMethod.POST)
	@ResponseBody
	public Map<String,Object> search_select_all_mk( @RequestBody Result result , HttpServletRequest request, HttpServletResponse response) {
		//获取前台点击的值
		String flag = result.getContent();
		System.out.println(flag + ">>>>>>>>>flag");
		//从数据库中查询出所有的奶茶信息
		List<MilkTeaInfo> list = milkInfo.selectAll();
		Map<String,Object> map = new HashMap<>();
		System.out.println(list.toString() + ">>>>>>>");
		if(flag.equals("1") || flag.equals("默认")) {
			System.out.println("默认");
			//默认则直接将奶茶信息按照数据库中查询出来的顺序进行传输
			map.put("mkInfos", list);
			map.put("flag", "默认");
		}else if(flag.equals("销量")) {
			//销量则按照销量的高低进行一次排序再进行传输
			for (int i = 0; i < list.size(); i++) {
				for (int j = i; j < list.size(); j++) {
					//如果后面的销量大于前面的,则将他们两个位置互换,否则不予理会
					if(list.get(j).getMilkTeaSales() > list.get(i).getMilkTeaSales()) {
						MilkTeaInfo m = list.get(i);
						list.set(i , list.get(j));
						list.set(j, m);
					}
				}
			}
			System.out.println(list.toString() + ">>>>>>>销量");
			map.put("mkInfos", list);
			map.put("flag", flag);
		}else if(flag.equals("价格")) {
			//价格则按照价格的高低进行排序
			for (int i = 0; i < list.size(); i++) {
				for (int j = i; j < list.size(); j++) {
					//如果后面的销量大于前面的,则将他们两个位置互换,否则不予理会
					if(Integer.valueOf(list.get(j).getMilkTeaSpecialprice()) > Integer.valueOf(list.get(i).getMilkTeaSpecialprice())) {
						MilkTeaInfo m = list.get(i);
						list.set(i , list.get(j));
						list.set(j, m);
					}
				}
			}
			System.out.println(list.toString() + ">>>>>>>价格");
			map.put("mkInfos", list);
			map.put("flag", flag);
		} 
		return map;
	
	}
	
	@RequestMapping(value = "/search_one.xiong" , method = RequestMethod.POST)
	@ResponseBody
	public Res search_one(@RequestBody MilkTeaInfo mkinfo , HttpServletRequest request, HttpServletResponse response) throws UnsupportedEncodingException {
		String url = mkinfo.getMilkTeaName();
		String mkname = url.substring(url.indexOf("?mkname=") + "?mkname=".length(), url.length());
		mkinfo.setMilkTeaName(mkname);
		MilkTeaInfo mk = milkInfo.select_one(mkinfo);
		
		User user = (User) request.getSession().getAttribute("User");
		System.out.println(user.toString());
		user = userMapper.selectByUsername(user);
		System.out.println(user.toString());
		String discounts_num = (double)Math.floorDiv(user.getIntegral(), 10) + "";
		System.out.println("积分抵扣金额:" + discounts_num);
		Res res = new Res();
		res.setMk(mk);
		res.setDkje(discounts_num);
		return res;
	}
	
	@RequestMapping(value = "/search_one_like.xiong" , method = RequestMethod.POST)
	@ResponseBody
	public Map<String,Object> search_one_like(@RequestBody MilkTeaInfo mkinfo , HttpServletRequest request, HttpServletResponse response){
		List<MilkTeaInfo> list = milkInfo.select_you_choose(mkinfo);
		Map<String , Object> map = new HashMap<String, Object>();                                                     
		if(list.size()==0) {
			System.out.println("设置false");
			map.put("searchMilk", "false");
		}else {
			System.out.println("放list");
			map.put("searchMilk", list);
		}
		
		return map;
	}
	
	@RequestMapping(value = "/yhj_Selectall.xiong" , method = RequestMethod.POST)
	@ResponseBody
	public Map<String,Object> yhj_Selectall( HttpServletRequest request, HttpServletResponse response){
		List<Discounts> list = dis.selectall();
		Map<String , Object> map = new HashMap<String, Object>();
		if(list.size()==0) {
			System.out.println("设置false");
			map.put("allyhj", "false");
		}else {
			System.out.println("放list");
			map.put("allyhj", list);
		}
		return map;
	}
	
	@RequestMapping(value = "/yhj_Select_WhoHava.xiong" , method = RequestMethod.POST)
	@ResponseBody
	public Map<String,Object> yhj_Select_WhoHava(@RequestBody WhoHaveDiscounts whohava , HttpServletRequest request, HttpServletResponse response){
		
		System.out.println("请求到了" + whohava);
		//查询所有拥有的优惠卷
		List<WhoHaveDiscounts> list = whoHave.select_yhj(whohava);
		List<YhjEntity> yhjlist =new ArrayList<>();
		for(int i = 0 ; i < list.size() ; i++) {
			//遍历list中所有的对象并更具其优惠卷id查询出所有的优惠卷信息,然后放入一个YhjEntity中
			WhoHaveDiscounts whohave = list.get(i);
			chagestate(whohave);
			Discounts discount = new Discounts();
			discount.setDiscountsId(whohave.getDiscountsId());
			discount = dis.selectBydisountid(discount);
			
			YhjEntity yhj = new YhjEntity();
			yhj.setDiscountsCount(whohave.getHaveDiscountsCount());
			yhj.setDiscountsPrice(discount.getDiscountsPrice());
			yhj.setHowCanUse(discount.getHowCanUse());
			yhj.setUseBeginTime(discount.getUseBeginTime());
			yhj.setUseFinishTime(discount.getUseFinishTime());
			yhj.setContactWay(discount.getContactWay());
			yhj.setUsername(whohave.getUsername());
			yhj.setDiscountsId(whohave.getDiscountsId());
			yhj.setHaveDiscountsCount(whohave.getHaveDiscountsCount());
			yhj.setDiscountsState(whohave.getDiscountsState());
			yhjlist.add(yhj);
		}
		Map<String , Object> map = new HashMap<String, Object>();
		if(yhjlist.size()==0) {
			System.out.println("设置false");
			map.put("Have", "false");
		}else {
			System.out.println("放list");
			map.put("Have", yhjlist);
		}
		System.out.println("Map : " + map);
		return map;
	}
	
	
	@RequestMapping(value = "/yhj_Lingqu.xiong" , method = RequestMethod.POST)
	@ResponseBody
	public void yhj_Lingqu(@RequestBody WhoHaveDiscounts whohave , HttpServletRequest request, HttpServletResponse response){
		System.out.println("到领取优惠卷界面了");
		System.out.println(whohave.toString());
		
		
	}
	
	public void chagestate(WhoHaveDiscounts whohave) {
		if(whohave.getDiscountsState().equals("use")) {
			whohave.setDiscountsState("已用");
		}else if(whohave.getDiscountsState().equals("not_use")) {
			whohave.setDiscountsState("未用");
		}else if(whohave.getDiscountsState().equals("time_out")) {
			whohave.setDiscountsState("过期");
		}
	}
	
	@RequestMapping(value = "/paixu.xiong" , method = RequestMethod.POST)
	@ResponseBody
	public Map<String,Object> paixu(@RequestBody Result result , HttpServletRequest request, HttpServletResponse response){
		//获取前台点击的值
		String flag = result.getContent();
		//从数据库中查询出所有的奶茶信息
		List<MilkTeaInfo> list = milkInfo.selectAll();
		Map<String,Object> map = new HashMap<>();
		if(flag.equals("默认")) {
			System.out.println("销量");
			//默认则直接将奶茶信息按照数据库中查询出来的顺序进行传输
			map.put("mkInfos", list);
		}else if(flag.equals("销量")) {
			//销量则按照销量的高低进行一次排序再进行传输
			for (int i = 0; i < list.size(); i++) {
				for (int j = i; j < list.size(); j++) {
					//如果后面的销量大于前面的,则将他们两个位置互换,否则不予理会
					if(list.get(j).getMilkTeaSales() > list.get(i).getMilkTeaSales()) {
						MilkTeaInfo m = list.get(i);
						list.set(i , list.get(j));
						list.set(j, m);
					}
				}
			}
			System.out.println(list.toString() + ">>>>>>>销量");
			map.put("mkInfos", list);
		}else if(flag.equals("价格")) {
			//价格则按照价格的高低进行排序
			for (int i = 0; i < list.size(); i++) {
				for (int j = i; j < list.size(); j++) {
					//如果后面的销量大于前面的,则将他们两个位置互换,否则不予理会
					if(Integer.valueOf(list.get(j).getMilkTeaSpecialprice()) > Integer.valueOf(list.get(i).getMilkTeaSpecialprice())) {
						MilkTeaInfo m = list.get(i);
						list.set(i , list.get(j));
						list.set(j, m);
					}
				}
			}
			System.out.println(list.toString() + ">>>>>>>价格");
			map.put("mkInfos", list);
		} 
		map.put("flag", flag);
		return map;
	}

}
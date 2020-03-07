package com.xiong.controller;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.SessionAttribute;
import org.springframework.web.bind.annotation.SessionAttributes;

import com.xiong.dao.UserMapper;
import com.xiong.entity.User;
import com.xiong.resultentity.Result;

@Controller
@RequestMapping(value="login")
@SessionAttributes(value= {"User"})
public class LoginController {
	
	@Autowired
	UserMapper userService;

	@RequestMapping(value="/login.xiong" , method=RequestMethod.POST)
	@ResponseBody 
	public Result login( @RequestBody User u , HttpServletRequest request ,HttpServletResponse response ) {
		System.out.println("请求到了");
		User user = userService.selectByUsername(u);
		Result result = new Result();
		if(user == null) {
			//用户名不存在
			result.setResult(false);
			result.setContent("用户名不存在");
		}else {
			//用户存在,判断密码是否正确
			if(user.getPass().equals(u.getPass())) {
				//密码正确
				result.setResult(true);
				result.setContent("账号密码正确");
			}else {
				//密码不正确
				result.setResult(false);
				result.setContent("密码不正确");
			}
		}
//		System.out.println(session.getMaxInactiveInterval());
//		session.setAttribute("userInfo", "yc");
		request.getSession().setAttribute("User", user);
		return result;
	}
	
	@RequestMapping(value="/register.xiong" , method=RequestMethod.POST)
	@ResponseBody
	public Result register( @RequestBody User u , HttpServletRequest request , HttpServletResponse response ) {
		Result result = new Result();
		System.out.println(u.toString());
		u.setBalance(0);
		u.setIntegral(0);
		u.setAge(0);
		u.setHeadImgSrc("img/default.png");
		if(userService.insert(u) != 0) {
			//插入成功
			result.setResult(true);
			result.setContent("注册成功!!");
		}else {
			//插入失败
			result.setResult(false);
			result.setContent("注册失败!!");
		}
		return result;
	}
	
	
}

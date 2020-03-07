package com.xiong.interceptor;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.web.servlet.HandlerInterceptor;
import org.springframework.web.servlet.ModelAndView;

public class CloudStorageInterceptor implements HandlerInterceptor{

	@Override
	public void afterCompletion(HttpServletRequest arg0, HttpServletResponse arg1, Object arg2, Exception arg3)
			throws Exception {
		// TODO Auto-generated method stub
		System.out.println(1);
	}

	@Override
	public void postHandle(HttpServletRequest arg0, HttpServletResponse arg1, Object arg2, ModelAndView arg3)
			throws Exception {
		// TODO Auto-generated method stub
		System.out.println(2);
	}

	@Override
	public boolean preHandle(HttpServletRequest arg0, HttpServletResponse arg1, Object arg2) throws Exception {
		System.out.println(3);
		String path = arg0.getServletPath();
		System.out.println(path);

//		if(arg0.getSession().getAttribute("User") == null) {
//			//未登陆,跳转至登陆界面
//			arg0.getRequestDispatcher("login.jsp").forward(arg0, arg1);
//		}else {
//			//已登录,返回true
//			return true;
//		}
		return true;
	}

}

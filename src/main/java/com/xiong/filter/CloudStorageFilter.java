//package com.xiong.filter;
//
//import java.io.IOException;
//
//import javax.servlet.Filter;
//import javax.servlet.FilterChain;
//import javax.servlet.FilterConfig;
//import javax.servlet.ServletException;
//import javax.servlet.ServletRequest;
//import javax.servlet.ServletResponse;
//import javax.servlet.annotation.WebFilter;
//import javax.servlet.http.HttpServletRequest;
//import javax.servlet.http.HttpServletResponse;
//
//import com.xiong.entity.Userinfo;
//
//@WebFilter
//public class CloudStorageFilter implements Filter {
//
//    //两者都是在过滤器对象初始化时从web.xml配置文件中进行获取
//	private String dispactureUrl = "";//不需要拦截得请求
//	private String excludeUrl = "";//需要拦截得请求
//
//	@Override
//	public void destroy() {
//		// TODO Auto-generated method stub
//	}
//
//    /**
//    *拦截方法
//    */
//	@Override
//	public void doFilter(ServletRequest arg0, ServletResponse arg1, FilterChain arg2)
//			throws IOException, ServletException {
//           //将ServletRequest和ServletResponse转换为他们得封装类
//		HttpServletRequest request = (HttpServletRequest) arg0;
//		HttpServletResponse response = (HttpServletResponse) arg1;
//		// 获取请求的路径
//		String servletPath = request.getServletPath();
//		// 获取User对象
//		Userinfo user = (Userinfo) request.getSession().getAttribute("User");
//          
//            //对路径进行比较，看是否是我们需要拦截的  
//		if (servletPath.equals(dispactureUrl) || servletPath.equals(excludeUrl)) {
//			arg2.doFilter(arg0, arg1);
//		} else {
//			//对存储在session中得User对象进行判断，如果User对象不为空，就说明已经登陆，直接通过，
//                   //如果User对象为空，就说明未进行登陆，则进行跳转
//			if (user != null) {
//				arg2.doFilter(arg0, arg1);
//			} else {
//				// request.getRequestDispatcher("/view/Login.jsp").forward(request,response);
//				response.sendRedirect(request.getContextPath() + dispactureUrl);
//			}
//
//		}
//
//	}
//
//	@Override
//	public void init(FilterConfig filterConfig) throws ServletException {
//		// TODO Auto-generated method stub
//		Filter.super.init(filterConfig);
//		// 对dispactureUrl以及excludeUrl进行赋值
//		dispactureUrl = filterConfig.getInitParameter("dispactureUrl");
//		excludeUrl = filterConfig.getInitParameter("excludeUrl");
//	}
//
//}

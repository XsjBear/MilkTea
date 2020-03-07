package com.xiong.controller;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import com.xiong.dao.MilkTeaInfoMapper;


@Controller
@RequestMapping(value = "commodity")
public class commodity {

	@Autowired
	MilkTeaInfoMapper milk;
	
	
	@RequestMapping(value = "/all_milk_info.xiong", method = RequestMethod.POST)
	@ResponseBody
	public void selectall( HttpServletRequest request, HttpServletResponse response ) {
		
	}
	
}

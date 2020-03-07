package com.xiong.service;

import org.springframework.stereotype.Service;

import com.xiong.entity.User;

@Service("UserMapperService")
public interface UserMapperService {

	int deleteByPrimaryKey(Integer id);

	int insert(User record);

	int insertSelective(User record);

	User selectByPrimaryKey(Integer id);

	int updateByPrimaryKeySelective(User record);

	int updateByPrimaryKey(User record);
	
	User selectByUsername(User user);
}

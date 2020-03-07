package com.xiong.service.implement;

import org.springframework.beans.factory.annotation.Autowired;

import com.xiong.dao.UserMapper;
import com.xiong.entity.User;
import com.xiong.service.UserMapperService;

public class UserMapperService_Implements implements UserMapperService {

	@Autowired
	UserMapper user;
	
	@Override
	public int deleteByPrimaryKey(Integer id) {
		// TODO Auto-generated method stub
		return user.deleteByPrimaryKey(id);
	}

	@Override
	public int insert(User record) {
		// TODO Auto-generated method stub
		return user.insert(record);
	}

	@Override
	public int insertSelective(User record) {
		// TODO Auto-generated method stub
		return user.insertSelective(record);
	}

	@Override
	public User selectByPrimaryKey(Integer id) {
		// TODO Auto-generated method stub
		return user.selectByPrimaryKey(id);
	}

	@Override
	public int updateByPrimaryKeySelective(User record) {
		// TODO Auto-generated method stub
		return user.updateByPrimaryKeySelective(record);
	}

	@Override
	public int updateByPrimaryKey(User record) {
		// TODO Auto-generated method stub
		return user.updateByPrimaryKey(record);
	}

	@Override
	public User selectByUsername(User userinfo) {
		// TODO Auto-generated method stub
		return user.selectByUsername(userinfo);
	}

}

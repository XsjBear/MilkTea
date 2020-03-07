package com.xiong.dao;

import com.xiong.entity.Order;
import com.xiong.resultentity.OrderBean;

import java.util.List;

public interface OrderMapper {

	int deleteByPrimaryKey(Integer id);

	int insert(Order record);

	int insertSelective(Order record);

	Order selectByPrimaryKey(Integer id);

	int updateByPrimaryKeySelective(Order record);

	int updateByPrimaryKey(Order record);
	
	List<OrderBean> selectAll(OrderBean order);
	
	List<OrderBean> selectsome(OrderBean orderBean);
}
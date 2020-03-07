package com.xiong.dao;

import com.xiong.entity.OrderCommodity;

public interface OrderCommodityMapper {

    int insert(OrderCommodity record);

    int insertSelective(OrderCommodity record);

}
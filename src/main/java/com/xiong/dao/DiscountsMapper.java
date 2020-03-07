package com.xiong.dao;

import com.xiong.entity.Discounts;
import java.util.List;

public interface DiscountsMapper {

    int deleteByPrimaryKey(Integer id);

    int insert(Discounts record);

    int insertSelective(Discounts record);

    Discounts selectByPrimaryKey(Integer id);

    int updateBydiscountid(Discounts record);

    int updateByPrimaryKey(Discounts record);
    
    List<Discounts> selectall();
    
    Discounts selectBydisountid(Discounts dis);
}
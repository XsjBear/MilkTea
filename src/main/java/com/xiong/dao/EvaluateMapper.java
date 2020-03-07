package com.xiong.dao;

import com.xiong.entity.Evaluate;

public interface EvaluateMapper {
    int insert(Evaluate record);

    int insertSelective(Evaluate record);

}
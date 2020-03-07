package com.xiong.dao;

import com.xiong.entity.Adress;

import java.util.List;



public interface AdressMapper {

    int insert(Adress record);

    int insertSelective(Adress record);

    List<Adress> selectAll(Adress adress);
    
}
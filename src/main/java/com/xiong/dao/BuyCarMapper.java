package com.xiong.dao;

import com.xiong.entity.BuyCar;
import java.util.List;

public interface BuyCarMapper {

    int insert(BuyCar record);

    int insertSelective(BuyCar record);

    List<BuyCar> selectByUsername(BuyCar record);
    
    BuyCar selectByUsernameanMkname(BuyCar record);
    
    int updatabyUsernameAndMkname(BuyCar record);
}
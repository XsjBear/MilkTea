package com.xiong.dao;

import com.xiong.entity.WhoHaveDiscounts;
import java.util.List;

public interface WhoHaveDiscountsMapper {

	int insert(WhoHaveDiscounts record);

	int insertSelective(WhoHaveDiscounts record);

	List<WhoHaveDiscounts> select_yhj(WhoHaveDiscounts record);
	
	WhoHaveDiscounts selectByDiscountid(WhoHaveDiscounts record);
	
	int updataByDiscountId(WhoHaveDiscounts record);
}
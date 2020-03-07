package com.xiong.dao;

import com.xiong.entity.MilkTeaInfo;
import java.util.List;

public interface MilkTeaInfoMapper {

	int deleteByPrimaryKey(Integer id);

	int insert(MilkTeaInfo record);

	int insertSelective(MilkTeaInfo record);

	MilkTeaInfo selectByPrimaryKey(Integer id);

	int updateByPrimaryKeySelective(MilkTeaInfo record);

	int updateByPrimaryKey(MilkTeaInfo record);
	
//	@Select("select *from milk_tea_info limit 4;")
	List<MilkTeaInfo> selectTopFour();
	
	List<MilkTeaInfo> selectAll();
	
	MilkTeaInfo select_one(MilkTeaInfo mk);
	
	List<MilkTeaInfo> select_you_choose(MilkTeaInfo mk);
}
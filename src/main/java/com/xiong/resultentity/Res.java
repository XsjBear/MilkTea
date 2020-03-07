package com.xiong.resultentity;

import com.xiong.entity.MilkTeaInfo;

public class Res {

	public MilkTeaInfo mk;
	
	public String dkje;

	public String getDkje() {
		return dkje;
	}

	public void setDkje(String dkje) {
		this.dkje = dkje;
	}

	public MilkTeaInfo getMk() {
		return mk;
	}

	public void setMk(MilkTeaInfo mk) {
		this.mk = mk;
	}

	@Override
	public String toString() {
		return "Res [mk=" + mk + ", dkje=" + dkje + "]";
	}


	
	
	
}

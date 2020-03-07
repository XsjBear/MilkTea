package com.xiong.resultentity;

/**
 * 一个订单商品bean
 * @author Xsj
 *
 */
public class OneMilk {

	private String milk_tea_name;
	private String milk_tea_count;
	private String milk_img_src;
	private String milk_special_num;
	
	
	
	public String getMilk_img_src() {
		return milk_img_src;
	}
	public void setMilk_img_src(String milk_img_src) {
		this.milk_img_src = milk_img_src;
	}
	public String getMilk_special_num() {
		return milk_special_num;
	}
	public void setMilk_special_num(String milk_special_num) {
		this.milk_special_num = milk_special_num;
	}
	public OneMilk(String milk_tea_name, String milk_tea_count) {
		super();
		this.milk_tea_name = milk_tea_name;
		this.milk_tea_count = milk_tea_count;
	}
	public String getMilk_tea_name() {
		return milk_tea_name;
	}
	public void setMilk_tea_name(String milk_tea_name) {
		this.milk_tea_name = milk_tea_name;
	}
	public String getMilk_tea_count() {
		return milk_tea_count;
	}
	public void setMilk_tea_count(String milk_tea_count) {
		this.milk_tea_count = milk_tea_count;
	}
	@Override
	public String toString() {
		return "OneMilk [milk_tea_name=" + milk_tea_name + ", milk_tea_count=" + milk_tea_count + ", milk_img_src="
				+ milk_img_src + ", milk_special_num=" + milk_special_num + "]";
	}
	
	
	
	
}

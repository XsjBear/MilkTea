package com.xiong.resultentity;

public class OrderBean {
	
	private String order_id;
	private String username;
	private String milk_tea_name;
	private String milk_tea_count;
	private String remarks;
	private String discounts_num;
	private String integral_num;
	private String order_begin_time;
	private String order_finish_time;
	private String distribution_man;
	private String adress;
	private String order_state;
	private String order_finish_state;
	public String getOrder_id() {
		return order_id;
	}
	public void setOrder_id(String order_id) {
		this.order_id = order_id;
	}
	public String getUsername() {
		return username;
	}
	public void setUsername(String username) {
		this.username = username;
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
	public String getRemarks() {
		return remarks;
	}
	public void setRemarks(String remarks) {
		this.remarks = remarks;
	}
	public String getDiscounts_num() {
		return discounts_num;
	}
	public void setDiscounts_num(String discounts_num) {
		this.discounts_num = discounts_num;
	}
	public String getIntegral_num() {
		return integral_num;
	}
	public void setIntegral_num(String integral_num) {
		this.integral_num = integral_num;
	}
	public String getOrder_begin_time() {
		return order_begin_time;
	}
	public void setOrder_begin_time(String order_begin_time) {
		this.order_begin_time = order_begin_time;
	}
	public String getOrder_finish_time() {
		return order_finish_time;
	}
	public void setOrder_finish_time(String order_finish_time) {
		this.order_finish_time = order_finish_time;
	}
	public String getDistribution_man() {
		return distribution_man;
	}
	public void setDistribution_man(String distribution_man) {
		this.distribution_man = distribution_man;
	}
	public String getAdress() {
		return adress;
	}
	public void setAdress(String adress) {
		this.adress = adress;
	}
	public String getOrder_state() {
		return order_state;
	}
	public void setOrder_state(String order_state) {
		this.order_state = order_state;
	}
	public String getOrder_finish_state() {
		return order_finish_state;
	}
	public void setOrder_finish_state(String order_finish_state) {
		this.order_finish_state = order_finish_state;
	}
	@Override
	public String toString() {
		return "OrderBean [order_id=" + order_id + ", username=" + username + ", milk_tea_name=" + milk_tea_name
				+ ", milk_tea_count=" + milk_tea_count + ", remarks=" + remarks + ", discounts_num=" + discounts_num
				+ ", integral_num=" + integral_num + ", order_begin_time=" + order_begin_time + ", order_finish_time="
				+ order_finish_time + ", distribution_man=" + distribution_man + ", adress=" + adress + ", order_state="
				+ order_state + ", order_finish_state=" + order_finish_state 
				+ "]";
	}

	
	
}

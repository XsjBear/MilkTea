package com.xiong.resultentity;

public class YhjEntity {

   private Integer id;

   private Integer discountsCount;

   private Integer discountsPrice;

   private Integer howCanUse;

   private String useBeginTime;

   private String useFinishTime;

   private String contactWay;
   
  private String username;

  
  private String discountsId;

  
  private Integer haveDiscountsCount;

  
  private String discountsState;


public Integer getId() {
	return id;
}


public void setId(Integer id) {
	this.id = id;
}


public Integer getDiscountsCount() {
	return discountsCount;
}


public void setDiscountsCount(Integer discountsCount) {
	this.discountsCount = discountsCount;
}


public Integer getDiscountsPrice() {
	return discountsPrice;
}


public void setDiscountsPrice(Integer discountsPrice) {
	this.discountsPrice = discountsPrice;
}


public Integer getHowCanUse() {
	return howCanUse;
}


public void setHowCanUse(Integer howCanUse) {
	this.howCanUse = howCanUse;
}


public String getUseBeginTime() {
	return useBeginTime;
}


public void setUseBeginTime(String useBeginTime) {
	this.useBeginTime = useBeginTime;
}


public String getUseFinishTime() {
	return useFinishTime;
}


public void setUseFinishTime(String useFinishTime) {
	this.useFinishTime = useFinishTime;
}


public String getContactWay() {
	return contactWay;
}


public void setContactWay(String contactWay) {
	this.contactWay = contactWay;
}


public String getUsername() {
	return username;
}


public void setUsername(String username) {
	this.username = username;
}


public String getDiscountsId() {
	return discountsId;
}


public void setDiscountsId(String discountsId) {
	this.discountsId = discountsId;
}


public Integer getHaveDiscountsCount() {
	return haveDiscountsCount;
}


public void setHaveDiscountsCount(Integer haveDiscountsCount) {
	this.haveDiscountsCount = haveDiscountsCount;
}


public String getDiscountsState() {
	return discountsState;
}


public void setDiscountsState(String discountsState) {
	this.discountsState = discountsState;
}


@Override
public String toString() {
	return "yhjEntity [id=" + id + ", discountsCount=" + discountsCount + ", discountsPrice=" + discountsPrice
			+ ", howCanUse=" + howCanUse + ", useBeginTime=" + useBeginTime + ", useFinishTime=" + useFinishTime
			+ ", contactWay=" + contactWay + ", username=" + username + ", discountsId=" + discountsId
			+ ", haveDiscountsCount=" + haveDiscountsCount + ", discountsState=" + discountsState + "]";
}
  
  
	
}

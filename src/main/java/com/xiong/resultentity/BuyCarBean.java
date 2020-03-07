package com.xiong.resultentity;

public class BuyCarBean {

	private Integer id;
	
	private String milkTeaName;
	
	private String milkTeaImgSrc;
	
	private Integer milkTeaCount;

    private String headImgSrc;
    
    private String milkTeaSpecialprice;

    private String username;

    private String pass;

    private Integer balance;

    private Integer integral;

    private Integer age;

    private String birthday;

    private String sex;

    private String contactWay;

    private String signature;
    
    


	public String getMilkTeaSpecialprice() {
		return milkTeaSpecialprice;
	}

	public void setMilkTeaSpecialprice(String milkTeaSpecialprice) {
		this.milkTeaSpecialprice = milkTeaSpecialprice;
	}

	public BuyCarBean(Integer id, String milkTeaName, String milkTeaImgSrc, Integer milkTeaCount, String headImgSrc,
			String milkTeaSpecialprice, String username, String pass, Integer balance, Integer integral, Integer age,
			String birthday, String sex, String contactWay, String signature) {
		super();
		this.id = id;
		this.milkTeaName = milkTeaName;
		this.milkTeaImgSrc = milkTeaImgSrc;
		this.milkTeaCount = milkTeaCount;
		this.headImgSrc = headImgSrc;
		this.milkTeaSpecialprice = milkTeaSpecialprice;
		this.username = username;
		this.pass = pass;
		this.balance = balance;
		this.integral = integral;
		this.age = age;
		this.birthday = birthday;
		this.sex = sex;
		this.contactWay = contactWay;
		this.signature = signature;
	}

	public Integer getId() {
		return id;
	}

	public void setId(Integer id) {
		this.id = id;
	}

	public String getMilkTeaName() {
		return milkTeaName;
	}

	public void setMilkTeaName(String milkTeaName) {
		this.milkTeaName = milkTeaName;
	}

	public String getMilkTeaImgSrc() {
		return milkTeaImgSrc;
	}

	public void setMilkTeaImgSrc(String milkTeaImgSrc) {
		this.milkTeaImgSrc = milkTeaImgSrc;
	}

	public Integer getMilkTeaCount() {
		return milkTeaCount;
	}

	public void setMilkTeaCount(Integer milkTeaCount) {
		this.milkTeaCount = milkTeaCount;
	}

	public String getHeadImgSrc() {
		return headImgSrc;
	}

	public void setHeadImgSrc(String headImgSrc) {
		this.headImgSrc = headImgSrc;
	}

	public String getUsername() {
		return username;
	}

	public void setUsername(String username) {
		this.username = username;
	}

	public String getPass() {
		return pass;
	}

	public void setPass(String pass) {
		this.pass = pass;
	}

	public Integer getBalance() {
		return balance;
	}

	public void setBalance(Integer balance) {
		this.balance = balance;
	}

	public Integer getIntegral() {
		return integral;
	}

	public void setIntegral(Integer integral) {
		this.integral = integral;
	}

	public Integer getAge() {
		return age;
	}

	public void setAge(Integer age) {
		this.age = age;
	}

	public String getBirthday() {
		return birthday;
	}

	public void setBirthday(String birthday) {
		this.birthday = birthday;
	}

	public String getSex() {
		return sex;
	}

	public void setSex(String sex) {
		this.sex = sex;
	}

	public String getContactWay() {
		return contactWay;
	}

	public void setContactWay(String contactWay) {
		this.contactWay = contactWay;
	}

	public String getSignature() {
		return signature;
	}

	public void setSignature(String signature) {
		this.signature = signature;
	}

	@Override
	public String toString() {
		return "BuyCarBean [id=" + id + ", milkTeaName=" + milkTeaName + ", milkTeaImgSrc=" + milkTeaImgSrc
				+ ", milkTeaCount=" + milkTeaCount + ", headImgSrc=" + headImgSrc + ", username=" + username + ", pass="
				+ pass + ", balance=" + balance + ", integral=" + integral + ", age=" + age + ", birthday=" + birthday
				+ ", sex=" + sex + ", contactWay=" + contactWay + ", signature=" + signature + "]";
	}
    
    
	
}

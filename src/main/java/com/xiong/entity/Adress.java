package com.xiong.entity;

public class Adress {
    /**
     *
     * This field was generated by MyBatis Generator.
     * This field corresponds to the database column adress.username
     *
     * @mbg.generated Wed Apr 10 16:31:11 CST 2019
     */
    private String username;

    /**
     *
     * This field was generated by MyBatis Generator.
     * This field corresponds to the database column adress.contact_way
     *
     * @mbg.generated Wed Apr 10 16:31:11 CST 2019
     */
    private String contactWay;

    /**
     *
     * This field was generated by MyBatis Generator.
     * This field corresponds to the database column adress.adress
     *
     * @mbg.generated Wed Apr 10 16:31:11 CST 2019
     */
    private String adress;

    /**
     * This method was generated by MyBatis Generator.
     * This method returns the value of the database column adress.username
     *
     * @return the value of adress.username
     *
     * @mbg.generated Wed Apr 10 16:31:11 CST 2019
     */
    public String getUsername() {
        return username;
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method sets the value of the database column adress.username
     *
     * @param username the value for adress.username
     *
     * @mbg.generated Wed Apr 10 16:31:11 CST 2019
     */
    public void setUsername(String username) {
        this.username = username;
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method returns the value of the database column adress.contact_way
     *
     * @return the value of adress.contact_way
     *
     * @mbg.generated Wed Apr 10 16:31:11 CST 2019
     */
    public String getContactWay() {
        return contactWay;
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method sets the value of the database column adress.contact_way
     *
     * @param contactWay the value for adress.contact_way
     *
     * @mbg.generated Wed Apr 10 16:31:11 CST 2019
     */
    public void setContactWay(String contactWay) {
        this.contactWay = contactWay;
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method returns the value of the database column adress.adress
     *
     * @return the value of adress.adress
     *
     * @mbg.generated Wed Apr 10 16:31:11 CST 2019
     */
    public String getAdress() {
        return adress;
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method sets the value of the database column adress.adress
     *
     * @param adress the value for adress.adress
     *
     * @mbg.generated Wed Apr 10 16:31:11 CST 2019
     */
    public void setAdress(String adress) {
        this.adress = adress;
    }

	@Override
	public String toString() {
		return "Adress [username=" + username + ", contactWay=" + contactWay + ", adress=" + adress + "]";
	}
    
    
}
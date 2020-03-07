create database milk_tea;
	use milk_tea;
	CREATE TABLE USER (
	id INT PRIMARY KEY auto_increment,
	head_img_src VARCHAR (128) DEFAULT "img/default.jpg",
	username VARCHAR (32) NOT NULL,
	pass VARCHAR (32) NOT NULL,
	balance INT (8) DEFAULT 0,
	integral INT (8) DEFAULT 0,
	age INT (2) DEFAULT 0,
	birthday VARCHAR (16) DEFAULT '1997-08-20',
	sex VARCHAR (4),
	contact_way VARCHAR (16) NOT NULL,
	signature VARCHAR (255)
);

CREATE TABLE milk_tea_info (
	id INT PRIMARY KEY auto_increment,
	milk_tea_name VARCHAR (32) NOT NULL,
	milk_tea_img_src VARCHAR (255) NOT NULL,
	milk_tea_normalprice VARCHAR (16) NOT NULL,
	milk_tea_specialprice VARCHAR (16) NOT NULL,
	milk_tea_put_data VARCHAR (64) NOT NULL,
	milk_tea_good_count INT (8) DEFAULT 0,
	milk_tea_inventory INT (8) NOT NULL,
	milk_tea_sales INT (8) DEFAULT 0,
	milk_tea_freight INT (8) DEFAULT 0,
	milk_tea_describe VARCHAR (255)
);

CREATE TABLE evaluate (
	milk_tea_name VARCHAR (32) NOT NULL,
	username VARCHAR (32) NOT NULL,
	evaluate_content VARCHAR (255)
);

CREATE TABLE adress (
	username VARCHAR (32) NOT NULL,
	contact_way VARCHAR (16) NOT NULL,
	adress VARCHAR (255) NOT NULL
);

CREATE TABLE buy_car (
	username VARCHAR (32) NOT NULL,
	milk_tea_name VARCHAR (32) NOT NULL,
	milk_tea_count INT (8) NOT NULL
);

CREATE TABLE order_ (
	id INT PRIMARY KEY auto_increment,
	order_id VARCHAR (16) NOT NULL,
	username VARCHAR (32) NOT NULL,
	remarks VARCHAR (255),
	discounts_num VARCHAR (8),
	integral_num VARCHAR (8),
	order_begin_time VARCHAR (16) NOT NULL,
	order_finish_time VARCHAR (16) NOT NULL,
	distribution_man VARCHAR (16),
	adress VARCHAR (255) NOT NULL,
	order_state VARCHAR (8) NOT NULL,
	order_finish_state VARCHAR (8) NOT NULL
);

CREATE TABLE order_commodity (
	order_id VARCHAR (16) NOT NULL,
	milk_tea_name VARCHAR (32) NOT NULL,
	milk_tea_count INT (8) NOT NULL
);

CREATE TABLE discounts (
	id INT PRIMARY KEY auto_increment,
	discounts_id VARCHAR (16) NOT NULL,
	discounts_count INT (4) NOT NULL,
	discounts_price INT (4) NOT NULL,
	how_can_use INT (4) NOT NULL,
	use_begin_time VARCHAR (16) NOT NULL,
	use_finish_time VARCHAR (16) NOT NULL,
	contact_way VARCHAR (16) DEFAULT '15575522523'
);

CREATE TABLE who_have_discounts (
	username VARCHAR (32) NOT NULL,
	discounts_id VARCHAR (16) NOT NULL,
	have_discounts_count INT (4) NOT NULL,
	discounts_state VARCHAR (8) NOT NULL
);
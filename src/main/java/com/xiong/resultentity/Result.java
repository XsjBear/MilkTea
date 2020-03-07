package com.xiong.resultentity;

/**
 * 返回结果的模板类
 * @author xsj
 *
 */
public class Result {
	
	private boolean result;//返回的结果,true/false
	private String content;//返回结果的说明
	public boolean isResult() {
		return result;
		
	}
	public void setResult(boolean result) {
		this.result = result;
	}
	public String getContent() {
		return content;
	}
	public void setContent(String content) {
		this.content = content;
	}
	@Override
	public String toString() {
		return "Result [result=" + result + ", content=" + content + "]";
	}
	
}

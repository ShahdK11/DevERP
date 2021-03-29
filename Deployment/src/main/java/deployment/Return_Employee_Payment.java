package deployment;

public class Return_Employee_Payment {
	private String messageName;
	private String p_Amount;
	private String p_Name;
	private String p_Date;
	public Return_Employee_Payment(String messageName, String p_Amount, String p_Name, String p_Date) {
		
		this.messageName = messageName;
		this.p_Amount = p_Amount;
		this.p_Name = p_Name;
		this.p_Date = p_Date;
	}
	public String getMessageName() {
		return messageName;
	}
	public void setMessageName(String messageName) {
		this.messageName = messageName;
	}
	public String getP_Amount() {
		return p_Amount;
	}
	public void setP_Amount(String p_Amount) {
		this.p_Amount = p_Amount;
	}
	public String getP_Name() {
		return p_Name;
	}
	public void setP_Name(String p_Name) {
		this.p_Name = p_Name;
	}
	public String getP_Date() {
		return p_Date;
	}
	public void setP_Date(String p_Date) {
		this.p_Date = p_Date;
	}
	
	

}

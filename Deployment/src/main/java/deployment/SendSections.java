package deployment;

public class SendSections {
	private String messageName;
	private String p_Code;
	private String p_Name;
	private String p_RequestedFund;
	private String p_RequestedRevenue;
	public SendSections(String messageName, String p_Code, String p_Name, String p_RequestedFund,
			String p_RequestedRevenue) {
		
		this.messageName = messageName;
		this.p_Code = p_Code;
		this.p_Name = p_Name;
		this.p_RequestedFund = p_RequestedFund;
		this.p_RequestedRevenue = p_RequestedRevenue;
	}
	public String getMessageName() {
		return messageName;
	}
	public void setMessageName(String messageName) {
		this.messageName = messageName;
	}
	public String getP_Code() {
		return p_Code;
	}
	public void setP_Code(String p_Code) {
		this.p_Code = p_Code;
	}
	public String getP_Name() {
		return p_Name;
	}
	public void setP_Name(String p_Name) {
		this.p_Name = p_Name;
	}
	public String getP_RequestedFund() {
		return p_RequestedFund;
	}
	public void setP_RequestedFund(String p_RequestedFund) {
		this.p_RequestedFund = p_RequestedFund;
	}
	public String getP_RequestedRevenue() {
		return p_RequestedRevenue;
	}
	public void setP_RequestedRevenue(String p_RequestedRevenue) {
		this.p_RequestedRevenue = p_RequestedRevenue;
	}

}

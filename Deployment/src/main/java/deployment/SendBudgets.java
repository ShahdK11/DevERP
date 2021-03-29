package deployment;

public class SendBudgets {
	private String messageName;
	private String p_Year;
	private String p_Ceiling;
	private String p_Requested;
	private String p_CeilingRevenue;
	private String p_RequestedRevenue;
	public SendBudgets(String messageName, String p_Year, String p_Ceiling, String p_Requested, String p_CeilingRevenue, String p_RequestedRevenue) {
		this.messageName = messageName;
		this.p_Year = p_Year;
		this.p_Ceiling = p_Ceiling;
		this.p_Requested = p_Requested;
		this.p_CeilingRevenue = p_CeilingRevenue;
		this.p_RequestedRevenue = p_RequestedRevenue;
	}
	public String getMessageName() {
		return messageName;
	}
	public void setMessageName(String messageName) {
		this.messageName = messageName;
	}
	public String getP_Year() {
		return p_Year;
	}
	public void setP_Year(String p_Year) {
		this.p_Year = p_Year;
	}
	public String getP_Ceiling() {
		return p_Ceiling;
	}
	public void setP_Ceiling(String p_Ceiling) {
		this.p_Ceiling = p_Ceiling;
	}
	public String getP_Requested() {
		return p_Requested;
	}
	public void setP_Requested(String p_Requested) {
		this.p_Requested = p_Requested;
	}
	public String getP_CeilingRevenue() {
		return p_CeilingRevenue;
	}
	public void setP_CeilingRevenue(String p_CeilingRevenue) {
		this.p_CeilingRevenue = p_CeilingRevenue;
	}
	public String getP_RequestedRevenue() {
		return p_RequestedRevenue;
	}
	public void setP_RequestedRevenue(String p_RequestedRevenue) {
		this.p_RequestedRevenue = p_RequestedRevenue;
	}

}

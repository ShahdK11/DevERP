package deployment;

public class SendAccountFunds {
	private String p_Code;
	private String p_Name;
	private boolean p_New;
	private int p_Ceiling;
	private int p_Requested;
	private int p_CeilingRevenue;
	private int p_RequestedRevenue;
	public SendAccountFunds( String p_Code, String p_Name, boolean p_New, int p_Ceiling, int p_Requested, int p_CeilingRevenue,
			int p_RequestedRevenue) {
		this.p_Code = p_Code;
		this.p_Name = p_Name;
		this.p_New = p_New;
		this.p_Ceiling = p_Ceiling;
		this.p_Requested = p_Requested;
		this.p_CeilingRevenue = p_CeilingRevenue;
		this.p_RequestedRevenue = p_RequestedRevenue;
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
	public boolean isP_New() {
		return p_New;
	}
	public void setP_New(boolean p_New) {
		this.p_New = p_New;
	}
	public int getP_Ceiling() {
		return p_Ceiling;
	}
	public void setP_Ceiling(int p_Ceiling) {
		this.p_Ceiling = p_Ceiling;
	}
	public int getP_Requested() {
		return p_Requested;
	}
	public void setP_Requested(int p_Requested) {
		this.p_Requested = p_Requested;
	}
	public int getP_CeilingRevenue() {
		return p_CeilingRevenue;
	}
	public void setP_CeilingRevenue(int p_CeilingRevenue) {
		this.p_CeilingRevenue = p_CeilingRevenue;
	}
	public int getP_RequestedRevenue() {
		return p_RequestedRevenue;
	}
	public void setP_RequestedRevenue(int p_RequestedRevenue) {
		this.p_RequestedRevenue = p_RequestedRevenue;
	}
	
}

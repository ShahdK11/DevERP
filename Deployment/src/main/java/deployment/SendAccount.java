package deployment;

public class SendAccount {
	private String p_Code;
	private String p_Name;
	private int p_Fund;
	private int p_Revenue;
	public SendAccount(String p_Code, String p_Name, int p_Fund, int p_Revenue) {
		this.p_Code = p_Code;
		this.p_Name = p_Name;
		this.p_Fund = p_Fund;
		this.p_Revenue = p_Revenue;
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
	public int getP_Fund() {
		return p_Fund;
	}
	public void setP_Fund(int p_Fund) {
		this.p_Fund = p_Fund;
	}
	public int getP_Revenue() {
		return p_Revenue;
	}
	public void setP_Revenue(int p_Revenue) {
		this.p_Revenue = p_Revenue;
	}
	
}

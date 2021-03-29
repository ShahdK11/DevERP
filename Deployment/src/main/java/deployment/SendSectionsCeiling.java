package deployment;

public class SendSectionsCeiling {
	private String messageName;
	private String p_Code;
	private String p_Name;
	private String p_Fund;
	private String p_Revenue;
	public SendSectionsCeiling(String messageName, String p_Code, String p_Name, String p_Fund, String p_Revenue) {
		
		this.messageName = messageName;
		this.p_Code = p_Code;
		this.p_Name = p_Name;
		this.p_Fund = p_Fund;
		this.p_Revenue = p_Revenue;
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
	public String getP_Fund() {
		return p_Fund;
	}
	public void setP_Fund(String p_Fund) {
		this.p_Fund = p_Fund;
	}
	public String getP_Revenue() {
		return p_Revenue;
	}
	public void setP_Revenue(String p_Revenue) {
		this.p_Revenue = p_Revenue;
	}

}

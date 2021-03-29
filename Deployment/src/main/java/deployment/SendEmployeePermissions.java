package deployment;

public class SendEmployeePermissions {
	private String messageName;
	private String p_GroupName;
	private String p_Description;
	public SendEmployeePermissions(String messageName, String p_GroupName, String p_Description) {
	
		this.messageName = messageName;
		this.p_GroupName = p_GroupName;
		this.p_Description = p_Description;
	}
	public String getMessageName() {
		return messageName;
	}
	public void setMessageName(String messageName) {
		this.messageName = messageName;
	}
	public String getP_GroupName() {
		return p_GroupName;
	}
	public void setP_GroupName(String p_GroupName) {
		this.p_GroupName = p_GroupName;
	}
	public String getP_Description() {
		return p_Description;
	}
	public void setP_Description(String p_Description) {
		this.p_Description = p_Description;
	}
	
	
}

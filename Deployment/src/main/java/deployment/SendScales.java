package deployment;

public class SendScales {
	private String messageName;
	private String p_Name;
	private String p_Description;
	public SendScales(String messageName, String p_Name, String p_Description) {
		
		this.messageName = messageName;
		this.p_Name = p_Name;
		this.p_Description = p_Description;
	}
	public String getMessageName() {
		return messageName;
	}
	public void setMessageName(String messageName) {
		this.messageName = messageName;
	}
	public String getP_Name() {
		return p_Name;
	}
	public void setP_Name(String p_Name) {
		this.p_Name = p_Name;
	}
	public String getP_Description() {
		return p_Description;
	}
	public void setP_Description(String p_Description) {
		this.p_Description = p_Description;
	}
	

}

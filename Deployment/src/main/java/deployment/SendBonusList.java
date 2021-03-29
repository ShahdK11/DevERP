package deployment;

public class SendBonusList {
	private String messageName;
	private String p_Name;
	private String p_Percent;
	public SendBonusList() {
	}
	public SendBonusList(  String messageName, String p_Name, String p_Percent ) {
		this.messageName = messageName;
		this.p_Name = p_Name;
		this.p_Percent = p_Percent;
	}
	public void setMessageName( String messageName ) {
		this.messageName = messageName;
	}
	public String getMessageName() {
		return messageName;
	}
	public void setP_Name( String p_Name ) {
		this.p_Name = p_Name;
	}
	public String getP_Name() {
		return p_Name;
	}
	public void setP_Percent( String p_Percent ) {
		this.p_Percent = p_Percent;
	}
	public String getP_Percent() {
		return p_Percent;
	}

}

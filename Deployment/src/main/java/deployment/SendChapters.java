package deployment;

public class SendChapters {
	private String messageName;
	private String p_Code;
	private String p_Name;
	private String p_Ceiling;
	private String p_Requested;
	public SendChapters(String messageName, String p_Code, String p_Name, String p_Ceiling, String p_Requested) {
		
		this.messageName = messageName;
		this.p_Code = p_Code;
		this.p_Name = p_Name;
		this.p_Ceiling = p_Ceiling;
		this.p_Requested = p_Requested;
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

}

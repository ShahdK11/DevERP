package deployment;

public class ReplyNewEmployee {
	private String messageName;
	private String p_Username;
	private String p_state;
	public ReplyNewEmployee() {
	}
	public ReplyNewEmployee(  String messageName, String p_Username, String p_state ) {
		this.messageName = messageName;
		this.p_Username = p_Username;
		this.p_state = p_state;
	}
	public void setMessageName( String messageName ) {
		this.messageName = messageName;
	}
	public String getMessageName() {
		return messageName;
	}
	public void setP_Username( String p_Username ) {
		this.p_Username = p_Username;
	}
	public String getP_Username() {
		return p_Username;
	}
	public void setP_state( String p_state ) {
		this.p_state = p_state;
	}
	public String getP_state() {
		return p_state;
	}
}

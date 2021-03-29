package deployment;

public class ReplyUsernamePassword {
	private String messageName;
	private int p_EmployeeID;
	private String p_Username;
	private String p_msg;
	private boolean p_state;
	public ReplyUsernamePassword(String messageName, int p_EmployeeID, String p_Username, String p_msg,
			boolean p_state) {
		this.messageName = messageName;
		this.p_EmployeeID = p_EmployeeID;
		this.p_Username = p_Username;
		this.p_msg = p_msg;
		this.p_state = p_state;
	}
	public String getMessageName() {
		return messageName;
	}
	public void setMessageName(String messageName) {
		this.messageName = messageName;
	}
	public int getP_EmployeeID() {
		return p_EmployeeID;
	}
	public void setP_EmployeeID(int p_EmployeeID) {
		this.p_EmployeeID = p_EmployeeID;
	}
	public String getP_Username() {
		return p_Username;
	}
	public void setP_Username(String p_Username) {
		this.p_Username = p_Username;
	}
	public String getP_msg() {
		return p_msg;
	}
	public void setP_msg(String p_msg) {
		this.p_msg = p_msg;
	}
	
	public boolean getP_state() {
		return p_state;
	}
	public void setP_state(boolean p_state) {
		this.p_state = p_state;
	}
	
}

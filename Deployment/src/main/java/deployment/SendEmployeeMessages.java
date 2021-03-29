package deployment;

public class SendEmployeeMessages {
	private String messageName;
	private String p_LeaveRequesterID;
	private String p_Starting;
	private String p_Ending;
	private String p_Content;
	public SendEmployeeMessages(String messageName, String p_LeaveRequesterID, String p_Starting, String p_Ending,
			String p_Content) {
		this.messageName = messageName;
		this.p_LeaveRequesterID = p_LeaveRequesterID;
		this.p_Starting = p_Starting;
		this.p_Ending = p_Ending;
		this.p_Content = p_Content;
	}
	public String getMessageName() {
		return messageName;
	}
	public void setMessageName(String messageName) {
		this.messageName = messageName;
	}
	public String getP_LeaveRequesterID() {
		return p_LeaveRequesterID;
	}
	public void setP_LeaveRequesterID(String p_LeaveRequesterID) {
		this.p_LeaveRequesterID = p_LeaveRequesterID;
	}
	public String getP_Starting() {
		return p_Starting;
	}
	public void setP_Starting(String p_Starting) {
		this.p_Starting = p_Starting;
	}
	public String getP_Ending() {
		return p_Ending;
	}
	public void setP_Ending(String p_Ending) {
		this.p_Ending = p_Ending;
	}
	public String getP_Content() {
		return p_Content;
	}
	public void setP_Content(String p_Content) {
		this.p_Content = p_Content;
	}
	
	
}

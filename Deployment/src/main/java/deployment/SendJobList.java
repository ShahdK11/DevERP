package deployment;

public class SendJobList {
	private String messageName;
	private String p_JobID;
	private String p_Title;
	private String p_Salary;
	private String p_EmployeeName;
	private String p_EmployeeID;
	public SendJobList(String messageName, String p_JobID, String p_Title, String p_Salary, String p_EmployeeName,
			String p_EmployeeID) {
		
		this.messageName = messageName;
		this.p_JobID = p_JobID;
		this.p_Title = p_Title;
		this.p_Salary = p_Salary;
		this.p_EmployeeName = p_EmployeeName;
		this.p_EmployeeID = p_EmployeeID;
	}
	public String getMessageName() {
		return messageName;
	}
	public void setMessageName(String messageName) {
		this.messageName = messageName;
	}
	public String getP_JobID() {
		return p_JobID;
	}
	public void setP_JobID(String p_JobID) {
		this.p_JobID = p_JobID;
	}
	public String getP_Title() {
		return p_Title;
	}
	public void setP_Title(String p_Title) {
		this.p_Title = p_Title;
	}
	public String getP_Salary() {
		return p_Salary;
	}
	public void setP_Salary(String p_Salary) {
		this.p_Salary = p_Salary;
	}
	public String getP_EmployeeName() {
		return p_EmployeeName;
	}
	public void setP_EmployeeName(String p_EmployeeName) {
		this.p_EmployeeName = p_EmployeeName;
	}
	public String getP_EmployeeID() {
		return p_EmployeeID;
	}
	public void setP_EmployeeID(String p_EmployeeID) {
		this.p_EmployeeID = p_EmployeeID;
	}
	
	
}

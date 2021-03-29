package deployment;

public class SendDepartmentList {
	private String messageName;
	private String p_Name;
	private String p_Mission;
	private String p_Description;
	private String p_Manager;
	private String p_ManagingDepartment;
	
	public SendDepartmentList(String messageName, String p_Name, String p_Mission, String p_Description,
			String p_Manager, String p_ManagingDepartment) {
		this.messageName = messageName;
		this.p_Name = p_Name;
		this.p_Mission = p_Mission;
		this.p_Description = p_Description;
		this.p_Manager = p_Manager;
		this.p_ManagingDepartment = p_ManagingDepartment;
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
	public String getP_Mission() {
		return p_Mission;
	}
	public void setP_Mission(String p_Mission) {
		this.p_Mission = p_Mission;
	}
	public String getP_Description() {
		return p_Description;
	}
	public void setP_Description(String p_Description) {
		this.p_Description = p_Description;
	}
	public String getP_Manager() {
		return p_Manager;
	}
	public void setP_Manager(String p_Manager) {
		this.p_Manager = p_Manager;
	}
	public String getP_ManagingDepartment() {
		return p_ManagingDepartment;
	}
	public void setP_ManagingDepartment(String p_ManagingDepartment) {
		this.p_ManagingDepartment = p_ManagingDepartment;
	}
	

}

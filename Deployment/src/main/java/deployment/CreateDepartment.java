package deployment;

public class CreateDepartment {
	private String p_Name;
	private String p_Mission;
	private String p_ParentDepartment;
	public CreateDepartment() {
		
	}
	public CreateDepartment(String p_Name, String p_Mission, String p_ParentDepartment) {
		super();
		this.p_Name = p_Name;
		this.p_Mission = p_Mission;
		this.p_ParentDepartment = p_ParentDepartment;
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
	public String getP_ParentDepartment() {
		return p_ParentDepartment;
	}
	public void setP_ParentDepartment(String p_ParentDepartment) {
		this.p_ParentDepartment = p_ParentDepartment;
	}
	
	

}

package deployment;

public class CreateNewAccount {
	private String p_First_Name;
	private String p_Last_Name;
	private int p_EmployeeID;
	private String p_Username;
	public CreateNewAccount() {
	}
	public CreateNewAccount(String p_First_Name, String p_Last_Name, int p_EmployeeID, String p_Username) {
		this.p_First_Name = p_First_Name;
		this.p_Last_Name = p_Last_Name;
		this.p_EmployeeID = p_EmployeeID;
		this.p_Username = p_Username;
	}
	public String getP_First_Name() {
		return p_First_Name;
	}
	public void setP_First_Name(String p_First_Name) {
		this.p_First_Name = p_First_Name;
	}
	public String getP_Last_Name() {
		return p_Last_Name;
	}
	public void setP_Last_Name(String p_Last_Name) {
		this.p_Last_Name = p_Last_Name;
	}
	public int getP_EmployeeID() {
		return p_EmployeeID;
	}
	public void setP_EmployeeID(int p_EmployeeID) {
		this.p_EmployeeID = p_EmployeeID;
	}
	public String getP_Username(){
		return p_Username;
	}
	public void setP_Username(String p_Username){
		this.p_Username = p_Username;
	}

}

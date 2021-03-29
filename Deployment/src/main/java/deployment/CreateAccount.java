package deployment;

public class CreateAccount {
	String p_Code;
	String p_Name;
	String p_Description;
	String p_ParentAccount;
	public CreateAccount() {
	}
	public CreateAccount(String p_Code, String p_Name, String p_Description, String p_ParentAccount) {
		
		this.p_Code = p_Code;
		this.p_Name = p_Name;
		this.p_Description = p_Description;
		this.p_ParentAccount = p_ParentAccount;
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
	public String getP_Description() {
		return p_Description;
	}
	public void setP_Description(String p_Description) {
		this.p_Description = p_Description;
	}
	public String getP_ParentAccount() {
		return p_ParentAccount;
	}
	public void setP_ParentAccount(String p_ParentAccount) {
		this.p_ParentAccount = p_ParentAccount;
	}

}

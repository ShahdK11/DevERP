package deployment;

public class CreateProgram {
	private String p_Code;
	private String p_Name;
	private String p_Description;
	private int p_Duration;
	private int p_StartDate;
	private int p_DedicatedFunds;
	private String p_Account;
	public CreateProgram() {
	}
	public CreateProgram(String p_Code, String p_Name, String p_Description, int p_Duration, int p_StartDate,
			int p_DedicatedFunds, String p_Account) {
		super();
		this.p_Code = p_Code;
		this.p_Name = p_Name;
		this.p_Description = p_Description;
		this.p_Duration = p_Duration;
		this.p_StartDate = p_StartDate;
		this.p_DedicatedFunds = p_DedicatedFunds;
		this.p_Account = p_Account;
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
	public int getP_Duration() {
		return p_Duration;
	}
	public void setP_Duration(int p_Duration) {
		this.p_Duration = p_Duration;
	}
	public int getP_StartDate() {
		return p_StartDate;
	}
	public void setP_StartDate(int p_StartDate) {
		this.p_StartDate = p_StartDate;
	}
	public int getP_DedicatedFunds() {
		return p_DedicatedFunds;
	}
	public void setP_DedicatedFunds(int p_DedicatedFunds) {
		this.p_DedicatedFunds = p_DedicatedFunds;
	}
	public String getP_Account() {
		return p_Account;
	}
	public void setP_Account(String p_Account) {
		this.p_Account = p_Account;
	}
	
}

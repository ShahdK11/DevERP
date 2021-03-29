package deployment;

public class SendGrades {
	private String messageName;
	private String p_Name;
	private String p_BaseSalary;
	private String p_Allowance;
	private String p_NumberOfSteps;
	private String p_Above;
	private String p_Below;
	public SendGrades(String messageName, String p_Name, String p_BaseSalary, String p_Allowance,
			String p_NumberOfSteps, String p_Above, String p_Below) {
		
		this.messageName = messageName;
		this.p_Name = p_Name;
		this.p_BaseSalary = p_BaseSalary;
		this.p_Allowance = p_Allowance;
		this.p_NumberOfSteps = p_NumberOfSteps;
		this.p_Above = p_Above;
		this.p_Below = p_Below;
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
	public String getP_BaseSalary() {
		return p_BaseSalary;
	}
	public void setP_BaseSalary(String p_BaseSalary) {
		this.p_BaseSalary = p_BaseSalary;
	}
	public String getP_Allowance() {
		return p_Allowance;
	}
	public void setP_Allowance(String p_Allowance) {
		this.p_Allowance = p_Allowance;
	}
	public String getP_NumberOfSteps() {
		return p_NumberOfSteps;
	}
	public void setP_NumberOfSteps(String p_NumberOfSteps) {
		this.p_NumberOfSteps = p_NumberOfSteps;
	}
	public String getP_Above() {
		return p_Above;
	}
	public void setP_Above(String p_Above) {
		this.p_Above = p_Above;
	}
	public String getP_Below() {
		return p_Below;
	}
	public void setP_Below(String p_Below) {
		this.p_Below = p_Below;
	}
	
	

}

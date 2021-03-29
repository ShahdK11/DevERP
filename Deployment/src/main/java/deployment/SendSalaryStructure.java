package deployment;

public class SendSalaryStructure {
	private String messageName;
	private String p_EmployeeSalary;
	private String p_BonusName;
	private String p_BonusAmount;
	public SendSalaryStructure(String messageName, String p_EmployeeSalary, String p_BonusName, String p_BonusAmount) {
		
		this.messageName = messageName;
		this.p_EmployeeSalary = p_EmployeeSalary;
		this.p_BonusName = p_BonusName;
		this.p_BonusAmount = p_BonusAmount;
	}
	public String getMessageName() {
		return messageName;
	}
	public void setMessageName(String messageName) {
		this.messageName = messageName;
	}
	public String getP_EmployeeSalary() {
		return p_EmployeeSalary;
	}
	public void setP_EmployeeSalary(String p_EmployeeSalary) {
		this.p_EmployeeSalary = p_EmployeeSalary;
	}
	public String getP_BonusName() {
		return p_BonusName;
	}
	public void setP_BonusName(String p_BonusName) {
		this.p_BonusName = p_BonusName;
	}
	public String getP_BonusAmount() {
		return p_BonusAmount;
	}
	public void setP_BonusAmount(String p_BonusAmount) {
		this.p_BonusAmount = p_BonusAmount;
	}
	
}

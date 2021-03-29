package deployment;

public class AssignEmployeeBonus {
	private int p_EmployeeID;
	private String p_BonusName;
	private int p_Starting;
	private int p_Ending;
	public AssignEmployeeBonus() {
	}
	public AssignEmployeeBonus(int p_EmployeeID, String p_BonusName, int p_Starting, int p_Ending) {
		this.p_EmployeeID = p_EmployeeID;
		this.p_BonusName = p_BonusName;
		this.p_Starting = p_Starting;
		this.p_Ending = p_Ending;
	}
	public int getP_EmployeeID() {
		return p_EmployeeID;
	}
	public void setP_EmployeeID(int p_EmployeeID) {
		this.p_EmployeeID = p_EmployeeID;
	}
	public String getP_BonusName() {
		return p_BonusName;
	}
	public void setP_BonusName(String p_BonusName) {
		this.p_BonusName = p_BonusName;
	}
	public int getP_Starting() {
		return p_Starting;
	}
	public void setP_Starting(int p_Starting) {
		this.p_Starting = p_Starting;
	}
	public int getP_Ending() {
		return p_Ending;
	}
	public void setP_Ending(int p_Ending) {
		this.p_Ending = p_Ending;
	}

}

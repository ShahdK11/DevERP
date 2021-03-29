package deployment;

public class AssignBonusToEmployee {
	private int p_National_ID;
	private String p_Name;
	private int p_Starting;
	private int p_Ending;
	private String p_Action;
	public AssignBonusToEmployee(int p_National_ID, String p_Name, int p_Starting, int p_Ending, String p_Action) {
		this.p_National_ID = p_National_ID;
		this.p_Name = p_Name;
		this.p_Starting = p_Starting;
		this.p_Ending = p_Ending;
		this.p_Action = p_Action;
	}
	public AssignBonusToEmployee() {
	}
	public int getP_National_ID() {
		return p_National_ID;
	}
	public void setP_National_ID(int p_National_ID) {
		this.p_National_ID = p_National_ID;
	}
	public String getP_Name() {
		return p_Name;
	}
	public void setP_Name(String p_Name) {
		this.p_Name = p_Name;
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
	public String getP_Action() {
		return p_Action;
	}
	public void setP_Action(String p_Action) {
		this.p_Action = p_Action;
	}
	

}

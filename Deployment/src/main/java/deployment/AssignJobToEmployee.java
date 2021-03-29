package deployment;

public class AssignJobToEmployee {
	private int p_Job_ID;
	private int p_National_ID;
	private String p_Action;
	private boolean p_Active;
	public AssignJobToEmployee() {
	}
	public AssignJobToEmployee(int p_Job_ID, int p_National_ID, String p_Action, boolean p_Active) {
		
		this.p_Job_ID = p_Job_ID;
		this.p_National_ID = p_National_ID;
		this.p_Action = p_Action;
		this.p_Active = p_Active;
	}
	public int getP_Job_ID() {
		return p_Job_ID;
	}
	public void setP_Job_ID(int p_Job_ID) {
		this.p_Job_ID = p_Job_ID;
	}
	public int getP_National_ID() {
		return p_National_ID;
	}
	public void setP_National_ID(int p_National_ID) {
		this.p_National_ID = p_National_ID;
	}
	public String getP_Action() {
		return p_Action;
	}
	public void setP_Action(String p_Action) {
		this.p_Action = p_Action;
	}
	public boolean isP_Active() {
		return p_Active;
	}
	public void setP_Active(boolean p_Active) {
		this.p_Active = p_Active;
	}

}

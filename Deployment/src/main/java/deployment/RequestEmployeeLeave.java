package deployment;

public class RequestEmployeeLeave {
	
	private int p_Starting;
	private int p_Ending;
	private int p_EmployeeID;
	private String p_LeaveName;
	
	public RequestEmployeeLeave(int p_Starting, int p_Ending, int p_EmployeeID, String p_LeaveName) {
		
		this.p_Starting = p_Starting;
		this.p_Ending = p_Ending;
		this.p_EmployeeID = p_EmployeeID;
		this.p_LeaveName = p_LeaveName;
	}

	public RequestEmployeeLeave() {
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

	public int getP_EmployeeID() {
		return p_EmployeeID;
	}

	public void setP_EmployeeID(int p_EmployeeID) {
		this.p_EmployeeID = p_EmployeeID;
	}

	public String getP_LeaveName() {
		return p_LeaveName;
	}

	public void setP_LeaveName(String p_LeaveName) {
		this.p_LeaveName = p_LeaveName;
	}

}

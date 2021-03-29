package deployment;

public class ReadMilestones {
	private String p_InitiativeName;
	private String p_InitiativeShortNumber;
	private String p_InitiativeLongNumber;
	public ReadMilestones() {
	}
	public ReadMilestones(String p_InitiativeName, String p_InitiativeShortNumber, String p_InitiativeLongNumber) {
		this.p_InitiativeName = p_InitiativeName;
		this.p_InitiativeShortNumber = p_InitiativeShortNumber;
		this.p_InitiativeLongNumber = p_InitiativeLongNumber;
	}
	public String getP_InitiativeName() {
		return p_InitiativeName;
	}
	public void setP_InitiativeName(String p_InitiativeName) {
		this.p_InitiativeName = p_InitiativeName;
	}
	public String getP_InitiativeShortNumber() {
		return p_InitiativeShortNumber;
	}
	public void setP_InitiativeShortNumber(String p_InitiativeShortNumber) {
		this.p_InitiativeShortNumber = p_InitiativeShortNumber;
	}
	public String getP_InitiativeLongNumber() {
		return p_InitiativeLongNumber;
	}
	public void setP_InitiativeLongNumber(String p_InitiativeLongNumber) {
		this.p_InitiativeLongNumber = p_InitiativeLongNumber;
	}

}

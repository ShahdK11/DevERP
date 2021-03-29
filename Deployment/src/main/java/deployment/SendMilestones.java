package deployment;

public class SendMilestones {
	private String p_Name;
	private String p_FullCode;
	private String p_Code; 
	private String p_Type;
	private String p_SuccessCriteria;
	private int p_CompletePlanned;
	private int p_CompleteActual;
	private boolean p_Complete;
	private int p_Weight;
	private int p_Percentage;
	private String p_sdState;
	private String p_sdDescription;
	private String p_Notes;
	private String p_IncompleteReasons;
	public SendMilestones(String p_Name, String p_FullCode, String p_Code, String p_Type, String p_SuccessCriteria,
			int p_CompletePlanned, int p_CompleteActual, boolean p_Complete, int p_Weight, int p_Percentage,
			String p_sdState, String p_sdDescription, String p_Notes, String p_IncompleteReasons) {
		this.p_Name = p_Name;
		this.p_FullCode = p_FullCode;
		this.p_Code = p_Code;
		this.p_Type = p_Type;
		this.p_SuccessCriteria = p_SuccessCriteria;
		this.p_CompletePlanned = p_CompletePlanned;
		this.p_CompleteActual = p_CompleteActual;
		this.p_Complete = p_Complete;
		this.p_Weight = p_Weight;
		this.p_Percentage = p_Percentage;
		this.p_sdState = p_sdState;
		this.p_sdDescription = p_sdDescription;
		this.p_Notes = p_Notes;
		this.p_IncompleteReasons = p_IncompleteReasons;
	}
	public String getP_Name() {
		return p_Name;
	}
	public void setP_Name(String p_Name) {
		this.p_Name = p_Name;
	}
	public String getP_FullCode() {
		return p_FullCode;
	}
	public void setP_FullCode(String p_FullCode) {
		this.p_FullCode = p_FullCode;
	}
	public String getP_Code() {
		return p_Code;
	}
	public void setP_Code(String p_Code) {
		this.p_Code = p_Code;
	}
	public String getP_Type() {
		return p_Type;
	}
	public void setP_Type(String p_Type) {
		this.p_Type = p_Type;
	}
	public String getP_SuccessCriteria() {
		return p_SuccessCriteria;
	}
	public void setP_SuccessCriteria(String p_SuccessCriteria) {
		this.p_SuccessCriteria = p_SuccessCriteria;
	}
	public int getP_CompletePlanned() {
		return p_CompletePlanned;
	}
	public void setP_CompletePlanned(int p_CompletePlanned) {
		this.p_CompletePlanned = p_CompletePlanned;
	}
	public int getP_CompleteActual() {
		return p_CompleteActual;
	}
	public void setP_CompleteActual(int p_CompleteActual) {
		this.p_CompleteActual = p_CompleteActual;
	}
	public boolean isP_Complete() {
		return p_Complete;
	}
	public void setP_Complete(boolean p_Complete) {
		this.p_Complete = p_Complete;
	}
	public int getP_Weight() {
		return p_Weight;
	}
	public void setP_Weight(int p_Weight) {
		this.p_Weight = p_Weight;
	}
	public int getP_Percentage() {
		return p_Percentage;
	}
	public void setP_Percentage(int p_Percentage) {
		this.p_Percentage = p_Percentage;
	}
	public String getP_sdState() {
		return p_sdState;
	}
	public void setP_sdState(String p_sdState) {
		this.p_sdState = p_sdState;
	}
	public String getP_sdDescription() {
		return p_sdDescription;
	}
	public void setP_sdDescription(String p_sdDescription) {
		this.p_sdDescription = p_sdDescription;
	}
	public String getP_Notes() {
		return p_Notes;
	}
	public void setP_Notes(String p_Notes) {
		this.p_Notes = p_Notes;
	}
	public String getP_IncompleteReasons() {
		return p_IncompleteReasons;
	}
	public void setP_IncompleteReasons(String p_IncompleteReasons) {
		this.p_IncompleteReasons = p_IncompleteReasons;
	}

}

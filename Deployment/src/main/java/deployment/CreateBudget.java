package deployment;

public class CreateBudget {
	private String p_Year;
	private String p_FromBudget;
	public CreateBudget() {
		
	}
	public CreateBudget(String p_Year, String p_FromBudget) {
		super();
		this.p_Year = p_Year;
		this.p_FromBudget = p_FromBudget;
	}
	public String getP_Year() {
		return p_Year;
	}
	public void setP_Year(String p_Year) {
		this.p_Year = p_Year;
	}
	public String getP_FromBudget() {
		return p_FromBudget;
	}
	public void setP_FromBudget(String p_FromBudget) {
		this.p_FromBudget = p_FromBudget;
	}
	

}

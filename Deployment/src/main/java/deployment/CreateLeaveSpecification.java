package deployment;

public class CreateLeaveSpecification {
	private String p_Name;
	private int p_MaximumDays;
	private int p_MinimumDays;
	public CreateLeaveSpecification() {
	}
	public CreateLeaveSpecification(String p_Name, int p_MaximumDays, int p_MinimumDays) {
		super();
		this.p_Name = p_Name;
		this.p_MaximumDays = p_MaximumDays;
		this.p_MinimumDays = p_MinimumDays;
	}
	public String getP_Name() {
		return p_Name;
	}
	public void setP_Name(String p_Name) {
		this.p_Name = p_Name;
	}
	public int getP_MaximumDays() {
		return p_MaximumDays;
	}
	public void setP_MaximumDays(int p_MaximumDays) {
		this.p_MaximumDays = p_MaximumDays;
	}
	public int getP_MinimumDays() {
		return p_MinimumDays;
	}
	public void setP_MinimumDays(int p_MinimumDays) {
		this.p_MinimumDays = p_MinimumDays;
	}

}

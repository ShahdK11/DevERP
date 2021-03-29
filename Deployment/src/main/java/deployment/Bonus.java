package deployment;

public class Bonus {
	private String p_Name;
	private double p_Percent;
	public Bonus() {
		
	}
	public Bonus(String p_Name, double p_Percent) {
		this.p_Name = p_Name;
		this.p_Percent = p_Percent;
	}
	public String getP_Name() {
		return p_Name;
	}
	public void setP_Name(String p_Name) {
		this.p_Name = p_Name;
	}
	public double getP_Percent() {
		return p_Percent;
	}
	public void setP_Percent(double p_Percent) {
		this.p_Percent = p_Percent;
	}
	
	

}

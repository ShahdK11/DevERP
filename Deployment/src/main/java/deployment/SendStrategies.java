package deployment;

public class SendStrategies {
	private String p_Number;
	private String p_Name;
	private String p_Description;
	public SendStrategies(String p_Number, String p_Name, String p_Description) {
		this.p_Number = p_Number;
		this.p_Name = p_Name;
		this.p_Description = p_Description;
	}
	public String getP_Number() {
		return p_Number;
	}
	public void setP_Number(String p_Number) {
		this.p_Number = p_Number;
	}
	public String getP_Name() {
		return p_Name;
	}
	public void setP_Name(String p_Name) {
		this.p_Name = p_Name;
	}
	public String getP_Description() {
		return p_Description;
	}
	public void setP_Description(String p_Description) {
		this.p_Description = p_Description;
	}

}

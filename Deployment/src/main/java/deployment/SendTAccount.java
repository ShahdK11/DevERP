package deployment;

public class SendTAccount {
	private String p_Code;
	private double p_Amount;
	private int p_Date;
	private String p_Description;
	private String p_Type;
	public SendTAccount(String p_Code, double p_Amount, int p_Date, String p_Description, String p_Type) {
		this.p_Code = p_Code;
		this.p_Amount = p_Amount;
		this.p_Date = p_Date;
		this.p_Description = p_Description;
		this.p_Type = p_Type;
	}
	public String getP_Code() {
		return p_Code;
	}
	public void setP_Code(String p_Code) {
		this.p_Code = p_Code;
	}
	public double getP_Amount() {
		return p_Amount;
	}
	public void setP_Amount(double p_Amount) {
		this.p_Amount = p_Amount;
	}
	public int getP_Date() {
		return p_Date;
	}
	public void setP_Date(int p_Date) {
		this.p_Date = p_Date;
	}
	public String getP_Description() {
		return p_Description;
	}
	public void setP_Description(String p_Description) {
		this.p_Description = p_Description;
	}
	public String getP_Type() {
		return p_Type;
	}
	public void setP_Type(String p_Type) {
		this.p_Type = p_Type;
	}
	

}

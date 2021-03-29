package deployment;

public class AccountTransfers {
	private String p_Code;
	private String p_CodeTo;
	private double p_Amount;
	private int p_Date;
	private String p_Description;
	public AccountTransfers() {
		// TODO Auto-generated constructor stub
	}
	public AccountTransfers(String p_Code, String p_CodeTo, double p_Amount, int p_Date, String p_Description) {
		this.p_Code = p_Code;
		this.p_CodeTo = p_CodeTo;
		this.p_Amount = p_Amount;
		this.p_Date = p_Date;
		this.p_Description = p_Description;
	}
	public String getP_Code() {
		return p_Code;
	}
	public void setP_Code(String p_Code) {
		this.p_Code = p_Code;
	}
	public String getP_CodeTo() {
		return p_CodeTo;
	}
	public void setP_CodeTo(String p_CodeTo) {
		this.p_CodeTo = p_CodeTo;
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

}

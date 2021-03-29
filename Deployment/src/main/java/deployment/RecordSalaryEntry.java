package deployment;

public class RecordSalaryEntry {
	private int p_Date;
	private String p_Description;
	private double p_Amount;
	public RecordSalaryEntry() {
	}
	public RecordSalaryEntry(int p_Date, String p_Description, double p_Amount) {
		this.p_Date = p_Date;
		this.p_Description = p_Description;
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
	public double getP_Amount() {
		return p_Amount;
	}
	public void setP_Amount(double p_Amount) {
		this.p_Amount = p_Amount;
	}

}

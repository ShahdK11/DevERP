package deployment;

public class ApprovePayment {
	private int p_EmployeeID;
	private int p_Date;
	private double p_Amount;
	public ApprovePayment(int p_EmployeeID, int p_Date, double p_Amount) {
		super();
		this.p_EmployeeID = p_EmployeeID;
		this.p_Date = p_Date;
		this.p_Amount = p_Amount;
	}
	public int getP_EmployeeID() {
		return p_EmployeeID;
	}
	public void setP_EmployeeID(int p_EmployeeID) {
		this.p_EmployeeID = p_EmployeeID;
	}
	public int getP_Date() {
		return p_Date;
	}
	public void setP_Date(int p_Date) {
		this.p_Date = p_Date;
	}
	public double getP_Amount() {
		return p_Amount;
	}
	public void setP_Amount(double p_Amount) {
		this.p_Amount = p_Amount;
	}
	

}

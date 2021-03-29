package deployment;

public class SendChartAccounts {
	private String p_Code;
	private String p_Name;
	private int p_OpeningBalance;
	private int p_AddedFunds;
	private int p_Reduction;
	private double p_TransferDebit;
	private double p_TransferCredit;
	private double p_NetBalance;
	private double p_Spending;
	private double p_GrandTotal;
	private int p_DocumantryCredits;
	private int p_Custodies;
	private int p_Paid;
	private double p_RemainingBalance;
	private double p_Percentage;
	public SendChartAccounts() {
		
	}
	public SendChartAccounts(String p_Code, String p_Name, int p_OpeningBalance, int p_AddedFunds, int p_Reduction,
			double p_TransferDebit, double p_TransferCredit, double p_NetBalance, double p_Spending, double p_GrandTotal,
			int p_DocumantryCredits, int p_Custodies, int p_Paid, double p_RemainingBalance, double p_Percentage) {
		this.p_Code = p_Code;
		this.p_Name = p_Name;
		this.p_OpeningBalance = p_OpeningBalance;
		this.p_AddedFunds = p_AddedFunds;
		this.p_Reduction = p_Reduction;
		this.p_TransferDebit = p_TransferDebit;
		this.p_TransferCredit = p_TransferCredit;
		this.p_NetBalance = p_NetBalance;
		this.p_Spending = p_Spending;
		this.p_GrandTotal = p_GrandTotal;
		this.p_DocumantryCredits = p_DocumantryCredits;
		this.p_Custodies = p_Custodies;
		this.p_Paid = p_Paid;
		this.p_RemainingBalance = p_RemainingBalance;
		this.p_Percentage = p_Percentage;
	}
	public String getP_Code() {
		return p_Code;
	}
	public void setP_Code(String p_Code) {
		this.p_Code = p_Code;
	}
	public String getP_Name() {
		return p_Name;
	}
	public void setP_Name(String p_Name) {
		this.p_Name = p_Name;
	}
	public int getP_OpeningBalance() {
		return p_OpeningBalance;
	}
	public void setP_OpeningBalance(int p_OpeningBalance) {
		this.p_OpeningBalance = p_OpeningBalance;
	}
	public int getP_AddedFunds() {
		return p_AddedFunds;
	}
	public void setP_AddedFunds(int p_AddedFunds) {
		this.p_AddedFunds = p_AddedFunds;
	}
	public int getP_Reduction() {
		return p_Reduction;
	}
	public void setP_Reduction(int p_Reduction) {
		this.p_Reduction = p_Reduction;
	}
	public double getP_TransferDebit() {
		return p_TransferDebit;
	}
	public void setP_TransferDebit(double p_TransferDebit) {
		this.p_TransferDebit = p_TransferDebit;
	}
	public double getP_TransferCredit() {
		return p_TransferCredit;
	}
	public void setP_TransferCredit(double p_TransferCredit) {
		this.p_TransferCredit = p_TransferCredit;
	}
	public double getP_NetBalance() {
		return p_NetBalance;
	}
	public void setP_NetBalance(double p_NetBalance) {
		this.p_NetBalance = p_NetBalance;
	}
	public double getP_Spending() {
		return p_Spending;
	}
	public void setP_Spending(double p_Spending) {
		this.p_Spending = p_Spending;
	}
	public double getP_GrandTotal() {
		return p_GrandTotal;
	}
	public void setP_GrandTotal(double p_GrandTotal) {
		this.p_GrandTotal = p_GrandTotal;
	}
	public int getP_DocumantryCredits() {
		return p_DocumantryCredits;
	}
	public void setP_DocumantryCredits(int p_DocumantryCredits) {
		this.p_DocumantryCredits = p_DocumantryCredits;
	}
	public int getP_Custodies() {
		return p_Custodies;
	}
	public void setP_Custodies(int p_Custodies) {
		this.p_Custodies = p_Custodies;
	}
	public int getP_Paid() {
		return p_Paid;
	}
	public void setP_Paid(int p_Paid) {
		this.p_Paid = p_Paid;
	}
	public double getP_RemainingBalance() {
		return p_RemainingBalance;
	}
	public void setP_RemainingBalance(double p_RemainingBalance) {
		this.p_RemainingBalance = p_RemainingBalance;
	}
	public double getP_Percentage() {
		return p_Percentage;
	}
	public void setP_Percentage(double p_Percentage) {
		this.p_Percentage = p_Percentage;
	}

}

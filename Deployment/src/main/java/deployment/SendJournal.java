package deployment;

public class SendJournal {
	private String p_Name;
	private String p_Description;
	private String p_ColumnTitle;
	private String p_ColumnDescription;
	private int p_EntryDate;
	private String p_EntryDescription;
	private double p_EntryAmount;
	public SendJournal(String p_Name, String p_Description, String p_ColumnTitle, String p_ColumnDescription,
			int p_EntryDate, String p_EntryDescription, double p_EntryAmount) {
		this.p_Name = p_Name;
		this.p_Description = p_Description;
		this.p_ColumnTitle = p_ColumnTitle;
		this.p_ColumnDescription = p_ColumnDescription;
		this.p_EntryDate = p_EntryDate;
		this.p_EntryDescription = p_EntryDescription;
		this.p_EntryAmount = p_EntryAmount;
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
	public String getP_ColumnTitle() {
		return p_ColumnTitle;
	}
	public void setP_ColumnTitle(String p_ColumnTitle) {
		this.p_ColumnTitle = p_ColumnTitle;
	}
	public String getP_ColumnDescription() {
		return p_ColumnDescription;
	}
	public void setP_ColumnDescription(String p_ColumnDescription) {
		this.p_ColumnDescription = p_ColumnDescription;
	}
	public int getP_EntryDate() {
		return p_EntryDate;
	}
	public void setP_EntryDate(int p_EntryDate) {
		this.p_EntryDate = p_EntryDate;
	}
	public String getP_EntryDescription() {
		return p_EntryDescription;
	}
	public void setP_EntryDescription(String p_EntryDescription) {
		this.p_EntryDescription = p_EntryDescription;
	}
	public double getP_EntryAmount() {
		return p_EntryAmount;
	}
	public void setP_EntryAmount(double p_EntryAmount) {
		this.p_EntryAmount = p_EntryAmount;
	}

}

package deployment;

public class CreateJournal {
	private String p_Name;
	private String p_Description;
	private String p_ColumnTitle;
	private String p_ColumnDescription;
	private String p_DebitAccountCode;
	private String p_CreditAccountCode;
	public CreateJournal() {
	}
	public CreateJournal(String p_Name, String p_Description, String p_ColumnTitle, String p_ColumnDescription,
			String p_DebitAccountCode, String p_CreditAccountCode) {
		
		this.p_Name = p_Name;
		this.p_Description = p_Description;
		this.p_ColumnTitle = p_ColumnTitle;
		this.p_ColumnDescription = p_ColumnDescription;
		this.p_DebitAccountCode = p_DebitAccountCode;
		this.p_CreditAccountCode = p_CreditAccountCode;
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
	public String getP_DebitAccountCode() {
		return p_DebitAccountCode;
	}
	public void setP_DebitAccountCode(String p_DebitAccountCode) {
		this.p_DebitAccountCode = p_DebitAccountCode;
	}
	public String getP_CreditAccountCode() {
		return p_CreditAccountCode;
	}
	public void setP_CreditAccountCode(String p_CreditAccountCode) {
		this.p_CreditAccountCode = p_CreditAccountCode;
	}

}

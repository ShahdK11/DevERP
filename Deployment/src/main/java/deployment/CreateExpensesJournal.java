package deployment;

public class CreateExpensesJournal {
	String p_Name;
	String p_Description;
	
	public CreateExpensesJournal() {
		
	}

	public CreateExpensesJournal(String p_Name, String p_Description) {
		
		this.p_Name = p_Name;
		this.p_Description = p_Description;
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

package deployment;

public class SendInitiatives {
	private String p_Name;
	private String p_ShortNumber;
	private String p_LongNumber;
	private String p_Description;
	private int p_StartDate;
	private int p_EndDate;
	public SendInitiatives(String p_Name, String p_ShortNumber, String p_LongNumber, String p_Description,
			int p_StartDate, int p_EndDate) {
		super();
		this.p_Name = p_Name;
		this.p_ShortNumber = p_ShortNumber;
		this.p_LongNumber = p_LongNumber;
		this.p_Description = p_Description;
		this.p_StartDate = p_StartDate;
		this.p_EndDate = p_EndDate;
	}
	public String getP_Name() {
		return p_Name;
	}
	public void setP_Name(String p_Name) {
		this.p_Name = p_Name;
	}
	public String getP_ShortNumber() {
		return p_ShortNumber;
	}
	public void setP_ShortNumber(String p_ShortNumber) {
		this.p_ShortNumber = p_ShortNumber;
	}
	public String getP_LongNumber() {
		return p_LongNumber;
	}
	public void setP_LongNumber(String p_LongNumber) {
		this.p_LongNumber = p_LongNumber;
	}
	public String getP_Description() {
		return p_Description;
	}
	public void setP_Description(String p_Description) {
		this.p_Description = p_Description;
	}
	public int getP_StartDate() {
		return p_StartDate;
	}
	public void setP_StartDate(int p_StartDate) {
		this.p_StartDate = p_StartDate;
	}
	public int getP_EndDate() {
		return p_EndDate;
	}
	public void setP_EndDate(int p_EndDate) {
		this.p_EndDate = p_EndDate;
	}

}

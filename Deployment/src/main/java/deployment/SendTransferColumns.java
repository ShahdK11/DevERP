package deployment;

public class SendTransferColumns {
	private String p_Column;
	private String p_Description;
	public SendTransferColumns(String p_Column, String p_Description) {

		this.p_Column = p_Column;
		this.p_Description = p_Description;
	}
	public String getP_Column() {
		return p_Column;
	}
	public void setP_Column(String p_Column) {
		this.p_Column = p_Column;
	}
	public String getP_Description() {
		return p_Description;
	}
	public void setP_Description(String p_Description) {
		this.p_Description = p_Description;
	}


}

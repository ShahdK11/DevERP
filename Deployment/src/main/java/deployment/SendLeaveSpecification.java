package deployment;

public class SendLeaveSpecification {
	private String messageName;
	private String p_Name;
	private String p_MaximumDays;
	private String p_MinimumDays;
	private String p_Size;
	
	public SendLeaveSpecification(String messageName, String p_Name, String p_MaximumDays, String p_MinimumDays,
			String p_Size) {
		this.messageName = messageName;
		this.p_Name = p_Name;
		this.p_MaximumDays = p_MaximumDays;
		this.p_MinimumDays = p_MinimumDays;
		this.p_Size = p_Size;
	}

	public String getMessageName() {
		return messageName;
	}

	public void setMessageName(String messageName) {
		this.messageName = messageName;
	}

	public String getP_Name() {
		return p_Name;
	}

	public void setP_Name(String p_Name) {
		this.p_Name = p_Name;
	}

	public String getP_MaximumDays() {
		return p_MaximumDays;
	}

	public void setP_MaximumDays(String p_MaximumDays) {
		this.p_MaximumDays = p_MaximumDays;
	}

	public String getP_MinimumDays() {
		return p_MinimumDays;
	}

	public void setP_MinimumDays(String p_MinimumDays) {
		this.p_MinimumDays = p_MinimumDays;
	}

	public String getP_Size() {
		return p_Size;
	}

	public void setP_Size(String p_Size) {
		this.p_Size = p_Size;
	}
	
	
}

package deployment;

public class Chapter {
	private String p_Code;
	private int p_Amount;
	public Chapter() {
		
	}
	public Chapter(String p_Code, int p_Amount) {
		this.p_Code = p_Code;
		this.p_Amount = p_Amount;
	}

	public String getP_Code() {
		return p_Code;
	}

	public void setP_Code(String p_Code) {
		this.p_Code = p_Code;
	}
	public int getP_Amount() {
		return p_Amount;
	}
	public void setP_Amount(int p_Amount) {
		this.p_Amount = p_Amount;
	}
	
}

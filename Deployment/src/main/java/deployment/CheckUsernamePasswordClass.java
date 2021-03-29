package deployment;

public class CheckUsernamePasswordClass {
	private String p_Username;
	private String p_Password;
	public CheckUsernamePasswordClass() {
		
	}
	public CheckUsernamePasswordClass(String p_Username, String p_Password) {
		this.p_Username = p_Username;
		this.p_Password = p_Password;
	}
	public String getP_Username() {
		return p_Username;
	}
	public void setP_Username(String p_Username) {
		this.p_Username = p_Username;
	}
	public String getP_Password() {
		return p_Password;
	}
	public void setP_Password(String p_Password) {
		this.p_Password = p_Password;
	}
	

}

package deployment;

public class ProjectReply {
	private String p_msg;
	private boolean p_state;
	public ProjectReply(String p_msg, boolean p_state) {
		this.p_msg = p_msg;
		this.p_state = p_state;
	}
	public String getP_msg() {
		return p_msg;
	}
	public void setP_msg(String p_msg) {
		this.p_msg = p_msg;
	}
	public boolean isP_state() {
		return p_state;
	}
	public void setP_state(boolean p_state) {
		this.p_state = p_state;
	}

}

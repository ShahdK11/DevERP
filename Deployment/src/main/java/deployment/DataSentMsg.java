package deployment;

//Spring requires a POJ class for each message.
public class DataSentMsg {
	private String messageName;
	private String ident;
	private String count;
	public DataSentMsg() {
	}
	public DataSentMsg(  String messageName, String ident, String count ) {
		this.messageName = messageName;
		this.ident = ident;
		this.count = count;
	}
	public void setMessageName( String messageName ) {
		this.messageName = messageName;
	}
	public String getMessageName() {
		return messageName;
	}
	public void setIdent( String ident ) {
		this.ident = ident;
	}
	public String getIdent() {
		return ident;
	}
	public void setCount( String count ) {
		this.count = count;
	}
	public String getCount() {
		return count;
	}
}
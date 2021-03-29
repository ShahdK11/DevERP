package deployment;

import sharedtypes.Payitem;
import sharedtypes.Paytype;

public class SendPayItem {
	private String message;
	private int p_EmployeeID;
	private String p_FirstName;
	private String p_MiddleName;
	private String p_LastName;
	private String p_Name;
	private String p_Date;
	private String p_Type;
	private String p_Amount;
	private String p_Status;
	public SendPayItem(String message, int p_EmployeeID, String p_Name, String p_Date, String p_Type, String p_Amount, String p_Status) {

		this.message = message;
		this.p_EmployeeID = p_EmployeeID;
		this.p_Name = p_Name;
		this.p_Date = p_Date;
		this.p_Type = p_Type;
		this.p_Amount = p_Amount;
		this.p_Status = p_Status;
	}
	public SendPayItem(String message, int p_EmployeeID, String p_FirstName, String p_MiddleName, String p_LastName, String p_Name,
			String p_Date, String p_Type, String p_Amount, String p_Status) {
		this.message = message;
		this.p_EmployeeID = p_EmployeeID;
		this.p_FirstName = p_FirstName;
		this.p_MiddleName = p_MiddleName;
		this.p_LastName = p_LastName;
		this.p_Name = p_Name;
		this.p_Date = p_Date;
		this.p_Type = p_Type;
		this.p_Amount = p_Amount;
		this.p_Status = p_Status;
	}
	public int getP_EmployeeID() {
		return p_EmployeeID;
	}
	public void setP_EmployeeID(int p_EmployeeID) {
		this.p_EmployeeID = p_EmployeeID;
	}
	public String getP_FirstName() {
		return p_FirstName;
	}
	public void setP_FirstName(String p_FirstName) {
		this.p_FirstName = p_FirstName;
	}
	public String getP_MiddleName() {
		return p_MiddleName;
	}
	public void setP_MiddleName(String p_MiddleName) {
		this.p_MiddleName = p_MiddleName;
	}
	public String getP_LastName() {
		return p_LastName;
	}
	public void setP_LastName(String p_LastName) {
		this.p_LastName = p_LastName;
	}
	public String getMessage() {
		return message;
	}
	public void setMessage(String message) {
		this.message = message;
	}
	public String getP_Name() {
		return p_Name;
	}
	public void setP_Name(String p_Name) {
		this.p_Name = p_Name;
	}
	public String getP_Date() {
		return p_Date;
	}
	public void setP_Date(String p_Date) {
		this.p_Date = p_Date;
	}
	public String getP_Type() {
		return p_Type;
	}
	public void setP_Type(String p_Type) {
		this.p_Type = p_Type;
	}
	public String getP_Amount() {
		return p_Amount;
	}
	public void setP_Amount(String p_Amount) {
		this.p_Amount = p_Amount;
	}
	public String getP_Status() {
		return p_Status;
	}
	public void setP_Status(String p_Status) {
		this.p_Status = p_Status;
	}


}

package deployment;

public class SendEmployee {
	private String messageName;
	private int p_EmployeeID;
	private int p_NationalID;
	private String p_FirstName;
	private String p_MiddleName;
	private String p_LastName;
	private String p_Email;
	private String p_OfficePhone;
	private int p_DateOfBirth;
	private String p_Degree;
	private String p_Gender;
	private int p_StartDate;
	private int p_LeaveBalance;
	private int p_SickLeaveBalance;
	private double p_Salary;
	
	public SendEmployee(String messageName, int p_EmployeeID, int p_NationalID, String p_FirstName,
			String p_MiddleName, String p_LastName, String p_Email, String p_OfficePhone, int p_DateOfBirth,
			String p_Degree, String p_Gender, int p_StartDate, int p_LeaveBalance, int p_SickLeaveBalance,
			double p_Salary) {
		this.messageName = messageName;
		this.p_EmployeeID = p_EmployeeID;
		this.p_NationalID = p_NationalID;
		this.p_FirstName = p_FirstName;
		this.p_MiddleName = p_MiddleName;
		this.p_LastName = p_LastName;
		this.p_Email = p_Email;
		this.p_OfficePhone = p_OfficePhone;
		this.p_DateOfBirth = p_DateOfBirth;
		this.p_Degree = p_Degree;
		this.p_Gender = p_Gender;
		this.p_StartDate = p_StartDate;
		this.p_LeaveBalance = p_LeaveBalance;
		this.p_SickLeaveBalance = p_SickLeaveBalance;
		this.p_Salary = p_Salary;
	}

	public String getMessageName() {
		return messageName;
	}

	public void setMessageName(String messageName) {
		this.messageName = messageName;
	}

	public int getP_EmployeeID() {
		return p_EmployeeID;
	}

	public void setP_EmployeeID(int p_EmployeeID) {
		this.p_EmployeeID = p_EmployeeID;
	}

	public int getP_NationalID() {
		return p_NationalID;
	}

	public void setP_NationalID(int p_NationalID) {
		this.p_NationalID = p_NationalID;
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

	public String getP_Email() {
		return p_Email;
	}

	public void setP_Email(String p_Email) {
		this.p_Email = p_Email;
	}

	public String getP_OfficePhone() {
		return p_OfficePhone;
	}

	public void setP_OfficePhone(String p_OfficePhone) {
		this.p_OfficePhone = p_OfficePhone;
	}

	public int getP_DateOfBirth() {
		return p_DateOfBirth;
	}

	public void setP_DateOfBirth(int p_DateOfBirth) {
		this.p_DateOfBirth = p_DateOfBirth;
	}

	public String getP_Degree() {
		return p_Degree;
	}

	public void setP_Degree(String p_Degree) {
		this.p_Degree = p_Degree;
	}

	public String getP_Gender() {
		return p_Gender;
	}

	public void setP_Gender(String p_Gender) {
		this.p_Gender = p_Gender;
	}

	public int getP_StartDate() {
		return p_StartDate;
	}

	public void setP_StartDate(int p_StartDate) {
		this.p_StartDate = p_StartDate;
	}

	public int getP_LeaveBalance() {
		return p_LeaveBalance;
	}

	public void setP_LeaveBalance(int p_LeaveBalance) {
		this.p_LeaveBalance = p_LeaveBalance;
	}

	public int getP_SickLeaveBalance() {
		return p_SickLeaveBalance;
	}

	public void setP_SickLeaveBalance(int p_SickLeaveBalance) {
		this.p_SickLeaveBalance = p_SickLeaveBalance;
	}

	public double getP_Salary() {
		return p_Salary;
	}

	public void setP_Salary(double p_Salary) {
		this.p_Salary = p_Salary;
	}
	
	
}

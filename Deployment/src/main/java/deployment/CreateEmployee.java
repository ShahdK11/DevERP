package deployment;

public class CreateEmployee {
	
	private int p_EmployeeID;
	private int p_NationalID;
	private String p_FirstName;
	private String p_MiddleName;
	private String p_LastName;
	private int p_DateOfBirth;
	private String p_Degree;
	private String p_Gender;
	private String p_Username;
	private String p_OfficeNumber;
	public CreateEmployee() {
		
	}
	public CreateEmployee(int p_EmployeeID, int p_NationalID, String p_FirstName, String p_MiddleName,
			String p_LastName, int p_DateOfBirth, String p_Degree, String p_Gender, String p_Username) {
		
		this.p_EmployeeID = p_EmployeeID;
		this.p_NationalID = p_NationalID;
		this.p_FirstName = p_FirstName;
		this.p_MiddleName = p_MiddleName;
		this.p_LastName = p_LastName;
		this.p_DateOfBirth = p_DateOfBirth;
		this.p_Degree = p_Degree;
		this.p_Gender = p_Gender;
		this.p_Username = p_Username;
	}
	public CreateEmployee(int p_EmployeeID, int p_NationalID, String p_FirstName, String p_MiddleName,
			String p_LastName, String p_OfficeNumber,  int p_DateOfBirth, String p_Degree, String p_Gender) {
		
		this.p_EmployeeID = p_EmployeeID;
		this.p_NationalID = p_NationalID;
		this.p_FirstName = p_FirstName;
		this.p_MiddleName = p_MiddleName;
		this.p_LastName = p_LastName;
		this.p_OfficeNumber = p_OfficeNumber;
		this.p_DateOfBirth = p_DateOfBirth;
		this.p_Degree = p_Degree;
		this.p_Gender = p_Gender;
	}
	
	public String getP_OfficeNumber() {
		return p_OfficeNumber;
	}
	public void setP_OfficeNumber(String p_OfficeNumber) {
		this.p_OfficeNumber = p_OfficeNumber;
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
	public String getP_Username(){
		return p_Username;
	}
	public void setP_Username(String p_Username){
		this.p_Username = p_Username;
	}

}

package hrsystem;


import hrsystem.fms.FmsUI;
import hrsystem.hr.HrUI;
import hrsystem.ui.UIApp;
import hrsystem.ui.UIAuthenticate;
import hrsystem.ui.UIAppOps;
import hrsystem.ui.UIFinance;
import hrsystem.ui.UIProjects;

import io.ciera.runtime.summit.application.IApplication;
import io.ciera.runtime.summit.application.IRunContext;
import io.ciera.runtime.summit.classes.IModelInstance;
import io.ciera.runtime.summit.components.Component;
import io.ciera.runtime.summit.exceptions.BadArgumentException;
import io.ciera.runtime.summit.exceptions.EmptyInstanceException;
import io.ciera.runtime.summit.exceptions.XtumlException;

import io.ciera.runtime.summit.application.tasks.GenericExecutionTask;
import io.ciera.runtime.summit.application.tasks.HaltExecutionTask;
import io.ciera.runtime.summit.classes.IModelInstance;
import io.ciera.runtime.summit.interfaces.IMessage;
import io.ciera.runtime.summit.interfaces.Message;
import io.ciera.runtime.summit.util.LOG;
import io.ciera.runtime.summit.util.impl.LOGImpl;


import java.io.IOException;
import java.util.Map;
import java.util.Properties;
import java.util.TreeMap;

import deployment.HRGuiController;

import java.io.BufferedReader;
import java.io.DataOutputStream;
import java.io.InputStreamReader;
import java.net.Socket;
import java.net.SocketTimeoutException;
import java.net.UnknownHostException;

import interfaces.IFinance;
import interfaces.IProjects;

import shared.IOps;
import sharedtypes.Payitem;
import sharedtypes.Paytype;
import sharedtypes.Transaction;
import interfaces.IData;
import interfaces.IAuthentication;
import interfaces.IFinance;
import interfaces.IProjects;


public class UI extends Component<UI> {
	
	private Map<String, Class<?>> classDirectory;
	private static UI singleton;


    public UI(IApplication app, IRunContext runContext, int populationId) {
        super(app, runContext, populationId);
        classDirectory = new TreeMap<>();
        singleton = this;

        LOG = null;

    }
    public static UI Singleton() {
    	return singleton;
    }
    
    

    // domain functions
    public void InitializeComplete() throws XtumlException {
        
    	try {
     	   HRGuiController.Singleton().InitializeComplete();
        }catch(Exception e) {
     	   
        }
        
    }
    public void Reply( final String p_msg,  final boolean p_state ) throws XtumlException {
    
    	try {
     	   HRGuiController.Singleton().Reply(p_msg, p_state);
        }catch(Exception e) {
     	   
        }
        
    }

    public void ReplyNewEmployee( final String p_Username,  final String p_Password ) throws XtumlException {
    
    	try {
      	   HRGuiController.Singleton().ReplyNewEmployee(p_Username, p_Password);
         }catch(Exception e) {
      	   
         }
         
     }

     public void SendBonusList( final String p_Name,  final double p_Percent ) throws XtumlException {
    
    	 try {
        	   HRGuiController.Singleton().SendBonusList(p_Name, p_Percent);
           }catch(Exception e) {
        	   
           }  
         
     }

     public void SendDepartmentList( final String p_Name,  final String p_Mission,  final String p_Description,  final String p_Manager,  final String p_ManagingDepartment ) throws XtumlException {
    
    	 try {
      	   HRGuiController.Singleton().SendDepartmentList(p_Name, p_Mission, p_Description, p_Manager, p_ManagingDepartment);
         }catch(Exception e) {
      	   
         }  
         
     }
     
     public void SendEmployee( final int p_EmployeeID,  final int p_NationalID,  final String p_FirstName,  final String p_MiddleName,  final String p_LastName,  final String p_Email,  final String p_OfficePhone,  final int p_DateOfBirth,  final String p_Degree,  final String p_Gender,  final int p_StartDate,  final int p_LeaveBalance,  final int p_SickLeaveBalance,  final double p_Salary ) throws XtumlException {

    	 try {
      	   HRGuiController.Singleton().SendEmployee(p_EmployeeID, p_NationalID, p_FirstName, p_MiddleName, p_LastName, p_Email, p_OfficePhone, p_DateOfBirth, p_Degree, p_Gender, p_StartDate, p_LeaveBalance, p_SickLeaveBalance, p_Salary);
         }catch(Exception e) {
      	   
         }  
         
     }

     public void  SendEmployeeBonuses( final String p_BonusName,  final int p_Starting,  final int p_Ending,  final double p_Percent,  final double p_Amount ) throws XtumlException {
    
    	 try {
      	   HRGuiController.Singleton().SendEmployeeBonuses(p_BonusName, p_Starting, p_Ending, p_Percent, p_Amount);
         }catch(Exception e) {
      	   
         }  
         
     }
     
     public void  SendEmployeeMessages( final int p_LeaveRequesterID,  final int p_Starting,  final int p_Ending,  final String p_Content ) throws XtumlException {
    	 
    	 try {
        	   HRGuiController.Singleton().SendEmployeeMessages(p_LeaveRequesterID, p_Starting, p_Ending, p_Content);
           }catch(Exception e) {
        	   
           }  
         
     }

     public void  SendGrades( final String p_Name,  final double p_BaseSalary,  final double p_Allowance,  final int p_NumberOfSteps,  final String p_Above,  final String p_Below ) throws XtumlException {
    
    	 try {
      	   HRGuiController.Singleton().SendGrades(p_Name, p_BaseSalary, p_Allowance, p_NumberOfSteps, p_Above, p_Below);
         }catch(Exception e) {
      	   
         }  
     }
     
     public void  SendJobList( final int p_JobID,  final String p_Title,  final double p_Salary,  final String p_EmployeeName,  final int p_EmployeeID ) throws XtumlException {
    	    
    	 try {
        	   HRGuiController.Singleton().SendJobList(p_JobID, p_Title, p_Salary, p_EmployeeName, p_EmployeeID);
           }catch(Exception e) {
        	   
           }  
     }
     
     public void SendLeaveSpecification( final String p_Name,  final int p_MaximumDays,  final int p_MinimumDays,  final int p_Size ) throws XtumlException {
    	    
     	try {
         	   HRGuiController.Singleton().SendLeaveSpecification(p_Name, p_MaximumDays, p_MinimumDays, p_Size);
            }catch(Exception e) {
         	   
            }  
          
      }
     
      public void  SendPayItem( final int p_EmployeeID, final String p_Name,  final int p_Date,  final Paytype p_Type,  final double p_Amount,  final Payitem p_Status )throws XtumlException {
 	    
        try {
              HRGuiController.Singleton().SendPayItem(p_EmployeeID, p_Name, p_Date, p_Type, p_Amount, p_Status);
          }catch(Exception e) {
              
          }  
            
    }
     
      public void  SendSalaryStructure( final double p_EmployeeSalary,  final String p_BonusName,  final double p_BonusAmount )throws XtumlException {
 	    
    	 try {
        	   HRGuiController.Singleton().SendSalaryStructure(p_EmployeeSalary, p_BonusName, p_BonusAmount);
           }catch(Exception e) {
        	   
           }  
             
     }
public void SendFinanceMessage( final int p_Sender,  final String p_Content,  final Transaction p_Type,  final double p_Amount,  final int p_Date,  final String p_Account,  final String p_Description ) throws XtumlException {
 	    
        try {
              HRGuiController.Singleton().SendFinanceMessage( p_Sender, p_Content, p_Type, p_Amount, p_Date, p_Account, p_Description );
          }catch(Exception e) {
              
          }  
            
    }
     public void  SendScales( final String p_Name,  final String p_Description ) throws XtumlException {
    	 
    	 try {
      	   HRGuiController.Singleton().SendScales(p_Name, p_Description);
         }catch(Exception e) {
      	   
         }  
         
     }

    public void ReplyUsernamePassword( final int p_EmployeeID,  final String p_Username,  final String p_msg,  final boolean p_state ) throws XtumlException {
    	
    	try {
       	   HRGuiController.Singleton().ReplyUsernamePassword(p_EmployeeID, p_Username, p_msg, p_state);
          }catch(Exception e) {
       	   
          }  
             
     }

     public void  SendEmployeePermissions( final String p_GroupName,  final String p_Description )throws XtumlException {
    
    	 try {
        	   HRGuiController.Singleton().SendEmployeePermissions(p_GroupName, p_Description);
           }catch(Exception e) {
        	   
           }  
     }
     
     
     public void  Return_Employee_Payment( final double p_Amount,  final String p_Name,  final int p_Date )throws XtumlException {
    
    	 try {
      	   HRGuiController.Singleton().Return_Employee_Payment(p_Amount, p_Name, p_Date);
         }catch(Exception e) {
      	   
         }  
         
     }
     
     public void  ReplyFinance( final String p_msg,  final boolean p_state )throws XtumlException {
    
    	 try {
      	   HRGuiController.Singleton().ReplyFinance(p_msg, p_state);
         }catch(Exception e) {
      	   
         }  
         
     }

     public void  SendPorgrams( final String p_Code,  final String p_Name,  final String p_Description,  final int p_StartDate,  final int p_Duration,  final String p_AccountCode,  final String p_AccountName,  final int p_DedicatedFunds,  final double p_TransferDebit,  final double p_TransferCredit,  final double p_FundsAfterTransfers,  final double p_PastYearsSpending,  final int p_CurrentYearBudget,  final double p_Commitments, final int p_RemainingFunds,  final double p_Percentage )throws XtumlException {
    	    
        try {
              HRGuiController.Singleton().SendPrograms( p_Code, p_Name, p_Description, p_StartDate, p_Duration, p_AccountCode, p_AccountName, p_DedicatedFunds, p_TransferDebit, p_TransferCredit, p_FundsAfterTransfers, p_PastYearsSpending, p_RemainingFunds, p_CurrentYearBudget, p_Commitments, p_Percentage );
          }catch(Exception e) {
              
          }  
        
    }

    public void  SendAccountFunds( final String p_Code,  final String p_Name,  final boolean p_New,  final int p_Ceiling,  final int p_Requested,  final int p_CeilingRevenue,  final int p_RequestedRevenue )throws XtumlException {
    	    
        try {
              HRGuiController.Singleton().SendAccountFunds( p_Code, p_Name, p_New, p_Ceiling, p_Requested, p_CeilingRevenue, p_RequestedRevenue);
          }catch(Exception e) {
              
          }  
        
    }

    public void  SendSections( final String p_Code,  final String p_Name,  final int p_RequestedFund,  final int p_RequestedRevenue )throws XtumlException {
   	    
        try {
              HRGuiController.Singleton().SendSections(p_Code, p_Name, p_RequestedFund, p_RequestedRevenue);
          }catch(Exception e) {
              
          }  
    }
     
     public void  SendBudgets( final String p_Year,  final int p_Ceiling,  final int p_Requested, final int p_CeilingRevenue,  final int p_RequestedRevenue )throws XtumlException {
    	    
    	 try {
        	   HRGuiController.Singleton().SendBudgets(p_Year, p_Ceiling, p_Requested, p_CeilingRevenue, p_RequestedRevenue);
           }catch(Exception e) {
        	   
           }  
         
     }

     public void  SendAccount( final String p_Code,  final String p_Name,  final int p_Fund,  final int p_Revenue )throws XtumlException {
   	    
        try {
              HRGuiController.Singleton().SendAccount( p_Code, p_Name, p_Fund, p_Revenue );
          }catch(Exception e) {
              
          }  
    }

    public void  SendTAccounts(  final String p_Code,  final double p_Amount,  final int p_Date,  final String p_Description,  final String p_Type )throws XtumlException {
   	    
        try {
              HRGuiController.Singleton().SendTAccount( p_Code,  p_Amount,  p_Date,  p_Description, p_Type );
          }catch(Exception e) {
              
          }  
    }

    public void  SendChartAccounts( final String p_Code,  final String p_Name,  final int p_OpeningBalance,  final int p_AddedFunds,  final int p_Reduction,  final double p_TransferDebit,  final double p_TransferCredit,  final double p_NetBalance,  final double p_Spending,  final double p_GrandTotal,  final int p_DocumantryCredits,  final int p_Custodies,  final int p_Paid,  final double p_RemainingBalance,  final double p_Percentage )throws XtumlException {
   	    
        try {
              HRGuiController.Singleton().SendChartAccounts( p_Code, p_Name, p_OpeningBalance,  p_AddedFunds,  p_Reduction,  p_TransferDebit, p_TransferCredit, p_NetBalance, p_Spending, p_GrandTotal, p_DocumantryCredits, p_Custodies, p_Paid, p_RemainingBalance, p_Percentage);
          }catch(Exception e) {
              
          }  
    }

    public void  SendTransferColumns( final String p_Column,  final String p_Description )throws XtumlException {
   	    
        try {
              HRGuiController.Singleton().SendTransferColumns( p_Column,  p_Description);
          }catch(Exception e) {
              
          }  
    }

    public void  SendJournals( final String p_Name,  final String p_Description,  final String p_ColumnTitle,  final String p_ColumnDescription,  final int p_EntryDate,  final String p_EntryDescription,  final double p_EntryAmount )throws XtumlException {
   	    
        try {
              HRGuiController.Singleton().SendJournal( p_Name, p_Description, p_ColumnTitle, p_ColumnDescription, p_EntryDate, p_EntryDescription, p_EntryAmount );
          }catch(Exception e) {
              
          }  
    }
     
     /*public void  SendChapters( final String p_Code,  final String p_Name,  final int p_Ceiling,  final int p_Requested )throws XtumlException {
    	    
    	 try {
      	   HRGuiController.Singleton().SendChapters(p_Code, p_Name, p_Ceiling, p_Requested);
         }catch(Exception e) {
      	   
         }  
         
     }*/ 
     
     
     
     public void  Project( final String p_msg,  final boolean p_state)throws XtumlException {
 	    
    	 try {
        	   HRGuiController.Singleton().Project(p_msg, p_state);
           }catch(Exception e) {
        	   
           }  
         
     }

     public void  SendInitiatives( final String p_Name,  final String p_ShortNumber,  final String p_LongNumber,  final String p_Description,  final int p_StartDate,  final int p_EndDate )throws XtumlException {
 	    
        try {
              HRGuiController.Singleton().SendInitiatives(p_Name, p_ShortNumber, p_LongNumber, p_Description, p_StartDate, p_EndDate);
          }catch(Exception e) {
              
          }  
        
    }

     public void  SendMilestones( final String p_Name,  final String p_FullCode,  final String p_Code,  final String p_Type,  final String p_SuccessCriteria,  final int p_CompletePlanned,  final int p_CompleteActual,  final boolean p_Complete,  final int p_Weight,  final int p_Percentage,  final String p_sdState,  final String p_sdDescription,  final String p_Notes,  final String p_IncompleteReasons  )throws XtumlException {
    	    
    	 try {
        	   HRGuiController.Singleton().SendMilestones(p_Name, p_FullCode, p_Code, p_Type, p_SuccessCriteria, p_CompletePlanned, p_CompleteActual, p_Complete, p_Weight, p_Percentage, p_sdState, p_sdDescription, p_Notes, p_IncompleteReasons);
           }catch(Exception e) {
        	   
           }  
         
     }

     public void  SendProjects( final String p_Code,  final String p_Name,  final String p_Description,  final int p_StartDate,  final int p_EndDate,  final int p_Budget )throws XtumlException {
    	    
        try {
              HRGuiController.Singleton().SendProjects(p_Code, p_Name, p_Description, p_StartDate, p_EndDate, p_Budget);
          }catch(Exception e) {
              
          }  
        
    }


   public void SendChangeRequest( final int p_CreationDate,  final String p_Description,  final String p_Justification) throws XtumlException {
         try {
            HRGuiController.Singleton().SendChangeRequest( p_CreationDate,p_Description, p_Justification);
         }catch(Exception e) {
      	   
         } 
         } 
           public void SendChangeRequestImpact(  final String p_Category,  final String p_Details,  final int p_ChangeRequestCreationDate) throws XtumlException {
         try {
            HRGuiController.Singleton().SendChangeRequestImpact( p_Category, p_Details, p_ChangeRequestCreationDate );
         }catch(Exception e) {
      	   
         } 
         } 
        public void AssignManger( final String p_AccountName,  final String p_ProjectCode ) throws XtumlException {
            

    	 try {
             HRGuiController.Singleton().AssignManger( p_AccountName, p_ProjectCode );
         }catch(Exception e) {
      	   
         }  
        }

     public void  SendStrategies( final String p_Number,  final String p_Name,  final String p_Description  ) throws XtumlException {
    
    	 try {
      	   HRGuiController.Singleton().SendStrategies(p_Number, p_Name, p_Description);
         }catch(Exception e) {
      	   
         }  
         
     }
     


    // relates and unrelates


    // instance selections


    // relationship selections


    // ports
    private UIApp UIApp;
   public UIApp App() {
        if ( null == UIApp ) UIApp = new UIApp( this, null );
        return UIApp;
    }

    private UIAppOps UIAppOps;
    public UIAppOps AppOps() {
        if ( null == UIAppOps ) UIAppOps = new UIAppOps( this, null );
        return UIAppOps;
    }
    
    private UIAuthenticate UIAuthenticate;
    public UIAuthenticate Authenticate() {
        if ( null == UIAuthenticate ) UIAuthenticate = new UIAuthenticate( this, null );
        return UIAuthenticate;
    }

    private UIFinance UIFinance;
    public UIFinance Finance() {
        if ( null == UIFinance ) UIFinance = new UIFinance( this, null );
        return UIFinance;
    }
    private UIProjects UIProjects;
    public UIProjects Projects() {
        if ( null == UIProjects ) UIProjects = new UIProjects( this, null );
        return UIProjects;
    }


    // utilities
    private LOG LOG;
    public LOG LOG() {
    	if ( null == LOG ) LOG = new LOGImpl<>(this);
    	return LOG;
    }

    // component initialization function
    @Override
    public void initialize() throws XtumlException {

    }

    @Override
    public String getVersion() {
        Properties prop = new Properties();
        try {
            prop.load(getClass().getResourceAsStream("UIProperties.properties"));
        } catch (IOException e) { /* do nothing */ }
        return prop.getProperty("version", "Unknown");
    }
    @Override
    public String getVersionDate() {
        Properties prop = new Properties();
        try {
            prop.load(getClass().getResourceAsStream("UIProperties.properties"));
        } catch (IOException e) { /* do nothing */ }
        return prop.getProperty("version_date", "Unknown");
    }

    @Override
    public boolean addInstance( IModelInstance<?,?> instance ) throws XtumlException {
        if ( null == instance ) throw new BadArgumentException( "Null instance passed." );
        if ( instance.isEmpty() ) throw new EmptyInstanceException( "Cannot add empty instance to population." );

        return false;
    }

    @Override
    public boolean removeInstance( IModelInstance<?,?> instance ) throws XtumlException {
        if ( null == instance ) throw new BadArgumentException( "Null instance passed." );
        if ( instance.isEmpty() ) throw new EmptyInstanceException( "Cannot remove empty instance from population." );

        return false;
    }

    @Override
    public UI context() {
        return this;
    }
    
    @Override
    public Class<?> getClassByKeyLetters(String keyLetters) {
        return classDirectory.get(keyLetters);
    }
 

}

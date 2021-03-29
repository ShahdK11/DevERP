 //plain javscript ==================================
     //grab the things we need
     const signupForm = document.getElementById('signup');
     const employeeIDInput =signupForm.querySelector('input[name=employeeID]');
     const nationalIDInput =signupForm.querySelector('input[name=nationalID]');
     const firstNameInput  = signupForm.querySelector('input[name=firstName]');
     const middleNameInput  = signupForm.querySelector('input[name=middleName]');
     const lastNameInput = signupForm.querySelector('input[name=lastName]');
     const dateOfBirthInput = signupForm.querySelector('input[name=dateOfBirth]');
     const degreeInput = signupForm.querySelector('input[name=degree]');
     const genderInput = signupForm.querySelector('input[name=gender]');

    //listen for the submit event
     signupForm.addEventListener('submit', processSignupForm);
     function processSignupForm(e) {
     e.preventDefault();

     const employeeID = employeeIDInput.value;
     const nationalID = nationalIDInput.value;
     const firstName = firstNameInput.value;
     const middleName = middleNameInput.value;
     const lastName = lastNameInput.value;
     const dateOfBirth = dateOfBirthInput.value;
     const degree = degreeInput.value;
     const gender = genderInput.value;

     console.log({ employeeID, nationalID, firstName, middleName, lastName, dateOfBirth, degree, gender});
     
    }

   

    // vue ==========================================
    var form = new Vue({
      el: '#signup',
      data: {
    	  employeeID: '',
    	  nationalID: '',
    	  firstName: '',
    	  middleName: '',
    	  lastName: '',
    	  dateOfBirth: '',
    	  degree: '',
    	  options: ['البكالوريوس','الماجستير','الدكتوراه'],
    	  gender: '',
    	  selects: ['ذكر','أنثى'],
    	  email: '',
        errors: {
          name: false,
          email: false
        }
      },
      methods: {
        processForm: function() {
          console.log({ employeeID: this.employeeID, nationalID: this.nationalID , firstName: this.firstName , middleName: this.middleName , lastName: this.lastName , dateOfBirth: this.dateOfBirth , degree: this.degree , gender: this.gender, email: this.email});
          
        },
      submitProduct: function () {
    	  axios.post('/rest/createEmployee', {
    		  p_EmployeeID: parseInt(this.employeeID),
    		  p_NationalID: parseInt(this.nationalID),
    		  p_FirstName: this.firstName,
    		  p_MiddleName: this.middleName,
    		  p_LastName: this.lastName,
    		  p_DateOfBirth: parseInt(this.dateOfBirth),
    		  p_Degree: this.degree,
    		  p_Gender: this.gender,
    		  p_Username: this.email,
            }).then(response => {
                window.location.href = '/hrs/home.html';
            })
        }
       
      }
    });

    

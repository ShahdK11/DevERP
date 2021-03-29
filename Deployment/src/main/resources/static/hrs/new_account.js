//plain javscript ==================================
     //grab the things we need
     const signupForm = document.getElementById('signup-form');
     const fnameInput  = signupForm.querySelector('input[name=fname]');
     const lnameInput  = signupForm.querySelector('input[name=lname]');
     const employeeIDInput  = signupForm.querySelector('input[name=employeeID]');
    //listen for the submit event
     signupForm.addEventListener('submit', processSignupForm);
     function processSignupForm(e) {
     e.preventDefault();


     const fname =  fnameInput.value;
     const lname =  lnameInput.value;
     const employeeID =  employeeIDInput.value;

     console.log({ fname, lname, employeeID});
    }

   

    // vue ==========================================
    var app = new Vue({
      el: '#signup-form',
      data: {
    	  fname: '',
    	  lname: '',
    	  employeeID: '',
        errors: {
          name: false,
          email: false
        }
      },
      methods: {
        processForm: function() {
          console.log({ fname: this.fname, lname: this.lname, employeeID: this.employeeID});
          
        },
      submitProduct: function () {
    	  axios.post('/rest/createNewAccount', {
    		  p_First_Name: this.fname,
    		  p_Last_Name: this.lname,
    		  p_EmployeeID: this.employeeID
            }).then(response => {
                window.location.href = '/hrs/home.html';
            })
        }
      }
    });
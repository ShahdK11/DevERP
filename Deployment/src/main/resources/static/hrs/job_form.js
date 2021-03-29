//plain javscript ==================================
     //grab the things we need
     const signupForm = document.getElementById('signup-form');
     const stepInput  = signupForm.querySelector('input[name=step]');
     const gradeInput  = signupForm.querySelector('input[name=grade]');
     const amountInput  = signupForm.querySelector('input[name=amount]');
     const nameInput  = signupForm.querySelector('input[name=name]');

    //listen for the submit event
     signupForm.addEventListener('submit', processSignupForm);
     function processSignupForm(e) {
     e.preventDefault();

     const step = stepInput.value;
     const grade =  gradeInput.value;
     const amount =  amountInput.value;
     const name =  nameInput.value;

     console.log({ step, grade, amount, name });
    }

   

    // vue ==========================================
    var app = new Vue({
      el: '#signup-form',
      data: {
    	step: '',
    	grade: '',
    	amount: '',
        name: '',
        errors: {
          name: false,
          email: false
        }
      },
      methods: {
        processForm: function() {
          console.log({ step: this.step, grade: this.grade, amount: this.amount, name: this.name});
          
        },
      submitProduct: function () {
    	  axios.post('/rest/createJob', {
    		    step: this.step,
    		    grade: this.grade,
    		    amount: this.amount,
            	name: this.name
            }).then(response => {
                window.location.href = '/hrs/home.html';
            })
        }
      }
    });
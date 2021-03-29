const signupForm = document.getElementById('signup-form');
     const nameInput  = signupForm.querySelector('input[name=name]');
     const maximumDaysInput  = signupForm.querySelector('input[name=maximumDays]');
     const minimumDaysInput  = signupForm.querySelector('input[name=minimumDays]');

    //listen for the submit event
     signupForm.addEventListener('submit', processSignupForm);
     function processSignupForm(e) {
     e.preventDefault();

     const name =  nameInput.value;
     const maximumDays =  maximumDaysInput.value;
     const minimumDays =  minimumDaysInput.value;
     
     console.log({ name, maximumDays, minimumDays});
    }

   

    // vue ==========================================
    var app = new Vue({
      el: '#signup-form',
      data: {
    	name: '',
    	maximumDays: '',
    	minimumDays: '',
        errors: {
          name: false,
          email: false
        }
      },
      methods: {
        processForm: function() {
          console.log({ name: this.name, maximumDays: this.maximumDays, minimumDays: this.minimumDays });
        },
      submitProduct: function () {
    	  axios.post('/rest/CreateLeaveSpecification', {
    		    p_Name: this.name,
    		    p_MaximumDays: this.maximumDays,
    		    p_MinimumDays: this.minimumDays
            }).then(response => {
                window.location.href = '/hrs/home.html';
            })
        }
      }
    });
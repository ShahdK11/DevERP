//plain javscript ==================================
     //grab the things we need
     const signupForm = document.getElementById('signup-form');
     const valueInput  = signupForm.querySelector('input[name=value]');

    //listen for the submit event
     signupForm.addEventListener('submit', processSignupForm);
     function processSignupForm(e) {
     e.preventDefault();

     const value =  valueInput.value;

     console.log({ value});
    }

   

    // vue ==========================================
    var app = new Vue({
      el: '#signup-form',
      data: {
    	value: '',
        errors: {
          name: false,
          email: false
        }
      },
      methods: {
        processForm: function() {
          console.log({ value: this.value});
        },
      submitProduct: function () {
    	  axios.post('/rest/saveStep', {
    		    value: this.value
            }).then(response => {
                window.location.href = '/hrs/home.html';
            })
        }
      }
    });
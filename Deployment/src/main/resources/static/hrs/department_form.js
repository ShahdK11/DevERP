const signupForm = document.getElementById('signup-form');
     const nameInput  = signupForm.querySelector('input[name=name]');

    //listen for the submit event
     signupForm.addEventListener('submit', processSignupForm);
     function processSignupForm(e) {
     e.preventDefault();

     const name =  nameInput.value;
     
     console.log({ name});
    }

   

    // vue ==========================================
    var app = new Vue({
      el: '#signup-form',
      data: {
    	name: '',
        errors: {
          name: false,
          email: false
        }
      },
      methods: {
        processForm: function() {
          console.log({ name: this.name });
        },
      submitProduct: function () {
    	  axios.post('...', {
    		    name: this.name
            }).then(response => {
                window.location.href = 'hrs';
            })
        }
      }
    });
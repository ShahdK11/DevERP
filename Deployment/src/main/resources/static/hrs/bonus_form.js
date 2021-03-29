 //plain javscript ==================================
     //grab the things we need
     const signupForm = document.getElementById('signup-form');
     const nameInput  = signupForm.querySelector('input[name=name]');
     const amountInput = signupForm.querySelector('input[name=amount]');

    //listen for the submit event
     signupForm.addEventListener('submit', processSignupForm);
     function processSignupForm(e) {
     e.preventDefault();

     const name = nameInput.value;
     const amount = amountInput.value;

     console.log({ name, amount });
    }

   

    // vue ==========================================
    var app = new Vue({
      el: '#signup-form',
      data: {
    	name: '',
    	amount: '',
        errors: {
          name: false,
          email: false
        }
      },
      methods: {
        processForm: function() {
          console.log({ name: this.name, amount: this.amount});
        },
      submitProduct: function () {
    	  axios.post('/rest/createBonus', {
    		  p_Name: this.name,
    		  p_Percent: parseFloat(this.amount)
            }).then(response => {
                window.location.href = '/hrs/home.html';
            })
        }
      }
    });
	 //plain javscript ==================================
     //grab the things we need
     const signupForm = document.getElementById('commence');
     const nidInput = signupForm.querySelector('input[name=nid]');

    //listen for the submit event
     signupForm.addEventListener('submit', processSignupForm);
     function processSignupForm(e) {
     e.preventDefault();

     const nid = nidInput.value;

     console.log({ nid});
     
    }

   

    // vue ==========================================
    var form = new Vue({
      el: '#commence',
      data: {
        nid: '',
        errors: {
          name: false,
          email: false
        }
      },
      methods: {
        processForm: function() {
          console.log({ nid: this.nid});
          
        },
      submitProduct: function () {
    	  axios.post('/rest/commenceEmployee', {
            	p_National_ID: parseInt(this.nid)
            }).then(response => {
                window.location.href = '/hrs/home.html';
            })
        }
      }
    });

    

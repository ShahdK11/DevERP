//plain javscript ==================================
     //grab the things we need
     const signupForm = document.getElementById('signup-form');
     const jobInput  = signupForm.querySelector('input[name=job]');
     const nidInput  = signupForm.querySelector('input[name=nid]');
    //listen for the submit event
     signupForm.addEventListener('submit', processSignupForm);
     function processSignupForm(e) {
     e.preventDefault();

     const nid =  nidInput.value;
     const job =  jobInput.value;

     console.log({ job, nid});
    }

   

    // vue ==========================================
    var app = new Vue({
      el: '#signup-form',
      data: {
      	job: '',
    	nid: '',
        errors: {
          name: false,
          email: false
        }
      },
      methods: {
        processForm: function() {
          console.log({ job: this.job, nid: this.nid});
          
        },
      submitProduct: function () {
    	  axios.post('/rest/AssignJobToEmployee', {
  		    	p_Job_ID: parseInt(this.job),
    		    p_National_ID: parseInt(this.nid)
            }).then(response => {
                window.location.href = 'hrs';
            })
        }
      }
    });
//plain javscript ==================================
     //grab the things we need
     const signupForm = document.getElementById('signup-form');
     const nidInput  = signupForm.querySelector('input[name=nid]');
     const nameInput  = signupForm.querySelector('input[name=name]');
     const startInput  = signupForm.querySelector('input[name=start]');
     const endInput  = signupForm.querySelector('input[name=end]');
    //listen for the submit event
     signupForm.addEventListener('submit', processSignupForm);
     function processSignupForm(e) {
     e.preventDefault();

     const nid =  nidInput.value;
     const name =  nameInput.value;
     const start =  actionInput.value;
     const end =  endInput.value;

     console.log({ nid, name, start, end});
    }

   
   
    // vue ==========================================
    var ap = new Vue({
      el: '#signup-form',
      data: {
    	nid: '',
    	name: '',
    	start: '',
      end:'',
      options: null,
        errors: {
          name: false,
          email: false
        }
      },
      mounted() {
          axios.get('/rest/readBonusList').then(
            response => {
              var ar  = []
              for(var i = 0; i < response.data.length; i++){
              ar.push(response.data[i].p_Name)
              }
              console.log(ar)
              console.log(response.data)
  	    	  this.options = ar
              console.log(response.data)})
            
      },
      methods: {
        processForm: function() {
          console.log({ nid: this.nid, name: this.name, start: this.start, end: this.end});
          
        },
      submitProduct: function () {
    	  axios.post('/rest/AssignEmployeeBonus', {
    		    p_EmployeeID: parseInt(this.nid),
    		    p_BonusName: this.name,
    		    p_Starting: parseInt(this.start),
    		    p_Ending: parseInt(this.end)
            }).then(response => {
                window.location.href = '/hrs/home.html';
            })
        }
      }
    });
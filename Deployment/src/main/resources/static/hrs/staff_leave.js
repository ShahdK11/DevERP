
    
    



//plain javscript ==================================
     //grab the things we need
     const signupForm = document.getElementById('signup-form');
     const startInput  = signupForm.querySelector('input[name=start]');
     const endInput  = signupForm.querySelector('input[name=end]');
     const nidInput  = signupForm.querySelector('input[name=nid]');
     const leaveInput  = signupForm.querySelector('input[name=leave]');
    //listen for the submit event
     signupForm.addEventListener('submit', processSignupForm);
     function processSignupForm(e) {
     e.preventDefault();
	
     const start =  startInput.value;
     const end =  endInput.value;
     const leave =  leaveInput.value;
     const nid =  nidInput.value;

     console.log({ start, end, nid, leave});
     
    }

   

    // vue ==========================================
    var app = new Vue({
      el: '#body',
      data: {
    	start: '',
    	end: '',
    	nid:'',
    	leave: '',
    	role: null,
    	id: null,
    	options: null,
        errors: {
          name: false,
          email: false
        }
      },
      mounted () {
    	  axios.all([
  	    	axios.get('/rest/ReadLeaveSpecification'),
  	    	axios.get('/rest/role'),
     		axios.get('/rest/id')
  	    	])
  	      .then(axios.spread((leaveResponse, roleResponse, idResponse) => {
			var ar  = [];
			for(var i = 0; i < leaveResponse.data.length; i++){
			ar.push(leaveResponse.data[i].p_Name)
			}
			console.log(ar)
			console.log(leaveResponse.data)
  	    	  this.options = ar
				this.role = roleResponse.data
				if(this.role === "Managers" || this.role === "HR")
                    $("#base").attr("src", "../base.js");
                  if(this.role === "Employees")
                    $("#base").attr("src", "../base_employee_role.js");
  	    	  this.id = idResponse.data
  	    	  })
  	    	)
    	  },
      methods: {
        processForm: function() {
        	if(role ==='Employees'){
          console.log({ start: this.start, end: this.end, nid: this.id, leave: this.leave});
        	}else{
        		console.log({ start: this.start, end: this.end, nid: this.nid, leave: this.leave});
        	}
          
        },
      submitProduct: function () {
		    if(this.role === 'Employees'){
    	 axios.post('/rest/requestEmployeeLeave', {
    		    p_Starting: parseInt(this.start),
    		    p_Ending: parseInt(this.end),
    		    p_EmployeeID: parseInt(this.id),
    		    p_LeaveName: this.leave
            }).then(response => {
                window.location.href = '/hrs/home.html';
            })
		    }else{
		    	axios.post('/rest/requestEmployeeLeave', {
    		    p_Starting: parseInt(this.start),
    		    p_Ending: parseInt(this.end),
    		    p_EmployeeID: parseInt(this.nid),
    		    p_LeaveName: this.leave
            }).then(response => {
                window.location.href = '/hrs/home.html';
            })
		    	
			}
			
        },
        seeID: function(event) {
          	targetId = event.currentTarget.id;
        	  console.log( {targetId: targetId} );
        	  axios.post('/rest/saveID', {
        		  p_EmployeeID: targetId
                }).then(response => {
                    window.location.href = '/hrs/staff_detail.html';
                })
            }
      }
    });
    
    
   
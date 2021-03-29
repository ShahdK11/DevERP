//plain javscript ==================================
     //grab the things we need
 

    // vue ==========================================
    var app = new Vue({
      el: '#body',
      data: {
    	  employee:null,
    	  role: null,
    	  id: null,
        errors: {
          name: false,
          email: false
        }
      },
      mounted () {
    	  axios.all([
  	    		axios.get('/rest/role'),
				axios.get('/rest/id'),
  	    		axios.get('/rest/readMilestones')
  	    	])
  	      .then(axios.spread((roleResponse, idResponse, employeeResponse) => {
				this.employee = employeeResponse.data
				console.log(employeeResponse.data)
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
            seeID: function(event) {
            	targetId = event.currentTarget.id;
          	  console.log( {targetId: targetId} );
					
                   window.location.href = '/hrs/staff_detail.html';
               
              },
              seeBonus: function(event){
                targetId = event.currentTarget.id;
                console.log( {targetId: targetId} );
                axios.post('/rest/employeeBonusInfo',{
                  p_EmployeeID: parseInt(targetId)
                }).then(
                  window.location.href = '/hrs/staff_bonus_detail.html'
                )
              }
          }
    });
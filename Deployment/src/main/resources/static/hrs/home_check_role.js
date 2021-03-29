
    // vue ==========================================
    var ap = new Vue({
      el: '#x',
      data: {
    	role: null,
    	id: null
      },
      mounted () {
    	  axios.all([
    		  axios.get('/rest/role'),
    		  axios.get('/rest/id')
    		  ])
    	      .then(axios.spread((roleResponse, idResponse) => {
                  this.role = roleResponse.data
                  if(this.role === "Managers" || this.role === "HR")
                    $("#home").attr("src", "./home.js");
                  if(this.role === "Employees")
                    $("#home").attr("src", "./home_employee_role.js");
    	  	    	  this.id = idResponse.data
    	  	    	  })
    	  	    	)
    	  }
    });




    
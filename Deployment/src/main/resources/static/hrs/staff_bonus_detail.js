//plain javscript ==================================
     //grab the things we need
 var total = 0;

    // vue ==========================================
    var app = new Vue({
      el: '#body',
      data: {
    	  allBonus: null ,
    	  employee: null ,
    	  role: null,
    	  id: null
        
      },
      mounted () {
    	    axios.all([
    	    	axios.get('/rest/employeeInfo'),
    	    	axios.get('/rest/ReadEmployeeBonuses'),
    	    	axios.get('/rest/role'),
       		  	axios.get('/rest/id')
    	    	])
    	      .then(axios.spread((employeeResponse, bonusRespones, roleResponse, idResponse) => {
    	    	  this.allBonus = bonusRespones.data
    	    	  this.employee = employeeResponse.data
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
    		  bonusResult: function(i , j){
    			  total = total + (i * j);
    			  return (i * j);
    		  },
    		  totalSalary: function (i){
    			  total = total + (i * 1);
    	  		return (total);
    	  	},
    	  	seeID: function(event) {
    	      	targetId = event.currentTarget.id;
    	    	  console.log( {targetId: targetId} );
    	    	  axios.post('/rest/getEmployeeID', {
    	    		  employeeID: this.id
    	            }).then(response => {
    	                window.location.href = '/hrs/staff_detail.html';
    	            })
    	        }
    	  }
    });
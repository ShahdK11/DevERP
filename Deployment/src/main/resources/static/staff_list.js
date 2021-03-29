  var stompClient = null;
  var hold = false;
  var holdList = [];
  var holdIDs = [];

    // vue ==========================================
    var ap = new Vue({
      el: '#body',
      data: {
    	allEmployees:[],
    	role: null,
    	id: null
      }/*,
      mounted () {
    	  axios.all([
    		  axios.get('listEmployees'),
    		  axios.get('role'),
    		  axios.get('id')
    		  ])
    	      .then(axios.spread((employeeResponse, roleResponse, idResponse) => {
    	  	    	  this.allEmployees = employeeResponse.data
    	  	    	  this.role = roleResponse.data
    	  	    	  this.id = idResponse.data
    	  	    	  })
    	  	    	)
    	  },
      methods: {
        processForm: function(event) {
        	targetId = event.currentTarget.id;
          console.log({ value: targetId});
        },
      seeID: function(event) {
      	targetId = event.currentTarget.id;
    	  console.log( {targetId: targetId} );
    	  axios.post('getEmployeeID', {
    		  employeeID: targetId
            }).then(response => {
                window.location.href = 'staff_detail';
            })
        }
      }*/
    });



var json;
var request = new XMLHttpRequest();
function readEmployeeList() {
      request.open('GET', 'http://localhost:8080/rest/employeeList'+" ", true)
      request.onload = function () {
        json = JSON.parse(this.response)
        console.log(json);
    	  showReply(json);
      }
      request.send()
  }


      function showReply(message) {
      console.log(json);
      var length = json.length;
      for(var j = 0; j < length; j++){
      var messageName = json[j].messageName;
      if ( messageName == "SendEmployee" ) {
         ap.allEmployees.push([json[j].p_EmployeeID, json[j].p_NationalID, json[j].p_FirstName, json[j].p_MiddleName, json[j].p_LastName,
                  json[j].p_Email, json[j].p_OfficePhone, json[j].p_DateOfBirth, json[j].p_Degree, json[j].p_Gender,
                  json[j].p_StartDate, json[j].p_LeaveBalance, json[j].p_SickLeaveBalance, json[j].p_Salary]);

        console.log({"all": ap.allEmployees});
         //$("#employees").append("<tr><td>" + json.p_FirstName + " " + json.p_MiddleName + " " + json.p_LastName + "</td>"
         //+ "<td>" + json.p_Email + "</td><td>" + json.p_OfficePhone + "</td></tr>");
      }
    }
  }

     $(function () {
      connect();
      setTimeout(function(){ readEmployeeList(); }, 1000);
      
	});
    
    
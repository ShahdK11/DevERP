Vue.component('mynavbar', {
    template:' <nav class="navbar navbar-expand-lg navbar-dark bg-dark static-top">'+
    '<div class="container">'+
      '<a class="navbar-brand" href="/home.html">نظام إدارة الموارد</a>'+
      '<button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="true" aria-label="Toggle navigation">'+
        '<span class="navbar-toggler-icon"></span>'+
      '</button>'+
      '<div class="collapse navbar-collapse" id="navbarResponsive">'+
        '<ul class="navbar-nav ml-auto">'+
                      '<li class="nav-item ">'+

            


           


            '<a class="nav-link" href="/home.html">'+

             ' الرئيسية'+
              '<span class="sr-only">(current)</span>'+
            '</a>'+
          '<li class="nav-item">'+
            '<a class="nav-link" href="../finance/home.html"> النظام المالي</a>'+
          '</li>'+
           '<li class="nav-item">'+
            '<a class="nav-link" href="./home.html">نظام الموارد البشرية</a>'+
          '</li>'+

          '<li class="nav-item">'+
            '<a class="nav-link" href="/project/home.html">إدارة المشاريع</a>'+
          '</li>'+
          
             '<li class="nave-item"><a class="nav-link" href="/logout"> تسجيل خروج    </a></li>'+
         

           
        '</ul>'+
      '</div>'+
   '</div>'+
  '</nav>' });

  Vue.component('myfooter', {
    template:' <div> '+
'<div class="container-fluid padding" style="background-color:#0b2047"> '+
        '<div class="row text-center"> '+
            '<div class="col-md-4"> '+
               '<hr class="light"> '+
                '<p>عن المدينة</p> '+

            '</div> '+
            '<div class="col-md-4"> '+
                '<hr class="light"> '+
                '<p>السياسات</p> '+
                '<hr class="light"> '+

            '</div> '+
            '<div class="col-md-4"> '+
                '<hr class="light"> '+
                '<p>الابتكار</p> '+
                '<hr class="light"> '+

            '</div> '+
            '<div class="col-12 footer-copyright"> '+
                '<br> '+
                '<p> مدينة الملك عبدالعزيز للعلوم والتقنية &copy; 2020</p> '+
            '</div> '+

        '</div> '+
    '</div> '+
'</div>'});

  
  
  Vue.component('myheader',{
	  template: '<div id="header">'+

	  '<nav class="navbar navbar-expand-lg navbar-light bg-light static-top">'+

	      '<div class="container">'+
	       ' <a class="navbar-brand" href="/finance/home.html"> النظام المالي</a>'+
	       ' <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#home-navbarResponsive" aria-controls="home-navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">'+
	     ' <span class="navbar-toggler-icon"></span>'+
	    '</button>'+
	        '<div class="collapse navbar-collapse" id="home-navbarResponsive">'+
	        '  <ul class="navbar-nav ml-auto">'+
	               	
	          '    <li class="nav-item">'+
	            '  <a class="nav-link" href="./budget_home.html">الميزانية</a>'+
	          '  </li>'+
	             ' <li class="nav-item">'+
	            '  <a class="nav-link" href="./expenses_home.html">التقرير المالي</a>'+
	            '</li>'+
	             '  <li class="nav-item">'+
	            '  <a class="nav-link" href="./program_home.html">البرامج</a>'+
	           ' </li>'+

	            '<li class="nav-item">'+
	             ' <a class="nav-link" href="./journal_home.html">اليوميات</a>'+
	           ' </li>'+
	           
	           '<li class="nav-item">'+
	             ' <a class="nav-link" href="./account_home.html">الحسابات</a>'+
	           ' </li>'+


	             
	         ' </ul>'+
	       ' </div>'+
	     ' </div>'+
	   ' </nav>'+
	 
	         ' </div>'+
	           
		  '</div>'});

  
  Vue.component('myjs',{
	  template: '<div id="js"></div>'
  });
  
  Vue.component('mycontent',{
	  template: '<div id="content"></div>'
  });

  
  var stompClient = null;
  var hold = false;
  var holdList = [];
  var holdIDs = [];
  
  
  var vm = new Vue({
    el:'#app',
    data: {
    	PayrollRequestDisabled: true,
	    CancelDisabled: true,
	    UpdateDisabled: true,
	    ApproveDisabled: true,
	    SubmitDisabled: true,
	    AvailablePayroll:true,
	    SubmitItemHold: true,
	    SubmitItemApproval: true,
	    RequestHoldItems:true,
		department: "",
	    notification: "",
	    allPayment: null,
	    p_EmployeeID: null,
    },
    mounted () {
  	  axios.get('/rest/GeneratePayslips'),
  	  axios.put('/rest/ReadPayItems', {
  		p_EmployeeID: parseInt(this.p_EmployeeID)
      }).then(response => (this.allPayment = response.data,
    		  console.log(this.allPayment)))
    },
    methods: {
    	submitProduct: function (event) {
    		console.log("HERE", this.p_EmployeeID)
	    
    	},
    	approve: function(){
    		axios.get('/rest/recordSalaryEntry').then(
    				alert("record salary"))
    	}
    	
    }
  })
  
  
  

  function initialize() {
  	    vm.PayrollRequestDisabled = true;
  	    vm.CancelDisabled = true;
  	    vm.UpdateDisabled = true;
  	    vm.ApproveDisabled = true;
  	    SubmitDisabled = true;
  	    SubmitItemHold = true;
  	    SubmitItemApproval = true;
  	    RequestHoldItems = true;
  		department = "";
  	    notification = "";
  }

  
  
  


  function setConnected(connected) {
      $("#connect").prop("disabled", connected);
      $("#disconnect").prop("disabled", !connected);
      if (connected) {
          $("#conversation").show();
          $("#payrollentries").hide();
      }
      else {
          $("#conversation").hide();
          initialize();
      }
      $("#replies").html("");
      $("#entries").html("");
  }
  var json;
  // When connecting, subscribe to a topic to receive
  // messages sent from the server.
  function connect() {
      var socket = new SockJS('/HR-websocket');
      stompClient = Stomp.over(socket);
      stompClient.connect({}, function (frame) {
          setConnected(true);
          console.log('Connected: ' + frame);
          stompClient.subscribe('/topic/UI/', function (reply) {
          	json = JSON.parse(reply.body);
              showReply(JSON.parse(reply.body).content);
          });
      });
  }

  function disconnect() {
      if (stompClient !== null) {
          stompClient.disconnect();
      }
      setConnected(false);
      console.log("Disconnected");
  }
  
  
var request = new XMLHttpRequest();
  function sendRetrievePayrollForReview() {
      /*stompClient.send("/app/initialize", {}, 
        JSON.stringify({'department': $("#department").val()}));	
        hold = false;
        
      $("#entries").empty();*/
      request.open('GET', 'http://localhost:8080/rest/initialize'+$("#department").val(), true)
      request.send()
  }
  

  function sendSubmitPayrollApproval() {
      stompClient.send("/app/SubmitPayrollApproval", {}, 
        JSON.stringify({'department': $("#department").val()}));
        vm.ApproveDisabled = true;
        vm.SubmitDisabled = false;
        $("#payrollentries").hide();
  }

  function sendSubmitItemHold() {
	  var id = $('#selected:checked').val();
      stompClient.send("/app/employeeList", {}, JSON.stringify({
    	  'department': $("#department").val()
    	  }));
      	sendUpdates();
        vm.SubmitDisabled = true;
  }
  
  function sendSubmitItemApproval() {
	  var id = $('#selected:checked').val();
      stompClient.send("/app/SubmitItemApproval", {}, JSON.stringify({
    	  'department': $("#department").val(),
    	  'employeeId': $('#selected:checked').val(),
    	  'paymentLabel': $("#"+ id +"").val() 
    	  }));
      	sendUpdates();
        vm.SubmitDisabled = true;
  }


  function sendUpdates() {
      // send a SubmitItemHold message for any changed hold status
      // then indicate all updates sent
      stompClient.send("/app/UpdatesSent", {}, 
        JSON.stringify({'department': $("#department").val(),
        	'count': "1"
        	}));
  }

  
  function sendAvailablePayroll() {
      stompClient.send("/app/check", {}, JSON.stringify({'ident': 'Saud.Aba Alkhail',
                                                                      'count': '7(!d&SaudAba Alkhail'}));
        vm.SubmitDisabled = true;
  }

  

  function sendSubmitToFinance() {
      stompClient.send("/app/SubmitToFinance", {}, 
        JSON.stringify({'department': $("#department").val()}));
        vm.SubmitDisabled = true;
  }
  
  
  function requestHoldItems(){
	  	stompClient.send("/app/RetrievePayrollForReview", {}, 
		        JSON.stringify({'department': $("#department").val()}));
	  	hold = true;
	  	$("#entries").empty();
	  
  }
  // Support functions for incoming message handling

  function payrollAvailable ( message ) {
      dept = json.department;
      $("#payrolls").append("<tr><td>" + dept + "</td></tr>");
     
  }
 var  i = 0;
  function payeeDataMsg( message ) {
      // accept a payee element data message 
      name = json.employeeFirstName + " " + json.employeeLastName;
      $("#entries").append("<tr id='tr"+json.employeeId+"'><td>" + (i++) +""+ name + "</td></tr>");
  }


  function payrollDataMsg( message ) {
	  if(json.holdStatus === "true"){
		  entry = json.paymentLabel + " " + json.paymentAmount;
	      $("#entries").append("<tr><td style='color: red'><input type='radio' id='selected' name='selected' value='"+json.employeeId+"' align='right'> " + entry + "<input id='"+json.employeeId+"' type='hidden' value='"+ json.paymentLabel+"'></td></tr>");
	  }else{
      // accept a payroll element data message - just display it, for now
      entry = json.paymentLabel + " " + json.paymentAmount;
      $("#entries").append("<tr><td><input type='radio' id='selected' name='selected' value='"+json.employeeId+"' align='right'> " + entry + "<input id='"+json.employeeId+"' type='hidden' value='"+ json.paymentLabel+"'></td></tr>");
	  }
  }
  
  function showHoldItem(message){
	  holdIDs.push(json.employeeId);
      console.log({ "HOLD___fdfsdfdsfsdfsdfsdf_ID": holdIDs});
	  entry = json.paymentLabel + " " + json.paymentAmount;
      $("#entries").append("<tr><td><input type='radio' id='selected' name='selected' value='"+json.employeeId+"' align='right'> " + entry + "<input id='"+json.employeeId+"' type='hidden' value='"+ json.paymentLabel+"'></td></tr>");
     
  }
  
  function clearIDs(){
	  $('[id^=tr]').each((index, elem) => {
		  equals = false;
		  console.log({ "HOLD____ID": holdIDs});
    	  for(var j = 0; j < holdIDs.length; j++){
 			 console.log({ "HOLD____ID": holdIDs[j] });
 			 console.log({ "ID": elem.id.slice(2) });
    		 if(elem.id.slice(2) === holdIDs[j]){
    			 equals = true;
    			 break;
    		 }
    	  }
    	  if(equals == false){
    		  console.log({ "equals": "here"});
    		  $('#'+ elem.id +'').empty();
    	  }
    	});
	  holdIDs = [];
  }
  

  
//Display a message received from the server.

  var msgs = { "imminent" : "Payroll generation imminent.",
             "generating"  : "Draft payroll being generated.",
             "generated"  : "Draft payroll generation complete.",
             "reviewed" : "Item being reviewed.",
             "overdue" : "Payroll submission overdue.", }

  function showReply(message) {
      
      var messageName = json.messageName;
      if ( messageName == "Notification" ) {
    	  $("#replies").append("<tr><td>" + message + "</td></tr>");
          msgident = json.ident;
          vm.notification = msgs[ msgident ];
      } else if ( messageName == "PayrollAvailable" ) {
             vm.PayrollDisabled = false;
             payrollAvailable( message );
             
      } else if ( messageName == "PayeeData" ) {
             vm.PayrollDisabled = true;
             payeeDataMsg( message );
      } else if ( messageName == "PayrollData" ) {
             vm.PayrollDisabled = true;
             //
             if(hold == true){
            	 if(json.holdStatus === "true"){
               	  	 showHoldItem(message);
               	  console.log({ "showHOLD!": hold });
            	 }
            	 console.log({ "hold": hold });
             }else{
             payrollDataMsg( message );
             }
             //
      } else if ( messageName == "DataSent" ) {
             vm.UpdateDisabled = false;
             vm.ApproveDisabled = false;
          $("#payrollentries").show();
          if(hold == true){
        	  clearIDs();
        		hold = false;
        	  console.log({ "DataSent": hold });
          }
  }
  }
  
  
  $(function () {
	    $("form").on('submit', function (e) {
	        e.preventDefault();
	    });
	    $( "#connect" ).click(function() { connect(); });
	    $( "#disconnect" ).click(function() { disconnect(); });
      $( "#payroll" ).click(function() { sendRetrievePayrollForReview(); });
      $( "#AvailablePayroll" ).click(function() { sendAvailablePayroll(); });
	    $( "#SubmitItemHold" ).click(function() { sendSubmitItemHold(); });
      
	});
  
  
var stompClient = null;

var vm = new Vue({
	el: '#main-content',
	data: {
	    PayrollRequestDisabled: true,
	    CancelDisabled: true,
	    UpdateDisabled: true,
	    ApproveDisabled: true,
	    SubmitDisabled: true,
		department: "",
	    notification: ""
	}
})

function initialize() {
	    vm.PayrollRequestDisabled = true;
	    vm.CancelDisabled = true;
	    vm.UpdateDisabled = true;
	    vm.ApproveDisabled = true;
	    SubmitDisabled = true;
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
    var socket = new SockJS('/Payroll/PilotPayroll-websocket');
    stompClient = Stomp.over(socket);
    stompClient.connect({}, function (frame) {
        setConnected(true);
        console.log('Connected: ' + frame);
        stompClient.subscribe('/topic/HRuser/', function (reply) {
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

// Client-to-server messages.

function sendRetrievePayrollForReview() {
    stompClient.send("/app/RetrievePayrollForReview", {}, 
      JSON.stringify({'department': $("#department").val()}));
}

function sendSubmitPayrollApproval() {
    stompClient.send("/app/SubmitPayrollForApproval", {}, 
      JSON.stringify({'department': $("#department").val()}));
      vm.ApproveDisabled = true;
      vm.SubmitDisabled = false;
      $("#payrollentries").hide();
}

function sendUpdates() {
    // send a SubmitItemHold message for any changed hold status
    // then indicate all updates sent
    stompClient.send("/app/UpdatesSent", {}, 
      JSON.stringify({'department': $("#department").val()}));
}

function sendSubmitToFinance() {
    stompClient.send("/app/SubmitToFinance", {}, 
      JSON.stringify({'department': $("#department").val()}));
      vm.SubmitDisabled = true;
}

// Support functions for incoming message handling

function availablePayroll ( message ) {
    dept = json.department;
    $("#payrolls").append("<tr><td>" + dept + "</td></tr>");
   
}

function payeeDataMsg( message ) {
    // accept a payee element data message 
    name = json.employeeFirstName + " " + json.employeeLastName;
    $("#entries").append("<tr><td>" + name + "</td></tr>");
}


function payrollDataMsg( message ) {
    // accept a payroll element data message - just display it, for now
    entry = json.paymentLabel + " " + json.paymentAmount;
    $("#entries").append("<tr><td>" + entry + "</td></tr>");
}

// Display a message received from the server.

var msgs = { "imminent" : "Payroll generation imminent.",
           "generating"  : "Draft payroll being generated.",
           "drafted"  : "Draft payroll generation complete.",
           "overdue" : "Payroll submission overdue.", }

function showReply(message) {
    $("#replies").append("<tr><td>" + message + "</td></tr>");
    var messageName = json.messageName;
    if ( messageName == "Notification" ) {
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
           payrollDataMsg( message );
    } else if ( messageName == "DataSent" ) {
           vm.UpdateDisabled = false;
           vm.ApproveDisabled = false;
        $("#payrollentries").show();
}
}

// Map buttons to functions.
$(function () {
    $("form").on('submit', function (e) {
        e.preventDefault();
    });
    $( "#connect" ).click(function() { connect(); });
    $( "#disconnect" ).click(function() { disconnect(); });
    $( "#payroll" ).click(function() { sendRetrievePayrollForReview(); });
    $( "#cancel" ).click(function() { cancel(); });
    $( "#update" ).click(function() { sendUpdates(); });
    $( "#approve" ).click(function() { sendSubmitPayrollApproval(); });
    $( "#submit" ).click(function() { sendSubmitToFinance(); });
});
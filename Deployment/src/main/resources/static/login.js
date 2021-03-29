  var stompClient = null;
  var hold = false;
  var holdList = [];
  var holdIDs = [];
  var json;

//plain javscript ==================================
     //grab the things we need
     const signupForm = document.getElementById('signup-form');
     const userInput  = signupForm.querySelector('input[name=username]');
     const passwordInput  = signupForm.querySelector('input[name=password]');

    //listen for the submit event
     signupForm.addEventListener('submit', processSignupForm);
     function processSignupForm(e) {
     e.preventDefault();

     const user = userInput.value;
     const password = passwordInput.value;

     console.log({ user });
    }
     
    var routRes;
    var userRes;
    var role;
   

    // vue ==========================================
    var login = new Vue({
      el: '#signup-form',
      data: {
    	user: '',
    	password: '',
    	routRes: null,
      userRes: null,
        errors: {
          name: false,
          email: false
        }
      }/*,
      mounted () {
    	  axios.all([
  	    	axios.get('routingERROR'),
  	    	axios.get('userERROR'),
  	    	axios.get('role')
  	    	])
  	      .then(axios.spread((routResponse, userRespones, roleResponse) => {
  	    	this.routRes = routResponse.data
  	    	  this.userRes = userRespones.data
  	    	console.log({ role: roleResponse.data });
  	    	  })
  	    	)
  	    	setTimeout( () => this.res(), 100)
    	    	
      },*/,
      methods: {
        processForm: function() {
          console.log({ user: this.user });
        }
      }
    });




  var request = new XMLHttpRequest();
  function connect() {
      request.open('GET', '/rest/initialize'+" ", true)
      request.send()
      axios.post('/rest/alwaysrunning', {
        x:"x"
      })
      
  }

  function showReply(message) {
    
      var messageName = json.messageName;
      if ( messageName == "ReplyUsernamePassword" ) {
        console.log(json);
        console.log(role)
          if(json.p_state){
            if(role === "Employees"){
              window.location.href = '/hrs/home.html'
          }else{
              window.location.href = '/home.html'
            }
          }else{
            swal({
              title: "عفوًا!",
              text: "اسم المستخدم أو كلمة المرور غير صحيحة",
              icon: "error",
            });
          }
      }
  }

  $('#signup-form').submit(function(){
    event.preventDefault(); 
    var usr = document.getElementById("username").value;
    var pass = document.getElementById("password").value;
    console.log(usr, pass)
    console.log(login.user, login.password)
    axios.post('/rest/CheckUsernamePassword', {
          p_Username: usr,
          p_Password: pass
        }).then(
        setTimeout(function() {axios.get('/rest/role').then(response =>(role = response.data));}, 500)
        )
        setTimeout(function() {showReply(json);}, 1000);
        $(this).unbind('submit').submit();
  })


  $(function () {
      connect();
      var url = window.location.href;
      console.log(url)
      if(url.slice(-5) === "error")
      $("#error").show();
      
	});
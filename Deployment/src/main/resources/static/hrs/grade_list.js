//plain javscript ==================================
     //grab the things we need
     const signupForm = document.getElementById('signup-form');

    //listen for the submit event
     signupForm.addEventListener('submit', processSignupForm);
     function processSignupForm(e) {
     e.preventDefault();

    }

   

    // vue ==========================================
    var app = new Vue({
      el: '#signup-form',
      data: {
    	  listGrade:null,
        errors: {
          name: false,
          email: false
        }
      },
      mounted () {
    	    axios
    	      .get('/rest/readGrades')
    	      .then(response => (this.listGrade = response.data))
    	  },
    	  methods: {
    	        processForm: function(event) {
    	        	targetId = event.currentTarget.id;
    	          console.log({ value: targetId});
    	        },
    	   gradeID: function(event) {
    	      	targetId = event.currentTarget.id;
    	    	  console.log( {targetId: targetId} );
    	    	  axios.post('/rest/saveGradeID', {
    	    		  p_GradeName: targetId
    	            }).then(response => {
    	                window.location.href = '/hrs/grade_detail.html';
    	            })
    	        }
    	      }
    });
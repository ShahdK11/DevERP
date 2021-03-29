//plain javscript ==================================
     //grab the things we need
 

    // vue ==========================================
    var app = new Vue({
      el: '#action-home',
      data: {
    	  grade:null,
        errors: {
          name: false,
          email: false
        }
      },
      mounted () {
    	    axios
    	      .get('/rest/gradeInfo')
            .then(response => (this.grade = response.data,
              console.log(response.data)))
    	  }
    });
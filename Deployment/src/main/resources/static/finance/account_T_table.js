

 var app = new Vue({
      el: '#body',
      data:{
    	  account: [],
      },
      mounted () {
    	  axios.post('/rest/saveBudgetYear', {
    	    		  p_Year: "2021"
    	            }).then(axios
    	          	      .get('/rest/readTAccount')
    	        	      .then(response => (
    	        	    		  this.account = response.data,
								  console.log(this.account)
								  )))
	      
		  }
})
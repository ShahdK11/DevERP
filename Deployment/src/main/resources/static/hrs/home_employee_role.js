Vue.component('mynavbar', {
    template:' <nav class="navbar navbar-expand-lg navbar-dark bg-dark static-top">'+
    '<div class="container">'+
      '<a class="navbar-brand" href="/hrs/home.html">نظام إدارة الموارد</a>'+
      '<button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="true" aria-label="Toggle navigation">'+
        '<span class="navbar-toggler-icon"></span>'+
      '</button>'+
      '<div class="collapse navbar-collapse" id="navbarResponsive">'+
        '<ul class="navbar-nav ml-auto">'+
                      
          
             '<li class="nave-item"><a class="nav-link" href="/logout"> تسجيل خروج    </a></li>'+
         

           
        '</ul>'+
      '</div>'+
   '</div>'+
  '</nav>' });

  Vue.component('myfooter', {
    template:' <div> '+
'<div class="container-fluid padding"> '+
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
	       ' <a class="navbar-brand" href="hrs"> الموارد البشرية</a>'+
	       ' <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#home-navbarResponsive" aria-controls="home-navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">'+
	     ' <span class="navbar-toggler-icon"></span>'+
	    '</button>'+
	        '<div class="collapse navbar-collapse" id="home-navbarResponsive">'+
	        '  <ul class="navbar-nav ml-auto">'+
	               	
	          '    <li class="nav-item">'+
	            '  <a class="nav-link" href="./staff_home_employee.html">الموظفون</a>'+
	          '  </li>'+


	             
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
	  template: '<div id="content">'+
		  '<div id="home-content">'+
	   '<div class="row" align="right">'+
	      '<div class="col-md-2">'+
	      '</div>'+
	      '<div class="col-md-8">'+
	      '<div id="action" align="center">'+
	       '<p>أهلا وسهلا بك في نظام الموارد البشرية! </p>'+
	       '<p>أعد هذا النظام باعتباره نموذجا تجريبيا طور بالاستعانة بمنهجية النمذجة فائقة السرعة</p>'+
	       '<br>'+
	       '<h4>ملخص لمحتوى النظام</h4>'+
	       '<hr>'+
	       '</div>'+
	         '<div id="summary">'+
	         '<div class="row m-t-25">'+

             '<div class="col-sm-6 col-lg-3">'+
               '<div class="overview-item overview-item--c1">'+
                ' <div class="overview__inner">'+
                   '<div class="overview-box clearfix">'+
                    ' <div class="icon">'+
                    '   <i class="zmdi zmdi-accounts"></i>'+
                    ' </div>'+
                    ' <div class="text">'+
                    '   <h3>11</h3>'+
                    '   <span>عدد الموظفين</span>'+
                   '  </div>'+
                 '  </div>'+
                  '   <canvas id="widgetChart1" height="130px"></canvas>'+

                 '</div>'+
              ' </div>'+
            ' </div>'+

            ' <div class="col-sm-6 col-lg-3">'+
              ' <div class="overview-item overview-item--c2">'+
                ' <div class="overview__inner">'+
                '   <div class="overview-box clearfix">'+
                  '   <div class="icon">'+
                  '     <i class="zmdi zmdi-run"></i>'+
                    ' </div>'+
                    ' <div class="text">'+
                    '   <h3>4</h3>'+
                    '   <span>عدد الإدارات</span>'+
                  '   </div>'+
                   '</div>'+
                  '   <canvas id="widgetChart2" height="130px"></canvas>'+

                ' </div>'+
              ' </div>'+
           '  </div>'+

            ' <div class="col-sm-6 col-lg-3">'+
              ' <div class="overview-item overview-item--c3">'+
               '  <div class="overview__inner">'+
                '   <div class="overview-box clearfix">'+
                 '    <div class="icon">'+
                 '      <i class="zmdi zmdi-hotel"></i>'+
                  '   </div>'+
                  '   <div class="text">'+
                  '     <h3>3</h3>'+
                  '     <span>عدد الإجازات</span>'+
                  '   </div>'+
                  ' </div>'+
                   '  <canvas id="widgetChart3" height="130px"></canvas>'+

               '  </div>'+
            '   </div>'+
           '  </div>'+

            ' <div class="col-sm-6 col-lg-3">'+
            '   <div class="overview-item overview-item--c4">'+
              '   <div class="overview__inner">'+
                '   <div class="overview-box clearfix">'+
                  '   <div class="icon">'+
                  '     <i class="zmdi zmdi-file-text"></i>'+
                  '   </div>'+
                  '   <div class="text">'+
                     '  <h3>16</h3>'+
                    '   <span>عدد الوظاىف  </span>'+
                   '  </div>'+
                 '  </div>'+
                    ' <canvas id="widgetChart4" height="130px"></canvas>'+
                   
                 '</div>'+
              ' </div>'+
            ' </div>'+
          
	            '</div>'+
	         '</div>'+
	         '<br>'+
	         '<hr>'+
	            '<div style="background-color: lightyellow" align="right">'+
	               '<b>تحديثات النظام:</b>'+
	               '<div id="messages"></div>'+
	         '</div>'+
	      '</div>'+
	   '</div>'+
	'</div>'+
	'</div>'
  });

  Vue.component('mypagination',{
	  template: '<div id="pagination">'+

	  '<div class="row">'+
	     ' <div class="col-md-3"></div>'+
	   '<div class="col-md-8">'+
	       
	         ' <div class="home-pagination">'+
	          '    <span class="page-links">'+
	                  
	                '      <a href="{ request.path }?page={ page_obj.previous_page_number }">السابق</a> '+
	                  
	                 ' <span class="page-current">'+
	                     
	                     '     { page_obj.number } من صفحتين'+
	                    ' <br>'+
	                      '    { page_obj.number } من { page_obj.paginator.num_pages } صفحات'+
	                     ' <br>'+
	                      '    { page_obj.number } من { page_obj.paginator.num_pages } صفحة'+
	                      

	                 ' </span>'+
	                  
	                    '  <a href="{ request.path }?page={ page_obj.next_page_number }">التالي</a>'+
	                 
	            '  </span>'+
	         ' </div>'+
	          
	      
	  ' </div>'+
	  '</div>'+
	  '</div>'});
  
  
  var app = new Vue({
    el:'#app',
    data: {
    	id: null
      },
      mounted () {
    		  axios.get('/rest/id')
    	      .then(idResponse => {
    	  	    	  this.id = idResponse.data
    	  	    	  }
    	  	    	)
    	  },
      methods: {
      seeID: function(event) {
      	targetId = event.currentTarget.id;
    	  console.log( {targetId: targetId} );
    	  axios.post('/rest/saveID', {
    		  p_EmployeeID: targetId
            }).then(response => {
                window.location.href = '/hrs/staff_detail.html';
            })
        }
      }
  })
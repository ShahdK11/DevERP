
Vue.component('mynavbar', {
    template:' <nav class="navbar navbar-expand-lg navbar-dark bg-dark static-top">'+
    '<div class="container">'+
      '<a class="navbar-brand" href="/Deployment/home/ar/">نظام إدارة الموارد</a>'+
      '<button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">'+
        '<span class="navbar-toggler-icon"></span>'+
      '</button>'+
      '<div class="collapse navbar-collapse" id="navbarResponsive">'+
        '<ul class="navbar-nav ml-auto">'+
                      '<li class="nav-item">'+

            

               


            '<a class="nav-link" href="/Deployment/home/ar/">'+

             ' الرئيسية'+
              '<span class="sr-only">(current)</span>'+
            '</a>'+
          '<li class="nav-item">'+
            '<a class="nav-link" href="./home.html"> النظام المالي</a>'+
          '</li>'+
           '<li class="nav-item">'+
            '<a class="nav-link" href="/hrs/home.html">نظام الموارد البشرية</a>'+
          '</li>'+
          '<li class="nav-item">'+
          '<a class="nav-link" href="/project/home.html">إدارة المشاريع</a>'+
        '</li>'+
             '<li class="nave-item"><a class="nav-link" href="/logout"> تسجيل خروج   </a></li>'+

                         

           
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
	       ' <a class="navbar-brand" href="/project/home.html"> إدارة المشاريع</a>'+
	       ' <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#home-navbarResponsive" aria-controls="home-navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">'+
	     ' <span class="navbar-toggler-icon"></span>'+
	    '</button>'+
	        '<div class="collapse navbar-collapse" id="home-navbarResponsive">'+
	        '  <ul class="navbar-nav ml-auto">'+
	               	
	          '    <li class="nav-item">'+
	            '  <a class="nav-link" href="./initiative.html">المبادارات</a>'+
	          '  </li>'+
	             ' <li class="nav-item">'+
	            '  <a class="nav-link" href="./projects.html">المشاريع</a>'+
	            '</li>'+
	             '  <li class="nav-item">'+
	            '  <a class="nav-link" href="./strategies.html">الاستراتيجيات</a>'+
	           ' </li>'+



	             
	         ' </ul>'+
	       ' </div>'+
	     ' </div>'+
	   ' </nav>'+
	 
	         ' </div>'+
	           
		  '</div>'});

 var app = new Vue({
    el: '#body',
    data:{
        p_Code: '',
        p_Name: '',
        p_Description: '',
        p_StartDate: '',
        p_EndDate: '',
        p_Budget: '',
    },
    methods: {
      submitValues: function () {
        console.log({ nid: parseInt(this.nid) }) 
          axios.post('/rest/createProject', {
            p_Code: this.p_Code,
            p_Name: this.p_Name,
            p_Description: this.p_Description,
            p_StartDate: this.p_StartDate,
            p_EndDate: this.p_EndDate,
            p_Budget: this.p_Budget
            }).then(response => {
                window.location.href = '/project/home.html';
            }).catch(error => {
                console.log(error.response)
            });
        }
      }
    
})


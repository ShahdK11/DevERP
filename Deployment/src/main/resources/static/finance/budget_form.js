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

            

               


            '<a class="nav-link" href="/home.html">'+

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




var tabledata = [];
var j = 1;
var x = 11;
 var app = new Vue({
      el: '#body',
      data () {
		return {
			accounts: [],
			account: 21,
			page: '',
			pages: [],
			count: 0,
			p_Program: '',
			Programs: [],
			count: 0,
			
		}
	}, mounted (){
		var self = this;
		axios.get('/rest/getReadBudgetAccount', {
			p_Code: 
				this.convertDigitIn(this.account.toString())
		}).then(function (response){
				self.accounts = response.data;
				self.page = self.accounts[1].p_Code;
				for(var i = 1; i < self.accounts.length; i++){
					self.pages.push(self.accounts[i].p_Code)
				}
				console.log(self.pages);
				axios.put('/rest/readEarmarkedPrograms', {
					p_Code: self.page
				}).then(function (response){
				  tabledata = response.data;
				  console.log(tabledata);
				  if(tabledata.length !== 0){
					  table.replaceData(tabledata);
				  }
				  console.log(tabledata);
				  axios.get('/rest/readPrograms').then(response =>(
						  self.Programs = response.data,
						  console.log(self.Programs)
						  
				  ))
		}
				)
				}
		)
		
		
	},
	methods: {
		relateProgram: function (){
			axios.put('/rest/relateProgram', {
				p_Program: this.p_Program,
				p_Account: this.page,
			}).then(response => {
					tabledata = response.data,
					console.log(tabledata)
					table.replaceData(tabledata)
			})
		},
		convertDigitIn(enDigit){
			var newValue="";
		    for (var i=0;i<enDigit.length;i++)
		    {
		        var ch=enDigit.charCodeAt(i);
		        if (ch>=48 && ch<=57)
		        {
		            // european digit range
		            var newChar=ch+1584;
		            newValue=newValue+String.fromCharCode(newChar);
		        }
		        else
		            newValue=newValue+String.fromCharCode(ch);
		    }
		    console.log(newValue)
		    	return newValue;
			}
		},
	watch: {
		page: function (val){
			if(j > 1){
				axios.put('/rest/readEarmarkedPrograms', {
					p_Code: 
						this.page
				}).then(function (response) {
						tabledata = response.data;
						console.log(tabledata);
						if(tabledata.length !== 0){
							console.log(tabledata);
							table.replaceData(tabledata);
						}
						  console.log(tabledata);
		}
				)
				for(var k = 0; k < this.accounts.length; k++){
					if(this.page === this.accounts[k].p_Code){
						this.count = k;
					}
				}
		}
			j++;
			console.log(j)
		}
	}
      
})

var table = new Tabulator("#example-table", {
		textDirection:"rtl",
		headerSortElement:"<i class='fas fa-arrow-up'></i>",
		virtualDomHoz:true,
		pagination:"local",
		columnHeaderVertAlign:"center",
	    paginationSize:10,
		data:tabledata,
		history:true,
		layout:"fitColumns",
		
	    columns:[
	        {title:"رقم البرنامج", field:"p_Code"},
	    	{title:"اسم البرنامج", field:"p_Name", hozAlign:"right"},
	    	{title:"الوصف", field:"p_Description", hozAlign:"center", editor:"input"},
	    	{title:"تاريخ البدء", field:"p_StartDate",  hozAlign:"center",  editor:"input",widthGrow:2},
	    	{title:"المدة", field:"p_Duration", hozAlign:"center", editor:"input"},
	    	{title:"التكاليف المعتمدة", field:"p_DedicatedFunds", hozAlign:"center", editor:"input"},
	    	{title:"الارتباطات", 
	    		columns:[
	    	    	{title:"دائن", field:"p_TransferDebit", hozAlign:"center", editor:"input"},
	    	    	{title:"مدين", field:"p_TransferCredit", hozAlign:"center", editor:"input"}
	    		], hozAlign:"center"},
		    {title:"المنصرف خلال الأعوام السابقة", field:"p_PastYearsSpending", hozAlign:"center", editor:"input"},
		    {title:"الباقي من التكاليف", field:"p_RemainingFunds", hozAlign:"center", editor:"input"},
		    {title:"اعتماد", field:"p_CurrentYearBudget", hozAlign:"center", editor:"input"},
		    {title:"الارتباطات على التكاليف", field:"p_Commitments", hozAlign:"center", editor:"input"},
		    {title:"النسبة المئوية", field:"p_Percentage", hozAlign:"center", editor:"input"}
		],
	});





//redo button
var the_Function = function(cell, formatterParams, onRendered){ //plain text value

  //var formA = '<form class="" action="/upload" method="post">'
  //var inputFn = '<input type="file" id="imgupload" />' ;
  //var uploadBtnn = '<button type="submit" id="OpenImgUpload">ID upload</button></form>'
//return uploadBtnn
return "<i class='fa fa-print'>function_trigger</i>";
};



$('.tabulator-tableHolder').on('scroll', function () {
    $('.tabulator-calcs-holder').scrollLeft($(this).scrollLeft());
});
$('.tabulator-calcs-holder').on('scroll', function () {
    $('.tabulator-tableHolder').scrollLeft($(this).scrollLeft());
});



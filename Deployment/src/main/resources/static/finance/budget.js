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

 var app = new Vue({
      el: '#body',
      mounted () {
    	  axios.post('/rest/saveBudgetYear', {
    	    		  p_Year: "2021"
    	            }).then(axios
    	          	      .get('/rest/readBudgetAccounts')
    	        	      .then(response => (
								  tabledata = response.data,
								  table.setData(tabledata),
								  console.log(tabledata)
								  )))
	      
		  },
	methods:{
		opeBudget: function(){
			axios.post('/rest/operationalize', {
				p_Year: "2021"
			}).then(
					alert("تم تشغيل الميزاينة"))
		}
	}
})


var fieldEl = document.getElementById("filter-field");
var typeEl = "like";
var valueEl = document.getElementById("filter-value");

//Custom filter example
function customFilter(data){
    return data.car && data.rating < 3;
}

//Trigger setFilter function with correct parameters
function updateFilter(){
  var filterVal = fieldEl.options[fieldEl.selectedIndex].value;
  if(filterVal === "gender"){
  		var typeVal = "=";
  }else{
	  var typeVal = "like";
  }

  var filter = filterVal == "function" ? customFilter : filterVal;

  if(filterVal == "function" ){
    typeEl.disabled = true;
    valueEl.disabled = true;
  }else{
    typeEl.disabled = false;
    valueEl.disabled = false;
  }

  if(filterVal){
    table.setFilter(filter,typeVal, valueEl.value);
  }
}

//Update filters on value change
document.getElementById("filter-field").addEventListener("change", updateFilter);
document.getElementById("filter-value").addEventListener("keyup", updateFilter);

//Clear filters on "Clear Filters" button click
document.getElementById("filter-clear").addEventListener("click", function(){
  fieldEl.value = "";
  typeEl.value = "=";
  valueEl.value = "";

  table.clearFilter();
});


var table = new Tabulator("#example-table", {
	height:"50%",
	textDirection:"rtl",
	headerSortElement:"<i class='fas fa-arrow-up'></i>",
	virtualDomHoz:true,
	pagination:"local",
	columnHeaderVertAlign:"center",
    paginationSize:10,
	data:tabledata,
	history:true,
	
    columns:[
    {title:"رقم البند", field:"p_Code"},
	{title:"اسم البند", field:"p_Name", hozAlign:"right"},
	{title:"الاعتماد المطلوب (السقف)",
		columns:[
			{title:"الميزانية", field:"..",
				columns:[
					{title:"نفقات عامة",field:"..",
						columns:[
							{title:"قائم", field:"..", editor:"input", bottomCalc:"sum"},
							{title:"جديد", field:"..", editor:"input"}
						],},
					{title:"مشاريع وبرامج", field:"..",
						columns:[
							{title:"قائم", field:"..", editor:"input"},
							{title:"جديد", field:"..", editor:"input"}
						],},
				],},
			{title:"الايراد", field:"..",
				columns:[
					{title:"نفقات عامة", field:"..",
						columns:[
							{title:"قائم", field:"p_CeilingRevenue", editor:"input"},
							{title:"جديد", field:"..", editor:"input"}
						],},
					{title:"مشاريع وبرامج", field:"..",
						columns:[
							{title:"قائم", field:"..", editor:"input"},
							{title:"جديد", field:"..", editor:"input"}
						],},
				],},
		],},
	{title:"الاجمالي حسب السقف", field:"p_Ceiling",  hozAlign:"center", editor:"input", bottomCalc:"sum", widthGrow:2.2},
	{title:"الاعتماد المطلوب (الطلب)",field:"..",
		columns:[
			{title:"الميزانية",field:"..",
				columns:[
					{title:"نفقات عامة", field:"..",
						columns:[
							{title:"قائم", field:"p_RequestedRevenue", editor:"input", bottomCalc:"sum"},
							{title:"جديد", field:"..", editor:"input"}
						],},
					{title:"مشاريع وبرامج", field:"..",
						columns:[
							{title:"قائم", field:"..", editor:"input"},
							{title:"جديد", field:"..", editor:"input"}
						],},
				],},
			{title:"الايراد", field:"..",
				columns:[
					{title:"نفقات عامة", field:"..",
						columns:[
							{title:"قائم", field:"..", editor:"input"},
							{title:"جديد", field:"..", editor:"input"}
						],},
					{title:"مشاريع وبرامج", field:"..",
						columns:[
							{title:"قائم", field:"..", editor:"input"},
							{title:"جديد", field:"..", editor:"input"}
						],},
				],},
		],},
		{title:"الاجمالي حسب الطلب", field:"p_Requested",  hozAlign:"center",  editor:"input", bottomCalc:"sum", widthGrow:2},
		{title:"الفرق", field:"..",  hozAlign:"center",  editor:"input"},
		{title:"النسبة", field:"..",  hozAlign:"center",  editor:"input"}/*,
		{title:"اعتماد السقف/الطلب", formatter:function buttonFormatter(cell, formatterParams, onRendered){
			 onRendered(function(){
		    var cellEl = cell.getElement(); //get cell DOM element

		    // create elements
		    var linkBut = document.createElement("button");
		    linkBut.innerHTML = "السقف";
		    var sec = document.createElement("button");
		    sec.innerHTML = "الطلب";

		    //add event bindings
		    linkBut.addEventListener("click", function(e){
		    	axios.post('/rest/acceptCeiling', {
		    		  p_Code: cell.getRow().getData().p_Code
  	            });
		    	  alert("تم اعتماد السقف للبند: " +  cell.getRow().getData().p_Name);
    	            linkBut.disabled = true;
    	            sec.disabled = true;
		    });
		    sec.addEventListener("click", function(e){
		    	 axios.post('/rest/acceptRequested', {
		    		  p_Code: cell.getRow().getData().p_Code
   	            });
		    	 alert("تم اعتماد الطلب للبند: " +  cell.getRow().getData().p_Name);
		    	 linkBut.disabled = true;
 	            sec.disabled = true;
		    });

		    //add buttons to cell
		    cellEl.appendChild(linkBut);
		    cellEl.appendChild(sec);
			 })},  hozAlign:"center"}*/
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



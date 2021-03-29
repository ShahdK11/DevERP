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
      	          	      .get('/rest/ReadRequested').then(axios
    	          	      .get('/rest/readChartAccounts')
    	        	      .then(response => (
								  tabledata = response.data,
								  table.setData(tabledata),
								  console.log(tabledata)
								  ))))
	      
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
	textDirection:"rtl",
	headerSortElement:"<i class='fas fa-arrow-up'></i>",
	layout:"fitData",
	pagination:"local",
	columnHeaderVertAlign:"bottom",
    paginationSize:100,
	data:tabledata,
	history:true,
	dataTree:true,
    dataTreeStartExpanded:true,
    columns:[
    {title:"رقم التصنيف", field:"p_Code"},
	{title:"اسم التصنيف", field:"p_Name", hozAlign:"right"},
	{title:"الاعتماد الأصلي", field:"p_OpeningBalance", hozAlign:"center", editor:"input"},
	{title:"تعزيز", field:"p_AddedFunds", hozAlign:"center", editor:"input"},
	{title:"تخفيض", field:"p_Reduction", hozAlign:"center", editor:"input"},
	{title:"تسوية / مناقلة مدينة", field:"p_TransferDebit", hozAlign:"center", editor:"input"},
	{title:"تسوية / مناقلة دائنة", field:"p_TransferCredit", hozAlign:"center", editor:"input"},
	{title:"صافي الاعتماد", field:"p_NetBalance", hozAlign:"center", editor:"input"},
	{title:"المصروفات", field:"p_Spending", hozAlign:"center", editor:"input"},
	{title:"الارتباطات", hozAlign:"center",
		columns:[
			{title:"الاجمالي الكلي", field:"p_GrandTotal", hozAlign:"center"},
			{title:"الاعتمادات المستندية", field:"p_DocumantryCredits", hozAlign:"center"},
			{title:"المستديمة العهد المؤقتة", field:"p_Custodies", hozAlign:"center"},
		],},
		{title:"المدفوع", field:"p_Paid", hozAlign:"center", editor:"input"},	
		{title:"الوفر", field:"p_RemainingBalance", hozAlign:"center", editor:"input"},	
		{title:"نسبة", field:"p_Percentage", hozAlign:"center", editor:"input"},
	],
	rowClick: function (e, row) {
		var data = row.getData();
		axios.post('/rest/saveAccount', {
			p_Code: data.p_Code,
			p_Name: data.p_Name,
			p_OpeningBalance: data.p_OpeningBalance,
			p_AddedFunds: data.p_AddedFunds,
			p_Reduction: data.p_Reduction,
			p_TransferDebit: data.p_TransferDebit,
			p_TransferCredit: data.p_TransferCredit,
			p_NetBalance: data.p_NetBalance,
			p_Spending: data.p_Spending,
			p_GrandTotal: data.p_GrandTotal,
			p_DocumantryCredits: data.p_DocumantryCredits,
			p_Custodies: data.p_Custodies,
			p_Paid: data.p_Paid,
			p_RemainingBalance: data.p_RemainingBalance,
			p_Percentage: data.p_Percentage
		}).then(
		axios.post('/rest/saveTaccount', {
			p_Code: data.p_Code
		}).then(
		window.location.href = "./account_detail.html"
	)
	)
    },
});





;

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


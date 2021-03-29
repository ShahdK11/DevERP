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
    	          	      .get('/rest/readPrograms')
    	        	      .then(response => (
								  tabledata = response.data,
								  table.setData(tabledata),
								  console.log(tabledata)
								  )))
	      
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
	layout:"fitColumns",
	pagination:"local",
	columnHeaderVertAlign:"bottom",
    paginationSize:10,
	data:tabledata,
	history:true,
	
    columns:[{title:"رقم البرنامج", field:"p_Code"},
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
	
	]
});






//undo button
document.getElementById("history-undo").addEventListener("click", function(){
  table.undo();
});

document.getElementById("history-redo").addEventListener("click", function(){
  table.redo();
});

//redo button
var the_Function = function(cell, formatterParams, onRendered){ //plain text value

  //var formA = '<form class="" action="/upload" method="post">'
  //var inputFn = '<input type="file" id="imgupload" />' ;
  //var uploadBtnn = '<button type="submit" id="OpenImgUpload">ID upload</button></form>'
//return uploadBtnn
return "<i class='fa fa-print'>function_trigger</i>";
};




document.getElementById("add-row").addEventListener("click", function(){
	var row = {p_Code: "-1", p_Name: "اسم", p_Ceiling: "0", p_Requested: "0"};
	table.addRow(row);
	tabledata.push(row);
})

document.getElementById("add-it-to-backend").addEventListener("click", function(){
	axios.post("/rest/array", {
		array: tabledata
	})
})


$('.tabulator-tableHolder').on('scroll', function () {
    $('.tabulator-calcs-holder').scrollLeft($(this).scrollLeft());
});
$('.tabulator-calcs-holder').on('scroll', function () {
    $('.tabulator-tableHolder').scrollLeft($(this).scrollLeft());
});


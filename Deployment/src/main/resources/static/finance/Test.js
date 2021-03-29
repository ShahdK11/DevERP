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
            '<a class="nav-link" href="#">لوحة التحكم</a>'+
          '</li>'+
          '<li class="nav-item">'+
            '<a class="nav-link" href="./home.html"> النظام المالي</a>'+
          '</li>'+
           '<li class="nav-item">'+
            '<a class="nav-link" href="/hrs/home.html">نظام الموارد البشرية</a>'+
          '</li>'+
          '<li class="nav-item">'+
            '<a class="nav-link" href="{% url '+'initiative:index'+' %}">المبادرات</a>'+
          '</li>'+
             '<li class="nave-item"><a class="nav-link" href="/logout"> تسجيل خروج   </a></li>'+
             '<li class="nave-item"><a class="nav-link" href="/Deployment/home/eng/"> English   </a></li>'+

                         

           
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



var tabledata = [];

 var app = new Vue({
      el: '#body',
      mounted () {
    	  axios.post('/rest/saveBudgetYear', {
    	    		  p_Year: "2021"
    	            }).then(axios
    	          	      .get('/rest/readChapters')
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
	layout:"fitDataStretch",
	pagination:"local",
	columnHeaderVertAlign:"bottom",
    paginationSize:10,
	data:tabledata,
	history:true,
	
    columns:[
    {title:"رقم البند", field:"p_Code", editor:"input"},
	{title:"اسم البند", field:"p_Name", hozAlign:"right", editor:"input"},
	{title:"الاعتماد المطلوب (السقف)",
		columns:[
			{title:"الميزانية", field:"..",
				columns:[
					{title:"نفقات عامة",field:"..",
						columns:[
							{title:"قائم", field:"p_Ceiling", editor:"input", bottomCalc:"sum"},
							{title:"جديد", field:"p_Ceiling", editor:"input"}
						],},
					{title:"مشاريع وبرامج", field:"..",
						columns:[
							{title:"قائم", field:"p_Ceiling", editor:"input"},
							{title:"جديد", field:"p_Ceiling", editor:"input"}
						],},
				],},
			{title:"الايراد", field:"..",
				columns:[
					{title:"نفقات عامة", field:"..",
						columns:[
							{title:"قائم", field:"p_Ceiling", editor:"input"},
							{title:"جديد", field:"p_Ceiling", editor:"input"}
						],},
					{title:"مشاريع وبرامج", field:"..",
						columns:[
							{title:"قائم", field:"p_Ceiling", editor:"input"},
							{title:"جديد", field:"p_Ceiling", editor:"input"}
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
							{title:"قائم", field:"p_Requested", editor:"input", bottomCalc:"sum"},
							{title:"جديد", field:"p_Requested", editor:"input"}
						],},
					{title:"مشاريع وبرامج", field:"..",
						columns:[
							{title:"قائم", field:"p_Requested", editor:"input"},
							{title:"جديد", field:"p_Requested", editor:"input"}
						],},
				],},
			{title:"الايراد", field:"..",
				columns:[
					{title:"نفقات عامة", field:"..",
						columns:[
							{title:"قائم", field:"p_Requested", editor:"input"},
							{title:"جديد", field:"p_Requested", editor:"input"}
						],},
					{title:"مشاريع وبرامج", field:"..",
						columns:[
							{title:"قائم", field:"p_Requested", editor:"input"},
							{title:"جديد", field:"p_Requested", editor:"input"}
						],},
				],},
		],},
		{title:"الاجمالي حسب الطلب", field:"p_Requested",  hozAlign:"center",  editor:"input", bottomCalc:"sum", widthGrow:2},
		{title:"الفرق", field:"..",  hozAlign:"center",  editor:"input"},
		{title:"النسبة", field:"..",  hozAlign:"center",  editor:"input"}
    ],
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


// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("add-column");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

document.getElementById("submit-column").addEventListener("click", function(){
	modal.style.display = "none";
	var column = document.getElementById("new-column").value;
   table.addColumn({title:column, field: column ,width:100, align:"center",editor:"input"})
   for(var i = 0 ; i < tabledata.length; i++){
	   table.updateData([{id:(i+1), Z:(i+10)}]);
   }
   
   console.log(tabledata)
});

document.getElementById("submit").addEventListener("click", function(){
	document.getElementById("table-after-edit").innerHTML = "";
	for(var i = 0; i < tabledata.length; i++){
	document.getElementById("table-after-edit").innerHTML += JSON.stringify(tabledata[i]) + "<br>";
	}
})

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



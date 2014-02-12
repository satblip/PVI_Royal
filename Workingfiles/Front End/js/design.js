$(document).ready(function(e) {

// Core
var loadPage = function(a,b,c,d,e,element){
	$('#page' + a +', #page' + b +', #page' + d +', #page' + e).hide();
	$('#page' + c).show();
	$('#home_link, #services_link, #repairs_link, #concierge_link, #others_link').removeClass('active');
	element.addClass('active');	
}


// Triggers
$('#home_link').click(function(){
	loadPage(2,3,1,4,5,6);
});
$('#services_link').click(function(){
	loadPage(1,3,2,4,5,$(this));
});

$('#repairs_link').click(function(){
	loadPage(1,2,3,4,5,$(this));
});

$('#concierge_link').click(function(){
	loadPage(1,3,4,2,5,$(this));
});
$('#others_link').click(function(){
	loadPage(1,3,5,4,2,$(this));
});

});

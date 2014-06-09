$(document).ready(function(e) {

// Core
var loadPage = function(a,b,element){
	$('#page' + a).hide();
	$('#page' + b).show();
	$('#home_link, #info_link').removeClass('active');
	element.addClass('active');	
}



// Triggers
$('#home_link').click(function(){
	loadPage(2,1,$(this));
});
$('#info_link').click(function(){
	loadPage(1,2,$(this));
});

// DATE MAID SERVICE

$( "#changemaidday" ).click(function() {
  $('#daa').show();
  $( "#datez" ).hide();
  $("#dayz").show();
});

$( "#addmaidday" ).click(function() {
  $('#daa').show();
  $( "#datez" ).show();
  $("#dayz").hide();
});

});

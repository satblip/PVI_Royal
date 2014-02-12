$(document).ready(function(e) {

// Core
var loadPage = function(a,b,c,d){
	$('#page' + b +', #page' + c +', #page' + d).hide();
	$('#page' + a).show();
	$('#menu' + b +', #menu' + c +', #menu' + d).removeClass('active');
	$('#menu' + a).addClass('active');	
}


// Triggers
$('#tickets_link').click(function(e){
	e.preventDefault();
	loadPage(1,2,3,4);
});
$('#messages_link').click(function(e){
	e.preventDefault();
	loadPage(2,3,1,4);
});

$('#residents_link').click(function(e){
	e.preventDefault();
	loadPage(3,1,2,4);
});

$('#carnet_link').click(function(e){
	e.preventDefault();
	loadPage(4,1,2,3);
});

// JAVA MODALES TICKETS

$('#ticket_modif_submit').click(function(){

	$('#modal_ticket_modif_1').fadeOut();
	setTimeout(function() {
		$('#modal_ticket_modif_2').fadeIn();
	}, 600);
});

$('#ticket_modif_back').click(function(){

	$('#modal_ticket_modif_2').fadeOut();
	setTimeout(function() {
		$('#modal_ticket_modif_1').fadeIn();
	}, 600);
});

$('#ticket_modif_submit_2').click(function(){
	$('#ticket-modif-1').modal('hide');
	setTimeout(function() {
		$('#modal_ticket_modif_2').fadeOut();
		$('#modal_ticket_modif_1').fadeIn();	
	}, 1000);
});

// JAVA MODALES Messages

$('#modale_message_repondre').click(function(){

	$('#modal_message_content_1').fadeOut();
	setTimeout(function() {
		$('#modal_message_content_2').fadeIn();
	}, 600);
});

$('#modal_message_back').click(function(){

	$('#modal_message_content_2').fadeOut();
	setTimeout(function() {
		$('#modal_message_content_1').fadeIn();
	}, 600);
});

$('#modal_message_submit_2').click(function(){
	$('#message-modif-1').modal('hide');
	setTimeout(function() {
		$('#modal_message_content_2').fadeOut();
		$('#modal_message_content_1').fadeIn();	
	}, 1000);
});

// RESIDENT MODIFIER

$('#edit_residents').click(function(){

	$('#resident_info').fadeOut();
	setTimeout(function() {
		$('#resident_modifier').fadeIn();
	}, 400);
});

$('#resident_modif_cancel').click(function(){

	$('#resident_modifier').fadeOut();
	setTimeout(function() {
		$('#resident_info').fadeIn();
	}, 400);
});

$('#resident_modif_submit').click(function(){

	$('#resident_modifier').fadeOut();
	setTimeout(function() {
		$('#resident_info').fadeIn();
	}, 400);
	
});

	

});

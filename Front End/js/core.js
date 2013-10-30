// Trigggers

// Repairs File Upload
$('input[id=form_issue_file]').change(function() {
	$('#form_issue_file_view').val($(this).val());
});

// Contact File Upload
$('input[id=form_contact_file]').change(function() {
	$('#form_contact_file_view').val($(this).val());
});

$(document).ready(function() {
	$.ajax({
		method: 'GET',
		url: 'http://nflarrest.com/api/v1/crime',
		dataType: 'json',
		success: onSuccess
	});


	function onSuccess(responseData) {
		//responseData.forEach(function(crime) {
			console.log (responseData);
		$("#crimes").append(`<p>${crime.Category} + ${crime.arrest_count}</p>`);

		//})
	};
});


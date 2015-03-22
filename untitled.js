var getInspiration = function(tags) {
	
	var request = {
		tag: tags,
		period: all_time};

	var result = $.ajax({
		url: "http://api.stackexchange.com/2.2//tags/{tag}/top-answerers/{period}",
		data: request,
		dataType: "jsonp",
		type: "GET",
	})
	.done(function(result){
		console.log(result);
	})
}

var showInspiration = function(answerer) {
	var result = $('.templates .answerer').clone();

	var answererElem = result.find('.answerer-name a');
	answererElem.attr('href', question.link);
	answererElem.text(answerer.display_name);

	var reputation = result.find('.answerer-rep');
	reputation.text(answerer.reputation);
}
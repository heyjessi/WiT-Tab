$(function(){
	console.log("page is loaded!");

	$.get("data/women-in-tech.csv", function(data) {
		var result = $.csv.toArrays(data);
		console.log(result);
	});
});
$(function(){
	console.log("page is loaded!");

	var backgroundcolors = ["#FFE0B3", "#B8FFE8", "#FF99B5", "#FFEF94", "#FFCCD5", "#B8F2FF", "#D199FF", "#FF8E8A"];

	$.get("data/women-in-tech.csv", function(data) {
		// load csv data into an array
		var result = $.csv.toArrays(data);

		// get random number for array index
		var number = Math.floor((Math.random() * (result.length - 1))) + 1;

		var person = result[number][1];
		// set html name
		document.getElementById("name").innerHTML = person;

		// get image for html
		var img = new Image();
		var div = document.getElementById("photo");

		img.onload = function() {
			div.appendChild(img);
		}

		img.src = result[number][0];
		// get info for html
		document.getElementById("info").innerHTML = result[number][2];
		// add wikipedia link for person's page
		var str = "read more on wikipedia";
		var result = str.link("https://en.wikipedia.org/wiki/" + person);
		document.getElementById("link").innerHTML = result;

		// set background color
		var color = Math.floor((Math.random() * (backgroundcolors.length)));

		document.body.style.backgroundColor = backgroundcolors[color];
		// add facebook sharing link
		$("#share").html('<a href="'+ "https://www.facebook.com/sharer/sharer.php?u=en.wikipedia.org/wiki/" + person + '"><i class="fab fa-facebook"></i></a>'); 

	});
});
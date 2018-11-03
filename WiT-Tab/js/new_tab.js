$(function(){
	console.log("page is loaded!");

	var backgroundcolors = ["#FFE0B3", "#B8FFE8", "#FF99B5"]

	$.get("data/women-in-tech.csv", function(data) {
		var result = $.csv.toArrays(data);
		console.log(result);

		var number = Math.floor((Math.random() * (result.length - 1))) + 1;
		//console.log(number);
		console.log (result[number][1]);
		document.getElementById("country").innerHTML = result[number][1];

		var img = new Image();
		var div = document.getElementById("photo");

		img.onload = function() {
			div.appendChild(img);
		}

		img.src = result[number][0]

		document.getElementById("info").innerHTML = result[number][2];

		var str = "read more on wikipedia";
		//var result = str.link("https://en.wikipedia.org/w/api.php?format=json&action=query&prop=extracts&exintro&explaintext&redirects=1&titles=" + result[number][1]);
		var result = str.link("https://en.wikipedia.org/wiki/" + result[number][1]);
		document.getElementById("link").innerHTML = result;

		var color = Math.floor((Math.random() * (backgroundcolors.length)));
		console.log(color);
		document.body.style.backgroundColor = backgroundcolors[color];

		
		var facebook = link("https://www.facebook.com/sharer/sharer.php?u=" + "en.wikipedia.org/wiki/" + result[number][1]);
		document.getElementById("button").innerHTML = facebook;



		// var link = document.createElement('a');
		// var linkText = document.createTextNode("read more");

		// a.appendChild(linkText);
		// a.href = "https://en.wikipedia.org/w/api.php?format=json&action=query&prop=extracts&exintro&explaintext&redirects=1&titles=" + result[number][1];
		// document.getElementById("link").appendChild(a);

		//document.getElementById("link").innerHTML = "https://en.wikipedia.org/w/api.php?format=json&action=query&prop=extracts&exintro&explaintext&redirects=1&titles=" + result[number][1];
	});
});
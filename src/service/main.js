'use strict';

var textAllStreets = `
<br/> Напишіть щось.
<p style="font-size:0.8rem"><a href="..">інше місто</a></p>`

function search_streets() {
	var searchSymbols = document.getElementById('input_symbols').value;

	if (searchSymbols == "") {
		document.getElementById('result_div').innerHTML = textAllStreets;
		return;
	}

	var resultText = "";

	for (var i = 0; i < streets.length; i++) {
		if (checkStreet(streets[i], searchSymbols)) {
			resultText = resultText + "<br>" + streets[i];
		};
	};

	document.getElementById('result_div').innerHTML = resultText;
}

function checkStreet(street, searchSymbols) {
	var iof;
	street = street.toLowerCase();
	searchSymbols = searchSymbols.toLowerCase();

	for (var i = 0; i < searchSymbols.length; i++) {
		iof = street.indexOf(searchSymbols.charAt(i));
		if (iof == -1) return false;
		street = street.slice(0, iof) + street.slice(iof + 1);
	};

	return true;
}

function search_streets_by_part() {
	var searchPart = document.getElementById('input_part').value;

	if (searchPart == "") {
		document.getElementById('result_div').innerHTML = textAllStreets;
		return;
	}

	var resultText = "";

	for (var i = 0; i < streets.length; i++) {
		if (checkStreetPart(streets[i], searchPart)) {
			resultText = resultText + "<br>" + streets[i];
		};
	};

	document.getElementById('result_div').innerHTML = resultText;
}

function checkStreetPart(street, searchPart) {
	street = street.toLowerCase();
	searchPart = searchPart.toLowerCase();
	if (street.indexOf(searchPart) == -1) return false;
	return true;
}

function init() {
	var input_element = document.getElementById('input_symbols');
	input_element.onkeyup = search_streets;
	var input_part = document.getElementById('input_part');
	input_part.onkeyup = search_streets_by_part;
	document.getElementById('result_div').innerHTML = textAllStreets;
}
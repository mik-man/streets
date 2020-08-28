'use strict';
var store = {
	city: '',
	textAllStreets: `
<br/> Напишіть щось.
<p style="font-size:0.8rem"><a href="../index.html">інше місто</a></p>`,
};

function search_streets() {
	const { textAllStreets } = store;
	var searchSymbols = document.getElementById('input_symbols').value;

	if (searchSymbols == "") {
		document.getElementById('result_div').innerHTML = textAllStreets;
		return;
	}

	let resultText = "";
	for (let i = 0; i < streets.length; i++) {
		if (checkStreet(streets[i], searchSymbols)) {
			resultText = addStreet(resultText, i);
		};
	};

	document.getElementById('result_div').innerHTML = resultText;
}

function checkStreet(street, searchSymbols) {
	var iof;
	street = street.toLowerCase();
	searchSymbols = searchSymbols.toLowerCase();

	for (let i = 0; i < searchSymbols.length; i++) {
		iof = street.indexOf(searchSymbols.charAt(i));
		if (iof == -1) return false;
		street = street.slice(0, iof) + street.slice(iof + 1);
	};

	return true;
}

function search_streets_by_part() {
	const { textAllStreets } = store;
	const searchPart = document.getElementById('input_part').value;

	if (searchPart == "") {
		document.getElementById('result_div').innerHTML = textAllStreets;
		return;
	}

	let resultText = "";
	for (let i = 0; i < streets.length; i++) {
		if (checkStreetPart(streets[i], searchPart)) {
			resultText = addStreet(resultText, i);
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
	const { textAllStreets } = store;
	var input_element = document.getElementById('input_symbols');
	input_element.onkeyup = search_streets;
	var input_part = document.getElementById('input_part');
	input_part.onkeyup = search_streets_by_part;
	document.getElementById('result_div').innerHTML = textAllStreets;
}

function addStreet(text, index) {
	const { city } = store;
	const street = streets[index];
	const href = `"https://maps.google.com/?q=${city}, ${street}"`;
	return `${text} <br> <a class="street" href=${href} target="_blank"> ${street} </a>`;
	// <a href="https://maps.google.com/?q=Запорожье, Фучика Юлиуса" target="_blank">Фучика Юлиуса</a>
}

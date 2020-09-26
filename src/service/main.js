'use strict';
var store = {
	city: '',
	textAllStreets: `
<br/> Напишіть щось.
<p style="font-size:0.8rem"><a href="../index.html">інше місто</a></p>`,
};

function search_streets() {
	const searchSymbols = document.getElementById('input_symbols').value;
	checkIsAnySymbols(searchSymbols);
	if (searchSymbols === '') return;

	let resultText = "";
	for (let i = 0; i < streets.length; i++) {
		if (checkStreet(streets[i], searchSymbols)) {
			resultText = addStreet(resultText, i);
		};
	};
	document.getElementById('div_result').innerHTML = resultText;
}

function checkStreet(street, searchSymbols) {
	street = street.toLowerCase();
	searchSymbols = searchSymbols.toLowerCase();
	let iof;
	for (let i = 0; i < searchSymbols.length; i++) {
		iof = street.indexOf(searchSymbols.charAt(i));
		if (iof == -1) return false;
		street = street.slice(0, iof) + street.slice(iof + 1);
	};

	return true;
}

function search_streets_by_part() {
	const searchPart = document.getElementById('input_part').value;
	checkIsAnySymbols(searchPart);
	if (searchPart === '') return;

	let resultText = "";
	for (let i = 0; i < streets.length; i++) {
		if (checkStreetPart(streets[i], searchPart)) {
			resultText = addStreet(resultText, i);
		};
	};

	document.getElementById('div_result').innerHTML = resultText;
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
	checkIsAnySymbols('');
}

function addStreet(text, index) {
	const { city } = store;
	const street = streets[index];
	const href = `"https://maps.google.com/?q=${city}, ${street}"`;
	return `${text} <br> <a class="street" href=${href} target="_blank"> ${street} </a>`;
	// <a href="https://maps.google.com/?q=Запорожье, Фучика Юлиуса" target="_blank">Фучика Юлиуса</a>
}

function checkIsAnySymbols(searchSymbols) {
	const divEmpty = document.getElementById('div_empty');
	if (searchSymbols !== '') {
		divEmpty.style.display = 'none';
		return;
	}
	divEmpty.style.display = 'block';
	document.getElementById('div_result').innerHTML = '<br/>';
}
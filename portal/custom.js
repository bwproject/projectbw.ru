$(document).ready(function() {
	if (getCookie('cookieAlert') == null || getCookie('cookieAlert') !== 'false') {
		$('#cookie').show();
		$('#cookie').on('closed.bs.alert', function () {
			document.cookie = 'cookieAlert=false; path=/';
		});
		$('html, body').animate({
			scrollTop: 0
		}, 1000);
	}
});

(function() {
	// $('#aboveRoof').hide();
	if (getParameterByName('bg') != null) {
		const bg = getParameterByName('bg');
		const html = $('html');
		if (bg == 1) html.addClass('basalt_deltas');
		else if (bg == 2) html.addClass('crimson_forest');
		else if (bg == 3) html.addClass('soul_sand_valley');
		else if (bg == 4) html.addClass('warped_forest');
	}
	else {
		const bg = Math.floor(Math.random() * 4) + 1;
		const html = $('html');
		if (bg == 1) html.addClass('basalt_deltas');
		else if (bg == 2) html.addClass('crimson_forest');
		else if (bg == 3) html.addClass('soul_sand_valley');
		else if (bg == 4) html.addClass('warped_forest');
	}
})();

const oX = $('#oX');
const oY = $('#oY');
const oZ = $('#oZ');
const nX = $('#nX');
const nY = $('#nY');
const nZ = $('#nZ');

const X1 = $('#X1');
const Y1 = $('#Y1');
const Z1 = $('#Z1');
const X2 = $('#X2');
const Y2 = $('#Y2');
const Z2 = $('#Z2');
const D = $('#D');

function calcOverToNether() {
	console.log('calcOverToNether');
	const sx = parseInt(oX.val());
	const sy = parseInt(oY.val());
	const sz = parseInt(oZ.val());

	if (sy < 1 || sy >= 256) {
		oY.css('background-color', '#f2dede');
		oY.css('color', '#a94442');
		$('#aboveRoof').hide();
	}
	else if(sy > 123) {
		oY.css('background-color', '#fff3cd');
		oY.css('color', '#ffc107');
		$('#aboveRoof').show();
	}
	else {
		oY.css('background-color', '#fff');
		oY.css('color', '#4a4a4a');
		$('#aboveRoof').hide();
	}

	nX.val(Math.floor(sx / 8));
	nY.val(sy);
	nZ.val(Math.floor(sz / 8));
}
function calcNetherToOver() {
	console.log('calcNetherToOver');
	const sx = parseInt(nX.val());
	const sy = parseInt(nY.val());
	const sz = parseInt(nZ.val());

	if (sy < 1 || sy >= 256) {
		nY.css('background-color', '#f2dede');
		nY.css('color', '#a94442');
		$('#aboveRoof').hide();
	}
	else if(sy > 123) {
		nY.css('background-color', '#fff3cd');
		nY.css('color', '#ffc107');
		$('#aboveRoof').show();
	}
	else {
		nY.css('background-color', '#fff');
		nY.css('color', '#4a4a4a');
		$('#aboveRoof').hide();
	}

	oX.val(sx * 8);
	oY.val(sy);
	oZ.val(sz * 8);
}
function clearOverNether() {
	console.log('clearOverNether');
	oX.val(0);
	oY.val(64);
	oZ.val(0);
	nX.val(0);
	nY.val(64);
	nZ.val(0);
	oY.css('background-color', '#fff');
	oY.css('color', '#4a4a4a');
}

function calcDist() {
	console.log('calcDist');
	let dx, dy, dz, result;

	dx = parseInt(X2.val()) - parseInt(X1.val());
	dy = parseInt(Y2.val()) - parseInt(Y1.val());
	dz = parseInt(Z2.val()) - parseInt(Z1.val());

	result = Math.sqrt(Math.pow(dx,2) + Math.pow(dy,2) + Math.pow(dz,2));

	D.val(result);

	// if (result <= 33) {
	// 	D.css('background-color', '#f2dede');
	// 	D.css('color', '#a94442');
	// }
	// else {
	// 	D.css('background-color', '#dff0d8');
	// 	D.css('color', '#3c763d');
	// }
}
function clearDist() {
	console.log('clearDist');
	X1.val(0);
	Y1.val(0);
	Z1.val(0);
	X2.val(0);
	Y2.val(0);
	Z2.val(0);
	D.val(0);
	D.css('background-color', '#fff');
	D.css('color', '#4a4a4a');
}

function isNumberKey(e) {
	const chr = (e.which) ? e.which : e.keyCode;
	return (chr <= 57) || (chr === 189);
}



function getParameterByName(name, url) {
	if (!url) {
		url = window.location.href;
	}
	name = name.replace(/[\[\]]/g, "\\$&");
	let regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
		results = regex.exec(url);
	if (!results) return null;
	if (!results[2]) return '';
	return decodeURIComponent(results[2].replace(/\+/g, " "));
}
function getCookie(cname) {
	const name = cname + "=";
	const decodedCookie = decodeURIComponent(document.cookie);
	const ca = decodedCookie.split(';');
	for(let i = 0; i <ca.length; i++) {
		let c = ca[i];
		while (c.charAt(0) === ' ') {
			c = c.substring(1);
		}
		if (c.indexOf(name) === 0) {
			return c.substring(name.length, c.length);
		}
	}
	return null;
}
let toogle = document.getElementById('toogle');
let dark = document.querySelector('.dark');
let footer = document.querySelector('.footer');
let searchField = document.querySelector('.search-field');
let btn = document.querySelector('.btn');
let btn1 = document.querySelector('.btn1');
let menu = document.querySelector('.menu');
let user = document.querySelector('.user');
let findOut = document.querySelector('.find-out');
let languages = document.querySelector('.languages');
let hrbreak = document.querySelector( '.break' );
let saveDarkMode = localStorage.getItem('darkMode');

function darkModeOn() {
	dark.style.backgroundColor = 'rgb(36,35,35)';
	footer.style.backgroundColor = 'rgb(31,30,30)';
	dark.style.color = 'lightgrey';
	footer.style.color = 'grey';
	searchField.style.backgroundColor = 'rgb(31,35,35)';
	searchField.style.color = 'white';
	searchField.style.border = '1px solid rgb(95.95,95)';
	btn.style.backgroundColor = 'rgb(53,52,52)';
	btn1.style.backgroundColor = 'rgb(53,52,52)';
	btn.style.color = 'lightgrey';
	btn1.style.color = 'lightgrey';
	menu.src = 'images/menu_2.png';
	user.src = 'images/user_2.png';
	findOut.style.color = 'rgb(39,124,223)';
	languages.style.color = 'rgb(39,124,223)';
	hrbreak.style.border = '1px solid rgb(95,95,95)';
	localStorage.setItem('darkMode', 'enabled');
}

function darkModeOff() {
	dark.style.backgroundColor = 'white';
	footer.style.backgroundColor = 'rgb(238,238,238)';
	dark.style.color = 'black';
	footer.style.color = 'rgb(102,100,100)';
	searchField.style.backgroundColor = 'white';
	searchField.style.color = 'black';
	btn.style.backgroundColor = 'rgb(248,248,248)';
	btn1.style.backgroundColor = 'rgb(248,248,248)';
	btn.style.color = 'rgb(88,88,88)';
	btn1.style.color = 'rgb(88,88,88)';
	menu.src = 'images/menu.png';
	user.src = 'images/user.png';
	findOut.style.color = 'blue';
	languages.style.color = 'blue';
	hrbreak.style.border = '1px solid rgb(223,223,223)';
	localStorage.setItem('darkMode',  null);
}

toogle.addEventListener('click', function () {
	if (toogle.checked) darkModeOn();
	else darkModeOff();
});

if (saveDarkMode === 'enabled') {
	toogle.checked = true;
	darkModeOn();
}

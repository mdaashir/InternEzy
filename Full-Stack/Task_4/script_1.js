// @ts-nocheck
/* External JS */
let cityName = document.getElementById('city');

cityName.addEventListener('input', function () {
	let city = cityName.value;
	// getWeather(city);
});

function getWeatherIcon(iconCode) {
	const iconBaseUrl = 'https://openweathermap.org/img/wn/';
	const iconSize = '@2x.png';
	return `<img src="${iconBaseUrl}${iconCode}${iconSize}" alt="Weather Icon">`;
}

document.addEventListener('DOMContentLoaded', function () {
	// getWeather();
	setInterval(getWeather, 900000);
});

/* External JS */
let cityName = document.getElementById('city');
let weatherTemp = document.querySelector('.weather-temp');
let dayName = document.querySelector('.date-dayname');
let dateDay = document.querySelector('.date-day');
let weatherIconElement = document.querySelector('.weather-icon');
let locationName = document.querySelector('.location');
let description = document.querySelector('.weather-desc');
let humidityValue = document.querySelector('.humidity .value');
let windValue = document.querySelector( '.wind .value' );

const dayElements = document.querySelectorAll('.day-name');
const tempElements = document.querySelectorAll('.day-temp');
const iconElements = document.querySelectorAll('.day-icon');

const todayDate = new Date().toLocaleDateString( 'en-US', { weekday: 'long' } );

cityName.addEventListener( 'input', getWeather );

async function getWeather() {
	try {
		var city = cityName.value;

		const response = await axios.get(
			'https://api.openweathermap.org/data/2.5/forecast',
			{
				params: {
					q: city,
					appid: '54a57bc234ad752a4f59e59cd372201d',
					units: 'metric',
				},
			}
		);
		const currentTemperature = response.data.list[0].main.temp;

		weatherTemp.textContent = Math.round(currentTemperature) + 'ºC';

		const forecastData = response.data.list;

		const dailyForecast = {};
		forecastData.forEach((data) => {
			const day = new Date(data.dt * 1000).toLocaleDateString('en-US', {
				weekday: 'long',
			});
			if (!dailyForecast[day]) {
				dailyForecast[day] = {
					minTemp: data.main.temp_min,
					maxTemp: data.main.temp_max,
					description: data.weather[0].description,
					humidity: data.main.humidity,
					windSpeed: data.wind.speed,
					icon: data.weather[0].icon,
				};
			} else {
				dailyForecast[day].minTemp = Math.min(
					dailyForecast[day].minTemp,
					data.main.temp_min
				);
				dailyForecast[day].maxTemp = Math.max(
					dailyForecast[day].maxTemp,
					data.main.temp_max
				);
			}
		});

		dayName.textContent = todayDate;

		const date = new Date().toUTCString();
		const extractedDateTime = date.slice(5, 16);
		dateDay.textContent = extractedDateTime.toLocaleString();

		const currentWeatherIconCode = dailyForecast[todayDate].icon;

		weatherIconElement.innerHTML = getWeatherIcon(currentWeatherIconCode);

		locationName.textContent = response.data.city.name;
		description.textContent = dailyForecast[todayDate].description
			.split(' ')
			.map((word) => word.charAt(0).toUpperCase() + word.slice(1))
			.join(' ');

		humidityValue.textContent = dailyForecast[todayDate].humidity + ' %';
		windValue.textContent = dailyForecast[todayDate].windSpeed + ' m/s';

		dayElements.forEach((dayElement, index) => {
			const day = Object.keys(dailyForecast)[index];
			const data = dailyForecast[day];
			dayElement.textContent = day;
			tempElements[index].textContent = `${Math.round(data.minTemp)}º / ${Math.round(data.maxTemp)}º`;
			iconElements[index].innerHTML = getWeatherIcon(data.icon);
		});
	} catch (error) {
		console.error(error.message);
	}
}

function getWeatherIcon(iconCode) {
	const iconBaseUrl = 'https://openweathermap.org/img/wn/';
	const iconSize = '@2x.png';
	return `<img src="${iconBaseUrl}${iconCode}${iconSize}" alt="Weather Icon">`;
}

document.addEventListener('DOMContentLoaded', function () {
	getWeather();
	setInterval(getWeather, 900000);
});

//State
let curr_city = "London";
let units = "metric";

//Selectors
let city = document.querySelector(".weather_search_city");
let dateTime = document.querySelector(".weather_dateNtime");
let weatherForecast = document.querySelector(".forecast_weather");
let weather_temperature = document.querySelector(".weather_temperature");
let weatherIcon = document.querySelector(".icon_weather");
let weatherMinMax = document.querySelector(".minMax_weather");
// let weatherFeelsLike = document.querySelector(".weather_feels_like");
let weatherHumidity = document.querySelector(".weather_humidity");
let weatherWind = document.querySelector(".weather_wind");
let weatherPressure = document.querySelector(".weather_gauge");

function convertTimeStamp(timestamp, timezone) {
    //Converting seconds to hour
    const convertTimezone = timezone / 3600;

    const date = new Date(timestamp * 1000);

    const options = {
        weekday: "long",
        day: "numeric",
        month: "long",
        year: "numeric",
        hour: "numeric",
        minute: "numeric",
        timeZone: `Etc/GMT${convertTimezone >= 0 ? "-" : "+"}${Math.abs(convertTimezone)}`,
        hour12: true,
    };
    return date.toLocaleString("en-US", options);
}

//Converting country code to name
function convertCountryCode(country) {
    let regionNames = new Intl.DisplayNames(["en"], { type: "region" });
    return regionNames.of(country);
}

function getWeather() {
    const API_KEY = 'b0bd8bbd5f515361fdc416b758befdc5';

    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${curr_city}&appid=${API_KEY}&units=${units}`)
        .then(res => res.json())
        .then(data => {
            console.log(data);
            city.innerHTML = `${data.name}, ${convertCountryCode(data.sys.country)}`;
            dateTime.innerHTML = convertTimeStamp(data.dt, data.timezone);
            weatherForecast.innerHTML = `<p>${data.weather[0].main}</p>`;
            weather_temperature.innerHTML = `${data.main.temp.toFixed()}&#176`;
            weatherIcon.innerHTML = `<img src="http://openweathermap.org/img/wn/${data.weather[0].icon}.png" alt="Weather Icon"/>`;
            weatherMinMax.innerHTML = `<p>Min: ${data.main.temp_min.toFixed()}&#176 </p>
                                        <p>Max: ${data.main.temp_max.toFixed()}&#176 </p>`;
            // weatherFeelsLike.innerHTML = `${data.main.feels_like.toFixed()}&#176`;
            weatherHumidity.innerHTML = `${data.main.humidity}%`;
            weatherWind.innerHTML = `${data.wind.speed}m/s`;
            weatherPressure.innerHTML = `${data.main.pressure}hpa`;
        })
        .catch(error => {
            console.error('Error fetching weather data:', error);
        });
}

document.addEventListener("DOMContentLoaded", getWeather);

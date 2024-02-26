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
let weatherFeelsLike = document.querySelector(".weather_feels_like");
let weatherHumidity = document.querySelector(".weather_humidity");
let weatherWind = document.querySelector(".weather_wind");
let weatherPressure = document.querySelector(".weather_gauge");

//Search function
document.querySelector(".search-weather").addEventListener
('submit', e => {
    let search = document.querySelector(".weather_searchForm");
    //Preventing default action
    e.preventDefault();
    //Changes current city 
    curr_city = search.value;
    //Gets the weather forecast
    getWeather();
    //Clearing form
    search.value = "";
})

//Celcius to Fahrenheit and Vice-Versa
document.querySelector(".weather_temp_celcius").addEventListener
('click', () => {
    if(units !== "metric"){
        //Changing to metric
        units = "metric"
        //Getting the weather forecast
        getWeather();
    }
})

document.querySelector(".weather_temp_fahrenheit").addEventListener
('click', () => {
    if(units !== "imperial"){
        units = "imperial"
        getWeather();
    }
})

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
            weather_temperature.innerHTML = `${data.main.temp.toFixed()}${units === "imperial" ? "&#176F" : "&#176C"}`;
            weatherIcon.innerHTML = `<img src="http://openweathermap.org/img/wn/${data.weather[0].icon}.png" alt="Weather Icon"/>`;
            weatherMinMax.innerHTML = `<p>Min: ${data.main.temp_min.toFixed()}&#176 </p>
                                        <p>Max: ${data.main.temp_max.toFixed()}&#176 </p>`;
            weatherFeelsLike.innerHTML = `${data.main.feels_like.toFixed()}${units === "imperial" ? "&#176F" : "&#176C"}`;
            weatherHumidity.innerHTML = `${data.main.humidity}%`;
            weatherWind.innerHTML = `${data.wind.speed}${units === "imperial" ? "mph" : "m/s"}`;
            weatherPressure.innerHTML = `${data.main.pressure}hpa`;
        })
        .catch(error => {
            console.error('Error fetching weather data:', error);
        });
}

document.addEventListener("DOMContentLoaded", getWeather);

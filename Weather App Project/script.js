// Romika Chaudhary
// Feb 22, 2024
// File Name: script.js 

//Declaring current city and units
let curr_city = "Sarnia";
let units = "metric";

//Accessing Selectors
let city = document.querySelector(".weather_search_city");
let dateTime = document.querySelector(".weather_dateNtime");
let weatherForecast = document.querySelector(".forecast_weather");
let weatherTemperature = document.querySelector(".weather_temperature");
let weatherIcon = document.querySelector(".icon_weather");
let weatherMinMax = document.querySelector(".minMax_weather");
let weatherFeelsLike = document.querySelector(".weather_feels_like");
let weatherHumidity = document.querySelector(".weather_humidity");
let weatherWind = document.querySelector(".weather_wind");
let weatherPressure = document.querySelector(".weather_gauge");

//Search functionality
document.querySelector(".search-weather").addEventListener
('submit', e => {
    let search = document.querySelector(".weather_searchForm");
    //Preventing default action
    e.preventDefault();
    //Changes current city according to the value entered
    curr_city = search.value;
    // if(search.value === ""){
    //     alert("Please enter a city name");
    // }
    //Gets the weather forecast
    getWeather();
    //Clearing input text box after each search
    search.value = "";
})

//Converting Celcius to Fahrenheit and Vice-Versa
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
        //Setting the timezone for date formatting
        timeZone: `Etc/GMT${convertTimezone >= 0 ? "-" : "+"}${Math.abs(convertTimezone)}`,
        //Specifying to use 12 hour time format
        hour12: true,
    };
    return date.toLocaleString("en-US", options);
}

//Converting country code to Country name
function convertCountryCode(country) {
    let regionNames = new Intl.DisplayNames(["en"], { type: "region" });
    //Returns the display name of provided country codes
    return regionNames.of(country);
}

//Main function with API call
function getWeather() {
    const API_KEY = 'b0bd8bbd5f515361fdc416b758befdc5';
    //Validation if user input for city is not entered
    if(!curr_city){
        alert("Please enter a city!");
        return;
    }
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${curr_city}&appid=${API_KEY}&units=${units}`)
    .then(res => {
        if (!res.ok) {
            throw new Error('City not found');
        }
        return res.json();
    })
    .then(data => {
        console.log(data);
        //Process the received data
        city.innerHTML = `${data.name}, ${convertCountryCode(data.sys.country)}`;
        dateTime.innerHTML = convertTimeStamp(data.dt, data.timezone);
        weatherForecast.innerHTML = `<p>${data.weather[0].main}</p>`;
        weatherTemperature.innerHTML = `${data.main.temp.toFixed()}${units === "imperial" ? "&#176F" : "&#176C"}`;
        weatherIcon.innerHTML = `<img src="http://openweathermap.org/img/wn/${data.weather[0].icon}.png" alt="Weather Icon"/>`;
        weatherMinMax.innerHTML = `<p>H: ${data.main.temp_min.toFixed()}&#176 </p>
                                    <p>L: ${data.main.temp_max.toFixed()}&#176 </p>`;
        weatherFeelsLike.innerHTML = `${data.main.feels_like.toFixed()}${units === "imperial" ? "&#176F" : "&#176C"}`;
        weatherHumidity.innerHTML = `${data.main.humidity}%`;
        weatherWind.innerHTML = `${data.wind.speed}${units === "imperial" ? "mph" : "m/s"}`;
        weatherPressure.innerHTML = `${data.main.pressure}hpa`;
})
    .catch(error => {
        console.error('Error fetching weather data:', error);
        if (error.message === 'City not found') {
            alert("Invalid city name!");
        }
    });
}
//After the doc will be fully loaded and parsed, getWeather() function will be called
document.addEventListener("DOMContentLoaded", getWeather);

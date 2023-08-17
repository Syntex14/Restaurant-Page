export let weatherCity;
export let weatherState;
export let weatherCondition;
export let weatherTemperature;
export let weatherIcon = "#";

export function fetchWeatherData(locationCityName) {
    return fetch("http://api.weatherapi.com/v1/forecast.json?key=f8a0286f0fe64d2897e133302231408&q=Denton&days=1&aqi=no&alerts=no")
        .then(res => {return res.json()})
        .then(data => {
            let weatherData = data;
            console.log(weatherData);
            connectWeatherData(weatherData);
        });
}

export function connectWeatherData (weatherData) {
    weatherCity = weatherData.location.name;
    weatherState = weatherData.location.region;
    weatherCondition = weatherData.current.condition.text;
    weatherTemperature = weatherData.current.temp_f;
    weatherIcon = weatherData.current.condition.icon;
 
}





// going to need:
    // currentDayConditions
    // currentDayTemps
    // currentDay
    // currentTime
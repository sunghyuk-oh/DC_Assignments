// DESCRIPTION
// Go to https://openweathermap.org/ and register for a free account. OpenWeatherMap will send you an email with all the required information on how to access their API.
// Use a similar endpoint to fetch the weather details and fetch the min temperature, max temperature, pressure and the name of the city.
// http://api.openweathermap.org/data/2.5/weather?q=houston,uk&appid=YOURAPIKEY&units=imperial
// Allow the user to type in the name of the city so you can search for weather using that city name.

const cityNameText = document.getElementById("cityNameText")
const submitButton = document.getElementById("submitButton")
const displayWeatherDiv = document.getElementById("displayWeatherDiv")


function getWeatherInfo(cName) {
    const WEATHER_URL = `https://api.openweathermap.org/data/2.5/weather?q=${cName}&appid=15db85aec88171ae528b5d10383b2d7e&units=imperial`
    fetch(WEATHER_URL)
        .then(response => {
            return response.json()
        }).then(result => {
            console.log(result)
            displayWeather(result)
        }).catch(error => {
            console.log(error)
        })
}

function displayWeather(info) {
    const mainInfo = info.main
    const weatherInfoLabel = ` <h2>${info.name}</h2> 
                            <label><b>Current Temperature: </b> ${mainInfo.temp} °F</label>
                            <label><b>Min Temperature: </b> ${mainInfo.temp_min} °F</label>
                            <label><b>Max Temperature: </b> ${mainInfo.temp_max} °F</label>
                            <label><b>Pressure: </b> ${mainInfo.pressure} Pa</label> `
    displayWeatherDiv.innerHTML = weatherInfoLabel
}

getWeatherInfo(function(result) {
    displayWeather(result)
})

submitButton.addEventListener('click', function() {
    const cityName = cityNameText.value
    getWeatherInfo(cityName)
})
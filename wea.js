// API key from OpenWeatherMap
const API_KEY = "YOUR_API_KEY";


// selecting elements from HTML
const input = document.getElementById("cityInput");
const btn = document.getElementById("searchBtn");
const box = document.getElementById("weatherBox");

const cityName = document.getElementById("cityName");
const temp = document.getElementById("temp");
const desc = document.getElementById("desc");
const humidity = document.getElementById("humidity");


// when button is clicked
btn.addEventListener("click", () => {
    const city = input.value;
    getWeather(city);
});


// async function to call API
async function getWeather(city) {

    try {

        const url =
            `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;

        const response = await fetch(url);

        const data = await response.json();

        cityName.innerText = data.name;
        temp.innerText = `Temperature: ${data.main.temp}°C`;
        desc.innerText = `Condition: ${data.weather[0].description}`;
        humidity.innerText = `Humidity: ${data.main.humidity}%`;

        box.classList.remove("hidden");

    } catch (error) {
        alert("City not found!");
    }
}

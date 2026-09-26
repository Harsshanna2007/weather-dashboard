const apiKey = "a88309f99a0971a4eb393a27afad3335";

async function getWeather() {

    const city = document.getElementById("cityInput").value.trim();

    if (city === "") {
        document.getElementById("error").innerText =
            "Please enter a city name";
        return;
    }

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(city)}&appid=${apiKey}&units=metric`;

    try {

        const response = await fetch(url);

        const data = await response.json();

        console.log(data);

        if (!response.ok) {
            throw new Error(data.message);
        }

        document.getElementById("cityName").innerText =
            data.name;

        document.getElementById("temperature").innerText =
            `Temperature: ${data.main.temp} °C`;

        document.getElementById("humidity").innerText =
            `Humidity: ${data.main.humidity}%`;

        document.getElementById("wind").innerText =
            `Wind Speed: ${data.wind.speed} m/s`;

        document.getElementById("description").innerText =
            `Weather: ${data.weather[0].description}`;

        document.getElementById("error").innerText = "";

    } catch (error) {

        document.getElementById("error").innerText =
            `Error: ${error.message}`;
    }
}

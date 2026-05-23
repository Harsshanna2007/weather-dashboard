const apiKey = "PASTE_YOUR_API_KEY_HERE";

async function getWeather() {

    const city = document.getElementById("cityInput").value;

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    try {

        const response = await fetch(url);

        if (!response.ok) {
            throw new Error("City not found");
        }

        const data = await response.json();

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
            error.message;
    }
}

import { useState, useEffect } from "react";
import react from "react";

function Weather() {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState(null);

  const API_KEY = "87e143bfffb49df9c52ae061d81c2f1f";

  async function getWeather() {
    if (!city) return;

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;

    try {
      const response = await fetch(url);
      const data = await response.json();

      if (response.ok) {
        setWeather(data);
      } else {
        alert("City not found");
      }
    } catch (error) {
      console.error("Error fetching data: ", error);
    }
  }

  return (
    <>
      <label>
        Enter City:
        <input
          type="text"
          placeholder="E.g Nairobi"
          value={city}
          onChange={(event) => setCity(event.target.value)}
        />
      </label>

      <button onClick={getWeather}>Get Weather!</button>

      {weather && (
        <div>
          <h2>Weather in {city}</h2>
          <p>Temperature: {weather.main.temp}°C</p>
          <p>Humidity: {weather.main.humidity}%</p>
          <p>Wind Speed: {weather.wind.speed} m/s</p>
        </div>
      )}
    </>
  );
}

export default Weather;

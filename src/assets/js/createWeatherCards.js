export const createWeatherCards = (array) => {
  const hourlyWeatherContainer = document.getElementById("hourly-weather");

  for (let i = 0; i <= 4; i++) {
    const hourlyWeatherContainer = document.getElementById("hourly-weather");
    const dailyWeatherContainer = document.createElement("div");
    dailyWeatherContainer.id = `day${i}-cards`;
    dailyWeatherContainer.classList.add("daily-weather-container");

    for (let j = 0; j <= 8; j++) {
      const hourlyWeatherCard = document.createElement("div");
      hourlyWeatherCard.classList.add("hourly-weather-card");

      const pTime = document.createElement("p");
      pTime.classList.add("time");

      const weatherIcon = document.createElement("img");

      const pTemperature = document.createElement("p");
      pTemperature.classList.add("hourly-weather-temperature");

      hourlyWeatherCard.appendChild(pTime);
      hourlyWeatherCard.appendChild(weatherIcon);
      hourlyWeatherCard.appendChild(pTemperature);
      dailyWeatherContainer.appendChild(hourlyWeatherCard);
    }

    hourlyWeatherContainer.appendChild(dailyWeatherContainer);
  }
};

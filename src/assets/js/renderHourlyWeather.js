export const renderHourlyWeather = (array) => {
  let cardsArray = []; /* contains all hourly weather data */
  let timeOfDay;
  /* loops through the chunkedArray */
  for (let i = 0; i <= array.length - 1; i++) {
    /* Removes all excess cards */
    const dayNCards = document.getElementById(`day${i}-cards`).childNodes;
    if (array[i].length < dayNCards.length) {
      const numberOfExcessCardsToRemove = dayNCards.length - array[i].length;
      for (let l = 0; l <= numberOfExcessCardsToRemove - 1; l++) {
        dayNCards[0].remove();
      }
    }
    /* loops through the hourly weather */
    for (let j = 0; j <= array[i].length - 1; j++) {
      let card = [];
      const forecast = array[i][j];

      const unixTimestamp = forecast.dt;
      const date = new Date(unixTimestamp * 1000);
      const hours = date.getHours();
      const time = `${hours}:00`;
      const pTime = document.createElement("p");
      pTime.classList.add("time");
      pTime.innerText = time;
      card.push(pTime);

      const icon = forecast.weather[0].icon;
      const weatherIcon = document.createElement("img");
      weatherIcon.src = `http://openweathermap.org/img/wn/${icon}@2x.png`;
      card.push(weatherIcon);

      const temperature = Math.round(forecast.main.temp * 10) / 10;
      const pTemperature = document.createElement("p");
      pTemperature.classList.add("hourly-weather-temperature");
      pTemperature.innerText = `${temperature} °C`;
      card.push(pTemperature);
      cardsArray.push(card);
    }
  }
  /* Renders the data */
  const cards = document.querySelectorAll(".hourly-weather-card");
  for (let k = 0; k <= cards.length - 1; k++) {
    const currentCard = cards[k];
    while (currentCard.firstChild) currentCard.firstChild.remove(); //removes previous data
    cardsArray[k].forEach((data) => {
      currentCard.appendChild(data);
    });
  }
};

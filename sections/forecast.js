function displayForecast(city) {
  let forecastEndpoint = getForecastEndpoint(city);

  fetch(forecastEndpoint)
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      let forecastList = data.list;
      let weatherForecats = document.querySelector(".weather-forecast");
      weatherForecats.innerHTML = "";
      forecastList.forEach((forecast) => {
        console.log(forecast);

        //object distractory
        let { dt, main, weather } = forecast;

        let dayOfTheWeek = getDayOfTheWeek(dt);
        let hours = getHour(dt);

        let weatherIcon = getWeatherIcon(weather[0].icon);

        let temperature = Math.round(main.temp);
        let realFeel = Math.round(main.feels_like);

        let weatherDescription = weather[0].description;

        weatherForecats.innerHTML += `
        <h3>${dayOfTheWeek}</h3>
        <div class="forecast">
            <div class="time">${hours}</div>
            <img src="${weatherIcon}" alt="" />
            <strong>${temperature}°C</strong>
            <p>${weatherDescription}</p>
            <p>Real feel: <strong>${realFeel}C</strong></p>
        </div>`;
      });
    });
}
